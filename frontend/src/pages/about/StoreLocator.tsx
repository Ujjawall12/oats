import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import StoreMap from "../../components/about/StoreMap";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const StoreLocator = () => {
  const stores = [
    {
      name: "Golden Oats Farm Store",
      address: "789 Farm Road, Minnesota, MN 55001",
      phone: "+1 (612) 555-0123",
      hours: "Mon-Sat: 9AM-6PM, Sun: 10AM-4PM",
      services: ["Farm Tours", "Product Sampling", "Bulk Orders", "Recipe Consultations"]
    },
    {
      name: "Golden Oats Downtown",
      address: "456 Main Street, Minneapolis, MN 55401",
      phone: "+1 (612) 555-0456",
      hours: "Mon-Sat: 10AM-7PM, Sun: 11AM-5PM",
      services: ["Product Selection", "Nutrition Advice", "Bulk Purchases", "Gift Sets"]
    },
    {
      name: "Golden Oats Market",
      address: "123 Market Square, St. Paul, MN 55101",
      phone: "+1 (651) 555-0789",
      hours: "Mon-Sat: 8AM-8PM, Sun: 9AM-6PM",
      services: ["Browse & Buy", "Fresh Products", "Gift Wrapping"]
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Store Locator" 
          subtitle="Visit us in person for a personalized shopping experience"
        />
        
        <ContentSection title="Interactive Store Map">
          <StoreMap />
        </ContentSection>

        <ContentSection title="Our Locations">
          <div className="grid gap-8">
            {stores.map((store, index) => (
              <div key={index} className="bg-background rounded-lg p-8 border border-border">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-foreground">{store.name}</h3>
                    <div className="space-y-2 text-muted-foreground">
                      <p>{store.address}</p>
                      <p>{store.phone}</p>
                      <p>{store.hours}</p>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row gap-3 pt-4">
                      <Button variant="outline" className="rounded-none">
                        Get Directions
                      </Button>
                      <Button className="rounded-none">
                        Book Appointment
                      </Button>
                    </div>
                  </div>
                  
                  <div className="space-y-4">
                    <h4 className="text-lg font-light text-foreground">Available Services</h4>
                    <ul className="grid grid-cols-2 gap-2">
                      {store.services.map((service, serviceIndex) => (
                        <li key={serviceIndex} className="text-sm text-muted-foreground flex items-center">
                          <span className="w-2 h-2 bg-primary rounded-full mr-3 flex-shrink-0"></span>
                          {service}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </ContentSection>

        <ContentSection title="Farm Tours">
          <div className="space-y-6">
            <p className="text-lg text-muted-foreground leading-relaxed">
              Experience our farm firsthand with a guided tour. Our team will show you how we grow and process our oats, share our farming practices, and provide expert nutrition advice in a beautiful, natural setting.
            </p>
            
            <div className="grid md:grid-cols-3 gap-8 mt-12">
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Farm Tours</h4>
                <p className="text-muted-foreground text-sm">
                  Guided tours of our organic oat fields and processing facilities
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Product Sampling</h4>
                <p className="text-muted-foreground text-sm">
                  Taste our different oat varieties and find your favorites
                </p>
              </div>
              <div className="space-y-3">
                <h4 className="text-lg font-light text-foreground">Nutrition Advice</h4>
                <p className="text-muted-foreground text-sm">
                  Expert guidance on incorporating oats into your healthy lifestyle
                </p>
              </div>
            </div>
            
            <div className="pt-8">
              <Button size="lg" className="rounded-none">
                Schedule Your Farm Tour
              </Button>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Virtual Consultations">
          <div className="bg-muted/10 rounded-lg p-8">
            <h3 className="text-xl font-light text-foreground mb-4">Can't visit in person?</h3>
            <p className="text-muted-foreground mb-6">
              Book a virtual consultation with one of our nutrition experts. We'll showcase our products via video call, 
              answer your questions, and help you find the perfect oats for your needs from the comfort of your home.
            </p>
            <Button variant="outline" className="rounded-none">
              Book Virtual Consultation
            </Button>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default StoreLocator;