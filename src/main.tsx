import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./index.css";

import MainLayout from "./layouts/MainLayout.tsx";
import routes from "./routes/routes.ts";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<routes.Dashboard />} />
      <Route path="/posts" element={<routes.Posts />} />
      <Route path="/posts/:id" element={<routes.Post />} />
      <Route path="/users" element={<routes.Users />} />
      <Route path="/users/:id" element={<routes.User />} />
      <Route path="/albums" element={<routes.Albums />} />
      <Route path="/albums/:id" element={<routes.Album />} />
    </Route>
  )
);

const queryClient = new QueryClient();

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);
