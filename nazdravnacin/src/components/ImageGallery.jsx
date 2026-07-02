"use client";
import Image from "next/image";

export default function ImageGallery({ src, alt, sizes }) {
  return (
    <Image
      alt={alt}
      src={src}
      fill
      sizes={sizes}
      className="rounded-2xl object-cover object-center hover:scale-105 transition-all delay-75 duration-600 ease-in-out brightness-85 hover:brightness-100 "
    />
  );
}
