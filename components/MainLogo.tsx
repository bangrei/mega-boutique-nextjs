"use client";

import { useRouter } from "next/navigation";
import Image from "next/image";
const MainLogo = () => {
  const router = useRouter();
  return (
    <div
      onClick={() => router.push("/")}
      className="flex items-center gap-4 cursor-pointer"
    >
      <Image
        className="object-contain lg:min-h-16"
        src="/assets/mega-logo.png"
        alt="Mega Boutique"
        width={0}
        height={0}
        sizes="100vw"
        style={{
          width: "auto",
          height: "auto",
          minHeight: "4rem",
          minWidth: "7rem",
        }}
        priority
      />
    </div>
  );
};
export default MainLogo;
