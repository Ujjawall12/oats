import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import ingredientsImage from "@/assets/oats-bowl-ingredients.jpg";

const IngredientsSection = () => {
  const ingredients = [
    { name: "Whey Protein", position: "top-[20%] right-[5%]" },
    { name: "Instant Oats", position: "top-[35%] right-[3%]" },
    { name: "Organic Jaggery", position: "top-[50%] right-[2%]" },
    { name: "Date Powder", position: "top-[65%] right-[5%]" },
    { name: "Pink Salt", position: "top-[80%] right-[8%]" },
  ];

  return (
    <section className="w-full min-h-screen py-16 px-6 bg-background flex items-center">
      <div className="w-full max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <div className="space-y-6">
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-foreground">
              Only the good stuff
            </h2>
            <p className="text-muted-foreground leading-relaxed text-lg">
              Golden Oats takes only natural products of the highest quality for its 
              Protein Oats. Confused which flavour you want to order? 
              Indulge your taste-buds with our Assorted Protein box!
            </p>
            
            <div className="space-y-4">
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">What's in?</h3>
                <p className="text-muted-foreground">
                  Oats, Chia Seeds, Flax Seeds, Date Powder, Jaggery, Pure 
                  Whey Protein, Stevia, Himalayan Pink Salt, Cocoa, Coffee and 
                  Dried Fruit Powder
                </p>
              </div>
              
              <div>
                <h3 className="font-semibold text-foreground mb-2 text-lg">What's out?</h3>
                <p className="text-muted-foreground">Everything else!</p>
              </div>
            </div>

            <Link to="/category/products">
              <Button className="bg-primary hover:bg-primary-hover text-primary-foreground px-8 py-3 rounded-full mt-4">
                Shop all
              </Button>
            </Link>
          </div>

          {/* Right side - Image with ingredient callouts */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden bg-muted">
              {/* Header text overlay */}
              <div className="absolute top-4 left-0 right-0 text-center z-10">
                <h3 className="text-lg md:text-xl font-bold text-primary-foreground drop-shadow-lg uppercase tracking-wide">
                  Highest Grade
                </h3>
                <h4 className="text-xl md:text-2xl font-bold text-primary-foreground drop-shadow-lg uppercase tracking-wide">
                  Finest Ingredients
                </h4>
              </div>
              
              <img
                src={ingredientsImage}
                alt="Bowl of oats with finest ingredients"
                className="w-full h-auto object-cover"
              />
              
              {/* Ingredient callouts */}
              {ingredients.map((ingredient, index) => (
                <div
                  key={index}
                  className={`absolute ${ingredient.position} flex items-center gap-2`}
                >
                  <div className="w-2 h-2 bg-primary rounded-full" />
                  <div className="h-px w-8 bg-primary" />
                  <span className="text-xs md:text-sm font-medium text-foreground bg-background/90 px-2 py-1 rounded whitespace-nowrap">
                    {ingredient.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IngredientsSection;
