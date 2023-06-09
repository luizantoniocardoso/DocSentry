import React, { HTMLAttributes, ReactNode } from "react";

interface BoxProps extends HTMLAttributes<HTMLDivElement> {
  children?: ReactNode;
  bgColor?: "primary" | "secondary" | "light";
}

export default function Box({
  children,
  bgColor = "primary",
  ...props
}: BoxProps) {
  const variants = {
    primary: "bg-primary/70",
    secondary: "bg-secondary/70",
    light: "bg-light",
  };

  return (
    <div {...props} className={`p-8 rounded shadow-lg ${variants[bgColor]}`}>
      {children}
    </div>
  );
}
