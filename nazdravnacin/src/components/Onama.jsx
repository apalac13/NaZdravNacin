"use client";
import Image from "next/image";
import Button from "./Button";

export default function Onama() {
  return (
    <section
      id="onama"
      className="w-full h-lvh flex justify-between items-center px-14 my-12"
    >
      <div className="w-1/2">
        <div className="relative w-150 h-125 overflow-hidden rounded-xl border border-green-10">
          <Image
            alt="o nama slika"
            src={"/images/onama.jpg"}
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black-40 to-black-40/55"></div>
          <button className="absolute mb-5 bottom-0 left-1/3  border border-white-20 bg-transparent hover:bg-gray-30/80 py-4 px-6 rounded-full cursor-pointer max-w-64">
            <p className="text-sm text-white-20">
              Zavirite u našu galeriju &#8594;
            </p>
          </button>
        </div>
      </div>
      <div className="w-1/2 flex flex-col gap-7">
        <div className="flex flex-col gap-1">
          <p className="text-lg text-green-10 font-medium ">O NAMA</p>
          <p className="text-2xl font-semibold ">
            Zdravlju Vaš Partner Na Putu Prema{" "}
            <span className="text-green-10">Zdravlju</span>!
          </p>
        </div>
        <div className="flex flex-col gap-6">
          <p>
            Naš tim se sastoji od stručnih
            <span className="font-medium"> nutricionista</span>,
            <span className="font-medium"> herbalista</span> i
            <span className="font-medium"> lječnika prirodne medicine </span>
            kojima je cilj da pomognemo osobama da iskoriste svoje potencijale i
            dođu do trenutka u kojem će biti ponosni na svoj rezultat. Naš
            pristup je individualan prema svakome.
            <span className="font-medium"> Prioritet</span> našem timu je{" "}
            <span className="font-medium">vaše zdravlje</span>, a naš odnos
            prema prehrani je siguran i zdrav te se temelji na najkvalitetnijim
            istrahivanjima jer trebamo shvatiti da danas postoje jako opasne
            dijete koje koriste sulude metode i nezdrave kemijske supstance.
          </p>
          <p>
            <span className="font-medium">Naš zadatak</span> je da vi sa načinom
            zivota i prehranom uvijek ostanete zdrave kilaze, snage, zdravih
            kognitivnih funkcija, bistrine i svjezine. Mi također shvaćamo
            potrebe da se covjek ne smije siliti ni na šta i da je svakom
            potrebno da ima slobode kako bi njegovo zadovoljstvo bilo jače.
          </p>
        </div>
        <Button type={"button"} text={"ZAPOČNITE PROGRAM"} />
      </div>
    </section>
  );
}
