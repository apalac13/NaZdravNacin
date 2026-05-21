"use client";
import Navigation from "./Navigation";

export default function PageWrapper({ children }) {
  return (
    <>
      <Navigation />
      {children}
    </>
  );
}
