import {
  EnvelopeIcon,
  UserCircleIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/outline";
import { useState } from "react";

const PrimaryNav = () => {
  const [itemsCount, setItemsCount] = useState(0);
  return (
    <div className="primary-nav-content">
      <div className="primary-nav-item group">
        <div className="primary-nav-icon-wrapper peer">
          <EnvelopeIcon className="primary-nav-icon" />
          <EnvelopeIcon className="primary-nav-icon-overlay" />
        </div>
        <span className="primary-nav-label">Contact</span>
      </div>
      <div className="primary-nav-item group">
        <div className="primary-nav-icon-wrapper peer">
          <UserCircleIcon className="primary-nav-icon" />
          <UserCircleIcon className="primary-nav-icon-overlay" />
        </div>
        <span className="primary-nav-label">Account</span>
      </div>
      <div className="primary-nav-item group relative">
        <span className="primary-nav-shopping-badge">{itemsCount}</span>
        <div className="primary-nav-icon-wrapper peer">
          <ShoppingBagIcon className="primary-nav-icon" />
          <ShoppingBagIcon className="primary-nav-icon-overlay" />
        </div>
        <span className="primary-nav-label">Cart</span>
      </div>
    </div>
  );
};
export default PrimaryNav;
