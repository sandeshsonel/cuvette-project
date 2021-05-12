import { applyMiddleware, compose, createStore } from "redux";
import { persistStore } from "redux-persist";
import reducers from "../app/reducers";

import { createBrowserHistory } from "history";
import createSagaMiddleware from "redux-saga";
import rootSaga from "../sagas";
import { routerMiddleware } from "react-router-redux";

export const history = createBrowserHistory();
const routeMiddleware = routerMiddleware(history);
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware, routeMiddleware];

const enhancers = [];

// if (isClient && isDeveloping) {
const devToolsExtension = window.devToolsExtension;
if (typeof devToolsExtension === "function") {
  enhancers.push(devToolsExtension());
}

export const store = createStore(reducers, compose(applyMiddleware(...middlewares), ...enhancers));
export const persistor = persistStore(store);
sagaMiddleware.run(rootSaga);

const storeValue = {
  store,
  persistor,
};

export default storeValue;
