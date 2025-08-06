"use client";

import { useMemo, useState } from "react";

import { useDispatch } from "react-redux";
import { addVehicleInfo, setStep } from "@/store/formSlice";

import { Button, Dropdown } from "@/components";
import { FormSkeleton } from "./components";

import Arrow from "@/public/icons/arrow.svg";

import { useGetVehicles } from "@/queries/getVehicles.queries";

import {
  mapUsagesToOptions,
  mapVehiclesToOptions,
} from "./utils/normalizeData";

import { vehicleTypeTextContent } from "./textContent";

type Option = {
  value: string;
  label: string;
};

export const VehicleTypeContainer = () => {
  const dispatch = useDispatch();

  const [selectedVehicleType, setSelectedVehicleType] = useState<string>("");
  const [selectedVehicleModel, setSelectedVehicleModel] = useState<string>("");

  const { data: vehicles = [], isLoading } = useGetVehicles();

  const vehicleOptions: Option[] = useMemo(
    () => mapVehiclesToOptions(vehicles),
    [vehicles]
  );

  const selectedVehicle = useMemo(
    () => vehicles.find((v) => String(v.id) === selectedVehicleType),
    [selectedVehicleType, vehicles]
  );

  const usageOptions: Option[] = useMemo(() => {
    return selectedVehicle ? mapUsagesToOptions(selectedVehicle.usages) : [];
  }, [selectedVehicleType]);

  const handleBack = () => {
    dispatch(setStep("INSURANCE_TYPE"));
  };

  const handleSubmit = () => {
    dispatch(
      addVehicleInfo({
        vehicleType: selectedVehicle?.title ?? "",
        vehicleModel:
          selectedVehicle?.usages.find(
            (item) => item.id === Number(selectedVehicleModel)
          )?.title ?? "",
      })
    );

    dispatch(setStep("COMPANY"));
  };

  if (isLoading) return <FormSkeleton />;

  return (
    <div className="flex flex-col gap-9">
      <div className="flex flex-col lg:flex-row lg:space-x-4 space-y-4 lg:space-y-0">
        <Dropdown
          options={vehicleOptions}
          value={selectedVehicleType}
          onChange={(e) => setSelectedVehicleType(e.target.value)}
          placeholder={vehicleTypeTextContent.type}
        />
        <Dropdown
          options={usageOptions}
          value={selectedVehicleModel}
          onChange={(e) => setSelectedVehicleModel(e.target.value)}
          placeholder={vehicleTypeTextContent.model}
          disabled={!selectedVehicleType}
        />
      </div>

      <div className="flex justify-between">
        <Button
          title={vehicleTypeTextContent.back}
          variant="outlined"
          startIcon={Arrow}
          onClick={handleBack}
        />
        <Button
          title={vehicleTypeTextContent.next}
          variant="outlined"
          endIcon={Arrow}
          onClick={handleSubmit}
          disabled={!selectedVehicleType || !selectedVehicleModel}
        />
      </div>
    </div>
  );
};
