import React from "react";
import "./App.css";
import { RouterProvider } from "react-router-dom";
import router from "./Routes/Routes";
const App: React.FC = () => {
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
};

export default App;
