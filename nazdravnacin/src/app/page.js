"use client";
import Navigation from "@/components/Navigation";
import Pocetna from "@/components/Pocetna";
import Kartice from "@/components/Kartice";
import Onama from "@/components/Onama";
import Paketi from "@/components/Paketi";
import TjedniZdravlja from "@/components/TjedniZdravlja";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Pocetna />
      <Kartice />
      <Onama />
      <Paketi />
      <TjedniZdravlja />
    </div>
  );
}
