import { useState } from "react";

const CategoryCardShimmer = () => {
  const [number, setNumber] = useState(8);
  return (
    <div className="categories-card">
      {[...Array(number)].map((_, index) => (
        <div key={index} className="flex gap-2 flex-col">
          <div className="category-card"></div>
          <div className="min-h-3 rounded-lg bg-slate-200 w-full"></div>
        </div>
      ))}
    </div>
  );
};
export default CategoryCardShimmer;
