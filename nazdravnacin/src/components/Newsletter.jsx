"use client";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useState } from "react";
import { motion } from "motion/react";

export default function Newsletter() {
  const t = useTranslations("newsletter");
  const [email, setEmail] = useState("");

  const subscribe = async () => {
    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        formType: "newsletter",
        email,
      }),
    });

    if (response.ok) {
      alert("Uspješno ste se pretplatili.");
      setEmail("");
    }
  };

  return (
    <section
      id="newsletter"
      className="w-full h-full md:px-14 px-4 pb-24 flex flex-col gap-5 items-center justify-center"
    >
      <div className="relative w-20 h-20">
        <Image alt="newsletter icon" src={"/icons/newsletter.svg"} fill />
      </div>
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className="flex flex-col items-center justify-center gap-11"
      >
        <div className="flex flex-col gap-px items-center justify-center text-center">
          <p className="sm:text-lg text-md text-green-10 font-medium ">
            NEWSLETTER
          </p>
          <p className="sm:text-2xl text-xl font-semibold ">
            {t("title1")}
            <span className="text-green-10"> {t("title2")}</span>
          </p>
          <p className="sm:text-2xl text-xl  font-semibold">{t("subtitle")}</p>
        </div>
        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <div className="max-w-187.5 w-full flex gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t("placeholder")}
              className="w-full h-12.5 border border-black-40 rounded-2xl p-3 placeholder:text-sm"
            />
            <button
              type="button"
              onClick={subscribe}
              className="w-42.5 h-12.5 border border-green-10 bg-green-10 rounded-2xl hover:bg-green-10/90 cursor-pointer"
            >
              <p className="text-white-20 text-xs">{t("button")}</p>
            </button>
          </div>
          <p className="text-gray-30 text-center sm:text-base text-sm">
            {t("note")}
          </p>
        </div>
      </motion.div>
    </section>
  );
}
