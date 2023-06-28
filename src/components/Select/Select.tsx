import React, { SelectHTMLAttributes } from "react";

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
}
export default function Select({ children, label, ...props }: SelectProps) {
  return (
    <>
      <label className="block text-sm font-medium">{label}</label>
      <select
        {...props}
        className="block w-full border border-dark/20 rounded-xs py-2.5 px-3 leading-6 placeholder:text-gray-400 sm:text-sm sm:leading-6"
      >
        {children}
      </select>
    </>
  );
}
