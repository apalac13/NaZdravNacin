"use client";
import Image from "next/image";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Footer() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const f = useTranslations("footer");

  const navItems = [
    { name: t("home"), link: "#pocetna" },
    { name: t("about"), link: "#onama" },
    { name: t("packages"), link: "#paketi" },
    { name: t("weekly"), link: "#tjednizdravlja" },
    { name: t("gallery"), link: "#galerija" },
    { name: t("gift"), link: "#poklonbonovi" },
    { name: t("newsletter"), link: "#newsletter" },
  ];

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
    <div className="bg-green-10 flex flex-col items-center justify-center px-8 xl:px-0">
      <div className="py-17 max-w-7xl w-full xl:flex grid sm:grid-cols-2 grid-cols-1 justify-content-between gap-y-8   items-start justify-between">
        <div className="self-center flex flex-col gap-5 max-w-75 w-full">
          <div className="relative w-36 h-14 ">
            <Image
              alt="footer logo"
              src={"/icons/logofooter.svg"}
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full h-px bg-green-11"></div>
          <p className="text-green-11 text-sm text-balance">{f("quote")}</p>
        </div>
        <div className="flex flex-col gap-6 text-white-20">
          <p className="font-medium">{f("navigation")}</p>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <Link
                key={item.link}
                href={`/${locale}/${item.link}`}
                className="hover:text-green-11 text-sm"
              >
                <p>{item.name}</p>
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 text-white-20">
          <p className="font-medium">{f("contact")}</p>
          <div className="flex flex-col gap-3">
            {contactInformations.map((contact, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-start cursor-pointer "
              >
                <div className="relative w-6 h-6 ">
                  <Image alt={contact.alt} src={contact.src} fill />
                </div>
                <p className="text-sm text-white-20 hover:text-green-11">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 text-white-20">
          <p className="font-medium">{f("socials")}</p>
          <div className="flex gap-5">
            <div className="relative w-10 h-10 cursor-pointer rounded-full hover:bg-white-20 ">
              <Image alt="facebook icon" src={"/icons/facebook.svg"} fill />
            </div>
            <div className="relative w-10 h-10 cursor-pointer  rounded-full hover:bg-white-20">
              <Image alt="instagram icon" src={"/icons/instagram.svg"} fill />
            </div>
          </div>
          <p className="text-sm">{f("contactText")}</p>
        </div>
      </div>
      <div className="w-full border-t border-green-11">
        <div className="max-w-7xl mx-auto text-green-11 text-xs flex xs:flex-row flex-col xs:gap-0 gap-1 items-center  justify-between xs:py-2 py-4 ">
          <p>{f("copyright")}</p>
          {/* <p>{f("privacy")}</p> */}
          <p>
            Design and development by{" "}
            <span className="font-medium">Ana</span>{" "}
          </p>
        </div>
      </div>
    </div>
  );
}
