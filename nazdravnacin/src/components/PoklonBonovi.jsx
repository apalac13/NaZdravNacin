"use client";
import PoklonBon from "./PoklonBon";

export default function PoklonBonovi() {
  const programi = ["Program 1", "Program 2", "Program 3", "Tjedan zdravlja"];

  return (
    <section
      id="poklonbonovi"
      className="w-full h-lvh flex flex-col  gap-28 justify-center items-center px-14  "
    >
      <div className="flex flex-col gap-2 items-center justify-center">
        <p className="text-lg text-green-10 font-medium ">POKLON BONOVI</p>
        <p className="text-2xl font-semibold text-center">
          Ovaj poklon bon mozete pokloniti
          <span className="text-green-10"> vašoj dragoj osobi</span> kako bi joj
          poklonili potrebni poticaj za
          <span className="text-green-10"> zdraviji zivot</span> i
          <span className="text-green-10"> potrebne promjene</span>
        </p>
      </div>
      <div className="flex relative w-full h-full">
        {programi.map((program, index) => (
          <PoklonBon key={index} program={program} index={index} />
        ))}
      </div>
    </section>
  );
}
