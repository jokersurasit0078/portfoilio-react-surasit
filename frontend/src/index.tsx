import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import AppRouter from "./AppRouter";
import reportWebVitals from "./reportWebVitals";
import { store } from "./stores";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { ThemeProvider } from "@mui/material";
import { theme } from "./constant/themeMui";
import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDi4HB-OYsYWY99WFnUx_rJvv63EWuQ5-0",
  authDomain: "portfolio-react-surasit.firebaseapp.com",
  projectId: "portfolio-react-surasit",
  storageBucket: "portfolio-react-surasit.appspot.com",
  messagingSenderId: "798795138076",
  appId: "1:798795138076:web:e6a6826b39bb7bfcb18bd9"
};

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const persistor = persistStore(store);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider theme={theme}>
          <AppRouter />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
