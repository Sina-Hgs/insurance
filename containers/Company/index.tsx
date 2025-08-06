"use client";

import { useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { addCompany, setStep } from "@/store/formSlice";

import Arrow from "@/public/icons/arrow.svg";

import { useGetCompanies } from "@/queries/getCompanies.queries";

import { Button, Dropdown, Skeleton } from "@/components";
import { mapCompaniesToOptions } from "./utils/normalizeData";

import { companyTextContent } from "./textContent";

export const CompanyContainer = () => {
  const dispatch = useDispatch();

  const [selectedCompany, setSelectedCompany] = useState<string>("");

  const { data: companies = [], isLoading } = useGetCompanies();

  const companyOptions = useMemo(
    () => mapCompaniesToOptions(companies),
    [companies]
  );

  const handleBack = () => {
    dispatch(setStep("VEHICLE"));
  };

  const handleSubmit = () => {
    dispatch(
      addCompany({
        previousCompany:
          companyOptions.find((item) => item.value === selectedCompany)
            ?.label ?? "",
      })
    );

    dispatch(setStep("DISCOUNT"));
  };

  if (isLoading) return <Skeleton width="w-full" height="h-16" />;

  return (
    <div className="flex flex-col gap-9">
      <Dropdown
        options={companyOptions}
        value={selectedCompany}
        onChange={(e) => setSelectedCompany(e.target.value)}
        placeholder={companyTextContent.placeholder}
      />

      <div className="flex justify-between">
        <Button
          title={companyTextContent.back}
          variant="outlined"
          startIcon={Arrow}
          onClick={handleBack}
        />
        <Button
          title={companyTextContent.next}
          variant="outlined"
          endIcon={Arrow}
          onClick={handleSubmit}
          disabled={!selectedCompany}
        />
      </div>
    </div>
  );
};
