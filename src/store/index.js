import { createStore, applyMiddleware } from "redux";
import reducers from "./reducers/index";

// THUNK
// import thunk from "redux-thunk";
// SAGA
import createSagaMiddleware from "redux-saga";
import { rootSaga } from "./sagas";

// THUNK
// const store = createStore(reducers, applyMiddleware(thunk));

// SAGA
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export default store;
