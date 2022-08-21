import * as ReactDOM from "react-dom/client";
import React from "react";
import "./styles/main.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Orders from "./pages/Orders";
import Account from "./pages/Account";
import Config from "./pages/Config";

import API from "./pages/subpages/API";
import Profile from "./pages/subpages/Profile";
import Services from "./pages/subpages/Services";
import System from "./pages/subpages/System";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="orders" element={<Orders />}>
          <Route path="ongoing" element={<div>Ongoing</div>}></Route>
          <Route path="completed" element={<div>Completed</div>}></Route>
        </Route>
        <Route path="account" element={<Account />}>
          <Route path="profile" element={<Profile />}></Route>
          <Route path="api" element={<API />}></Route>
          <Route path="billing" element={<div>Billing</div>}></Route>
          <Route path="marketplace" element={<div>Marketplace</div>}></Route>
        </Route>
        <Route path="config" element={<Config />}>
          <Route path="services" element={<Services />}></Route>
          <Route path="system" element={<System />}></Route>
        </Route>
      </Route>
    </Routes>
  </BrowserRouter>);