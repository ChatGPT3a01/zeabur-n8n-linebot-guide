import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { Webhook, MessageSquare, PlayCircle, CheckCircle2, Copy, AlertTriangle, Bug, TestTube, RefreshCw, Send } from "lucide-react";

export default function Part4() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">n8n × LINE Integration</h4>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[68px] font-bold mb-6">Part 4: n8n 串接 LINE Bot</h1>
        <h2 className="text-[#666] text-[30px] md:text-[36px] font-normal border-none max-w-[800px]">
          設定 Webhook 與建立第一個自動回覆工作流
        </h2>
      </div>
    </Slide>,

    // Slide 2: Webhook 概念
    <Slide key="webhook-concept">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔗 什麼是 Webhook？</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-8 rounded-2xl shadow-xl text-center">
          <Webhook size={64} className="mx-auto mb-4" />
          <h3 className="text-[36px] font-bold mb-3">Webhook = 即時通知的窗口</h3>
          <p className="text-[24px]">當有人傳訊息給 LINE Bot，LINE 會立即把訊息「推送」到這個窗口</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500">
            <h3 className="text-[28px] font-bold text-blue-600 mb-4">🔄 傳統方式（輪詢）</h3>
            <p className="text-[22px] text-[#666] mb-3">程式每隔一段時間主動「詢問」LINE：有新訊息嗎？</p>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>❌ 浪費資源（不斷詢問）</li>
              <li>❌ 反應慢（要等到下次詢問）</li>
              <li>❌ 增加伺服器負擔</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-500">
            <h3 className="text-[28px] font-bold text-green-600 mb-4">⚡ Webhook 方式（推送）</h3>
            <p className="text-[22px] text-[#666] mb-3">有新訊息時，LINE 主動「推送」通知給 n8n</p>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>✅ 即時反應（秒級回應）</li>
              <li>✅ 節省資源（有訊息才處理）</li>
              <li>✅ 簡單高效</li>
            </ul>
          </div>
        </div>

        <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef]">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-4">📊 運作流程圖解</h3>
          <div className="flex items-center justify-around flex-wrap gap-4">
            <div className="text-center">
              <div className="bg-[#06c755] text-white w-16 h-16 rounded-full flex items-center justify-center text-[36px] mb-2 mx-auto">👤</div>
              <p className="text-[20px] font-semibold">用戶</p>
              <p className="text-[18px] text-gray-500">傳送訊息</p>
            </div>

            <div className="text-[40px]">→</div>

            <div className="text-center">
              <div className="bg-[#00b900] text-white w-16 h-16 rounded-full flex items-center justify-center text-[36px] mb-2 mx-auto">💬</div>
              <p className="text-[20px] font-semibold">LINE</p>
              <p className="text-[18px] text-gray-500">推送到 Webhook</p>
            </div>

            <div className="text-[40px]">→</div>

            <div className="text-center">
              <div className="bg-[#ff4081] text-white w-16 h-16 rounded-full flex items-center justify-center text-[36px] mb-2 mx-auto">⚙️</div>
              <p className="text-[20px] font-semibold">n8n</p>
              <p className="text-[18px] text-gray-500">接收並處理</p>
            </div>

            <div className="text-[40px]">→</div>

            <div className="text-center">
              <div className="bg-[#667eea] text-white w-16 h-16 rounded-full flex items-center justify-center text-[36px] mb-2 mx-auto">📤</div>
              <p className="text-[20px] font-semibold">回應</p>
              <p className="text-[18px] text-gray-500">自動回覆用戶</p>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 3: Create Workflow
    <Slide key="create-workflow">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📋 步驟 1：建立新的工作流</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">在 n8n 中建立第一個 LINE Bot 自動回覆工作流：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">回到 n8n 主介面</strong>
                <p className="text-[22px] text-[#666]">點擊左側選單的「Workflows」</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Add Workflow」</strong>
                <p className="text-[22px] text-[#666] mb-3">在右上角找到「+ Add Workflow」按鈕</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-[21px] text-gray-600">會進入空白的 Canvas（畫布），準備設計工作流</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">命名工作流（選填）</strong>
                <p className="text-[22px] text-[#666] mb-3">點擊左上角的「My workflow」，可以改名為：</p>
                <code className="bg-gray-100 px-4 py-2 rounded text-red-600 text-[22px]">LINE Bot 自動回覆</code>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">準備就緒！</strong>
                <p className="text-[22px] text-[#666]">現在可以開始新增節點了</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 4: Add Webhook Node
    <Slide key="add-webhook">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔌 步驟 2：新增 Webhook 節點</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">Webhook 節點負責接收來自 LINE 的訊息：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊 Canvas 上的「+」按鈕</strong>
                <p className="text-[22px] text-[#666]">或按下鍵盤的 Tab 鍵快速新增節點</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">搜尋「Webhook」</strong>
                <p className="text-[22px] text-[#666] mb-3">在節點搜尋框輸入 <code className="bg-gray-100 px-2 py-1 rounded">Webhook</code></p>
                <div className="bg-blue-50 border border-blue-200 p-3 rounded">
                  <p className="text-[21px] text-blue-700">💡 會看到「Webhook」節點，點擊選擇</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">設定 HTTP Method</strong>
                <p className="text-[22px] text-[#666] mb-3">在節點設定中找到「HTTP Method」</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-[21px] text-gray-700 mb-2">確認設定為：<strong className="text-red-600">POST</strong></p>
                  <p className="text-[19px] text-gray-500">LINE 會使用 POST 方法發送訊息</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">設定 Path（路徑）</strong>
                <p className="text-[22px] text-[#666] mb-3">可以自訂路徑，例如：</p>
                <code className="bg-gray-100 px-4 py-2 rounded text-red-600 text-[22px]">line-bot</code>
                <p className="text-[20px] text-gray-500 mt-2">或保持預設的隨機路徑也可以</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">Webhook 節點設定完成</strong>
                <p className="text-[22px] text-[#666]">節點會顯示在 Canvas 上</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-amber-800">
            <strong>⚠️ 重要：</strong>不要關閉這個工作流，我們還需要複製 Webhook URL！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 5: Copy Webhook URL
    <Slide key="copy-webhook-url">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📋 步驟 3：取得 Webhook URL</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">複製 Webhook URL，稍後要填入 LINE Developers Console：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊 Webhook 節點</strong>
                <p className="text-[22px] text-[#666]">確保 Webhook 節點被選中（會有藍色框線）</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">找到「Webhook URLs」區塊</strong>
                <p className="text-[22px] text-[#666] mb-3">在節點設定面板中，會看到兩個 URL：</p>
                <div className="space-y-3">
                  <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                    <p className="text-[20px] text-gray-600 mb-1">Test URL（測試用）</p>
                    <code className="text-[19px] text-gray-500 break-all">
                      https://n8n-xxx.zeabur.app/webhook-test/line-bot
                    </code>
                  </div>
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
                    <p className="text-[20px] text-green-700 mb-1 font-bold">✅ Production URL（正式用）← 要複製這個</p>
                    <code className="text-[19px] text-green-600 break-all">
                      https://n8n-xxx.zeabur.app/webhook/line-bot
                    </code>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">複製 Production URL</strong>
                <p className="text-[22px] text-[#666] mb-3">點擊 Production URL 旁的 <Copy size={16} className="inline" /> 複製按鈕</p>
                <div className="bg-red-50 border border-red-300 p-3 rounded">
                  <p className="text-[20px] text-red-700">⚠️ 一定要複製「Production URL」，不是 Test URL！</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">暫存到記事本</strong>
                <p className="text-[22px] text-[#666]">將 URL 貼到記事本，等等會用到</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-blue-800">
            <strong>💡 Test URL vs Production URL：</strong><br/>
            • <strong>Test URL：</strong>手動測試用，工作流需要開啟才能使用<br/>
            • <strong>Production URL：</strong>正式環境用，工作流 Active 後自動運作
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 6: Set Webhook in LINE
    <Slide key="set-webhook-line">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔗 步驟 4：在 LINE 設定 Webhook URL</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">回到 LINE Developers Console，設定 Webhook：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">開啟 LINE Developers Console</strong>
                <p className="text-[22px] text-[#666]">進入你的 Channel 管理頁面</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">切換到「Messaging API」分頁</strong>
                <p className="text-[22px] text-[#666]">在頁面上方找到「Messaging API」標籤</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">找到「Webhook settings」區塊</strong>
                <p className="text-[22px] text-[#666] mb-3">往下滾動找到「Webhook URL」欄位</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-[20px] text-gray-600 mb-2">Webhook URL</p>
                  <input
                    type="text"
                    disabled
                    placeholder="https://n8n-xxx.zeabur.app/webhook/line-bot"
                    className="w-full p-3 rounded border border-gray-300 bg-white text-gray-600 text-[20px]"
                  />
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊「Edit」或「Update」</strong>
                <p className="text-[22px] text-[#666] mb-3">貼上剛才複製的 n8n Webhook URL</p>
                <div className="bg-amber-50 border border-amber-200 p-3 rounded">
                  <p className="text-[20px] text-amber-700">💡 確認 URL 是 Production URL，開頭應該是 https://</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">5</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">啟用「Use webhook」</strong>
                <p className="text-[22px] text-[#666] mb-3">將開關切換為 <strong className="text-green-600">Enabled</strong></p>
                <div className="bg-gray-100 p-4 rounded-lg flex items-center justify-between">
                  <span className="text-[22px]">Use webhook</span>
                  <div className="bg-green-500 w-12 h-6 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 bg-white w-4 h-4 rounded-full"></div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">設定完成！</strong>
                <p className="text-[22px] text-[#666]">LINE Bot 現在會將訊息推送到 n8n</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 7: Add LINE Reply Node
    <Slide key="add-reply-node">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">💬 步驟 5：新增 LINE 回覆節點</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">建立第二個節點，用來回覆訊息給用戶：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">在 Webhook 節點後點擊「+」</strong>
                <p className="text-[22px] text-[#666]">在 Webhook 節點的右側連接點點擊「+」新增節點</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">搜尋「LINE」</strong>
                <p className="text-[22px] text-[#666] mb-3">在節點搜尋框輸入 <code className="bg-gray-100 px-2 py-1 rounded">LINE</code></p>
                <p className="text-[22px] text-[#666]">選擇 <strong className="text-green-600">「LINE」</strong> 節點</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">選擇 Credential</strong>
                <p className="text-[22px] text-[#666] mb-3">在「Credential to connect with」下拉選單中</p>
                <p className="text-[22px] text-[#666]">選擇 <strong className="text-green-600">「LINE Bot」</strong>（Part 3 建立的憑證）</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">設定 Resource 和 Operation</strong>
                <div className="mt-3 space-y-3 bg-gray-50 p-4 rounded-lg">
                  <div>
                    <p className="text-[20px] text-gray-600 mb-1"><strong>Resource：</strong></p>
                    <p className="text-[22px] text-gray-800">選擇 <code className="bg-white px-3 py-1 rounded">Message</code></p>
                  </div>
                  <div>
                    <p className="text-[20px] text-gray-600 mb-1"><strong>Operation：</strong></p>
                    <p className="text-[22px] text-gray-800">選擇 <code className="bg-white px-3 py-1 rounded">Reply</code></p>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">5</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">設定 Reply Token</strong>
                <p className="text-[22px] text-[#666] mb-3">在「Reply Token」欄位點擊，選擇表達式（Expression）</p>
                <div className="bg-gray-100 p-4 rounded-lg">
                  <p className="text-[20px] text-gray-600 mb-2">輸入或選擇：</p>
                  <code className="text-[20px] text-red-600 break-all">
                    {"{{ $json.events[0].replyToken }}"}
                  </code>
                </div>
                <p className="text-[19px] text-gray-500 mt-2">這會自動取得 LINE 傳來的 reply token</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">6</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">設定回覆訊息</strong>
                <p className="text-[22px] text-[#666] mb-3">在「Message」→「Text」欄位輸入回覆內容：</p>
                <div className="bg-gray-50 p-4 rounded-lg border border-gray-200">
                  <p className="text-[22px] text-gray-800">你好！我是自動回覆機器人 🤖</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">LINE 節點設定完成！</strong>
                <p className="text-[22px] text-[#666]">兩個節點應該已經用線連接在一起</p>
              </div>
            </li>
          </ol>
        </div>
      </div>
    </Slide>,

    // Slide 8: Save and Activate
    <Slide key="save-activate">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">💾 步驟 6：儲存並啟用工作流</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">最後一步：儲存工作流並啟用自動執行：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">儲存工作流</strong>
                <p className="text-[22px] text-[#666] mb-3">點擊右上角的「Save」按鈕（或按 Ctrl+S / Cmd+S）</p>
                <div className="bg-green-50 border border-green-200 p-3 rounded">
                  <p className="text-[20px] text-green-700">✅ 看到「Workflow saved」提示表示儲存成功</p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">啟用工作流（Active）</strong>
                <p className="text-[22px] text-[#666] mb-3">在右上角找到「Inactive」開關</p>
                <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
                  <div className="bg-gray-400 w-14 h-7 rounded-full relative cursor-pointer">
                    <div className="absolute left-1 top-1 bg-white w-5 h-5 rounded-full"></div>
                  </div>
                  <span className="text-gray-600">Inactive</span>
                  <span className="text-[30px]">→</span>
                  <div className="bg-green-500 w-14 h-7 rounded-full relative cursor-pointer">
                    <div className="absolute right-1 top-1 bg-white w-5 h-5 rounded-full"></div>
                  </div>
                  <span className="text-green-600 font-bold">Active</span>
                </div>
                <p className="text-[20px] text-gray-500 mt-3">點擊開關，從灰色變成綠色</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">工作流已啟用！</strong>
                <p className="text-[22px] text-[#666] mb-3">現在工作流會 24/7 自動運作</p>
                <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                  <p className="text-[21px] text-blue-800">
                    <strong>💡 Active 狀態：</strong><br/>
                    • 工作流會持續監聽 Webhook<br/>
                    • 有訊息進來就自動執行<br/>
                    • 不需要手動執行
                  </p>
                </div>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-amber-50 border border-amber-300 p-5 rounded-xl">
          <p className="text-[22px] text-amber-800">
            <strong>⚠️ 重要：</strong>工作流必須是 Active 狀態，Webhook 才會運作！如果是 Inactive，LINE 發送的訊息會被忽略。
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 9: First Test
    <Slide key="first-test">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🧪 步驟 7：第一次測試</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">現在來測試你的 LINE Bot 是否正常運作：</p>

        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-8 rounded-2xl shadow-xl text-center mb-6">
          <TestTube size={64} className="mx-auto mb-4" />
          <h3 className="text-[36px] font-bold mb-3">準備測試！</h3>
          <p className="text-[24px]">打開手機 LINE，找到你的 Bot 好友</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6">測試步驟：</h3>

          <ol className="space-y-5 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">打開 LINE App</strong>
                <p className="text-[22px] text-[#666]">在好友列表中找到你的 Bot</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">傳送任意訊息</strong>
                <p className="text-[22px] text-[#666] mb-3">例如：「你好」、「Hi」、「測試」</p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <div className="flex justify-end mb-2">
                    <div className="bg-[#06c755] text-white px-4 py-2 rounded-2xl">你好</div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#06c755] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">等待 Bot 回覆</strong>
                <p className="text-[22px] text-[#666] mb-3">應該會立即收到回覆（1-2 秒內）</p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg">
                  <div className="flex justify-start mb-2">
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded-2xl">
                      你好！我是自動回覆機器人 🤖
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">測試成功！</strong>
                <p className="text-[22px] text-[#666]">恭喜！你的第一個 LINE Bot 自動回覆工作流已經運作了 🎉</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded-r-lg">
            <h4 className="text-[24px] font-bold text-green-700 mb-2">✅ 成功情況</h4>
            <p className="text-[21px] text-green-600">• Bot 立即回覆固定訊息<br/>• 回覆速度快（1-2秒）<br/>• 無論傳什麼都會回覆</p>
          </div>

          <div className="bg-red-50 border-l-4 border-red-500 p-4 rounded-r-lg">
            <h4 className="text-[24px] font-bold text-red-700 mb-2">❌ 失敗情況</h4>
            <p className="text-[21px] text-red-600">• Bot 完全沒反應<br/>• 等很久才回覆<br/>• 回覆錯誤訊息<br/>→ 請看下一頁故障排除</p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 10: Check Execution
    <Slide key="check-execution">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📊 查看執行記錄</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">在 n8n 中查看工作流的執行狀態和除錯資訊：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6">查看方式：</h3>

          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊左側選單「Executions」</strong>
                <p className="text-[22px] text-[#666]">會看到所有工作流的執行歷史</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">找到最新的執行記錄</strong>
                <p className="text-[22px] text-[#666] mb-3">每次有人傳訊息，都會產生一筆執行記錄</p>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="flex items-center justify-between mb-2 pb-2 border-b border-gray-200">
                    <div className="flex items-center gap-3">
                      <div className="bg-green-500 w-3 h-3 rounded-full"></div>
                      <span className="text-[22px] font-semibold">LINE Bot 自動回覆</span>
                    </div>
                    <span className="text-[20px] text-gray-500">剛剛</span>
                  </div>
                  <p className="text-[20px] text-gray-600">Status: <span className="text-green-600 font-bold">Success</span></p>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#764ba2] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊記錄查看詳細資訊</strong>
                <p className="text-[22px] text-[#666] mb-3">可以看到：</p>
                <ul className="space-y-2 text-[21px] text-[#666]">
                  <li>• 接收到的訊息內容</li>
                  <li>• 每個節點的輸入/輸出資料</li>
                  <li>• 執行時間和狀態</li>
                  <li>• 如果失敗，會顯示錯誤訊息</li>
                </ul>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-blue-50 border-l-4 border-blue-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-blue-800">
            <strong>💡 除錯技巧：</strong><br/>
            • 綠色標記 = 執行成功<br/>
            • 紅色標記 = 執行失敗，點擊查看錯誤訊息<br/>
            • 點擊每個節點可以查看資料流轉過程
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 11: Add More Features
    <Slide key="add-features">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🎨 進階：讓 Bot 回傳用戶的訊息</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">修改工作流，讓 Bot 不只回固定訊息，而是「鸚鵡學舌」：</p>

        <div className="bg-white p-8 rounded-2xl shadow-lg border border-[#e0e0e0]">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6">操作步驟：</h3>

          <ol className="space-y-6 text-[24px]">
            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">1</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">點擊 LINE 節點</strong>
                <p className="text-[22px] text-[#666]">回到工作流編輯頁面，選擇 LINE 節點</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">2</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">修改回覆訊息</strong>
                <p className="text-[22px] text-[#666] mb-3">將「Message」→「Text」欄位改為表達式（Expression）</p>
                <div className="bg-gray-100 p-4 rounded-lg mb-3">
                  <p className="text-[20px] text-gray-600 mb-2">輸入以下表達式：</p>
                  <code className="text-[20px] text-red-600 break-all">
                    {"你說：{{ $json.events[0].message.text }}"}
                  </code>
                </div>
                <p className="text-[20px] text-gray-500">這會取得用戶傳送的訊息內容</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">3</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">儲存工作流</strong>
                <p className="text-[22px] text-[#666]">點擊「Save」（Ctrl+S）</p>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-[#667eea] text-white w-10 h-10 rounded-full flex items-center justify-center font-bold flex-shrink-0 text-[26px]">4</span>
              <div className="flex-1">
                <strong className="text-[26px] text-[#1e3c72] block mb-2">測試看看</strong>
                <p className="text-[22px] text-[#666] mb-3">在 LINE 傳送任意訊息：</p>
                <div className="bg-gray-50 border border-gray-200 p-4 rounded-lg space-y-3">
                  <div className="flex justify-end">
                    <div className="bg-[#06c755] text-white px-4 py-2 rounded-2xl">Hello World</div>
                  </div>
                  <div className="flex justify-start">
                    <div className="bg-white border border-gray-300 px-4 py-2 rounded-2xl">
                      你說：Hello World
                    </div>
                  </div>
                </div>
              </div>
            </li>

            <li className="flex items-start gap-3">
              <span className="bg-green-500 text-white w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0">
                <CheckCircle2 size={24} />
              </span>
              <div className="flex-1">
                <strong className="text-[26px] text-green-600 block mb-2">成功！鸚鵡學舌 Bot 完成</strong>
                <p className="text-[22px] text-[#666]">Bot 現在會重複你說的話了</p>
              </div>
            </li>
          </ol>
        </div>

        <div className="bg-purple-50 border border-purple-300 p-5 rounded-xl">
          <h4 className="text-[24px] font-bold text-purple-800 mb-3">🎓 學習重點</h4>
          <p className="text-[21px] text-purple-700">
            透過 <code className="bg-white px-2 py-1 rounded">{"{{ }}"}</code> 表達式，你可以存取前一個節點的資料。<br/>
            <strong>$json.events[0].message.text</strong> = Webhook 接收到的用戶訊息
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 12: Understanding Data Flow
    <Slide key="data-flow">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔍 理解 n8n 資料流</h2>

      <div className="space-y-6">
        <p className="text-[26px] text-[#444]">了解資料如何在節點之間流動，是掌握 n8n 的關鍵：</p>

        <div className="bg-gradient-to-br from-gray-50 to-gray-100 p-8 rounded-2xl border border-gray-300 shadow-inner">
          <h3 className="text-[30px] font-bold text-[#1e3c72] mb-6 text-center">資料流動方向</h3>

          <div className="space-y-4">
            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-purple-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold">1</div>
                <h4 className="text-[26px] font-bold">Webhook 節點</h4>
              </div>
              <p className="text-[22px] text-gray-700 mb-2"><strong>接收：</strong>LINE 推送的訊息資料</p>
              <p className="text-[22px] text-gray-700"><strong>輸出：</strong>包含用戶訊息、用戶ID、時間戳等資訊的 JSON 物件</p>
              <div className="bg-gray-50 p-3 rounded mt-3">
                <code className="text-[18px] text-gray-600 break-all">
                  {`{ events: [{ message: { text: "你好" }, replyToken: "xxx" }] }`}
                </code>
              </div>
            </div>

            <div className="text-center text-[36px]">↓</div>

            <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
              <div className="flex items-center gap-4 mb-3">
                <div className="bg-green-500 text-white w-12 h-12 rounded flex items-center justify-center font-bold">2</div>
                <h4 className="text-[26px] font-bold">LINE 節點</h4>
              </div>
              <p className="text-[22px] text-gray-700 mb-2"><strong>接收：</strong>Webhook 節點的輸出資料</p>
              <p className="text-[22px] text-gray-700 mb-2"><strong>處理：</strong>取出需要的欄位（replyToken、message.text）</p>
              <p className="text-[22px] text-gray-700"><strong>輸出：</strong>發送回覆到 LINE</p>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-[26px] font-bold text-[#1e3c72] mb-4">📋 常用表達式</h4>
            <div className="space-y-3 text-[21px]">
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-red-600">{"{{ $json }}"}</code>
                <p className="text-gray-600 text-[19px] mt-1">前一個節點的完整資料</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-red-600">{"{{ $json.events }}"}</code>
                <p className="text-gray-600 text-[19px] mt-1">LINE 的 events 陣列</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-red-600">{"{{ $json.events[0].message.text }}"}</code>
                <p className="text-gray-600 text-[19px] mt-1">用戶傳送的文字訊息</p>
              </div>
              <div className="bg-gray-50 p-3 rounded">
                <code className="text-red-600">{"{{ $json.events[0].source.userId }}"}</code>
                <p className="text-gray-600 text-[19px] mt-1">用戶的 LINE ID</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg">
            <h4 className="text-[26px] font-bold text-[#1e3c72] mb-4">💡 實用技巧</h4>
            <ul className="space-y-3 text-[21px] text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>點擊節點查看「Input」和「Output」資料</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>使用表達式編輯器可以自動補全</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>測試執行後可以看到實際資料結構</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-blue-500 mt-1">•</span>
                <span>不確定路徑時，先用 {`{{ $json }}`} 查看完整資料</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 13: Common Issues
    <Slide key="common-issues">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔧 常見問題排解</h2>

      <div className="space-y-5">
        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-red-500">
          <h3 className="text-[26px] font-bold text-red-600 mb-3 flex items-center gap-2">
            <Bug size={24} /> 問題1：Bot 完全沒反應
          </h3>
          <p className="text-[22px] text-[#555] mb-3"><strong>可能原因：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666] mb-3">
            <li>工作流沒有啟用（Inactive 狀態）</li>
            <li>Webhook URL 設定錯誤</li>
            <li>LINE 的「Use webhook」沒有啟用</li>
            <li>n8n 服務停止運作</li>
          </ul>
          <p className="text-[22px] text-green-700"><strong>解決方法：</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-[21px] text-[#666]">
            <li>確認工作流右上角是「Active」（綠色）</li>
            <li>檢查 Webhook URL 是否正確（Production URL）</li>
            <li>確認 LINE Developers Console 的 Webhook 已啟用</li>
            <li>檢查 Zeabur 上的 n8n 服務是否 Running</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-orange-500">
          <h3 className="text-[26px] font-bold text-orange-600 mb-3">⚠️ 問題2：Bot 回覆「undefined」或錯誤訊息</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>可能原因：</strong>表達式路徑錯誤</p>
          <p className="text-[22px] text-green-700 mb-2"><strong>解決方法：</strong></p>
          <ol className="list-decimal pl-6 space-y-2 text-[21px] text-[#666]">
            <li>查看 Executions 中的實際資料結構</li>
            <li>確認表達式路徑正確：<code className="bg-gray-100 px-2 py-1 rounded text-red-600">{"{{ $json.events[0].message.text }}"}</code></li>
            <li>注意大小寫和拼寫</li>
            <li>如果是圖片/貼圖，message.text 會是空的</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-blue-500">
          <h3 className="text-[26px] font-bold text-blue-600 mb-3">💡 問題3：Bot 回覆很慢（超過5秒）</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>可能原因：</strong>n8n 服務資源不足或網路延遲</p>
          <p className="text-[22px] text-green-700 mb-2"><strong>解決方法：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666]">
            <li>檢查 Zeabur 服務狀態和資源使用</li>
            <li>簡化工作流邏輯（減少節點數量）</li>
            <li>檢查是否有外部 API 調用延遲</li>
          </ul>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-purple-500">
          <h3 className="text-[26px] font-bold text-purple-600 mb-3">🔍 問題4：收到 LINE 錯誤訊息</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>症狀：</strong>n8n 顯示「400 Bad Request」或「401 Unauthorized」</p>
          <p className="text-[22px] text-green-700 mb-2"><strong>解決方法：</strong></p>
          <ol className="list-decimal pl-6 space-y-1 text-[21px] text-[#666]">
            <li><strong>401 錯誤：</strong>檢查 LINE 憑證（Token/Secret）是否正確</li>
            <li><strong>400 錯誤：</strong>檢查 Reply Token 表達式是否正確</li>
            <li><strong>Reply Token 過期：</strong>Reply Token 只能使用一次且有時效，不能重複測試</li>
          </ol>
        </div>

        <div className="bg-white p-6 rounded-xl shadow-md border-l-4 border-green-500">
          <h3 className="text-[26px] font-bold text-green-600 mb-3">📱 問題5：Webhook URL 驗證失敗</h3>
          <p className="text-[22px] text-[#555] mb-2"><strong>症狀：</strong>在 LINE Developers Console 點擊「Verify」顯示失敗</p>
          <p className="text-[22px] text-green-700 mb-2"><strong>解決方法：</strong></p>
          <ul className="list-disc pl-6 space-y-1 text-[21px] text-[#666]">
            <li>確認工作流已儲存並啟用（Active）</li>
            <li>確認 Webhook URL 以 https:// 開頭</li>
            <li>確認 n8n 服務正常運作</li>
            <li>實際上即使驗證失敗，通常還是能正常運作，可以直接測試</li>
          </ul>
        </div>
      </div>
    </Slide>,

    // Slide 14: Debugging Tips
    <Slide key="debugging">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🐛 除錯技巧大全</h2>

      <div className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-blue-500">
            <h3 className="text-[28px] font-bold text-blue-600 mb-4">1️⃣ 查看執行記錄</h3>
            <p className="text-[22px] text-gray-700 mb-3">最重要的除錯方式：</p>
            <ul className="space-y-2 text-[21px] text-gray-600">
              <li>• 點擊「Executions」查看所有執行</li>
              <li>• 綠色 = 成功，紅色 = 失敗</li>
              <li>• 點擊記錄查看每個節點的輸入/輸出</li>
              <li>• 失敗時會顯示錯誤訊息</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-green-500">
            <h3 className="text-[28px] font-bold text-green-600 mb-4">2️⃣ 手動測試工作流</h3>
            <p className="text-[22px] text-gray-700 mb-3">不要直接用 LINE 測試：</p>
            <ul className="space-y-2 text-[21px] text-gray-600">
              <li>• 點擊「Execute Workflow」手動執行</li>
              <li>• 會顯示每個節點的即時資料</li>
              <li>• 可以重複執行不受限制</li>
              <li>• 適合測試表達式是否正確</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-purple-500">
            <h3 className="text-[28px] font-bold text-purple-600 mb-4">3️⃣ 使用測試資料</h3>
            <p className="text-[22px] text-gray-700 mb-3">在 Webhook 節點：</p>
            <ul className="space-y-2 text-[21px] text-gray-600">
              <li>• 點擊「Listen for Test Event」</li>
              <li>• 傳送一則 LINE 訊息</li>
              <li>• Webhook 會捕捉實際資料</li>
              <li>• 之後可以用這筆資料測試</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-orange-500">
            <h3 className="text-[28px] font-bold text-orange-600 mb-4">4️⃣ 檢查 LINE 設定</h3>
            <p className="text-[22px] text-gray-700 mb-3">確認 LINE 端設定：</p>
            <ul className="space-y-2 text-[21px] text-gray-600">
              <li>• Webhook URL 是否正確</li>
              <li>• Use webhook 是否啟用</li>
              <li>• 自動回應是否已關閉</li>
              <li>• Access Token 是否正確</li>
            </ul>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-6 rounded-2xl">
          <h3 className="text-[30px] font-bold mb-4">🎯 黃金除錯流程</h3>
          <ol className="space-y-3 text-[22px]">
            <li><strong>1.</strong> 確認工作流是 Active 狀態</li>
            <li><strong>2.</strong> 查看 Executions 是否有新記錄產生</li>
            <li><strong>3.</strong> 如果沒記錄 → 檢查 Webhook URL 設定</li>
            <li><strong>4.</strong> 如果有記錄但失敗 → 查看錯誤訊息</li>
            <li><strong>5.</strong> 檢查每個節點的輸入/輸出資料</li>
            <li><strong>6.</strong> 使用「Execute Workflow」重複測試</li>
          </ol>
        </div>

        <div className="bg-amber-50 border-l-4 border-amber-500 p-5 rounded-r-lg">
          <p className="text-[23px] text-amber-800">
            <strong>💡 專業提示：</strong>遇到問題時，先查看 Executions 的錯誤訊息，90% 的問題都能從錯誤訊息找到原因！
          </p>
        </div>
      </div>
    </Slide>,

    // Slide 15: Summary
    <Slide key="summary">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🎉 Part 4 完成！</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-8 rounded-2xl shadow-xl text-center">
          <CheckCircle2 size={64} className="mx-auto mb-4" />
          <h3 className="text-[40px] font-bold mb-4">恭喜！你的 LINE Bot 已經上線了！</h3>
          <p className="text-[26px]">現在你已經掌握 n8n 和 LINE Bot 的基礎串接</p>
        </div>

        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h3 className="text-[26px] font-bold text-[#1e3c72] mb-6 text-center">📚 你學會了什麼？</h3>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h4 className="text-[26px] font-bold text-green-600 mb-4">✅ 核心技能</h4>
              <ul className="space-y-3 text-[22px] text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>理解 Webhook 運作原理</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>在 n8n 建立工作流</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>設定 Webhook 和 LINE 節點</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>啟用和測試工作流</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-green-500 flex-shrink-0 mt-1" />
                  <span>使用表達式存取資料</span>
                </li>
              </ul>
            </div>

            <div>
              <h4 className="text-[26px] font-bold text-blue-600 mb-4">🛠️ 實用技能</h4>
              <ul className="space-y-3 text-[22px] text-gray-700">
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span>查看執行記錄除錯</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span>理解資料流動原理</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span>排解常見問題</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span>手動測試工作流</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 size={20} className="text-blue-500 flex-shrink-0 mt-1" />
                  <span>動態回應用戶訊息</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="bg-purple-50 border border-purple-300 p-6 rounded-2xl">
          <h3 className="text-[30px] font-bold text-purple-800 mb-4">🚀 接下來：Part 5 實戰應用</h3>
          <p className="text-[24px] text-purple-700 mb-4">在 Part 5 中，你將學習：</p>
          <ul className="space-y-2 text-[22px] text-purple-600">
            <li>• 🌤️ <strong>天氣查詢機器人：</strong>串接天氣 API，查詢即時天氣</li>
            <li>• 📰 <strong>RSS 爬蟲工作流：</strong>自動抓取新聞並推播</li>
            <li>• 📊 <strong>每日摘要工作流：</strong>定時整合多個資料來源</li>
          </ul>
        </div>

        <div className="bg-green-50 border-l-4 border-green-500 p-5 rounded-r-lg text-center">
          <p className="text-[26px] text-green-800 font-bold">
            🎊 你已經完成基礎教學！準備好進入實戰應用了嗎？
          </p>
        </div>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 4: n8n 串接 LINE Bot" slides={slides} />;
}
