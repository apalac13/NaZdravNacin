"use client";
import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";
import { useLocale } from "next-intl";

export default function Pocetna() {
  const t = useTranslations("home");
  const locale = useLocale();
  return (
    <section
      id="pocetna"
      className="w-full lg:h-lvh h-full flex lg:gap-0 gap-8 lg:flex-row flex-col items-center lg:justify-between justify-center md:px-14 px-4 lg:pt-24 pt-34 pb-10 "
    >
      <motion.div
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full flex flex-col gap-7"
      >
        <div className="flex flex-col lg:text-5xl md:text-4xl text-3xl md:gap-2 gap-1 font-semibold text-green-10 ">
          <p>{t("title1")}</p>
          <p>{t("title2")}</p>
        </div>
        <div className="lg:text-xl md:text-lg text-md text-balance">
          <p>{t("description1")}</p>
        </div>
        <div className="flex xs:flex-row flex-col sm:gap-5 gap-3">
          <Link href={`/${locale}/#paketi`} className="max-w-60 w-full">
            <Button type={"button"} text={t("button1")} />
          </Link>
          <Link href={`/${locale}/#tjednizdravlja`} className="max-w-60 w-full">
            <Button type={"button"} text={t("button2")} color="white" />
          </Link>
        </div>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="lg:w-1/2 w-full flex  lg:justify-end justify-center "
      >
        <div className="relative lg:w-125 lg:h-125 md:w-105 md:h-105 md: w-92 h-92 ">
          <Image
            alt="Nutricionisticki zdravi tanjur"
            src={"/images/naslovna.png"}
            fill
            priority
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </div>
      </motion.div>
    </section>
  );
}
