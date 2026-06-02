"use client";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function PageWrapper({ children }) {
  return (
    <>
      <Navigation />
      {children}
      <Footer />
    </>
  );
}
