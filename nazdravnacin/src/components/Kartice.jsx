"use client";
import Kartica from "./Kartica";
import { useTranslations } from "next-intl";

export default function Kartice() {
  const t = useTranslations("cards");
  const cards = [
    {
      icon: "/icons/person.svg",
      title: t("card1.title"),
      text: t("card1.text"),
    },
    {
      icon: "/icons/school.svg",
      title: t("card2.title"),
      text: t("card2.text"),
    },
    {
      icon: "/icons/dinner-dining.svg",
      title: t("card3.title"),
      text: t("card3.text"),
    },
    {
      icon: "/icons/achivement.svg",
      title: t("card4.title"),
      text: t("card4.text"),
    },
  ];

  return (
    <div className="bg-green-11 flex flex-col lg:flex-row lg:flex xs:grid xs:grid-cols-[max-content_max-content] gap-8 items-center justify-center py-20">
      {cards.map((card, index) => (
        <Kartica key={index} index={index} card={card} />
      ))}
    </div>
  );
}
