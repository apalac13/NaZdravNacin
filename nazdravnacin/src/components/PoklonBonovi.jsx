"use client";

import PoklonBon from "./PoklonBon";
import { useTranslations } from "next-intl";
import Modal from "./Modal";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function PoklonBonovi() {
  const t = useTranslations("gift");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "center",
    containScroll: "trimSnaps",
    loop: false,
  });

  const programs = [
    t("programs.program1"),
    t("programs.program2"),
    t("programs.program3"),
    t("programs.program4"),
  ];

  // track active slide
  useEffect(() => {
    if (!emblaApi) return;

    const onSelect = () => {
      setSelectedIndex(emblaApi.selectedScrollSnap());
    };

    emblaApi.on("select", onSelect);
    onSelect();

    return () => emblaApi.off("select", onSelect);
  }, [emblaApi]);

  // go to slide
  const scrollTo = useCallback(
    (index) => {
      if (emblaApi) emblaApi.scrollTo(index);
    },
    [emblaApi],
  );

  return (
    <section
      id="poklonbonovi"
      className="w-full min-h-screen flex flex-col gap-20 justify-center items-center px-4 md:px-14 xxl:py-4 py-34"
    >
      {/* TITLE */}
      <div className="flex flex-col gap-2 items-center justify-center text-center">
        <p className="sm:text-lg text-md text-green-10 font-medium">
          {t("label")}
        </p>

        <p className="sm:text-2xl text-xl font-semibold">
          {t("title_part1")}
          <span className="text-green-10"> {t("title_highlight1")}</span>{" "}
          {t("title_part2")}
          <span className="text-green-10"> {t("title_highlight2")}</span>{" "}
          {t("title_part3")}
          <span className="text-green-10"> {t("title_highlight3")}</span>
        </p>
      </div>

      {/* DESKTOP STATIC */}
      <div className="hidden xxl:flex relative w-full min-h-125 justify-center gap-6">
        {programs.map((program, index) => (
          <PoklonBon
            key={index}
            program={program}
            index={index}
            onOpen={() => setIsModalOpen(true)}
          />
        ))}
      </div>

      {/* MOBILE CAROUSEL */}
      <div className="xxl:hidden w-full">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-1">
            {programs.map((program, index) => (
              <div
                key={index}
                className="
                  flex-[0_0_85%]
                  sm:flex-[0_0_70%]
                  md:flex-[0_0_45%]
                  lg:flex-[0_0_30%]
                "
              >
                <PoklonBon
                  program={program}
                  index={index}
                  onOpen={() => setIsModalOpen(true)}
                />
              </div>
            ))}
          </div>
        </div>

        {/* DOTS */}
        <div className="flex justify-center items-center mt-6">
          <div className="flex gap-2">
            {programs.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollTo(index)}
                className={`rounded-full transition-all duration-300 ${
                  index === selectedIndex
                    ? "bg-green-10 w-6 h-2"
                    : "bg-gray-300 w-2 h-2"
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* MODAL */}
      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
}
