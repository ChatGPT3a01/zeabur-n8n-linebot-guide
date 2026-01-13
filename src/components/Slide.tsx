import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SlideProps {
  children: ReactNode;
  className?: string;
}

export function Slide({ children, className }: SlideProps) {
  return (
    <div className={cn(
      "w-full h-full flex items-center justify-center p-10 animate-in fade-in duration-500",
      className
    )}>
      <div className="bg-white/98 rounded-[24px] shadow-2xl p-[60px] w-[95%] max-w-[1400px] max-h-[88vh] overflow-y-auto custom-scrollbar relative">
        {children}
      </div>
    </div>
  );
}
