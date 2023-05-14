import React from "react";
import { FaArrowRight } from "react-icons/fa";
const Aboutcity = () => {
  return (
    <div className="flex justify-center items-center gap-4 p-4">
      <div className="w-full md:w-1/2">
        <img src="https://i.ibb.co/qYyXJzg/slider-1-2.jpg" alt="" />
      </div>
      <div className="w-full md:w-1/2 ">
        <h1 className="text-xl font-bold">
          City University aims to empower young minds to reach greater heights
        </h1>
        <p>
          The vision of City University is to create a culture of excellence in
          higher education and research to accelerate national development by
          establishment of an institution of higher learning that is responsive
          to society’s needs for the 21st century and beyond. A firm resolve of
          our founder is that no merit shall be wasted only because of poverty.
          It is with Pride and Honor that City University marches forward for a
          better Bangladesh, for an achievement of excellence, and for a better
          tomorrow.
        </p>
        <a href="/" className="flex items-center font-bold text-blue-600">
          Read more
          <span className="mt-1">
            <FaArrowRight />
          </span>
        </a>
      </div>
    </div>
  );
};

export default Aboutcity;
