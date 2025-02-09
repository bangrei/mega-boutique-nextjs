"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import CategoryCardShimmer from "./CategoryCardShimmer";
import { useRouter } from "next/navigation";
import Link from "next/link";

const CategorySection = () => {
  const [categories, setCategories] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  const linkDetail = (category: any) => {
    let name = category.name.split(" ").join("-").toLowerCase();
    return `/${name}`;
  };

  useEffect(() => {
    setCategories([
      {
        name: "Cookware",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/cookware-webp.webp",
      },
      {
        name: "Kitchenware",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/kitchenware-webp.webp",
      },
      {
        name: "Knives",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/knives-webp.webp",
      },
      {
        name: "Tableware",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/tableware-webp.webp",
      },
      {
        name: "Home Decor",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/home-decor-webp.webp",
      },
      {
        name: "Home Living",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/home-living-webp.webp",
      },
      {
        name: "Travel & Outdoor",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/outdoor-webp.webp",
      },
      {
        name: "Drinkware",
        image:
          "https://img-cdn-02.megaboutique.com.au/banners/drinkware-webp.webp",
      },
    ]);
    setLoading(false);
  }, []);
  return (
    <div className="w-full flex flex-col gap-3 md:px-[7%] overflow-hidden">
      <div className="font-bold text-xl md:text-2xl uppercase px-4 md:px-0">
        Shop by Category
      </div>
      {loading && <CategoryCardShimmer />}
      <div className="categories-card">
        {categories.map((cat, i) => {
          return (
            <div key={i} className="flex gap-2 flex-col">
              <Link
                href={linkDetail(cat)}
                key={i}
                className="category-card group"
              >
                <Image
                  className="category-card-image"
                  src={cat.image}
                  alt={cat.name}
                  width={100}
                  height={100}
                />
              </Link>
              <span className="category-card-label">{cat.name}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default CategorySection;
