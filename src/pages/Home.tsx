import { Link } from "wouter";
import { Bot, Cloud, Server, Database, Code, BookOpen, Youtube, Facebook } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-summary text-white font-sans selection:bg-purple-300 selection:text-purple-900">
      <div className="fixed top-0 left-0 w-full h-1 bg-gradient-to-r from-[#667eea] to-[#764ba2] z-50 shadow-[0_0_10px_#667eea]"></div>
      
      <div className="max-w-[1200px] mx-auto px-5 py-10">
        {/* Header */}
        <header className="text-center mb-[60px] animate-in slide-in-from-top duration-700 fade-in">
          <h1 className="text-[32px] md:text-[52px] font-extrabold mb-5 drop-shadow-md">
            本地 AI 模型與對話平台
          </h1>
          <p className="text-[18px] md:text-[26px] opacity-95 font-light tracking-wider mb-6">
            Zeabur + n8n + LINE Bot 完整教學
          </p>
          <div className="text-[14px] md:text-[18px] opacity-85 leading-relaxed bg-white/10 inline-block px-6 py-3 rounded-2xl backdrop-blur-sm border border-white/20">
            從零開始打造自動化工作流<br />
            完全免費、無需維護伺服器、極速部署
          </div>
        </header>

        {/* Main Section */}
        <div className="bg-white/98 text-[#333] rounded-[30px] p-6 md:p-[45px] mb-[50px] shadow-[0_25px_70px_rgba(0,0,0,0.35)] animate-in slide-in-from-bottom duration-700 fade-in delay-200 transform hover:-translate-y-1 transition-transform ease-out">
          <div className="flex flex-col md:flex-row items-center gap-5 mb-[25px] pb-[20px] border-b-4 border-[#667eea]">
            <div className="text-[48px] filter drop-shadow-sm">🤖</div>
            <div className="text-center md:text-left flex-1">
              <h2 className="text-[26px] md:text-[38px] font-bold text-[#667eea] mb-2">課程簡報</h2>
              <p className="text-[16px] md:text-[20px] opacity-75 font-normal text-[#764ba2]">Course Slides</p>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-[15px] mb-[30px] border-l-[5px] border-[#667eea] text-[16px] leading-[1.8] text-[#444]">
            本課程將帶你從零開始，使用 <strong className="text-[#667eea]">Zeabur</strong> 雲端平台部署 <strong className="text-[#667eea]">n8n</strong> 自動化工具，並串接 <strong className="text-[#06c755]">LINE Bot</strong> 打造智慧對話機器人。你將學會服務部署、Webhook 設定、API 串接，並了解自動化工作流的設計邏輯。
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[25px] mt-[30px]">
            <PartCard 
              to="/part/1" 
              number="Part 1" 
              title="Zeabur 註冊與環境準備" 
              icon={<Cloud className="w-8 h-8 opacity-80" />}
            />
            <PartCard 
              to="/part/2" 
              number="Part 2" 
              title="n8n 部署與初始化" 
              icon={<Server className="w-8 h-8 opacity-80" />}
            />
            <PartCard 
              to="/part/3" 
              number="Part 3" 
              title="LINE Developer 設定" 
              icon={<Code className="w-8 h-8 opacity-80" />}
            />
            <PartCard 
              to="/part/3" 
              number="Part 4" 
              title="n8n 串接 LINE Bot" 
              icon={<Bot className="w-8 h-8 opacity-80" />}
              isLocked
            />
             <PartCard 
              to="/part/3" 
              number="Part 5" 
              title="實戰案例與延伸應用" 
              icon={<Database className="w-8 h-8 opacity-80" />}
              isLocked
            />
          </div>
        </div>

        {/* Footer */}
        <footer className="text-center text-white mt-[70px] p-[40px] bg-white/10 rounded-[25px] backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.2)]">
          <h3 className="text-[28px] font-bold mb-[15px]">課程資源連結</h3>
          <p className="text-[16px] opacity-90">Course Resources & Community</p>
          
          <div className="flex flex-col md:flex-row justify-center gap-[25px] mt-[25px]">
            <FooterLink href="https://www.facebook.com/?locale=zh_TW" icon={<Facebook size={18} />}>Facebook</FooterLink>
            <FooterLink href="https://www.youtube.com/@Liang-yt02" icon={<Youtube size={18} />}>YouTube</FooterLink>
            <FooterLink href="https://www.facebook.com/groups/2754139931432955?locale=zh_TW" icon={<BookOpen size={18} />}>3A 社團</FooterLink>
          </div>
          
          <p className="mt-[35px] opacity-85 text-[15px]">
            © 2025 自己架設 AI - 零基礎到大師 | Made with 曾慶良(阿亮老師) ❤️
          </p>
        </footer>
      </div>
    </div>
  );
}

function PartCard({ to, number, title, icon, isLocked = false }: { to: string, number: string, title: string, icon: React.ReactNode, isLocked?: boolean }) {
  if (isLocked) {
     return (
      <div className="relative group overflow-hidden bg-gradient-to-br from-gray-400 to-gray-500 rounded-[18px] p-[28px] text-white text-center shadow-lg opacity-80 cursor-not-allowed">
        <div className="absolute inset-0 bg-white/10 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
        <div className="text-[32px] font-extrabold mb-[12px] drop-shadow-md opacity-50">{number}</div>
        <div className="flex justify-center mb-4 opacity-50">{icon}</div>
        <div className="text-[18px] font-medium leading-[1.6] opacity-50">{title}</div>
        <div className="absolute inset-0 flex items-center justify-center bg-black/20 backdrop-blur-[1px]">
          <span className="bg-black/50 px-3 py-1 rounded-full text-sm flex items-center gap-1">🔒 Coming Soon</span>
        </div>
      </div>
    );
  }

  return (
    <Link href={to}>
      <a className="block relative group overflow-hidden bg-gradient-to-br from-[#667eea] to-[#764ba2] rounded-[18px] p-[28px] text-white text-center shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-all duration-400 hover:-translate-y-2 hover:scale-[1.03] hover:shadow-[0_15px_40px_rgba(0,0,0,0.45)]">
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        <div className="text-[32px] font-extrabold mb-[12px] drop-shadow-md relative z-10">{number}</div>
        <div className="flex justify-center mb-4 relative z-10">{icon}</div>
        <div className="text-[18px] font-medium leading-[1.6] relative z-10">{title}</div>
      </a>
    </Link>
  );
}

function FooterLink({ href, children, icon }: { href: string, children: React.ReactNode, icon: React.ReactNode }) {
  return (
    <a 
      href={href} 
      target="_blank" 
      rel="noopener noreferrer"
      className="flex items-center justify-center gap-2 bg-white/20 text-white px-[30px] py-[14px] rounded-[30px] font-semibold text-[16px] shadow-[0_4px_10px_rgba(0,0,0,0.15)] transition-all duration-300 hover:bg-white/35 hover:-translate-y-1 hover:shadow-[0_6px_15px_rgba(0,0,0,0.25)]"
    >
      {icon}
      {children}
    </a>
  );
}
