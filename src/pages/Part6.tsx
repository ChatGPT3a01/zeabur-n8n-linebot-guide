import { SlideDeck } from "@/components/SlideDeck";
import { Slide } from "@/components/Slide";
import { Shield, Zap, Bug, Database, Globe, Lock, TrendingUp, BookOpen, Lightbulb, AlertTriangle, CheckCircle2, Settings, Users, FileText, Github, ExternalLink, Target, Rocket, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Part6() {
  const slides = [
    // Slide 1: Cover
    <Slide key="cover">
      <div className="flex flex-col items-center justify-center h-full text-center">
        <h4 className="text-[#4facfe] tracking-[2px] uppercase mb-4 font-bold">Advanced Topics</h4>
        <h1 className="text-[#1e3c72] text-[64px] md:text-[68px] font-bold mb-6">Part 6: 進階技巧與最佳實踐</h1>
        <h2 className="text-[#666] text-[30px] md:text-[36px] font-normal border-none max-w-[900px]">
          掌握 n8n 的進階功能，打造更強大的自動化工作流
        </h2>
        <div className="flex gap-6 mt-10">
          <span className="bg-gradient-to-r from-[#667eea] to-[#764ba2] px-6 py-3 rounded-xl text-white font-bold text-[24px] flex items-center gap-2">
            ⚡ 效能優化
          </span>
          <span className="bg-gradient-to-r from-[#f093fb] to-[#f5576c] px-6 py-3 rounded-xl text-white font-bold text-[24px] flex items-center gap-2">
            🔒 安全性
          </span>
          <span className="bg-gradient-to-r from-[#4facfe] to-[#00f2fe] px-6 py-3 rounded-xl text-white font-bold text-[24px] flex items-center gap-2">
            🐛 除錯技巧
          </span>
        </div>
      </div>
    </Slide>,

    // Slide 2: 課程目標
    <Slide key="objectives">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🎯 本章學習目標</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Target className="text-[#667eea]" size={32} />
              核心目標
            </h3>
            <ul className="space-y-3 text-[23px]">
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">1.</span>
                <span>學習 n8n 進階功能與技巧</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">2.</span>
                <span>掌握工作流效能優化方法</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">3.</span>
                <span>了解安全性最佳實踐</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">4.</span>
                <span>建立完善的錯誤處理機制</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold">5.</span>
                <span>熟悉常見問題的解決方法</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/10 p-6 rounded-2xl border-l-4 border-[#4facfe]">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4">📚 涵蓋主題</h3>
            <div className="grid grid-cols-2 gap-4 text-[22px]">
              <div className="bg-white p-4 rounded-xl">
                <div className="text-[36px] mb-2">⚡</div>
                <strong className="text-[20px]">效能優化</strong>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-[36px] mb-2">🔒</div>
                <strong className="text-[20px]">安全防護</strong>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-[36px] mb-2">🐛</div>
                <strong className="text-[20px]">除錯技巧</strong>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-[36px] mb-2">📊</div>
                <strong className="text-[20px]">監控管理</strong>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-[36px] mb-2">🔄</div>
                <strong className="text-[20px]">版本控制</strong>
              </div>
              <div className="bg-white p-4 rounded-xl">
                <div className="text-[36px] mb-2">🚀</div>
                <strong className="text-[20px]">進階功能</strong>
              </div>
            </div>
          </div>

          <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl">
            <strong className="block mb-2 text-[24px]">💡 學習建議</strong>
            <p className="text-[22px]">
              這些是進階內容，建議先完成 Part 1-5 後再學習。<br/>
              實際操作比理論更重要，多嘗試多實驗！
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 3: 效能優化
    <Slide key="performance">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">⚡ 效能優化技巧</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Zap className="text-[#ff6b35]" size={32} />
              常見效能問題
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#f44336]">
                <h4 className="text-[24px] font-bold text-[#f44336] mb-2">❌ 問題 1：執行太慢</h4>
                <p className="text-[21px] text-[#666] mb-2">
                  <strong>原因：</strong>處理大量資料時沒有分批
                </p>
                <p className="text-[21px] text-[#666]">
                  <strong className="text-green-700">✓ 解決：</strong>使用「Split In Batches」節點
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#f44336]">
                <h4 className="text-[24px] font-bold text-[#f44336] mb-2">❌ 問題 2：記憶體不足</h4>
                <p className="text-[21px] text-[#666] mb-2">
                  <strong>原因：</strong>一次處理太多資料
                </p>
                <p className="text-[21px] text-[#666]">
                  <strong className="text-green-700">✓ 解決：</strong>限制每次處理的資料量
                </p>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#f44336]">
                <h4 className="text-[24px] font-bold text-[#f44336] mb-2">❌ 問題 3：API 呼叫過多</h4>
                <p className="text-[21px] text-[#666] mb-2">
                  <strong>原因：</strong>沒有使用快取機制
                </p>
                <p className="text-[21px] text-[#666]">
                  <strong className="text-green-700">✓ 解決：</strong>使用 Redis 或記憶體快取
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-4">💡 優化建議</h3>
            <ul className="space-y-4 text-[22px]">
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">1</span>
                <div>
                  <strong>分批處理</strong><br/>
                  <span className="text-[20px] text-[#666]">每次處理 100-500 筆資料</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">2</span>
                <div>
                  <strong>平行執行</strong><br/>
                  <span className="text-[20px] text-[#666]">使用「Merge」節點並行處理</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">3</span>
                <div>
                  <strong>限制 API 呼叫</strong><br/>
                  <span className="text-[20px] text-[#666]">加入延遲避免超過限額</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">4</span>
                <div>
                  <strong>優化資料結構</strong><br/>
                  <span className="text-[20px] text-[#666]">只保留需要的欄位</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">5</span>
                <div>
                  <strong>使用快取</strong><br/>
                  <span className="text-[20px] text-[#666]">重複查詢的資料先快取</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#e3f2fd] p-5 rounded-xl border-l-4 border-[#2196f3]">
            <strong className="text-[24px] text-[#1e3c72] mb-3 block">📊 效能監控</strong>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>• 查看執行時間（Execution Time）</li>
              <li>• 監控記憶體使用量</li>
              <li>• 記錄 API 呼叫次數</li>
              <li>• 定期檢查執行歷史</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 4: 安全性最佳實踐
    <Slide key="security">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔒 安全性最佳實踐</h2>

      <div className="space-y-6">
        <div className="bg-gradient-to-r from-[#f093fb]/10 to-[#f5576c]/10 p-6 rounded-2xl border-l-4 border-[#f5576c]">
          <p className="text-[26px] text-[#333] leading-relaxed">
            保護你的工作流和資料安全是<strong className="text-[#f5576c]">最重要的事情</strong>！
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-xl border-l-4 border-[#f44336] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Lock className="text-[#f44336]" size={32} />
              <h3 className="text-[26px] font-bold text-[#1e3c72]">憑證管理</h3>
            </div>
            <ul className="space-y-3 text-[22px] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-red-600">✓</span>
                <span><strong>絕不</strong>在程式碼中寫入密碼或 API Key</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>使用 n8n 的「Credentials」功能</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>定期更換 API Token</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>限制 API 權限範圍</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#ff6b35] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Shield className="text-[#ff6b35]" size={32} />
              <h3 className="text-[26px] font-bold text-[#1e3c72]">Webhook 安全</h3>
            </div>
            <ul className="space-y-3 text-[22px] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>使用複雜的 Webhook 路徑</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>驗證請求來源（IP 白名單）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>檢查請求簽章（Signature）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>設定請求頻率限制</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#4facfe] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Database className="text-[#4facfe]" size={32} />
              <h3 className="text-[26px] font-bold text-[#1e3c72]">資料保護</h3>
            </div>
            <ul className="space-y-3 text-[22px] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>敏感資料加密儲存</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>不記錄完整的用戶資料</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>定期清理舊的執行記錄</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>遵守 GDPR 等隱私法規</span>
              </li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-xl border-l-4 border-[#667eea] shadow-md">
            <div className="flex items-center gap-3 mb-4">
              <Users className="text-[#667eea]" size={32} />
              <h3 className="text-[26px] font-bold text-[#1e3c72]">存取控制</h3>
            </div>
            <ul className="space-y-3 text-[22px] text-[#666]">
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>使用強密碼登入 n8n</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>啟用雙因素認證（2FA）</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>限制管理員帳號數量</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-green-600">✓</span>
                <span>定期審查存取權限</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="bg-[#ffebee] border-2 border-[#f44336] text-[#c62828] p-6 rounded-xl">
          <strong className="text-[26px] mb-3 block flex items-center gap-2">
            <AlertTriangle size={28} /> 安全警告
          </strong>
          <ul className="space-y-2 text-[22px]">
            <li>⚠️ 絕不分享你的 n8n 登入密碼</li>
            <li>⚠️ 不要將 API Key 推送到 GitHub</li>
            <li>⚠️ 定期檢查工作流執行記錄</li>
            <li>⚠️ 發現異常立即停用工作流</li>
          </ul>
        </div>
      </div>
    </Slide>,

    // Slide 5: 錯誤處理
    <Slide key="error-handling">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🐛 完善的錯誤處理</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Bug className="text-[#f44336]" size={32} />
              錯誤處理策略
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#667eea]">
                <h4 className="text-[24px] font-bold text-[#667eea] mb-2">1️⃣ 使用 Error Trigger</h4>
                <p className="text-[21px] text-[#666]">
                  當工作流出錯時自動觸發：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 發送錯誤通知到 LINE</li>
                  <li>• 記錄錯誤到 Google Sheets</li>
                  <li>• 寄送郵件給管理員</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#4facfe]">
                <h4 className="text-[24px] font-bold text-[#4facfe] mb-2">2️⃣ Try-Catch 模式</h4>
                <p className="text-[21px] text-[#666]">
                  使用「IF」節點檢查：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 檢查 API 回應狀態</li>
                  <li>• 驗證資料格式</li>
                  <li>• 提供預設值或備案</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#06c755]">
                <h4 className="text-[24px] font-bold text-[#06c755] mb-2">3️⃣ 重試機制</h4>
                <p className="text-[21px] text-[#666]">
                  在節點設定中啟用：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 設定重試次數（建議 3 次）</li>
                  <li>• 設定重試間隔（例如 5 秒）</li>
                  <li>• 避免無限重試</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#f44336]/10 to-[#e91e63]/10 p-6 rounded-2xl border-l-4 border-[#f44336]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-4">🔍 除錯技巧</h3>
            <ul className="space-y-4 text-[22px]">
              <li className="flex items-start gap-2">
                <span className="text-[#f44336] font-bold text-[24px]">1</span>
                <div>
                  <strong>查看執行記錄</strong><br/>
                  <span className="text-[20px] text-[#666]">點擊每個節點查看資料</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f44336] font-bold text-[24px]">2</span>
                <div>
                  <strong>使用 Console.log</strong><br/>
                  <span className="text-[20px] text-[#666]">在 Code 節點中印出變數</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f44336] font-bold text-[24px]">3</span>
                <div>
                  <strong>測試模式執行</strong><br/>
                  <span className="text-[20px] text-[#666]">使用 Test URL 避免影響正式環境</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f44336] font-bold text-[24px]">4</span>
                <div>
                  <strong>分段測試</strong><br/>
                  <span className="text-[20px] text-[#666]">一次測試一個節點</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#f44336] font-bold text-[24px]">5</span>
                <div>
                  <strong>使用表達式編輯器</strong><br/>
                  <span className="text-[20px] text-[#666]">檢查變數值和資料結構</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#e3f2fd] p-5 rounded-xl border-l-4 border-[#2196f3]">
            <strong className="text-[24px] text-[#1e3c72] mb-3 block">💡 預防勝於治療</strong>
            <ul className="space-y-2 text-[21px] text-[#666]">
              <li>✓ 詳細的工作流命名</li>
              <li>✓ 加入註解說明複雜邏輯</li>
              <li>✓ 定期備份工作流</li>
              <li>✓ 測試各種邊界情況</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 6: 工作流管理
    <Slide key="workflow-management">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📊 工作流管理與監控</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Settings className="text-[#667eea]" size={32} />
              組織管理技巧
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#667eea]">
                <h4 className="text-[24px] font-bold text-[#667eea] mb-2">命名規範</h4>
                <p className="text-[21px] text-[#666] mb-2">
                  使用清楚的命名方式：
                </p>
                <div className="bg-gray-50 p-3 rounded">
                  <code className="text-[19px] text-[#333]">
                    ✓ LINE-天氣查詢-v2.0<br/>
                    ✓ RSS-科技新報-每日推播<br/>
                    ✗ workflow1<br/>
                    ✗ test
                  </code>
                </div>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#4facfe]">
                <h4 className="text-[24px] font-bold text-[#4facfe] mb-2">使用標籤</h4>
                <p className="text-[21px] text-[#666]">
                  為工作流加上標籤分類：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 🤖 LINE Bot</li>
                  <li>• 📰 RSS 爬蟲</li>
                  <li>• 📊 資料處理</li>
                  <li>• 🔔 通知系統</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#06c755]">
                <h4 className="text-[24px] font-bold text-[#06c755] mb-2">定期清理</h4>
                <p className="text-[21px] text-[#666]">
                  保持工作區整潔：
                </p>
                <ul className="text-[20px] text-[#666] mt-2 ml-4">
                  <li>• 刪除不用的工作流</li>
                  <li>• 停用測試用工作流</li>
                  <li>• 清理舊的執行記錄</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#4facfe]/10 to-[#00f2fe]/10 p-6 rounded-2xl border-l-4 border-[#4facfe]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-4">📈 監控與通知</h3>
            <ul className="space-y-4 text-[22px]">
              <li className="flex items-start gap-2">
                <span className="text-[#4facfe] font-bold text-[24px]">1</span>
                <div>
                  <strong>執行狀態監控</strong><br/>
                  <span className="text-[20px] text-[#666]">定期檢查執行歷史</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4facfe] font-bold text-[24px]">2</span>
                <div>
                  <strong>錯誤警報</strong><br/>
                  <span className="text-[20px] text-[#666]">設定 Error Trigger 通知</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4facfe] font-bold text-[24px]">3</span>
                <div>
                  <strong>效能追蹤</strong><br/>
                  <span className="text-[20px] text-[#666]">記錄執行時間和資源使用</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#4facfe] font-bold text-[24px]">4</span>
                <div>
                  <strong>成功通知</strong><br/>
                  <span className="text-[20px] text-[#666]">重要工作流完成時發送通知</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#e8f5e9] border-2 border-[#4caf50] text-[#2e7d32] p-5 rounded-xl">
            <strong className="flex items-center gap-2 text-[24px] mb-3">
              <CheckCircle2 size={26} /> 最佳實踐清單
            </strong>
            <ul className="space-y-2 text-[21px]">
              <li>□ 使用描述性的工作流名稱</li>
              <li>□ 為複雜節點加入註解</li>
              <li>□ 定期備份重要工作流</li>
              <li>□ 設定錯誤通知機制</li>
              <li>□ 記錄重要的變更歷史</li>
              <li>□ 定期檢查執行記錄</li>
            </ul>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 7: 版本控制與備份
    <Slide key="version-control">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🔄 版本控制與備份</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <Github className="text-[#333]" size={32} />
              使用 Git 版本控制
            </h3>

            <div className="space-y-4">
              <div className="bg-white p-5 rounded-xl border-l-4 border-[#333]">
                <h4 className="text-[24px] font-bold text-[#333] mb-3">為什麼需要版本控制？</h4>
                <ul className="text-[21px] text-[#666] space-y-2">
                  <li>✓ 追蹤所有變更歷史</li>
                  <li>✓ 隨時回復到舊版本</li>
                  <li>✓ 團隊協作更容易</li>
                  <li>✓ 保護工作流不會遺失</li>
                </ul>
              </div>

              <div className="bg-white p-5 rounded-xl border-l-4 border-[#667eea]">
                <h4 className="text-[24px] font-bold text-[#667eea] mb-3">基本操作流程</h4>
                <ol className="text-[20px] text-[#666] space-y-2">
                  <li>1. 匯出工作流為 JSON 檔案</li>
                  <li>2. 使用 Git 追蹤變更</li>
                  <li>3. 寫清楚的 commit 訊息</li>
                  <li>4. 推送到 GitHub 備份</li>
                  <li>5. 需要時從 Git 還原</li>
                </ol>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-4">💾 備份策略</h3>
            <ul className="space-y-4 text-[22px]">
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">1</span>
                <div>
                  <strong>定期匯出</strong><br/>
                  <span className="text-[20px] text-[#666]">每週匯出重要工作流</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">2</span>
                <div>
                  <strong>多處備份</strong><br/>
                  <span className="text-[20px] text-[#666]">GitHub + 本機 + 雲端硬碟</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">3</span>
                <div>
                  <strong>命名規則</strong><br/>
                  <span className="text-[20px] text-[#666]">workflow-name-YYYY-MM-DD.json</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">4</span>
                <div>
                  <strong>測試還原</strong><br/>
                  <span className="text-[20px] text-[#666]">定期測試備份可以還原</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#fff3cd] border border-[#ffc107] text-[#856404] p-5 rounded-xl">
            <strong className="block mb-2 text-[24px]">⚠️ 重要提醒</strong>
            <p className="text-[22px]">
              匯出的 JSON 檔案可能包含敏感資訊（API Key 等），<br/>
              <strong>不要直接推送到公開的 GitHub 儲存庫</strong>！<br/>
              <br/>
              建議：<br/>
              • 使用私有儲存庫<br/>
              • 或手動移除敏感資料後再推送
            </p>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 8: 進階功能
    <Slide key="advanced-features">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">🚀 進階功能探索</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 rounded-2xl text-white">
          <div className="text-[48px] mb-3">🤖</div>
          <h3 className="text-[26px] font-bold mb-3">AI 整合</h3>
          <ul className="text-[21px] space-y-2">
            <li>• OpenAI ChatGPT</li>
            <li>• Claude API</li>
            <li>• Google Gemini</li>
            <li>• 自動摘要生成</li>
            <li>• 智慧回覆</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#4facfe] to-[#00f2fe] p-6 rounded-2xl text-white">
          <div className="text-[48px] mb-3">🔗</div>
          <h3 className="text-[26px] font-bold mb-3">Sub-Workflows</h3>
          <ul className="text-[21px] space-y-2">
            <li>• 重複使用程式碼</li>
            <li>• 模組化設計</li>
            <li>• 更好的維護性</li>
            <li>• 減少複雜度</li>
            <li>• 團隊協作</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] p-6 rounded-2xl text-white">
          <div className="text-[48px] mb-3">⏱️</div>
          <h3 className="text-[26px] font-bold mb-3">Wait 節點</h3>
          <ul className="text-[21px] space-y-2">
            <li>• 暫停執行</li>
            <li>• 等待外部事件</li>
            <li>• 人工審核流程</li>
            <li>• 定時繼續</li>
            <li>• 複雜流程控制</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#84fab0] to-[#8fd3f4] p-6 rounded-2xl text-[#004d40]">
          <div className="text-[48px] mb-3">🔀</div>
          <h3 className="text-[26px] font-bold mb-3">條件分支</h3>
          <ul className="text-[21px] space-y-2">
            <li>• IF 節點</li>
            <li>• Switch 節點</li>
            <li>• 複雜邏輯判斷</li>
            <li>• 多路徑執行</li>
            <li>• 動態流程</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-2xl text-[#8b4513]">
          <div className="text-[48px] mb-3">🔄</div>
          <h3 className="text-[26px] font-bold mb-3">Loop 迴圈</h3>
          <ul className="text-[21px] space-y-2">
            <li>• 批次處理資料</li>
            <li>• 重複執行動作</li>
            <li>• 分頁 API 處理</li>
            <li>• 大量資料處理</li>
            <li>• 條件迴圈</li>
          </ul>
        </div>

        <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-2xl text-[#1e3c72]">
          <div className="text-[48px] mb-3">📦</div>
          <h3 className="text-[26px] font-bold mb-3">HTTP Request</h3>
          <ul className="text-[21px] space-y-2">
            <li>• 串接任何 API</li>
            <li>• 自訂 Headers</li>
            <li>• 認證方式</li>
            <li>• 資料轉換</li>
            <li>• 錯誤處理</li>
          </ul>
        </div>
      </div>

      <div className="mt-8 bg-gradient-to-r from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
        <p className="text-[26px] text-[#333] leading-relaxed text-center">
          💡 這些進階功能讓 n8n 變得<strong className="text-[#667eea]">無比強大</strong>！<br/>
          建議逐一學習，慢慢掌握每個功能的用法。
        </p>
      </div>
    </Slide>,

    // Slide 9: 學習資源
    <Slide key="resources">
      <h2 className="text-[#2a5298] text-[40px] md:text-[48px] font-bold mb-8 border-b-[3px] border-[#1e3c72] pb-3">📚 學習資源與社群</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="space-y-6">
          <div className="bg-[#f8f9fa] p-6 rounded-2xl border border-[#e9ecef] shadow-md">
            <h3 className="text-[28px] font-bold text-[#1e3c72] mb-4 flex items-center gap-2">
              <BookOpen className="text-[#667eea]" size={32} />
              官方資源
            </h3>

            <div className="space-y-4">
              <a href="https://docs.n8n.io/" target="_blank" className="block bg-white p-5 rounded-xl border-l-4 border-[#ff6d5a] hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[24px] font-bold text-[#ff6d5a] mb-1">📖 n8n 官方文件</h4>
                    <p className="text-[20px] text-[#666]">完整的功能說明與教學</p>
                  </div>
                  <ExternalLink className="text-[#666]" size={24} />
                </div>
              </a>

              <a href="https://community.n8n.io/" target="_blank" className="block bg-white p-5 rounded-xl border-l-4 border-[#4facfe] hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[24px] font-bold text-[#4facfe] mb-1">💬 n8n 社群論壇</h4>
                    <p className="text-[20px] text-[#666]">與全球用戶交流討論</p>
                  </div>
                  <ExternalLink className="text-[#666]" size={24} />
                </div>
              </a>

              <a href="https://n8n.io/workflows" target="_blank" className="block bg-white p-5 rounded-xl border-l-4 border-[#06c755] hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[24px] font-bold text-[#06c755] mb-1">🎨 工作流模板庫</h4>
                    <p className="text-[20px] text-[#666]">上千個現成模板可用</p>
                  </div>
                  <ExternalLink className="text-[#666]" size={24} />
                </div>
              </a>

              <a href="https://www.youtube.com/@n8n-io" target="_blank" className="block bg-white p-5 rounded-xl border-l-4 border-[#f44336] hover:shadow-lg transition-shadow">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="text-[24px] font-bold text-[#f44336] mb-1">📺 YouTube 頻道</h4>
                    <p className="text-[20px] text-[#666]">影片教學與實作範例</p>
                  </div>
                  <ExternalLink className="text-[#666]" size={24} />
                </div>
              </a>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-gradient-to-br from-[#667eea]/10 to-[#764ba2]/10 p-6 rounded-2xl border-l-4 border-[#667eea]">
            <h3 className="text-[26px] font-bold text-[#1e3c72] mb-4">🎓 繼續學習建議</h3>
            <ul className="space-y-4 text-[22px]">
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">1</span>
                <div>
                  <strong>實作優先</strong><br/>
                  <span className="text-[20px] text-[#666]">邊做邊學，動手最重要</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">2</span>
                <div>
                  <strong>參考官方模板</strong><br/>
                  <span className="text-[20px] text-[#666]">學習別人的工作流設計</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">3</span>
                <div>
                  <strong>加入社群</strong><br/>
                  <span className="text-[20px] text-[#666]">遇到問題隨時發問</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">4</span>
                <div>
                  <strong>訂閱更新</strong><br/>
                  <span className="text-[20px] text-[#666]">關注 n8n 新功能發布</span>
                </div>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[#667eea] font-bold text-[24px]">5</span>
                <div>
                  <strong>分享經驗</strong><br/>
                  <span className="text-[20px] text-[#666]">幫助其他人也是學習</span>
                </div>
              </li>
            </ul>
          </div>

          <div className="bg-[#e3f2fd] p-6 rounded-xl border-l-4 border-[#2196f3]">
            <h3 className="text-[24px] font-bold text-[#1e3c72] mb-3">🤝 阿亮老師的社群</h3>
            <div className="space-y-3 text-[21px]">
              <a href="https://www.facebook.com/groups/2754139931432955" target="_blank" className="flex items-center gap-2 text-[#2196f3] hover:underline">
                <span>📘</span>
                <span>3A科技研究社 Facebook 社團</span>
              </a>
              <a href="https://www.youtube.com/@Liang-yt02" target="_blank" className="flex items-center gap-2 text-[#f44336] hover:underline">
                <span>📺</span>
                <span>阿亮老師 YouTube 頻道</span>
              </a>
              <div className="flex items-center gap-2 text-[#666]">
                <span>📧</span>
                <span>3a01chatgpt@gmail.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slide>,

    // Slide 10: 總結
    <Slide key="conclusion">
      <div className="flex flex-col items-center justify-center h-full text-center px-6">
        <div className="text-[120px] mb-6">🎓</div>
        <h1 className="text-[#1e3c72] text-[52px] md:text-[64px] font-bold mb-6">恭喜完成全部課程！</h1>
        <p className="text-[30px] text-[#666] mb-8 max-w-[900px]">
          你已經掌握了從基礎到進階的 n8n + LINE Bot 開發技能
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-[1000px] mb-10">
          <div className="bg-gradient-to-br from-[#667eea] to-[#764ba2] p-6 rounded-2xl text-white">
            <div className="text-[48px] mb-2">📚</div>
            <h3 className="text-[24px] font-bold">6 個章節</h3>
            <p className="text-[20px]">完整教學</p>
          </div>

          <div className="bg-gradient-to-br from-[#4facfe] to-[#00f2fe] p-6 rounded-2xl text-white">
            <div className="text-[48px] mb-2">📄</div>
            <h3 className="text-[24px] font-bold">62 頁投影片</h3>
            <p className="text-[20px]">詳細說明</p>
          </div>

          <div className="bg-gradient-to-br from-[#f093fb] to-[#f5576c] p-6 rounded-2xl text-white">
            <div className="text-[48px] mb-2">🎨</div>
            <h3 className="text-[24px] font-bold">3 個模板</h3>
            <p className="text-[20px]">實戰範例</p>
          </div>

          <div className="bg-gradient-to-br from-[#84fab0] to-[#8fd3f4] p-6 rounded-2xl text-[#004d40]">
            <div className="text-[48px] mb-2">⚡</div>
            <h3 className="text-[24px] font-bold">效能優化</h3>
            <p className="text-[20px]">進階技巧</p>
          </div>

          <div className="bg-gradient-to-br from-[#ffecd2] to-[#fcb69f] p-6 rounded-2xl text-[#8b4513]">
            <div className="text-[48px] mb-2">🔒</div>
            <h3 className="text-[24px] font-bold">安全防護</h3>
            <p className="text-[20px]">最佳實踐</p>
          </div>

          <div className="bg-gradient-to-br from-[#a8edea] to-[#fed6e3] p-6 rounded-2xl text-[#1e3c72]">
            <div className="text-[48px] mb-2">🐛</div>
            <h3 className="text-[24px] font-bold">除錯技巧</h3>
            <p className="text-[20px]">問題排除</p>
          </div>
        </div>

        <div className="bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white px-10 py-6 rounded-2xl text-[26px] font-semibold shadow-2xl mb-8">
          🚀 現在你可以打造自己的自動化帝國了！
        </div>

        <div className="text-[24px] text-[#666] max-w-[800px] space-y-4">
          <p>💡 記住：<strong>實作是最好的學習方式</strong></p>
          <p>🤝 遇到問題隨時到社群發問</p>
          <p>🌟 不斷嘗試新的想法和應用</p>
          <p className="mt-6 text-[28px] font-bold text-[#667eea]">
            感謝你的學習！祝你在自動化的路上越走越遠！
          </p>
        </div>

        <div className="mt-8 text-[22px] text-[#999]">
          <p>© 2026 阿亮老師 | Made with ❤️</p>
        </div>

        <div className="mt-8 bg-gradient-to-r from-[#667eea] to-[#764ba2] text-white p-5 rounded-xl text-center">
          <p className="text-[24px] mb-4">
            <strong>✅ Part 6 完成！</strong> 恭喜完成所有課程！
          </p>
          <Link href="/">
            <a className="inline-flex items-center gap-2 bg-white text-[#667eea] px-6 py-3 rounded-lg font-bold text-[22px] hover:bg-gray-100 transition-colors">
              回到首頁 <ArrowRight size={24} />
            </a>
          </Link>
        </div>
      </div>
    </Slide>
  ];

  return <SlideDeck title="Part 6: 進階技巧與最佳實踐" slides={slides} />;
}
