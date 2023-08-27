import { FC } from "react";

import { UserButton } from "@clerk/nextjs";
import MobileSidebar from "./MobileSidebar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
      <div className="flex justify-end w-full">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
};

export default Navbar;
