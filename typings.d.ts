interface Category {
  name: String;
  subs: SubCategory[] | [];
  brands: Brand[] | [];
}

interface Brand {
  name: String;
}

interface SubCategory {
  name: String;
  items: CategoryItem[];
}

interface CategoryItem {
  name: String;
}
