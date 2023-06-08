import React, { HTMLAttributes, ReactNode } from "react";

interface TypographyProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  leading?: boolean;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6" | "paragraph" | "small";
}

export default function Typography({
  children,
  variant = "paragraph",
  leading = true,
  ...props
}: TypographyProps) {
  const variants = {
    h1: "text-4xl font-bold",
    h2: "text-3xl font-bold",
    h3: "text-2xl font-bold",
    h4: "text-xl font-bold",
    h5: "text-lg font-bold",
    h6: "text-base font-bold",
    paragraph: "text-base",
    small: "text-sm",
  };

  return (
    <div
      {...props}
      className={`cursor-default ${leading && "leading"} ${variants[variant]}`}
    >
      {children}
    </div>
  );
}
