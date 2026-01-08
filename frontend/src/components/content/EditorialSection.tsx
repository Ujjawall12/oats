import farmFounders from "@/assets/farm-founders.jpg";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const EditorialSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        <div className="space-y-4 max-w-[630px]">
          <h2 className="text-2xl font-serif font-normal text-foreground leading-tight md:text-xl">
            Three Generations of Growing Excellence
          </h2>
          <p className="text-sm font-light text-muted-foreground leading-relaxed">
            Golden Oats began in 1952 when our grandparents first planted oats on this Minnesota land. 
            Today, we continue their legacy of sustainable farming, bringing you the same wholesome 
            quality that has nourished families for over 70 years. Every bag of oats carries the care 
            and dedication of our family farm.
          </p>
          <Link 
            to="/about/our-story" 
            className="inline-flex items-center gap-1 text-sm font-normal text-primary hover:text-primary-hover transition-colors duration-200"
          >
            <span>Read our story</span>
            <ArrowRight size={14} />
          </Link>
        </div>
        
        <div className="order-first md:order-last">
          <div className="w-full aspect-square overflow-hidden rounded-lg">
            <img 
              src={farmFounders} 
              alt="Farm founders in golden oat field at sunset" 
              className="w-full h-full object-cover" 
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditorialSection;