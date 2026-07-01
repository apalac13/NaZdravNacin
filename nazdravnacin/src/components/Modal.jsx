"use client";
import { useState, useEffect } from "react";
import InputField from "./InputField";
import { useTranslations } from "next-intl";
import { motion } from "motion/react";

export default function Modal({ isOpen, onClose }) {
  const t = useTranslations("gift");
  const f = useTranslations("contact.form");
  const d = useTranslations("contact");
  const vouchers = [
    `${t("titleCard")} - ${t("programs.program1")}`,
    `${t("titleCard")} - ${t("programs.program2")}`,
    `${t("titleCard")} - ${t("programs.program3")}`,
    `${t("titleCard")} - ${t("programs.program4")}`,
  ];

  const [data, setData] = useState({
    voucher: "",
    person: "",
    email: "",
    phoneNumber: "",
    message: "",
  });

  if (!isOpen) return null;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...data,
        formType: "voucher",
      }),
    });

    if (response.ok) {
      alert("Mail je uspješno poslan.");
      onClose();

      setData({
        voucher: "",
        person: "",
        email: "",
        phoneNumber: "",
        message: "",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.2, duration: 0.1 }}
      className="fixed inset-0 z-9999 overflow-y-auto"
    >
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />
      <div className="min-h-full flex items-center justify-center p-4">
        <div className="relative z-10 w-[95%] max-w-xl rounded-3xl bg-white-20 p-8 shadow-2xl max-h-[90vh] overflow-y-auto">
          <button
            type="button"
            onClick={onClose}
            className="absolute right-5 top-5 text-2xl cursor-pointer"
          >
            ✕
          </button>

          <p className="sm:text-lg text-md font-medium mb-8 text-center">
            {d("contactPage.description")}
          </p>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-5 w-full items-center"
          >
            <label
              htmlFor="voucher"
              className="sm:text-sm text-xs font-medium text-green-10 max-w-100 w-full h-12.5 border border-green-10 bg-green-11 hover:bg-green-11/80 rounded-2xl flex items-center justify-center cursor-pointer"
            >
              <select
                name="voucher"
                value={data.voucher}
                onChange={handleChange}
                id="voucher"
                className="cursor-pointer "
                required
              >
                {vouchers.map((voucher, index) => (
                  <option
                    key={index}
                    value={voucher}
                    className="sm:text-sm text-xs"
                  >
                    {voucher}
                  </option>
                ))}
              </select>
            </label>
            <InputField
              id={"person"}
              label={f("fullName")}
              type={"text"}
              name={"person"}
              value={data.person}
              onChange={handleChange}
            />
            <InputField
              id={"email"}
              label={f("email")}
              type={"email"}
              name={"email"}
              value={data.email}
              onChange={handleChange}
            />
            <InputField
              id={"phone"}
              label={f("phone")}
              type={"text"}
              name={"phoneNumber"}
              value={data.phoneNumber}
              onChange={handleChange}
            />
            <label
              htmlFor="message"
              className="flex flex-col items-center justify-center max-w-100 w-full"
            >
              <p className="self-start font-medium text-sm">
                {f("note")}{" "}
                <span className="font-normal">{f("optional")}</span>{" "}
              </p>
              <textarea
                type="text"
                rows={4}
                id="message"
                name="message"
                value={data.message}
                onChange={handleChange}
                className="max-w-100 w-full text-sm border border-green-11 rounded-2xl p-2 placeholder:text-sm "
              />
            </label>
            <button
              type="submit"
              className="max-w-100 w-full h-12.5  border border-green-10 bg-green-10 rounded-2xl hover:bg-green-10/90 cursor-pointer"
            >
              <p className="text-white-20 text-sm ">{f("submit")}</p>
            </button>
          </form>
        </div>
      </div>
    </motion.div>
  );
}
