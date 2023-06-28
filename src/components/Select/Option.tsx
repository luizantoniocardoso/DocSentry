import React, { OptionHTMLAttributes } from "react";

export default function Option({
  children,
  ...props
}: OptionHTMLAttributes<HTMLOptionElement>) {
  return (
    <option {...props} className="m-4 bg-gray-100">
      {children}
    </option>
  );
}
