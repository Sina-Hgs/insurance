"use client";

import Image from "next/image";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@/store";

import SideBar from "@/public/icons/logo.svg";
import User from "@/public/icons/user.svg";

import { navbarTextConent } from "./textContent";
import { Button } from "../Button";
import { resetForm } from "@/store/formSlice";

export const Navbar = () => {
  const dispatch = useDispatch();
  const { STEP, name, lastName } = useSelector(
    (state: RootState) => state.form
  );

  const handleTryAgain = () => {
    dispatch(resetForm());
  };

  return (
    <nav className="w-full relative flex justify-between items-center px-6">
      <div className="inline-flex items-center gap-4">
        <Image
          src={SideBar}
          width={24}
          height={24}
          alt="sidebar"
          className="hover:opacity-50 cursor-pointer transition-all"
        />
        <Button
          variant="outlined"
          title={navbarTextConent.tryAgain}
          onClick={handleTryAgain}
          className="!w-24 !h-10"
        />
      </div>

      <h2 className="max-md:hidden absolute left-1/2 transform -translate-x-1/2">
        {navbarTextConent.title}
      </h2>

      {STEP === "SIGNUP" ? (
        <p>{navbarTextConent.signup}</p>
      ) : (
        <div className="inline-flex items-center gap-2">
          <Image src={User} alt="user-avatar" width={24} height={24} />
          <p className="font-medium text-text-primary">{`${name} ${lastName}`}</p>
        </div>
      )}
    </nav>
  );
};
