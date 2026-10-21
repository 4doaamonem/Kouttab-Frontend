import React from "react";
import Challenges from "./Challenges";

const LearningJourney = () => {
  return (
    <section className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <div className="max-w-3xl mx-auto text-center mb-11">
          <div className="flex items-center justify-center gap-4 mb-1">
            <span className="w-[43.5px] h-px bg-linear-to-r from-transparent via-secondary-normal to-transparent translate-y-0.5"></span>
            <span className=" text-secondary-normal font-medium text-lg ">
              رحلة متكاملة
            </span>
          </div>
          <h2 className="mb-3 font-medium text-[28px] text-text-primary-normal">
            تعلّم التجويد خطوة بخطوة
          </h2>
          <p className="text-lg font-medium text-text-secondary-normal">
            تعلّم أحكام التجويد، وافهم قواعدها، وطبّق ما تتعلّمه من خلال الدروس
            والتدريبات المتاحة.
          </p>
        </div>
        <Challenges />
      </div>
    </section>
  );
};

export default LearningJourney;
