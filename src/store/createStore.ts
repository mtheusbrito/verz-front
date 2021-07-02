import { createStore, applyMiddleware } from "redux";
const res = (reducers: any, middlewares: any) => {
  const enhancer = applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};

export default res;