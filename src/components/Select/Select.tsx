import React, { SelectHTMLAttributes, forwardRef } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}

const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ children, label, ...props }, ref) => {
    return (
      <div className="grid gap-1">
        <label className="block text-sm font-medium">{label}</label>
        <select
          {...props}
          ref={ref}
          className="block w-full border border-dark/20 rounded-xs py-2.5 px-3 leading-6 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        >
          {children}
        </select>
      </div>
    );
  }
);

export default Select;
