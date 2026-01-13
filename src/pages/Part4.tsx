import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { Webhook, MessageSquare, PlayCircle, CheckCircle2 } from "lucide-react";

export default function Part4() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">n8n × LINE Integration</h4>
        <h1 className="text-[#1e3c72] text-[40px] md:text-[56px] font-bold mb-6">Part 4: n8n 串接 LINE Bot</h1>
        <h2 className="text-[#666] text-[24px] md:text-[28px] font-normal border-none max-w-[800px]">
          設定 Webhook 與建立第一個自動回覆
        </h2>
      </div>
    </Slide>,

    // Slide 2: Webhook 概念
    <Slide key="webhook-concept">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔗 什麼是 Webhook？</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="space-y-6">
          <div className="bg-[#e3f2fd] p-6 rounded-2xl border-l-4 border-[#2196f3]">
            <h3 className="text-[24px] font-bold text-[#1e3c72] mb-3">📡 簡單理解</h3>
            <p className="text-[18px] leading-relaxed">
              Webhook 就像是一個「接收訊息的窗口」，當有人傳訊息給你的 LINE Bot 時，
              LINE 會立即把訊息內容「推送」到這個窗口，n8n 就能接收並處理。
            </p>
          </div>

          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef]">
            <h3 className="text-[24px] font-bold text-[#1e3c72] mb-4">🔄 運作流程</h3>
            <ol className="space-y-3 text-[18px]">
              <li className="flex items-center gap-2">
                <span className="bg-[#06c755] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">1</span>
                用戶傳訊息給 LINE Bot
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-[#06c755] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">2</span>
                LINE 發送訊息到 Webhook 網址
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-[#06c755] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">3</span>
                n8n 接收並處理訊息
              </li>
              <li className="flex items-center gap-2">
                <span className="bg-[#06c755] text-white w-6 h-6 rounded-full flex items-center justify-center text-sm font-bold">4</span>
                n8n 回覆訊息給用戶
              </li>
            </ol>
          </div>
        </div>

        <div className="flex justify-center">
          <Webhook size={200} className="text-[#667eea] opacity-80" />
        </div>
      </div>
    </Slide>,

    // Slide 3: 取得 Webhook 網址
    <Slide key="get-webhook">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔗 步驟 1：取得 n8n Webhook 網址</h2>

      <div className="space-y-6">
        <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-md">
          <h3 className="text-[24px] font-bold text-[#1e3c72] mb-6">📍 操作步驟</h3>

          <ol className="space-y-5 text-[18px]">
            <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#667eea]">
              <strong className="text-[20px] text-[#667eea]">1. 在 n8n 建立新工作流</strong>
              <p className="mt-2 text-[#666]">點擊「+ Add Workflow」建立一個新的工作流</p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#667eea]">
              <strong className="text-[20px] text-[#667eea]">2. 新增 Webhook 節點</strong>
              <p className="mt-2 text-[#666]">點擊「+」→ 搜尋「Webhook」→ 選擇「Webhook」節點</p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#667eea]">
              <strong className="text-[20px] text-[#667eea]">3. 設定 HTTP 方法為 POST</strong>
              <p className="mt-2 text-[#666]">在節點設定中，確認 HTTP Method 設為「POST」</p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#667eea]">
              <strong className="text-[20px] text-[#667eea]">4. 複製 Production URL</strong>
              <p className="mt-2 text-[#666]">
                點擊「Copy URL」按鈕，複製 Production Webhook URL<br/>
                <code className="bg-gray-100 px-2 py-1 rounded mt-2 inline-block text-sm">
                  https://your-n8n-url.zeabur.app/webhook/xxxxx
                </code>
              </p>
            </li>
          </ol>
        </div>

        <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl flex items-start gap-3">
          <div className="mt-1">💡</div>
          <div>
            <strong className="block mb-1">重要提示</strong>
            <p className="text-[16px]">
              請使用 <strong>Production URL</strong>，不要使用 Test URL！<br/>
              Production URL 在工作流啟用後才能正常接收訊息。
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 4: LINE 設定 Webhook
    <Slide key="line-webhook">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📱 步驟 2：在 LINE 設定 Webhook URL</h2>

      <div className="space-y-6">
        <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-md">
          <h3 className="text-[24px] font-bold text-[#1e3c72] mb-6">🔧 LINE Developers Console 設定</h3>

          <ol className="space-y-5 text-[18px]">
            <li className="bg-white p-5 rounded-xl shadow-sm">
              <strong className="text-[20px] text-[#06c755]">1. 前往 LINE Developers Console</strong>
              <p className="mt-2 text-[#666]">
                開啟 <a href="https://developers.line.biz/console/" target="_blank" className="text-blue-600 hover:underline">
                  https://developers.line.biz/console/
                </a>
              </p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm">
              <strong className="text-[20px] text-[#06c755]">2. 進入你的 Messaging API Channel</strong>
              <p className="mt-2 text-[#666]">選擇之前建立的 Channel</p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm">
              <strong className="text-[20px] text-[#06c755]">3. 找到「Messaging API」分頁</strong>
              <p className="mt-2 text-[#666]">點擊頁面上方的「Messaging API」標籤</p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm">
              <strong className="text-[20px] text-[#06c755]">4. 設定 Webhook URL</strong>
              <p className="mt-2 text-[#666]">
                找到「Webhook settings」區塊<br/>
                點擊「Edit」按鈕<br/>
                貼上剛才複製的 n8n Webhook URL<br/>
                點擊「Update」儲存
              </p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm">
              <strong className="text-[20px] text-[#06c755]">5. 啟用 Webhook</strong>
              <p className="mt-2 text-[#666]">
                在「Use webhook」開關處，將開關切換為「開啟」狀態
              </p>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="bg-[#e8f5e9] border border-[#4caf50] text-[#2e7d32] p-4 rounded-xl">
            <strong className="flex items-center gap-2">
              <CheckCircle2 size={20} /> 記得啟用
            </strong>
            <p className="text-sm mt-1">Webhook 開關要打開！</p>
          </div>
          <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-4 rounded-xl">
            <strong className="flex items-center gap-2">⚠️ 確認 URL</strong>
            <p className="text-sm mt-1">網址不能有錯字！</p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 5: 建立簡單回覆
    <Slide key="simple-reply">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">💬 步驟 3：建立簡單的自動回覆</h2>

      <div className="space-y-6">
        <p className="text-[20px] text-[#444]">讓我們建立一個簡單的「回音機器人」，用戶傳什麼，就回什麼！</p>

        <div className="bg-[#f8f9fa] p-8 rounded-2xl border border-[#e9ecef] shadow-md">
          <h3 className="text-[24px] font-bold text-[#1e3c72] mb-6">🛠️ 新增回覆節點</h3>

          <ol className="space-y-5 text-[18px]">
            <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#ff4081]">
              <strong className="text-[20px] text-[#ff4081]">1. 新增 LINE 回覆節點</strong>
              <p className="mt-2 text-[#666]">
                在 Webhook 節點後方點擊「+」<br/>
                搜尋「LINE」→ 選擇「LINE Reply Message」<br/>
                連接憑證（使用 Part 3 建立的憑證）
              </p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#ff4081]">
              <strong className="text-[20px] text-[#ff4081]">2. 設定 Reply Token</strong>
              <p className="mt-2 text-[#666] mb-3">
                在「Reply Token」欄位，點擊右側圖示選擇「Expression」<br/>
                輸入：<code className="bg-gray-100 px-2 py-1 rounded">{'{{ $json.body.events[0].replyToken }}'}</code>
              </p>
            </li>

            <li className="bg-white p-5 rounded-xl shadow-sm border-l-4 border-[#ff4081]">
              <strong className="text-[20px] text-[#ff4081]">3. 設定回覆訊息</strong>
              <p className="mt-2 text-[#666] mb-3">
                在「Message」欄位，點擊右側圖示選擇「Expression」<br/>
                輸入：<code className="bg-gray-100 px-2 py-1 rounded">{'{{ $json.body.events[0].message.text }}'}</code>
              </p>
              <p className="text-[16px] text-[#666] mt-2">
                💡 這樣就會回覆用戶傳來的相同內容（回音機器人）
              </p>
            </li>
          </ol>
        </div>

        <div className="bg-[#e3f2fd] p-6 rounded-2xl border-l-4 border-[#2196f3]">
          <strong className="text-[20px] text-[#1e3c72] mb-2 block">📝 自訂回覆內容</strong>
          <p className="text-[18px] text-[#666]">
            如果你想回覆固定內容，Message 欄位可以直接輸入文字，例如：<br/>
            <code className="bg-white px-3 py-2 rounded mt-2 inline-block">「你好！我是自動回覆機器人」</code>
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 6: 測試執行
    <Slide key="test">
      <h2 className="text-[#2a5298] text-[32px] md:text-[38px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🧪 步驟 4：測試與啟用</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef]">
            <h3 className="text-[24px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <PlayCircle className="text-[#667eea]" size={28} />
              測試步驟
            </h3>
            <ol className="space-y-3 text-[18px]">
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">1.</span>
                <span>點擊右上角「Save」儲存工作流</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">2.</span>
                <span>將工作流設為「Active」（啟用開關）</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">3.</span>
                <span>用手機打開 LINE，加入你的 Bot 好友</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">4.</span>
                <span>傳送一則訊息測試</span>
              </li>
              <li className="flex gap-2">
                <span className="text-[#667eea] font-bold">5.</span>
                <span>應該會收到相同內容的回覆！</span>
              </li>
            </ol>
          </div>

          <div className="bg-[#e8f5e9] border-2 border-[#4caf50] text-[#2e7d32] p-5 rounded-xl">
            <strong className="flex items-center gap-2 text-[20px] mb-2">
              <CheckCircle2 size={24} /> 成功指標
            </strong>
            <ul className="space-y-2 text-[16px]">
              <li>✓ Bot 立即回覆訊息</li>
              <li>✓ n8n 執行紀錄顯示成功</li>
              <li>✓ 沒有錯誤訊息</li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-6 rounded-xl">
            <strong className="text-[20px] mb-3 block">⚠️ 常見問題</strong>
            <div className="space-y-3 text-[16px]">
              <div>
                <strong>Q: Bot 沒有回應？</strong>
                <p className="mt-1">檢查工作流是否「Active」狀態</p>
              </div>
              <div>
                <strong>Q: 出現錯誤訊息？</strong>
                <p className="mt-1">確認 Webhook URL 設定正確</p>
              </div>
              <div>
                <strong>Q: 憑證錯誤？</strong>
                <p className="mt-1">重新檢查 Channel Access Token</p>
              </div>
            </div>
          </div>

          <div className="bg-[#e3f2fd] p-6 rounded-2xl border-l-4 border-[#2196f3]">
            <strong className="text-[20px] text-[#1e3c72] mb-2 block">🎉 恭喜！</strong>
            <p className="text-[18px] text-[#666]">
              你已經成功建立第一個 LINE Bot 自動回覆！<br/>
              接下來我們會學習更進階的應用。
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 7: 下一步
    <Slide key="next">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <MessageSquare size={100} className="text-[#06c755] mb-8 opacity-80" />
        <h2 className="text-[#1e3c72] text-[36px] md:text-[48px] font-bold mb-6">🎊 完成 Part 4！</h2>
        <p className="text-[24px] text-[#666] mb-8 max-w-[800px]">
          你已經學會如何串接 n8n 與 LINE Bot！<br/>
          現在可以接收和回覆訊息了。
        </p>
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-8 py-4 rounded-2xl text-[20px] font-semibold">
          👉 繼續前往 Part 5 學習實戰應用！
        </div>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 4: n8n 串接 LINE Bot" slides={slides} />;
}
