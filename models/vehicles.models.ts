export type Usage = {
  id: number;
  title: string;
};

export type VehicleCategory = {
  id: number;
  title: string;
  usages: Usage[];
};

export type VehicleCategories = VehicleCategory[];
