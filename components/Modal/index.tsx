"use client";

import { useEffect, useRef } from "react";
import clsx from "clsx";

type ModalProps = {
  visible: boolean;
  onClose: () => void;
  children: React.ReactNode;
  className?: string;
};

export const Modal = ({
  visible,
  onClose,
  children,
  className,
}: ModalProps) => {
  const modalRef = useRef<HTMLDivElement>(null);

  // Close modal on click outside content
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    }

    if (visible) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [visible, onClose]);

  if (!visible) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-gradient-to-r from-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.6)] backdrop-blur-lg overflow-hidden"
      role="dialog"
      aria-modal="true"
    >
      <div
        ref={modalRef}
        className={clsx(
          "bg-background rounded-xl p-6 max-w-md w-full relative shadow-2xl",
          className
        )}
      >
        <button
          aria-label="Close modal"
          onClick={onClose}
          className="absolute top-3 left-3 text-text-trinary hover:opacity-60 focus:outline-none cursor-pointer text-3xl"
        >
          &#x2715;
        </button>
        {children}
      </div>
    </div>
  );
};
