import { Montserrat } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://nazdravnacin.com"),

  title: {
    default: "Na Zdrav Način",
    template: "%s | Na Zdrav Način",
  },

  description:
    "Individualni nutricionistički programi, zdravo mršavljenje, detox programi i Tjedni zdravlja u Istri uz stručni tim nutricionista i prirodne medicine.",

  alternates: {
    canonical: "/",
    languages: {
      hr: "/hr",
      en: "/en",
    },
  },

  openGraph: {
    type: "website",
    title: "Na Zdrav Način",
    description: "Nutricionistički programi i Tjedni zdravlja u Istri.",
    url: "https://nazdravnacin.com",
    siteName: "Na Zdrav Način",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
      },
    ],
  },

  robots: {
    index: true,
    follow: true,
  },

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
    <html data-scroll-behavior="smooth">
      <body className={`${montserrat.className} font-montserrat text-black-40`}>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "HealthAndBeautyBusiness",
              name: "Na Zdrav Način",
              url: "https://nazdravnacin.com",
              description:
                "Nutricionistički programi, zdravo mršavljenje i Tjedni zdravlja u Istri.",
            }),
          }}
        />
        {children}
      </body>
    </html>
  );
}
