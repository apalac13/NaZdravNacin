"use client";
import Link from "next/link";
import BentoGallery from "@/components/BentoGallery";
import { useTranslations } from "next-intl";

export default function Galerija() {
  const t = useTranslations("galleryPage");

  return (
    <div className="w-full h-min-lvh h-full lg:py-70 py-54 lg:px-0 px-4 flex flex-col gap-25 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <Link href={"/#galerija"}>
          <p className="cursor-pointer hover:text-gray-30 flex gap-1 hover:animate-arrow-move">
            <span className="inline-block hover:animate-arrow-move">
              &#8592;
            </span>
            {t("back")}
          </p>
        </Link>
        <div className="flex flex-col gap-1 items-center justify-center text-center">
          <p className="sm:text-lg text-md text-green-10 font-medium">
            {" "}
            {t("label")}
          </p>
          <p className="sm:text-xl text-lg font-semibold">{t("title")}</p>
          <p className="sm:text-xl text-lg font-medium">{t("description")}</p>
        </div>
      </div>
      <div className="w-full max-w-300 items-center justify-center">
        <BentoGallery />
      </div>
    </div>
  );
}
