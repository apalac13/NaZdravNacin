"use client";
import Image from "next/image";

export default function ImageGallery({ alt, src }) {
  return (
    <Image
      alt={alt}
      src={src}
      fill
      className="rounded-2xl object-cover object-center hover:scale-105 transition-all delay-75 duration-600 ease-in-out brightness-85 hover:brightness-100 "
    />
  );
}
