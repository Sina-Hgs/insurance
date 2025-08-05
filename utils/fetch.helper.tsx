import axios, { AxiosRequestConfig, Method } from "axios";

const api = axios.create({
  baseURL: "https://www.azki.com/api/",
  timeout: 10000,
});

interface FetchHelperParams<T = any> {
  url: string;
  method?: Method;
  data?: T; // request body
  config?: AxiosRequestConfig;
}

export async function fetchHelper<T = any>({
  url,
  method = "GET",
  data,
  config,
}: FetchHelperParams): Promise<T> {
  try {
    const response = await api.request<T>({
      url,
      method,
      data,
      ...config,
    });
    return response.data;
  } catch (error: any) {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.error(
          "Server error:",
          error.response.status,
          error.response.data
        );
        throw new Error(
          error.response.data?.message || "Server returned an error."
        );
      }
      if (error.request) {
        console.error("No response received", error.request);
        throw new Error("Please check your connection.");
      }
    }
    console.error("Unexpected error:", error);
    throw new Error("An unexpected error occurred.");
  }
}
