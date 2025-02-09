"use client";
import { useEffect, useState } from "react";

const ShortInfo = () => {
  const [info, setInfo] = useState<any[] | []>([]);

  useEffect(() => {
    setInfo([
      {
        title:
          "Mega Boutique Australia: Your Ultimate Home Housewares & Kitchen Supply Shop",
        items: [
          `Mega Boutique stands as a beacon for those seeking premium house kitchen ware and home housewares, 
          offering an extensive range of products that blend functionality with style. As a leading kitchen supply store,
          we pride ourselves on providing everything from essential cookware to decorative kitchen accessories,
          making us the ultimate <span class="text-primary cursor-pointer">kitchen boutique</span> for home chefs and decor enthusiasts alike.`,
        ],
      },
      {
        title: "Your One-Stop Kitchen Supply Shop",
        items: [
          `Our kitchen supply shop caters to all culinary needs, featuring a vast selection of <span class="text-primary cursor-pointer">kitchenware</span> from top brands. 
          Whether you're renovating your kitchen or simply looking to update your cooking tools,
          Mega Boutique offers quality and variety in one convenient location. Our online kitchen outlet store
          allows you to shop for kitchenware, accessories, and decor from the comfort of your home,
          with a collection that's continuously updated to reflect the latest trends and innovations.`,
        ],
      },
      {
        title: "Elevate Your Cooking Experience with Home Kitchen Accessories",
        items: [
          `At Mega Boutique, we understand that the right kitchen accessories can transform cooking from a 
          daily chore into a delightful experience. From innovative gadgets to <span class="text-primary cursor-pointer">stylish utensils</span>,
          our range of home kitchen accessories is designed to enhance your culinary skills and kitchen aesthetics.`,
          `Shop the Latest Kitchen Collection Online`,
          `Our kitchen collection shop online features an array of products carefully selected 
          for their quality and performance. With everything from cookware to kitchen decor
          stores included in our catalogue, you'll find the perfect items to complement your kitchen's
          theme and functionality.`,
          `Why Choose Mega Boutique for Your Kitchen Needs?`,
          `Choosing Mega Boutique means opting for a retailer that values quality, variety, 
          and customer satisfaction. Our kitchen boutique is dedicated to offering the best in
          kitchenware and <span class="text-primary cursor-pointer">home accessories</span>, ensuring you have access to the
          <span class="text-primary cursor-pointer">tools and decor</span> that align
          with your cooking and styling preferences.`,
          `Explore the world of kitchen and home essentials at Mega Boutique, where you'll discover a 
          curated selection of house kitchen ware that combines quality, functionality, and aesthetic appeal.
          Whether you're a culinary enthusiast or simply looking to enhance your home's charm,
          Mega Boutique is your premier destination for kitchen and housewares that inspire and delight.`,
        ],
      },
    ]);
  }, []);
  return (
    <div className="w-full flex flex-col gap-4 px-4 md:px-[7%]">
      {info.map((c, i) => {
        return (
          <div key={i} className="w-full flex flex-col gap-2">
            <div className="text-primary py-2 uppercase font-semibold">
              {c.title}
            </div>
            {c.items.map((item: String, x: any) => {
              return (
                <div
                  key={x}
                  className="font-light"
                  dangerouslySetInnerHTML={{ __html: item }}
                ></div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
};
export default ShortInfo;
