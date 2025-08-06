"use client";

import { useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { addDiscounts, resetForm } from "@/store/formSlice";

import { useGetVouchers } from "@/queries/getVouchers.queries";

import { Button, Dropdown } from "@/components";
import { FormSkeleton, ResultsModal } from "./components";
import { mapDiscountsToOptions } from "./utils/normalizeData";

import { discountTextContent } from "./textContent";

type Option = {
  value: string;
  label: string;
};

export const DiscountContainer = () => {
  const dispatch = useDispatch();

  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const [selectedThirdDiscount, setSelectedThirdDiscount] =
    useState<string>("");
  const [selectedAccidentsDiscount, setSelectedAccidentsDiscount] =
    useState<string>("");

  const { data: discounts = [], isLoading } = useGetVouchers();

  const discountOptions = useMemo(
    () => mapDiscountsToOptions(discounts),
    [discounts]
  );

  const handleSubmit = () => {
    dispatch(
      addDiscounts({
        thirdDiscount:
          discounts?.find((item) => item.id === Number(selectedThirdDiscount))
            ?.title ?? "",
        accidentsDiscount:
          discounts?.find(
            (item) => item.id === Number(selectedAccidentsDiscount)
          )?.title ?? "",
      })
    );

    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    dispatch(resetForm());
    setIsModalOpen(false);
  };

  if (isLoading) return <FormSkeleton />;

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <Dropdown
          options={discountOptions}
          value={selectedThirdDiscount}
          onChange={(e) => setSelectedThirdDiscount(e.target.value)}
          placeholder={discountTextContent.thidDiscount}
        />
        <Dropdown
          options={discountOptions}
          value={selectedAccidentsDiscount}
          onChange={(e) => setSelectedAccidentsDiscount(e.target.value)}
          placeholder={discountTextContent.accidentsDiscount}
        />
      </div>

      <Button
        title={discountTextContent.submit}
        variant="filled"
        onClick={handleSubmit}
        disabled={!selectedThirdDiscount || !selectedAccidentsDiscount}
        className=" self-end flex-nowrap !whitespace-nowrap"
      />

      <ResultsModal visible={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};
