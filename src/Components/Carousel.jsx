import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade, EffectCube } from "swiper/modules";
import SwiperCore from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

SwiperCore.use([Autoplay]);
SwiperCore.use([Navigation]);
SwiperCore.use([EffectFade]);
SwiperCore.use([EffectCube]);

export default function Carousel() {
  return (
    <div className="h-full">
      <Swiper
        spaceBetween={1}
        slidesPerView={1}
        effect={"cube"}
        speed={1500}
        navigation
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Navigation]}
        className="flex" // Add 'flex' class to make slides the same height
      >
        <SwiperSlide>
          <div className="carousel-slide bg-gray-100 h-full">
            <p className="mt-1 md:text-9xl font-bold flex justify-center items-center tracking-tight bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-9xl">
              About Us
            </p>
            <p>
              Founded in 2020 out of passion for the AI/ML domain we are Synapse
              , The official AI/ML club of DJ Sanghvi working on ML projects,
              researching on various topics and having fun in the process.
              Synapse truly believes in the transformative powers of ML and
              hence provides mentorship and motivation to a student for
              researching a field of his/her interest and creates an innovative
              solution to the world problems by implementing modern solutions.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-slide bg-gray-100 h-full">
            <p className="mt-1 md:text-9xl font-bold flex justify-center items-center tracking-tight bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-9xl">
              Vision
            </p>
            <p className="m-8">
              To provide high quality knowledge and ethical values to develop
              competent and capable engineers.
            </p>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="carousel-slide bg-gray-100 h-full">
            <p className="mt-1 md:text-9xl font-bold flex justify-center items-center tracking-tight bg-gradient-to-r from-blue-400 to-blue-700 bg-clip-text text-transparent text-9xl">
              Mission
            </p>
            <p>
              To encourage research aptitude. Developing professional skills and
              providing systematic and modern approach in learning.
            </p>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
