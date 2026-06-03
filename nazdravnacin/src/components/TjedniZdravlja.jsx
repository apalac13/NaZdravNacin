import Image from "next/image";
import Bullet from "./Bullet";
import Button from "./Button";
import Link from "next/link";

export default function TjedniZdravlja() {
  const items = [
    "Organiziran smještaj, hranu i piće kroz cijele dane, prijevoz za potrebe programa",
    "Organizirani raspored aktivnosti i atraktivne destinacije",
    "Boravak u prirodi predivne Istre",
    "Konzumacija svih namirnice iz prirodnog uzgoja",
    "Vodstvo stručnog tima",
    "Male grupe (do 20 ljudi)",
    "Balans aktivnosti, odmora i edukacije",
    "Program je osmišljen da te aktivira, ali uz poštivanje tvog tempa",
  ];

  return (
    <section
      id="tjednizdravlja"
      className="w-full min-h-lvh overflow-hidden relative"
    >
      <Image
        alt="vinograd"
        src={"/images/vinograd.jpg"}
        fill
        className="object-cover"
      />
      <div className="absolute inset-0 bg-amber-600/10"></div>
      <div className="w-full relative px-14 py-20 flex flex-col gap-14 items-center justify-center">
        <div className="flex flex-col items-center justify-center gap-14">
          <div className="flex flex-col gap-px items-center justify-center">
            <p className="text-lg text-green-10 font-medium ">PREMIUM PONUDA</p>
            <p className="text-2xl font-semibold">TJEDNI ZDRAVLJA IZLETI</p>
            <p className="text-2xl  font-semibold">
              All-inclusive iskustvo za potpuni reset tijela i uma{" "}
              <span className="text-green-10">u Istri</span>
            </p>
          </div>
          <p className="text-base italic font-medium text-center ">
            Posveti sebi 7 dana u kojima je tvoje zdravlje na prvom mjestu. Uz
            podršku stručnog tima nutricionista, herbalista i liječnika prirodne
            medicine, prolaziš kroz iskustvo koje spaja edukaciju, prirodu i
            aktivan odmor.
          </p>
        </div>
        <div className="w-full relative bg-white-20 flex flex-col gap-5 items-center justify-center py-14 border border-green-11 rounded-2xl">
          <div className="absolute -top-5 z-10 w-52 h-10 bg-green-11 flex items-center justify-center rounded-2xl">
            <p className="text-green-10 text-sm ">ALL INCLUSIVE</p>
          </div>
          <div className=" bg-green-10 w-full overflow-hidden">
            <div className="flex whitespace-nowrap animate-infinite-scroll">
              <p className="text-white-20 text-sm font-medium px-8">
                Nadolazeći termini: 27.09 - 04.10.2026, 04.10 - 11.10.2026,
                11.10 - 18.10.2026 itd... Broj mjesta je ograničen, rezerviraj
                svoje mjesto na vrijeme!
              </p>

              <p className="text-white-20 text-sm font-medium px-8">
                Nadolazeći termini: 27.09 - 04.10.2026, 04.10 - 11.10.2026,
                11.10 - 18.10.2026 itd... Broj mjesta je ograničen, rezerviraj
                svoje mjesto na vrijeme!
              </p>
            </div>
          </div>
          <div className=" self-start px-14 flex flex-col gap-6">
            <div className="flex flex-col ">
              <p className="text-xl text-green-10 font-semibold ">
                850€
                <span className="text-base text-black-40 font-normal">
                  /po osobi
                </span>
              </p>
              <p className="text-xl font-semibold">Što je uključeno:</p>
            </div>
            <div className="grid grid-cols-2 gap-y-2">
              {items.map((item, index) => (
                <Bullet key={index} text={item} />
              ))}
            </div>
            <p className="text-center">
              Cijena ovog All-inclusive tjedna iznosi
              <span className="font-medium"> 850€ po osobi</span> sa time da
              svaki sudionik zdravog tjedna kao poklon prima{" "}
              <span className="font-medium"> poklon bon od 10%</span>
              na sve ostale naše usluge i
              <span className="font-medium"> 10% na Tjedan zdravlja</span> za
              neki od iducih termina
              <span className="font-medium"> unutar 15 mjeseci</span>.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center gap-6 mt-8">
            <p className="font-medium">
              Pogledaj termine, pošalji upit i šaljemo ti detaljan program i
              lokaciju
            </p>
            <Link
              href={"/kontakt?type=tjednizdravlja"}
              className="max-w-60 w-full"
            >
              <Button type={"button"} text={"POŠALJI UPIT"} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
