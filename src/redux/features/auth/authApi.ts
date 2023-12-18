import { IAuthResponse } from "../../../types";
import { baseApi } from "../../app/baseApi";
import { onQueryStartedCommon } from "../../utils/rtk-utils";

export const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    userRegister: builder.mutation<IAuthResponse, unknown>({
      query: (registerData) => ({
        url: `/register`,
        method: "POST",
        body: registerData,
      }),
      onQueryStarted: onQueryStartedCommon,
    }),

    userLogin: builder.mutation<IAuthResponse, unknown>({
      query: (loginData) => ({
        url: `login`,
        method: "POST",
        body: loginData,
      }),
      onQueryStarted: onQueryStartedCommon,
    }),
  }),
});

export const { useUserRegisterMutation, useUserLoginMutation } = authApi;
