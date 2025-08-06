"use client";

import Image from "next/image";

import { useSelector } from "react-redux";
import { RootState } from "@/store";

import SideBar from "@/public/icons/logo.svg";
import User from "@/public/icons/user.svg";

import { navbarTextConent } from "./textContent";

export const Navbar = () => {
  const { STEP, name, lastName } = useSelector(
    (state: RootState) => state.form
  );

  return (
    <nav className="w-full flex justify-between items-center px-6">
      <Image
        src={SideBar}
        width={24}
        height={24}
        alt="sidebar"
        className="hover:opacity-50 cursor-pointer transition-all"
      />
      <h2 className="max-md:hidden">{navbarTextConent.title}</h2>

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
