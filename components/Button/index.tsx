import Image from "next/image";
import { ButtonHTMLAttributes, ReactNode } from "react";
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
  ...rest
}: ButtonProps) => {
  const baseStyles =
    "inline-flex items-center justify-center gap-2 w-36 h-12 px-4 py-2 rounded-full text-sm font-bold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 cursor-pointer";
  const filledStyles =
    "bg-primary text-text-secondary hover:bg-primary/90 focus:ring-primary";
  const outlinedStyles =
    "border border-primary text-primary hover:bg-primary/10 focus:ring-secondary";

  const variantStyles = variant === "filled" ? filledStyles : outlinedStyles;

  return (
    <button className={clsx(baseStyles, variantStyles, className)} {...rest}>
      {startIcon && (
        <Image src={startIcon} alt="start_icon" width={16} height={16} />
      )}
      <span>{title}</span>
      {endIcon && <Image src={endIcon} alt="end_icon" width={16} height={16} />}
    </button>
  );
};
