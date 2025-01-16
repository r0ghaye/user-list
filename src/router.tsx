import { createBrowserRouter, RouteObject } from "react-router-dom";

import Home from "./pages/Home/Home";
import UsersListPage from "./pages/Users/Users";
import Layout from "./components/Layout/Layout";

const routes: RouteObject[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "users",
        element: <UsersListPage />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
];

const router = createBrowserRouter(routes);

export default router;
