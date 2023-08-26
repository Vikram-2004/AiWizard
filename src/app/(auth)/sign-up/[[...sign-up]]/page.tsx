import { SignUp } from "@clerk/nextjs";

export default function Page() {
  return (
    <div className="bg-gradient-to-r from-rose-400 to-pink-500 flex justify-center items-center h-screen">
      <SignUp />
    </div>
  );
}
