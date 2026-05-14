"use client";
import Image from "next/image";
import Button from "./Button";

export default function Pocetna() {
  return (
    <section
      id="pocetna"
      className="w-full h-lvh flex items-center justify-between px-14 pt-24 "
    >
      <div className="w-1/2 flex flex-col gap-7">
        <div className="flex flex-col text-5xl gap-2 font-semibold text-green-10 ">
          <p>Ovdje počinje</p>
          <p>stvaranje zdravih navika!</p>
        </div>
        <div className="text-2xl ">
          <p>Naš stručni tim će vam pomoći da prehrana</p>{" "}
          <p>postane alat za zdravlje, a gubitak viška kilograma</p>
          <p> bude na zdrav i siguran način.</p>
        </div>
        <div className="flex  gap-5">
          <Button type={"button"} text={"ZAPOČNITE PROGRAM"} />
          <Button
            type={"button"}
            text={"TJEDNI ZDRAVLJA U ISTRI"}
            color="white"
          />
        </div>
      </div>
      <div className="w-1/2 flex justify-end">
        <Image alt="plate" src={"/images/plate.png"} width={500} height={500} />
      </div>
    </section>
  );
}
