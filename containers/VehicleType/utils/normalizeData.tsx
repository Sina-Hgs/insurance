import { VehicleCategories, Usage } from "@/models";
import { Option } from "@/components/Dropdown";

export const mapVehiclesToOptions = (vehicles: VehicleCategories): Option[] =>
  vehicles.map((v) => ({
    value: String(v.id),
    label: v.title,
  }));

export const mapUsagesToOptions = (usages: Usage[]): Option[] =>
  usages.map((u) => ({
    value: String(u.id),
    label: u.title,
  }));
