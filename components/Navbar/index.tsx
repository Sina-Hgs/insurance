import Image from "next/image";

import SideBar from "@/public/icons/logo.svg";

import { navbarTextConent } from "./textContent";

interface NavbarProps {}

export const Navbar = () => {
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
      <p>{navbarTextConent.signup}</p>
    </nav>
  );
};
