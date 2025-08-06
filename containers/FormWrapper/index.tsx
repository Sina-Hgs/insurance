"use client";

import { ReactNode, useEffect, useMemo, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { SignupContainer } from "../Signup";
import { stepGenerator } from "./utils/stepGenerator";

import { FormWrapperTextContent } from "./textContent";

export const FormWrapper = () => {
  const [content, setContent] = useState<ReactNode>(<SignupContainer />);
  const [title, setTitle] = useState<string>(
    FormWrapperTextContent.titles.SIGNUP
  );

  const step = useSelector((state: RootState) => state.form.STEP);

  const generatedUI = useMemo(() => stepGenerator({ step: step }), [step]);

  useEffect(() => {
    setTitle(generatedUI.title);
    setContent(generatedUI.container);
  }, [generatedUI]);

  return (
    <div className="h-[85%] max-md:w-full w-[45%] md:self-start md:mr-32">
      <h1 className="font-bold text-3xl py-6 max-md:font-semibold max-md:m-auto w-full max-md:text-center max-md:text-xl">
        {title}
      </h1>
      {content}
    </div>
  );
};
