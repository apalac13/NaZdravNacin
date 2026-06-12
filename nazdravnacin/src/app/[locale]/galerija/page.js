"use client";
import Link from "next/link";
import BentoGallery from "@/components/BentoGallery";
import { useTranslations } from "next-intl";

export default function Galerija() {
  const t = useTranslations("galleryPage");

  return (
    <div className="w-full h-min-lvh h-full py-70 flex flex-col gap-25 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <Link href={"/#galerija"}>
          <p className="cursor-pointer hover:text-gray-30 flex gap-1 hover:animate-arrow-move">
            <span className="inline-block hover:animate-arrow-move">
              &#8592;
            </span>
            {t("back")}
          </p>
        </Link>
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-lg text-green-10 font-medium"> {t("label")}</p>
          <p className="text-xl font-semibold">{t("title")}</p>
          <p className="text-xl font-medium">{t("description")}</p>
        </div>
      </div>
      <div className="w-full max-w-300 items-center justify-center">
        <BentoGallery />
      </div>
    </div>
  );
}
