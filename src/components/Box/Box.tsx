import React, { ReactNode } from "react";

export default function Box({ children }: Children) {
  return <div className="p-8 rounded shadow-lg bg-primary/70">{children}</div>;
}
