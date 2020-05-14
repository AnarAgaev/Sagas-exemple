import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./reducer";

const store = createStore(
  reducer,

  /*
   * Промежуточный слой (applyMiddleware)
   * автоматически передаёт функцию dispatch
   * в фуркцию, которую возвращает action creator
   */
  applyMiddleware(thunk)
);

export default store;