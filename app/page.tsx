"use client";

import Banner2x2 from "@/components/Banner2x2";
import BannerMore from "@/components/BannerMore";
import Carousel from "@/components/Carousel";
import CategorySection from "@/components/CategorySection";
import GroupCarousel from "@/components/GroupCarousel";
import PageLayout from "@/components/PageLayout";
import ShortInfo from "@/components/ShortInfo";
import PopupModal from "@/components/PopupModal";
import { useState } from "react";

export default function Home() {
  const [inited, setInited] = useState(false);
  return (
    <PageLayout>
      <div className="grid grid-cols-1 gap-8">
        <Carousel />
        <CategorySection />
        <BannerMore />
        <GroupCarousel />
        <Banner2x2 />
        <ShortInfo />
        {!inited && (
          <PopupModal title="Promotions" onClose={() => setInited(true)}>
            <Banner2x2 />
          </PopupModal>
        )}
      </div>
    </PageLayout>
  );
}
