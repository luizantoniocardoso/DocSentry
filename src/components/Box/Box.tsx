import React, { ReactNode } from "react";

export default function Box({ children }: Children) {
  return <div className="bg-light p-10 rounded">{children}</div>;
}
