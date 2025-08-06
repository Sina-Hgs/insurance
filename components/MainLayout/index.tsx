import { ReactNode } from "react";
import { Navbar } from "../Navbar";
import { CarImage } from "../CarImage";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="h-full flex">
      <div className="absolute top-[0px] left-[0px] w-1/4 h-full bg-trinary -z-20 max-md:hidden" />

      <div className="flex flex-col justify-between items-center w-full relative z-20">
        <Navbar />
        {children}
        <CarImage />
      </div>
    </div>
  );
};
