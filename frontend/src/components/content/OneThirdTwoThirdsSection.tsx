import organicOats from "@/assets/organic-oats.jpg";
import oatGranola from "@/assets/oat-granola.jpg";
import { Link } from "react-router-dom";

const OneThirdTwoThirdsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1">
          <Link to="/category/organic" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden rounded-lg">
              <img 
                src={organicOats} 
                alt="Organic whole oats in glass jar" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Certified Organic
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              USDA certified organic oats grown without pesticides
            </p>
          </div>
        </div>

        <div className="lg:col-span-2">
          <Link to="/category/granola" className="block">
            <div className="w-full h-[500px] lg:h-[800px] mb-3 overflow-hidden rounded-lg">
              <img 
                src={oatGranola} 
                alt="Homemade oat granola with nuts and dried fruits" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Artisan Granola
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Small-batch granola made with our premium oats, local honey, and roasted nuts
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OneThirdTwoThirdsSection;