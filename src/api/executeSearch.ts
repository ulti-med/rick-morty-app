import { axiosInstance } from "./axiosInstance";

export const executeSearch = async (search: string) => {
  const { data } = await axiosInstance.get("/character", {
    params: { name: search },
  });
  return data;
};
