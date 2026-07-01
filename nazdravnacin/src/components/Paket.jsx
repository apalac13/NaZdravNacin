"use client";
import Image from "next/image";
import clsx from "clsx";
import Button from "./Button";
import { useState } from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Paket({ pack }) {
  const t = useTranslations("packages");

  const [showAll, setShowAll] = useState(false);

  const visibleItems =
    pack.titleOne === "PROGRAM 2" && !showAll
      ? pack.items.slice(0, 4)
      : pack.items;

  return (
    <motion.div
      initial={{ x: -50, opacity: 0 }}
      whileInView={{ x: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className={clsx(
        "lg:w-[320px] w-full  lg:min-h-197.5 h-full flex flex-col gap-7 px-6 py-8 rounded-2xl",
        pack.titleOne === "PROGRAM 2"
          ? "bg-green-10 border border-green-10 text-white-20/90"
          : "bg-white-20 border border-white-20 ",
      )}
    >
      <div className="flex flex-col gap-1 ">
        <p
          className={clsx(
            "sm:text-2xl text-xl  font-semibold",
            pack.titleOne === "PROGRAM 2" ? " text-green-11" : "text-green-10 ",
          )}
        >
          {pack.price}
          {pack.titleOne === "PROGRAM 2" && (
            <span className="text-base font-normal ">/{t("month")}</span>
          )}
        </p>
        <div className="sm:text-2xl text-xl font-medium gap-1">
          <p>{pack.titleOne}</p>
          <p className="whitespace-pre-line">{pack.titleTwo}</p>
        </div>
      </div>
      <p
        className={clsx(
          "font-base font-light italic sm:text-base text-sm",
          pack.titleOne === "PROGRAM 2" ? "text-white-20/90" : "text-black-40",
        )}
      >
        {pack.description}
      </p>
      <div className="flex flex-col gap-3 ">
        {visibleItems.map((item, index) => (
          <div key={index} className="flex gap-1 ">
            <div className="relative w-7 h-7 shrink-0">
              {pack.titleOne === "PROGRAM 2" ? (
                <Image
                  alt="check icon"
                  src={"/icons/checklight.svg"}
                  fill
                  className="object-contain"
                />
              ) : (
                <Image
                  alt="check icon"
                  src={"/icons/check.svg"}
                  fill
                  className="object-contain"
                />
              )}
            </div>
            <p
              className={clsx(
                "sm:text-base text-sm",
                pack.titleOne === "PROGRAM 2"
                  ? "text-white-20/90"
                  : "text-black-40",
              )}
            >
              {item}
            </p>
          </div>
        ))}
        {pack.titleOne === "PROGRAM 2" && (
          <button
            onClick={() => setShowAll(!showAll)}
            className="text-sm cursor-pointer text-green-11 underline"
          >
            {showAll ? t("showLess") : t("showMore")}
          </button>
        )}
      </div>
      <Link
        href="/kontakt?type=program"
        className="w-full flex justify-center mt-auto"
      >
        <Button
          type={"button"}
          text={t("inquiry")}
          color={pack.titleOne === "PROGRAM 2" && "white"}
        />
      </Link>
    </motion.div>
  );
}
