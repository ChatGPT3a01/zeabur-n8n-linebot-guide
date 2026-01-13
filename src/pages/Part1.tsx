import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { CheckCircle, ExternalLink, Smartphone, Database, Server, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Part1() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">Zeabur Deployment Guide</h4>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[68px] font-bold mb-6">Part 1: Zeabur 註冊與環境準備</h1>
        <h2 className="text-[#666] text-[30px] md:text-[36px] font-normal border-none max-w-[800px]">
          從零開始建立你的自動化基地
        </h2>
        <div className="mt-10 flex gap-5">
          <span className="bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] px-4 py-1 rounded text-[#004d40] font-bold">Free Plan</span>
          <span className="bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] px-4 py-1 rounded text-[#004d40] font-bold">No Credit Card</span>
        </div>
      </div>
    </Slide>,

    // Slide 2: Why Zeabur
    <Slide key="why-zeabur">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🤔 為什麼選擇 Zeabur？</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
          <div className="text-[42px] mb-3">💰</div>
          <h3 className="text-[30px] font-bold mb-3">完全免費開始</h3>
          <ul className="space-y-2 text-[22px]">
            <li>✅ 每月 $5 美金免費額度</li>
            <li>✅ 不需信用卡即可註冊</li>
            <li>✅ 足夠運行 n8n + 資料庫</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
          <div className="text-[42px] mb-3">⚡</div>
          <h3 className="text-[30px] font-bold mb-3">極速部署</h3>
          <ul className="space-y-2 text-[22px]">
            <li>✅ 一鍵部署 n8n 模板</li>
            <li>✅ 自動配置 PostgreSQL</li>
            <li>✅ 5 分鐘內完成設定</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#4facfe] to-[#00f2fe] text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
          <div className="text-[42px] mb-3">🔒</div>
          <h3 className="text-[30px] font-bold mb-3">安全可靠</h3>
          <ul className="space-y-2 text-[22px]">
            <li>✅ 自動配置 HTTPS</li>
            <li>✅ 內建域名管理</li>
            <li>✅ 穩定的雲端服務</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#43e97b] to-[#38f9d7] text-white p-6 rounded-2xl shadow-lg transform hover:scale-105 transition-all">
          <div className="text-[42px] mb-3">🎯</div>
          <h3 className="text-[30px] font-bold mb-3">零維護成本</h3>
          <ul className="space-y-2 text-[22px]">
            <li>✅ 無需管理伺服器</li>
            <li>✅ 自動更新與備份</li>
            <li>✅ 專注於開發工作流</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#e8f5e9] border-l-4 border-[#4caf50] p-5 rounded-r-lg">
        <p className="text-[24px] text-[#2e7d32]">
          <strong>💡 結論：</strong>Zeabur 是學習 n8n 自動化的最佳選擇，讓你專注於學習工作流設計，而不是煩惱伺服器維護！
        </p>
      </div>
    </Slide>,

    // Slide 2: Register Steps
    <Slide key="register">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">✅ 第 1 步：註冊並登入 Zeabur</h2>
      <div className="space-y-6 text-[26px] text-[#444] leading-relaxed">
        <p>請按照下列操作完成帳號建立：</p>
        
        <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-sm hover:-translate-y-1 transition-transform">
          <h3 className="text-[#1e3c72] text-[30px] font-bold mb-4 flex items-center gap-2">
            📌 步驟一：前往官網
          </h3>
          <p>
            打開 Zeabur 官方網站：
            <a href="https://zeabur.com/referral?referralCode=3a01chatgpt" target="_blank" className="text-blue-600 hover:underline inline-flex items-center gap-1 ml-2">
              https://zeabur.com/referral?referralCode=3a01chatgpt <ExternalLink size={18} />
            </a>
          </p>
        </div>

        <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-sm hover:-translate-y-1 transition-transform">
          <h3 className="text-[#1e3c72] text-[30px] font-bold mb-4 flex items-center gap-2">
            📌 步驟二：登入 (Sign in)
          </h3>
          <p>點選右上角「Sign in」或「登入」，推薦使用 <strong>GitHub</strong> 或 <strong>Google</strong> 帳號快速登入。</p>
        </div>
      </div>
    </Slide>,

    // Slide 4: Dashboard Interface
    <Slide key="dashboard">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🎛️ Zeabur 控制台介面導覽</h2>

      <p className="text-[26px] text-[#444] mb-6">登入成功後，你會看到 Zeabur 的控制台 (Dashboard)：</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#667eea] transform hover:-translate-y-2 transition-all">
          <div className="text-[36px] mb-3">📊</div>
          <h3 className="text-[28px] font-bold text-[#1e3c72] mb-3">Projects</h3>
          <p className="text-[22px] text-[#666]">管理所有專案，每個專案可包含多個服務（如 n8n、資料庫等）</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#f5576c] transform hover:-translate-y-2 transition-all">
          <div className="text-[36px] mb-3">🚀</div>
          <h3 className="text-[28px] font-bold text-[#1e3c72] mb-3">Deploy</h3>
          <p className="text-[22px] text-[#666]">快速部署服務的入口，支援 GitHub、模板等多種方式</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-[#43e97b] transform hover:-translate-y-2 transition-all">
          <div className="text-[36px] mb-3">⚙️</div>
          <h3 className="text-[28px] font-bold text-[#1e3c72] mb-3">Settings</h3>
          <p className="text-[22px] text-[#666]">帳戶設定、團隊管理、計費資訊等</p>
        </div>
      </div>

      <div className="bg-[#fff3cd] border border-[#ffc107] p-5 rounded-xl">
        <p className="text-[24px] text-[#856404]">
          <strong>💡 提示：</strong>初次使用建議先熟悉介面佈局，接下來我們會在 Projects 中建立 n8n 專案。
        </p>
      </div>
    </Slide>,

    // Slide 5: Phone Verification
    <Slide key="verify">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📱 重要：手機號碼驗證</h2>

      <div className="bg-[#ffebee] border-l-4 border-[#f44336] p-8 rounded-r-2xl mb-8">
        <div className="flex items-start gap-4">
          <Smartphone size={48} className="text-[#f44336] flex-shrink-0" />
          <div>
            <h3 className="text-[30px] font-bold text-[#c62828] mb-3">⚠️ 必須完成手機驗證</h3>
            <p className="text-[24px] text-[#d32f2f] leading-relaxed">
              Zeabur 的免費方案要求綁定手機號碼，以防止濫用。<br/>
              <strong>未完成驗證將無法部署任何服務！</strong>
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
        <h3 className="text-[26px] font-bold text-[#1e3c72] mb-6 flex items-center gap-2">
          <span className="bg-[#2196f3] text-white w-8 h-8 rounded-full flex items-center justify-center text-[24px]">!</span>
          驗證步驟
        </h3>

        <ol className="space-y-5 text-[24px]">
          <li className="flex items-start gap-3">
            <span className="bg-[#667eea] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">1</span>
            <div>
              <strong>進入帳戶設定</strong><br/>
              點擊右上角頭像 → <code className="bg-gray-100 px-2 py-1 rounded">Settings</code> → <code className="bg-gray-100 px-2 py-1 rounded">Account</code>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="bg-[#667eea] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">2</span>
            <div>
              <strong>找到手機驗證區塊</strong><br/>
              在 Account 頁面找到「Phone Verification」區域
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="bg-[#667eea] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">3</span>
            <div>
              <strong>輸入手機號碼</strong><br/>
              選擇國碼（台灣為 +886），輸入手機號碼（去掉開頭的 0）<br/>
              <span className="text-sm text-gray-600">例如：0912-345-678 → 輸入 912345678</span>
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="bg-[#667eea] text-white w-8 h-8 rounded-full flex items-center justify-center font-bold flex-shrink-0">4</span>
            <div>
              <strong>接收並輸入驗證碼</strong><br/>
              點擊「Send Code」，等待 SMS 驗證碼，輸入後點擊「Verify」
            </div>
          </li>

          <li className="flex items-start gap-3">
            <span className="bg-green-500 text-white w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0">
              <CheckCircle size={20} />
            </span>
            <div>
              <strong className="text-green-600">驗證成功！</strong><br/>
              看到綠色勾勾後，就可以開始部署服務了
            </div>
          </li>
        </ol>
      </div>
    </Slide>,

    // Slide 6: Free Plan Quota
    <Slide key="quota">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">💸 免費方案額度說明</h2>

      <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-8 rounded-2xl mb-8 shadow-xl">
        <div className="text-center mb-6">
          <div className="text-[64px] font-bold">$5</div>
          <p className="text-[30px]">每月免費額度（美金）</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-[28px] font-bold text-green-600 mb-4 flex items-center gap-2">
            ✅ 足夠運行的服務
          </h3>
          <ul className="space-y-3 text-[22px]">
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span><strong>n8n</strong>（主要服務，約 $2-3/月）</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span><strong>PostgreSQL</strong>（資料庫，約 $1-2/月）</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span>自動 HTTPS 憑證</span>
            </li>
            <li className="flex items-start gap-2">
              <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
              <span>免費域名 (.zeabur.app)</span>
            </li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-[28px] font-bold text-orange-600 mb-4 flex items-center gap-2">
            ⚠️ 注意事項
          </h3>
          <ul className="space-y-3 text-[22px]">
            <li className="flex items-start gap-2">
              <span className="text-orange-500 flex-shrink-0">⚡</span>
              <span>服務運行時才計費（按秒計算）</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 flex-shrink-0">⚡</span>
              <span>可在控制台隨時查看用量</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 flex-shrink-0">⚡</span>
              <span>超過 $5 後需綁定信用卡</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-orange-500 flex-shrink-0">⚡</span>
              <span>不用時可暫停服務節省額度</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-[#e8f5e9] border-l-4 border-[#4caf50] p-5 rounded-r-lg">
        <p className="text-[23px] text-[#2e7d32]">
          <strong>💡 省錢技巧：</strong>學習階段建議只運行 n8n + PostgreSQL，測試完成後可暫停服務，需要時再啟動！
        </p>
      </div>
    </Slide>,

    // Slide 7: Service Initialization Understanding
    <Slide key="init">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🚀 理解 Zeabur 專案架構</h2>
      <p className="text-[26px] text-[#444] mb-6">當你部署 n8n 時，Zeabur 會自動建立兩個相互連結的服務：</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
        <div className="bg-white p-6 rounded-2xl border-l-[6px] border-[#2a5298] shadow-md transform hover:scale-105 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <Database className="text-[#2a5298]" size={32} />
            <h3 className="text-[30px] font-bold text-[#1e3c72]">PostgreSQL</h3>
          </div>
          <p className="text-[24px] text-[#555] mb-4">n8n 的資料庫，用來儲存：</p>
          <ul className="space-y-2 text-[22px] text-[#666]">
            <li>✓ 工作流 (Workflows) 設定</li>
            <li>✓ 執行歷史紀錄</li>
            <li>✓ 憑證 (Credentials) 資料</li>
            <li>✓ 使用者帳號資訊</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-2xl border-l-[6px] border-[#ff4081] shadow-md transform hover:scale-105 transition-all">
          <div className="flex items-center gap-3 mb-3">
            <Server className="text-[#ff4081]" size={32} />
            <h3 className="text-[30px] font-bold text-[#1e3c72]">n8n Service</h3>
          </div>
          <p className="text-[24px] text-[#555] mb-4">n8n 的主要服務，包含：</p>
          <ul className="space-y-2 text-[22px] text-[#666]">
            <li>✓ 網頁管理介面 (UI)</li>
            <li>✓ Workflow 執行引擎</li>
            <li>✓ Webhook API 端點</li>
            <li>✓ 與 PostgreSQL 的連線</li>
          </ul>
        </div>
      </div>

      <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl flex items-start gap-3">
        <div className="mt-1">⚠️</div>
        <div>
          <strong className="block text-[24px] mb-1">等待初始化（可能顯示 UNKNOWN 狀態）</strong>
          <p className="text-[22px]">
            初次部署時可能會顯示 UNKNOWN 或 DEPLOYING 狀態，這是正常的。請耐心等待 1~3 分鐘，若超過 5 分鐘請重新整理網頁。
            當兩個服務都出現綠燈 <CheckCircle className="inline w-4 h-4 text-green-600"/> <strong>Running</strong> 狀態時，就代表部署成功！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 8: Common Issues
    <Slide key="troubleshooting">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔧 Part 1 常見問題排解</h2>

      <div className="space-y-5">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <h3 className="text-[26px] font-bold text-red-600 mb-3">❌ 問題1：無法點擊「Create Project」或「Deploy」</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>原因：</strong>尚未完成手機驗證</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong>回到「帳戶設定」完成手機號碼驗證（詳見第 5 頁）</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-[26px] font-bold text-orange-600 mb-3">⚠️ 問題2：收不到手機驗證碼</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>可能原因：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666] mb-2">
            <li>國碼選錯（台灣是 +886，不是 +86）</li>
            <li>手機號碼格式錯誤（應去掉開頭的 0）</li>
            <li>電信商封鎖國際簡訊</li>
          </ul>
          <p className="text-[22px] text-green-700"><strong>解決：</strong>確認格式正確後，等待 1-2 分鐘。若仍未收到，可嘗試其他手機號碼</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-[26px] font-bold text-blue-600 mb-3">💡 問題3：服務一直顯示 UNKNOWN 狀態</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>原因：</strong>服務正在初始化，需要時間</p>
          <p className="text-[22px] text-green-700"><strong>解決方法：</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-[21px] text-[#666]">
            <li>等待 2-3 分鐘</li>
            <li>重新整理瀏覽器頁面</li>
            <li>若超過 10 分鐘仍未啟動，點擊服務名稱進入詳細頁面，檢查「Events」和「Logs」</li>
            <li>必要時可刪除服務重新部署</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h3 className="text-[26px] font-bold text-purple-600 mb-3">🔋 問題4：擔心免費額度用完</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>監控方式：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666] mb-2">
            <li>在控制台右上角可看到當月用量</li>
            <li>點擊頭像 → Billing 可查看詳細帳單</li>
          </ul>
          <p className="text-[22px] text-green-700"><strong>省錢技巧：</strong>測試完成後，點擊服務進入詳細頁面，點擊右上角「...」→「Pause」暫停服務</p>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-5 rounded-xl text-center">
        <p className="text-[24px] mb-4">
          <strong>✅ Part 1 完成！</strong> 接下來進入 Part 2，我們將開始部署 n8n 服務
        </p>
        <Link href="/part/2">
          <a className="inline-flex items-center gap-2 bg-white text-[#667eea] px-6 py-3 rounded-lg font-bold text-[22px] hover:bg-gray-100 transition-colors">
            前往 Part 2：n8n 部署與初始化 <ArrowRight size={24} />
          </a>
        </Link>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 1: Zeabur 註冊與環境準備" slides={slides} />;
}
