import rolledOats from "@/assets/rolled-oats.jpg";
import overnightOats from "@/assets/overnight-oats.jpg";
import { Link } from "react-router-dom";

const FiftyFiftySection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <Link to="/category/rolled-oats" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden rounded-lg">
              <img 
                src={rolledOats} 
                alt="Premium rolled oats in burlap bag" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Classic Rolled Oats
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Our signature whole grain oats, perfect for traditional oatmeal
            </p>
          </div>
        </div>

        <div>
          <Link to="/category/overnight" className="block">
            <div className="w-full aspect-square mb-3 overflow-hidden rounded-lg">
              <img 
                src={overnightOats} 
                alt="Overnight oats with fresh berries" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
              />
            </div>
          </Link>
          <div className="">
            <h3 className="text-sm font-normal text-foreground mb-1">
              Overnight Oats Kit
            </h3>
            <p className="text-sm font-light text-muted-foreground">
              Everything you need for easy, delicious overnight oats
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FiftyFiftySection;