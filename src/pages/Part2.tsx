import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { User, Globe, MousePointerClick } from "lucide-react";

export default function Part2() {
  const slides = [
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">n8n Setup</h4>
        <h1 className="text-[#1e3c72] text-[40px] md:text-[56px] font-bold mb-6">Part 2: n8n 部署與初始化</h1>
        <h2 className="text-[#666] text-[24px] md:text-[28px] font-normal border-none max-w-[800px]">
          第一次啟動你的自動化引擎
        </h2>
      </div>
    </Slide>,

    <Slide key="open">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌐 開啟 n8n 網頁介面</h2>
      <div className="flex flex-col items-center justify-center gap-10 mt-10">
        <div className="bg-white p-8 rounded-full shadow-[0_0_40px_rgba(30,60,114,0.1)] animate-pulse">
           <MousePointerClick size={80} className="text-[#4facfe]" />
        </div>
        
        <p className="text-[24px] text-center max-w-[800px] leading-relaxed">
          Zeabur 會為你生成一個 <strong className="text-[#ff4081]">專屬網址</strong>。<br/>
          部署完成後 (Running)，直接點擊該網址即可進入 n8n 設定畫面。
        </p>

        <div className="box info bg-[#e3f2fd] border-l-4 border-[#2196f3] text-[#0d47a1] p-5 rounded-r-lg w-full max-w-[800px]">
          <strong>💡 提示：</strong> 網址通常長得像 <code>https://n8n-xxx.zeabur.app</code>
        </div>
      </div>
    </Slide>,

    <Slide key="admin">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">👤 設定管理員帳號</h2>
      <p className="text-[20px] text-[#444] mb-8">第一次進入時，你需要建立管理員帳號（只需設定一次）：</p>

      <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] max-w-[800px] mx-auto shadow-lg">
        <h3 className="text-center text-[22px] font-bold text-[#1e3c72] mb-6 flex items-center justify-center gap-2">
          <User /> Owner Account Setup
        </h3>
        
        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[18px] font-semibold text-[#555]">Email</label>
            <input type="text" disabled value="your-email@example.com" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500" />
            <p className="text-sm text-gray-500">未來登入 n8n 管理介面使用的帳號</p>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold text-[#555]">First Name</label>
              <input type="text" disabled value="MyName" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500" />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[18px] font-semibold text-[#555]">Last Name</label>
              <input type="text" disabled value="Admin" className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500" />
            </div>
          </div>
        </div>
      </div>
      
      <p className="text-center mt-8 text-[#666]">填寫完畢後，點擊 <strong>Next</strong> 即可進入 n8n 畫布 (Canvas)！</p>
    </Slide>
  ];

  return <SlideDeck title="Part 2: n8n 部署與初始化" slides={slides} />;
}
