"use client";
import Image from "next/image";
import Paket from "./Paket";
import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function Paketi() {
  const t = useTranslations("packages");
  const commonItems = Array.from({ length: 13 }, (_, i) =>
    t(`commonItems.item${i + 1}`),
  );

  const packages = [
    {
      price: t("program1.price"),
      titleOne: t("program1.titleOne"),
      titleTwo: t("program1.titleTwo"),
      description: t("program1.description"),
      items: Array.from({ length: 5 }, (_, i) => t(`program1.item${i + 1}`)),
    },
    {
      price: t("program2.price"),
      titleOne: t("program2.titleOne"),
      titleTwo: t("program2.titleTwo"),
      description: t("program2.description"),
      items: Array.from({ length: 10 }, (_, i) => t(`program2.item${i + 1}`)),
    },
    {
      price: t("program3.price"),
      titleOne: t("program3.titleOne"),
      titleTwo: t("program3.titleTwo"),
      description: t("program3.description"),
      items: Array.from({ length: 4 }, (_, i) => t(`program3.item${i + 1}`)),
    },
  ];

  return (
    <section
      id="paketi"
      className="w-full h-full flex flex-col gap-28 items-center justify-center bg-green-11 px-14 py-24"
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-lg text-green-10 font-medium ">{t("label")}</p>
        <p className="text-2xl font-semibold">{t("title")}</p>
      </div>
      <div className="w-full flex gap-4 items-center">
        <div className="w-100 h-full flex flex-col gap-10 bg-white-20 rounded-2xl border border-white-20 px-6 py-8">
          <p className="text-lg font-medium self-center">
            {t("includesTitle")}
          </p>
          <div className="flex flex-col gap-3">
            {commonItems.map((item, index) => (
              <div key={index} className="flex gap-1">
                <div className="relative w-7 h-7 shrink-0">
                  <Image
                    alt="check icon"
                    src={"/icons/check.svg"}
                    fill
                    className="object-contain "
                  />
                </div>
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {packages.map((pack, index) => (
          <Paket key={index} pack={pack} />
        ))}
      </div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <p className="text-2xl font-semibold">{t("question")}</p>
        <Link href={"/kontakt?type=kontakt"} className="max-w-60 w-full">
          <Button type={"button"} text={t("button")} />
        </Link>
      </div>
    </section>
  );
}
