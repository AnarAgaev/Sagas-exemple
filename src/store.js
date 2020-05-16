import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from 'redux-saga'
import reducer from "./reducer";
import watchFetchDog from "./sagas";

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
  reducer,

  /*
   * Вместо thunk в applyMiddleware передаём Middleware саги
   */
  applyMiddleware(sagaMiddleware)
);

/*
 * Запускаем Middleware саги передавая в неё наблюдатель саги,
 * который получив действие сам выполнить нужные функции
 */
sagaMiddleware.run(watchFetchDog);

export default store;