import { useMemo } from "react";
import Image from "next/image";

import { useDispatch } from "react-redux";
import { addInsuranceType, setStep } from "@/store/formSlice";

import { insuranceTypeGenerator } from "./utils/insuranceTypeGenerator";

export const InsuranceTypeContainer = () => {
  const dispatch = useDispatch();
  const types = useMemo(() => insuranceTypeGenerator(), []);

  const handleClick = (type: string) => {
    dispatch(addInsuranceType({ insuranceType: type }));
    dispatch(setStep("VEHICLE"));
  };

  return (
    <div className="flex gap-8 max-md:flex-col items-center">
      {types.map((item) => (
        <button
          key={item.id}
          onClick={() => !item.disabled && handleClick(item.type)}
          className={`w-36 h-w-36 aspect-square rounded-2xl border border-secondary focus-within:border-primary flex flex-col items-center justify-evenly transition-all focus:ring-offset-2 ring-primary ${
            item.disabled
              ? "opacity-30 pointer-events-none bg-trinary"
              : "cursor-pointer hover:scale-110 hover:shadow-md hover:border-primary"
          }`}
        >
          <Image src={item.logo} alt={item.title} width={48} height={48} />
          <p className="text-md font-semibold text-center">{item.title}</p>
        </button>
      ))}
    </div>
  );
};
