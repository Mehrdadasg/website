import { Button } from "@/components/ui/button";
import ArticleCard from "@/shared/components/article-card";
import SectionWrapper from "@/shared/hoc/section-wrapper";
import { ArrowLeft2 } from "iconsax-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const articleItems = [
    {
      badgeText: "اقدام به بارداری",
      time: "1 دقیقه مطالعه",
      title: "روزه گرفتن در بارداری مجاز است؟",
      imageAlt: "روزه گرفتن در بارداری مجاز است؟",
      imageSrc: "/b1.png",
      linkHref: "",
      description:
        "گاهی برخی از خانم‌ها که قصد بارداری دارند، با وجود داشتن رابطه جنسی متعدد، موفق به بارداری نمی‌شوند. گاهی نیز برخی از خانم‌ها، بارداری ناخواسته را تجربه می‌کنند",
    },
    {
      badgeText: "اقدام به بارداری",
      time: "1 دقیقه مطالعه",
      title: "راه های تشخیص زمان شروع تخمک گذاری",
      imageAlt: "روزه گرفتن در بارداری مجاز است؟",
      imageSrc: "/b1.png",
      linkHref: "",
      description:
        "گاهی برخی از خانم‌ها که قصد بارداری دارند، با وجود داشتن رابطه جنسی متعدد، موفق به بارداری نمی‌شوند. گاهی نیز برخی از خانم‌ها، بارداری ناخواسته را تجربه می‌کنند",
    },
    {
      badgeText: "اقدام به بارداری",
      time: "1 دقیقه مطالعه",
      title: "روزه گرفتن در بارداری مجاز است؟",
      imageAlt: "روزه گرفتن در بارداری مجاز است؟",
      imageSrc: "/b1.png",
      linkHref: "",
      description:
        "گاهی برخی از خانم‌ها که قصد بارداری دارند، با وجود داشتن رابطه جنسی متعدد، موفق به بارداری نمی‌شوند. گاهی نیز برخی از خانم‌ها، بارداری ناخواسته را تجربه می‌کنند",
    },
  ];

function LastedArticles() {

  return (
    <SectionWrapper className="pt-5 pb-24 px-3 md:px-0">
      <section className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <span className="hidden sm:flex size-[44px] bg-orange-50 rounded-full justify-center items-center">
            <Image
              src="/fire.png"
              className="w-[19px] h-[23px]"
              width={19}
              height={23}
              alt="آخرین های مجله"
            />
          </span>
          <p className="text-[22px] sm:text-2xl font-semibold sm:font-bold">آخرین های مجله</p>
        </div>
        <Button
          variant="outline"
          asChild
          className="hidden sm:flex h-[48px] rounded-[50px] border-pink-500 text-pink-500"
        >
          <Link href="">
            <span className="font-bold text-[13px]">یه سر به مجله بزن</span>
            <ArrowLeft2 size={20} color="var(--color-pink-500)" />
          </Link>
        </Button>
      </section>
      <section className="grid md:grid-cols-3 gap-10 mt-10">
        {articleItems.map((item, index) => (
          <ArticleCard
            key={index}
            badgeText={item.badgeText}
            time={item.time}
            title={item.title}
            imageAlt={item.imageAlt}
            imageSrc={item.imageSrc}
            linkHref={item.linkHref}
            description={item.description}
          />
        ))}
      </section>
      
      <section className="flex justify-center pt-5">
        <Button
          variant="outline"
          asChild
          className="sm:hidden h-[48px] rounded-[50px] border-pink-500 text-pink-500 px-10"
        >
          <Link href="">
            <span className="font-bold text-[13px]">یه سر به مجله بزن</span>
          </Link>
        </Button>
      </section>
    </SectionWrapper>
  );
}

export default LastedArticles;