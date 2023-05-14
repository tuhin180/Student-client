import React, { useRef, useState } from "react";
import { FaPlayCircle } from "react-icons/fa";
import ReactPlayer from "react-player";

type Video = {
  videoUrl: string;
};

const VideoPlayer = ({ videoUrl }: Video) => {
  const [isFullScreen, setIsFullScreen] = useState(false);
  const playerRef = useRef(null);

  const handlePlay = () => {
    setIsFullScreen(true);
  };

  const handleExitFullScreen = () => {
    setIsFullScreen(false);
  };

  return (
    <div className="relative">
      {!isFullScreen && (
        <div
          className="w-full h-screen bg-center bg-no-repeat bg-cover"
          style={{
            backgroundImage: `url(https://i.ibb.co/qYyXJzg/slider-1-2.jpg)`,
            height: "400px",
            width: "100%",
          }}
        >
          <div className="flex items-center justify-center h-full backdrop-brightness-50 gap-3">
            <button className="text-6xl text-white" onClick={handlePlay}>
              <FaPlayCircle />
            </button>
            <div>
              <h1 className="text-white text-xl">
                Video Tour Of city University
              </h1>
              <p className="text-white">
                Click on the video icon and visit our Campus
              </p>
            </div>
          </div>
        </div>
      )}
      {isFullScreen && (
        <div
          className="fixed top-0 left-0 w-screen h-screen bg-black z-50 flex items-center justify-center"
          onClick={handleExitFullScreen}
        >
          <ReactPlayer
            ref={playerRef}
            url={videoUrl}
            playing={isFullScreen}
            controls={true}
            width="80%"
            height="80%"
          />
        </div>
      )}
    </div>
  );
};

export default VideoPlayer;
