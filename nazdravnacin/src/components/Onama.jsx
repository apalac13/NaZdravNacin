"use client";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Onama() {
  const t = useTranslations("about");

  return (
    <section
      id="onama"
      className="w-full xxl:h-lvh h-full  flex xxl:gap-0 gap-8 xxl:flex-row flex-col justify-between items-center xxl:px-14 px-4 my-12"
    >
      <div className="xxl:w-1/2 w-full">
        <div className="relative xxl:w-150 sm:h-125 w-full h-105   overflow-hidden rounded-xl border border-green-10">
          <Image
            alt="o nama slika"
            src={"/images/onama.jpg"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black-40 to-black-40/55"></div>
          <button className="absolute mb-5 bottom-0 sm:left-1/3 left-1/5  border border-white-20 bg-transparent hover:bg-gray-30/80 py-4 px-6 rounded-full cursor-pointer max-w-64">
            <p className="xs:text-sm text-xs text-white-20">{t("gallery")}</p>
          </button>
        </div>
      </div>
      <div className="xxl:w-1/2 w-full flex flex-col gap-7  lg:px-0 px-4">
        <div className="flex flex-col gap-1">
          <p className="sm:text-lg text-md text-green-10 font-medium  ">
            {t("label")}
          </p>
          <p className="sm:text-2xl text-xl font-semibold ">
            {t("title_prefix")}{" "}
            <span className="text-green-10"> {t("title_highlight")}</span>!
          </p>
        </div>
        <div className="flex flex-col gap-6 sm:text-base text-sm/6 ">
          <p>
            {t("text1_part1")}{" "}
            <span className="font-medium">{t("text1_highlight1")}</span>
            {t("text1_part2")}{" "}
            <span className="font-medium">{t("text1_highlight2")}</span>{" "}
            {t("text1_part3")}{" "}
            <span className="font-medium">{t("text1_highlight3")}</span>{" "}
            {t("text1_part4")}{" "}
            <span className="font-medium">{t("text1_part5")}</span>{" "}
            <span className="font-medium">{t("text1_highlight4")}</span>
            {t("text1_part6")}
          </p>
          <p>
            <span className="font-medium">{t("text2_part1")}</span>{" "}
            <span className="font-medium">{t("text2_highlight1")}</span>
            {t("text2_part2")}{" "}
            <span className="font-medium">{t("text2_highlight2")}</span>
            {t("text2_part3")}{" "}
            <span className="font-medium">{t("text2_highlight3")}</span>
            {t("text2_part4")}{" "}
            <span className="font-medium">{t("text2_highlight4")}</span>{" "}
            {t("text2_part5")}{" "}
            <span className="font-medium">{t("text2_highlight5")}</span>
            {t("text2_part6")}
          </p>
        </div>
        <Link href={"/#paketi"} className="max-w-60 w-full">
          <Button type={"button"} text={t("button")} />
        </Link>
      </div>
    </section>
  );
}
