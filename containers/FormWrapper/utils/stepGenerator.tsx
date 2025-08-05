import { SignupContainer } from "@/containers";
import { StepType } from "@/models";

export const stepGenerator = (step: StepType) => {
  switch (step) {
    case "SIGNUP":
      return <SignupContainer />;

    case "INSURANCE_TYPE":
      return <SignupContainer />;

    case "VEHICLE":
      return <SignupContainer />;

    case "COMPANY":
      return <SignupContainer />;

    case "DISCOUNT":
      return <SignupContainer />;

    default:
      return <SignupContainer />;
  }
};
