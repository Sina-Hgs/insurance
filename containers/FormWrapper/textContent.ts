const THIRD_INSURANCE = "بیمه شخص ثالت";

const textContent = {
  titles: {
    SIGNUP: "ثبت نام",
    INSURANCE_TYPE: "انتخاب بیمه",
    VEHICLE: THIRD_INSURANCE,
    COMPANY: THIRD_INSURANCE,
    DISCOUNT: THIRD_INSURANCE,
  },
  subtitles: {
    SIGNUP: null,
    INSURANCE_TYPE: null,
    VEHICLE: "نوع و مدل خودروی خود را انتخاب کنید.",
    COMPANY: "شرکت بیمه‌گر قبلی خود را در این بخش وارد کنید.",
    DISCOUNT: "درصد تخفیف بیمه شخص ثالث و حوادث راننده را وارد کنید.",
  },
} as const;

type TextContent = typeof textContent;
export const FormWrapperTextContent: TextContent = textContent;
