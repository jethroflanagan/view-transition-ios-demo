import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App";
import "./index.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { LockScreen } from "./LockScreen";
import { Widget } from './Widget';
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lock",
    element: <LockScreen />,
  },
  {
    path: "/widget",
    element: <Widget />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
