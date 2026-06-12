// src/i18n/routing.js
import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["hr", "en"],
  defaultLocale: "hr",
});

// Navigation wrappers replacing next/navigation helpers
export const { Link, redirect, usePathname, useRouter } =
  createNavigation(routing);
