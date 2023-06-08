import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelColor?: "white" | "black";
}

export default function Input({
  labelColor = "black",
  label,
  ...props
}: InputProps) {
  const labelColorClasses = {
    white: "text-light",
    black: "text-dark",
  };

  return (
    <div className={labelColorClasses[labelColor]}>
      <label htmlFor={label} className="block text-sm font-medium leading">
        {label}
      </label>
      <div className="relative rounded shadow-sm">
        <input
          {...props}
          type="text"
          id={label}
          className="block w-full rounded-xs border-0 py-2.5 px-3 leading-6 placeholder:text-gray-400 sm:text-sm sm:leading-6"
        />
      </div>
    </div>
  );
}
