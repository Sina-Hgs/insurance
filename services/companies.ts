import { fetchHelper } from "@/utils/fetch.helper";

export const getCompanies = async () => {
  try {
    const result = await fetchHelper({
      url: "/product/third/companies",
      method: "GET",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
