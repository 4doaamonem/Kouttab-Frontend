import { Layers, Route } from "lucide-react";
import Image from "next/image";

export const navLinks = [
  {
    link: "الرئيسية",
    href: "/",
  },
  {
    link: "تعلم التجويد",
    href: "/learn",
  },
  {
    link: "من نحن",
    href: "/about",
  },
  {
    link: "المدونة",
    href: "/blog",
  },
  {
    link: "تواصل معنا",
    href: "/contact us",
  },
];

export const learningJourney = [
  {
    icon: (
      <Image
        src={"/assets/QuranIcon.svg"}
        alt="Quran Icon"
        width={36}
        height={36}
      />
    ),
    title: "المصحف بالتجويد",
    description:
      "اقرأ القرآن الكريم واستفد من الأدوات المتاحة التي تدعم التلاوة والتعلّم.",
    btnTitle: "استكشف المصحف",
    href: "/learn",
  },
  {
    icon: <Layers className="w-9 h-9" />,
    title: "تعلّم التجويد",
    description:
      "تعرّف على أحكام التجويد تدريجيًا، وافهم القواعد وتدرّب على تطبيقها.",
    btnTitle: "استكشف المصحف",
    href: "/learn",
  },

  {
    icon: (
      <Image
        src={"/assets/LearningPlan.svg"}
        alt="Laerning Plan"
        width={36}
        height={36}
      />
    ),
    title: "خطتك التعليمية",
    description:
      "نظّم رحلتك وفق مستواك وهدفك والوقت المتاح، بحسب خيارات المنصة.",
    btnTitle: "تعرّف على خطتك",
    href: "/plan",
  },
  {
    icon: <Route className="w-9 h-9" />,
    title: "التدريب والتحديات",
    description: "عزّز ما تتعلّمه من خلال التدريب والتحديات التعليمية المتاحة.",
    btnTitle: "اكتشف التحديات",
    href: "/challenge",
  },
];
