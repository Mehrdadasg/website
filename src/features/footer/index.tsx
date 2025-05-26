import Image from "next/image";
import Link from "next/link";
import React from "react";

const navItems = [
  { href: "", label: "مشاوره" },
  { href: "", label: "تشخیص بارداری از روی علائم" },
  { href: "", label: "آیا من باردارم؟" },
  { href: "", label: "تقویم بارداری هفته به هفته" },
  { href: "", label: "تقویم قاعدگی" },
  { href: "", label: "تعیین جنسیت در زمان اقدام" },
  { href: "", label: "محاسبه سن بارداری" },
  { href: "", label: "بهترین روش جلوگیری از بارداری" },
  { href: "", label: "پیش بینی تعیین جنسیت بعد از بارداری" },
  { href: "", label: "بهترین زمان اقدام به بارداری" },
  { href: "", label: "محاسبه زمان تخمک گذاری" },
];

const social = [
    { img:'/social/x.png',url:"",title:"x" },
    { img:'/social/telegram.png',url:"",title:"telegram" },
    { img:'/social/instagram.png',url:"",title:"instagram" },
    { img:'/social/youtub.png',url:"",title:"youtub" },
  ];

function Footer() {
  const firstColumn = navItems.slice(0, 6);
  const secondColumn = navItems.slice(6);

  return (
    <footer>
      <section className="footer-header h-8 w-full"></section>
      <section className="bg-pink-500 px-[5%] pt-16 pb-5">
        <section className="flex">
          <section className="w-1/3">
            <Image
              src="/logo/white-h-logo.png"
              width={108}
              height={32}
              alt="یک زن"
            />
            <p className="text-gray-100 mt-8">
              اولین اپلیکیشن سلامتی بانوان با بیش از 1,500,000 نصب ، از سال 1397
              با امکانات بی شماری از نمایش زمان چرخه قاعدگی، تخمک‌گذاری، بارداری
              و شیردهی را هوشمندانه مدیریت کن! از مشاوره تخصصی، رژیم‌های غذایی،
              رصد و راهنمایی‌های سلامتی روزانه و کلی امکانات دیگر
            </p>
          </section>
          <section className="w-2/3 px-[10%] flex gap-5">
            <section className="w-3/4">
              <h2>
                <mark className="bg-transparent text-gray-50 text-lg font-semibold">
                  اپلیکیشن یک زن
                </mark>
              </h2>

              <nav className="text-gray-50 text-sm mt-8">
                <div className="grid grid-cols-2">
                  <ul className="space-y-3">
                    {firstColumn.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                  <ul className="space-y-3">
                    {secondColumn.map((item, index) => (
                      <li key={index}>
                        <Link href={item.href}>{item.label}</Link>
                      </li>
                    ))}
                  </ul>
                </div>
              </nav>
            </section>
            <section className="w-1/4">
              <p className="text-lg text-gray-50 font-semibold">کمپانی</p>
              <nav>
                <ul className="text-gray-50 text-sm mt-8 space-y-3">
                  <li>
                    <Link href="/">درباره ما</Link>
                  </li>
                  <li>
                    <Link href="/">تماس با ما</Link>
                  </li>
                </ul>
              </nav>
            </section>
          </section>
        </section>
      <div className="w-full h-0.5 bg-pink-400 mt-10 mb-5"></div>
      <section className="flex justify-between items-center py-3">
        <p className="text-sm text-gray-50">
            کپی رایت © 1397 - 1404 متعلق به <mark className="bg-transparent text-gray-50">
                <Link href="/">اپلیکیشن یک زن</Link>
            </mark>
        </p>
        <nav>
            <ul className="flex gap-5">
                {social?.map((item,index)=>
                    <li key={index}>
                        <Link href={item.url} className="flex justify-center items-center size-5">
                            <Image className="max-w-5 max-h-5" src={item.img} alt={item.title} width={20} height={20} />
                        </Link>
                    </li>
                )}
            </ul>
        </nav>
      </section>
      </section>
    </footer>
  );
}

export default Footer;
