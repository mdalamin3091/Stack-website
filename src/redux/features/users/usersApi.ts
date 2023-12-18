/* eslint-disable @typescript-eslint/no-explicit-any */
import { TAG_TYPES } from "../../../types/enum";
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
      providesTags: [TAG_TYPES.USER],
    }),

    singleUser: builder.query<Record<string, any>, any>({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "GET",
        };
      },
      providesTags: [TAG_TYPES.USER],
    }),

    addUser: builder.mutation({
      query: (userData) => {
        return {
          url: "/users",
          method: "POST",
          body: userData,
        };
      },
      invalidatesTags: [TAG_TYPES.USER],
    }),

    editUser: builder.mutation({
      query: ({ id, userData }) => {
        return {
          url: `/users/${id}`,
          method: "PATCH",
          body: userData,
        };
      },
      invalidatesTags: [TAG_TYPES.USER],
    }),

    deleteUser: builder.mutation({
      query: (id) => {
        return {
          url: `/users/${id}`,
          method: "DELETE",
        };
      },
      invalidatesTags: [TAG_TYPES.USER],
    }),
  }),
});

export const {
  useUsersQuery,
  useAddUserMutation,
  useEditUserMutation,
  useSingleUserQuery,
  useDeleteUserMutation,
} = authApi;
