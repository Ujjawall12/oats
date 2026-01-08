import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import oatsHero from "@/assets/oats-hero.jpg";
import rolledOats from "@/assets/rolled-oats.jpg";
import oatFarm from "@/assets/oat-farm.jpg";
import organicOats from "@/assets/organic-oats.jpg";

const heroSlides = [
  {
    image: oatsHero,
    title: "Wholesome Oats,\nFarm Fresh Daily",
    subtitle: "From our Minnesota family farm to your breakfast table. Premium oats grown with care, delivered with love.",
  },
  {
    image: rolledOats,
    title: "Start Your Day\nThe Healthy Way",
    subtitle: "Packed with fiber, protein, and essential nutrients. Our oats fuel your morning right.",
  },
  {
    image: oatFarm,
    title: "Sustainably Grown,\nNaturally Delicious",
    subtitle: "Three generations of farming expertise in every bag. Taste the difference of family tradition.",
  },
  {
    image: organicOats,
    title: "100% Organic,\n100% Pure",
    subtitle: "Certified organic oats with no additives or preservatives. Just pure, wholesome goodness.",
  },
];

const HeroCarousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
        setIsAnimating(false);
      }, 500);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const currentHero = heroSlides[currentSlide];

  return (
    <section className="relative w-full h-[70vh] min-h-[500px] mb-16 overflow-hidden">
      {/* Background images with slide animation */}
      {heroSlides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-700 ease-in-out ${
            index === currentSlide
              ? "translate-x-0 opacity-100"
              : index < currentSlide || (currentSlide === 0 && index === heroSlides.length - 1 && index !== 0)
              ? "-translate-x-full opacity-0"
              : "translate-x-full opacity-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 to-transparent z-10" />

      {/* Content */}
      <div className="absolute inset-0 flex items-center z-20">
        <div className="px-6 md:px-12 max-w-2xl">
          <h1
            className={`font-serif text-4xl md:text-5xl lg:text-6xl font-normal text-foreground mb-4 leading-tight whitespace-pre-line transition-all duration-500 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {currentHero.title}
          </h1>
          <p
            className={`text-lg text-muted-foreground mb-8 max-w-md transition-all duration-500 delay-100 ${
              isAnimating ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
            }`}
          >
            {currentHero.subtitle}
          </p>
          <Link
            to="/category/products"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
          >
            Shop Now
            <ArrowRight size={18} />
          </Link>
        </div>
      </div>

      {/* Slide indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-20">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => {
              setIsAnimating(true);
              setTimeout(() => {
                setCurrentSlide(index);
                setIsAnimating(false);
              }, 300);
            }}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === currentSlide
                ? "bg-primary w-6"
                : "bg-foreground/30 hover:bg-foreground/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default HeroCarousel;
