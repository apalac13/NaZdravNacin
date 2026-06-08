"use client";
import Link from "next/link";
import BentoGallery from "@/components/BentoGallery";

export default function Galerija() {
  return (
    <div className="w-full h-min-lvh h-full py-70 flex flex-col gap-25 items-center justify-center">
      <div className="flex flex-col gap-5 items-center justify-center">
        <Link href={"/#galerija"}>
          <p className="cursor-pointer hover:text-gray-30 flex gap-1 hover:animate-arrow-move">
            <span className="inline-block hover:animate-arrow-move">
              &#8592;
            </span>
            Povratak na početnu
          </p>
        </Link>
        <div className="flex flex-col gap-1 items-center justify-center">
          <p className="text-lg text-green-10 font-medium">GALERIJA</p>
          <p className="text-xl font-semibold">TJEDNI ZDRAVLJA IZLETI</p>
          <p className="text-xl font-medium">
            Priroda, zdrava prehrana, opuštanje i vrijeme posvećeno sebi —
            pogledajte kako izgleda iskustvo Tjedna zdravlja u Istri.
          </p>
        </div>
      </div>
      <div className="w-full max-w-300 items-center justify-center">
        <BentoGallery />
      </div>
    </div>
  );
}
