import { setCredentials } from "../features/auth/authSlice";

export const onQueryStartedCommon = async (
  _arg: never,
  { dispatch, queryFulfilled }: any
): Promise<void> => {
  try {
    const { data } = await queryFulfilled;
    localStorage.setItem("token", data.token);
    dispatch(setCredentials(data));
  } catch (error) {
    // Handle the error appropriately
  }
};
