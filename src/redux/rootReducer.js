import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import snackbarReducer from "./Sneakbar/SneakbarReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  snackbar: snackbarReducer,
});

export default persistReducer(persistConfig, rootReducer);
