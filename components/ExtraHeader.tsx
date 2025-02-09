// import { TruckIcon } from "@heroicons/react/24/outline";
import Image from "next/image";

const ExtraHeader = () => {
  return (
    <div className="extra-header">
      <div className="extra-header-item">
        <Image
          className="object-contain max-h-[24px]"
          src="/assets/truck.svg"
          alt="Delivery"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <span className="text-white text-sm whitespace-nowrap">
          Free Shipping over $99
        </span>
      </div>
      <div className="extra-header-item">
        <Image
          className="object-contain max-h-[24px]"
          src="/assets/return.svg"
          alt="Delivery"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <span className="text-white text-sm whitespace-nowrap">
          10-Day Returns
        </span>
      </div>
      <div className="extra-header-item">
        <Image
          className="object-contain max-h-[24px]"
          src="/assets/map.svg"
          alt="Delivery"
          width={0}
          height={0}
          sizes="100vw"
          style={{ width: "auto", height: "auto" }}
          priority
        />
        <span className="text-white text-sm whitespace-nowrap">
          Australian Family Business
        </span>
      </div>
    </div>
  );
};

export default ExtraHeader;
