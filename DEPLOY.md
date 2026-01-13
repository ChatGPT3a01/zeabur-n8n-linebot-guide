# 🚀 部署指南

本專案可以輕鬆部署到多個平台，以下是詳細步驟。

## 📦 Netlify 部署（推薦）

### 方法 1：透過 GitHub 自動部署（最簡單）

1. **登入 Netlify**
   - 前往 [Netlify](https://www.netlify.com/)
   - 使用 GitHub 帳號登入

2. **導入專案**
   - 點擊「Add new site」→「Import an existing project」
   - 選擇「GitHub」
   - 搜尋並選擇 `zeabur-n8n-linebot-guide` 倉庫

3. **配置設定**
   - **Build command**: `pnpm install && pnpm run build`
   - **Publish directory**: `dist`
   - **Node version**: 18 或更高

4. **部署**
   - 點擊「Deploy site」
   - 等待幾分鐘，部署完成！

### 方法 2：使用 Netlify CLI

```bash
# 1. 安裝 Netlify CLI
npm install -g netlify-cli

# 2. 登入 Netlify
netlify login

# 3. 初始化專案
netlify init

# 4. 部署
netlify deploy --prod
```

---

## 🌍 Vercel 部署

### 透過 GitHub 自動部署

1. **登入 Vercel**
   - 前往 [Vercel](https://vercel.com/)
   - 使用 GitHub 帳號登入

2. **導入專案**
   - 點擊「Add New」→「Project」
   - 選擇 `zeabur-n8n-linebot-guide` 倉庫

3. **配置設定**
   - Framework Preset: **Vite**
   - Build Command: `pnpm run build`
   - Output Directory: `dist`

4. **部署**
   - 點擊「Deploy」
   - 完成！

---

## ☁️ Zeabur 部署

由於這是前端專案，也可以部署到 Zeabur：

1. **登入 Zeabur**
   - 前往 [Zeabur](https://zeabur.com/referral?referralCode=3a01chatgpt)

2. **建立專案**
   - 點擊「Create Project」
   - 選擇 GitHub 倉庫

3. **自動偵測**
   - Zeabur 會自動偵測為 Vite 專案
   - 自動配置建置設定

4. **部署完成**
   - 獲得專屬網址

---

## 🏠 本地開發

```bash
# 安裝依賴
pnpm install

# 啟動開發伺服器
pnpm dev

# 在瀏覽器開啟 http://localhost:5173
```

---

## 📝 環境變數

本專案目前不需要環境變數。如果未來需要，請在部署平台設定：

```env
# 範例（目前不需要）
VITE_API_URL=https://your-api.com
```

---

## 🔄 自動部署

當你推送程式碼到 GitHub 的 `master` 分支時：
- ✅ Netlify 會自動重新部署
- ✅ Vercel 會自動重新部署
- ✅ Zeabur 會自動重新部署

---

## 🛠️ 建置最佳化

專案已經配置好以下最佳化：

- ⚡ Vite 極速建置
- 📦 自動程式碼分割
- 🗜️ 資源壓縮
- 🎨 CSS 最佳化

---

## ❓ 常見問題

### Q: 部署後出現空白頁面？
A: 檢查 `vite.config.ts` 中的 `base` 設定，確保路徑正確。

### Q: 圖片無法載入？
A: 確認圖片放在 `public` 資料夾或使用 `import` 引入。

### Q: 部署失敗？
A: 檢查 Node.js 版本是否為 18 或更高。

---

## 📞 需要協助？

如有部署問題，請：
- 📧 Email: 3a01chatgpt@gmail.com
- 💬 Facebook: [3A科技研究社](https://www.facebook.com/groups/2754139931432955)
- 🐛 GitHub Issues: [提交問題](https://github.com/ChatGPT3a01/zeabur-n8n-linebot-guide/issues)
