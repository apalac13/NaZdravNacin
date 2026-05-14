"use client";
import Image from "next/image";

export default function Kartica({ card }) {
  return (
    <div className="w-60 h-60 border border-green-10 rounded-xl bg-white-20 flex flex-col gap-5 items-center justify-start p-3  shadow-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-105">
      <Image
        alt={card.title.toLowerCase()}
        src={card.icon}
        width={64}
        height={64}
      />
      <p className="text-lg text-green-10 font-medium">{card.title}</p>
      <p className="text-sm italic text-center">{card.text}</p>
    </div>
  );
}
