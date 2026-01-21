import { ArrowRight, X, Wheat, Sun, Moon } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import ShoppingBag from "./ShoppingBag";
import { useTheme } from "@/hooks/use-theme";
import { useCart } from "@/contexts/CartContext";
import steelCutOats from "@/assets/steel-cut-oats.jpg";
import oatGranola from "@/assets/oat-granola.jpg";
import farmFounders from "@/assets/farm-founders.jpg";

const Navigation = () => {
  const { theme, toggleTheme } = useTheme();
  const { cartItems, totalItems, updateQuantity } = useCart();
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isShoppingBagOpen, setIsShoppingBagOpen] = useState(false);

  const popularSearches = [
    "Rolled Oats",
    "Steel Cut Oats", 
    "Overnight Oats",
    "Granola",
    "Organic",
    "Gluten Free"
  ];
  
  const navItems = [
    { 
      name: "Products", 
      href: "/category/products",
      submenuItems: [],
      images: []
    },
    { 
      name: "New", 
      href: "/category/new-in",
      submenuItems: [
        "New Arrivals",
        "Seasonal Flavors",
        "Limited Edition",
        "Bundles",
        "Gift Sets"
      ],
      images: [
        { src: steelCutOats, alt: "Steel Cut Oats", label: "Steel Cut Oats" },
        { src: oatGranola, alt: "New Granola", label: "Maple Pecan Granola" }
      ]
    },
    { 
      name: "About", 
      href: "/about/our-story",
      submenuItems: [
        "Our Story",
        "Sustainability",
        "Recipes",
        "Customer Care",
        "Find Us"
      ],
      images: [
        { src: farmFounders, alt: "Our Farm Family", label: "Meet the family" }
      ]
    }
  ];

  return (
    <nav 
      className="relative bg-nav-background border-b border-border backdrop-blur-sm"
    >
      <div className="flex items-center justify-between h-16 px-6">
        {/* Mobile hamburger button */}
        <button
          className="lg:hidden p-2 mt-0.5 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className="w-5 h-5 relative">
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? 'rotate-45 top-2.5' : 'top-1.5'
            }`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 top-2.5 ${
              isMobileMenuOpen ? 'opacity-0' : 'opacity-100'
            }`}></span>
            <span className={`absolute block w-5 h-px bg-current transform transition-all duration-300 ${
              isMobileMenuOpen ? '-rotate-45 top-2.5' : 'top-3.5'
            }`}></span>
          </div>
        </button>

        {/* Left navigation - Hidden on tablets and mobile */}
        <div className="hidden lg:flex space-x-8">
          {navItems.map((item) => (
            <div
              key={item.name}
              className="relative"
              onMouseEnter={() => item.submenuItems.length > 0 && setActiveDropdown(item.name)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <Link
                to={item.href}
                className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-sm font-light py-6 block"
              >
                {item.name}
              </Link>
            </div>
          ))}
        </div>

        {/* Center logo */}
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <Link to="/" className="flex items-center gap-2">
            <Wheat className="h-6 w-6 text-primary" />
            <span className="font-serif text-xl font-normal text-foreground hidden sm:inline">Golden Oats</span>
          </Link>
        </div>

        {/* Right icons */}
        <div className="flex items-center space-x-2">
          <button 
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {theme === "dark" ? (
              <Sun className="w-5 h-5" />
            ) : (
              <Moon className="w-5 h-5" />
            )}
          </button>
          <button 
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200"
            aria-label="Search"
            onClick={() => setIsSearchOpen(!isSearchOpen)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
          </button>
          <button 
            className="p-2 text-nav-foreground hover:text-nav-hover transition-colors duration-200 relative"
            aria-label="Shopping bag"
            onClick={() => setIsShoppingBagOpen(true)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z" />
            </svg>
            {totalItems > 0 && (
              <span className="absolute -top-0.5 -right-0.5 bg-primary text-primary-foreground text-[0.6rem] font-medium w-4 h-4 rounded-full flex items-center justify-center">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Full width dropdown */}
      {activeDropdown && navItems.find(item => item.name === activeDropdown)?.submenuItems.length > 0 && (
        <div 
          className="absolute top-full left-0 right-0 bg-background border-b border-border z-50"
          onMouseEnter={() => setActiveDropdown(activeDropdown)}
          onMouseLeave={() => setActiveDropdown(null)}
        >
          <div className="px-6 py-8">
            <div className="flex justify-between w-full">
              {/* Left side - Menu items */}
              <div className="flex-1">
                <ul className="space-y-2">
                   {navItems
                     .find(item => item.name === activeDropdown)
                     ?.submenuItems.map((subItem, index) => (
                      <li key={index}>
                        <Link 
                          to={activeDropdown === "About" ? `/about/${subItem.toLowerCase().replace(/\s+/g, '-')}` : `/category/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                          className="text-nav-foreground hover:text-nav-hover transition-colors duration-200 text-sm font-light block py-2"
                        >
                          {subItem}
                        </Link>
                      </li>
                   ))}
                </ul>
              </div>

              {/* Right side - Images */}
              {navItems.find(item => item.name === activeDropdown)?.images.length > 0 && (
                <div className="flex space-x-6">
                  {navItems
                    .find(item => item.name === activeDropdown)
                    ?.images.map((image, index) => {
                      let linkTo = "/";
                      if (activeDropdown === "Shop") {
                        if (image.label === "Rolled Oats") linkTo = "/category/rolled-oats";
                        else if (image.label === "Granola") linkTo = "/category/granola";
                      } else if (activeDropdown === "New") {
                        linkTo = "/category/new-in";
                      } else if (activeDropdown === "About") {
                        linkTo = "/about/our-story";
                      }
                      
                      return (
                        <Link key={index} to={linkTo} className="w-[300px] h-[200px] cursor-pointer group relative overflow-hidden block rounded-lg">
                          <img 
                            src={image.src}
                            alt={image.alt}
                            className="w-full h-full object-cover transition-opacity duration-200 group-hover:opacity-90"
                          />
                          <div className="absolute bottom-2 left-2 text-foreground text-xs font-light flex items-center gap-1 bg-background/80 px-2 py-1 rounded">
                            <span>{image.label}</span>
                            <ArrowRight size={12} />
                          </div>
                        </Link>
                      );
                    })}
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Search overlay */}
      {isSearchOpen && (
        <div 
          className="absolute top-full left-0 right-0 bg-background border-b border-border z-50"
        >
          <div className="px-6 py-8">
            <div className="max-w-2xl mx-auto">
              <div className="relative mb-8">
                <div className="flex items-center border-b border-border pb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-5 text-muted-foreground mr-3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
                  </svg>
                  <input
                    type="text"
                    placeholder="Search for oats, granola, recipes..."
                    className="flex-1 bg-transparent text-foreground placeholder:text-muted-foreground outline-none text-lg"
                    autoFocus
                  />
                </div>
              </div>

              <div>
                <h3 className="text-muted-foreground text-sm font-light mb-4">Popular Searches</h3>
                <div className="flex flex-wrap gap-3">
                  {popularSearches.map((search, index) => (
                    <button
                      key={index}
                      className="text-foreground hover:text-primary text-sm font-light py-2 px-4 border border-border rounded-full transition-colors duration-200 hover:border-primary"
                    >
                      {search}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Mobile navigation menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border z-50">
          <div className="px-6 py-8">
            <div className="space-y-6">
              {navItems.map((item) => (
                <div key={item.name}>
                  <Link
                    to={item.href}
                    className="text-foreground hover:text-primary transition-colors duration-200 text-lg font-light block py-2"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                   {item.submenuItems.length > 0 && (
                     <div className="mt-3 pl-4 space-y-2">
                       {item.submenuItems.map((subItem, subIndex) => (
                         <Link
                           key={subIndex}
                           to={item.name === "About" ? `/about/${subItem.toLowerCase().replace(/\s+/g, '-')}` : `/category/${subItem.toLowerCase().replace(/\s+/g, '-')}`}
                           className="text-muted-foreground hover:text-primary text-sm font-light block py-1"
                           onClick={() => setIsMobileMenuOpen(false)}
                         >
                           {subItem}
                         </Link>
                       ))}
                     </div>
                   )}
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      {/* Shopping Bag Component */}
      <ShoppingBag 
        isOpen={isShoppingBagOpen}
        onClose={() => setIsShoppingBagOpen(false)}
        onViewFavorites={() => {}}
      />
    </nav>
  );
};

export default Navigation;
