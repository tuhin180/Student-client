import React from "react";
import Carosoul from "../Carosoul";
import Specialty from "../Specialty";
import Faculty from "../Faculty";
import Aboutcity from "../Aboutcity";
import Campus from "../Campus/Campus";
import VideoTour from "../VideoTour";

const Home = () => {
  return (
    <div>
      <Carosoul />
      <Specialty />
      <div className="mt-24"></div>
      <Faculty />
      <Aboutcity />
      <Campus />
      <VideoTour
        videoUrl={
          "https://www.youtube.com/watch?v=1UMPuc8htCo&ab_channel=CityUniversity"
        }
      />
    </div>
  );
};

export default Home;
