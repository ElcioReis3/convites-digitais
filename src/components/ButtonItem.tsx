"use client";
import { Button } from "./ui/button";

type Props = {
  text: string;
  animate?: boolean;
};

export const ButtonItem = ({ text }: Props) => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/VT63KBD?afid=hP8R7Y3k");
  };
  return (
    <Button
      onClick={handlePayment}
      className="w-full flex m-auto font-semibold animate-bounce mt-7 shadow-md text-xl shadow-purple-300 md:text-3xl md:p-5"
    >
      {text}
    </Button>
  );
};
