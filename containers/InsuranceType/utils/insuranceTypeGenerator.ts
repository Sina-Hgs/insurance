import Insurance from "@/public/icons/insurance.svg";
import { InsuranceTypeTextContent } from "../textContent";

export const insuranceTypeGenerator = () => {
  return [
    {
      id: 1,
      logo: Insurance,
      title: InsuranceTypeTextContent.titles.third,
      type: InsuranceTypeTextContent.titles.third,
    },
    {
      id: 2,
      logo: Insurance,
      title: InsuranceTypeTextContent.titles.body,
      disabled: true,
      type: InsuranceTypeTextContent.titles.third,
    },
  ];
};
