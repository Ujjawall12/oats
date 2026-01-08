import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { 
  Breadcrumb, 
  BreadcrumbItem, 
  BreadcrumbLink, 
  BreadcrumbList, 
  BreadcrumbPage, 
  BreadcrumbSeparator 
} from "@/components/ui/breadcrumb";
import { Minus, Plus } from "lucide-react";
import { useCart } from "@/contexts/CartContext";
import rolledOats from "@/assets/rolled-oats.jpg";

const ProductInfo = () => {
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useCart();

  const incrementQuantity = () => setQuantity(prev => prev + 1);
  const decrementQuantity = () => setQuantity(prev => Math.max(1, prev - 1));

  return (
    <div className="space-y-6">
      {/* Breadcrumb - Show only on desktop */}
      <div className="hidden lg:block">
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/">Home</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink asChild>
                <Link to="/category/products">Products</Link>
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbPage>Classic Rolled Oats</BreadcrumbPage>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>

      {/* Product title and price */}
      <div className="space-y-2">
        <div className="flex justify-between items-start">
          <div>
            <p className="text-sm font-light text-muted-foreground mb-1">Premium Oats</p>
            <h1 className="text-2xl md:text-3xl font-light text-foreground">Classic Rolled Oats</h1>
          </div>
          <div className="text-right">
            <p className="text-xl font-light text-foreground">$8.99</p>
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="space-y-4 py-4 border-b border-border">
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Weight</h3>
          <p className="text-sm font-light text-muted-foreground">2 lb bag</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Serving Size</h3>
          <p className="text-sm font-light text-muted-foreground">40g (about 1/2 cup dry)</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Nutrition per Serving</h3>
          <p className="text-sm font-light text-muted-foreground">150 calories, 5g protein, 4g fiber</p>
        </div>
        
        <div className="space-y-2">
          <h3 className="text-sm font-light text-foreground">Our Promise</h3>
          <p className="text-sm font-light text-muted-foreground italic">"Farm-fresh oats, stone-milled to perfection for the creamiest, most nutritious breakfast you'll ever enjoy."</p>
        </div>
      </div>

      {/* Quantity and Add to Cart */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-sm font-light text-foreground">Quantity</span>
          <div className="flex items-center border border-border">
            <Button
              variant="ghost"
              size="sm"
              onClick={decrementQuantity}
              className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none"
            >
              <Minus className="h-4 w-4" />
            </Button>
            <span className="h-10 flex items-center px-4 text-sm font-light min-w-12 justify-center border-l border-r border-border">
              {quantity}
            </span>
            <Button
              variant="ghost"
              size="sm"
              onClick={incrementQuantity}
              className="h-10 w-10 p-0 hover:bg-transparent hover:opacity-50 rounded-none border-none"
            >
              <Plus className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <Button 
          className="w-full h-12 bg-primary text-primary-foreground hover:bg-primary-hover font-light rounded-none"
          onClick={() => {
            for (let i = 0; i < quantity; i++) {
              addToCart({
                id: 1,
                name: "Classic Rolled Oats",
                price: "$8.99",
                image: rolledOats,
                category: "Premium Oats"
              });
            }
          }}
        >
          Add to Cart
        </Button>
      </div>
    </div>
  );
};

export default ProductInfo;
