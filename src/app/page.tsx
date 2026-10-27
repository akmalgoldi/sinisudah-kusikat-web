import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { Ticker } from "@/components/Ticker";
import { Stats } from "@/components/Stats";
import { Services } from "@/components/Services";
import { Comparison } from "@/components/Comparison";
import { Gallery } from "@/components/Gallery";
import { Testimonials } from "@/components/Testimonials";
import { Pickup } from "@/components/Pickup";
import { Faq } from "@/components/Faq";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";
import { MotionObserver } from "@/components/MotionObserver";

export default function Home() {
  return (
    <div className="flex flex-col min-h-[100dvh] w-full">
      <MotionObserver />
      <Header />
      <main className="flex-1 w-full overflow-x-clip">
        <Hero />
        <Ticker />
        <Stats />
        <Services />
        <Comparison />
        <Gallery />
        <Testimonials />
        <Pickup />
        <Faq />
        <Location />
      </main>
      <Footer />
    </div>
  );
}
