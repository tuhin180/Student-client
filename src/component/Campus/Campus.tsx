import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper";

const slides = [
  {
    id: 1,
    image:
      "https://i.ibb.co/vV6BMcn/334953295-6414120331932675-7175781665445911296-n.jpg",
  },
  {
    id: 2,
    image:
      "https://i.ibb.co/SK930dJ/342397686-539834588345931-5920123323904200535-n.jpg",
  },
  {
    id: 3,
    image:
      "https://i.ibb.co/PDLRzJS/65793028-437197073530780-6589739245324206080-n.jpg",
  },
  {
    id: 4,
    image:
      "https://i.ibb.co/WvDqHH9/84102216-2634806996635434-1465337911049191424-n.jpg",
  },
  {
    id: 5,
    image: "https://i.ibb.co/cNMpTJJ/20180512-211341.jpg",
  },
];

const Campus = () => {
  return (
    <div>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="flex content-center flex-wrap"
      >
        {slides.map((slide) => (
          <SwiperSlide
            key={slide.id}
            style={{
              flexBasis: "calc(33.33% - 30px)",
              margin: "15px",
              boxShadow: "0px 0px 8px 0px rgba(0, 0, 0, 0.2)",
              borderRadius: "5px",
              overflow: "hidden",
            }}
          >
            <img
              src={slide.image}
              alt=""
              className="w-full h-full object-cover"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Campus;
