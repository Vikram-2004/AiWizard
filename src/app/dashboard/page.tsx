import { UserButton } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-screen flex bg-zinc-900 h-screen">
      <div className="md:flex flex-col w-72 h-full hidden">hello</div>
      <div className="bg-zinc-100 rounded-2xl mt-8 mx-4 mb-4">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam quod
        cumque, aperiam debitis neque delectus totam velit odit quibusdam
        itaque? Est enim dolorum, aliquid ea officia eligendi consequuntur
        commodi. Numquam.
      </div>
    </div>
  );
};

export default page;
