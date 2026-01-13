import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { Download, Upload, Settings, Cloud, Rss, BarChart3, AlertCircle, CheckCircle2, Smartphone, Code, Database, Globe, Zap, FileJson, Play, Bug, Lightbulb, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Part5() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">Advanced Workflows</h4>
        <h1 className="text-[#1e3c72] text-[64px] md:text-[68px] font-bold mb-6">Part 5: 實戰案例與延伸應用</h1>
        <h2 className="text-[#666] text-[30px] md:text-[36px] font-normal border-none max-w-[900px]">
          3 個超實用工作流模板，立即匯入使用！
        </h2>
        <div className="flex gap-6 mt-10">
          <span className="bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] px-6 py-3 rounded-xl text-[#004d40] font-bold text-[24px] flex items-center gap-2">
            🌤️ 天氣查詢
          </span>
          <span className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] px-6 py-3 rounded-xl text-[#8b4513] font-bold text-[24px] flex items-center gap-2">
            📰 RSS 爬蟲
          </span>
          <span className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3] px-6 py-3 rounded-xl text-[#1e3c72] font-bold text-[24px] flex items-center gap-2">
            📊 每日摘要
          </span>
        </div>
      </div>
    </Slide>,

    // Slide 2: 下載模板
    <Slide key="download">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📥 步驟 1：下載工作流模板</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
          <p className="text-[26px] text-[#333] leading-relaxed">
            我們準備了 <strong className="text-[#667eea]">3 個實用的工作流模板</strong>，你可以直接下載並匯入到 n8n 中使用！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* 模板 1 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-[#06c755] shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="text-[56px] mb-2">🌤️</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">LINE 天氣查詢</h3>
            </div>
            <p className="text-[22px] text-[#666] mb-4 text-center">
              問 LINE Bot 台灣天氣<br/>立即回覆即時氣象
            </p>
            <a
              href="https://raw.githubusercontent.com/ChatGPT3a01/zeabur-n8n-linebot-guide/master/download/n8n_問Line天氣模板.json"
              download
              className="block w-full bg-gradient-to-r from-[#06c755] to-[#05a647] text-white py-3 rounded-xl font-bold text-center hover:opacity-90 transition-opacity text-[22px]"
            >
              📥 下載模板
            </a>
          </div>

          {/* 模板 2 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-[#ff6b35] shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="text-[56px] mb-2">📰</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">RSS 爬蟲</h3>
            </div>
            <p className="text-[22px] text-[#666] mb-4 text-center">
              自動訂閱 RSS<br/>定時抓取最新文章
            </p>
            <a
              href="https://raw.githubusercontent.com/ChatGPT3a01/zeabur-n8n-linebot-guide/master/download/n8n_RSS爬蟲工作流.json"
              download
              className="block w-full bg-gradient-to-r from-[#ff6b35] to-[#f7931e] text-white py-3 rounded-xl font-bold text-center hover:opacity-90 transition-opacity text-[22px]"
            >
              📥 下載模板
            </a>
          </div>

          {/* 模板 3 */}
          <div className="bg-white p-6 rounded-2xl border-2 border-[#4facfe] shadow-lg hover:shadow-xl transition-shadow">
            <div className="text-center mb-4">
              <div className="text-[56px] mb-2">📊</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">每日摘要</h3>
            </div>
            <p className="text-[22px] text-[#666] mb-4 text-center">
              整合多個來源<br/>每日自動推播摘要
            </p>
            <a
              href="https://raw.githubusercontent.com/ChatGPT3a01/zeabur-n8n-linebot-guide/master/download/n8n_完整每日摘要工作流.json"
              download
              className="block w-full bg-gradient-to-r from-[#4facfe] to-[#00f2fe] text-white py-3 rounded-xl font-bold text-center hover:opacity-90 transition-opacity text-[22px]"
            >
              📥 下載模板
            </a>
          </div>
        </div>

        <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl flex items-start gap-3">
          <div className="mt-1 text-[28px]">💡</div>
          <div>
            <strong className="block mb-1 text-[24px]">下載提示</strong>
            <p className="text-[22px]">
              點擊下載按鈕後，瀏覽器會自動下載 <code>.json</code> 檔案到你的電腦。<br/>
              請記住檔案存放位置，等一下需要匯入到 n8n！
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 3: 匯入模板
    <Slide key="import">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📤 步驟 2：匯入模板到 n8n</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6 flex items-center gap-2">
              <Upload className="text-[#667eea]" size={32} />
              匯入步驟
            </h3>

            <ol className="space-y-5 text-[24px]">
              <li className="flex gap-3">
                <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[22px]">1</span>
                <div>
                  <strong>開啟 n8n 管理介面</strong>
                  <p className="text-[22px] text-[#666] mt-1">登入你在 Zeabur 部署的 n8n</p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[22px]">2</span>
                <div>
                  <strong>點擊右上角「⋮」選單</strong>
                  <p className="text-[22px] text-[#666] mt-1">找到三個點的圖示</p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[22px]">3</span>
                <div>
                  <strong>選擇「Import from File」</strong>
                  <p className="text-[22px] text-[#666] mt-1">會跳出檔案選擇視窗</p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[22px]">4</span>
                <div>
                  <strong>選擇剛才下載的 JSON 檔案</strong>
                  <p className="text-[22px] text-[#666] mt-1">瀏覽並選取檔案</p>
                </div>
              </li>

              <li className="flex gap-3">
                <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[22px]">5</span>
                <div>
                  <strong>點擊「Import」完成匯入</strong>
                  <p className="text-[22px] text-[#666] mt-1">工作流會自動載入到畫布</p>
                </div>
              </li>
            </ol>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#e3f2fd] p-6 rounded-2xl border-l-4 border-[#2196f3]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-3 flex items-center gap-2">
              <AlertCircle size={28} /> 匯入後會看到什麼？
            </h3>
            <ul className="space-y-3 text-[23px] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-[#2196f3]">✓</span>
                <span>完整的工作流節點圖</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2196f3]">✓</span>
                <span>所有節點已經連接好</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b35]">⚠️</span>
                <span><strong>紅色警告標示</strong>（需要設定憑證）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#2196f3]">✓</span>
                <span>預設的範例設定值</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl">
            <strong className="block mb-2 text-[24px]">⚠️ 重要提醒</strong>
            <p className="text-[22px]">
              匯入後<strong>不要急著執行</strong>！<br/>
              需要先設定 API 憑證，否則會出現錯誤。<br/>
              我們接下來會一步步教你設定！
            </p>
          </div>

          <div className="bg-[#e8f5e9] border-2 border-[#4caf50] text-[#2e7d32] p-5 rounded-xl">
            <strong className="flex items-center gap-2 text-[24px] mb-2">
              <CheckCircle2 size={26} /> 檢查清單
            </strong>
            <ul className="space-y-1 text-[22px]">
              <li>□ 工作流已匯入</li>
              <li>□ 可以看到完整節點</li>
              <li>□ 已儲存工作流</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 4: 模板 1 - LINE 天氣查詢（開始）
    <Slide key="weather-intro">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-[120px] mb-6">🌤️</div>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[64px] font-bold mb-6">模板 1：LINE 天氣查詢機器人</h1>
        <p className="text-[30px] text-[#666] max-w-[800px] mb-8">
          讓你的 LINE Bot 變成智慧氣象助手！<br/>
          輸入城市名稱，立即查詢台灣即時天氣
        </p>
        <div className="bg-gradient-to-r from-[#84fab0] to-[#8fd3f4] text-white px-8 py-4 rounded-2xl">
          <strong className="text-[28px]">🎯 學習目標</strong>
          <p className="mt-2 text-[24px]">城市辨識 + API 串接 + 動態回覆</p>
        </div>
      </div>
    </Slide>,

    // Slide 5: 天氣模板 - 需要準備
    <Slide key="weather-prep">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌤️ 天氣機器人：事前準備</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[30px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Cloud className="text-[#4facfe]" size={32} />
              需要申請的 API
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#06c755]">
                <h4 className="text-[26px] font-bold text-[#06c755] mb-2">1️⃣ LINE Messaging API</h4>
                <p className="text-[22px] text-[#666] mb-2">
                  ✅ 已在 Part 3 設定完成<br/>
                  使用相同的 Channel Access Token
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#4facfe]">
                <h4 className="text-[26px] font-bold text-[#4facfe] mb-2">2️⃣ OpenWeatherMap API</h4>
                <p className="text-[22px] text-[#666] mb-3">
                  免費方案，每日 1000 次呼叫
                </p>
                <ol className="text-[21px] space-y-2 text-[#666]">
                  <li>前往 <a href="https://openweathermap.org/" target="_blank" className="text-blue-600 hover:underline">openweathermap.org</a></li>
                  <li>點擊「Sign Up」註冊帳號</li>
                  <li>登入後進入「API Keys」頁面</li>
                  <li>複製預設的 API Key</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4">🎯 這個模板做什麼？</h3>
            <ol className="space-y-3 text-[23px]">
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">1.</span>
                <span>接收 LINE 用戶訊息</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">2.</span>
                <span><strong>辨識城市名稱</strong>（台北、高雄...）</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">3.</span>
                <span>呼叫天氣 API 查詢即時天氣</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">4.</span>
                <span>格式化天氣資訊</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">5.</span>
                <span>回覆給用戶</span>
              </li>
            </ol>
          </div>

          <div className="bg-[#e3f2fd] p-6 rounded-2xl border-l-4 border-[#2196f3]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-3">💬 使用範例</h3>
            <div className="space-y-3 text-[22px]">
              <div className="bg-white p-3 rounded-lg">
                <div className="text-[#06c755] font-bold mb-1">用戶：</div>
                <div className="text-[#333]">「台北天氣」</div>
              </div>
              <div className="bg-white p-3 rounded-lg">
                <div className="text-[#667eea] font-bold mb-1">Bot：</div>
                <div className="text-[#333]">
                  🌤️ 台北天氣<br/>
                  溫度：25°C<br/>
                  天氣：多雲<br/>
                  濕度：70%
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 6: 天氣模板 - 工作流結構
    <Slide key="weather-structure">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌤️ 天氣機器人：工作流結構</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
          <p className="text-[26px] text-[#333] leading-relaxed">
            這個工作流包含 <strong className="text-[#667eea]">5 個主要節點</strong>，讓我們逐一了解它們的功能
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5">
          <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#06c755] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">1</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">Webhook 節點（接收訊息）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              ⚡ <strong>觸發點</strong>：當用戶傳訊息給 Bot<br/>
              📥 <strong>接收資料</strong>：訊息文字、用戶 ID、Reply Token
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#667eea] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">2</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">Code 節點（城市辨識）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              🔍 <strong>功能</strong>：從訊息中提取城市名稱<br/>
              🗺️ <strong>轉換</strong>：中文城市名 → 英文（例如：台北 → Taipei）
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#4facfe] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#4facfe] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">3</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">HTTP Request 節點（查詢天氣）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              🌐 <strong>呼叫 API</strong>：OpenWeatherMap API<br/>
              📊 <strong>取得資料</strong>：溫度、天氣狀況、濕度、風速等
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6b35] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#ff6b35] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">4</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">Function 節點（格式化訊息）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              ✨ <strong>整理資料</strong>：將 API 回傳的 JSON 資料格式化<br/>
              📝 <strong>產生訊息</strong>：組合成漂亮的回覆文字
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#06c755] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">5</div>
              <h3 className="text-[28px] font-bold text-[#1e3c72]">LINE Reply Message 節點（回覆）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              💬 <strong>回覆訊息</strong>：將天氣資訊傳回給用戶<br/>
              ✅ <strong>使用 Reply Token</strong>：確保訊息正確回覆
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 7: 天氣模板 - 詳細設定步驟
    <Slide key="weather-setup">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌤️ 天氣機器人：詳細設定步驟</h2>

      <div className="space-y-6">
        <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-md">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6 flex items-center gap-2">
            <Settings className="text-[#667eea]" size={32} />
            設定憑證與參數
          </h3>

          <div className="space-y-5">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#06c755] mb-4">步驟 1：設定 Webhook 節點</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  點擊「<strong>Webhook</strong>」節點
                </li>
                <li>
                  確認 Path 設定為 <code className="bg-gray-100 px-2 py-1 rounded">weather</code>
                </li>
                <li>
                  HTTP Method 設為 <strong>POST</strong>
                </li>
                <li>
                  複製 Production URL，稍後要設定到 LINE
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#667eea] mb-4">步驟 2：檢查 Code 節點（城市辨識）</h4>
              <p className="text-[23px] text-[#666] mb-3">
                這個節點已經預設好台灣主要城市的中英文對照：
              </p>
              <div className="bg-gray-50 p-4 rounded-lg">
                <code className="text-[20px] text-[#333]">
                  台北 → Taipei<br/>
                  高雄 → Kaohsiung<br/>
                  台中 → Taichung<br/>
                  台南 → Tainan<br/>
                  ...等 20+ 個城市
                </code>
              </div>
              <p className="text-[21px] text-[#666] mt-3">
                💡 <strong>不需修改</strong>，直接使用即可！
              </p>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#4facfe] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#4facfe] mb-4">步驟 3：設定 HTTP Request 節點（最重要！）</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  點擊「<strong>HTTP Request</strong>」節點
                </li>
                <li>
                  Method: <strong>GET</strong>
                </li>
                <li>
                  URL: 找到 <code>appid=YOUR_API_KEY</code>
                </li>
                <li>
                  將 <code className="bg-yellow-100 px-2 py-1 rounded">YOUR_API_KEY</code> 替換成你的 OpenWeatherMap API Key
                </li>
                <li>
                  完整 URL 範例：<br/>
                  <code className="text-[20px] bg-gray-100 px-2 py-1 rounded inline-block mt-1 break-all">
                    {"https://api.openweathermap.org/data/2.5/weather?q={{$json.cityName}}&appid=你的API金鑰&units=metric&lang=zh_tw"}
                  </code>
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#06c755] mb-4">步驟 4：設定 LINE Reply Message 節點</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  點擊「<strong>LINE Reply Message</strong>」節點
                </li>
                <li>
                  在「Credential」選擇你的 LINE 憑證<br/>
                  <span className="text-[21px]">（Part 3 建立的 LINE Messaging account）</span>
                </li>
                <li>
                  Reply Token: <code className="bg-gray-100 px-2 py-1 rounded">{"{{ $('Webhook').item.json.events[0].replyToken }}"}</code>
                </li>
                <li>
                  Message 欄位已預設好格式化訊息，不需修改
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl flex items-start gap-3">
          <div className="mt-1 text-[28px]">💡</div>
          <div>
            <strong className="block mb-1 text-[24px]">快速提示</strong>
            <p className="text-[22px]">
              設定完成後，記得點擊右上角的「Save」儲存工作流！
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 8: 天氣模板 - 測試與執行
    <Slide key="weather-test">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌤️ 天氣機器人：測試與執行</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef]">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Smartphone className="text-[#06c755]" size={30} />
              測試步驟
            </h3>
            <ol className="space-y-3 text-[23px]">
              <li className="flex gap-2">
                <span className="bg-[#06c755] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">1</span>
                <span>儲存工作流（Save）</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#06c755] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">2</span>
                <span>切換為「Active」啟用狀態</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#06c755] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">3</span>
                <span>確認 Webhook URL 已設定到 LINE（Part 4）</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#06c755] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">4</span>
                <span>打開 LINE，傳訊息給 Bot</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#06c755] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">5</span>
                <span><strong>輸入測試訊息</strong>：<br/>
                  「台北天氣」<br/>
                  「高雄天氣如何」<br/>
                  「台中」
                </span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#06c755] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">6</span>
                <span>檢查 Bot 回覆的天氣資訊</span>
              </li>
            </ol>
          </div>

          <div className="bg-[#e8f5e9] border-2 border-[#4caf50] text-[#2e7d32] p-5 rounded-xl">
            <strong className="flex items-center gap-2 text-[25px] mb-3">
              <CheckCircle2 size={28} /> 成功指標
            </strong>
            <ul className="space-y-2 text-[22px]">
              <li>✓ Bot 正確辨識城市名稱</li>
              <li>✓ 顯示溫度、天氣狀況、濕度</li>
              <li>✓ 訊息格式整齊美觀</li>
              <li>✓ 回應速度快（2-3秒內）</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#ffebee] border-2 border-[#f44336] text-[#c62828] p-6 rounded-xl">
            <strong className="text-[26px] mb-4 block flex items-center gap-2">
              <AlertCircle size={28} /> 常見錯誤排除
            </strong>
            <div className="space-y-4 text-[22px]">
              <div>
                <strong>❌ 錯誤：API Key Invalid</strong>
                <p className="mt-1 text-[#666]">
                  → 檢查 OpenWeatherMap API Key 是否正確<br/>
                  → 確認 API Key 已啟用（需等待幾分鐘）
                </p>
              </div>
              <div>
                <strong>❌ Bot 沒反應</strong>
                <p className="mt-1 text-[#666]">
                  → 確認工作流為「Active」狀態<br/>
                  → 檢查 Webhook URL 是否設定正確
                </p>
              </div>
              <div>
                <strong>❌ 顯示「找不到城市」</strong>
                <p className="mt-1 text-[#666]">
                  → 檢查 Code 節點的城市對照表<br/>
                  → 確認城市名稱拼寫正確
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#e3f2fd] p-5 rounded-xl border-l-4 border-[#2196f3]">
            <strong className="text-[24px] text-[#1e3c72] mb-2 block flex items-center gap-2">
              <Bug size={26} /> 除錯技巧
            </strong>
            <p className="text-[22px] text-[#666]">
              點擊每個節點查看執行結果，可以看到：<br/>
              • 接收到的訊息內容<br/>
              • 辨識出的城市名稱<br/>
              • API 回傳的天氣資料<br/>
              • 最終發送的訊息
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 9: 天氣模板 - 進階自訂
    <Slide key="weather-advanced">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🌤️ 天氣機器人：進階自訂技巧</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Lightbulb className="text-[#ff6b35]" size={30} />
              可以自訂的部分
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#667eea]">
                <h4 className="text-[24px] font-bold text-[#667eea] mb-2">1️⃣ 新增更多城市</h4>
                <p className="text-[21px] text-[#666]">
                  在 Code 節點中，找到城市對照表，新增你需要的城市：
                </p>
                <div className="bg-gray-50 p-3 rounded mt-2">
                  <code className="text-[19px]">
                    '新竹': 'Hsinchu',<br/>
                    '嘉義': 'Chiayi',
                  </code>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#4facfe]">
                <h4 className="text-[24px] font-bold text-[#4facfe] mb-2">2️⃣ 調整回覆格式</h4>
                <p className="text-[21px] text-[#666]">
                  在 Function 節點中，修改訊息模板：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 space-y-1 ml-4">
                  <li>• 新增 emoji</li>
                  <li>• 調整顯示順序</li>
                  <li>• 增加其他資訊（風速、能見度）</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#06c755]">
                <h4 className="text-[24px] font-bold text-[#06c755] mb-2">3️⃣ 新增錯誤處理</h4>
                <p className="text-[21px] text-[#666]">
                  使用 n8n 的「Error Trigger」節點：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 space-y-1 ml-4">
                  <li>• API 呼叫失敗時回覆友善訊息</li>
                  <li>• 城市名稱錯誤時提示正確格式</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-4">💡 進階功能建議</h3>
            <ul className="space-y-4 text-[22px]">
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">📍</span>
                <div>
                  <strong>整合 GPS 定位</strong><br/>
                  <span className="text-[21px] text-[#666]">讓用戶傳送位置，自動查詢該地天氣</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">🕐</span>
                <div>
                  <strong>新增天氣預報</strong><br/>
                  <span className="text-[21px] text-[#666]">使用不同的 API endpoint 取得未來 5 天預報</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">🌡️</span>
                <div>
                  <strong>天氣警報通知</strong><br/>
                  <span className="text-[21px] text-[#666]">當溫度過高/過低時主動推播提醒</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">📊</span>
                <div>
                  <strong>記錄查詢歷史</strong><br/>
                  <span className="text-[21px] text-[#666]">使用 Google Sheets 節點儲存查詢記錄</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#e3f2fd] p-5 rounded-xl border-l-4 border-[#2196f3]">
            <strong className="text-[24px] text-[#1e3c72] mb-3 block">🎯 學習重點</strong>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>✓ API 串接的基本流程</li>
              <li>✓ 資料轉換與格式化</li>
              <li>✓ 條件判斷與錯誤處理</li>
              <li>✓ 動態訊息產生</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 10: 模板 2 - RSS 爬蟲（開始）
    <Slide key="rss-intro">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-[120px] mb-6">📰</div>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[64px] font-bold mb-6">模板 2：RSS 爬蟲工作流</h1>
        <p className="text-[30px] text-[#666] max-w-[800px] mb-8">
          自動訂閱你喜歡的網站 RSS<br/>
          定時抓取最新文章，推播到 LINE
        </p>
        <div className="bg-gradient-to-r from-[#ffecd2] to-[#fcb69f] text-[#8b4513] px-8 py-4 rounded-2xl">
          <strong className="text-[28px]">🎯 學習目標</strong>
          <p className="mt-2 text-[24px]">RSS 訂閱 + 定時執行 + 資料過濾</p>
        </div>
      </div>
    </Slide>,

    // 繼續 RSS 爬蟲的詳細教學...
    <Slide key="rss-prep">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📰 RSS 爬蟲：事前準備</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[30px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Rss className="text-[#ff6b35]" size={32} />
              需要準備什麼？
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#ff6b35]">
                <h4 className="text-[26px] font-bold text-[#ff6b35] mb-2">1️⃣ RSS 摘要網址</h4>
                <p className="text-[22px] text-[#666] mb-3">
                  找到你想訂閱的網站 RSS 網址
                </p>
                <div className="text-[21px] space-y-2 text-[#666]">
                  <p><strong>範例：</strong></p>
                  <ul className="space-y-1 ml-4">
                    <li>• TechCrunch: <code className="text-[19px]">feeds.feedburner.com/TechCrunch</code></li>
                    <li>• Hacker News: <code className="text-[19px]">news.ycombinator.com/rss</code></li>
                    <li>• 科技新報: <code className="text-[19px]">technews.tw/feed</code></li>
                  </ul>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#06c755]">
                <h4 className="text-[26px] font-bold text-[#06c755] mb-2">2️⃣ LINE Messaging API</h4>
                <p className="text-[22px] text-[#666]">
                  ✅ 使用 Part 3 建立的憑證<br/>
                  用來推播文章更新通知
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#4facfe]">
                <h4 className="text-[26px] font-bold text-[#4facfe] mb-2">3️⃣ LINE User ID（選用）</h4>
                <p className="text-[22px] text-[#666]">
                  如果要推播給特定用戶，需要取得 User ID
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#ff6b35]/10 to-[#f7931e]/10 p-6 rounded-2xl border-l-4 border-[#ff6b35]">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4">🎯 這個模板做什麼？</h3>
            <ol className="space-y-3 text-[23px]">
              <li className="flex gap-2">
                <span className="text-[#ff6b35] font-bold">1.</span>
                <span><strong>定時執行</strong>（例如每小時一次）</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff6b35] font-bold">2.</span>
                <span>讀取 RSS 摘要內容</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff6b35] font-bold">3.</span>
                <span>過濾最新文章（避免重複）</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff6b35] font-bold">4.</span>
                <span>格式化文章資訊</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#ff6b35] font-bold">5.</span>
                <span>推播到 LINE 通知用戶</span>
              </li>
            </ol>
          </div>

          <div className="bg-[#e3f2fd] p-6 rounded-2xl border-l-4 border-[#2196f3]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-3">💬 推播範例</h3>
            <div className="bg-white p-4 rounded-lg text-[22px]">
              <div className="text-[#667eea] font-bold mb-2">📰 科技新聞更新</div>
              <div className="text-[#333]">
                <strong>AI 技術新突破</strong><br/>
                OpenAI 發布最新模型...<br/>
                <a href="#" className="text-blue-600 text-[20px]">閱讀全文 →</a>
              </div>
            </div>
          </div>

          <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl">
            <strong className="block mb-1 text-[24px]">⏰ 定時執行說明</strong>
            <p className="text-[21px]">
              模板預設為<strong>每小時執行一次</strong>，<br/>
              你可以自行調整頻率（每30分鐘、每天一次...）
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // RSS 工作流結構
    <Slide key="rss-structure">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📰 RSS 爬蟲：工作流結構</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#ff6b35]/10 to-[#f7931e]/10 p-6 rounded-2xl border-l-4 border-[#ff6b35]">
          <p className="text-[26px] text-[#333] leading-relaxed">
            這個工作流包含 <strong className="text-[#ff6b35]">6 個主要節點</strong>，實現自動化內容訂閱
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#667eea] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">1</div>
              <h3 className="text-[26px] font-bold text-[#1e3c72]">Schedule Trigger</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              ⏰ <strong>定時觸發</strong><br/>
              📅 <strong>設定頻率</strong>：每小時/每天/自訂
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6b35] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#ff6b35] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">2</div>
              <h3 className="text-[26px] font-bold text-[#1e3c72]">RSS Read</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              📡 <strong>讀取 RSS</strong><br/>
              📊 <strong>取得文章</strong>：標題、連結、摘要
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#4facfe] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#4facfe] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">3</div>
              <h3 className="text-[26px] font-bold text-[#1e3c72]">Code（過濾重複）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              🔍 <strong>檢查重複</strong><br/>
              💾 <strong>記錄已推播</strong>：避免重複通知
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#06c755] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">4</div>
              <h3 className="text-[26px] font-bold text-[#1e3c72]">Function（格式化）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              ✨ <strong>整理資料</strong><br/>
              📝 <strong>產生訊息</strong>：組合推播內容
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#06c755] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">5</div>
              <h3 className="text-[26px] font-bold text-[#1e3c72]">LINE Push Message</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              💬 <strong>推播通知</strong><br/>
              📱 <strong>傳送給用戶</strong>：主動通知更新
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-md">
            <div className="flex items-center gap-3 mb-3">
              <div className="bg-[#667eea] text-white w-12 h-12 rounded-full flex items-center justify-center font-bold text-[24px]">6</div>
              <h3 className="text-[26px] font-bold text-[#1e3c72]">Database（選用）</h3>
            </div>
            <p className="text-[22px] text-[#666] pl-[60px]">
              💾 <strong>儲存記錄</strong><br/>
              📊 <strong>追蹤歷史</strong>：已推播文章列表
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // RSS 設定步驟...
    <Slide key="rss-setup">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📰 RSS 爬蟲：詳細設定步驟</h2>

      <div className="space-y-6">
        <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-md">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6 flex items-center gap-2">
            <Settings className="text-[#ff6b35]" size={32} />
            設定 RSS 來源與推播
          </h3>

          <div className="space-y-5">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#667eea] mb-4">步驟 1：設定定時器（Schedule Trigger）</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  點擊「<strong>Schedule Trigger</strong>」節點
                </li>
                <li>
                  設定執行頻率：
                  <ul className="ml-6 mt-2 space-y-1 text-[22px]">
                    <li>• 每小時：Interval = <code>1</code>, Unit = <code>Hours</code></li>
                    <li>• 每30分鐘：Interval = <code>30</code>, Unit = <code>Minutes</code></li>
                    <li>• 每天早上9點：使用 Cron 表達式 <code>0 9 * * *</code></li>
                  </ul>
                </li>
                <li>
                  💡 建議一開始設為每小時，避免 API 呼叫過於頻繁
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6b35] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#ff6b35] mb-4">步驟 2：設定 RSS Feed 節點</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  點擊「<strong>RSS Read</strong>」節點
                </li>
                <li>
                  在「URL」欄位輸入你的 RSS 摘要網址<br/>
                  <span className="text-[21px]">例如：<code>https://technews.tw/feed</code></span>
                </li>
                <li>
                  設定「Max Items」（最多讀取幾篇）<br/>
                  <span className="text-[21px]">建議設為 <code>5</code> 或 <code>10</code></span>
                </li>
                <li>
                  完成後點擊「Execute Node」測試讀取
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#06c755] mb-4">步驟 3：設定 LINE 推播節點</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  找到「<strong>LINE Push Message</strong>」節點
                </li>
                <li>
                  選擇你的 LINE Messaging API 憑證
                </li>
                <li>
                  在「To」欄位輸入<strong>你的 LINE User ID</strong><br/>
                  <span className="text-[21px]">（可在 LINE Developers Console 測試訊息處找到）</span>
                </li>
                <li>
                  訊息格式已預設好，會自動顯示：<br/>
                  • 文章標題<br/>
                  • 文章摘要<br/>
                  • 連結網址
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl flex items-start gap-3">
          <div className="mt-1 text-[28px]">💡</div>
          <div>
            <strong className="block mb-1 text-[24px]">進階技巧</strong>
            <p className="text-[22px]">
              在「RSS Read」和「LINE Push」之間有一個「Code」節點，<br/>
              用來記錄已推播的文章 ID，避免重複推播相同內容！
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // RSS 測試與執行
    <Slide key="rss-test">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📰 RSS 爬蟲：測試與執行</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef]">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Play className="text-[#ff6b35]" size={30} />
              測試步驟
            </h3>
            <ol className="space-y-3 text-[23px]">
              <li className="flex gap-2">
                <span className="bg-[#ff6b35] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">1</span>
                <span>儲存工作流</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#ff6b35] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">2</span>
                <span>點擊「Execute Workflow」手動測試</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#ff6b35] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">3</span>
                <span>檢查每個節點的執行結果</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#ff6b35] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">4</span>
                <span>確認 LINE 收到推播訊息</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#ff6b35] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">5</span>
                <span>測試成功後切換為「Active」</span>
              </li>
              <li className="flex gap-2">
                <span className="bg-[#ff6b35] text-white w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 font-bold text-[21px]">6</span>
                <span>等待下一個定時觸發</span>
              </li>
            </ol>
          </div>

          <div className="bg-[#e8f5e9] border-2 border-[#4caf50] text-[#2e7d32] p-5 rounded-xl">
            <strong className="flex items-center gap-2 text-[25px] mb-3">
              <CheckCircle2 size={28} /> 成功指標
            </strong>
            <ul className="space-y-2 text-[22px]">
              <li>✓ 成功讀取 RSS 文章</li>
              <li>✓ 正確過濾重複內容</li>
              <li>✓ LINE 收到推播訊息</li>
              <li>✓ 訊息格式正確美觀</li>
              <li>✓ 連結可以正常點擊</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#ffebee] border-2 border-[#f44336] text-[#c62828] p-6 rounded-xl">
            <strong className="text-[26px] mb-4 block flex items-center gap-2">
              <AlertCircle size={28} /> 常見問題
            </strong>
            <div className="space-y-4 text-[22px]">
              <div>
                <strong>❌ RSS 讀取失敗</strong>
                <p className="mt-1 text-[#666]">
                  → 檢查 RSS URL 是否正確<br/>
                  → 確認網站 RSS 功能正常
                </p>
              </div>
              <div>
                <strong>❌ 推播沒收到</strong>
                <p className="mt-1 text-[#666]">
                  → 檢查 User ID 是否正確<br/>
                  → 確認 LINE 憑證設定正確
                </p>
              </div>
              <div>
                <strong>❌ 重複推播相同文章</strong>
                <p className="mt-1 text-[#666]">
                  → 檢查 Code 節點的過濾邏輯<br/>
                  → 確認文章 ID 記錄功能運作
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[#e3f2fd] p-5 rounded-xl border-l-4 border-[#2196f3]">
            <strong className="text-[24px] text-[#1e3c72] mb-2 block">💡 最佳化建議</strong>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>• 調整頻率避免過度推播</li>
              <li>• 設定文章數量上限</li>
              <li>• 使用關鍵字過濾</li>
              <li>• 整合多個 RSS 來源</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // RSS 進階功能
    <Slide key="rss-advanced">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📰 RSS 爬蟲：進階功能</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4">🔧 可擴充的功能</h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#667eea]">
                <h4 className="text-[24px] font-bold text-[#667eea] mb-2">1️⃣ 關鍵字過濾</h4>
                <p className="text-[21px] text-[#666]">
                  在 Code 節點中新增關鍵字檢查：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 只推播包含特定關鍵字的文章</li>
                  <li>• 排除不想看的主題</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#4facfe]">
                <h4 className="text-[24px] font-bold text-[#4facfe] mb-2">2️⃣ 多個 RSS 來源</h4>
                <p className="text-[21px] text-[#666]">
                  複製 RSS Read 節點：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 訂閱多個不同網站</li>
                  <li>• 統一推播到同一個 LINE</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#06c755]">
                <h4 className="text-[24px] font-bold text-[#06c755] mb-2">3️⃣ 摘要產生</h4>
                <p className="text-[21px] text-[#666]">
                  整合 AI 節點：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 使用 ChatGPT 產生文章摘要</li>
                  <li>• 自動翻譯外文文章</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#ff6b35]/10 to-[#f7931e]/10 p-6 rounded-2xl border-l-4 border-[#ff6b35]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-4">💾 資料儲存方案</h3>
            <ul className="space-y-4 text-[22px]">
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b35] font-bold">📊</span>
                <div>
                  <strong>Google Sheets</strong><br/>
                  <span className="text-[21px] text-[#666]">記錄所有抓取的文章</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b35] font-bold">🗄️</span>
                <div>
                  <strong>Airtable</strong><br/>
                  <span className="text-[21px] text-[#666]">建立文章資料庫</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b35] font-bold">📧</span>
                <div>
                  <strong>Email</strong><br/>
                  <span className="text-[21px] text-[#666]">同時寄送郵件通知</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#ff6b35] font-bold">💬</span>
                <div>
                  <strong>Slack/Discord</strong><br/>
                  <span className="text-[21px] text-[#666]">推播到團隊頻道</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#e3f2fd] p-5 rounded-xl border-l-4 border-[#2196f3]">
            <strong className="text-[24px] text-[#1e3c72] mb-3 block">🎯 實際應用場景</strong>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>✓ 科技新聞自動訂閱</li>
              <li>✓ 部落格文章更新通知</li>
              <li>✓ 政府公告自動追蹤</li>
              <li>✓ 求職網站新職缺提醒</li>
              <li>✓ 論壇熱門文章推播</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // 模板 3 開始...
    <Slide key="summary-intro">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <div className="text-[120px] mb-6">📊</div>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[64px] font-bold mb-6">模板 3：每日摘要工作流</h1>
        <p className="text-[30px] text-[#666] max-w-[800px] mb-8">
          整合多個資料來源<br/>
          每天早上自動推播今日重點摘要
        </p>
        <div className="bg-gradient-to-r from-[#a8edea] to-[#fed6e3] text-[#1e3c72] px-8 py-4 rounded-2xl">
          <strong className="text-[28px]">🎯 學習目標</strong>
          <p className="mt-2 text-[24px]">多來源整合 + 定時推播 + 格式化</p>
        </div>
      </div>
    </Slide>,

    // 每日摘要詳細步驟...
    <Slide key="summary-prep">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📊 每日摘要：事前準備</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[30px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <BarChart3 className="text-[#4facfe]" size={32} />
              需要準備的 API
            </h3>

            <div className="space-y-4 text-[22px]">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#4facfe]">
                <h4 className="text-[25px] font-bold text-[#4facfe] mb-2">1️⃣ 天氣 API</h4>
                <p className="text-[#666]">OpenWeatherMap（模板1 使用的）</p>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#ff6b35]">
                <h4 className="text-[25px] font-bold text-[#ff6b35] mb-2">2️⃣ 新聞 API（選用）</h4>
                <p className="text-[#666]">NewsAPI.org 或使用 RSS</p>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#06c755]">
                <h4 className="text-[25px] font-bold text-[#06c755] mb-2">3️⃣ LINE Messaging API</h4>
                <p className="text-[#666]">用來推播每日摘要</p>
              </div>
            </div>
          </div>

          <div className="bg-[#e8f5e9] border-2 border-[#4caf50] text-[#2e7d32] p-5 rounded-xl">
            <strong className="flex items-center gap-2 text-[24px] mb-2">
              <CheckCircle2 size={26} /> 可以整合的資料
            </strong>
            <ul className="space-y-2 text-[22px]">
              <li>✓ 今日天氣預報</li>
              <li>✓ 熱門新聞標題</li>
              <li>✓ 行事曆事項（選用）</li>
              <li>✓ 匯率/股價（選用）</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/10 p-6 rounded-2xl border-l-4 border-[#4facfe]">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4">🎯 這個模板做什麼？</h3>
            <ol className="space-y-3 text-[23px]">
              <li className="flex gap-2">
                <span className="text-[#4facfe] font-bold">1.</span>
                <span><strong>每天早上 8:00</strong> 自動執行</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4facfe] font-bold">2.</span>
                <span>呼叫多個 API 收集資料</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4facfe] font-bold">3.</span>
                <span>整合所有資訊成一則摘要</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4facfe] font-bold">4.</span>
                <span>美化格式</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#4facfe] font-bold">5.</span>
                <span>推播到 LINE</span>
              </li>
            </ol>
          </div>

          <div className="bg-[#e3f2fd] p-6 rounded-2xl border-l-4 border-[#2196f3]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-3">💬 摘要範例</h3>
            <div className="bg-white p-4 rounded-lg text-[21px]">
              <div className="text-[#667eea] font-bold mb-2">📊 2026/01/13 今日摘要</div>
              <div className="text-[#333] space-y-2">
                <div>
                  <strong>🌤️ 天氣</strong><br/>
                  台北 18-25°C 多雲
                </div>
                <div>
                  <strong>📰 頭條新聞</strong><br/>
                  AI 技術突破新里程碑
                </div>
                <div>
                  <strong>💰 匯率</strong><br/>
                  USD/TWD: 31.5
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // 每日摘要設定...
    <Slide key="summary-setup">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📊 每日摘要：詳細設定步驟</h2>

      <div className="space-y-6">
        <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-md">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6 flex items-center gap-2">
            <Settings className="text-[#4facfe]" size={32} />
            設定資料來源與推播
          </h3>

          <div className="space-y-5">
            <div className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#667eea] mb-4">步驟 1：設定每日定時</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  點擊「<strong>Schedule Trigger</strong>」節點
                </li>
                <li>
                  選擇「Cron」模式
                </li>
                <li>
                  設定 Cron 表達式：<br/>
                  <code className="bg-gray-100 px-3 py-2 rounded mt-2 inline-block">0 8 * * *</code><br/>
                  <span className="text-[21px]">（代表每天早上 8:00）</span>
                </li>
                <li>
                  💡 可以改成你想要的時間，例如：<br/>
                  • <code>0 7 * * *</code> = 早上7點<br/>
                  • <code>0 20 * * *</code> = 晚上8點
                </li>
              </ol>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#4facfe] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#4facfe] mb-4">步驟 2：設定各個資料來源</h4>
              <div className="space-y-4 text-[22px] text-[#666]">
                <div>
                  <strong className="text-[#1e3c72]">A. 天氣資料節點</strong>
                  <p className="mt-1">
                    在「HTTP Request (Weather)」節點<br/>
                    設定你的 OpenWeatherMap API Key
                  </p>
                </div>
                <div>
                  <strong className="text-[#1e3c72]">B. 新聞資料節點（選用）</strong>
                  <p className="mt-1">
                    在「HTTP Request (News)」節點<br/>
                    可以串接 NewsAPI 或使用 RSS
                  </p>
                </div>
                <div>
                  <strong className="text-[#1e3c72]">C. 其他資料節點</strong>
                  <p className="mt-1">
                    可以自行新增匯率、股價等 API 節點
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white p-6 rounded-xl border-l-4 border-[#06c755] shadow-sm">
              <h4 className="text-[26px] font-bold text-[#06c755] mb-4">步驟 3：設定推播與格式</h4>
              <ol className="space-y-3 text-[23px] text-[#666]">
                <li>
                  找到「<strong>Function</strong>」節點（整合資料用）<br/>
                  <span className="text-[21px]">這個節點會把所有資料整合成一則訊息</span>
                </li>
                <li>
                  可以修改訊息格式，加入 emoji 讓摘要更生動
                </li>
                <li>
                  在「LINE Push Message」節點設定你的憑證
                </li>
                <li>
                  設定接收對象的 User ID
                </li>
              </ol>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#e8f5e9] border border-[#4caf50] text-[#2e7d32] p-4 rounded-xl">
            <strong className="flex items-center gap-2 mb-1 text-[24px]">
              <CheckCircle2 size={24} /> 測試建議
            </strong>
            <p className="text-[21px]">先改成每分鐘執行，測試成功後再改回每日</p>
          </div>
          <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-4 rounded-xl">
            <strong className="flex items-center gap-2 mb-1 text-[24px]">💡 客製化</strong>
            <p className="text-[21px]">可以依需求增減資料來源</p>
          </div>
        </div>
      </div>
    </Slide>,

    // 總結與下一步
    <Slide key="conclusion">
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="text-[120px] mb-6">🎉</div>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[64px] font-bold mb-6">恭喜完成 Part 5！</h1>
        <p className="text-[30px] text-[#666] mb-8 max-w-[900px]">
          你已經學會使用 3 個實戰工作流模板：
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full max-w-[1000px] mb-10">
          <div className="bg-gradient-to-br from-[#84fab0] to-[#8fd3f4] p-6 rounded-2xl text-[#004d40]">
            <div className="text-[56px] mb-2">🌤️</div>
            <h3 className="text-[26px] font-bold mb-2">天氣查詢</h3>
            <p className="text-[22px]">智慧辨識城市<br/>即時天氣回覆</p>
          </div>

          <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-2xl text-[#8b4513]">
            <div className="text-[56px] mb-2">📰</div>
            <h3 className="text-[26px] font-bold mb-2">RSS 爬蟲</h3>
            <p className="text-[22px]">自動訂閱<br/>定時推播</p>
          </div>

          <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-2xl text-[#1e3c72]">
            <div className="text-[56px] mb-2">📊</div>
            <h3 className="text-[26px] font-bold mb-2">每日摘要</h3>
            <p className="text-[22px]">多來源整合<br/>定時摘要</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-10 py-6 rounded-2xl text-[26px] font-semibold shadow-2xl">
          🚀 現在你可以開始客製化自己的工作流了！
        </div>

        <div className="mt-8 text-[24px] text-[#666] max-w-[700px]">
          <p className="mb-2">💡 記得查看 n8n 官方文件探索更多可能性</p>
          <p>🤝 遇到問題？歡迎到 3A科技研究社發問！</p>
        </div>

        <div className="mt-6 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-5 rounded-xl text-center">
          <p className="text-[24px] mb-4">
            <strong>✅ Part 5 完成！</strong> 學會了 3 個實戰工作流模板
          </p>
          <Link href="/part/6">
            <a className="inline-flex items-center gap-2 bg-white text-[#667eea] px-6 py-3 rounded-lg font-bold text-[22px] hover:bg-gray-100 transition-colors">
              前往 Part 6 <ArrowRight size={24} />
            </a>
          </Link>
        </div>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 5: 實戰案例與延伸應用" slides={slides} />;
}
