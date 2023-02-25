import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./index.css";
import AppContainer from "./pages/AppContainer";
import Login from "./pages/Login";
import Base64Image from "./pages/utils/b64image";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/login" element={<Login />} />
      <Route path="/" element={<AppContainer />}>
        <Route path="/common/base64image" element={<Base64Image />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
