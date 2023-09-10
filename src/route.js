import { createBrowserRouter } from "react-router-dom";
import Contact from "./views/pages/Contact";
import Dashboard from "./views/pages/Dashboard";
import ErrorPage from "./views/pages/ErrorPage";
import Login from "./views/pages/auth/Login";

export const router = createBrowserRouter([
  {
    path: "",
    element: <Login />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "",
        element: <div>Dashboard home</div>,
      },
      {
        path: "contacts",
        element: <Contact />,
      },
    ],
  },
]);
