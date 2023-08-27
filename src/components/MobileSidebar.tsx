"use client";
import { FC, useEffect, useState } from "react";
import { BiMenuAltLeft } from "react-icons/bi";
import { Button } from "./ui/button";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./sidebar";

interface MobileSidebarProps {}

const MobileSidebar: FC<MobileSidebarProps> = ({}) => {
  const [isMounted, setIsMounted] = useState<boolean>(false);
  useEffect(() => {
    setIsMounted(true);
  }, []);
  if (!isMounted) {
    return null;
  }

  return (
    <div className="md:hidden transition">
      <Sheet>
        <SheetTrigger>
          <Button size="icon" variant="ghost" className="md:hidden">
            <BiMenuAltLeft size="30" />
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="p-0 bg-gray-900">
          <Sidebar />
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileSidebar;
