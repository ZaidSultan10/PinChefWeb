import { combineReducers } from "redux";
import UserReducer from "./User/UserReducer";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"],
};

const rootReducer = combineReducers({
  user: UserReducer,
});

export default persistReducer(persistConfig, rootReducer);
