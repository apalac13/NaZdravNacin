"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";
import { useState } from "react";
import Mobile from "./Mobile";

export default function Navigation() {
  const locale = useLocale();
  const t = useTranslations("nav");
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: t("home"), link: "#pocetna" },
    { name: t("about"), link: "#onama" },
    { name: t("packages"), link: "#paketi" },
    { name: t("weekly"), link: "#tjednizdravlja" },
    { name: t("gallery"), link: "#galerija" },
    { name: t("gift"), link: "#poklonbonovi" },
    { name: t("newsletter"), link: "#newsletter" },
  ];

  return (
    <>
      <nav className="py-6 md:px-12 px-5 flex items-center justify-between  bg-white-20 border-b border-green-11 fixed top-0 z-50 w-full backdrop-blur-sm ">
        {/* LOGO */}
        <Link href={`/${locale}`}>
          <div className="relative lg:w-36 lg:h-14 w-34 h-12  ">
            <Image alt="logo" src="/icons/logo.svg" fill priority />
          </div>
        </Link>

        {/* NAV LINKS */}
        <div className="hidden xl:flex gap-6">
          {navItems.map((item) => (
            <Link key={item.link} href={`/${locale}/${item.link}`}>
              <p className="text-base text-green-10 font-medium hover:text-green-10/70">
                {item.name}
              </p>
            </Link>
          ))}
          {/* LANGUAGE SWITCH */}
          <div className="flex items-center gap-2 text-base font-medium">
            {/* HR */}
            <Link
              href="/hr"
              className={`transition ${
                locale === "hr"
                  ? "text-green-10 font-semibold underline underline-offset-4"
                  : "text-green-10/60 hover:text-green-10"
              }`}
            >
              HR
            </Link>
            <span className="text-green-10/40">/</span>
            <Link
              href="/en"
              className={`transition ${
                locale === "en"
                  ? "text-green-10 font-semibold underline underline-offset-4"
                  : "text-green-10/60 hover:text-green-10"
              }`}
            >
              EN
            </Link>
          </div>
        </div>

        {/* CTA */}
        <Link
          href={`/${locale}/kontakt?type=kontakt`}
          className="max-w-60 w-full hidden xl:flex"
        >
          <Button type="button" text={t("contact")} />
        </Link>
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex xl:hidden flex-col gap-1.5"
        >
          <span
            className={`h-0.5 w-6 bg-green-10 transition ${
              isOpen ? "translate-y-2 rotate-45" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-green-10 transition ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`h-0.5 w-6 bg-green-10 transition ${
              isOpen ? "-translate-y-2 -rotate-45" : ""
            }`}
          />
        </button>
      </nav>
      <Mobile isOpen={isOpen} setIsOpen={setIsOpen} navItems={navItems} />
    </>
  );
}
