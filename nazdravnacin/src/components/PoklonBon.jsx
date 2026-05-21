"use client";
import Image from "next/image";
import Button from "./Button";
import ContactInformation from "./ContactInformation";

export default function PoklonBon({ program, index }) {
  const contactInformations = [
    {
      alt: "mail",
      src: "/icons/mail.svg",
      text: "programinazdravnacin@gmail.com",
    },
    {
      alt: "mail",
      src: "/icons/mail.svg",
      text: "izletinazdravnacin@gmail.com",
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
      style={{ left: `${index * 330}px` }}
      className="w-100 h-75 absolute flex flex-col gap-8  items-center justify-center bg-green-10 border border-green-11 rounded-2xl py-6 px-6 transition-all duration-300 hover:scale-101 hover:z-50 cursor-pointer "
    >
      <div className="flex items-center justify-center gap-1 ">
        <p className="text-green-11 text-base font-medium">POKLON BON - </p>
        <p className="text-white-20 text-sm font-medium">{program}</p>
      </div>
      <div className="flex gap-8">
        <div className="relative w-15 h-25.75 ">
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
      <Button type={"button"} text={"IZABERI"} color="white" />
    </div>
  );
}
