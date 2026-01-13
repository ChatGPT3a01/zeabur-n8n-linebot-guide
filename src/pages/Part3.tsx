import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { Key, MessageSquare, ShieldCheck } from "lucide-react";

export default function Part3() {
  const slides = [
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">LINE Integration</h4>
        <h1 className="text-[#1e3c72] text-[40px] md:text-[56px] font-bold mb-6">Part 3: LINE Developer 與 n8n 憑證</h1>
        <h2 className="text-[#666] text-[24px] md:text-[28px] font-normal border-none max-w-[800px]">
          讓 n8n 擁有控制 LINE Bot 的權限
        </h2>
      </div>
    </Slide>,

    <Slide key="line-dev">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🛠️ LINE Developer 設定</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div>
           <p className="text-[20px] text-[#444] mb-6">
             要讓 n8n 能夠接收和發送 LINE 訊息，我們需要先在 LINE Developers Console 取得兩把鑰匙：
           </p>
           <ul className="space-y-4">
             <li className="flex items-center gap-3 text-[18px] bg-white p-4 rounded-xl shadow-sm border border-gray-100">
               <span className="bg-[#06c755] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">1</span>
               <span>Channel Access Token (Long-lived)</span>
             </li>
             <li className="flex items-center gap-3 text-[18px] bg-white p-4 rounded-xl shadow-sm border border-gray-100">
               <span className="bg-[#06c755] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold">2</span>
               <span>Channel Secret</span>
             </li>
           </ul>
        </div>
        <div className="flex justify-center">
          <MessageSquare size={180} className="text-[#06c755] opacity-80" />
        </div>
      </div>
    </Slide>,

    <Slide key="credentials">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔐 在 n8n 建立憑證 (Credentials)</h2>
      <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-lg">
        <div className="flex items-center gap-4 mb-6 border-b border-gray-200 pb-4">
          <Key className="text-[#ffb300]" size={32} />
          <h3 className="text-[24px] font-bold text-[#333]">Credential Setup</h3>
        </div>

        <ol className="list-decimal pl-6 space-y-4 text-[18px] text-[#444]">
          <li>回到 n8n 介面，點選左側選單的 <strong>Credentials</strong>。</li>
          <li>點擊右上角 <strong>Create Credential</strong>。</li>
          <li>搜尋 <strong>LINE</strong> 並選擇 <strong>LINE Messaging API</strong>。</li>
          <li>
            將剛才取得的 <strong>Access Token</strong> 和 <strong>Channel Secret</strong> 填入對應欄位。
          </li>
          <li>
            <span className="text-green-600 font-bold flex items-center gap-2 mt-2">
              <ShieldCheck size={20} /> 點擊 Save 儲存
            </span>
          </li>
        </ol>
      </div>
      
      <div className="mt-8 text-center text-[18px] text-[#666]">
        完成後，你的 n8n 就正式擁有操控 LINE Bot 的能力了！
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 3: LINE Developer 與 n8n 憑證" slides={slides} />;
}
