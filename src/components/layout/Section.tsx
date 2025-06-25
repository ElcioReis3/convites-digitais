"use client";
import Image from "next/image";
import { CarouselItens } from "../CarouselItens";
import { Button } from "../ui/button";

export const Section = () => {
  const handlePayment = () => {
    window.open("https://pay.kiwify.com.br/VT63KBD?afid=hP8R7Y3k");
  };
  return (
    <div>
      <div className="w-full max-w-7xl p-3 m-auto bg-purple-500">
        <div className="flex flex-col md:flex-row gap-3 items-center">
          <div className="text-xl font-semibold md:text-5xl max-w-xl text-teal-300 m-auto text-center p-3">
            Este pack exclusivo inclui diversos modelos prontos para
            personalizar com nome, idade, data, horário e local — tudo com
            apenas alguns cliques.
          </div>
          <div className="max-w-2xl">
            {" "}
            <Image
              src={"/images/images-site/imgbanner.png"}
              alt="banner"
              width={590}
              height={490}
            />
          </div>
        </div>
        <div className="">
          <CarouselItens />
          <div>
            <Button
              className="w-full flex m-auto font-semibold animate-pulse my-3 shadow-md bg-sky-400 hover:bg-sky-300 shadow-purple-300 md:text-2xl md:p-5 "
              onClick={handlePayment}
            >
              EU QUERO ACESSO VITALÍCIO
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full max-w-2xl flex gap-3 items-center justify-center p-3 m-auto">
        <Image
          src={"/images/7dias.png"}
          alt="código de defesa do consumidor"
          width={90}
          height={90}
        />
        <div className="text-sm text-muted-foreground">
          O Código de Defesa do Consumidor permite ao consumidor desistir da
          compra em até 7 dias após o recebimento do produto ou serviço, sem
          necessidade de justificar a desistência e sem custos adicionais.{" "}
        </div>
      </div>
      <div className="my-7 px-3">
        <Image
          src={"/images/images-site/imgcanva.png"}
          alt="código de defesa do consumidor"
          width={490}
          height={390}
          className="m-auto"
        />
      </div>
    </div>
  );
};
