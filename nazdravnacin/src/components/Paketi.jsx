"use client";
import Image from "next/image";
import Paket from "./Paket";
import Button from "./Button";

export default function Paketi() {
  const commonItems = [
    "Analiza prehrambenih navika",
    "Određivanje trenutnog sastava tijela",
    "Postavljanje ciljeva",
    "Uvid u zdravstveno stanje",
    "Nutricionističko praćenje",
    "Stalna podrška",
    `Online video razgovori (disciplinske konzultacije, uvid u rezultate,daljne smjernice)`,
    "Edukacija o prehrani",
    "Edukacija o zdravim i lošim navikama",
    `Izrada programa prehrane (jelovnici…)`,
    `Izrada dijetoterapiskog programa prehrane (ukoliko postoje neke alergije ili bolesti)`,
    "Recepti",
    "Liste i mogućnosti nabavki",
  ];

  const packages = [
    {
      price: "150€",
      titleOne: "PROGRAM 1",
      titleTwo: "Osnovni",
      description:
        "Ovaj program je za one kojima su potrebne temeljne smjernice o prehrani.",
      items: [
        `2x online video konzultacije (po 60 min)`,
        "Osnovna edukacija o pravilnoj prehrani",
        "Individualni jelovnik za 14 dana",
        "Jasne smjernice za početak promjene navika",
        "Podrška i upute za daljnje korake",
      ],
    },
    {
      price: "100€",
      titleOne: "PROGRAM 2",
      titleTwo: `Transformacija\n(7 mjeseci)`,
      description:
        "Ovaj program je sedmomjesečni program prema zdravlju. Kroz ovaj program se stvaraju dobre navike, a loše prevladavaju i sigurno se gubi višak kilograma. U ovom procesu će se sa svakim polaznikom prisupati i voditi individualno kroz cijelih 7 mjeseci kako bi ostvario/la svoje ciljeve.",
      items: [
        "Individualni pristup kroz cijeli program",
        "Trajanje: 7 mjeseci",
        `Online konzultacije svaka 2 tjedna (60 min)`,
        "Edukacija o prehrani i zdravim navikama",
        "Motivacijska i kontinuirana podrška",
        "Redovna analiza napretka",
        "Novi individualni jelovnici",
        "Novi recepti i praktične smjernice",
        "Postepeno usvajanje zdravog načina života",
        "Dugoročno stvaranje održivih navika",
      ],
    },
    {
      price: "130€",
      titleOne: "PROGRAM 3",
      titleTwo: "Detox & Regeneracija",
      description:
        "Program čišcenja i jačanja organizma koji se preporuča barem jednom godišnje kako bi se čovjek očistio od svih unesenih  toksina i za regeneraciju organizma",
      items: [
        "2x online video konzultacije",
        "Smjernice za detoks i regeneraciju",
        "Edukacija o pravilnom odabiru namirnica",
        "Individualne preporuke za organizam",
      ],
    },
  ];

  return (
    <div className="w-full h-full flex flex-col gap-28 items-center justify-center bg-green-11 px-14 py-24">
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-lg text-green-10 font-medium ">PAKETI</p>
        <p className="text-2xl font-semibold">PROGRAMI PRILAGOĐENI VAMA</p>
      </div>
      <div className="w-full flex gap-4 items-center">
        <div className="w-100 h-full flex flex-col gap-10 bg-white-20 rounded-2xl border border-white-20 px-6 py-8">
          <p className="text-lg font-medium self-center">
            Svi naši programi uključuju
          </p>
          <div className="flex flex-col gap-3">
            {commonItems.map((item, index) => (
              <div key={index} className="flex gap-1">
                <div className="relative w-7 h-7 shrink-0">
                  <Image
                    alt="check icon"
                    src={"/icons/check.svg"}
                    fill
                    className="object-contain "
                  />
                </div>
                <p className="text-base">{item}</p>
              </div>
            ))}
          </div>
        </div>
        {packages.map((pack, index) => (
          <Paket key={index} pack={pack} />
        ))}
      </div>
      <div className="flex flex-col gap-8 items-center justify-center">
        <p className="text-2xl font-semibold">
          Niste sigurni koji program je za vas ?
        </p>
        <Button type={"button"} text={`ZATRAŽI PREPORUKU \u2192`} />
      </div>
    </div>
  );
}
