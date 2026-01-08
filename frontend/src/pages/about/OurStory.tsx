import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import PageHeader from "../../components/about/PageHeader";
import ContentSection from "../../components/about/ContentSection";
import ImageTextBlock from "../../components/about/ImageTextBlock";
import AboutSidebar from "../../components/about/AboutSidebar";

const OurStory = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <div className="flex">
        <div className="hidden lg:block">
          <AboutSidebar />
        </div>
        
        <main className="w-full lg:w-[70vw] lg:ml-auto px-6">
          <PageHeader 
            title="Our Story" 
            subtitle="A journey of passion, sustainable farming, and wholesome nutrition"
          />
          
          <ContentSection>
            <ImageTextBlock
              image="/founders.png"
              imageAlt="Company founders"
              title="Founded on Passion"
              content="Golden Oats was born from a shared vision of bringing wholesome, farm-fresh oats to families everywhere. Our founders, united by their passion for sustainable farming and exceptional quality, established the brand with a commitment to growing oats that nourish your body and tell a story - the story of three generations of farming excellence."
              imagePosition="left"
            />
          </ContentSection>

          <ContentSection title="Our Heritage">
            <div className="grid md:grid-cols-2 gap-12">
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Traditional Farming</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every bag of oats is grown with care on our family farm, using time-honored farming techniques passed down through three generations. We honor traditional methods while embracing sustainable innovation, ensuring each harvest meets our exacting standards for quality and nutrition.
                </p>
              </div>
              <div className="space-y-6">
                <h3 className="text-xl font-light text-foreground">Sustainable Future</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We believe wholesome nutrition and sustainability can coexist beautifully. Our commitment to organic farming, soil health, and responsible agricultural practices ensures that every bag you enjoy contributes to a healthier planet and a more sustainable future.
                </p>
              </div>
            </div>
          </ContentSection>

          <ContentSection title="Our Values">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Excellence</h3>
                <p className="text-muted-foreground">
                  We pursue perfection in every detail, from seed selection to harvest, ensuring the highest quality oats reach your table.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Authenticity</h3>
                <p className="text-muted-foreground">
                  Each bag reflects genuine farming heritage and tells an authentic story of family tradition and care.
                </p>
              </div>
              <div className="space-y-4">
                <h3 className="text-lg font-light text-foreground">Innovation</h3>
                <p className="text-muted-foreground">
                  We continuously evolve our farming techniques while honoring sustainable agricultural principles.
                </p>
              </div>
            </div>
          </ContentSection>
        </main>
      </div>
      
      <Footer />
    </div>
  );
};

export default OurStory;