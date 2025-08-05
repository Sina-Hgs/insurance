import { fetchHelper } from "@/utils/fetch.helper";

export const getVouchers = async () => {
  try {
    const result = await fetchHelper({
      url: "/product/third/third-discounts",
      method: "GET",
    });
    return result;
  } catch (error) {
    console.log(error);
  }
};
