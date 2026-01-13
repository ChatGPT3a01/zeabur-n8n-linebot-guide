import { useState, useEffect } from "react";
import type { ReactNode } from "react";
import { NavBar } from "./NavBar";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SlideDeckProps {
  title: string;
  slides: ReactNode[];
}

export function SlideDeck({ title, slides }: SlideDeckProps) {
  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = slides.length;

  const nextSlide = () => {
    if (currentSlide < totalSlides - 1) {
      setCurrentSlide(prev => prev + 1);
    }
  };

  const prevSlide = () => {
    if (currentSlide > 0) {
      setCurrentSlide(prev => prev - 1);
    }
  };

  const goToSlide = (index: number) => {
    if (index >= 0 && index < totalSlides) {
      setCurrentSlide(index);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") nextSlide();
      if (e.key === "ArrowLeft") prevSlide();
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [currentSlide]);

  return (
    <div className="min-h-screen bg-slide overflow-hidden font-sans text-[#333]">
      <NavBar title={title} />
      
      <div className="w-full h-screen pt-[60px] relative">
        {slides.map((slide, index) => (
          <div 
            key={index} 
            className={cn(
              "absolute top-[60px] left-0 w-full h-[calc(100vh-60px)] transition-opacity duration-300 ease-in-out",
              currentSlide === index ? "opacity-100 z-20 pointer-events-auto" : "opacity-0 z-10 pointer-events-none"
            )}
          >
            {slide}
          </div>
        ))}
      </div>

      {/* Navigation Arrows */}
      <button 
        onClick={prevSlide}
        disabled={currentSlide === 0}
        className="fixed top-1/2 left-[30px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/25 border-2 border-white/40 text-white flex items-center justify-center cursor-pointer hover:bg-white/50 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-50"
      >
        <ChevronLeft size={32} />
      </button>

      <button 
        onClick={nextSlide}
        disabled={currentSlide === totalSlides - 1}
        className="fixed top-1/2 right-[30px] -translate-y-1/2 w-[60px] h-[60px] rounded-full bg-white/25 border-2 border-white/40 text-white flex items-center justify-center cursor-pointer hover:bg-white/50 hover:scale-110 transition-all disabled:opacity-30 disabled:cursor-not-allowed z-50"
      >
        <ChevronRight size={32} />
      </button>

      {/* Indicators */}
      <div className="fixed bottom-[25px] left-1/2 -translate-x-1/2 flex gap-3 z-50 bg-black/30 px-6 py-2.5 rounded-full backdrop-blur-sm">
        {slides.map((_, index) => (
          <div 
            key={index}
            onClick={() => goToSlide(index)}
            className={cn(
              "w-3 h-3 rounded-full cursor-pointer transition-all",
              currentSlide === index ? "bg-[#4facfe] scale-125" : "bg-white/40 hover:bg-white/60"
            )}
          />
        ))}
      </div>
    </div>
  );
}
