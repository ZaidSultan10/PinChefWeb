import { SET_SNACKBAR, CLOSE_SNACKBAR } from "./SneakbarTypes";

export const setSnackbar = (snackbarOpen, snackbarType, snackbarMessage) => ({
  type: SET_SNACKBAR,
  payload: { snackbarOpen, snackbarType, snackbarMessage },
});

export const closeSnackbar = (param) => ({
  type: CLOSE_SNACKBAR,
  payload: param,
});
