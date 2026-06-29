import Image from "next/image";

export default function Bullet({ text }) {
  return (
    <div className="flex gap-1">
      <div className="relative w-6 h-6 shrink-0">
        <Image alt="check icon" src={"/icons/checkcircle.svg"} fill />
      </div>
      <p className="sm:text-base text-sm">{text}</p>
    </div>
  );
}
