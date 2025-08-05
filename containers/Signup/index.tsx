"use client";

import { Button, Input } from "@/components";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { signUpTextConent } from "./textContent";
import { passwordRegex, phoneRegex } from "@/utils/regex";
import { zodResolver } from "@hookform/resolvers/zod";

const signupSchema = z.object({
  name: z.string().min(1, signUpTextConent.errors.name),
  lastName: z.string().min(1, signUpTextConent.errors.lastName),
  phone: z
    .string()
    .min(10, signUpTextConent.errors.mobile)
    .regex(phoneRegex, signUpTextConent.errors.mobile),
  password: z
    .string()
    .min(6, signUpTextConent.errors.password)
    .regex(passwordRegex, signUpTextConent.errors.password),
});

type SignupFormValues = z.infer<typeof signupSchema>;

export const SignupContainer = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupFormValues>({
    mode: "all",
    defaultValues: { name: "", lastName: "", password: "", phone: "" },
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = (data: SignupFormValues) => {
    console.log("Signup form submitted:", data);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="space-y-5 h-3/4 max-md:w-full w-[40%] md:self-start md:mr-32"
    >
      {/* Row with two inputs side-by-side */}
      <h1 className="font-bold text-3xl py-6 max-md:font-semibold max-md:m-auto w-full max-md:text-center max-md:text-xl">
        {signUpTextConent.title}
      </h1>
      <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0">
        <Input
          label="Name"
          maxLength={50}
          placeholder={signUpTextConent.labels.name}
          error={errors.name?.message}
          className="flex-1"
          {...register("name")}
        />
        <Input
          label="Last Name"
          maxLength={50}
          placeholder={signUpTextConent.labels.lastName}
          error={errors.lastName?.message}
          className="flex-1"
          {...register("lastName")}
        />
      </div>

      {/* Full width inputs stacked */}
      <Input
        label="Phone Number"
        maxLength={11}
        placeholder={signUpTextConent.labels.mobile}
        error={errors.phone?.message}
        {...register("phone")}
      />
      <Input
        label="Password"
        placeholder={signUpTextConent.labels.password}
        type="password"
        maxLength={10}
        error={errors.password?.message}
        {...register("password")}
      />

      {/* Submit button aligned bottom-left */}
      <div className="flex justify-center md:justify-end pt-5">
        <Button
          type="submit"
          variant="filled"
          title={signUpTextConent.signupBtn}
        />
      </div>
    </form>
  );
};
