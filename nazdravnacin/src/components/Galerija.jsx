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
      className="w-full h-lvh flex flex-col justify-center items-center px-14 my-12"
    >
      <div className="grid grid-flow-row grid-cols-4 gap-x-3 gap-y-3 cursor-pointer">
        <div className="flex flex-col items-center justify-center gap-6">
          <div className="flex flex-col items-center justify-center">
            <p className="text-lg text-green-10 font-medium ">{t("label")}</p>
            <p className="text-2xl font-semibold text-center">
              {t("title1")}
              <br /> {t("title2")}
            </p>
          </div>
          <Link href={"/galerija"} className="w-full max-w-60">
            <Button type={"button"} text={t("button")} />
          </Link>
        </div>
        <div className="col-span-2 relative w-full h-91.75 overflow-hidden rounded-2xl ">
          <ImageGallery alt="kuca" src={"/images/kuca.jpg"} />
        </div>
        <div className="relative row-span-2 w-75 h-full overflow-hidden rounded-2xl">
          <ImageGallery alt="hrana" src={"/images/hrana.jpg"} />
        </div>
        <div className="col-span-2 relative w-full h-50 overflow-hidden rounded-2xl">
          <ImageGallery alt="vinograd" src={"/images/vinograd.jpg"} />
        </div>
        <div className="relative w-full h-50 overflow-hidden rounded-2xl">
          <ImageGallery alt="predavanje" src={"/images/predavanje.jpg"} />
        </div>
      </div>
    </section>
  );
}
