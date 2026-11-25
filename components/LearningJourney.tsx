import React from "react";
import Challenges from "./Challenges";
import Introduction from "./Introduction";

const LearningJourney = () => {
  return (
    <section className="relative bg-bg-light mt-10 md:-mt-7.75 lg:mt-0">
      <div className="max-w-318 mx-auto px-[18.5px] md:pl-25 md:pr-13.5 lg:px-4 py-9.25 md:pt-13 md:pb-11.5 lg:pb-9">
        <Introduction
          className="md:w-165.25 md:-ms-5.875 lg:w-auto lg:ms-0"
          label="رحلة متكاملة"
          title="تعلّم التجويد خطوة بخطوة"
          description="تعلّم أحكام التجويد، وافهم قواعدها، وطبّق ما تتعلّمه من خلال الدروس والتدريبات المتاحة."
        />
        <Challenges />
      </div>
    </section>
  );
};

export default LearningJourney;
