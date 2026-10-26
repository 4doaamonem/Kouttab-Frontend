import { Layers, Route, LockKeyhole, Mail, UserRound } from "lucide-react";
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
export const Authentication_Errors = {
  login: {
    email: {
      required: "البريد الإلكتروني مطلوب",
      invalid: "تأكد من كتابة البريد الإلكتروني بشكل صحيح",
      notFound: "لا يوجد حساب مرتبط بهذا البريد الإلكتروني",
    },
    password: {
      required: "كلمة المرور مطلوبة",
      incorrect: "كلمة المرور غير صحيحة",
    },
    general: {
      invalidCredentials: "البريد الإلكتروني أو كلمة المرور غير صحيحة",
      tooManyAttempts: "محاولات كثيرة، حاول مرة أخرى بعد قليل",
      network: "حدث خطأ في الاتصال، تحقق من الإنترنت وحاول مرة أخرى",
      unknown: "حدث خطأ غير متوقع، حاول مرة أخرى",
      google: "تعذّر تسجيل الدخول بحساب جوجل، حاول مرة أخرى",
    },
  },
  resetPassword: {
    password: {
      required: "كلمة المرور مطلوبة",
      minLength: "٨ أحرف أو أرقام على الأقل",
      sameAsOld: "اختر كلمة مرور مختلفة عن القديمة",
    },
    "confirm-password": {
      required: "تأكيد كلمة المرور مطلوب",
      mismatch: "كلمتا المرور غير متطابقتين",
    },
    general: {
      network: "حدث خطأ في الاتصال، تحقق من الإنترنت وحاول مرة أخرى",
      unknown: "حدث خطأ غير متوقع، حاول مرة أخرى",
    },
  },
  checkEmail: {
    resendFailed: "تعذّر إعادة الإرسال، حاول مرة أخرى",
    tooManyAttempts: "محاولات كثيرة، حاول مرة أخرى بعد قليل",
  },
  forgotPassword: {
    email: {
      required: "البريد الإلكتروني مطلوب",
      invalid: "تأكد من كتابة البريد الإلكتروني بشكل صحيح",
      notFound: "لا يوجد حساب مرتبط بهذا البريد الإلكتروني",
    },
    general: {
      tooManyAttempts: "محاولات كثيرة، حاول مرة أخرى بعد قليل",
      network: "حدث خطأ في الاتصال، تحقق من الإنترنت وحاول مرة أخرى",
      unknown: "حدث خطأ غير متوقع، حاول مرة أخرى",
    },
    success: "إذا كان البريد مسجلاً لدينا، فقد أرسلنا لك رابط إعادة التعيين",
  },
  register: {
    name: {
      required: "الاسم مطلوب",
      minLength: "اكتب اسمك الثنائي على الأقل",
    },
    email: {
      required: "البريد الإلكتروني مطلوب",
      invalid: "تأكد من كتابة البريد الإلكتروني بشكل صحيح",
      exists: "هذا البريد الإلكتروني مستخدم بالفعل",
    },
    password: {
      required: "كلمة المرور مطلوبة",
      minLength: "كلمة المرور يجب أن تحتوي على ٨ أحرف أو أرقام على الأقل",
    },
    "confirm-password": {
      required: "تأكيد كلمة المرور مطلوب",
      mismatch: "كلمتا المرور غير متطابقتين",
    },
    general: {
      network: "حدث خطأ في الاتصال، تحقق من الإنترنت وحاول مرة أخرى",
      unknown: "حدث خطأ غير متوقع، حاول مرة أخرى",
    },
  },
} as const;
export const Authentication_Fields = {
  login: [
    {
      id: "email",
      label: "البريد الإلكتروني",
      placeholder: "اكتب بريدك الالكتروني",
      type: "email",
      icon: Mail,
      autoComplete: "email",
    },
    {
      id: "password",
      label: "كلمة المرور",
      placeholder: "اكتب كلمة المرور",
      type: "password",
      icon: LockKeyhole,
      autoComplete: "current-password",
    },
  ],
  resetPassword: [
    {
      id: "password",
      label: "كلمة المرور الجديدة",
      placeholder: "أنشئ كلمة مرور",
      type: "password",
      icon: LockKeyhole,
      autoComplete: "new-password",
      hint: "تأكد أنها تحتوي على ٨ أحرف أو أرقام على الأقل",
    },
    {
      id: "confirm-password",
      label: "تأكيد كلمة المرور",
      placeholder: "أعد كتابة كلمة المرور",
      type: "password",
      icon: LockKeyhole,
      autoComplete: "new-password",
    },
  ],
  forgotPassword: [
    {
      id: "email",
      label: "البريد الإلكتروني",
      placeholder: "اكتب بريدك الالكتروني",
      type: "email",
      icon: Mail,
      autoComplete: "email",
    },
  ],
  register: [
    {
      id: "name",
      label: "الاسم",
      placeholder: "اكتب اسمك الثنائي",
      type: "text",
      icon: UserRound,
      autoComplete: "name",
    },
    {
      id: "email",
      label: "البريد الإلكتروني",
      placeholder: "اكتب بريدك الالكتروني",
      type: "email",
      icon: Mail,
      autoComplete: "email",
    },
    {
      id: "password",
      label: "كلمة المرور",
      placeholder: "أنشئ كلمة مرور",
      type: "password",
      icon: LockKeyhole,
      autoComplete: "new-password",
      hint: "تأكد أنها تحتوي على ٨ أحرف أو أرقام على الأقل",
    },
    {
      id: "confirm-password",
      label: "تأكيد كلمة المرور",
      placeholder: "أعد كتابة كلمة المرور",
      type: "password",
      icon: LockKeyhole,
      autoComplete: "new-password",
    },
  ],
};
