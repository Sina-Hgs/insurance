"use client";

import { useMemo } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { stepGenerator } from "./utils/stepGenerator";

export const FormWrapper = () => {
  const step = useSelector((state: RootState) => state.form.STEP);

  const { container, title, subtitle } = useMemo(
    () => stepGenerator({ step: step }),
    [step]
  );

  return (
    <div className="h-[85%] max-md:w-full w-[45%] md:self-start md:mr-32 space-y-12 mt-16 max-md:space-y-8 max-md:mt-2">
      <h1 className="font-bold text-3xl max-md:font-semibold max-md:m-auto w-full max-md:text-center max-md:text-xl">
        {title}
      </h1>
      <h3 className="font-medium text-text-trinary max-md:mt-2 max-md:text-center">
        {subtitle}
      </h3>

      {container}
    </div>
  );
};
