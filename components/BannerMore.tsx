"use client";
import Image from "next/image";
const BannerMore = () => {
  return (
    <div className="w-full grid md:grid-cols-[1fr_2fr] gap-3 px-4 md:px-[7%] pb-8">
      <div className="md:col-start-1 flex items-center gap-2 justify-center group overflow-hidden">
        <Image
          className="object-cover w-full min-h-[100%] group-hover:scale-105 transition-all duration-300"
          src="https://img-cdn-02.megaboutique.com.au/banners/240114---square-banner.webp"
          alt="Mega Boutique"
          width={300}
          height={300}
        />
      </div>
      <div className="flex flex-col md:col-start-2 md:grid md:grid-rows gap-3">
        <div className="w-full group overflow-hidden">
          <Image
            className="object-cover w-full md:min-h-[100%] group-hover:scale-105 transition-all duration-300"
            src="https://img-cdn-02.megaboutique.com.au/banners/250203---valentine-for-her.webp"
            alt="Mega Boutique"
            width={400}
            height={200}
          />
        </div>
        <div className="w-full group overflow-hidden">
          <Image
            className="object-cover w-full group-hover:scale-105 md:min-h-[100%] transition-all duration-300"
            src="https://img-cdn-02.megaboutique.com.au/banners/250203---valentine-for-him.webp"
            alt="Mega Boutique"
            width={400}
            height={200}
          />
        </div>
      </div>
    </div>
  );
};
export default BannerMore;
