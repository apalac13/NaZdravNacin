"use client";
import Image from "next/image";

export default function Newsletter() {
  return (
    <section
      id="newsletter"
      className="w-full h-full px-14 pb-24 flex flex-col gap-5 items-center justify-center"
    >
      <div className="relative w-20 h-20">
        <Image alt="newsletter icon" src={"/icons/newsletter.svg"} fill />
      </div>
      <div className="flex flex-col items-center justify-center gap-11">
        <div className="flex flex-col gap-px items-center justify-center">
          <p className="text-lg text-green-10 font-medium ">NEWSLETTER</p>
          <p className="text-2xl font-semibold ">
            PRIDRUŽITE SE NAŠEM
            <span className="text-green-10"> NEWSLETTERU</span>
          </p>
          <p className="text-2xl  font-semibold">
            Saznajte prvi o prehrani, zdravim navikama, receptima i novostima
          </p>
        </div>
        <div className="w-full flex flex-col gap-6 items-center justify-center">
          <div className="max-w-187.5 w-full flex gap-3">
            <input
              type="email"
              placeholder="Unesite vašu email adresu..."
              className="w-full h-12.5 border border-black-40 rounded-2xl p-3 placeholder:text-sm"
            />
            <button
              type="button"
              className="w-42.5 h-12.5 border border-green-10 bg-green-10 rounded-2xl hover:bg-green-10/90 cursor-pointer"
            >
              <p className="text-white-20 text-xs ">PRETPLATI SE</p>
            </button>
          </div>
          <p className="text-gray-30">
            Bez neželjene pošte. Odjava u bilo kojem trenutku.
          </p>
        </div>
      </div>
    </section>
  );
}
