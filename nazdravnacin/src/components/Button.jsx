"use client";
import clsx from "clsx";

export default function Button({ type, text, color = "green" }) {
  return (
    <button
      type={type}
      className={clsx(
        "border py-4 px-8 rounded-full cursor-pointer",
        color == "white"
          ? "border-white-20 bg-white-20 "
          : "border-green-10 bg-green-10 hover:bg-green-10/90 ",
      )}
    >
      <p
        className={clsx(
          "text-sm",
          color == "white" ? "text-green-10" : "text-white-20",
        )}
      >
        {text}
      </p>
    </button>
  );
}
