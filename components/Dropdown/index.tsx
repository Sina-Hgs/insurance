import { SelectHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

export type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label?: string;
  error?: string;
  options: Option[];
  placeholder?: string;
  startIcon?: string | StaticImageData;
  endIcon?: string | StaticImageData;
} & Omit<SelectHTMLAttributes<HTMLSelectElement>, "value"> & {
    value?: string;
  };

export const Dropdown = ({
  label,
  error,
  options,
  placeholder = "انتخاب کنید...",
  startIcon,
  endIcon,
  className,
  disabled,
  value = "",
  ...rest
}: DropdownProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label className="text-sm font-medium text-text-primary">{label}</label>
      )}
      <div
        className={clsx(
          "flex items-center border rounded-lg px-3 py-2 bg-background transition-all",
          error
            ? "border-error"
            : "border-secondary focus-within:border-primary",
          disabled && "opacity-50 cursor-not-allowed",
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

        <select
          aria-label={label}
          disabled={disabled}
          value={value}
          className={clsx(
            "flex-1 bg-transparent outline-none text-sm text-text-primary py-2",
            disabled ? "cursor-not-allowed" : "cursor-pointer"
          )}
          {...rest}
        >
          <option value="" disabled>
            {placeholder}
          </option>
          {options.map(({ value, label }) => (
            <option key={value} value={value}>
              {label}
            </option>
          ))}
        </select>

        {endIcon && (
          <Image src={endIcon} alt="" width={16} height={16} className="ml-2" />
        )}
      </div>

      <div className="h-3">
        {error && <span className="text-xs text-error">{error}</span>}
      </div>
    </div>
  );
};
