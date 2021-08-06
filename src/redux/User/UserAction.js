import { SIGNIN_FAILURE, SIGNIN_SUCCESS } from "./UserType";

export const emailSignIn = (user) => ({
  type: SIGNIN_SUCCESS,
  payload: user,
});
