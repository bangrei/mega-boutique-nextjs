"use client";

import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import Image from "next/image";
import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/24/outline";

const GroupCarousel = () => {
  const [banners, setBanners] = useState<String[]>([]);
  const [perview, setPerview] = useState(8);
  useEffect(() => {
    const images = [
      "https://img-cdn-02.megaboutique.com.au/logo/adhoc_logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/alessi-logo.webp",
      "https://img-cdn-02.megaboutique.com.au/logo/alzon-logo.png",
      "https://img-cdn-02.megaboutique.com.au/logo/Amalfi-Logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/Anchor Hocking.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/anolon-logo.webp",
      "https://img-cdn-02.megaboutique.com.au/logo/ashdene-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/avanti-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/BakeMaster_Logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/baker's secret.png",
      "https://img-cdn-02.megaboutique.com.au/logo/ballarini-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/bambury.png",
      "https://img-cdn-02.megaboutique.com.au/logo/berghoff-logo.png",
      "https://img-cdn-02.megaboutique.com.au/logo/blacklock_logo2.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/Borner Logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/boutique-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/brabantia-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/Bundanoon_logo2.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/chasseur-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/chefs-choice-logo-vector.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/cheftech_logo.png",
      "https://img-cdn-02.megaboutique.com.au/logo/cinnamon-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/Circulon-logo.png",
      "https://img-cdn-02.megaboutique.com.au/logo/cole-mason-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/contigo-logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/cristal_darques_logo_25.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/cuisinart.png",
      "https://img-cdn-02.megaboutique.com.au/logo/Cuisipro logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/Davinci-Logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/daviswaddelllogo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/Dexter-Russell Logo.jpg",
      "https://img-cdn-02.megaboutique.com.au/logo/duralex-logo.jpeg",
    ];
    setBanners(images);
  }, []);
  return (
    <div className="w-full px-4 md:px-[7%] flex gap-4 items-center relative">
      <div className="slide-prev">
        <ChevronLeftIcon className="w-4 h-4" />
      </div>
      {banners.length && (
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation={{
            prevEl: ".slide-prev",
            nextEl: ".slide-next",
          }}
          breakpoints={{
            320: { slidesPerView: 4 },
            640: { slidesPerView: 6 },
            1024: { slidesPerView: 8 },
          }}
          pagination={false}
          autoplay={{ delay: 8000 }}
          slidesPerView={perview}
          slidesPerGroup={perview}
          spaceBetween={24}
          loop
        >
          {banners.map((src, index) => (
            <SwiperSlide
              key={index}
              className="w-full flex flex-col relative group cursor-pointer"
            >
              <Image
                src={`${src}`}
                alt={`${src}`}
                width={800}
                height={300}
                className="w-full object-contain group-hover:scale-110 transition-all duration-300"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      )}
      <div className="slide-next">
        <ChevronRightIcon className="w-4 h-4" />
      </div>
    </div>
  );
};
export default GroupCarousel;
