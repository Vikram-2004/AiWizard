import { FC } from "react";
import SlantedDiv from "./SlantedDivlr";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { Josefin_Sans } from "next/font/google";
import { useRouter } from "next/navigation";
import Link from "next/link";

interface HeroProps {}
const jose = Josefin_Sans({
  weight: ["200", "500", "400", "600", "700"],
  subsets: ["latin"],
});
const Hero: FC<HeroProps> = ({}) => {
  const router = useRouter();
  return (
    <>
      <nav className="flex justify-center  h-16  fixed z-10 w-full bg-[#f3f4f6]">
        <div className="flex justify-between items-center sm:w-[70%] h-full w-full max-sm:mx-4 ">
          <div>
            <h1 className="text-gray-500 sm:text-2xl text-xl  font-semibold transition  hover:border-b-2  hover:border-gray-300">
              <span className={cn(" mr-2", jose.className)}>AW</span>AiWizard
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
      <section className=" relative pb-20 sm:h-[900px] h-[800px]  bg-cover bg-center  flex flex-col justify-center items-center text-center gap-3 bg-gradient-to-tr from-teal-400 to-cyan-500 bg-no-repeat ">
        <h1 className="sm:w-[70%] text-4xl sm:text-5xl md:text-6xl font-bold mb-4 max-sm:mx-4 text-white">
          Welcome to AiWizard
        </h1>
        <h2 className="sm:w-[70%] text-2xl sm:text-3xl md:text-4xl font-semibold mb-8 max-sm:mx-4 text-white">
          Your Magical Gift and Conversation Creator!
        </h2>
        <p className="sm:w-[70%] text-lg sm:text-xl mb-12  max-sm:mx-4 text-gray-100">
          Unlock the Power of AI for Thoughtful Gifts and Engaging Conversations
        </p>
        <Link
          href="/dashboard"
          className="bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 text-white text-md sm:text-xl font-medium py-3 px-8 rounded-full transition duration-300 ease-in-out hover:shadow-lg hover:-translate-y-2"
        >
          Start Your Magical Journey
        </Link>
        <SlantedDiv />
      </section>
    </>
  );
};

export default Hero;
