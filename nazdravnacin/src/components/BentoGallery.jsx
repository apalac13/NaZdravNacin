"use client";
import Image from "next/image";
import clsx from "clsx";
import ImageGallery from "./ImageGallery";
import { motion } from "motion/react";

export default function BentoGallery() {
  const galleryItems = [
    {
      id: "1",
      title: "Pogled",
      src: "/images/pogled.jpeg",
      className: "h-[300px]",
    },
    {
      id: "2",
      title: "Izlet",
      src: "/images/setnjasuma.jpeg",
      className: "h-[400px]",
    },
    {
      id: "3",
      title: "Pogled suma",
      src: "/images/pogledsuma.jpeg",
      className: "h-[350px]",
    },
    {
      id: "4",
      title: "Izlet Igra",
      src: "/images/izletigra.jpeg",
      className: "h-[250px]",
    },
    {
      id: "5",
      title: "Zalazak Sunca",
      src: "/images/morezalazak.jpeg",
      className: "h-[400px]",
    },
    {
      id: "6",
      title: "Setnica",
      src: "/images/setnica.jpeg",
      className: "h-[350px]",
    },
    {
      id: "7",
      title: "Soba",
      src: "/images/soba.jpeg",
      className: "h-[500px]",
    },

    {
      id: "8",
      title: "Suma",
      src: "/images/suma.jpeg",
      className: "h-[350px]",
    },
  ];

  return (
    <motion.div className="columns-1 sm:columns-2 md:columns-3  gap-5 space-y-5 px-4 ">
      {galleryItems.map((item, index) => (
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: index * 0.2 }}
          key={item.id}
          className={clsx(
            `relative w-full  ${item.className} overflow-hidden rounded-2xl cursor-pointer `,
          )}
        >
          <ImageGallery alt={item.title} src={item.src} />
        </motion.div>
      ))}
    </motion.div>
  );
}
