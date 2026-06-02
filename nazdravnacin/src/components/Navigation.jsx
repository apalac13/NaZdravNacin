"use client";
import Image from "next/image";
import Button from "./Button";

export default function Navigation() {
  const navItems = [
    { name: "Početna", link: "/#pocetna" },
    { name: "O Nama", link: "/#onama" },
    { name: "Paketi", link: "/#paketi" },
    { name: "Tjedni zdravlja", link: "/#tjednizdravlja" },
    { name: "Galerija", link: "/#galerija" },
    { name: "Poklon bonovi", link: "/#poklonbonovi" },
    { name: "Newsletter", link: "/#newsletter" },
  ];

  return (
    <nav className="py-6 flex items-center justify-center gap-20 bg-white-20 border-b border-green-11 fixed top-0 z-50 w-full">
      <a href={"/"}>
        <div className="relative w-36 h-14">
          <Image alt="logo" src={"/icons/logo.svg"} fill />
        </div>
      </a>
      <div className="flex gap-6 ">
        {navItems.map((item) => (
          <a key={item.link} href={item.link}>
            <p className="text-base text-green-10 font-medium hover:text-green-10/70">
              {item.name}
            </p>
          </a>
        ))}
        <div className="text-base text-green-10 font-medium ">
          <span className="hover:text-green-10/70 cursor-pointer">HR</span> /{" "}
          <span className="hover:text-green-10/70 cursor-pointer">ENG</span>
        </div>
      </div>
      <Button type={"button"} text={"KONTAKTIRAJTE NAS"} />
    </nav>
  );
}
