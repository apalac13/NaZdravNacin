"use client";
import Kartica from "./Kartica";

export default function Kartice() {
  const cards = [
    {
      icon: "/icons/person.svg",
      title: "Individualan pristup",
      text: "Svaki plan prilagođen je vašem tijelu, ciljevima i načinu života.",
    },
    {
      icon: "/icons/school.svg",
      title: "Stručan tim",
      text: "Radimo uz podršku nutricionista, herbalista i stručnjaka prirodne medicine.",
    },
    {
      icon: "/icons/dinner-dining.svg",
      title: "Bez ekstremnih dijeta",
      text: "Bez izgladnjivanja i nezdravih metoda — samo održiv pristup.",
    },
    {
      icon: "/icons/achivement.svg",
      title: "Dugoročni rezultati",
      text: "Gradimo navike koje ostaju s vama cijeli život.",
    },
  ];

  return (
    <div className="bg-green-11 flex gap-8 items-center justify-center py-20">
      {cards.map((card, index) => (
        <Kartica key={index} card={card} />
      ))}
    </div>
  );
}
