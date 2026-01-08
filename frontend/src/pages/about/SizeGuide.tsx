import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import { Button } from "../../components/ui/button";
import AboutSidebar from "../../components/about/AboutSidebar";

const SizeGuide = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
        <PageHeader 
          title="Size Guide" 
          subtitle="Find the right serving size and portion information"
        />
        
        <ContentSection title="Serving Sizes">
          <div className="space-y-8">
            <div className="bg-muted/10 rounded-lg p-8">
              <h3 className="text-xl font-light text-foreground mb-6">Recommended Serving Sizes</h3>
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Rolled Oats</h4>
                  <p className="text-muted-foreground">
                    Standard serving: 1/2 cup (40g) dry oats makes approximately 1 cup cooked. This provides about 150 calories, 5g protein, and 4g fiber.
                  </p>
                </div>
                <div className="space-y-4">
                  <h4 className="font-medium text-foreground">Steel Cut Oats</h4>
                  <p className="text-muted-foreground">
                    Standard serving: 1/4 cup (40g) dry oats makes approximately 1 cup cooked. Steel cut oats are denser and more filling than rolled oats.
                  </p>
                </div>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-border">
                <thead>
                  <tr className="bg-muted/20">
                    <th className="border border-border p-3 text-left font-light">Product Type</th>
                    <th className="border border-border p-3 text-left font-light">Dry Serving</th>
                    <th className="border border-border p-3 text-left font-light">Cooked Serving</th>
                    <th className="border border-border p-3 text-left font-light">Calories</th>
                    <th className="border border-border p-3 text-left font-light">Protein (g)</th>
                    <th className="border border-border p-3 text-left font-light">Fiber (g)</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { type: "Rolled Oats", dry: "1/2 cup (40g)", cooked: "1 cup", calories: "150", protein: "5", fiber: "4" },
                    { type: "Steel Cut Oats", dry: "1/4 cup (40g)", cooked: "1 cup", calories: "150", protein: "5", fiber: "4" },
                    { type: "Instant Oats", dry: "1 packet (28g)", cooked: "1 cup", calories: "100", protein: "4", fiber: "3" },
                    { type: "Oat Flour", dry: "1/4 cup (30g)", cooked: "N/A", calories: "120", protein: "4", fiber: "3" },
                    { type: "Granola", dry: "1/3 cup (40g)", cooked: "N/A", calories: "180", protein: "4", fiber: "3" }
                  ].map((item, index) => (
                    <tr key={index} className="hover:bg-muted/10">
                      <td className="border border-border p-3">{item.type}</td>
                      <td className="border border-border p-3">{item.dry}</td>
                      <td className="border border-border p-3">{item.cooked}</td>
                      <td className="border border-border p-3">{item.calories}</td>
                      <td className="border border-border p-3">{item.protein}</td>
                      <td className="border border-border p-3">{item.fiber}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Package Sizes">
          <div className="grid md:grid-cols-2 gap-12">
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Standard Packages</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Small (16 oz)</span>
                  <span className="text-foreground">~10 servings</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Medium (32 oz)</span>
                  <span className="text-foreground">~20 servings</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">Large (64 oz)</span>
                  <span className="text-foreground">~40 servings</span>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <h3 className="text-xl font-light text-foreground">Bulk Options</h3>
              <div className="space-y-4">
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">5 lb Bag</span>
                  <span className="text-foreground">~56 servings</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">10 lb Bag</span>
                  <span className="text-foreground">~112 servings</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">25 lb Bag</span>
                  <span className="text-foreground">~280 servings</span>
                </div>
                <div className="flex justify-between py-2 border-b border-border">
                  <span className="text-muted-foreground">50 lb Bag</span>
                  <span className="text-foreground">~560 servings</span>
                </div>
              </div>
            </div>
          </div>
        </ContentSection>

        <ContentSection title="Need Help?">
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Still unsure about serving sizes or package options? Our nutrition consultants are here to help you find the perfect fit for your needs. 
              Download our nutrition guide or schedule a virtual consultation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="outline" className="rounded-none">
                Download Nutrition Guide
              </Button>
              <Button className="rounded-none">
                Schedule Consultation
              </Button>
            </div>
          </div>
        </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default SizeGuide;