import { ReactNode } from "react";
import { Navbar } from "../Navbar";

type MainLayoutProps = {
  children: ReactNode;
};

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className="flex flex-col justify-between items-center min-h-full">
      <Navbar />
      {children}
    </div>
  );
};
