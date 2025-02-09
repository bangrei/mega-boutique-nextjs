"use client";

import { useEffect, useState } from "react";
import ExtraHeader from "./ExtraHeader";
import PrimaryHeader from "./PrimaryHeader";
import SearchBar from "./SearchBar";
import SecondaryHeader from "./SecondaryHeader";
import CategoryModal from "./CategoryModal";

const Header = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);

  return (
    <header className="w-full flex flex-col row-start-1">
      <div className="w-full bg-primary px-4 py-2 flex items-center justify-center">
        <span className="text-white uppercase cursor-pointer text-sm">
          Warehouse Sale up to 65%
        </span>
      </div>
      <PrimaryHeader />
      <SecondaryHeader />
      <div className="w-full flex lg:hidden pb-4 px-4 md:px-[7%]">
        <SearchBar />
      </div>
      <ExtraHeader />
    </header>
  );
};
export default Header;
