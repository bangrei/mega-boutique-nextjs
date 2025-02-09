import { useEffect, useRef, useState } from "react";
import {
  XMarkIcon,
  ChevronDownIcon,
  ChevronUpIcon,
  ChevronRightIcon,
} from "@heroicons/react/24/outline";

interface Props {
  onClose: Function;
  active: Boolean;
}

const CategoryModal = (props: Props) => {
  const [categories, setCategories] = useState<Category[] | []>([]);
  const [brands, setBrands] = useState<String[] | []>([]);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const [parentIndex, setParentIndex] = useState<Number | null>(null);

  const _setParentIndex = (index: Number) => {
    if (parentIndex == index) setParentIndex(null);
    else setParentIndex(index);
  };

  const _close = () => {
    props.onClose();
  };

  useEffect(() => {
    setBrands([
      "Alessi",
      "Anolon Cookware",
      "Ashdene",
      "Avanti",
      "Bakemaster",
      "Baker's Secret",
      "Ballarini",
      "BergHOFF",
      "Blacklock By Lodge",
      "Chasseur",
      "Circulon Cookware",
      "Eco Ladelle",
      "Emile Henry",
      "Essteele Cookware",
      "EuroScrubby",
      "More Brands",
    ]);
    let items: any[] = [
      {
        name: "Cookware",
        subs: [
          {
            name: "Cookware Set",
            items: [],
          },
          {
            name: "Pans",
            items: [
              "Fryingpans & Skillsets",
              "Griddles & Grill Pans",
              "Roasting Pans",
              "Saute & Chef Pans",
              "Woks",
            ],
          },
          {
            name: "Pots",
            items: [
              "Casserol Dishes",
              "Dutch & French Oven",
              "Pressure Cookers",
              "Saucepans",
              "Stockpots",
            ],
          },
          {
            name: "Special Cookware",
            items: ["Fondue Sets", "Steamer"],
          },
          {
            name: "Cookware Accessories",
            items: [
              "Aprons",
              "Cookware Cleaner",
              "Glove & Mitt",
              "Lids",
              "Pan Protector",
              "Splatter Screens",
            ],
          },
          {
            name: "Appliances",
            items: [
              "Blender Accessories",
              "Blenders",
              "Ice Cream Makers",
              "Toasters",
            ],
          },
        ],
      },
      {
        name: "Kitchenware",
        subs: [
          {
            name: "Bakeware",
            items: [
              "Accessories",
              "Baking Dishes",
              "Baking Tray",
              "Cake Pans",
              "Cooling Tray",
              "Cupcake & Muffin",
              "Pie & Quiche Pans",
              "Proving Baskets",
              "Ramekins",
            ],
          },
          {
            name: "Cleaning",
            items: [
              "Cleaning Tools",
              "Compost Bins",
              "Dish Racks",
              "Tea Towels",
            ],
          },
          {
            name: "Cutting Boards",
            items: ["Bamboo", "Plastic", "Wood"],
          },
          {
            name: "Grind & Spices",
            items: [
              "Mortar & Pestle",
              "Salt & Pepper Mills",
              "Spice Racks & Storage",
            ],
          },
        ],
      },
      {
        name: "Knives",
        subs: [
          {
            name: "Loose Kitchen Knives",
            items: [
              "Asian Knives",
              "Boning Knives",
              "Bread Knives",
              "Butcher Knives",
              "Chefs Knives",
              "Cleavers",
              "Paring Knives",
              "Santoku Knives",
              "Slicing & Carving Knives",
              "Utility Knives",
              "Vegetable Knives",
            ],
          },
          {
            name: "Knife Blocks & Sets",
            items: ["Knife Block Sets", "Knife Sets", "Knife Blocks"],
          },
          {
            name: "Knife Sharpeners",
            items: [
              "Electric Sharpeners",
              "Pull Thru Sharpeners",
              "Sharpening Steel",
              "Sharpening Stone",
            ],
          },
          {
            name: "Accesssories",
            items: [
              "Blade Guard",
              "Cut Resitant Cloves",
              "Hooks",
              "Knife Bags & Cases",
              "Knife Sheath",
              "Wall Magnetic Holder",
            ],
          },
        ],
      },
      {
        name: "Tableware",
        subs: [
          {
            name: "Cutleries",
            items: [
              "Butter Knives",
              "Carving Sets",
              "Chopsticks",
              "Complete Cutlery Sets",
              "Forks",
              "Spoons",
              "Steak Knives",
            ],
          },
          {
            name: "Dinnerware",
            items: ["Bowls", "Dinner Sets", "Plates"],
          },
          {
            name: "Serveware",
            items: [
              "Butter Dishes",
              "Cake Stand",
              "Chafing Set",
              "Egg Cups",
              "Gravy Boats",
              "Salad Servers",
              "Serving Boards",
              "Serving Bowls",
              "Serving Platters",
              "Others",
            ],
          },
          {
            name: "Tea & Coffee",
            items: [
              "Coffee Accessories",
              "Coffee Plunger & Marker",
              "Tea Accessories",
              "Teapots",
              "Teapot Sets",
              "Sugar & Creamer Set",
              "Tea Caddles",
              "Mugs, Cups & Saucers",
            ],
          },
          {
            name: "Surface Protectors",
            items: ["Coasters", "Placemats"],
          },
          {
            name: "Drinkware",
            items: [
              "Beer Glasses",
              "Champagne Glasses",
              "Cocktail Glasses",
              "Jugs Pitchers",
              "Shot Glasses",
              "Water & Juice Glasses",
              "Whiskey Decanter Set",
              "Whiskey Decanters",
              "Whiskey Glasses",
              "Wine Decanters",
              "Wine Glasses",
            ],
          },
          {
            name: "Barware",
            items: [
              "Aerators",
              "Barware Gift Sets",
              "Bottle Openers",
              "Bottle Stoppers",
              "Cocktail Shakers",
              "Glass Markers",
              "Ice Trays",
              "Jiggers",
              "Pourers",
              "Whiskey Stones",
              "Others",
            ],
          },
          {
            name: "Cheese Tools",
            items: [],
          },
          {
            name: "Children",
            items: [],
          },
        ],
      },
      {
        name: "Home Decor",
        subs: [
          {
            name: "Artificial Plants & Flowers",
            items: [
              "Floral Arrangements",
              "Floral Bouquets",
              "Floral Stems",
              "Green Stems",
              "Planter Pots",
              "Potted Tree",
            ],
          },
          {
            name: "Decorations",
            items: [
              "Candlestands",
              "Decorative Bowls",
              "Decorative Cushions",
              "Decorative Vases",
              "Money Boxes",
              "Photo Frames",
              "Trinket Boxes",
              "Other Decorations",
            ],
          },
          {
            name: "Home Fragrances",
            items: [
              "Car Fragrances",
              "Fragrances Diffusers",
              "Scented Candles",
            ],
          },
          {
            name: "Lighting",
            items: ["Table Lamps"],
          },
        ],
      },
      {
        name: "Home Living",
        subs: [
          {
            name: "Bedrooms",
            items: [
              "Blankets & Throws",
              "Coverlets",
              "Electric Blankets",
              "Fitted Sheets",
              "Flat Sheets",
              "Mattress Protectors",
              "Pillowcases",
              "Pillows",
              "Quilt Covers",
              "Quilts",
              "Sheet Sets",
            ],
          },
          {
            name: "Bathrooms",
            items: [
              "Bath Robes",
              "Bath Sheets",
              "Bath Towels",
              "Bathroom Accessories",
              "Bathroom Scales",
              "Toilet Brushes & Holders",
            ],
          },
          {
            name: "Cleaning",
            items: [],
          },
          {
            name: "Laundry",
            items: [
              "Drying Racks & Hangers",
              "Ironing Boards",
              "Laundry Baskets",
            ],
          },
          {
            name: "Waste Bins & Bags",
            items: ["Bin Liners & Garbage Bags", "Waste Bins"],
          },
          {
            name: "Personal Cares",
            items: ["Soap Bar"],
          },
        ],
      },
      {
        name: "Travel & Outdoor",
        subs: [
          {
            name: "Drink Bottles",
            items: [
              "Kids Water Bottle",
              "Travel Mug",
              "Vaccum Flask",
              "Water Bottle",
            ],
          },
          {
            name: "Food Container",
            items: ["Food Warmers", "Lunch Box", "Vaccum Food Jar"],
          },
          {
            name: "Hip Flasks",
            items: [],
          },
          {
            name: "Lighting",
            items: [
              "Torchlight",
              "Lighter",
              "Lighter Fluid",
              "Lighter Pouches",
            ],
          },
          {
            name: "Luggage & Bags",
            items: ["Lunch Bag"],
          },
          {
            name: "Outdoor Cookware",
            items: [],
          },
          {
            name: "Picnic",
            items: ["Beach Towels", "Beverage Traveler Set", "Picnic Baskets"],
          },
          {
            name: "Tools",
            items: ["Multi-Tools", "Pocket Knives", "Carry Pouches"],
          },
        ],
      },
      {
        name: "Hampers & Gifts",
        subs: [
          {
            name: "Christmas Gift Ideas For Her",
            items: [],
          },
          { name: "Christmas Ideas For Him", items: [] },
          { name: "Wedding Gifts Home Decor", items: [] },
          { name: "Gifts For Her", items: [] },
          { name: "Gifts For Him", items: [] },
          { name: "Gifts For Kids", items: [] },
          { name: "Gift Ideas For Dad", items: [] },
          { name: "Wedding Gifts Ideas", items: [] },
          { name: "Christening Gifts", items: [] },
          { name: "Christmas Gift Ideas", items: [] },
          { name: "Valentine Day For Her", items: [] },
        ],
      },
    ];
    setCategories(
      items.map((it) => {
        return it as Category;
      })
    );
  }, []);
  return (
    <div
      ref={modalRef}
      className={`category-modal ${props.active ? "opened" : ""}`}
    >
      <div className="w-full h-full flex">
        <div className="category-container flex-1">
          <div className="category-head">
            <span>Shop By Category</span>
            <XMarkIcon
              className="w-8 h-8 text-secondary-super-light cursor-pointer"
              onClick={() => _close()}
            />
          </div>
          <div className="category-wrapper">
            {categories.map((c, i) => {
              return (
                <div className="category-item group" key={i}>
                  <div
                    className="category-item-nav"
                    onClick={() => _setParentIndex(i)}
                  >
                    <div>{c.name}</div>
                    <div className="flex lg:hidden">
                      {parentIndex != i && (
                        <ChevronDownIcon className="w-4 h-4" />
                      )}
                      {parentIndex == i && (
                        <ChevronUpIcon className="w-4 h-4" />
                      )}
                    </div>
                  </div>
                  <div className="category-content">
                    <div className="category-main">
                      <div className="flex w-full flex-col lg:flex-row lg:flex-[5]">
                        <div className="category-subs">
                          {c.subs
                            .filter((_, ix) => ix % 2 === 0)
                            .map((sub, s) => {
                              return (
                                <div
                                  className="category-sub-item group/child"
                                  key={s}
                                >
                                  <div className="category-sub-item-toggle peer">
                                    <span>{sub.name}</span>
                                    {sub.items.length > 0 && (
                                      <ChevronDownIcon className="w-4 h-4 lg:hidden" />
                                    )}
                                  </div>
                                  <div className="category-sub-item-content">
                                    {sub.items.map((subitem: any, si) => {
                                      return (
                                        <div
                                          className="category-sub-item-content-label"
                                          key={si}
                                        >
                                          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                                          <span>{subitem}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                        <div className="category-subs">
                          {c.subs
                            .filter((_, ix) => ix % 2 !== 0)
                            .map((sub, s) => {
                              return (
                                <div
                                  className="category-sub-item group/child"
                                  key={s}
                                >
                                  <div className="category-sub-item-toggle peer">
                                    <span>{sub.name}</span>
                                    {sub.items.length > 0 && (
                                      <ChevronDownIcon className="w-4 h-4 lg:hidden" />
                                    )}
                                  </div>
                                  <div className="category-sub-item-content">
                                    {sub.items.map((subitem: any, si) => {
                                      return (
                                        <div
                                          className="category-sub-item-content-label"
                                          key={si}
                                        >
                                          <div className="w-1 h-1 bg-slate-600 rounded-full"></div>
                                          <span>{subitem}</span>
                                        </div>
                                      );
                                    })}
                                  </div>
                                </div>
                              );
                            })}
                        </div>
                      </div>
                      <div className="lg:flex-[3] flex-col gap-2 w-full h-full lg:overflow-hidden lg:overflow-y-auto whitespace-nowrap border-l border-l-slate-300/50 pl-4 hidden lg:flex">
                        <div className="font-bold">Brands</div>
                        <div className="flex flex-col gap-2">
                          {brands.map((brand, i) => {
                            return (
                              <div
                                className="cursor-pointer hover:text-primary"
                                key={i}
                              >
                                {brand}
                              </div>
                            );
                          })}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="w-full flex flex-col gap-4 mt-auto px-8 pt-4 pb-8 lg:hidden bg-secondary-light text-white">
            <div className="w-full flex items-center justify-between">
              <span>Shop By Brand</span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
            <div className="w-full flex items-center justify-between">
              <span>New Arrivals</span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Sale</span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Clearance</span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Gifts</span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
            <div className="w-full flex items-center justify-between">
              <span>Blogs</span>
              <ChevronRightIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
        <div
          onClick={() => _close()}
          className="md:flex-1 h-full bg-black bg-opacity-20 lg:hidden"
        ></div>
      </div>
    </div>
  );
};
export default CategoryModal;
