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

export const blogDetails = [
  {
    label: "أساسيات التجويد",
    title: "ما هو علم التجويد؟",
    description: "تعرّف على معنى التجويد وأهميته، وكيف تبدأ تعلّمه خطوة بخطوة.",
    href: "/blog",
  },
  {
    label: "أحكام التجويد",
    title: "أحكام النون الساكنة والتنوين",
    description:
      "تعرّف على الإظهار والإدغام والإقلاب والإخفاء، وافهم الفرق بينها من خلال الأمثلة.",
    href: "/blog",
  },
  {
    label: "صفات الحروف",
    title: "الفرق بين التفخيم والترقيق",
    description:
      "تعرّف على الفرق بين التفخيم والترقيق، وتعلّم متى يُنطق الحرف مفخّمًا أو مرقّقًا.",
    href: "/blog",
  },
];
