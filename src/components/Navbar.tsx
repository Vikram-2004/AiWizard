import Link from "next/link";
import { FC } from "react";
import { Button } from "./ui/button";

interface NavbarProps {}

const Navbar: FC<NavbarProps> = ({}) => {
  return (
    <nav className="flex justify-between items-center bg-[#F4EEFF] h-14 px-40">
      <div className="text-[#424874] font-medium">
        <h1 className="text-3xl">AiWizard</h1>
      </div>
      <div className="flex gap-8 text-2xl text-[#424874] font-medium ">
        <Link href="">
          <Button size="lg" variant="outline">
            hello
          </Button>
        </Link>
        <Link href="">About us</Link>
        <Link href="">About us</Link>
      </div>
    </nav>
  );
};

export default Navbar;
