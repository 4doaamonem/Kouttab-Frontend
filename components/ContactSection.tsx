import Image from "next/image";
import React from "react";
import Introduction from "./Introduction";

const ContactSection = () => {
  return (
    <section className="bg-bg-light">
      <div className="py-56">
        <div className=" relative h-100 ">
          <div className="absolute inset-0 z-10">
            <Image
              src={"/assets/GoldBackground.svg"}
              alt="Gold Background"
              fill
              className="object-cover"
            />
          </div>

          <div className="max-w-7xl mx-auto px-4 flex  items-center h-full z-20">
            <div className="flex flex-col items-start">
              <Introduction label="تواصل معنا" />
              <h3 className="font-medium text-[28px] text-text-primary-normal">
                هل لديك استفسار أو ملاحظة؟
              </h3>
              <p className="">
                نحن هنا للمساعدة فى اى استفسار اكتب رسالتك من خلال النموذج
                التالي.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
