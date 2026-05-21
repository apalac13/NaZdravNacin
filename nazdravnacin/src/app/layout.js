import { Montserrat } from "next/font/google";
import "./globals.css";
import PageWrapper from "@/components/PageWrapper";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Na Zdrav Način",
  description: "Na Zdrav Način",
  icons: {
    icon: "/icons/nazdravnacinfavicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
      <body className="font-montserrat text-black-40">
        <PageWrapper>{children}</PageWrapper>
      </body>
    </html>
  );
}
