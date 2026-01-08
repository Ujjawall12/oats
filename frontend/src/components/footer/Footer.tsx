import { Wheat } from "lucide-react";

const Footer = () => {
  return (
    <footer className="w-full bg-secondary text-secondary-foreground pt-12 pb-4 px-6 border-t border-border mt-24">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-8">
          {/* Brand - Left side */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Wheat className="h-6 w-6 text-primary" />
              <span className="font-serif text-xl font-normal text-foreground">Golden Oats</span>
            </div>
            <p className="text-sm font-light text-muted-foreground leading-relaxed max-w-md mb-6">
              Premium farm-fresh oats delivered straight from our family farm to your breakfast table.
            </p>
            
            {/* Contact Information */}
            <div className="space-y-2 text-sm font-light text-muted-foreground">
              <div>
                <p className="font-normal text-foreground mb-1">Our Farm</p>
                <p>1234 Harvest Lane</p>
                <p>Oatville, MN 55432</p>
              </div>
              <div>
                <p className="font-normal text-foreground mb-1 mt-3">Contact</p>
                <p>+1 (800) OATS-123</p>
                <p>hello@goldenoats.com</p>
              </div>
            </div>
          </div>

          {/* Link lists - Right side */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Support */}
            <div>
              <h4 className="text-sm font-normal mb-4 text-foreground">Support</h4>
              <ul className="space-y-2">
                <li><a href="/about/recipes" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Recipes</a></li>
                <li><a href="/about/nutrition" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Nutrition Info</a></li>
                <li><a href="/about/customer-care" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Shipping</a></li>
                <li><a href="/about/customer-care" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Returns</a></li>
                <li><a href="/about/customer-care" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Contact</a></li>
              </ul>
            </div>

            {/* Connect */}
            <div>
              <h4 className="text-sm font-normal mb-4 text-foreground">Connect</h4>
              <ul className="space-y-2">
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Instagram</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Facebook</a></li>
                <li><a href="#" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">Newsletter</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom section */}
      <div className="border-t border-border -mx-6 px-6 pt-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-light text-muted-foreground mb-2 md:mb-0">
            © 2024 Golden Oats. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="/privacy-policy" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="/terms-of-service" className="text-sm font-light text-muted-foreground hover:text-primary transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;