"use client";
import Image from "next/image";
import clsx from "clsx";
import ImageGallery from "./ImageGallery";

export default function BentoGallery() {
  const galleryItems = [
    {
      id: "1",
      title: "Kuca",
      src: "/images/kuca.jpg",
      className: "h-[300px]",
    },
    {
      id: "2",
      title: "Jelo",
      src: "/images/jelo.jpg",
      className: "h-[400px]",
    },
    {
      id: "3",
      title: "Vinograd",
      src: "/images/vinograd.jpg",
      className: "h-[350px]",
    },
    {
      id: "4",
      title: "Predavanje",
      src: "/images/predavanje.jpg",
      className: "h-[250px]",
    },
    {
      id: "5",
      title: "Zalazak Sunca",
      src: "/images/zalazaksunca.jpg",
      className: "h-[400px]",
    },
    {
      id: "6",
      title: "Piknik",
      src: "/images/piknik.jpg",
      className: "h-[350px]",
    },
    {
      id: "7",
      title: "Priroda",
      src: "/images/priroda.jpg",
      className: "h-[500px]",
    },
    {
      id: "8",
      title: "Soba",
      src: "/images/soba.jpg",
      className: "h-[350px]",
    },
    {
      id: "9",
      title: "Juha",
      src: "/images/juha.jpg",
      className: "h-[300px]",
    },
    {
      id: "10",
      title: "Istra",
      src: "/images/istra.jpg",
      className: "h-[550px] ",
    },
  ];

  return (
    <div className="columns-1 sm:columns-2 md:columns-3  gap-5 space-y-5 px-4 ">
      {galleryItems.map((item) => (
        <div
          key={item.id}
          className={clsx(
            `relative w-full  ${item.className} overflow-hidden rounded-2xl cursor-pointer `,
          )}
        >
          <ImageGallery alt={item.title} src={item.src} />
        </div>
      ))}
    </div>
  );
}
