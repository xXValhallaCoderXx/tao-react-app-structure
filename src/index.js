import React from 'react';
import ReactDOM from 'react-dom';
import RootRoutes from './root-routes';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from "./config/config-store"

// Dispatching this here for sake of demo
import {ACTIONS} from "./shared/slices/user"
store.dispatch(ACTIONS.SET_USER({
  firstName: "Renate",
  lastName: "Gouveia",
  token: "12345"
}))

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <RootRoutes />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
