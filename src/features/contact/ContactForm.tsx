"use client";
import Button from "@/shared/components/button";
import { ContactFormProps } from "@/shared/types/type";
import { Call, Sms, User } from "iconsax-react";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useAddMessage } from "../apiHandlers/clientHandlers/useAddMessage";
import toast from "react-hot-toast";

type Props = {};

function ContactForm({}: Props) {
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
    setValue,
  } = useForm<ContactFormProps>({
    mode: "onChange",
  });
  const { mutateAsync: addCommentFunc } = useAddMessage();
  const [saveInformation, setSaveInformation] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("commentName");
    const savedPhone = localStorage.getItem("commentPhone");
    if (savedName) setValue("name", savedName);
    if (savedPhone) setValue("phone", savedPhone);
  }, [setValue]);

  const handleCommentSubmit = async (values: ContactFormProps) => {
    try {
      const response = await addCommentFunc({
        Phone: values.phone,
        Name: values.name,
        Text: values.comment,
      });
      if (response?.Message?.Status === "Success") {
        toast.success(response?.Message?.Text);
        reset();
        if (saveInformation) {
          localStorage.setItem("commentName", values.name);
          localStorage.setItem("commentPhone", values.phone);
        }
      }
    } catch (error) {}
  };

  return (
    <section className="md:shadow-sm shadow-gray-200 md:border border-gray-200 rounded-[12px] md:px-10 md:py-16 mt-10 max-w-[40rem] md:max-w-4xl mx-auto ">
      <p className="text-4xl">
        <b>تماس با ما</b>
      </p>
      <p className="text-gray-500 text-lg mt-5">
        از طریق فرم زیر می تونی پیامت رو به ما برسونی .
      </p>
      <form className="mt-10" onSubmit={handleSubmit(handleCommentSubmit)}>
        <section className="mt-4 flex flex-col sm:flex-row gap-5">
          <section className="sm:w-1/2">
            <section
              className={`flex items-center border ${
                errors?.name
                  ? "border-red-400 bg-red-50"
                  : "border-gray-200 bg-gray-100"
              } rounded-[25px] px-4 gap-2`}
            >
              <User color="var(--color-gray-500)" size={20} />
              <input
                type="text"
                placeholder="نام"
                id=""
                className="w-full py-3 bg-transparent border-0 focus:border-0 focus:outline-0"
                {...register("name", {
                  required: "لطفا نام خود را وارد کنید",
                })}
              />
            </section>
            {errors?.name && (
              <p className="text-red-500 text-xs mt-1 pr-2">
                {errors?.name?.message}
              </p>
            )}
          </section>
          <section className="sm:w-1/2">
            <section
              className={`flex items-center border ${
                errors?.phone
                  ? "border-red-400 bg-red-50"
                  : "border-gray-200 bg-gray-100"
              } rounded-[25px] px-4 gap-2`}
            >
              <Call color="var(--color-gray-500)" size={20} />
              <input
                type="text"
                placeholder="شماره همراه"
                id=""
                className="w-full py-3 bg-transparent border-0 focus:border-0 focus:outline-0"
                {...register("phone", {
                  required: "لطفا شماره همراه خود را وارد کنید",
                })}
              />
            </section>
            {errors?.phone && (
              <p className="text-red-500 text-xs mt-1 pr-2">
                {errors?.phone?.message}
              </p>
            )}
          </section>
        </section>
        <section
          className={`flex items-center border ${
            errors?.comment
              ? "border-red-400 bg-red-50"
              : "border-gray-200 bg-gray-100"
          } rounded-[25px] px-4 mt-5`}
        >
          <textarea
            placeholder="نظر"
            id=""
            rows={4}
            className="w-full py-3 bg-transparent border-0 focus:border-0 focus:outline-0 resize-none"
            {...register("comment", {
              required: "لطفا نظر خود را وارد کنید",
            })}
          ></textarea>
        </section>
        {errors?.comment && (
          <p className="text-red-500 text-xs mt-1 pr-2">
            {errors?.comment?.message}
          </p>
        )}
        <section className="flex gap-3 items-center my-5">
          <input
            type="checkbox"
            name=""
            className="size-5 accent-pink-500"
            id="remember"
          />
          <label htmlFor="remember" className="text-xs text-gray-700">
            ذخیره نام و ایمیل برای دفعات بعد
          </label>
        </section>
        <Button
          type="submit"
          className="text-[13px] font-bold w-full cursor-pointer"
          isValid={isValid}
        >
          ارسال نظر
        </Button>
      </form>
    </section>
  );
}

export default ContactForm;
