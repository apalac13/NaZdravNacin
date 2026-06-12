import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import PageWrapper from "@/components/PageWrapper";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <PageWrapper>{children}</PageWrapper>
    </NextIntlClientProvider>
  );
}
