"use client";
import { useAddRate } from "@/features/apiHandlers/clientHandlers/useAddRate";
import Image from "next/image";
import React, { useState } from "react";
import toast from "react-hot-toast";

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

function Rate({slug}:{slug:string}) {
  const [rate, setRate] = useState<number | null>(0);
  const {mutateAsync:addRateFunc} =useAddRate();

  const handleRate = async (id: number) => {
    if (rate === id) {
      setRate(null);
    } else {
      setRate(id);
      try {
        const response = await addRateFunc({
          Slug: slug,
          Rate: id,   // 👈 اینجا Rate رو هم پاس می‌دیم
        })
        toast.success(response?.Message?.Text)        
      } catch (error) {
        console.error("خطا:", error);
      }
    }
  };

  return (
    <section className="grid grid-cols-5 gap-2 my-10" id="rate-section">
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
