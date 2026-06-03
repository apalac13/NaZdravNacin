"use client";

export default function InputField({ id, label, type, name, value, onChange }) {
  return (
    <label
      htmlFor={id}
      className=" flex flex-col gap-px items-center justify-center max-w-100 w-full "
    >
      <p className="self-start font-medium text-sm">{label}</p>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        onChange={onChange}
        className="max-w-100 w-full text-sm h-12.5 border border-green-11 rounded-2xl p-2"
        required
      />
    </label>
  );
}
