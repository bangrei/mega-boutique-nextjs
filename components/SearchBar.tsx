import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState } from "react";

const SearchBar = () => {
  const [focus, setFocus] = useState(false);
  return (
    <div
      className={`w-full flex items-center rounded-3xl overflow-hidden relative border py-2 px-6 transition-all duration-500 ${
        focus ? "border-blue-400 shadow-center" : "border-primary"
      }`}
    >
      <input
        type="text"
        placeholder="Search everything for home..."
        className="outline-none flex-1 bg-transparent"
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
      />
      <MagnifyingGlassIcon className="w-6 h-6 text-primary cursor-pointer" />
    </div>
  );
};
export default SearchBar;
