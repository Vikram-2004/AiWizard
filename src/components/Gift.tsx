import { cn } from "@/lib/utils";
import { FC } from "react";

interface GiftProps {
  gifts: string[][];
  initial: boolean;
}

const Gift: FC<GiftProps> = ({ gifts, initial }) => {
  return (
    <div
      className={cn(
        " justify-center w-full  pt-12 ",
        initial ? "hidden" : "flex"
      )}
    >
      <div className="xl:w-[50rem] py-8 lg:w-[30rem] w-[95%] mb-8 mx-2">
        <h1 className="text-xl  uppercase sm:px-8 px-4 font-bold text-[#ff59a4]">
          the generated gifts are :
        </h1>
        <div className="flex w-full  flex-col gap-4 py-4 ">
          {gifts.map((gift) => {
            return (
              <div
                className="w-full border-2 rounded-lg sm:px-8 px-4 py-4 bg-zinc-50"
                key={gift[0]}
              >
                <p className=" font-bold text-gray-700">{gift[0]}</p>
                <p className="py-3 text-gray-500">{gift[1]}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Gift;
