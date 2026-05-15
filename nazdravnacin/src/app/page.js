"use client";
import Navigation from "@/components/Navigation";
import Pocetna from "@/components/Pocetna";
import Kartice from "@/components/Kartice";
import Onama from "@/components/Onama";

export default function Home() {
  return (
    <div>
      <Navigation />
      <Pocetna />
      <Kartice />
      <Onama />
    </div>
  );
}
