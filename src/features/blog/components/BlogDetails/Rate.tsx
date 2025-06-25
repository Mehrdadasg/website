"use client";
import Image from "next/image";
import React, { useState } from "react";

const rateList = [
  {
    Id: 1,
    Url: "/emoji/1.png",
    Text: "بد بود",
  },
  {
    Id: 2,
    Url: "/emoji/2.png",
    Text: "بد نبود",
  },
  {
    Id: 3,
    Url: "/emoji/3.png",
    Text: "خوب بود",
  },
  {
    Id: 4,
    Url: "/emoji/4.png",
    Text: "خیلی خوب",
  },
  {
    Id: 5,
    Url: "/emoji/5.png",
    Text: "عالی بود",
  },
];

function Rate() {
  const [rate, setRate] = useState(0);

  const handleRate = async (id: number) => {
    setRate(id);
  };

  return (
    <section className="grid grid-cols-5 gap-2 my-10">
      {rateList?.map((r) => (
        <label
          key={r?.Id}
          className={`flex flex-col cursor-pointer border-2 ${
            rate === r?.Id
              ? "bg-pink-50 border-pink-500 shadow-sm shadow-pink-500"
              : "bg-gray-100 border-gray-100"
          } rounded-[6px] gap-3 w-full justify-center items-center h-[115px]`}
        >
          <input
            type="checkbox"
            value={r?.Id}
            name=""
            id=""
            className="hidden"
            onChange={() => handleRate(r?.Id)}
          />
          <Image src={r?.Url} width={24} height={24} alt={r?.Text} />
          <span
            className={`text-xs text-center ${
              rate === r?.Id ? "text-pink-500" : "text-gray-500"
            }`}
          >
            {r?.Text}
          </span>
        </label>
      ))}
    </section>
  );
}

export default Rate;
