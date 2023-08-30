"use client";
import Input from "@/components/Input";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Montserrat, Open_Sans, Outfit } from "next/font/google";
import { FC, useState } from "react";
import { OpenAI } from "openai";
import Gift from "@/components/Gift";

interface pageProps {}

const monts = Montserrat({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
});
const outfit = Outfit({
  weight: ["500", "600", "400", "800"],
  subsets: ["latin"],
});
interface input {
  relation: string;
  budget: string;
  hobbies: string;
  occation: string;
  initial: boolean;
}

const Page: FC<pageProps> = ({}) => {
  const [input, setInput] = useState<input>({
    relation: "",
    budget: "",
    hobbies: "",
    occation: "",
    initial: true,
  });
  const [gifts, setGifts] = useState<string[]>([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      setLoading(true);
      const openai = new OpenAI({
        apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY as string,
        dangerouslyAllowBrowser: true,
      });
      const prompt = `Hello AI, I'm seeking your expertise in finding the perfect gift. I need ideas for a gift for ${input.relation}. They has a deep passion for ${input.hobbies}, and they will be celebrating ${input.occation}. My budget for this gift is around ${input.budget}. I really want to make this gift meaningful and thoughtful, so I'd love your 7 creative suggestions on what I could give. Can you help inspire me with some fantastic gift ideas?`;

      const chatCompletion = await openai.chat.completions.create({
        messages: [{ role: "user", content: prompt }],
        model: "gpt-3.5-turbo",
      });

      setLoading(false);
      const data: string[] = chatCompletion.choices[0].message.content
        ?.split("\n")
        .filter(
          (data) => data != "" && data[0] >= "0" && data[0] <= "7"
        ) as string[];

      setGifts(data);
      setInput({
        relation: "",
        budget: "",
        hobbies: "",
        occation: "",
        initial: false,
      });
    } catch (error) {
      if (error instanceof OpenAI.APIError) {
        console.error(error.status);
        console.error(error.message);
        console.error(error.code);
        console.error(error.type);
      } else {
        console.log(error);
      }
    }
  };

  return (
    <main className="w-full  ">
      <h1
        className={cn(
          "sm:text-6xl text-4xl font-bold text-center pt-12  text-[#E90064]",
          monts.className
        )}
      >
        Générateur de cadeaux
      </h1>
      <form onSubmit={handleSubmit}>
        <div className={cn("pt-12 px-4 ", monts.className)}>
          <div className="w-full flex flex-col items-center gap-4">
            <div className="sm:w-[30rem] w-[95%]">
              <Input
                label="Who it's for?"
                placeholder="Wife, Friend, ..."
                value={input.relation} // string gali
                onChange={(e) => {
                  setInput({ ...input, relation: e.target.value });
                }} //func gali
                type="text"
              />
            </div>
            <div className="sm:w-[30rem] w-[95%]">
              <Input
                label="What is your Budget?"
                placeholder="₹400, ₹1000, ..."
                value={input.budget} // gali
                onChange={(e) => {
                  setInput({ ...input, budget: e.target.value });
                }} //gali
                type="text"
              />
            </div>
            <div className="sm:w-[30rem] w-[95%]">
              <Input
                label="What do they like?"
                placeholder="Music, sports, ..."
                value={input.hobbies} //galie
                onChange={(e) => {
                  setInput({ ...input, hobbies: e.target.value });
                }} // galie
                type="text"
              />
            </div>
            <div className="sm:w-[30rem] w-[95%]">
              <Input
                label="What is the occation?"
                placeholder="Birthday, Aniversary, ..."
                value={input.occation} //gali
                onChange={(e) => {
                  setInput({ ...input, occation: e.target.value });
                }} // gali
                type="text"
              />
            </div>
          </div>
          <div className="w-full flex justify-center items-center pt-4">
            <div className="sm:w-[30rem] w-[95%] pt-4">
              <Button
                type="submit"
                className="w-full text-white text-lg py-5 bg-gradient-to-r from-[#C373F2] to-[#F977CE] "
              >
                Generate Gifts
              </Button>
            </div>
          </div>
        </div>
      </form>
      {!loading ? (
        <Gift gifts={gifts} initial={input.initial} />
      ) : (
        <div
          role="status"
          className="flex flex-col gap-2 w-full items-center justify-center py-12"
        >
          <svg
            aria-hidden="true"
            className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
            viewBox="0 0 100 101"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
              fill="currentColor"
            />
            <path
              d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
              fill="currentFill"
            />
          </svg>
          <p className="text-sm text-gray-400 animate-pulse">
            please wait a moment...
          </p>
          <span className="sr-only">Loading...</span>
        </div>
      )}
    </main>
  );
};

export default Page;
