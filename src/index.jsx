import React from "react";
import ReactDOM from "react-dom";
import App from "./components/app/App";
import { compose, createStore } from "redux";

//redux
import { Provider } from "react-redux";
import rootReducer from "./services/reducers/index";
import initialState from "./store/initialState";

const store = createStore(rootReducer, initialState);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
