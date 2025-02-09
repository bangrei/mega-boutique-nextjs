import Burger from "./Burger";
import { useEffect, useRef, useState } from "react";
import CategoryModal from "./CategoryModal";

const SecondaryHeader = () => {
  const [showModal, setShowModal] = useState<Boolean>(false);
  const modalRef = useRef<HTMLDivElement | null>(null);
  const burgerRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const eventHandler = (event: MouseEvent) => {
      let ignore = false;
      if (modalRef.current && modalRef.current.contains(event.target as Node)) {
        ignore = true;
      }
      if (
        !ignore &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target as Node)
      ) {
        setShowModal(false);
      }
    };
    document.addEventListener("click", eventHandler);
    return () => document.removeEventListener("click", eventHandler);
  }, []);
  return (
    <div className="secondary-header-content">
      <div className="secondary-header-wrapper">
        <button
          ref={burgerRef}
          className="secondary-header-nav-item relative"
          onClick={() => setShowModal(!showModal)}
        >
          <Burger active={showModal} />
          <span
            className={`secondary-header-nav-item-label custom ${
              showModal ? "text-primary" : ""
            }`}
          >
            Shop By Category
          </span>
        </button>
        <div className="flex-1 w-full items-center justify-start gap-8 lg:gap-10 flex">
          <div className="secondary-header-nav-item">
            <span className="secondary-header-nav-item-label">
              Shop By Brand
            </span>
          </div>
          <div className="secondary-header-nav-item">
            <span className="secondary-header-nav-item-label">
              New Arrivals
            </span>
          </div>
          <div className="secondary-header-nav-item">
            <span className="secondary-header-nav-item-label">Sale</span>
          </div>
          <div className="secondary-header-nav-item">
            <span className="secondary-header-nav-item-label">Clearance</span>
          </div>
          <div className="secondary-header-nav-item">
            <span className="secondary-header-nav-item-label">Gift</span>
          </div>
          <div className="secondary-header-nav-item">
            <span className="secondary-header-nav-item-label">Blogs</span>
          </div>
        </div>
      </div>
      <div ref={modalRef}>
        <CategoryModal active={showModal} onClose={() => setShowModal(false)} />
      </div>
    </div>
  );
};
export default SecondaryHeader;
