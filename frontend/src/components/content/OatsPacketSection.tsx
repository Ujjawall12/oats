import rolledOats from "@/assets/rolled-oats.jpg";

const OatsPacketSection = () => {
  return (
    <section className="w-full min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0">
        <img
          src={rolledOats}
          alt="Premium oats packet"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      <div className="relative z-10 text-center px-6">
        <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-medium text-primary-foreground mb-4 drop-shadow-lg">
          From Our Fields to Your Table
        </h2>
        <p className="text-lg md:text-xl text-primary-foreground/90 drop-shadow-md max-w-2xl mx-auto">
          Sustainably grown oats from our family farm in Minnesota
        </p>
      </div>
    </section>
  );
};

export default OatsPacketSection;

