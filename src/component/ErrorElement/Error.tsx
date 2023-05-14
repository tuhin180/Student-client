import { NavLink, useRouteError } from "react-router-dom";

const Error: React.FC = () => {
  const error: any = useRouteError();
  return (
    <>
      <div className="grid h-screen px-4  place-content-center bg-gradient-to-r from-emerald-500 to-emerald-900">
        <h1 className="tracking-widest text-white uppercase ">
          <i>{error.statusText || error.message || error.status}</i>
        </h1>

        <NavLink
          to={"/"}
          className={
            " bg-white text-center py-2 rounded-md hover:bg-blue-500 hover:text-white"
          }
        >
          Back to Home
        </NavLink>
      </div>
    </>
  );
};

export default Error;
