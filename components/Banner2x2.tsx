"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
const Banner2x2 = () => {
  const [banners, setBanners] = useState<any[] | []>([]);
  useEffect(() => {
    setBanners([
      {
        name: "alessi",
        image: "https://img-cdn-02.megaboutique.com.au/banners/alessi.webp",
        desc: `Renowned for its innovative kitchenware, tableware, and home accessories, Alessi is synonymous with high-quality craftsmanship. Blending functionality with artistic flair, the brand collaborates with world-class designers and architects to create unique pieces that serve a purpose while enhancing the aesthetic of any space.`,
      },
      {
        name: "noritake",
        image: "https://img-cdn-02.megaboutique.com.au/banners/noritake.webp",
        desc: `A prestigious Japanese brand renowned for its exquisite porcelain and ceramic tableware, characterized by fine craftsmanship and elegant designs. Noritake has a rich history of creating high-quality dinnerware, serving pieces, and decorative items that blend traditional artistry with modern aesthetics.`,
      },
      {
        name: "mason cash home to roost",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/static-banner---mason-cash.jpg",
        desc: `Bring joy to your kitchen with our Home to Roost collection, featuring folk-inspired hen and cockerel motifs. Made from durable earthenware, this mixing bowl is light enough to hold while mixing, yet sturdy enough for countertop use, ideal for both home and professional bakers.`,
      },
      {
        name: "tramontina lyon",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/static-banner---tramontina-lyon.webp",
        desc: `Made of forged aluminium with interior and exterior PFOA-free Starflon High-Performance nonstick coating, specially designed with T technology to offer better nonstick properties, greater scratch resistance, increased durability and easier cleaning.`,
      },
    ]);
  }, []);
  return (
    <div className="w-full grid lg:grid-cols-2 lg:grid-rows-2 gap-6 px-4 md:px-[7%]">
      {banners.map((banner, i) => {
        return (
          <div
            key={i}
            className={`lg:row-start-${i + 1 <= 2 ? 1 : 2} lg:col-start-${
              (i + 1) % 2 == 0 ? 2 : 1
            } flex flex-col gap-3 group`}
          >
            <div className="w-full overflow-hidden cursor-pointer group-hover:opacity-80 group-hover:shadow-center-dark transition-all duration-300">
              <Image
                className="object-cover w-full min-h-[100%]"
                src={banner.image}
                alt="Mega Boutique"
                width={300}
                height={300}
              />
            </div>
            <span className="w-fit uppercase text-lg font-semibold cursor-pointer group-hover:text-primary">
              {banner.name}
            </span>
            <span className="font-light w-full">{banner.desc}</span>
          </div>
        );
      })}
    </div>
  );
};

export default Banner2x2;
