import { FC } from "react";
import Link from "next/link";
import BottomwaveWhite from "./BottomwaveWhite";
import NavbarHero from "./NavbarHero";

interface HeroProps {}

const Hero: FC<HeroProps> = ({}) => {
  return (
    <>
      <NavbarHero />
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
        <BottomwaveWhite />
      </section>
    </>
  );
};

export default Hero;
