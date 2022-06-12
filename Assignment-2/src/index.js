import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Button from "./Components/Button";
import "./Style.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <StrictMode>
    <Button />
    <App />
  </StrictMode>
);
