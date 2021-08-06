import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import rootReducer from "./rootReducer";
import { composeWithDevTools } from "redux-devtools-extension";
const middlewares = [];

if (process.env.NODE_ENV === "development") {
  middlewares.push(logger);
}
const Store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger))
);
export default Store;
