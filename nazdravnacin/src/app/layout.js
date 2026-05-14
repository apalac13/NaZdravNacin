import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Na Zdrav Nacin",
  description: "Na Zdrav Nacin",
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
    <html
      lang="en"
      className={montserrat.variable}
      data-scroll-behavior="smooth"
    >
      <body className="font-montserrat text-black-40">{children}</body>
    </html>
  );
}
