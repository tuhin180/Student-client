import React from "react";
interface Children {
  children: React.ReactNode;
  handler: () => void;
  classes: String;
}
const PrimaryButton = ({ children, handler, classes }: Children) => {
  return (
    <button
      onClick={handler}
      className={` bg-gradient-to-r from-slate-800 via-slate-700 to-green-700 hover:bg-gradient-to-l hover:from-slate-800 hover:via-slate-700 hover:to-green-700 text-white px-4 py-2 rounded-lg  ${classes}`}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
