import React, { HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  leading?: boolean;
  variant?:
    | "h1"
    | "h2"
    | "h3"
    | "h4"
    | "h5"
    | "h6"
    | "paragraph"
    | "small"
    | "smallBold";
  error?: boolean;
}

export default function Typography({
  children,
  variant = "paragraph",
  leading = true,
  error,
  ...props
}: TypographyProps) {
  const variants = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    paragraph: "text-base font-medium",
    small: "text-sm",
    smallBold: "text-sm font-semibold",
  };

  return (
    <div
      {...props}
      className={`cursor-default ${error && "text-error"} ${
        leading && "leading"
      } ${variants[variant]}`}
    >
      {children}
    </div>
  );
}
