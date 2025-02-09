import Banner2x2 from "@/components/Banner2x2";
import BannerMore from "@/components/BannerMore";
import Carousel from "@/components/Carousel";
import CategorySection from "@/components/CategorySection";
import FootLinks from "@/components/FootLinks";
import GroupCarousel from "@/components/GroupCarousel";
import Header from "@/components/Header";
import HelpButton from "@/components/HelpButton";
import NewsLetter from "@/components/NewsLetter";
import PaymentsSection from "@/components/PaymentsSection";
import ShortInfo from "@/components/ShortInfo";

export default function Home() {
  return (
    <div className="page-layout">
      <Header />
      <main className="w-full min-w-full relative flex flex-col gap-8 row-start-2">
        <Carousel />
        <CategorySection />
        <BannerMore />
        <GroupCarousel />
        <Banner2x2 />
        <ShortInfo />
        <div></div>
        <HelpButton />
      </main>
      <footer className="w-full row-start-3">
        <NewsLetter />
        <PaymentsSection />
        <FootLinks />
        <div className="w-full p-4 md:px-[7%] flex flex-col items-center lg:flex-row lg:items-end justify-between gap-4 bg-slate-600 text-white">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <span>
              Unit 4/450 Princes Hwy, Noble Park VIC 3174 Australia | 03 8524
              7870
            </span>
            <div className="flex items-center gap-1">
              <span>Mega Boutique © 2016 - 2025</span>
              <span>|</span>
              <span className="hover:text-primary cursor-pointer">Sitemap</span>
              <span>|</span>
              <span className="hover:text-primary cursor-pointer">Contact</span>
            </div>
          </div>
          <div className="flex-1 text-end">
            All transactions are secured with SSL encryption (HTTPS).
          </div>
        </div>
      </footer>
    </div>
  );
}
