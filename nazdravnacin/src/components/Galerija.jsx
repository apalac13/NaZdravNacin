"use client";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Galerija() {
  const t = useTranslations("gallery");

  return (
    <section
      id="galerija"
      className="w-full xl:h-lvh h-full flex flex-col justify-center items-center xxl:px-14 px-4 my-12"
    >
      <div className="w-full grid grid-flow-row xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-3 cursor-pointer">
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className=" flex flex-col items-center justify-center gap-6"
        >
          <div className="flex flex-col items-center justify-center">
            <p className="sm:text-lg text-md text-green-10 font-medium ">
              {t("label")}
            </p>
            <p className="sm:text-2xl text-xl font-semibold text-center">
              {t("title1")}
              <br /> {t("title2")}
            </p>
          </div>
          <Link href={"/galerija"} className="w-full max-w-60">
            <Button type={"button"} text={t("button")} />
          </Link>
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="col-span-2  relative w-full h-91.75 overflow-hidden rounded-2xl "
        >
          <ImageGallery
            alt="Smjestaj za Tjedne zdravlja"
            src={"/images/soba.jpeg"}
            sizes="(max-width:768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative row-span-2 md:col-span-1 col-span-2 md:w-75 w-full md:h-full h-50  overflow-hidden rounded-2xl"
        >
          <ImageGallery
            alt="Setnja Tjedni zdravlja"
            src={"/images/setnjasuma.jpeg"}
            sizes="(max-width:768px) 100vw, 25vw"
          />
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="col-span-2 relative w-full h-50 overflow-hidden rounded-2xl"
        >
          <ImageGallery
            alt="More Istra"
            src={"/images/morezalazak.jpeg"}
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="relative w-full h-50 max-xl:col-span-2 overflow-hidden rounded-2xl"
        >
          <ImageGallery
            alt="Tjedan zdravlja izlet"
            src={"/images/izletigra.jpeg"}
            sizes="(max-width: 768px) 100vw, 25vw"
          />
        </motion.div>
      </div>
    </section>
  );
}
