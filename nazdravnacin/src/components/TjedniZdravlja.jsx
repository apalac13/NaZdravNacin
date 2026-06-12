import Image from "next/image";
import Bullet from "./Bullet";
import Button from "./Button";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function TjedniZdravlja() {
  const t = useTranslations("healthWeeks");
  const items = Array.from({ length: 8 }, (_, i) => t(`item${i + 1}`));

  return (
    <section
      id="tjednizdravlja"
      className="w-full min-h-lvh overflow-hidden relative"
    >
      <Image
        alt="vinograd"
        src={"/images/vinograd.jpg"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-amber-600/10"></div>
      <div className="w-full relative px-14 py-20 flex flex-col gap-14 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-14">
          <div className="flex flex-col gap-px items-center justify-center">
            <p className="text-lg text-green-10 font-medium ">{t("label")}</p>
            <p className="text-2xl font-semibold">{t("title")}</p>
            <p className="text-2xl  font-semibold">
              {t("subtitle")}{" "}
              <span className="text-green-10">{t("subtitleHighlight")}</span>
            </p>
          </div>
          <p className="text-base italic font-medium text-center ">
            {t("description")}
          </p>
        </div>
        <div className="w-full relative bg-white-20 flex flex-col gap-5 items-center justify-center py-14 border border-green-11 rounded-2xl">
          <div className="absolute -top-5 z-10 w-52 h-10 bg-green-11 flex items-center justify-center rounded-2xl">
            <p className="text-green-10 text-sm ">ALL INCLUSIVE</p>
          </div>
          <div className=" bg-green-10 w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-infinite-scroll">
              <p className="text-white-20 text-sm font-medium px-8">
                {t("upcomingDates")}
              </p>
              <p className="text-white-20 text-sm font-medium px-8">
                {t("upcomingDates")}
              </p>
            </div>
          </div>
          <div className=" self-start px-14 flex flex-col gap-6">
            <div className="flex flex-col ">
              <p className="text-xl text-green-10 font-semibold ">
                850€
                <span className="text-base text-black-40 font-normal">
                  /{t("perPerson")}
                </span>
              </p>
              <p className="text-xl font-semibold">{t("includedTitle")}</p>
            </div>
            <div className="grid grid-cols-2 gap-y-2">
              {items.map((item, index) => (
                <Bullet key={index} text={item} />
              ))}
            </div>
            <p className="text-center">
              {t("priceText1")}
              <span className="font-medium"> {t("priceHighlight1")}</span>{" "}
              {t("priceText2")}{" "}
              <span className="font-medium"> {t("priceHighlight2")}</span>
              {t("priceText3")}
              <span className="font-medium"> {t("priceHighlight3")}</span>{" "}
              {t("priceText4")}
              <span className="font-medium"> {t("priceHighlight4")}</span>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 mt-8">
            <p className="font-medium">{t("ctaText")}</p>
            <Link
              href={"/kontakt?type=tjednizdravlja"}
              className="max-w-60 w-full"
            >
              <Button type={"button"} text={t("button")} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
