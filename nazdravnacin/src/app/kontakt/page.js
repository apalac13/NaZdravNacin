"use client";
import Form from "@/components/Form";
import Informations from "@/components/Informations";
import { useSearchParams } from "next/navigation";
import Link from "next/link";

export default function Kontakt() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");

  const config = {
    kontakt: {
      title: "KONTAKT",
      description:
        "Kontaktirajte nas, a mi ćemo vam se javiti u najkraćem mogućem roku",
      showSelect: false,
      options: [],
      email: "programinazdravnacin@gmail.com",
      points: [
        "Pošaljite nam poruku.",
        "Odgovorit ćemo u najkraćem mogućem roku.",
        "Za sva pitanja stojimo vam na raspolaganju.",
      ],
    },
    program: {
      title: "PROGRAMI",
      description:
        "Pošaljite nam upit za program i odgovaramo vam u najkraćem mogućem roku",
      showSelect: true,
      selectLabel: "ODABERI PROGRAM",
      options: ["ODABERI PROGRAM", "Program 1", "Program 2", "Program 3"],
      email: "programinazdravnacin@gmail.com",
      points: [
        "Odgovaramo na upite u roku 24h.",
        "Program će biti prilagođen vašim ciljevima.",
        "Rado ćemo odgovoriti na sva pitanja.",
      ],
    },
    tjednizdravlja: {
      title: "REZERVACIJE ZA TJEDNE ZDRAVLJA IZLETI",
      description:
        "Pošaljite upit za rezervaciju na vrijeme i osigurajte svoje mjest za tjedan zdravlja u Istri",
      warning: "Broj mjesta je ograničen",
      showSelect: true,
      selectLabel: "ODABERI DATUM",
      options: [
        "ODABERI DATUM",
        "27.09 - 4.10.2026",
        "04.10 - 11.10.2026",
        "11.10 - 18.10.2026",
        "18.10 - 25.10.2026",
        "25.10 - 01.11.2026",
        "04.04 - 11.04.2027",
        "11.04 - 18.04.2027",
        "18.04 - 25.04.2027",
        "25.04 -  02.05.2027",
        "02.05 - 09.05.2027",
        "09.05 - 16.05.2027",
        "16.05 - 23.05.2027",
        "23.05 - 30.05.2027",
        "30.05 - 06.06.2027",
      ],
      email: "izletinazdravnacin@gmail.com",
      points: [
        "Nakon prijave kontaktirat ćemo vas unutar 24h.",
        "Rezervacija je potvrđena nakon kontakta i uplate akontacije.",
        "Za sva pitanja stojimo vam na raspolaganju.",
      ],
    },
  };

  const currentConfig = config[type] || config.kontakt;

  return (
    <div className="w-full h-min-lvh h-full py-70 flex flex-col gap-25 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <Link href={"/"}>
          <p className="cursor-pointer hover:text-gray-30 flex gap-1 hover:animate-arrow-move">
            <span className="inline-block hover:animate-arrow-move">
              &#8592;
            </span>
            Povratak na početnu
          </p>
        </Link>
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-lg text-green-10 font-medium">
            {currentConfig.title}
          </p>
          <p className="text-xl font-semibold">{currentConfig.description}</p>
          <p className="text-xl font-medium">{""}</p>
          {currentConfig.warning && (
            <p className="text-md font-medium text-green-10">
              Broj mjesta je ograničen
            </p>
          )}
        </div>
      </div>
      <div className="w-full flex gap-9 items-center justify-center">
        <Form config={currentConfig} />
        <Informations config={currentConfig} />
      </div>
    </div>
  );
}
