import AboutSummary from "@/components/home/AboutSummary";
import HeroSection from "@/components/home/HeroSection";
import Stats from "@/components/home/Stats";
import Services from "@/components/home/Services";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import CTASection from "@/components/home/CTASection";
import HomePartners from "@/components/home/HomePartners";
export default function Home() {
  
  return (
    <main className="flex flex-col min-h-screen">
      <HeroSection/>
      <Stats/>
      <AboutSummary/>
      <Services/>
      <HomePartners />
      <FeaturedProducts/>
      <WhyChooseUs/>
      <CTASection/>
    </main>
  );
}
