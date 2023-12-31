"use client";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FC } from "react";

import { IconType } from "react-icons";
import { LuLayoutDashboard } from "react-icons/lu";
import { AiOutlineGift } from "react-icons/ai";
import { BsChatLeftText, BsCodeSlash, BsImage } from "react-icons/bs";

import { usePathname } from "next/navigation";

interface sidebarProps {}

interface route {
  label: string;
  icon: IconType;
  href: string;
  color: string;
}

const routes: route[] = [
  {
    label: "Dashboard",
    icon: LuLayoutDashboard,
    href: "/dashboard",
    color: "text-sky-500",
  },
  {
    label: "Chat Completion",
    icon: BsChatLeftText,
    href: "/chat-completion",
    color: "text-violet-500",
  },
  {
    label: "Gift Generator",
    icon: AiOutlineGift,
    href: "/gift-generator",
    color: "text-rose-500",
  },
  {
    label: "Image Generator",
    icon: BsImage,
    href: "/image-generator",
    color: "text-teal-500",
  },
  {
    label: "Code Generator",
    icon: BsCodeSlash,
    href: "/code-generator",
    color: "text-yellow-500",
  },
];

const Sidebar: FC<sidebarProps> = ({}) => {
  const pathname: string = usePathname();
  return (
    <div className="flex flex-col py-4 h-full w-full text-white space-y-4">
      <div className="py-2 px-2">
        <Link href="/" className="flex items-center pl-7  mb-12 ">
          <h1 className="text-2xl font-bold ">
            <span className="jose ">AW</span> AiWizard
          </h1>
        </Link>
        <div className="space-y-2">
          {routes.map((route: route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "flex text-sm group py-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg pl-7 transition",
                pathname == route.href ? "bg-white/10" : ""
              )}
            >
              <div className="flex items-center">
                {<route.icon className={cn("h-5 w-5 mr-3", route.color)} />}
                <p>{route.label}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
