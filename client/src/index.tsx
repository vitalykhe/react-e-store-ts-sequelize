import React, { createContext } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import DeviceStore from "./store/DeviceStore";
import UserStore from "./store/UserStore";

type ContextProps = { 
  user: UserStore;
  devices: DeviceStore;
};

export const Context = createContext<Partial<ContextProps>>({});

ReactDOM.render(
  <React.StrictMode>
    <Context.Provider value={{
      user: new UserStore(),
      devices: new DeviceStore()
    }}>
      <App />
    </Context.Provider>,
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
