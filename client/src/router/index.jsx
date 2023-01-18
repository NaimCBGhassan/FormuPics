import { createBrowserRouter } from "react-router-dom";
import { HomePage, NotFound, PostForm } from "../pages";

export const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/new",
        element: <PostForm />,
      },
    ],
  },
]);
