"use client";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Pocetna() {
  const t = useTranslations("home");
  return (
    <section
      id="pocetna"
      className="w-full h-lvh flex items-center justify-between px-14 pt-24 "
    >
      <div className="w-1/2 flex flex-col gap-7">
        <div className="flex flex-col text-5xl gap-2 font-semibold text-green-10 ">
          <p>{t("title1")}</p>
          <p>{t("title2")}</p>
        </div>
        <div className="text-xl ">
          <p>{t("description1")}</p>
          <p>{t("description2")}</p>
          <p>{t("description3")}</p>
        </div>
        <div className="flex  gap-5">
          <Link href={"/#paketi"} className="max-w-60 w-full">
            <Button type={"button"} text={t("button1")} />
          </Link>
          <Link href={"/#tjednizdravlja"} className="max-w-60 w-full">
            <Button type={"button"} text={t("button2")} color="white" />
          </Link>
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <div className="relative w-125 h-125 ">
          <Image
            alt="plate"
            src={"/images/plate.png"}
            fill
            priority
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}
