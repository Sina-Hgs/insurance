import { useQuery, UseQueryResult } from "@tanstack/react-query";

import { DiscountOption } from "@/models";
import { getVouchers } from "@/services/vouchers";

import { QueriesKey } from "./queriesKey.constants";

export const useGetVouchers = (): UseQueryResult<DiscountOption[], Error> => {
  return useQuery({
    queryKey: [QueriesKey.GET_VOUCHERS],
    queryFn: async () => {
      try {
        const result = await getVouchers();
        return result;
      } catch (error) {}
    },
  });
};
