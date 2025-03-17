import HeroSection from "@/components/pages/home/HeroSection";
import { OurImpacts } from "@/components/pages/home/OurImpacts";
import { OurScientificProcessSection } from "@/components/pages/home/OurScientificProcessSection";
import { OurTopProducts } from "@/components/pages/home/OurTopProducts";
import { PressPublications } from "@/components/pages/home/PressPublications";
import { Testimonials } from "@/components/pages/home/Testimonials";
import { IntroSection } from "@/components/sharedUi/IntroSection";


export default function Home() {
  return (
    <div className=" items-center min-h-screen  gap-16 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col row-start-2 sm:items-start">
        <HeroSection/>
        <IntroSection title={"Our mission"} content={"is to heal and empower individuals through the power of natural herbs while reducing reliance on chemical-based treatments. We are committed to providing scientifically backed herbal solutions that not only restore health but also educate people on the profound benefits of nature’s remedies. Through rigorous research and innovation, we ensure that every product is safe, effective, and well-documented—giving both individuals and health professionals the confidence to embrace natural healing."}/>
        <OurScientificProcessSection/>
        <OurImpacts/>
        <OurTopProducts/>
        <Testimonials/>
        <PressPublications/>
      </main>
    </div>
  );
}
