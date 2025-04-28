import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

type SlideType = {
  id: number;
  image: string;
  title: string;
  description: string;
};

const slides: SlideType[] = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1610725664285-7c57e6eeac3f?q=80&w=1200&auto=format&fit=crop",
    title: "Сказочная шкатулка «Царевна-Лебедь»",
    description: "Хранительница ваших секретов с уникальной ручной росписью",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1625913952228-8d3fcc4ff5ac?q=80&w=1200&auto=format&fit=crop",
    title: "Солнечный поднос «Подсолнухи»",
    description: "Наполнит ваш дом теплом и уютом, создан с любовью",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1575995872837-35a0571ad749?q=80&w=1200&auto=format&fit=crop",
    title: "Матрёшка «Зимняя сказка»",
    description: "Традиционный сувенир в современном исполнении",
  },
];

const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  // Auto-advance slides
  useEffect(() => {
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="relative h-[60vh] md:h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${
            index === currentSlide ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
          style={{
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)), url(${slide.image})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        >
          <div className="container px-4 text-center text-white z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 animate-fade-in">{slide.title}</h2>
            <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto animate-fade-in">
              {slide.description}
            </p>
            <Button size="lg" asChild className="animate-fade-in">
              <Link to="/catalog">Смотреть каталог</Link>
            </Button>
          </div>
        </div>
      ))}

      <Button
        variant="ghost"
        size="icon"
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
        onClick={prevSlide}
      >
        <ChevronLeft className="h-8 w-8" />
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/30 text-white hover:bg-black/50"
        onClick={nextSlide}
      >
        <ChevronRight className="h-8 w-8" />
      </Button>

      <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-white" : "bg-white/50"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default HeroSlider;