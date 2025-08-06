const THIRD_INSURANCE = "بیمه شخص ثالت";

const textContent = {
  titles: {
    SIGNUP: "ثبت نام",
    INSURANCE_TYPE: "انتخاب بیمه",
    VEHICLE: THIRD_INSURANCE,
    COMPANY: THIRD_INSURANCE,
    DISCOUNT: THIRD_INSURANCE,
  },
} as const;

type TextContent = typeof textContent;
export const FormWrapperTextContent: TextContent = textContent;
