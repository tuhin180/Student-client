import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import { Link } from "react-router-dom";
// import required modules
import { EffectCards } from "swiper";

const fac = [
  {
    name: "Faculty of Computer Science and Engineering",
    img: "https://i.ibb.co/c3qnf19/Firefly-computer-science-and-engineer-33004.jpg",
    description:
      "Faculty of Computer Science and Engineering focuses on providing students with theoretical and practical knowledge of computer science and engineering fields. It offers a wide range of programs that cater to the current industry demands and prepares students to be innovative and critical thinkers in the tech world",
  },
  {
    name: "Faculty of Business and Economy",
    img: "https://i.ibb.co/dMG2rR7/Firefly-business-graph-in-dark-photo-wher-the-graph-will-show-a-portrait-and-graph-have-some-details.jpg",
    description:
      "The Faculty of Business and Economy is one of the leading faculties at universities around the world, providing students with a wide range of educational opportunities in fields such as accounting, economics, finance, marketing, management, and more. Graduates of this faculty are highly sought after in the job market and have successful careers in various industries.",
  },
  {
    name: "Department Of Electrical Engineering",
    img: "https://i.ibb.co/520YcQN/Firefly-shwo-me-best-electric-wire-or-circuit-dirk-photo-69555.jpg",
    description:
      "The Department of Electrical Engineering focuses on the study and application of electricity, electronics, and electromagnetism. Its research and teaching areas include power systems, control systems, communications, signal processing, and more.",
  },
  {
    name: "Department of Mechanical Engineering",
    img: "https://i.ibb.co/ysM2njY/Firefly-Department-of-mechanical-engineering-55932.jpg",
    description:
      "The Department of Mechanical Engineering focuses on the design, analysis, and manufacturing of mechanical systems. Students learn about energy conversion, robotics, materials science, and more to prepare for careers in fields such as aerospace, automotive, and biomedical engineering.",
  },
  {
    name: "Department of Civil Engineering",
    img: "https://i.ibb.co/L1y4fsw/Firefly-portrait-of-a-building-dark-image-69555.jpg",
    description:
      "The Department of Civil Engineering focuses on designing and constructing infrastructure such as buildings, bridges, roads, and dams. Students learn the fundamentals of structural and geotechnical engineering, as well as project management and sustainability principles.",
  },
  {
    name: "Department of Textile Engineering",
    img: "https://i.ibb.co/mz67cn3/Firefly-Department-of-Textile-Engineering-29069.jpg",
    description:
      "The Department of Textile Engineering focuses on the design, development, and production of textiles and apparel. Students learn about fibers, yarns, fabrics, and their applications in various industries. The curriculum includes courses in textile manufacturing, textile testing, apparel design, and sustainable textile practices.",
  },
  {
    name: "Department of Pharmacy",
    img: "https://i.ibb.co/9v3LCX2/Firefly-Department-of-phermacy-where-teaches-how-to-give-medicine-and-how-o-made-medicine-29069.jpg",
    description:
      "The Department of Pharmacy is a multidisciplinary field of study that focuses on the discovery, development, and delivery of safe and effective medications for the prevention and treatment of diseases. It combines principles of chemistry, biology, and health sciences to prepare students for careers in the pharmaceutical industry, healthcare, and research.",
  },
  {
    name: "Department of English",
    img: "https://i.ibb.co/DQ2jBvm/Firefly-department-of-English-book-29069.jpg",
    description:
      "The Department of English focuses on the study of language, literature, and culture. Students can learn critical thinking, communication, and writing skills while exploring diverse literary works and cultural perspectives. The department offers undergraduate and graduate programs in English language and literature.",
  },
  {
    name: "Department of Law",
    img: "https://i.ibb.co/27rNJQn/Firefly-Department-of-law-in-university-29069.jpg",
    description:
      "The Department of Law is an academic unit within a university or college that focuses on the study of legal theory, principles, and practices. It prepares students for careers in the legal profession or related fields such as business, government, and public policy.   ",
  },
];

const Faculty = () => {
  return (
    <div className="flex justify-center items-center  p-12 bg-gradient-to-r from-slate-800 via-slate-700 to-green-700 hover:bg-gradient-to-l hover:from-slate-800 hover:via-slate-700 hover:to-green-700 ">
      <Swiper
        effect={"cards"}
        grabCursor={true}
        modules={[EffectCards]}
        className="w-1/2"
      >
        {fac.map((f, index) => (
          <SwiperSlide key={index}>
            <div
              style={{
                backgroundImage: `url(${f.img})`,
                height: "500px",
                width: "100%",
                backgroundSize: "cover",
              }}
              className="bg-gray-500 backdrop-brightness-50 flex justify-start items-center"
            >
              <div>
                <h1 className="text-white text-center font-bold text-xl p-2  bg-slate-900 bg-opacity-40 rounded-lg">
                  {f.name}
                </h1>
                <p className="text-white px-2 bg-gray-900 bg-opacity-50 my-2 ">
                  {f.description}
                </p>
                <Link
                  to={"/"}
                  tabIndex={2}
                  className="text-white text-2xl bg-green-700 py-2 px-4 rounded-lg hover:bg-rose-700 link focus:outline-none focus:ring focus:ring-violet-300"
                >
                  Enroll now
                </Link>
              </div>
            </div>
          </SwiperSlide>
        ))}
        {/* <SwiperSlide>
          <div
            style={{
              backgroundImage: `url("https://i.ibb.co/c3qnf19/Firefly-computer-science-and-engineer-33004.jpg")`,
              height: "500px",
              width: "80%",
              backgroundSize: "cover",
            }}
            className="bg-gray-500 backdrop-brightness-50"
          >
            <h1 className="text-white text-center font-bold text-xl p-10  ">
              Faculty of Computer Science and Engineering
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${"https://i.ibb.co/mN03x5y/Firefly-business-administration-29069.jpg"})`,
              height: "500px",
              width: "80%",
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-white text-center font-bold text-xl p-10  ">
              Faculty of Business and Economy
            </h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            style={{
              backgroundImage: `url(${"https://i.ibb.co/3f2zBwv/Firefly-Depart-ment-of-electrical-engineering-33004.jpg"})`,
              height: "500px",
              width: "80%",
              backgroundSize: "cover",
            }}
          >
            <h1 className="text-white text-center font-bold text-xl p-10  ">
              Department Of Electrical Engineering
            </h1>
          </div>
        </SwiperSlide> */}
      </Swiper>
    </div>
  );
};

export default Faculty;
