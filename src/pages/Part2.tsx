import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { User, Globe, MousePointerClick, Rocket, Clock, CheckCircle, AlertTriangle, Package, Settings, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Part2() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">n8n Setup</h4>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[68px] font-bold mb-6">Part 2: n8n 部署與初始化</h1>
        <h2 className="text-[#666] text-[30px] md:text-[36px] font-normal border-none max-w-[800px]">
          一鍵部署你的自動化引擎
        </h2>
      </div>
    </Slide>,

    // Slide 2: Create Project
    <Slide key="create-project">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📁 步驟 1：建立新專案</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">在 Zeabur 控制台中建立一個新的專案，用來容納 n8n 服務：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">回到 Zeabur 控制台首頁</strong>
                <p className="text-[22px] text-[#666]">確認你已經完成手機驗證（Part 1）</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Create Project」按鈕</strong>
                <p className="text-[22px] text-[#666]">通常位於畫面右上角或中央位置</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">輸入專案名稱</strong>
                <p className="text-[22px] text-[#666] mb-3">建議命名為：<code className="bg-gray-100 px-3 py-1 rounded text-red-600">n8n-automation</code> 或 <code className="bg-gray-100 px-3 py-1 rounded text-red-600">my-n8n-project</code></p>
                <p className="text-[20px] text-amber-600">💡 專案名稱會影響服務的 URL，建議使用英文小寫和連字號</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">點擊「Create」完成建立</strong>
                <p className="text-[22px] text-[#666]">你會進入專案管理頁面</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 3: Choose n8n Template
    <Slide key="choose-template">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🎯 步驟 2：選擇 n8n 模板</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">Zeabur 提供預設模板，讓你一鍵部署 n8n + PostgreSQL：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">在專案頁面點擊「Deploy Service」</strong>
                <p className="text-[22px] text-[#666]">或點擊畫面中央的「+ Add Service」按鈕</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">選擇「Prebuilt」選項</strong>
                <p className="text-[22px] text-[#666] mb-3">會看到多種預建服務的選項</p>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-[21px] text-blue-700">💡 其他選項說明：</p>
                  <ul className="mt-2 space-y-1 text-[20px] text-blue-600">
                    <li>• <strong>Git</strong>：從 GitHub 部署（適合自己的程式碼）</li>
                    <li>• <strong>Marketplace</strong>：第三方服務市集</li>
                    <li>• <strong>Prebuilt</strong>：Zeabur 官方預建模板 ✅ 選這個</li>
                  </ul>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">搜尋並選擇「n8n」</strong>
                <p className="text-[22px] text-[#666] mb-3">在搜尋框輸入 <code className="bg-gray-100 px-3 py-1 rounded">n8n</code>，會看到 n8n 的卡片</p>
                <div className="bg-[#f8f9fa] border border-gray-200 p-4 rounded-lg flex items-start gap-4">
                  <Package size={48} className="text-[#ff4081] flex-shrink-0" />
                  <div>
                    <h4 className="text-[24px] font-bold text-[#1e3c72]">n8n</h4>
                    <p className="text-[20px] text-[#666]">Workflow automation platform with visual interface</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">點擊「Deploy」開始部署</strong>
                <p className="text-[22px] text-[#666]">Zeabur 會自動開始安裝 n8n 和 PostgreSQL</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 4: Deployment Process
    <Slide key="deployment">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">⏳ 步驟 3：等待部署完成</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444] mb-6">部署過程通常需要 2-5 分鐘，你會看到以下畫面：</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-yellow-500">
            <div className="flex items-center gap-3 mb-4">
              <Clock className="text-yellow-500" size={32} />
              <h3 className="text-[28px] font-bold text-[#1e3c72]">部署中 (DEPLOYING)</h3>
            </div>
            <p className="text-[22px] text-[#666] mb-3">服務狀態可能顯示：</p>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>🟡 <strong>DEPLOYING</strong> - 正在部署</li>
              <li>🟡 <strong>BUILDING</strong> - 正在建置</li>
              <li>🟡 <strong>STARTING</strong> - 正在啟動</li>
              <li>⚫ <strong>UNKNOWN</strong> - 初始化中</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
            <div className="flex items-center gap-3 mb-4">
              <CheckCircle className="text-green-500" size={32} />
              <h3 className="text-[28px] font-bold text-[#1e3c72]">部署成功 (RUNNING)</h3>
            </div>
            <p className="text-[22px] text-[#666] mb-3">當看到兩個服務都是綠燈：</p>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>🟢 <strong>n8n</strong> - Running</li>
              <li>🟢 <strong>PostgreSQL</strong> - Running</li>
            </ul>
            <div className="mt-4 bg-green-50 border border-green-200 p-3 rounded">
              <p className="text-[20px] text-green-700">✅ 恭喜！部署完成，可以進行下一步</p>
            </div>
          </div>
        </div>

        <div className="bg-[#fff3cd] border border-[#ffc107] p-5 rounded-xl">
          <div className="flex items-start gap-3">
            <AlertTriangle className="text-[#856404] flex-shrink-0 mt-1" size={24} />
            <div>
              <strong className="text-[24px] text-[#856404] block mb-2">等待期間注意事項：</strong>
              <ul className="space-y-1 text-[22px] text-[#856404]">
                <li>• 不要關閉瀏覽器分頁</li>
                <li>• 如果超過 10 分鐘仍未完成，請重新整理頁面</li>
                <li>• PostgreSQL 通常會比 n8n 更快啟動</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 5: Get Domain
    <Slide key="domain">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌐 步驟 4：取得 n8n 網址</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">部署完成後，Zeabur 會自動為 n8n 產生一個專屬網址：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊 n8n 服務卡片</strong>
                <p className="text-[22px] text-[#666]">在專案頁面找到標示 <code className="bg-gray-100 px-2 py-1 rounded">n8n</code> 的服務卡片並點擊</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">找到「Networking」區塊</strong>
                <p className="text-[22px] text-[#666] mb-3">在服務詳細頁面往下滾動，找到 Networking 或 Domain 設定區域</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Generate Domain」</strong>
                <p className="text-[22px] text-[#666] mb-3">如果尚未產生網址，點擊按鈕自動產生</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-[21px] text-blue-700">生成的網址格式通常為：</p>
                  <code className="block mt-2 bg-white px-4 py-3 rounded text-[22px] text-blue-600 border border-blue-200">
                    https://n8n-xxxx.zeabur.app
                  </code>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">複製並儲存這個網址</strong>
                <p className="text-[22px] text-[#666]">這就是你的 n8n 管理介面網址，建議先複製到記事本！</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-purple-50 border border-purple-300 p-5 rounded-xl">
          <p className="text-[22px] text-purple-800">
            <strong>📌 重要：</strong>這個網址後續會用來：<br/>
            • 登入 n8n 管理介面<br/>
            • 設定 LINE Bot Webhook<br/>
            • 測試工作流程
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 6: Open n8n
    <Slide key="open">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌐 步驟 5：首次開啟 n8n</h2>

      <div className="space-y-6">
        <div className="flex flex-col items-center justify-center gap-10">
          <div className="bg-white p-8 rounded-full shadow-[0_0_40px_rgba(30,60,114,0.1)]">
             <MousePointerClick size={80} className="text-[#4facfe]" />
          </div>

          <div className="text-center max-w-[800px]">
            <p className="text-[30px] mb-6">
              在瀏覽器中開啟剛才取得的 n8n 網址：
            </p>
            <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-6 rounded-2xl shadow-xl">
              <code className="text-[28px]">https://n8n-xxxx.zeabur.app</code>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
            <h3 className="text-[26px] font-bold text-green-600 mb-3">✅ 正常情況</h3>
            <p className="text-[22px] text-[#666]">會看到 n8n 的歡迎畫面或設定頁面</p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
            <h3 className="text-[26px] font-bold text-red-600 mb-3">❌ 無法開啟</h3>
            <p className="text-[22px] text-[#666] mb-2">可能原因：</p>
            <ul className="text-[20px] text-[#666] space-y-1">
              <li>• 服務尚未完全啟動（等待 1-2 分鐘）</li>
              <li>• 網址複製錯誤</li>
              <li>• 部署失敗（查看 Events/Logs）</li>
            </ul>
          </div>
        </div>

        <div className="box info bg-[#e3f2fd] border-l-4 border-[#2196f3] text-[#0d47a1] p-5 rounded-r-lg">
          <strong>💡 提示：</strong> 建議將這個網址加入瀏覽器書籤，方便日後快速存取 n8n 管理介面！
        </div>
      </div>
    </Slide>,

    // Slide 7: Admin Setup
    <Slide key="admin">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">👤 步驟 6：設定管理員帳號</h2>
      <p className="text-[26px] text-[#444] mb-8">第一次進入 n8n 時，需要建立管理員帳號（只需設定一次）：</p>

      <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] max-w-[900px] mx-auto shadow-lg">
        <h3 className="text-center text-[28px] font-bold text-[#1e3c72] mb-6 flex items-center justify-center gap-2">
          <User /> Owner Account Setup
        </h3>

        <div className="space-y-6">
          <div className="flex flex-col gap-2">
            <label className="text-[24px] font-semibold text-[#555]">Email *</label>
            <input
              type="text"
              disabled
              value="your-email@example.com"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500"
            />
            <p className="text-sm text-gray-500">📧 用於登入 n8n 管理介面的帳號（請填寫你的真實 Email）</p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col gap-2">
              <label className="text-[24px] font-semibold text-[#555]">First Name *</label>
              <input
                type="text"
                disabled
                value="Your"
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500"
              />
              <p className="text-sm text-gray-500">名字（可隨意填寫）</p>
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-[24px] font-semibold text-[#555]">Last Name</label>
              <input
                type="text"
                disabled
                value="Name"
                className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500"
              />
              <p className="text-sm text-gray-500">姓氏（選填）</p>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-[24px] font-semibold text-[#555]">Password *</label>
            <input
              type="password"
              disabled
              value="••••••••"
              className="w-full p-3 rounded-lg border border-gray-300 bg-gray-100 text-gray-500"
            />
            <p className="text-sm text-gray-500">🔒 設定密碼（至少 8 個字元，請務必記住！）</p>
          </div>
        </div>

        <div className="mt-8 bg-green-50 border border-green-200 p-4 rounded-lg">
          <p className="text-[22px] text-green-700 flex items-center gap-2">
            <CheckCircle size={20} />
            填寫完畢後，點擊 <strong>「Next」或「Get Started」</strong> 進入 n8n！
          </p>
        </div>
      </div>

      <div className="text-center mt-8">
        <div className="bg-amber-50 border border-amber-300 p-4 rounded-xl inline-block">
          <p className="text-[22px] text-amber-800">
            ⚠️ <strong>重要：</strong>請記住你的 Email 和密碼，之後每次登入都需要使用！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 8: n8n Interface Tour
    <Slide key="interface">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🎨 n8n 介面導覽</h2>

      <p className="text-[26px] text-[#444] mb-6">完成帳號設定後，你會看到 n8n 的主介面：</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-purple-500 transform hover:-translate-y-1 transition-all">
          <div className="text-[36px] mb-3">📋</div>
          <h3 className="text-[26px] font-bold text-[#1e3c72] mb-2">Workflows</h3>
          <p className="text-[21px] text-[#666]">管理所有自動化工作流程，這是你最常使用的功能</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-blue-500 transform hover:-translate-y-1 transition-all">
          <div className="text-[36px] mb-3">🔐</div>
          <h3 className="text-[26px] font-bold text-[#1e3c72] mb-2">Credentials</h3>
          <p className="text-[21px] text-[#666]">儲存 API 金鑰、帳號密碼等憑證（等等會用到）</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-green-500 transform hover:-translate-y-1 transition-all">
          <div className="text-[36px] mb-3">⚡</div>
          <h3 className="text-[26px] font-bold text-[#1e3c72] mb-2">Executions</h3>
          <p className="text-[21px] text-[#666]">查看工作流的執行歷史和除錯資訊</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-red-500 transform hover:-translate-y-1 transition-all">
          <div className="text-[36px] mb-3">⚙️</div>
          <h3 className="text-[26px] font-bold text-[#1e3c72] mb-2">Settings</h3>
          <p className="text-[21px] text-[#666]">n8n 的全域設定（通常不需要更改）</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-yellow-500 transform hover:-translate-y-1 transition-all">
          <div className="text-[36px] mb-3">📚</div>
          <h3 className="text-[26px] font-bold text-[#1e3c72] mb-2">Templates</h3>
          <p className="text-[21px] text-[#666]">官方提供的工作流模板，可直接匯入使用</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-t-4 border-orange-500 transform hover:-translate-y-1 transition-all">
          <div className="text-[36px] mb-3">❓</div>
          <h3 className="text-[26px] font-bold text-[#1e3c72] mb-2">Help</h3>
          <p className="text-[21px] text-[#666]">官方文件、社群論壇和支援資源</p>
        </div>
      </div>

      <div className="mt-6 bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
        <p className="text-[23px] text-blue-800">
          <strong>🎯 接下來：</strong>我們會在 <strong>Workflows</strong> 中建立自動化流程，在 <strong>Credentials</strong> 中設定 LINE Bot 的金鑰！
        </p>
      </div>
    </Slide>,

    // Slide 9: Canvas Basics
    <Slide key="canvas">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🎯 認識 n8n Canvas（畫布）</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">點擊「Workflows」→「Add Workflow」，你會看到 n8n 的核心：<strong>Canvas（畫布）</strong></p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-300 shadow-inner">
          <div className="text-center mb-6">
            <h3 className="text-[30px] font-bold text-[#1e3c72]">Canvas = 工作流程設計區域</h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-[40px] mb-2">➕</div>
              <h4 className="text-[22px] font-bold text-[#1e3c72]">新增節點 (Node)</h4>
              <p className="text-[19px] text-[#666] mt-2">點擊「+」按鈕選擇功能節點</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-[40px] mb-2">🔗</div>
              <h4 className="text-[22px] font-bold text-[#1e3c72]">連接節點</h4>
              <p className="text-[19px] text-[#666] mt-2">拖曳節點之間的連接點</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow-sm text-center">
              <div className="text-[40px] mb-2">▶️</div>
              <h4 className="text-[22px] font-bold text-[#1e3c72]">執行測試</h4>
              <p className="text-[19px] text-[#666] mt-2">點擊右上角「Execute Workflow」</p>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl border border-gray-200">
            <h4 className="text-[24px] font-bold text-[#1e3c72] mb-3">🎓 基本操作技巧：</h4>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>• <strong>拖曳畫布：</strong>按住滑鼠左鍵移動視角</li>
              <li>• <strong>縮放：</strong>使用滑鼠滾輪或右下角的縮放按鈕</li>
              <li>• <strong>刪除節點：</strong>選中節點後按 Delete 鍵</li>
              <li>• <strong>複製節點：</strong>Ctrl+C / Ctrl+V（Mac: Cmd+C / Cmd+V）</li>
              <li>• <strong>儲存工作流：</strong>Ctrl+S 或點擊右上角「Save」</li>
            </ul>
          </div>
        </div>

        <div className="bg-purple-50 border-l-4 border-purple-500 p-5 rounded-r-lg">
          <p className="text-[22px] text-purple-800">
            <strong>💡 提示：</strong>先不用急著建立工作流，在 Part 3 我們會設定 LINE Bot 憑證後，再回來建立第一個自動化流程！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 10: Troubleshooting
    <Slide key="troubleshooting">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔧 Part 2 常見問題排解</h2>

      <div className="space-y-5">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <h3 className="text-[26px] font-bold text-red-600 mb-3">❌ 問題1：找不到 n8n 模板</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>可能原因：</strong>選錯了部署方式</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong>確認選擇「Prebuilt」選項，而不是「Git」或其他選項</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-[26px] font-bold text-orange-600 mb-3">⚠️ 問題2：部署後無法開啟 n8n 網址（顯示 404 或無法連線）</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>可能原因：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666] mb-2">
            <li>服務尚未完全啟動（等待 1-2 分鐘再試）</li>
            <li>忘記產生 Domain 網址</li>
            <li>部署過程中發生錯誤</li>
          </ul>
          <p className="text-[22px] text-green-700"><strong>解決：</strong>進入 n8n 服務詳細頁面，檢查「Events」和「Logs」查看錯誤訊息</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-[26px] font-bold text-blue-600 mb-3">💡 問題3：忘記管理員密碼</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>說明：</strong>首次設定的密碼儲存在 PostgreSQL 資料庫中</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-[21px] text-[#666]">
            <li>最簡單的方法：刪除整個專案重新部署（會失去所有資料）</li>
            <li>進階方法：使用 Zeabur 的 Terminal 連接 PostgreSQL 重設密碼（需要 SQL 知識）</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h3 className="text-[26px] font-bold text-purple-600 mb-3">🔍 問題4：PostgreSQL 和 n8n 無法連線</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>症狀：</strong>n8n 顯示資料庫連線錯誤</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666]">
            <li>確認兩個服務都在同一個 Zeabur Project 中</li>
            <li>使用 Zeabur 的 n8n 模板會自動設定連線，通常不會有這個問題</li>
            <li>若仍有問題，刪除服務重新部署</li>
          </ul>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-5 rounded-xl text-center">
        <p className="text-[24px] mb-4">
          <strong>✅ Part 2 完成！</strong> n8n 已成功部署，接下來進入 Part 3 設定 LINE Bot
        </p>
        <Link href="/part/3">
          <a className="inline-flex items-center gap-2 bg-white text-[#667eea] px-6 py-3 rounded-lg font-bold text-[22px] hover:bg-gray-100 transition-colors">
            前往 Part 3：LINE Developer 設定 <ArrowRight size={24} />
          </a>
        </Link>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 2: n8n 部署與初始化" slides={slides} />;
}
