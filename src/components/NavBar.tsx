import { Link } from "wouter";
import { Home, Maximize, Facebook, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NavBarProps {
  title: string;
}

export function NavBar({ title }: NavBarProps) {
  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  };

  return (
    <div className="fixed top-0 left-0 right-0 h-[60px] bg-white/15 backdrop-blur-md border-b border-white/20 flex justify-between items-center px-8 z-50 shadow-sm">
      <div className="text-white text-xl font-bold tracking-wide drop-shadow-sm">
        {title}
      </div>
      <div className="flex gap-3">
        <Link href="/">
          <button className="flex items-center gap-2 bg-white/20 hover:bg-white/40 border border-white/40 text-white px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-semibold hover:-translate-y-0.5 cursor-pointer">
            <Home size={16} /> 首頁
          </button>
        </Link>
        <button 
          onClick={toggleFullscreen}
          className="flex items-center gap-2 bg-white/20 hover:bg-white/40 border border-white/40 text-white px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-semibold hover:-translate-y-0.5 cursor-pointer"
        >
          <Maximize size={16} /> 全螢幕
        </button>
        <a 
          href="https://www.facebook.com/?locale=zh_TW" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/20 hover:bg-white/40 border border-white/40 text-white px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-semibold hover:-translate-y-0.5"
        >
          <Facebook size={16} /> FB
        </a>
        <a 
          href="https://www.youtube.com/@Liang-yt02" 
          target="_blank" 
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-white/20 hover:bg-white/40 border border-white/40 text-white px-4 py-1.5 rounded-full transition-all duration-300 text-sm font-semibold hover:-translate-y-0.5"
        >
          <Youtube size={16} /> YT
        </a>
      </div>
    </div>
  );
}
