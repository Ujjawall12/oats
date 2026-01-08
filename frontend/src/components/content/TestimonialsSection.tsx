import { useState } from "react";
import { Star, Quote, Play, Pause, Volume2, VolumeX } from "lucide-react";
import rolledOats from "@/assets/rolled-oats.jpg";
import steelCutOats from "@/assets/steel-cut-oats.jpg";
import organicOats from "@/assets/organic-oats.jpg";
import oatGranola from "@/assets/oat-granola.jpg";

interface Testimonial {
  id: number;
  name: string;
  location: string;
  rating: number;
  text: string;
  product: string;
  image: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah M.",
    location: "Portland, OR",
    rating: 5,
    text: "I've tried countless oat brands, but Golden Oats is simply the best. The texture is perfect and you can really taste the freshness. My kids love the overnight oats for school mornings!",
    product: "Classic Rolled Oats",
    image: rolledOats
  },
  {
    id: 2,
    name: "Michael R.",
    location: "Austin, TX",
    rating: 5,
    text: "The steel cut oats are a game changer. They cook up perfectly creamy every time. Worth every penny for the quality you get.",
    product: "Steel Cut Oats",
    image: steelCutOats
  },
  {
    id: 3,
    name: "Jennifer L.",
    location: "Seattle, WA",
    rating: 5,
    text: "Finally, oats that taste like they came straight from the farm! The granola is addictive - I put it on everything. Fast shipping too!",
    product: "Honey Nut Granola",
    image: oatGranola
  },
  {
    id: 4,
    name: "David K.",
    location: "Denver, CO",
    rating: 5,
    text: "As a nutritionist, I always recommend quality whole grains. Golden Oats delivers exactly that. The organic line is exceptional.",
    product: "Organic Whole Oats",
    image: organicOats
  }
];

const TestimonialsSection = () => {
  return (
    <section className="w-full mb-16 px-6">
      <div className="text-center mb-10">
        <h2 className="font-serif text-2xl md:text-3xl font-normal text-foreground mb-3">
          What Our Customers Say
        </h2>
        <p className="text-muted-foreground text-sm font-light max-w-lg mx-auto">
          Join thousands of happy families who start their mornings with Golden Oats
        </p>
      </div>

      {/* Mobile-style video testimonials in single row */}
      <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto">
        {testimonials.map((testimonial, index) => {
          const [isPlaying, setIsPlaying] = useState(false);
          const [isMuted, setIsMuted] = useState(false);

          const handlePlayPause = () => {
            setIsPlaying(!isPlaying);
          };

          const handleMute = () => {
            setIsMuted(!isMuted);
          };

          const handleMouseEnter = () => {
            if (!isPlaying) {
              setIsPlaying(true);
            }
          };

          const handleMouseLeave = () => {
            if (isPlaying) {
              setIsPlaying(false);
            }
          };

          return (
            <div 
              key={testimonial.id}
              className="bg-card border border-border rounded-2xl overflow-hidden hover:shadow-lg transition-shadow duration-300 flex-shrink-0"
              style={{ width: '280px' }}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Mobile-style video container */}
              <div className="relative w-full aspect-[9/16] bg-black overflow-hidden">
                {/* Image display */}
                <img
                  src={testimonial.image}
                  alt={`Testimonial from ${testimonial.name}`}
                  className={`w-full h-full object-cover transition-all duration-300 ${
                    isPlaying ? "opacity-100 scale-105" : "opacity-80"
                  }`}
                />
                
                {/* Play/Pause button overlay - only show when not playing */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <button
                      onClick={handlePlayPause}
                      className="bg-primary/80 rounded-full p-4 backdrop-blur-sm hover:bg-primary transition-colors z-10"
                    >
                      <Play className="h-8 w-8 text-primary-foreground fill-primary-foreground ml-1" />
                    </button>
                  </div>
                )}
                
                {/* Controls - always visible */}
                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between z-10">
                  <button
                    onClick={handlePlayPause}
                    className="bg-black/60 rounded-full p-2 backdrop-blur-sm hover:bg-black/80 transition-colors"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="h-5 w-5 text-white" />
                    ) : (
                      <Play className="h-5 w-5 text-white fill-white ml-0.5" />
                    )}
                  </button>
                  <button
                    onClick={handleMute}
                    className="bg-black/60 rounded-full p-2 backdrop-blur-sm hover:bg-black/80 transition-colors"
                    aria-label={isMuted ? "Unmute" : "Mute"}
                  >
                    {isMuted ? (
                      <VolumeX className="h-5 w-5 text-white" />
                    ) : (
                      <Volume2 className="h-5 w-5 text-white" />
                    )}
                  </button>
                </div>
                
                {/* Rating overlay */}
                <div className="absolute top-4 left-4 flex gap-1 z-10">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star 
                      key={i} 
                      className="h-4 w-4 fill-accent text-accent drop-shadow-lg" 
                    />
                  ))}
                </div>
              </div>
            
            {/* Content section */}
            <div className="p-6">
              <Quote className="h-6 w-6 text-primary/20 mb-3" />
              
              {/* Review text */}
              <p className="text-sm font-light text-foreground leading-relaxed mb-4">
                "{testimonial.text}"
              </p>

              {/* Product badge */}
              <span className="inline-block text-xs font-light text-primary bg-primary/10 px-2 py-1 rounded mb-4">
                {testimonial.product}
              </span>

              {/* Customer info */}
              <div className="border-t border-border pt-4">
                <p className="text-sm font-medium text-foreground">{testimonial.name}</p>
                <p className="text-xs font-light text-muted-foreground">{testimonial.location}</p>
              </div>
            </div>
            </div>
          );
        })}
      </div>

      {/* Trust badges */}
      <div className="flex flex-wrap justify-center items-center gap-8 mt-12 pt-8 border-t border-border">
        <div className="flex items-center gap-2">
          <div className="flex gap-0.5">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="h-4 w-4 fill-accent text-accent" />
            ))}
          </div>
          <span className="text-sm font-light text-muted-foreground">4.9/5 Average Rating</span>
        </div>
        <div className="text-sm font-light text-muted-foreground">
          <span className="font-medium text-foreground">2,400+</span> Happy Customers
        </div>
        <div className="text-sm font-light text-muted-foreground">
          <span className="font-medium text-foreground">98%</span> Would Recommend
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;