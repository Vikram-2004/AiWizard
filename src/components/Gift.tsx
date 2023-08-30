import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import { FC } from "react";

interface GiftProps {
  gifts: string[];
  loading: boolean;
}

const monts = Montserrat({
  weight: ["500", "400", "600", "700"],
  subsets: ["latin"],
});

const Gift: FC<GiftProps> = ({ gifts, loading }) => {
  return (
    <div className={cn("flex justify-center w-full  pt-12 ")}>
      <div
        className={cn(
          "xl:w-[60rem] border-2 border-[#DD2476] py-8 lg:w-[30rem] w-[95%] mb-8 bg-zinc-50 rounded-lg",
          monts.className
        )}
      >
        <h1 className="text-lg text-gray-700 uppercase pl-8 font-medium">
          the generated gifts are :
        </h1>
        <div className="pl-8 ">
          <ul className="list-outside text-md py-4 text-gray-500">
            {gifts.map((gift) => (
              <li key={gift[0]} className="py-2">
                {gift}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Gift;
