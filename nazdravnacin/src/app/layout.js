import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
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
    <html>
      <body className={`${montserrat.className} font-montserrat text-black-40`}>
        {children}
      </body>
    </html>
  );
}
