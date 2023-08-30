import { SignUp } from "@clerk/nextjs";
import { FC } from "react";

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="bg-gradient-to-br from-pink-500 to-rose-500 w-screen h-screen flex justify-center items-center">
      <SignUp />
    </div>
  );
};

export default page;
