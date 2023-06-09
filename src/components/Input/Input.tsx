import { InputHTMLAttributes } from "react";
import Typography from "../Typography/Typography";
import React from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  labelColor?: "white" | "black";
  errorMessage?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ labelColor = "black", label, errorMessage, ...props }, ref) => {
    const labelColorClasses = {
      white: "text-light",
      black: "text-dark",
    };

    return (
      <div className={labelColorClasses[labelColor]}>
        <label htmlFor={label} className="block text-sm font-medium leading">
          {label}
        </label>
        <div className="relative rounded grid gap-1">
          <input
            ref={ref}
            {...props}
            id={label}
            className="block w-full rounded-xs border-0 py-2.5 px-3 leading-6 placeholder:text-gray-400 sm:text-sm sm:leading-6"
          />
          <div>
            {errorMessage && (
              <Typography error={!!errorMessage} variant="smallBold">
                {errorMessage}
              </Typography>
            )}
          </div>
        </div>
      </div>
    );
  }
);

export default Input;
