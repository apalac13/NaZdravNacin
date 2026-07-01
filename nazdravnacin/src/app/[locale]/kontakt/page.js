"use client";
import Form from "@/components/Form";
import Informations from "@/components/Informations";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Kontakt() {
  const searchParams = useSearchParams();
  const type = searchParams.get("type");
  const t = useTranslations("contact");

  const config = {
    kontakt: {
      title: t("contactPage.title"),
      description: t("contactPage.description"),
      showSelect: false,
      options: [],
      email: "nazdravnacin@gmail.com",
      points: [
        t("contactPage.points.point1"),
        t("contactPage.points.point2"),
        t("contactPage.points.point3"),
        ,
      ],
    },
    program: {
      title: t("programPage.title"),
      description: t("programPage.description"),
      showSelect: true,
      selectLabel: t("programPage.selectLabel"),
      options: [
        t("programPage.options.placeholder"),
        t("programPage.options.program1"),
        t("programPage.options.program2"),
        t("programPage.options.program3"),
      ],
      email: "nazdravnacin@gmail.com",
      points: [
        t("programPage.points.point1"),
        t("programPage.points.point2"),
        t("programPage.points.point3"),
      ],
    },
    tjednizdravlja: {
      title: t("healthWeeksPage.title"),
      description: t("healthWeeksPage.description"),
      warning: t("healthWeeksPage.warning"),
      showSelect: true,
      selectLabel: t("healthWeeksPage.selectLabel"),
      options: [
        t("healthWeeksPage.selectLabel"),
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
      email: "izleti.nazdravnacin@gmail.com",
      points: [
        t("healthWeeksPage.points.point1"),
        t("healthWeeksPage.points.point2"),
        t("healthWeeksPage.points.point3"),
      ],
    },
  };

  const currentConfig = config[type] || config.kontakt;

  return (
    <div className="w-full h-min-lvh h-full lg:py-70 py-54 lg:px-0 px-4 flex flex-col gap-25 items-center justify-center">
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="flex flex-col gap-5 items-center justify-center text-center w-full"
      >
        <Link href={"/"}>
          <p className="cursor-pointer hover:text-gray-30 flex gap-1 hover:animate-arrow-move">
            <span className="inline-block hover:animate-arrow-move">
              &#8592;
            </span>
            {t("back")}
          </p>
        </Link>
        <div className="flex flex-col gap-1 items-center justify-center w-full">
          <p className="sm:text-lg text-md text-green-10 font-medium">
            {currentConfig.title}
          </p>
          <p className="sm:text-xl text-lg font-semibold">
            {currentConfig.description}
          </p>
          <p className="sm:text-xl textt-lg font-medium">{""}</p>
          {currentConfig.warning && (
            <p className="sm:text-md text-base font-medium text-green-10">
              {currentConfig.warning}
            </p>
          )}
        </div>
      </motion.div>
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5, duration: 0.5 }}
        className="w-full flex lg:flex-row flex-col gap-9 items-center justify-center "
      >
        <Form config={currentConfig} type={type} />
        <Informations config={currentConfig} />
      </motion.div>
    </div>
  );
}
