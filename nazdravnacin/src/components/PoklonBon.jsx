"use client";
import Image from "next/image";
import Button from "./Button";
import ContactInformation from "./ContactInformation";
import { useTranslations } from "next-intl";

export default function PoklonBon({ program, index, onOpen }) {
  const t = useTranslations("gift");

  const contactInformations = [
    {
      alt: "mail",
      src: "/icons/mail.svg",
      text: "nazdravnacin@gmail.com",
    },
    {
      alt: "mail",
      src: "/icons/mail.svg",
      text: "izleti.nazdravnacin@gmail.com",
    },
    {
      alt: "phone",
      src: "/icons/phone.svg",
      text: "+385995048207",
    },
    {
      alt: "location",
      src: "/icons/location.svg",
      text: "Istra",
    },
  ];

  return (
    <div
      style={index !== null ? { left: `${index * 330}px` } : undefined}
      className="xs:w-100 w-80 h-75 flex flex-col gap-8  items-center justify-center bg-green-10 border border-green-11 rounded-2xl py-6 px-6 transition-all duration-300 cursor-pointer xxl:absolute
  "
    >
      <div className="flex items-center justify-center gap-1 ">
        <p className="text-green-11 text-base font-medium">
          {t("titleCard")} -{" "}
        </p>
        <p className="text-white-20 text-sm font-medium">{program}</p>
      </div>
      <div className="flex xs:gap-8 gap-4">
        <div className="relative xs:w-15 xs:h-25.75 w-14 h-24 ">
          <Image alt="logo" src={"/icons/logovertical.svg"} fill />
        </div>
        <div className="flex flex-col gap-1">
          {contactInformations.map((contact, index) => (
            <ContactInformation
              key={index}
              alt={contact.alt}
              src={contact.src}
              text={contact.text}
            />
          ))}
        </div>
      </div>
      <div className="w-full max-w-60" onClick={onOpen}>
        <Button type={"button"} text={t("button")} color="white" />
      </div>
    </div>
  );
}
