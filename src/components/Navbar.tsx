import { FC } from "react";

import MobileSidebar from "./MobileSidebar";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <div className="flex items-center p-4">
      <MobileSidebar />
    </div>
  );
};

export default Navbar;
