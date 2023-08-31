import { FC } from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface NavbarHeroProps {}

const NavbarHero: FC<NavbarHeroProps> = ({}) => {
  const router = useRouter();
  return (
    <nav className="flex justify-center  h-16  fixed z-10 w-full bg-[#f3f4f6]">
      <div className="flex justify-between items-center sm:w-[70%] h-full w-full max-sm:mx-4 ">
        <div>
          <h1 className="text-gray-500 sm:text-2xl text-xl  font-semibold transition  hover:border-b-2  hover:border-gray-300">
            <span className=" mr-2">AW</span>AiWizard
          </h1>
        </div>
        <div className="flex gap-4">
          <Button
            className="sm:px-8 sm:py-1  text-lg bg-gray-500 text-white transition duration-150 hover:border hover:border-gray-500 "
            variant="outline"
            onClick={() => router.push("/dashboard")}
          >
            Dashboard
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default NavbarHero;
