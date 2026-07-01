"use client";
import Button from "./Button";
import ImageGallery from "./ImageGallery";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Galerija() {
  const t = useTranslations("gallery");

  return (
    <section
      id="galerija"
      className="w-full xl:h-lvh h-full flex flex-col justify-center items-center xxl:px-14 px-4 my-12"
    >
      <div className="w-full grid grid-flow-row xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-3 gap-y-3 cursor-pointer">
        <div className=" flex flex-col items-center justify-center gap-6">
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
        </div>
        <div className="col-span-2  relative w-full h-91.75 overflow-hidden rounded-2xl ">
          <ImageGallery alt="kuca" src={"/images/soba.jpeg"} />
        </div>
        <div className="relative row-span-2 md:col-span-1 col-span-2 md:w-75 w-full md:h-full h-50  overflow-hidden rounded-2xl">
          <ImageGallery alt="hrana" src={"/images/setnjasuma.jpeg"} />
        </div>
        <div className="col-span-2 relative w-full h-50 overflow-hidden rounded-2xl">
          <ImageGallery alt="vinograd" src={"/images/morezalazak.jpeg"} />
        </div>
        <div className="relative w-full h-50 max-xl:col-span-2 overflow-hidden rounded-2xl">
          <ImageGallery alt="predavanje" src={"/images/izletigra.jpeg"} />
        </div>
      </div>
    </section>
  );
}
