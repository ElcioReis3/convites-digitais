"use client";
import { ButtonItem } from "../ButtonItem";

export const Banner = () => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/VT63KBD?afid=hP8R7Y3k");
  };
  return (
    <div className="w-full max-w-3xl m-auto p-3">
      <div className="text-center">
        Acesse agora os melhores paks de convites, imagens png do Brasil e
        comece seu negócio HOJE!{" "}
        <span className="text-bold text-purple-500">
          {" "}
          Clique no botão abaixo
        </span>
      </div>
      <ButtonItem text="EU QUERO" />
    </div>
  );
};
