import Image from "next/image";

import Car from "@/public/icons/car-green.svg";

export const CarImage = () => {
  return (
    <div className="w-full relative">
      <Image
        src={Car}
        width={650}
        height={220}
        alt="car"
        // this is the largest contentful paint above-the-fold so its better to be fetched eagerly
        loading="eager"
        className="absolute max-md:bottom-16 bottom-12 left-2 max-md:w-[80%]"
      />
    </div>
  );
};
