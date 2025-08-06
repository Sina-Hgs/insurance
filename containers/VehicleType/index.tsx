"use client";

import { useMemo, useState } from "react";
import { Dropdown } from "@/components";
import { useGetVehicles } from "@/queries/getVehicles.queries";
import {
  mapUsagesToOptions,
  mapVehiclesToOptions,
} from "./utils/normalizeData";
import { vehicleTypeTextContent } from "./textContent";
import { FormSkeleton } from "./components";

type Option = {
  value: string;
  label: string;
};

export const VehicleTypeContainer = () => {
  const { data: vehicles = [], isLoading } = useGetVehicles();
  const [selectedVehicleType, setSelectedVehicleType] = useState<string>("");
  const [selectedVehicleModel, setSelectedVehicleModel] = useState<string>("");

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

  if (isLoading) return <FormSkeleton />;

  return (
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
  );
};
