"use client";
import Image from "next/image";

export default function Footer() {
  const navItems = [
    { name: "Početna", link: "#pocetna" },
    { name: "O Nama", link: "#onama" },
    { name: "Paketi", link: "#paketi" },
    { name: "Tjedni zdravlja", link: "#tjednizdravlja" },
    { name: "Galerija", link: "#galerija" },
    { name: "Poklon bonovi", link: "#poklonbonovi" },
    { name: "Newsletter", link: "#newsletter" },
  ];

  const contactInformations = [
    {
      alt: "mail",
      src: "/icons/mail.svg",
      text: "programinazdravnacin@gmail.com",
    },
    {
      alt: "mail",
      src: "/icons/mail.svg",
      text: "izletinazdravnacin@gmail.com",
    },
    {
      alt: "phone",
      src: "/icons/phone.svg",
      text: "+385995048207",
    },
    {
      alt: "location",
      src: "/icons/location.svg",
      text: "Istra",
    },
  ];

  return (
    <div className="bg-green-10 flex flex-col items-center justify-center">
      <div className="py-17 max-w-7xl w-full flex  items-start justify-between">
        <div className="self-center flex flex-col gap-5 max-w-75 w-full">
          <div className="relative w-36 h-14 ">
            <Image
              alt="footer logo"
              src={"/icons/logofooter.svg"}
              fill
              className="object-contain"
            />
          </div>
          <div className="w-full h-px bg-green-11"></div>
          <p className="text-green-11 text-sm text-balance">
            “Stručno vodstvo kroz zdravije prehranu, stvaranje zdravih navika i
            siguran put prema boljem zdravlju.”
          </p>
        </div>
        <div className="flex flex-col gap-6 text-white-20">
          <p className="font-medium">NAVIGACIJA</p>
          <div className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.link}
                href={item.link}
                className="hover:text-green-11 text-sm"
              >
                <p>{item.name}</p>
              </a>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 text-white-20">
          <p className="font-medium">KONTAKT</p>
          <div className="flex flex-col gap-3">
            {contactInformations.map((contact, index) => (
              <div
                key={index}
                className="flex gap-2 items-center justify-start cursor-pointer "
              >
                <div className="relative w-6 h-6 ">
                  <Image alt={contact.alt} src={contact.src} fill />
                </div>
                <p className="text-sm text-white-20 hover:text-green-11">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col gap-6 text-white-20">
          <p className="font-medium">DRUŠTVENE MREŽE</p>
          <div className="flex gap-5">
            <div className="relative w-10 h-10 cursor-pointer rounded-full hover:bg-white-20 ">
              <Image alt="facebook icon" src={"/icons/facebook.svg"} fill />
            </div>
            <div className="relative w-10 h-10 cursor-pointer  rounded-full hover:bg-white-20">
              <Image alt="instagram icon" src={"/icons/instagram.svg"} fill />
            </div>
          </div>
          <p className="text-sm">
            Za sva pitanja i prijave slobodno nas kontaktirajte.
          </p>
        </div>
      </div>
      <div className="w-full border-t border-green-11">
        <div className="max-w-7xl mx-auto text-green-11 text-xs flex justify-between py-2">
          <p>© 2026 Na Zdrav način. Sva prava pridržana.</p>
          <p>Pravila privatnosti. Uvjeti korištenja.</p>
        </div>
      </div>
    </div>
  );
}
