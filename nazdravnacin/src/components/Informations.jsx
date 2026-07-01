"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function Informations({ config }) {
  const t = useTranslations("contact.information");
  const contactInformations = [
    {
      alt: "mail",
      src: "/icons/maildark.svg",
      text: "nazdravnacin@gmail.com",
    },
    {
      alt: "mail",
      src: "/icons/maildark.svg",
      text: "izleti.nazdravnacin@gmail.com",
    },
    {
      alt: "phone",
      src: "/icons/phonedark.svg",
      text: "+385995048207",
    },
    {
      alt: "location",
      src: "/icons/locationdark.svg",
      text: "Istra",
    },
  ];
  return (
    <div className="max-w-137.5 w-full flex flex-col items-start justify-center gap-11 border border-green-11 rounded-2xl py-8 px-8">
      <div className="flex flex-col items-start justify-center gap-4">
        {config.points.map((point, index) => (
          <div key={index} className="flex items-center justify-center gap-2">
            <div className="w-5 h-5 rounded-full bg-green-10 "></div>
            <p className="font-medium italic text-sm">{point}</p>
          </div>
        ))}
      </div>
      <div className="relative w-38 h-14 ">
        <Image
          alt="footer logo"
          src={"/icons/logo.svg"}
          fill
          className="object-contain"
        />
      </div>
      <div className="flex flex-col gap-6">
        <p className="font-medium text-green-10">{t("contact")}</p>
        <div className="flex flex-col gap-3">
          {contactInformations.map((contact, index) => (
            <div
              key={index}
              className="flex gap-2 items-center justify-start cursor-pointer "
            >
              <div className="relative w-6 h-6 ">
                <Image alt={contact.alt} src={contact.src} fill />
              </div>
              <p className="text-sm text-black-40 hover:text-gray-30">
                {contact.text}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
