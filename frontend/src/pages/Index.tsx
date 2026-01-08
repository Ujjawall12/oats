import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import ProductCarousel from "../components/content/ProductCarousel";
import EditorialSection from "../components/content/EditorialSection";
import TestimonialsSection from "../components/content/TestimonialsSection";
import HeroCarousel from "../components/content/HeroCarousel";
import IngredientsSection from "../components/content/IngredientsSection";
import ProcessCarousel from "../components/content/ProcessCarousel";
import OatsPacketSection from "../components/content/OatsPacketSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <main>
        <HeroCarousel />
        <ProductCarousel />
        <IngredientsSection />
        <ProcessCarousel />
        <TestimonialsSection />
        <OatsPacketSection />
        <EditorialSection />
      </main>
      
      <Footer />
    </div>
  );
};

export default Index;
