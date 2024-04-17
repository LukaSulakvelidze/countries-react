import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Country_page from "./pages/Country_page.tsx";


const reactRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/Country_page",
    element: <Country_page/>,
  },
  {
    path: "*",
    element: <h1>Page not Found</h1>,
  }
])

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
  <RouterProvider router={reactRouter} />
  </React.StrictMode>
);
