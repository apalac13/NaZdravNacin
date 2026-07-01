"use client";
import { useState } from "react";
import InputField from "./InputField";
import { useTranslations } from "next-intl";

export default function Form({ config, type }) {
  const t = useTranslations("contact.form");
  const [reservationData, setReservationData] = useState({
    option: "",
    person: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setReservationData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...reservationData,
        formType: type,
      }),
    });

    if (response.ok) {
      alert("Prijava je uspješno poslana.");

      setReservationData({
        option: "",
        person: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-112.5 w-full flex flex-col items-center justify-center gap-6 border border-green-11 rounded-2xl py-8 lg:px-8 px-4"
    >
      {config.showSelect && (
        <label
          htmlFor="option"
          className="sm:text-sm text-xs font-medium text-green-10 max-w-100 w-full h-12.5 border border-green-10 bg-green-11 hover:bg-green-11/80 rounded-2xl flex items-center justify-center cursor-pointer"
        >
          <select
            name="option"
            value={reservationData.option}
            onChange={handleChange}
            id="option"
            className="cursor-pointer"
            required
          >
            {config.options.map((option, index) => (
              <option key={index} value={option} className="sm:text-sm text-xs">
                {option}
              </option>
            ))}
          </select>
        </label>
      )}
      <InputField
        id={"person"}
        label={t("fullName")}
        type={"text"}
        name={"person"}
        value={reservationData.person}
        onChange={handleChange}
      />
      <InputField
        id={"email"}
        label={t("email")}
        type={"email"}
        name={"email"}
        value={reservationData.email}
        onChange={handleChange}
      />
      <InputField
        id={"phone"}
        label={t("phone")}
        type={"text"}
        name={"phoneNumber"}
        value={reservationData.phoneNumber}
        onChange={handleChange}
      />
      <label
        htmlFor="message"
        className="flex flex-col items-center justify-center max-w-100 w-full"
      >
        <p className="self-start font-medium text-sm">
          {t("note")} <span className="font-normal">{t("optional")}</span>{" "}
        </p>
        <textarea
          type="text"
          rows={4}
          id="message"
          name="message"
          value={reservationData.message}
          onChange={handleChange}
          className="max-w-100 w-full sm:text-sm text-xs border border-green-11 rounded-2xl p-2 placeholder:text-sm "
        />
      </label>
      <button
        type="submit"
        className="max-w-100 w-full h-12.5  border border-green-10 bg-green-10 rounded-2xl hover:bg-green-10/90 cursor-pointer"
      >
        <p className="text-white-20 text-sm ">{t("submit")}</p>
      </button>
    </form>
  );
}
