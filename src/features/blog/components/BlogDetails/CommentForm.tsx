"use client";
import { useAddComment } from "@/features/apiHandlers/clientHandlers/useAddComment";
import Button from "@/shared/components/button";
import { FormProps } from "@/shared/types/type";
import { Edit2, Sms, User } from "iconsax-react";
import { useParams } from "next/navigation";
import React, { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";

function CommentForm() {
  const { blogSlug } = useParams();
  const {
    register,
    handleSubmit,
    formState: { isValid, errors },
    reset,
    setValue,
  } = useForm<FormProps>({
    mode: "onChange",
  });
  const { mutateAsync: addCommentFunc } = useAddComment();
  const [saveInformation, setSaveInformation] = useState(false);

  useEffect(() => {
    const savedName = localStorage.getItem("commentName");
    const savedEmail = localStorage.getItem("commentEmail");
    if (savedName) setValue("name", savedName);
    if (savedEmail) setValue("email", savedEmail);
  }, [setValue]);

  const handleCommentSubmit = async (values: FormProps) => {
    try {
      const response = await addCommentFunc({
        Email: values.email,
        Name: values.name,
        Text: values.comment,
        Slug: blogSlug as string,
      });
      if (response?.Message?.Status === "Success") {
        toast.success(response?.Message?.Text);
        reset();
        if (saveInformation) {
          localStorage.setItem("commentName", values.name);
          localStorage.setItem("commentEmail", values.email);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="mt-10" onSubmit={handleSubmit(handleCommentSubmit)}>
      <section
        className={`flex items-center border ${
          errors?.comment
            ? "border-red-400 bg-red-50"
            : "border-gray-200 bg-gray-100"
        } rounded-[25px] px-4 gap-2`}
      >
        <Edit2 color="var(--color-gray-500)" size={20} />
        <input
          type="text"
          placeholder="نظر"
          id=""
          className="w-full bg-transparent border-0 focus:border-0 focus:outline-0 py-3"
          {...register("comment", { required: "لطفا نظر خود را وارد کنید" })}
        />
      </section>
      {errors?.comment && (
        <p className="text-red-500 text-xs mt-1 pr-2">
          {errors?.comment?.message}
        </p>
      )}
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
              className="w-full bg-transparent border-0 py-3 focus:border-0 focus:outline-0"
              {...register("name", { required: "لطفا نام خود را وارد کنید" })}
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
              errors?.email
                ? "border-red-400 bg-red-50"
                : "border-gray-200 bg-gray-100"
            } rounded-[25px] px-4 gap-2`}
          >
            <Sms color="var(--color-gray-500)" size={20} />
            <input
              type="text"
              placeholder="ایمیل"
              id=""
              className="w-full bg-transparent py-3 border-0 focus:border-0 focus:outline-0"
              {...register("email", {
                required: "لطفا ایمیل خود را وارد کنید",
              })}
            />
          </section>
          {errors?.email && (
            <p className="text-red-500 text-xs mt-1 pr-2">
              {errors?.email?.message}
            </p>
          )}
        </section>
      </section>
      <section className="flex gap-3 items-center my-5">
        <input
          type="checkbox"
          name=""
          className="size-5 accent-pink-500"
          id="remember"
          checked={saveInformation}
          onChange={(e) => setSaveInformation(e.target.checked)}
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
  );
}

export default CommentForm;