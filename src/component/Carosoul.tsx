// import { FaAngleLeft, FaAngleRight } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import PrimaryButton from "./Button/PrimaryButton";
import { Navigation, Autoplay } from "swiper";
import React, { useRef } from "react";
const Carosoul = () => {
  const progressCircle = useRef<SVGSVGElement | null>(null);
  const progressContent = useRef<HTMLSpanElement | null>(null);

  const onAutoplayTimeLeft = (s: any, time: number, progress: number): void => {
    if (progressCircle.current !== null) {
      progressCircle.current.style.setProperty(
        "--progress",
        `${1 - (progress as number)}`
      );
    }
    if (progressContent.current !== null) {
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    }
  };

  const handler = () => {
    console.log("hello");
  };
  return (
    <div>
      <Swiper
        className="relative group"
        speed={600}
        parallax={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        spaceBetween={50}
        slidesPerView={1}
        modules={[Navigation, Autoplay]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        navigation={{
          nextEl: ".button-next-slide",
          prevEl: ".button-prev-slide",
        }}
      >
        <SwiperSlide>
          <div
            className="relative flex justify-center items-center"
            data-swiper-parallax="-23%"
          >
            <img
              src="https://i.ibb.co/qYyXJzg/slider-1-2.jpg"
              alt=""
              className="h-full md:h-screen w-full "
            />

            <div className="absolute w-11/12 mx-auto ">
              <h2
                className=" siara text-white text-xs md:text-2xl bg-gray-900 text-center p-1 md:py-6 bg-opacity-80 w-full md:w-2/5 rounded   "
                data-swiper-parallax="-300"
              >
                Creating a Culture of excellence
              </h2>
              <h1
                className="  text-white siara text-xs md:text-3xl  bg-green-900 w-full md:w-2/5 bg-opacity-50 rounded text-center md:py-2"
                data-swiper-parallax="-200"
              >
                City University
              </h1>
              <PrimaryButton
                classes={"text-xs md:text-xl md:my-2 "}
                handler={handler}
                data-swiper-parallax="-100"
              >
                {"Visit Us"}
              </PrimaryButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center">
            <img
              src="https://i.ibb.co/MP64vfS/slider-2.png"
              alt=""
              className="h-full md:h-screen w-full "
            />

            <div className="absolute w-11/12 mx-auto ">
              <h2 className=" siara text-white text-xs  md:text-2xl bg-gray-900 text-center py-1 md:py-6 bg-opacity-80 w-full md:w-2/5 rounded   ">
                City University have 12 department
              </h2>
              <h1 className="text-white  siara  text-xs  md:text-3xl bg-green-900 w-full md:w-2/5  bg-opacity-50 rounded text-center md:py-2">
                City University
              </h1>
              <PrimaryButton
                classes={" text-xs md:text-xl md:my-2"}
                handler={handler}
              >
                {"Contact Us"}
              </PrimaryButton>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="relative flex justify-center items-center">
            <img
              src="https://i.ibb.co/rySKT5h/332693562-506097708372039-1542571921409092469-n.jpg"
              alt=""
              className="h-full md:h-screen w-full "
            />

            <div className="absolute w-11/12 mx-auto ">
              <h2 className=" siara text-white text-xs  md:text-2xl bg-gray-900 text-center py-1 md:py-6 bg-opacity-80 w-full md:w-2/5 rounded   ">
                City University Has Hall Facility
              </h2>
              <h1 className="text-white  siara  text-xs  md:text-3xl bg-green-900 w-full md:w-2/5  bg-opacity-50 rounded text-center md:py-2">
                City University
              </h1>
              <PrimaryButton
                classes={" text-xs md:text-xl md:my-2"}
                handler={handler}
              >
                {"Contact Us"}
              </PrimaryButton>
            </div>
          </div>
        </SwiperSlide>
        {/* <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
        <div className="top-[50%] absolute z-10 button-next-slide group-hover:left-0 -left-[23rem] duration-500 text-white w-[40px] h-[40px] bg-black grid place-items-center">
          <FaAngleLeft />
        </div>
        <div className="top-[50%] absolute z-10 button-prev-slide group-hover:right-0 -right-[23rem] duration-500 text-white w-[40px] h-[40px] bg-black grid place-items-center">
          <FaAngleRight />
        </div> */}
      </Swiper>
    </div>
  );
};

export default Carosoul;
