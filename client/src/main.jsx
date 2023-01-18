import "./index.css";

import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./router";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <div className="bg-neutral-600 min-h-screen flex items-center">
      <div className="px-10 container bg-red-100 m-auto">
        <RouterProvider router={router} />
      </div>
    </div>
  </React.StrictMode>
);
