import { createStore, applyMiddleware,compose } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension'
const res = (reducers: any, middlewares: any) => {
   const enhancer =
    process.env.NODE_ENV === "development"
      ? compose(composeWithDevTools(applyMiddleware(...middlewares)))
      : applyMiddleware(...middlewares);
  return createStore(reducers, enhancer);
};

export default res;