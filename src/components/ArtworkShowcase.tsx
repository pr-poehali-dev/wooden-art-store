import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const artworks = [
  {
    id: 1,
    image: "https://cdn.poehali.dev/files/cbcdd5ff-3bce-4137-884f-62bbc6686940.jpg",
    title: "Разделочная доска «Птица Счастья»",
    description: "Традиционная роспись с фольклорными мотивами"
  },
  {
    id: 2,
    image: "https://cdn.poehali.dev/files/ad87e957-dc73-430e-8051-65cdf1376643.jpg",
    title: "Мастер за работой",
    description: "Процесс создания уникальной ручной росписи"
  },
  {
    id: 3,
    image: "https://cdn.poehali.dev/files/cbf25512-ae39-4750-b504-d2e651cf8221.jpg",
    title: "Поднос «Жар-птица»",
    description: "Яркая роспись в традиционном русском стиле"
  }
];

const ArtworkShowcase = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev === artworks.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? artworks.length - 1 : prev - 1));
  };

  return (
    <section className="bg-stone-50 py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">Наше мастерство</h2>
        
        <div className="relative w-full max-w-3xl mx-auto">
          <div className="relative aspect-[4/3] overflow-hidden rounded-lg shadow-lg">
            <img 
              src={artworks[currentImageIndex].image} 
              alt={artworks[currentImageIndex].title}
              className="w-full h-full object-cover transition-opacity duration-500"
            />
            
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6 text-white">
              <h3 className="text-xl md:text-2xl font-bold mb-2">{artworks[currentImageIndex].title}</h3>
              <p className="text-sm md:text-base">{artworks[currentImageIndex].description}</p>
            </div>
          </div>
          
          <Button 
            variant="secondary"
            size="icon"
            className="absolute left-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md"
            onClick={prevImage}
          >
            <ChevronLeft className="h-5 w-5 text-gray-800" />
          </Button>
          
          <Button 
            variant="secondary"
            size="icon"
            className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full bg-white/80 hover:bg-white shadow-md"
            onClick={nextImage}
          >
            <ChevronRight className="h-5 w-5 text-gray-800" />
          </Button>
          
          <div className="mt-4 flex justify-center gap-2">
            {artworks.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentImageIndex ? "bg-primary" : "bg-gray-300"
                }`}
                onClick={() => setCurrentImageIndex(index)}
                aria-label={`Показать изображение ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtworkShowcase;