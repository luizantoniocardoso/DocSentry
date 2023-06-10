import React, { LiHTMLAttributes } from "react";

export default function ItemList({
  children,
  ...props
}: LiHTMLAttributes<HTMLLIElement>) {
  return (
    <li
      {...props}
      className="block w-full border border-dark/20 rounded-xs py-2.5 px-3"
    >
      {children}
    </li>
  );
}
