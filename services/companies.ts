import { fetchHelper } from "@/utils/fetch.helper";

export const getCompanies = async () => {
  try {
    const result = await fetchHelper({
      url: "/third/companies",
      method: "GET",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
