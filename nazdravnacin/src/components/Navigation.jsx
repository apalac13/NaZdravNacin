"use client";
import Image from "next/image";
import Link from "next/link";
import Button from "./Button";

export default function Navigation() {
  const navItems = [
    { name: "Početna", link: "#pocetna" },
    { name: "O Nama", link: "#onama" },
    { name: "Paketi", link: "#paketi" },
    { name: "Tjedni zdravlja", link: "#tjednizdravlja" },
    { name: "Galerija", link: "#galerija" },
    { name: "Poklon bonovi", link: "#poklonbonovi" },
    { name: "Newsletter", link: "#newsletter" },
  ];

  return (
    <nav className="py-7 flex items-center justify-center gap-24 border-b border-green-11 fixed top-0 w-full">
      <Link href={"/"}>
        <Image
          alt="logo"
          src={"/icons/logo.svg"}
          width={140}
          height={60}
          className="h-auto"
        />
      </Link>
      <div className="flex gap-6 ">
        {navItems.map((item) => (
          <Link key={item.link} href={item.link}>
            <p className="text-lg text-green-10 font-medium hover:text-green-10/70">
              {item.name}
            </p>
          </Link>
        ))}
        <div className="text-lg text-green-10 font-medium ">
          <span className="hover:text-green-10/70 cursor-pointer">HR</span> /{" "}
          <span className="hover:text-green-10/70 cursor-pointer">ENG</span>
        </div>
      </div>
      <Button type={"button"} text={"KONTAKTIRAJTE NAS"} />
    </nav>
  );
}
