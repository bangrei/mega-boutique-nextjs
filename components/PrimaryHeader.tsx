"use client";

import MainLogo from "./MainLogo";
import SearchBar from "./SearchBar";
import PrimaryNav from "./PrimaryNav";
import Burger from "./Burger";
import { useEffect, useState } from "react";
import CategoryModal from "./CategoryModal";

const PrimaryHeader = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);

  useEffect(() => {
    const handleResize = () => {
      setShowModal(false);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="primary-header">
      <div className="flex gap-4 md:gap-8 items-center">
        <div
          className="block lg:hidden"
          onClick={() => setShowModal(!showModal)}
        >
          <Burger active={showModal} />
        </div>
        <MainLogo />
      </div>
      <div className="flex-1 hidden lg:flex">
        <SearchBar />
      </div>
      <PrimaryNav />
      <CategoryModal active={showModal} onClose={() => setShowModal(false)} />
    </div>
  );
};
export default PrimaryHeader;
