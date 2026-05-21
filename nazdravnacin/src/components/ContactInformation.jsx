"use client";
import Image from "next/image";

export default function ContactInformation({ alt, src, text }) {
  return (
    <div className="flex gap-1 items-center justify-start">
      <div className="relative w-6 h-6">
        <Image alt={alt} src={src} fill />
      </div>
      <p className="text-xs text-white-20">{text}</p>
    </div>
  );
}
