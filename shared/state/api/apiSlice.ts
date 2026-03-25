import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? "http://localhost:5000/api";

export const apiSlice = createApi({
    reducerPath: "api",
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        credentials: "include",
    }),
    endpoints: () => ({}),
});

export type ApiState = ReturnType<typeof apiSlice.reducer>;
