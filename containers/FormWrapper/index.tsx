"use client";

import { useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import { SignupContainer } from "../Signup";
import { stepGenerator } from "./utils/stepGenerator";

export const FormWrapper = () => {
  const [content, setContent] = useState(<SignupContainer />);

  const step = useSelector((state: RootState) => state.form.STEP);

  useEffect(() => {
    setContent(stepGenerator(step));
  }, [step]);

  return <>{content}</>;
};
