import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { OurProvider } from "./context/ourContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <OurProvider>
        <App />
      </OurProvider>
    </BrowserRouter>
  </React.StrictMode>
);
