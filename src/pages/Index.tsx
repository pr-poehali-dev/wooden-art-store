import Header from "@/components/Header";
import HeroSlider from "@/components/HeroSlider";
import ArtworkShowcase from "@/components/ArtworkShowcase";
import CategorySection from "@/components/CategorySection";
import FeaturedProducts from "@/components/FeaturedProducts";
import TestimonialsSection from "@/components/TestimonialsSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        <HeroSlider />
        <ArtworkShowcase />
        <CategorySection />
        <FeaturedProducts />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;