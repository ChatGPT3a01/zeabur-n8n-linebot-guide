import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { CheckCircle, ExternalLink, Smartphone, Database, Server } from "lucide-react";

export default function Part1() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">Zeabur Deployment Guide</h4>
        <h1 className="text-[#1e3c72] text-[40px] md:text-[56px] font-bold mb-6">Part 1: Zeabur 註冊與環境準備</h1>
        <h2 className="text-[#666] text-[24px] md:text-[28px] font-normal border-none max-w-[800px]">
          從零開始建立你的自動化基地
        </h2>
        <div className="mt-10 flex gap-5">
          <span className="bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] px-4 py-1 rounded text-[#004d40] font-bold">Free Plan</span>
          <span className="bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] px-4 py-1 rounded text-[#004d40] font-bold">No Credit Card</span>
        </div>
      </div>
    </Slide>,

    // Slide 2: Register Steps
    <Slide key="register">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">✅ 第 1 步：註冊並登入 Zeabur</h2>
      <div className="space-y-6 text-[20px] text-[#444] leading-relaxed">
        <p>請按照下列操作完成帳號建立：</p>
        
        <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-sm hover:-translate-y-1 transition-transform">
          <h3 className="text-[#1e3c72] text-[24px] font-bold mb-4 flex items-center gap-2">
            📌 步驟一：前往官網
          </h3>
          <p>
            打開 Zeabur 官方網站：
            <a href="https://zeabur.com/" target="_blank" className="text-blue-600 hover:underline inline-flex items-center gap-1 ml-2">
              https://zeabur.com/ <ExternalLink size={18} />
            </a>
          </p>
        </div>

        <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-sm hover:-translate-y-1 transition-transform">
          <h3 className="text-[#1e3c72] text-[24px] font-bold mb-4 flex items-center gap-2">
            📌 步驟二：登入 (Sign in)
          </h3>
          <p>點選右上角「Sign in」或「登入」，推薦使用 <strong>GitHub</strong> 或 <strong>Google</strong> 帳號快速登入。</p>
        </div>
      </div>
    </Slide>,

    // Slide 3: Dashboard & Verify
    <Slide key="verify">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📱 手機驗證與控制台</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-4">
          <h3 className="text-[#1e3c72] text-[26px] font-bold">1. 控制台畫面 (Dashboard)</h3>
          <p className="text-[18px] text-[#555]">登入後你應該會看到以下功能按鈕：</p>
          <ul className="list-disc pl-6 space-y-2 text-[18px]">
            <li><strong>Create Project</strong> (建立專案)</li>
            <li><strong>Deploy Service</strong> (部署服務)</li>
          </ul>
        </div>

        <div className="bg-[#e3f2fd] p-6 rounded-xl border border-[#2196f3] text-[#0d47a1]">
          <h3 className="text-[24px] font-bold mb-3 flex items-center gap-2">
            <Smartphone size={24} /> 重要：綁定手機
          </h3>
          <p className="text-[18px] leading-relaxed">
            為了防止濫用，Zeabur 要求免費帳戶必須綁定手機號碼。<br/>
            請在「帳戶設定」中完成驗證，否則無法使用部署功能。
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 4: Service Initialization
    <Slide key="init">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🚀 服務初始化</h2>
      <p className="text-[20px] text-[#444] mb-6">當你建立 n8n 專案後，Zeabur 會自動部署兩個服務：</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border-l-[6px] border-[#2a5298] shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-[#2a5298]" size={32} />
            <h3 className="text-[24px] font-bold text-[#1e3c72]">PostgreSQL</h3>
          </div>
          <p className="text-[18px] text-[#555]">n8n 的資料庫，用來儲存你的工作流 (Workflows) 和執行紀錄。</p>
        </div>

        <div className="bg-white p-6 rounded-2xl border-l-[6px] border-[#ff4081] shadow-md">
          <div className="flex items-center gap-3 mb-3">
            <Server className="text-[#ff4081]" size={32} />
            <h3 className="text-[24px] font-bold text-[#1e3c72]">n8n Service</h3>
          </div>
          <p className="text-[18px] text-[#555]">n8n 的本體，包含網頁介面 (UI) 和 API 服務。</p>
        </div>
      </div>

      <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl flex items-start gap-3">
        <div className="mt-1">⚠️</div>
        <div>
          <strong className="block text-[18px] mb-1">等待初始化 (UNKNOWN 狀態)</strong>
          <p className="text-[16px]">
            初次部署時可能會顯示 UNKNOWN 狀態，這是正常的。請等待 1~3 分鐘，若太久請重新整理網頁。
            直到出現綠燈 <CheckCircle className="inline w-4 h-4 text-green-600"/> Running 狀態。
          </p>
        </div>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 1: Zeabur 註冊與環境準備" slides={slides} />;
}
