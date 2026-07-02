import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PageWrapper from "@/components/PageWrapper";

export function generateStaticParams() {
  return [{ locale: "hr" }, { locale: "en" }];
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
