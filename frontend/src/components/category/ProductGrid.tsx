import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import rolledOats from "@/assets/rolled-oats.jpg";
import steelCutOats from "@/assets/steel-cut-oats.jpg";
import instantOats from "@/assets/instant-oats.jpg";
import oatFlour from "@/assets/oat-flour.jpg";
import oatGranola from "@/assets/oat-granola.jpg";
import organicOats from "@/assets/organic-oats.jpg";
import overnightOats from "@/assets/overnight-oats.jpg";
import oatFarm from "@/assets/oat-farm.jpg";
import oatsHero from "@/assets/oats-hero.jpg";

interface Product {
  id: number;
  name: string;
  price: string;
  weight: string;
  image: string;
  isNew?: boolean;
  nutrition: {
    protein: string;
    fiber: string;
    calories: string;
    servingSize: string;
  };
}

const products: Product[] = [
  {
    id: 1,
    name: "Classic Rolled Oats",
    price: "$8.99",
    weight: "2 lb bag",
    image: rolledOats,
    isNew: true,
    nutrition: { protein: "5g", fiber: "4g", calories: "150", servingSize: "40g" },
  },
  {
    id: 2,
    name: "Steel Cut Oats",
    price: "$9.99",
    weight: "1.5 lb bag",
    image: steelCutOats,
    nutrition: { protein: "7g", fiber: "5g", calories: "170", servingSize: "45g" },
  },
  {
    id: 3,
    name: "Quick Instant Oats",
    price: "$7.49",
    weight: "1.5 lb bag",
    image: instantOats,
    isNew: true,
    nutrition: { protein: "4g", fiber: "3g", calories: "130", servingSize: "35g" },
  },
  {
    id: 4,
    name: "Stone Ground Oat Flour",
    price: "$6.99",
    weight: "1 lb bag",
    image: oatFlour,
    nutrition: { protein: "4g", fiber: "2g", calories: "120", servingSize: "30g" },
  },
  {
    id: 5,
    name: "Honey Nut Granola",
    price: "$11.99",
    weight: "12 oz bag",
    image: oatGranola,
    nutrition: { protein: "6g", fiber: "4g", calories: "200", servingSize: "50g" },
  },
  {
    id: 6,
    name: "Organic Whole Oats",
    price: "$12.99",
    weight: "2 lb jar",
    image: organicOats,
    nutrition: { protein: "6g", fiber: "5g", calories: "160", servingSize: "40g" },
  },
  {
    id: 7,
    name: "Overnight Oats Mix",
    price: "$10.49",
    weight: "1.5 lb bag",
    image: overnightOats,
    isNew: true,
    nutrition: { protein: "5g", fiber: "4g", calories: "155", servingSize: "45g" },
  },
  {
    id: 8,
    name: "Premium Farm Oats",
    price: "$14.99",
    weight: "3 lb bag",
    image: oatFarm,
    nutrition: { protein: "6g", fiber: "5g", calories: "165", servingSize: "40g" },
  },
  {
    id: 9,
    name: "Golden Breakfast Oats",
    price: "$9.49",
    weight: "2 lb bag",
    image: oatsHero,
    nutrition: { protein: "5g", fiber: "4g", calories: "145", servingSize: "40g" },
  },
];

const ProductCard = ({ product }: { product: Product }) => {
  const [isFlipped, setIsFlipped] = useState(false);
  const { addToCart } = useCart();

  return (
    <div
      className="h-full flex flex-col"
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}
    >
      <div className="aspect-square mb-3 overflow-hidden bg-muted/20 relative rounded-lg perspective-1000">
        <div
          className={`relative w-full h-full transition-transform duration-500 transform-style-3d ${
            isFlipped ? "rotate-y-180" : ""
          }`}
        >
          {/* Front - Product Image */}
          <div className="absolute inset-0 backface-hidden">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
            />
            {product.isNew && (
              <div className="absolute top-2 left-2 px-2 py-1 text-xs font-medium bg-primary text-primary-foreground rounded">
                NEW
              </div>
            )}
          </div>

          {/* Back - Nutrition Info */}
          <div className="absolute inset-0 backface-hidden rotate-y-180 bg-card border border-border rounded-lg p-4 flex flex-col justify-center">
            <h4 className="font-serif text-sm font-medium text-foreground mb-3 text-center">
              Nutrition Facts
            </h4>
            <div className="space-y-2">
              <div className="flex justify-between items-center py-1 border-b border-border">
                <span className="text-xs text-muted-foreground">Serving</span>
                <span className="text-xs font-medium text-foreground">{product.nutrition.servingSize}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-border">
                <span className="text-xs text-muted-foreground">Calories</span>
                <span className="text-xs font-medium text-foreground">{product.nutrition.calories}</span>
              </div>
              <div className="flex justify-between items-center py-1 border-b border-border">
                <span className="text-xs text-muted-foreground">Protein</span>
                <span className="text-xs font-medium text-primary">{product.nutrition.protein}</span>
              </div>
              <div className="flex justify-between items-center py-1">
                <span className="text-xs text-muted-foreground">Fiber</span>
                <span className="text-xs font-medium text-foreground">{product.nutrition.fiber}</span>
              </div>
            </div>
            <p className="text-xs text-muted-foreground mt-3 text-center">{product.weight}</p>
          </div>
        </div>
      </div>
      <div className="space-y-2 flex-1 flex flex-col">
        <h3 className="text-sm font-medium text-foreground">{product.name}</h3>
        <p className="text-sm font-semibold text-primary">{product.price}</p>
        <div className="mt-auto pt-2">
          <Button
            className="w-full bg-primary hover:bg-primary-hover text-primary-foreground"
            size="sm"
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              addToCart({
                id: product.id,
                name: product.name,
                price: product.price,
                image: product.image,
                category: "Oats"
              });
            }}
          >
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

interface ProductGridProps {
  sortBy?: string;
}

const ProductGrid = ({ sortBy = "featured" }: ProductGridProps) => {
  const sortedProducts = [...products].sort((a, b) => {
    switch (sortBy) {
      case "featured":
        // Featured products are those marked as new
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return 0;
      case "price-low":
        const priceA = parseFloat(a.price.replace("$", ""));
        const priceB = parseFloat(b.price.replace("$", ""));
        return priceA - priceB;
      case "price-high":
        const priceAHigh = parseFloat(a.price.replace("$", ""));
        const priceBHigh = parseFloat(b.price.replace("$", ""));
        return priceBHigh - priceAHigh;
      case "newest":
        // Newest products first (those with isNew flag)
        if (a.isNew && !b.isNew) return -1;
        if (!a.isNew && b.isNew) return 1;
        return b.id - a.id;
      case "name":
        return a.name.localeCompare(b.name);
      default:
        return 0;
    }
  });

  return (
    <section className="w-full px-6 mb-16">
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-6">
        {sortedProducts.map((product) => (
          <Link key={product.id} to={`/product/${product.id}`}>
            <ProductCard product={product} />
          </Link>
        ))}
      </div>
    </section>
  );
};

export default ProductGrid;
