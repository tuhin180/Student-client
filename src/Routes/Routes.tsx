import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import Error from "../component/ErrorElement/Error";
import Home from "../component/Pages/Home";
import Login from "../component/Pages/Authentication/Login";
import Register from "../component/Pages/Authentication/Register";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/Register",
        element: <Register />,
      },
    ],
  },
]);
export default router;
