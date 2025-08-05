import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { getCompanies } from "@/services/companies";
import { InsuranceCompany } from "@/models";

import { QueriesKey } from "./queriesKey.constants";

export const useGetCompanies = (): UseQueryResult<
  InsuranceCompany[],
  Error
> => {
  return useQuery({
    queryKey: [QueriesKey.GET_COMPANIES],
    queryFn: async () => {
      try {
        const result = await getCompanies();
        return result;
      } catch (error) {}
    },
  });
};
