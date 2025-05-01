import HeroSection from "@/components/pages/home/HeroSection";
import { OurImpacts } from "@/components/pages/home/OurImpacts";
import { OurScientificProcessSection } from "@/components/pages/home/OurScientificProcessSection";
import { OurTopProducts } from "@/components/pages/home/OurTopProducts";
// import { PressPublications } from "@/components/pages/home/PressPublications";
import { Testimonials } from "@/components/pages/home/Testimonials";
import { IntroSection } from "@/components/sharedUi/IntroSection";

export default function Home() {
  return (
    <div className="font-[Poppins, sans-serif]  bg-gray-50 min-h-screen">
      <main className="flex flex-col items-center ">
        {/* Hero Section */}
        <HeroSection />

        {/* Intro Section */}
        <IntroSection
          title={"Our mission"}
          content={
            "Our mission is to heal and empower individuals through the power of natural herbs while reducing reliance on chemical-based treatments. We are committed to providing scientifically backed herbal solutions that restore health and educate people on the profound benefits of nature’s remedies. Through rigorous research and innovation, we ensure that every product is safe, effective, and well-documented—giving both individuals and health professionals the confidence to embrace natural healing."
          }
        />

        {/* Scientific Process Section */}
        <OurScientificProcessSection />

        {/* Our Impact Section */}
        <OurImpacts />

        {/* Top Products Section */}
        <OurTopProducts sheetName={"product"} title={"Our Top Products"} />
        {/* Top Products Section */}
        <OurTopProducts
          sheetName={"fumzyLagos"}
          title={"Our Top Cosmetic Products"}
        />

        {/* Testimonials Section */}
        <Testimonials />

        {/* Press Publications Section */}
        {/* <PressPublications /> */}
      </main>
    </div>
  );
}
