import { fetchHelper } from "@/utils/fetch.helper";

export const getVehicleTypes = async () => {
  try {
    const result = await fetchHelper({ url: "/vehicle/types", method: "GET" });
    return result;
  } catch (error) {
    console.log(error);
  }
};
