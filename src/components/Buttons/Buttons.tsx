import { ButtonHTMLAttributes, ReactNode } from "react";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  label?: string;
  children?: ReactNode;
}

export default function Button({
  children,
  label,
  name,
  id,
  ...props
}: ButtonProps) {
  return (
    <button
      {...props}
      className="block w-full rounded-xs border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
    >
      {children}
    </button>
  );
}
