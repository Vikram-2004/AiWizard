import { FC } from "react";

import MobileSidebar from "./MobileSidebar";
import { UserButton } from "@clerk/nextjs";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex flex-row-reverse w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
