import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getVehicleTypes } from "@/services/vehicles";
import { VehicleCategories } from "@/models";

import { QueriesKey } from "./queriesKey.constants";

export const useGetVehicles = (): UseQueryResult<VehicleCategories, Error> => {
  return useQuery({
    queryKey: [QueriesKey.GET_VEHICLES],
    queryFn: async () => {
      try {
        const result = await getVehicleTypes();
        return result;
      } catch (error) {}
    },
  });
};
