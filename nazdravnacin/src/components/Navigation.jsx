"use client";

import Image from "next/image";
import Button from "./Button";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

export default function Navigation() {
  const locale = useLocale();
  const t = useTranslations("nav");

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
    <nav className="py-6 flex items-center justify-center gap-20 bg-white-20 border-b border-green-11 fixed top-0 z-30 w-full">
      {/* LOGO */}
      <Link href={`/${locale}`}>
        <div className="relative w-36 h-14">
          <Image alt="logo" src="/icons/logo.svg" fill />
        </div>
      </Link>

      {/* NAV LINKS */}
      <div className="flex gap-6">
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
        className="max-w-60 w-full"
      >
        <Button type="button" text={t("contact")} />
      </Link>
    </nav>
  );
}
