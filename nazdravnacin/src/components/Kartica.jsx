"use client";
import Image from "next/image";
import { motion } from "motion/react";

export default function Kartica({ index, card }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: index * 0.5 }}
      className="w-60 h-60 border-2 border-green-10 rounded-xl bg-white-20 flex flex-col sm:gap-5 gap-3 items-center xs:justify-start justify-center p-3  shadow-lg cursor-pointer transition delay-150 duration-300 ease-in-out hover:scale-105"
    >
      <div className="relative sm:w-16 sm:h-16 w-14 h-14 ">
        <Image alt={card.title.toLowerCase()} src={card.icon} fill />
      </div>
      <p className="text-lg  text-green-10 font-medium">{card.title}</p>
      <p className="xs:text-sm text-[13px]  italic text-center">{card.text}</p>
    </motion.div>
  );
}
