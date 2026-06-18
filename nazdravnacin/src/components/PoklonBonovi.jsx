"use client";
import PoklonBon from "./PoklonBon";
import { useTranslations } from "next-intl";
import Modal from "./Modal";
import { useState } from "react";

export default function PoklonBonovi() {
  const t = useTranslations("gift");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const programs = [
    t("programs.program1"),
    t("programs.program2"),
    t("programs.program3"),
    t("programs.program4"),
  ];

  return (
    <section
      id="poklonbonovi"
      className="w-full min-h-screen h-full flex flex-col  gap-28 justify-center items-center px-14  "
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-lg text-green-10 font-medium ">{t("label")}</p>
        <p className="text-2xl font-semibold text-center">
          {t("title_part1")}
          <span className="text-green-10"> {t("title_highlight1")}</span>{" "}
          {t("title_part2")}
          <span className="text-green-10"> {t("title_highlight2")}</span>{" "}
          {t("title_part3")}
          <span className="text-green-10"> p{t("title_highlight3")}</span>
        </p>
      </div>
      <div className="flex relative w-full min-h-125">
        {programs.map((program, index) => (
          <PoklonBon
            key={index}
            program={program}
            index={index}
            onOpen={() => setIsModalOpen(true)}
          />
        ))}
      </div>
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
