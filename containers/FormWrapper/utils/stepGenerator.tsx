import {
  InsuranceTypeContainer,
  SignupContainer,
  CompanyContainer,
  VehicleTypeContainer,
  DiscountContainer,
} from "@/containers";
import { StepType } from "@/models";
import { FormWrapperTextContent } from "../textContent";

interface stepGeneratorProps {
  step: StepType;
}

export const stepGenerator = ({ step }: stepGeneratorProps) => {
  const title = FormWrapperTextContent.titles[step];
  let container = <></>;

  switch (step) {
    case "SIGNUP":
      container = <SignupContainer />;
      break;

    case "INSURANCE_TYPE":
      container = <InsuranceTypeContainer />;
      break;

    case "VEHICLE":
      container = <VehicleTypeContainer />;
      break;

    case "COMPANY":
      container = <CompanyContainer />;
      break;

    case "DISCOUNT":
      container = <DiscountContainer />;
      break;

    default:
      container = <SignupContainer />;
      break;
  }

  return { title, container };
};
