import FootLinks from "@/components/FootLinks";
import Header from "@/components/Header";
import HelpButton from "@/components/HelpButton";
import NewsLetter from "@/components/NewsLetter";
import PaymentsSection from "@/components/PaymentsSection";
import { ReactElement } from "react";

interface Props {
  children: ReactElement | undefined;
}

export default function PageLayout(props: Props) {
  return (
    <div className="page-layout">
      <Header />
      <main className="w-full min-w-full relative flex flex-col gap-8 row-start-2">
        {props.children}
        <div></div>
        <HelpButton />
      </main>
      <footer className="w-full row-start-3">
        <NewsLetter />
        <PaymentsSection />
        <FootLinks />
        <div className="w-full p-4 pb-12 md:px-[7%] flex flex-col items-center lg:flex-row lg:items-end justify-between gap-4 bg-slate-600 text-white">
          <div className="flex-1 flex flex-col items-center lg:items-start">
            <span className="text-center lg:text-left">
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
          <div className="flex-1 text-center md:text-end">
            All transactions are secured with SSL encryption (HTTPS).
          </div>
        </div>
      </footer>
    </div>
  );
}
