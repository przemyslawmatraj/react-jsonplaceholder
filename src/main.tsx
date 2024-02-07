import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout.tsx";
import Posts from "./routes/Posts.tsx";
import Users from "./routes/Users.tsx";
import Albums from "./routes/Albums.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/users" element={<Users />} />
      <Route path="/albums" element={<Albums />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
