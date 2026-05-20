import Image from "next/image";

export default function Bullet({ text }) {
  return (
    <div className="flex gap-1">
      <div className="relative w-6 h-6">
        <Image alt="check icon" src={"/icons/checkcircle.svg"} fill />
      </div>
      <p>{text}</p>
    </div>
  );
}
