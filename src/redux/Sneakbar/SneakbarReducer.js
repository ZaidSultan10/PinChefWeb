import { SET_SNACKBAR, CLOSE_SNACKBAR } from "./SneakbarTypes";

const INITIAL_MESSAGE = {
  snackbarOpen: false,
  snackbarType: "",
  snackbarMessage: "",
};

const snackbarReducer = (state = INITIAL_MESSAGE, action) => {
  switch (action.type) {
    case SET_SNACKBAR:
      const { snackbarOpen, snackbarType, snackbarMessage } = action.payload;
      return { ...state, snackbarOpen, snackbarType, snackbarMessage };
    case CLOSE_SNACKBAR:
      return {
        ...state,
        snackbarOpen: action.payload,
        snackbarMessage: "",
        snackbarType: "",
      };

    default:
      return state;
  }
};

export default snackbarReducer;
