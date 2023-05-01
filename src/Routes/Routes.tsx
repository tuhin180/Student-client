import { createBrowserRouter } from "react-router-dom";

import Main from "../Layouts/Main";
import Error from "../component/ErrorElement/Error";
import Home from "../component/Pages/Home";
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
    ],
  },
]);
export default router;
