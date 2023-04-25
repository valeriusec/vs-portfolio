import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import PreloadMedia from "../Components/PreloadMedia";
import { media } from "../Constants/constants";
import App from "./App";
import "./index.css";
import "font-awesome/css/font-awesome.min.css";
import "../../public/Fonts/Morganite/morganiteFont.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <PreloadMedia images={Object.values(media)}>
        <App />
      </PreloadMedia>
    </BrowserRouter>
  </React.StrictMode>
);
