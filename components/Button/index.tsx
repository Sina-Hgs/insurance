import { ButtonHTMLAttributes } from "react";
import Image from "next/image";
import clsx from "clsx";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

type ButtonVariant = "filled" | "outlined";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  title: string;
  variant?: ButtonVariant;
  startIcon?: string | StaticImport;
  endIcon?: string | StaticImport;
}

export const Button = ({
  title,
  variant = "filled",
  startIcon,
  endIcon,
  className,
  disabled = false,
  ...rest
}: ButtonProps) => {
  const baseStyles =
    "relative inline-flex items-center justify-center w-36 h-12 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 text-nowrap whitespace-nowrap";

  const filledStyles = disabled
    ? "bg-primary text-text-secondary cursor-not-allowed opacity-40"
    : "bg-primary text-text-secondary hover:bg-primary/90 focus:ring-primary cursor-pointer";

  const outlinedStyles = disabled
    ? "border border-secondary text-secondary cursor-not-allowed opacity-75"
    : "border border-primary text-primary hover:bg-primary/10 focus:ring-secondary cursor-pointer";

  const variantStyles = variant === "filled" ? filledStyles : outlinedStyles;

  return (
    <button
      className={clsx(baseStyles, variantStyles, className)}
      disabled={disabled}
      {...rest}
    >
      {startIcon && (
        <Image
          src={startIcon}
          alt="start_icon"
          width={12}
          height={12}
          className="absolute right-4 rotate-180"
        />
      )}

      <span className="absolute left-1/2 -translate-x-1/2 ">{title}</span>

      {endIcon && (
        <Image
          src={endIcon}
          alt="end_icon"
          width={12}
          height={12}
          className="absolute left-4"
        />
      )}
    </button>
  );
};
