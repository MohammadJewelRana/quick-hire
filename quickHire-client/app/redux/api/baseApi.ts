import config from "@/app/config";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: config.baseUrl,
    credentials: "include",
  }),
  tagTypes: ["Job", "Application"],
  endpoints: () => ({}),
});
