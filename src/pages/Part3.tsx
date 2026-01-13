import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { Key, MessageSquare, ShieldCheck, ExternalLink, Copy, Eye, EyeOff, CheckCircle, AlertTriangle, Settings } from "lucide-react";

export default function Part3() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">LINE Integration</h4>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[68px] font-bold mb-6">Part 3: LINE Developer 設定</h1>
        <h2 className="text-[#666] text-[30px] md:text-[36px] font-normal border-none max-w-[800px]">
          取得 LINE Bot 的控制權限
        </h2>
      </div>
    </Slide>,

    // Slide 2: What is LINE Messaging API
    <Slide key="what-is-line-api">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🤖 什麼是 LINE Messaging API？</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#06c755] to-[#00b900] text-white p-8 rounded-2xl shadow-xl text-center">
          <div className="text-[64px] mb-4">💬</div>
          <h3 className="text-[36px] font-bold mb-3">LINE Messaging API</h3>
          <p className="text-[24px]">讓你的程式能夠控制 LINE Bot 收發訊息的介面</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-[28px] font-bold text-green-600 mb-4">✅ 可以做什麼？</h3>
            <ul className="space-y-3 text-[22px] text-[#666]">
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span><strong>接收訊息：</strong>當用戶傳訊息給 Bot 時，你的 n8n 會收到通知</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span><strong>發送回應：</strong>Bot 可以自動回覆文字、圖片、按鈕等訊息</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span><strong>主動推播：</strong>在特定時間主動發送訊息給用戶</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle size={20} className="text-green-500 flex-shrink-0 mt-1" />
                <span><strong>客製化互動：</strong>根據用戶輸入執行不同的自動化流程</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-[28px] font-bold text-blue-600 mb-4">🔑 需要什麼？</h3>
            <ul className="space-y-3 text-[22px] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 flex-shrink-0 mt-1">1️⃣</span>
                <span><strong>LINE 帳號：</strong>任何 LINE 帳號都可以（免費）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 flex-shrink-0 mt-1">2️⃣</span>
                <span><strong>Developer 帳號：</strong>在 LINE Developers Console 註冊</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 flex-shrink-0 mt-1">3️⃣</span>
                <span><strong>建立 Channel：</strong>一個 Channel = 一個 Bot</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 flex-shrink-0 mt-1">4️⃣</span>
                <span><strong>取得金鑰：</strong>Access Token 和 Channel Secret</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-amber-800">
            <strong>💡 重點：</strong>我們會在 LINE Developers Console 建立一個 Bot，取得金鑰後，n8n 就能透過 API 控制這個 Bot！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 3: Register LINE Developers
    <Slide key="register">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📝 步驟 1：註冊 LINE Developers</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">首先需要註冊 LINE Developers Console 帳號：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">開啟 LINE Developers Console</strong>
                <a
                  href="https://developers.line.biz/console/"
                  target="_blank"
                  className="text-blue-600 hover:underline inline-flex items-center gap-1"
                >
                  https://developers.line.biz/console/ <ExternalLink size={18} />
                </a>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">使用 LINE 帳號登入</strong>
                <p className="text-[22px] text-[#666] mb-3">點擊「Log in」，使用你的 LINE 帳號登入</p>
                <div className="bg-blue-50 border border-blue-200 p-4 rounded-lg">
                  <p className="text-[21px] text-blue-700">💡 可以掃描 QR Code 或輸入帳號密碼登入</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">同意服務條款</strong>
                <p className="text-[22px] text-[#666]">第一次登入會要求同意「LINE Developers Agreement」，點擊同意即可</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">填寫開發者資訊（選填）</strong>
                <p className="text-[22px] text-[#666] mb-2">可能會要求填寫姓名、Email 等資訊，照實填寫即可</p>
                <p className="text-[20px] text-gray-500">這些資訊不會顯示給 Bot 的使用者</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">完成註冊！</strong>
                <p className="text-[22px] text-[#666]">成功進入 LINE Developers Console 控制台</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 4: Create Provider
    <Slide key="create-provider">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🏢 步驟 2：建立 Provider（提供者）</h2>

      <div className="space-y-6">
        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
          <p className="text-[24px] text-blue-800">
            <strong>📌 什麼是 Provider？</strong><br/>
            Provider 相當於「公司」或「組織」，一個 Provider 下可以建立多個 Bot (Channel)
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Create」按鈕</strong>
                <p className="text-[22px] text-[#666]">在 Console 首頁找到「Create a new provider」或「Create Provider」</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">輸入 Provider 名稱</strong>
                <p className="text-[22px] text-[#666] mb-3">例如：<code className="bg-gray-100 px-3 py-1 rounded text-red-600">My Bot Company</code> 或 <code className="bg-gray-100 px-3 py-1 rounded text-red-600">個人測試</code></p>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded">
                  <p className="text-[20px] text-amber-700">💡 Provider 名稱不會顯示給用戶，可隨意命名</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">點擊「Create」完成建立</strong>
                <p className="text-[22px] text-[#666]">Provider 建立完成後，會自動進入 Provider 管理頁面</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-purple-50 border border-purple-300 p-5 rounded-xl">
          <p className="text-[22px] text-purple-800">
            <strong>🎯 接下來：</strong>在這個 Provider 下建立 Messaging API Channel（你的 LINE Bot）
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 5: Create Channel
    <Slide key="create-channel">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🤖 步驟 3：建立 Messaging API Channel</h2>

      <div className="space-y-6">
        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
          <p className="text-[24px] text-green-800">
            <strong>📌 Channel = 你的 LINE Bot</strong><br/>
            每個 Channel 就是一個獨立的 LINE Bot，有自己的 ID、名稱、頭像
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[23px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Create a Messaging API channel」</strong>
                <p className="text-[22px] text-[#666]">在 Provider 頁面選擇「Messaging API」類型</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">填寫 Channel 基本資訊</strong>
                <div className="mt-3 space-y-3 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <strong className="text-[22px] text-[#555]">Channel name *（Bot 名稱）</strong>
                    <p className="text-[20px] text-[#666]">例如：<code className="bg-white px-2 py-1 rounded text-red-600">天氣查詢小幫手</code></p>
                    <p className="text-[19px] text-amber-600 mt-1">⚠️ 這會顯示給用戶看，建議取個好記的名字</p>
                  </div>

                  <div>
                    <strong className="text-[22px] text-[#555]">Channel description *（描述）</strong>
                    <p className="text-[20px] text-[#666]">例如：<code className="bg-white px-2 py-1 rounded text-red-600">提供即時天氣查詢服務</code></p>
                  </div>

                  <div>
                    <strong className="text-[22px] text-[#555]">Category *（類別）</strong>
                    <p className="text-[20px] text-[#666]">選擇 <strong>Lifestyle</strong> 或其他適合的類別</p>
                  </div>

                  <div>
                    <strong className="text-[22px] text-[#555]">Subcategory *（子類別）</strong>
                    <p className="text-[20px] text-[#666]">根據類別選擇，例如 <strong>Other</strong></p>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">填寫聯絡資訊</strong>
                <div className="mt-3 space-y-2 text-[21px] text-[#666]">
                  <p>• <strong>Email address：</strong>你的 Email（不會公開）</p>
                  <p>• <strong>Privacy policy URL：</strong>隱私權政策網址（可選填）</p>
                  <p>• <strong>Terms of use URL：</strong>使用條款網址（可選填）</p>
                  <div className="bg-blue-50 border border-blue-200 p-3 rounded mt-2">
                    <p className="text-[20px] text-blue-700">💡 測試用途可以不填 URL，直接跳過</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">同意條款並建立</strong>
                <p className="text-[22px] text-[#666] mb-2">勾選「I have read and agree to the...」</p>
                <p className="text-[22px] text-[#666]">點擊「Create」按鈕</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">Channel 建立完成！</strong>
                <p className="text-[22px] text-[#666]">你的 LINE Bot 已經誕生，接下來要取得控制金鑰</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 6: Get Channel Secret
    <Slide key="channel-secret">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔐 步驟 4：取得 Channel Secret</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">Channel Secret 是驗證訊息來源的密鑰，讓 n8n 確認訊息確實來自 LINE：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">進入 Channel 設定頁面</strong>
                <p className="text-[22px] text-[#666]">點擊剛才建立的 Channel 名稱，進入管理頁面</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">切換到「Basic settings」分頁</strong>
                <p className="text-[22px] text-[#666]">在頁面上方找到「Basic settings」標籤並點擊</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">找到「Channel secret」區塊</strong>
                <p className="text-[22px] text-[#666] mb-3">往下滾動，找到標示為「Channel secret」的欄位</p>
                <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg flex items-center gap-3">
                  <Eye className="text-gray-500" size={24} />
                  <div className="flex-1">
                    <p className="text-[20px] text-gray-600 mb-1">Channel secret</p>
                    <code className="text-[22px] text-gray-800 font-mono">••••••••••••••••••••••••••••••••</code>
                  </div>
                  <Copy className="text-gray-500 cursor-pointer hover:text-gray-700" size={20} />
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">點擊「複製」按鈕</strong>
                <p className="text-[22px] text-[#666] mb-3">將 Channel Secret 複製並暫存到記事本</p>
                <div className="bg-red-50 border border-red-300 p-3 rounded">
                  <p className="text-[20px] text-red-700">⚠️ <strong>重要：</strong>不要外流這個密鑰，任何人取得都能冒充你的 Bot！</p>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-blue-800">
            <strong>📋 暫存格式建議：</strong><br/>
            Channel Secret: [貼上你複製的密鑰]
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 7: Get Channel Access Token
    <Slide key="access-token">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔑 步驟 5：取得 Channel Access Token</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">Channel Access Token 是控制 Bot 的鑰匙，讓 n8n 能發送訊息：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">切換到「Messaging API」分頁</strong>
                <p className="text-[22px] text-[#666]">在 Channel 管理頁面上方找到「Messaging API」標籤</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">找到「Channel access token」區塊</strong>
                <p className="text-[22px] text-[#666] mb-3">往下滾動到「Channel access token (long-lived)」</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Issue」按鈕</strong>
                <p className="text-[22px] text-[#666] mb-3">如果尚未產生 Token，點擊「Issue」產生新的 Token</p>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded">
                  <p className="text-[20px] text-amber-700">💡 如果已經有 Token，會直接顯示，不需要再次產生</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">確認產生 Token</strong>
                <p className="text-[22px] text-[#666] mb-3">會出現確認對話框，點擊「OK」或「Issue」確認</p>
                <div className="bg-gray-100 border border-gray-300 p-4 rounded-lg">
                  <p className="text-[20px] text-gray-600 mb-2">Channel access token (long-lived)</p>
                  <code className="text-[19px] text-gray-800 font-mono break-all">
                    eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ
                  </code>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">複製 Access Token</strong>
                <p className="text-[22px] text-[#666] mb-3">點擊 Token 旁邊的複製按鈕，暫存到記事本</p>
                <div className="bg-red-50 border border-red-300 p-3 rounded">
                  <p className="text-[20px] text-red-700">⚠️ <strong>注意：</strong>Token 很長（100+ 字元），確保完整複製！</p>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-green-800">
            <strong>✅ 完成！</strong>現在你已經取得兩把鑰匙：<br/>
            • Channel Secret（驗證用）<br/>
            • Channel Access Token（控制用）
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 8: Disable Auto Reply
    <Slide key="disable-auto-reply">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔕 步驟 6：關閉自動回應</h2>

      <div className="space-y-6">
        <div className="bg-red-50 border-l-4 border-red-500 p-5 rounded-r-lg">
          <p className="text-[24px] text-red-800">
            <strong>⚠️ 重要步驟！</strong><br/>
            必須關閉 LINE 的預設自動回應，否則會跟 n8n 的回應衝突
          </p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">在「Messaging API」分頁往下滾動</strong>
                <p className="text-[22px] text-[#666]">找到「Auto-reply messages」和「Greeting messages」區塊</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">關閉「Auto-reply messages」</strong>
                <p className="text-[22px] text-[#666] mb-3">將開關切換為 <strong className="text-red-600">Disabled</strong></p>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                  <span className="text-[22px]">Auto-reply messages</span>
                  <div className="bg-gray-400 w-12 h-6 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">關閉「Greeting messages」（歡迎訊息）</strong>
                <p className="text-[22px] text-[#666] mb-3">也將開關切換為 <strong className="text-red-600">Disabled</strong></p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">確認都已關閉</strong>
                <p className="text-[22px] text-[#666]">兩個開關都應該是灰色（Disabled）狀態</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-blue-50 border border-blue-300 p-5 rounded-xl">
          <p className="text-[22px] text-blue-800">
            <strong>💡 為什麼要關閉？</strong><br/>
            如果不關閉，當用戶傳訊息時：<br/>
            • LINE 會自動回應預設訊息<br/>
            • n8n 也會回應你設定的訊息<br/>
            → 用戶會收到兩則訊息，造成困擾！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 9: Add LINE Credentials in n8n
    <Slide key="n8n-credentials">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔐 步驟 7：在 n8n 建立 LINE 憑證</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">現在把剛才取得的金鑰填入 n8n，讓 n8n 能控制你的 LINE Bot：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">回到 n8n 管理介面</strong>
                <p className="text-[22px] text-[#666]">開啟你的 n8n 網址（Part 2 取得的 zeabur.app 網址）</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊左側選單的「Credentials」</strong>
                <p className="text-[22px] text-[#666] mb-3">進入憑證管理頁面</p>
                <div className="bg-gray-50 p-4 rounded-lg flex items-center gap-3">
                  <Key className="text-purple-600" size={32} />
                  <span className="text-[24px] font-semibold">Credentials</span>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Add Credential」按鈕</strong>
                <p className="text-[22px] text-[#666]">在右上角找到「Add Credential」或「+ Add Credential」</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">搜尋「LINE」</strong>
                <p className="text-[22px] text-[#666] mb-3">在搜尋框輸入 <code className="bg-gray-100 px-2 py-1 rounded">LINE</code></p>
                <p className="text-[22px] text-[#666]">選擇 <strong className="text-green-600">「LINE Messaging API」</strong></p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">5</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">填入金鑰</strong>
                <div className="mt-3 space-y-4 bg-gray-50 p-5 rounded-lg">
                  <div>
                    <label className="text-[22px] font-semibold text-[#555] block mb-2">Credential Name</label>
                    <input
                      type="text"
                      disabled
                      value="LINE Bot"
                      className="w-full p-3 rounded border border-gray-300 bg-gray-100 text-gray-600"
                    />
                    <p className="text-[19px] text-gray-500 mt-1">給這個憑證取個名字（可隨意命名）</p>
                  </div>

                  <div>
                    <label className="text-[22px] font-semibold text-[#555] block mb-2">Channel Access Token *</label>
                    <input
                      type="text"
                      disabled
                      placeholder="貼上你的 Channel Access Token"
                      className="w-full p-3 rounded border border-gray-300 bg-gray-100 text-gray-600"
                    />
                    <p className="text-[19px] text-red-600 mt-1">⚠️ 貼上 Part 3 步驟 5 取得的長字串</p>
                  </div>

                  <div>
                    <label className="text-[22px] font-semibold text-[#555] block mb-2">Channel Secret *</label>
                    <input
                      type="text"
                      disabled
                      placeholder="貼上你的 Channel Secret"
                      className="w-full p-3 rounded border border-gray-300 bg-gray-100 text-gray-600"
                    />
                    <p className="text-[19px] text-red-600 mt-1">⚠️ 貼上 Part 3 步驟 4 取得的密鑰</p>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">點擊「Save」儲存</strong>
                <p className="text-[22px] text-[#666]">確認兩個欄位都已填入後，點擊「Save」按鈕</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-green-800">
            <strong>🎉 完成！</strong>n8n 現在擁有控制你的 LINE Bot 的權限了！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 10: Test Credentials
    <Slide key="test">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">✅ 步驟 8：測試憑證是否正確</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">確認憑證設定是否成功：</p>

        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4">驗證方式：</h3>
          <div className="space-y-4">
            <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
              <h4 className="text-[24px] font-bold text-green-700 mb-2">✅ 憑證儲存成功</h4>
              <p className="text-[21px] text-green-600">• 在 Credentials 頁面看到「LINE Bot」憑證</p>
              <p className="text-[21px] text-green-600">• 點擊憑證可以再次編輯（但看不到完整 Token，只會顯示 ****）</p>
            </div>

            <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
              <h4 className="text-[24px] font-bold text-blue-700 mb-2">💡 完整測試在 Part 4</h4>
              <p className="text-[21px] text-blue-600">• 真正的測試會在 Part 4 進行</p>
              <p className="text-[21px] text-blue-600">• 那時會建立 Workflow 並實際發送/接收訊息</p>
            </div>
          </div>
        </div>

        <div className="bg-amber-50 border border-amber-300 p-5 rounded-xl">
          <h3 className="text-[24px] font-bold text-amber-800 mb-3">⚠️ 如果填錯怎麼辦？</h3>
          <ol className="list-decimal pl-6 space-y-2 text-[21px] text-amber-700">
            <li>回到 Credentials 頁面</li>
            <li>點擊「LINE Bot」憑證旁的編輯按鈕</li>
            <li>重新貼上正確的 Token 和 Secret</li>
            <li>點擊「Save」更新</li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 11: Get Bot QR Code
    <Slide key="qr-code">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📱 步驟 9：加入 Bot 好友</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">在測試之前，先用你的 LINE 帳號加入這個 Bot 成為好友：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">回到 LINE Developers Console</strong>
                <p className="text-[22px] text-[#666]">進入你的 Channel 管理頁面</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">在「Messaging API」分頁找到 QR Code</strong>
                <p className="text-[22px] text-[#666] mb-3">往下滾動找到「Bot basic ID」區塊，會看到：</p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <p className="text-[20px] text-gray-600">Bot basic ID</p>
                      <code className="text-[22px] text-gray-800 font-mono">@123abcde</code>
                    </div>
                    <div className="w-24 h-24 bg-gray-200 flex items-center justify-center rounded">
                      <span className="text-gray-400">QR Code</span>
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">用 LINE 掃描 QR Code</strong>
                <p className="text-[22px] text-[#666] mb-2">有兩種方式加入好友：</p>
                <ul className="space-y-2 text-[21px] text-[#666]">
                  <li>• <strong>方法 1：</strong>打開手機 LINE，掃描畫面上的 QR Code</li>
                  <li>• <strong>方法 2：</strong>在 LINE 搜尋欄輸入 Bot basic ID（例如 @123abcde）</li>
                </ul>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">點擊「加入好友」</strong>
                <p className="text-[22px] text-[#666]">成功後，這個 Bot 會出現在你的 LINE 好友列表中</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-purple-50 border border-purple-300 p-5 rounded-xl">
          <p className="text-[22px] text-purple-800">
            <strong>💡 提示：</strong>現在傳訊息給 Bot 還不會有回應（因為還沒設定 Webhook），在 Part 4 設定完成後就能對話了！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 12: Troubleshooting
    <Slide key="troubleshooting">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔧 Part 3 常見問題排解</h2>

      <div className="space-y-5">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <h3 className="text-[26px] font-bold text-red-600 mb-3">❌ 問題1：找不到「Channel access token」</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>可能原因：</strong>在錯誤的分頁</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong>確認你在「Messaging API」分頁，不是「Basic settings」</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-[26px] font-bold text-orange-600 mb-3">⚠️ 問題2：n8n 找不到「LINE Messaging API」憑證類型</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>可能原因：</strong>搜尋關鍵字錯誤或拼錯</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666]">
            <li>搜尋「LINE」而不是「Line」或「line」</li>
            <li>確保 n8n 版本是最新的（Zeabur 模板通常是最新版）</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-[26px] font-bold text-blue-600 mb-3">💡 問題3：Token 複製不完整</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>症狀：</strong>Token 應該有 100+ 字元，但只複製到一半</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666]">
            <li>使用複製按鈕而不是手動選取</li>
            <li>貼到記事本檢查是否完整（應該沒有換行）</li>
            <li>確認前後沒有多餘的空格</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h3 className="text-[26px] font-bold text-purple-600 mb-3">🔍 問題4：忘記關閉自動回應</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>症狀：</strong>用戶收到重複的回應訊息</p>
          <p className="text-[22px] text-green-700"><strong>解決：</strong>回到 LINE Developers Console，確認「Auto-reply messages」和「Greeting messages」都是 Disabled</p>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h3 className="text-[26px] font-bold text-green-600 mb-3">📱 問題5：找不到 Bot 的 QR Code</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>位置：</strong>在「Messaging API」分頁，往下滾動找到「Bot basic ID」區塊</p>
          <p className="text-[22px] text-green-700"><strong>替代方式：</strong>複製 Bot basic ID（如 @123abcde），在 LINE 搜尋欄直接搜尋</p>
        </div>
      </div>

      <div className="mt-6 bg-gradient-to-r from-[#06c755] to-[#00b900] text-white p-5 rounded-xl text-center">
        <p className="text-[24px]">
          <strong>✅ Part 3 完成！</strong> LINE Bot 憑證已設定完成，接下來進入 Part 4 串接 n8n 和 LINE
        </p>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 3: LINE Developer 設定" slides={slides} />;
}
