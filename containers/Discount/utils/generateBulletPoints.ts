import { FormState } from "@/store/formSlice";

import { englishToPersianDigits } from "@/utils/digits";

import { discountTextContent } from "../textContent";

export const generateBulletPoints = (form: Omit<FormState, "STEP">) => {
  const data: { label: string; value: string | number | null | undefined }[] = [
    { label: discountTextContent.modal.name, value: form.name },
    { label: discountTextContent.modal.lastName, value: form.lastName },
    {
      label: discountTextContent.modal.mobile,
      value: englishToPersianDigits(form.mobile),
    },
    {
      label: discountTextContent.modal.insuranceType,
      value: form.insuranceType,
    },
    { label: discountTextContent.modal.vehicleType, value: form.vehicleType },
    { label: discountTextContent.modal.vehicleModel, value: form.vehicleModel },
    {
      label: discountTextContent.modal.previousCompany,
      value: form.previousCompany,
    },
    {
      label: discountTextContent.modal.thirdDiscount,
      value: form.thirdDiscount,
    },
    {
      label: discountTextContent.modal.accidentsDiscount,
      value: form.accidentsDiscount,
    },
  ];

  return data;
};
