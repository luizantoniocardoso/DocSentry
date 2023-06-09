import React from "react";

export default function Navbar() {
  // const Icon = isOpen ? ChevronDoubleRightIcon : ChevronDoubleLeftIcon;
  return (
    <button
      className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
      // onClick={() => setIsOpen(!isOpen)}
    >
      {/* <Icon className="w-5 h-5" /> */}
    </button>
  );
}
