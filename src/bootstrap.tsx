// host/src/bootstrap.js
import React from "react";
import ReactDOM from "react-dom/client";
// @ts-ignore
import App from "./App.tsx";

const root = ReactDOM.createRoot(document.getElementById("root") as Element);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);