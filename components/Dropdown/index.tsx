import { SelectHTMLAttributes } from "react";
import Image, { StaticImageData } from "next/image";
import clsx from "clsx";

type Option = {
  value: string;
  label: string;
};

type DropdownProps = {
  label?: string;
  error?: string;
  options: Option[];
  startIcon?: string | StaticImageData;
  endIcon?: string | StaticImageData;
} & SelectHTMLAttributes<HTMLSelectElement>;

export const Dropdown = ({
  label,
  error,
  options,
  startIcon,
  endIcon,
  className,
  ...rest
}: DropdownProps) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      <label className="text-sm font-medium text-text-primary">{label}</label>
      <div
        className={clsx(
          "flex items-center border rounded-md px-3 py-2 bg-background transition-all",
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

        <select
          aria-label={label}
          className="flex-1 bg-transparent outline-none text-sm text-text-primary cursor-pointer"
          {...rest}
        >
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
