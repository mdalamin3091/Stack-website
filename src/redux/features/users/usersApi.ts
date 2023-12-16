/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../app/baseApi";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    users: builder.query<Record<string, any>, any>({
      query: ({ page }) => {
        return {
          url: `/users?page=${page}`,
          method: "GET",
        };
      },
    }),
  }),
});

export const { useUsersQuery } = authApi;
