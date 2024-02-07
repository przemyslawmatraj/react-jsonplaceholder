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
import Posts from "./routes/Posts/Posts.tsx";
import Users from "./routes/Users/Users.tsx";
import Albums from "./routes/Albums/Albums.tsx";

import Post from "./routes/Posts/Post.tsx";
import User from "./routes/Users/User.tsx";
import Album from "./routes/Albums/Album.tsx";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<MainLayout />}>
      <Route path="/" element={<App />} />
      <Route path="/posts" element={<Posts />} />
      <Route path="/posts/:id" element={<Post />} />
      <Route path="/users" element={<Users />} />
      <Route path="/users/:id" element={<User />} />
      <Route path="/albums" element={<Albums />} />
      <Route path="/albums/:id" element={<Album />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
