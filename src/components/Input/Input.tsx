import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
}

export default function Input({ label, name, ...props }: InputProps) {
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium leading">
        {label}
      </label>
      <div className="relative rounded shadow-sm">
        <input
          {...props}
          type="text"
          name={name}
          className="block w-full rounded-xs border-0 py-1.5 px-3 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
