import { applyMiddleware, compose, createStore } from "redux";
import { createEpicMiddleware } from "redux-observable";
import { fetchLinksFlow } from "./epic";
import { appServices } from "./services";
import reducer from "./reducer";

const epicMiddleware = createEpicMiddleware({
  dependencies: { service: appServices }
});
const middleware = [epicMiddleware];

const configStore = () => {
  const createStoreWithMiddleware = compose(applyMiddleware(...middleware))(
    createStore
  );
  const store = createStoreWithMiddleware(reducer);
  epicMiddleware.run(fetchLinksFlow);

  return {
    store
  };
};
const { store } = configStore();
export default store;
