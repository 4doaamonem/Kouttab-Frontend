import React from "react";
import Challenges from "./Challenges";
import Introduction from "./Introduction";

const LearningJourney = () => {
  return (
    <section className="bg-bg-light">
      <div className="max-w-7xl mx-auto px-4 py-16 md:py-20">
        <Introduction
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
