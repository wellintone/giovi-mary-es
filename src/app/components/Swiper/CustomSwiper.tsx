"use client";
import React, { FC, HtmlHTMLAttributes, ReactNode, useCallback } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/scss";
import "swiper/scss/pagination";
import "swiper/scss/navigation";

// import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCreative,
  Parallax,
} from "swiper/modules";

export interface ICustomSwiper extends HtmlHTMLAttributes<HTMLElement> {
  children: ReactNode[];
  type?: "default" | "creative";
}

const CustomSwiper: FC<ICustomSwiper> = ({ children, type = "default" }) => {
  const swiperType = useCallback(() => {
    switch (type) {
      case "default":
        return [Autoplay, Pagination, Navigation];
      case "creative":
        return [Autoplay, Pagination, Navigation, EffectCreative, Parallax];

      default:
        return [Autoplay, Pagination, Navigation];
    }
  }, [type]);
  return (
    <>
      <Swiper
        slidesPerView={1}
        spaceBetween={90}
        loop={true}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        speed={3500}
        parallax={true}
        pagination={{
          clickable: true,
          dynamicBullets: true,
        }}
        grabCursor={true}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: ["-20%", 0, -1],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        navigation={false}
        modules={swiperType()}
        className="mySwiper"
      >
        {children?.map((el: any, key: number) => (
          <SwiperSlide key={key}>{el}</SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};
export default CustomSwiper;
