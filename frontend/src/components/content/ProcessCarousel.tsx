import { useState, useEffect } from "react";
import processFarm from "@/assets/process-farm.jpg";
import processCutting from "@/assets/process-cutting.jpg";
import processPacking from "@/assets/process-packing.jpg";
import processTable from "@/assets/process-table.jpg";

const processImages = [
  {
    src: processFarm,
    alt: "Golden oat fields at sunrise",
    title: "Growing",
  },
  {
    src: processCutting,
    alt: "Harvesting oats in the field",
    title: "Harvesting",
  },
  {
    src: processPacking,
    alt: "Packing oats in our facility",
    title: "Packing",
  },
  {
    src: processTable,
    alt: "Oats ready on your table",
    title: "Serving",
  },
];

const ProcessCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % processImages.length);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="w-full mb-16 px-6">
      <div className="mb-6">
        <h2 className="font-serif text-xl font-normal text-foreground">
          From Our Fields to Your Table
        </h2>
        <p className="text-sm text-muted-foreground mt-1">
          Sustainably grown oats from our family farm in Minnesota
        </p>
      </div>

      <div className="relative w-full aspect-[16/9] overflow-hidden rounded-lg">
        {processImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentIndex ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={image.src}
              alt={image.alt}
              className="w-full h-full object-cover"
            />
            {/* Subtle gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
            
            {/* Title overlay */}
            <div className="absolute bottom-6 left-6">
              <span className="text-sm font-medium text-white/90 bg-black/30 px-3 py-1 rounded-full">
                {image.title}
              </span>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProcessCarousel;
