import React from "react";
import { FaUniversity, FaGraduationCap } from "react-icons/fa";
import { MdOutlineDiversity2, MdOutlineSportsCricket } from "react-icons/md";
const information = [
  {
    title: "University Life",
    description: "Multiple campus Loacation",
    icon: FaUniversity,
  },
  {
    title: "Academics",
    description: "variety of program and courses",
    icon: FaGraduationCap,
  },
  {
    title: "Athletics",
    description: "Sports club and facility",
    icon: MdOutlineSportsCricket,
  },
  {
    title: "Social Activities",
    description: "Various clubs and organization ",
    icon: MdOutlineDiversity2,
  },
];
const Specialty = () => {
  return (
    <div className="md:relative z-10">
      <div className=" rounded-md md:absolute md:-top-12 left-28  bg-white p-8 grid grid-cols-1 md:grid-cols-4 gap-4 w-full  md:w-4/5 mx-auto shadow-lg  ">
        {information.map((info, index) => (
          <div key={index} className="flex gap-4 w-full ">
            <div>
              <info.icon className="text-5xl text-blue-500" />
            </div>
            <div>
              <h1 className="font-bold ">{info.title}</h1>
              <p className="text-gray-500">{info.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specialty;
