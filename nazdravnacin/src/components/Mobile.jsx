"use  client";
import Link from "next/link";
import Button from "./Button";
import { useLocale, useTranslations } from "next-intl";

export default function Mobile({ isOpen, setIsOpen, navItems }) {
  const locale = useLocale();
  const t = useTranslations("nav");
  return (
    <div
      className={`fixed inset-0 z-40 bg-white-20 backdrop-blur-md transition-all duration-300 xl:hidden ${
        isOpen
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex flex-col items-center  gap-8 h-full mt-34  ">
        <div className="flex flex-col items-center justify-center gap-5">
          {navItems.map((item) => (
            <Link
              key={item.link}
              href={`/${locale}/${item.link}`}
              onClick={() => setIsOpen(false)}
            >
              <p className="text-base text-green-10 font-medium hover:text-green-10/70">
                {item.name}
              </p>
            </Link>
          ))}
          <div className="flex items-center gap-2 text-base font-medium">
            {/* HR */}
            <Link
              href="/hr"
              className={`transition ${
                locale === "hr"
                  ? "text-green-10 font-semibold underline underline-offset-4"
                  : "text-green-10/60 hover:text-green-10"
              }`}
              onClick={() => setIsOpen(false)}
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
        <Link
          href={`/${locale}/kontakt?type=kontakt`}
          className="max-w-60 w-full "
          onClick={() => setIsOpen(false)}
        >
          <Button type="button" text={t("contact")} />
        </Link>
      </div>
    </div>
  );
}
