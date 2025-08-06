import { InputHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type InputProps = {
  label?: string;
  error?: string;
  startIcon?: string | StaticImageData;
  endIcon?: string | StaticImageData;
} & InputHTMLAttributes<HTMLInputElement>;

export const Input = ({
  label,
  error,
  startIcon,
  endIcon,
  className,
  ...rest
}: InputProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <div
        className={clsx(
          "flex items-center border rounded-md px-3 py-4 bg-background transition-all",
          error
            ? "border-error"
            : "border-secondary focus-within:border-primary",
          className
        )}
      >
        {startIcon && (
          <Image
            src={startIcon}
            alt=""
            width={16}
            height={16}
            className="mr-2"
          />
        )}

        <input
          aria-label={label}
          className="flex-1 outline-none bg-transparent text-sm text-text-primary placeholder:text-text-trinary"
          {...rest}
        />

        {endIcon && (
          <Image src={endIcon} alt="" width={16} height={16} className="ml-2" />
        )}
      </div>

      <div className="h-3">
        {error && (
          <span className="text-xs text-error  bg-gradient-to-r from-[rgba(255,255,255,0.6)] via-[rgba(255,255,255,0.6)] to-[rgba(255,255,255,0.6)] backdrop-blur-lg">
            {error}
          </span>
        )}
      </div>
    </div>
  );
};
