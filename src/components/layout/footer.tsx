"use client";
import Link from "next/link";
import { Button } from "../ui/button";

export const Footer = () => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/VT63KBD?afid=hP8R7Y3k");
  };
  return (
    <footer className="">
      <div className="flex flex-col justify-center items-center gap-2 text-muted-foreground p-3">
        <Button
          className="w-full max-w-2xl flex m-auto font-semibold my-3 shadow-md shadow-purple-300 md:text-2xl md:p-5"
          onClick={handlePayment}
        >
          COMPRAR PACKS DE CONVITES DIGITAIS
        </Button>
        <div className="max-w-4xl">
          <div className="text-center">Importante</div>
          <div className="text-sm text-justify">
            O acesso aos PACKS será liberado somente após a confirmação do
            pagamento. Você receberá um e-mail com o link para download do
            e-book, que terá acesso vitalício ao conteúdo. Atualizações futuras
            poderão ser disponibilizadas sem custo adicional.
          </div>
        </div>
        <div className="max-w-4xl">
          <div className="text-center">Imagens e Preços</div>
          <div className="text-sm">As imagens neste site são ilustrativos.</div>
        </div>
      </div>
      <div className="w-full text-center bg-gray-700 p-7 text-muted-foreground font-semibold">
        Desenvolvido por{" "}
        <Link
          href={"https://www.instagram.com/elcioreis_cx/?hl=pt-br"}
          className="text-green-500"
        >
          ElcioServiçosOn
        </Link>
      </div>
    </footer>
  );
};
