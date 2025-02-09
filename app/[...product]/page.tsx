"use client";

import Image from "next/image";
import PageLayout from "@/components/PageLayout";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
export default function Product() {
  const { product } = useParams();
  const [products, setProducts] = useState<any[] | []>([]);
  const productString = () => {
    if (!product) return "";
    let str = decodeURIComponent(product.toString());
    return str.split("-").join(" ");
  };

  const actions = () => {};

  useEffect(() => {
    setProducts([
      {
        name: "Avanti Dura Edge Paring Knife 7.5cm",
        image: "https://img-cdn-01.megaboutique.com.au/400x400/SH-78606.jpg",
        instock: true,
        price: 5.95,
        price2: 10.95,
        discount: 5.0,
        percentage: 45,
        sale: false,
      },
      {
        name: "Alzon M390 D1 Chinese Chef Knife 18cm | Böhler M390 Steel + ABS Handle",
        image: "https://img-cdn-01.megaboutique.com.au/400x400/AL-D1ABS.png",
        instock: true,
        price: 53.95,
        price2: 149.0,
        discount: 95.05,
        percentage: 63,
        sale: true,
      },
      {
        name: "Alzon M390 D1 Chinese Chef Knife 18cm | Böhler M390 Steel + Micarta Handle",
        image:
          "https://img-cdn-01.megaboutique.com.au/400x400/AL-D1MIKATA-1.png",
        instock: true,
        price: 60.95,
        price2: 179.0,
        discount: 118.05,
        percentage: 65,
        sale: false,
      },
      {
        name: "Avanti Magforce Magnetic Rack 30cm | Aluminium Faceplate",
        image: "https://img-cdn-01.megaboutique.com.au/400x400/SH-78560.jpg",
        instock: true,
        price: 19.95,
        price2: 35.95,
        discount: 16.0,
        percentage: 44,
        sale: true,
      },
      {
        name: "Alzon M390 T2 German Chef Knife 20cm | Böhler M390 Steel + Ceramoplastic Handle",
        image: "https://img-cdn-01.megaboutique.com.au/400x400/AL-T2PLCERA.png",
        instock: true,
        price: 53.95,
        price2: 149.0,
        discount: 95.05,
        percentage: 63,
        sale: true,
      },
      {
        name: "Alzon M390 T4 Chef's Knife 20cm | Böhler M390 Steel + Ceramoplastic Handle",
        image:
          "https://img-cdn-01.megaboutique.com.au/400x400/AL-T4PLCERA-11.png",
        instock: false,
        price: 48.95,
        price2: 99.0,
        discount: 50.05,
        percentage: 50,
        sale: false,
      },
    ]);
  }, []);
  return (
    <PageLayout>
      <div className="w-full flex flex-col px-4 md:px-[7%]">
        <div className="w-full flex items-center justify-between py-4">
          <div className="flex items-center gap-3 py-4">
            <span className="text-slate-500">Home</span>
            <FaChevronRight className="w-3 h-3 text-slate-400" />
            <span className="capitalize text-slate-500">{productString()}</span>
          </div>
        </div>
        <div className="w-full grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((p, i) => {
            return (
              <div
                key={i}
                className="rounded-lg overflow-hidden shadow-center-light hover:bg-badge hover:bg-opacity-10 flex flex-col h-full border border-transparent hover:border-slate-300/50 relative"
              >
                {p.sale && (
                  <div className="p-8 flex-col text-sm font-semibold w-8 h-8 bg-primary text-white absolute top-2 right-2 flex items-center justify-center rounded-full">
                    <div className="flex justify-center items-center font-bold">
                      <span className="text-xl">{p.percentage}</span>
                      <span className="text-xs">%</span>
                    </div>
                    <span className="uppercase text-xs">off</span>
                  </div>
                )}
                <Image
                  src={`${p.image}`}
                  alt={`${p.name}`}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ minWidth: "auto", minHeight: "" }}
                  className="w-full object-contain mix-blend-multiply"
                />
                <div
                  className={`py-4 flex items-center justify-center gap-2 uppercase text-xs font-semibold ${
                    p.instock ? "text-badge" : "text-primary"
                  }`}
                >
                  <span
                    className={`w-2 h-2 rounded-full ${
                      p.instock ? "bg-badge" : "bg-primary"
                    }`}
                  ></span>
                  <span>{p.instock ? "in stock" : "sold out"}</span>
                </div>
                <div className="px-4 mb-2 font-light text-center text-sm">
                  {p.name}
                </div>
                <div className="px-4 w-full flex flex-col items-center justify-between py-4 mt-auto">
                  <div className="flex flex-row gap-2 justify-center w-full">
                    <span className="text-secondary-super-light text-sm font-light line-through">
                      ${p.price2}
                    </span>
                    <div className="text-secondary-super-light text-lg font-bold">
                      ${p.price}
                    </div>
                  </div>
                  <div className="w-full flex items-center justify-center pb-4">
                    <small className="text-primary text-sm">
                      Save ${p.discount}
                    </small>
                  </div>
                  <div
                    className={`text-xs whitespace-nowrap hover:opacity-70 transition-opacity duration-300 text-white font-bold uppercase px-6 py-2 rounded-full ${
                      p.instock
                        ? "bg-badge cursor-pointer"
                        : "bg-[#ccc] pointer-events-none"
                    }`}
                  >
                    add to cart
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </PageLayout>
  );
}
