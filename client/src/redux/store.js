import { createStore, compose, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import apiSaga from "./sagas/index";
import rootReducer from "./reducers/index";

const initialiseSagaMiddleware = createSagaMiddleware();

const storeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  rootReducer,
  storeEnhancers(applyMiddleware(initialiseSagaMiddleware))
);

initialiseSagaMiddleware.run(apiSaga);
export default store;
