import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import snackbarReducer from "./Sneakbar/SneakbarReducer";
import PostReducer from "./Post/PostReducer";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["user"],
};

const rootReducer = combineReducers({
  user: UserReducer,
  snackbar: snackbarReducer,
  post: PostReducer,
});

export default persistReducer(persistConfig, rootReducer);
