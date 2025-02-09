"use client";

import { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";

const Carousel = () => {
  const [banners, setBanners] = useState<String[]>([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const images = [
      "https://img-cdn-02.megaboutique.com.au/banners/250204---tableware.webp",
      "https://img-cdn-02.megaboutique.com.au/banners/250204---warehouse-sale.webp",
      "https://img-cdn-02.megaboutique.com.au/banners/250204---cookware.webp",
      "https://img-cdn-02.megaboutique.com.au/banners/250204---knife.webp",
      "https://img-cdn-02.megaboutique.com.au/banners/250204---kitchenware.webp",
      "https://img-cdn-02.megaboutique.com.au/banners/250204---bakeware.webp",
    ];
    setBanners(images);
  }, []);
  return (
    <div className="w-full md:px-[7%] flex flex-col relative">
      <div className="w-full relative">
        {loading && (
          <div className="w-full aspect-[19/5] transition-all duration-500 bg-slate-300/50"></div>
        )}
        {banners && (
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation={false}
            pagination={{ clickable: true }}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            onSwiper={() => setLoading(false)}
            loop
          >
            {banners.map((src, index) => (
              <SwiperSlide key={index} className="w-full relative">
                <Image
                  src={`${src}`}
                  alt={`${src}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  className="w-full min-w-full object-contain"
                  style={{ minWidth: "auto", minHeight: "auto" }}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </div>
    </div>
  );
};
export default Carousel;
