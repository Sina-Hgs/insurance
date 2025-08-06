"use client";

import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { useDispatch } from "react-redux";
import { addUserInfo, setStep } from "@/store/formSlice";

import { passwordRegex, phoneRegex } from "@/utils/regex";
import { persianToEnglishDigits } from "@/utils/digits";

import { signUpTextContent } from "./textContent";

const signupSchema = z.object({
  name: z.string().min(1, signUpTextContent.errors.name),
  lastName: z.string().min(1, signUpTextContent.errors.lastName),
  phone: z
    .string()
    .min(10, signUpTextContent.errors.mobile)
    .regex(phoneRegex, signUpTextContent.errors.mobile),
  password: z
    .string()
    .min(6, signUpTextContent.errors.password)
    .regex(passwordRegex, signUpTextContent.errors.password),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export const SignupContainer = () => {
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    setValue,
    trigger,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "all",
    defaultValues: { name: "", lastName: "", password: "", phone: "" },
    resolver: zodResolver(signupSchema),
  });

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const normalized = persianToEnglishDigits(e.target.value);
    setValue("phone", normalized, { shouldValidate: true });
    trigger("phone");
  };

  const onSubmit = (data: SignupFormValues) => {
    dispatch(
      addUserInfo({
        name: data.name,
        lastName: data.lastName,
        mobile: data.phone,
      })
    );
    dispatch(setStep("INSURANCE_TYPE"));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0 ">
        <Input
          label="Name"
          maxLength={50}
          placeholder={signUpTextContent.labels.name}
          error={errors.name?.message}
          className="flex-1"
          {...register("name")}
        />
        <Input
          label="Last Name"
          maxLength={50}
          placeholder={signUpTextContent.labels.lastName}
          error={errors.lastName?.message}
          className="flex-1"
          {...register("lastName")}
        />
      </div>

      <Input
        label="Phone Number"
        maxLength={11}
        placeholder={signUpTextContent.labels.mobile}
        error={errors.phone?.message}
        {...register("phone")}
        onChange={handlePhoneChange}
      />

      <Input
        label="Password"
        placeholder={signUpTextContent.labels.password}
        type="password"
        maxLength={10}
        error={errors.password?.message}
        {...register("password")}
      />

      <div className="flex justify-center md:justify-end pt-5 max-md:py-8">
        <Button
          type="submit"
          variant="filled"
          title={signUpTextContent.signupBtn}
        />
      </div>
    </form>
  );
};
