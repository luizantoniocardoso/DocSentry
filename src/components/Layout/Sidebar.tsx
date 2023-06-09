"use client";
import React, { ReactNode, useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  CalendarIcon,
  ChevronDoubleLeftIcon,
  ChevronDoubleRightIcon,
  FolderIcon,
  HomeIcon,
  UserGroupIcon,
} from "@heroicons/react/24/outline";
import { usePathname } from "next/navigation";
import Box from "../Box/Box";
import { parseCookies } from "nookies";

type NavItem = {
  label: string;
  href: string;
  icon: ReactNode;
};

export const routes: NavItem[] = [
  {
    label: "Dashboard",
    href: "/dashboard",
    icon: <HomeIcon className="w-6 h-6" />,
  },
  {
    label: "Documentos",
    href: "/docs",
    icon: <FolderIcon className="w-6 h-6" />,
  },
  {
    label: "Usuários",
    href: "/users",
    icon: <UserGroupIcon className="w-6 h-6" />,
  },
];

type Props = {
  navItems?: NavItem[];
};

const Sidebar = ({ navItems = routes }: Props) => {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const Icon = isOpen ? ChevronDoubleLeftIcon : ChevronDoubleRightIcon;

  const sidebarClass = `bg-secondary text-zinc-50 fixed md:static md:translate-x-0 z-0 transition-all duration-300 ease-in-out ${
    isOpen ? "w-[300px]" : "w-16"
  } }`;

  const logoContainerClass = `flex items-center border-b border-b-indigo-800 transition-none ${
    isOpen ? "p-4 justify-between" : "py-4 justify-center"
  }`;

  const navListClass = `my-2 flex flex-col gap-2 items-stretch`;

  if (pathname === "/login") {
    return null;
  }

  const { user: user } = parseCookies();
  const userData = JSON.parse(user);

  return (
    <div className={sidebarClass}>
      <div
        className={`hidden md:flex flex-col justify-between h-screen md:h-full sticky inset-0`}
      >
        {/* logo and collapse button */}
        <div className={logoContainerClass}>
          {isOpen && <img className="w-20" src="/img/logo.jpeg" />}
          <button
            className="grid place-content-center hover:bg-indigo-800 w-10 h-10 rounded-full opacity-0 md:opacity-100"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Icon className="w-5 h-5" />
          </button>
        </div>
        <nav className="flex-grow">
          <ul className={navListClass}>
            {navItems.map((item, index) => {
              const listItemClass = `text-light hover:bg-primary flex transition-colors duration-300 ${
                isOpen
                  ? "rounded-xs p-2 mx-3 gap-4"
                  : "rounded-full p-2 mx-3 w-10 h-10"
              }`;
              return (
                <li key={index} className={listItemClass}>
                  <Link
                    href={item.href}
                    className={`flex gap-2 h-full ${isOpen && "w-full"}`}
                  >
                    {item.icon} <span>{isOpen && item.label}</span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
        <div className={`grid place-content-stretch p-4`}>
          <div className="flex gap-4 items-center h-11 overflow-hidden">
            <img
              src={userData.avatar}
              height={36}
              width={36}
              alt="profile image"
              className="rounded-full"
            />
            {isOpen && (
              <div className="flex flex-col">
                <span className="text-indigo-50 my-0">{userData.name}</span>
                <Link href="/" className="text-indigo-200 text-sm">
                  View Profile
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
