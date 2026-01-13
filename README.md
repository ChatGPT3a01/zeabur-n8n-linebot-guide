<div align="center">

# 🤖 Zeabur + n8n + LINE Bot 完整教學

### 從零開始打造你的智慧對話機器人

[![License](https://img.shields.io/badge/License-教學專用-blue.svg)](https://github.com)
[![Platform](https://img.shields.io/badge/Platform-Zeabur-brightgreen.svg)](https://zeabur.com)
[![n8n](https://img.shields.io/badge/n8n-2.0-ff6d5a.svg)](https://n8n.io)
[![LINE](https://img.shields.io/badge/LINE-Bot-00C300.svg)](https://developers.line.biz)
[![React](https://img.shields.io/badge/React-19.2.0-61dafb.svg)](https://react.dev)

<img src=".screenshots/bundle-preview-latest.png" alt="課程簡報預覽" width="800">

</div>

---

## 📖 專案簡介

這是一個**互動式教學簡報網站**,專為想學習**雲端自動化部署**與 **LINE Bot 開發**的學生設計。

透過本課程,你將學會:

- ☁️ 使用 **Zeabur** 免費雲端平台部署服務
- 🔄 掌握 **n8n** 視覺化自動化工作流設計
- 💬 串接 **LINE Messaging API** 打造智慧機器人
- 🛠️ 理解 Webhook、API 整合的實作原理

> 🎯 **零基礎友善** | 完全免費 | 無需維護伺服器 | 極速部署

---

## ✨ 功能特點

### 🎨 精美互動式簡報
- 🖼️ 卡片式導航設計，直觀易懂
- 📱 RWD 響應式佈局，手機電腦皆適用
- 🌙 深色漸層主題，視覺舒適
- ⚡ 流暢動畫效果，提升學習體驗

### 📚 完整課程內容
1. **Part 1** - Zeabur 註冊與環境準備
2. **Part 2** - n8n 部署與初始化
3. **Part 3** - LINE Developer 設定與憑證配置
4. **Part 4** - n8n 串接 LINE Bot（即將推出）
5. **Part 5** - 實戰案例與延伸應用（即將推出）

### 🛠️ 技術亮點
- ⚛️ React 19 + TypeScript
- 🎨 Tailwind CSS 4 樣式框架
- 🧩 Radix UI 無障礙組件庫
- ⚡ Vite 極速建置工具
- 🎭 Framer Motion 動畫庫

---

## 🌐 線上 Demo

### 🚀 [立即體驗課程簡報](https://zeabur-n8n-linebot-guide.netlify.app)

> 點擊上方連結即可開始學習！

---

## 📋 課程大綱

### Part 1: Zeabur 註冊與環境準備
- ✅ Zeabur 平台介紹
- ✅ 帳號註冊與手機驗證
- ✅ 控制台操作說明
- ✅ 服務初始化與狀態檢查

### Part 2: n8n 部署與初始化
- ✅ 開啟 n8n 網頁介面
- ✅ 設定管理員帳號
- ✅ 認識 n8n 工作流畫布

### Part 3: LINE Developer 設定
- ✅ LINE Developers Console 導覽
- ✅ 建立 Messaging API Channel
- ✅ 取得 Access Token 與 Channel Secret
- ✅ 在 n8n 中建立 LINE 憑證

### Part 4: n8n 串接 LINE Bot (Coming Soon)
- 🔜 設定 Webhook URL
- 🔜 建立自動回覆工作流
- 🔜 測試訊息收發功能

### Part 5: 實戰案例與延伸應用 (Coming Soon)
- 🔜 整合 AI 語言模型
- 🔜 連接外部資料庫
- 🔜 進階自動化情境設計

---

## 🎓 學習資源

### 官方文件
- [n8n 官方文件](https://docs.n8n.io/)
- [LINE Messaging API 文件](https://developers.line.biz/en/docs/messaging-api/)
- [Zeabur 部署指南](https://zeabur.com/docs)

### 相關技術
- [React 官方教學](https://react.dev/learn)
- [Tailwind CSS 文件](https://tailwindcss.com/docs)
- [TypeScript 手冊](https://www.typescriptlang.org/docs/)

### 推薦閱讀
- [n8n Guide 2026: Features & Workflow Automation Deep Dive](https://hatchworks.com/blog/ai-agents/n8n-guide/)
- [LINE Bot SDK Documentation](https://github.com/line/line-bot-sdk-python)
- [Zeabur Pricing Guide](https://zeabur.com/pricing)

---

## 🚀 快速開始

### 環境需求
- Node.js 18+ 或 Bun
- pnpm / npm / yarn（任一套件管理工具）

### 本地開發

```bash
# 1. 克隆專案
git clone <repository-url>
cd zeabur-n8n-linebot-guide

# 2. 安裝依賴
pnpm install

# 3. 啟動開發伺服器
pnpm dev

# 4. 在瀏覽器開啟 http://localhost:5173
```

### 建置與部署

```bash
# 建置生產版本
pnpm build

# 預覽建置結果
pnpm preview
```

---

## 🏗️ 專案架構

```
zeabur-n8n-linebot-guide/
├── src/
│   ├── components/           # React 組件
│   │   ├── ui/              # 可重用 UI 組件
│   │   ├── Slide.tsx        # 簡報投影片組件
│   │   ├── SlideDeck.tsx    # 投影片容器
│   │   └── NavBar.tsx       # 導航列
│   ├── pages/               # 頁面組件
│   │   ├── Home.tsx         # 首頁
│   │   ├── Part1.tsx        # 課程第一部分
│   │   ├── Part2.tsx        # 課程第二部分
│   │   └── Part3.tsx        # 課程第三部分
│   ├── contexts/            # React Context
│   ├── hooks/               # 自定義 Hooks
│   └── lib/                 # 工具函數
├── .screenshots/            # 專案截圖
├── dist/                    # 建置輸出
└── public/                  # 靜態資源
```

---

## 💡 為什麼選擇這個技術組合？

### 🆓 Zeabur - 免費雲端部署
- ✅ 每月 $5 免費額度
- ✅ 不需信用卡即可開始
- ✅ 一鍵部署，自動 HTTPS
- ✅ 支援 PostgreSQL 資料庫

### 🔄 n8n - 開源自動化平台
- ✅ 超過 **400+** 整合應用
- ✅ 視覺化工作流設計
- ✅ 可自行部署，資料自主
- ✅ 支援 AI 原生功能（2.0 系列）
- ✅ 單實例可處理每秒 **220** 個工作流執行

### 💬 LINE Bot - 最受歡迎的聊天機器人
- ✅ 台灣用戶數超過 **2100 萬**
- ✅ Messaging API 完整文件
- ✅ 免費方案足夠個人/教學使用
- ✅ 支援豐富的訊息類型

---

## 🤝 參考資源來源

### n8n 自動化平台
- [AI Workflow Automation Platform & Tools - n8n](https://n8n.io/)
- [n8n Guide 2026: Features & Workflow Automation Deep Dive](https://hatchworks.com/blog/ai-agents/n8n-guide/)
- [N8n Workflow Automation: The 2026 Guide to Building AI-Powered Workflows](https://medium.com/@aksh8t/n8n-workflow-automation-the-2026-guide-to-building-ai-powered-workflows-cd62f22afcc8)

### LINE Messaging API
- [LINE Developers - Receiving Messages (webhook)](https://developers.line.biz/en/docs/messaging-api/receiving-messages/)
- [LINE Bot SDK - Webhook Guide](https://line.github.io/line-bot-sdk-nodejs/guide/webhook.html)
- [n8n LINE Message API Workflow Template](https://n8n.io/workflows/2733-line-message-api-push-message-and-reply/)

### Zeabur 部署平台
- [Zeabur Pricing](https://zeabur.com/pricing)
- [Zeabur Plans Documentation](https://zeabur.com/docs/en-US/billing/plans)
- [n8n Pricing Guide on Zeabur](https://zeabur.com/blogs/n8n-pricing-shift-self-hosting-business-costs-zeabur-guide)

---

## 👨‍🏫 關於作者

<div align="center">

### 曾慶良 主任（阿亮老師）

<img src="作者資訊.png" width="600" alt="作者資訊">

<br>

<table>
<tr>
<td width="50%">

**📌 現任職務**

🎓 新興科技推廣中心主任<br>
🎓 教育部學科中心所長教師<br>
🎓 臺北市語文學習領域輔導員

</td>
<td width="50%">

**🏆 獲獎紀錄**

🥇 2024年 教育部人工智慧講師認證<br>
🥇 2022、2023年 指導學生XR專題競賽特優<br>
🥇 2022年 VR教材開發教師組特優<br>
🥇 2019年 百大資訊人才獎<br>
🥇 2018、2019年 天下創新100教師<br>
🥇 2018年 臺北市特殊優良教師<br>
🥇 2017年 教育部行動學習優等

</td>
</tr>
</table>

<br>

### 📞 聯絡方式

[![YouTube](https://img.shields.io/badge/YouTube-@Liang--yt02-red?style=for-the-badge&logo=youtube)](https://www.youtube.com/@Liang-yt02)
[![Facebook](https://img.shields.io/badge/Facebook-3A科技研究社-blue?style=for-the-badge&logo=facebook)](https://www.facebook.com/groups/2754139931432955)
[![Email](https://img.shields.io/badge/Email-3a01chatgpt@gmail.com-green?style=for-the-badge&logo=gmail)](mailto:3a01chatgpt@gmail.com)

</div>

---

## 📜 授權聲明

**© 2026 阿亮老師 版權所有**

本專案僅供「阿亮老師課程學員」學習使用。

### ⚠️ 禁止事項

- ❌ 禁止修改本專案內容
- ❌ 禁止轉傳或散布
- ❌ 禁止商業使用
- ❌ 禁止未經授權之任何形式使用

如有任何授權需求，請聯繫作者。

---

## 🙏 致謝

感謝以下開源專案與平台：

- [n8n.io](https://n8n.io) - 開源工作流自動化平台
- [Zeabur](https://zeabur.com) - 免費雲端部署服務
- [LINE Developers](https://developers.line.biz) - LINE Bot API
- [React](https://react.dev) - 前端框架
- [Tailwind CSS](https://tailwindcss.com) - CSS 框架
- [Radix UI](https://www.radix-ui.com) - 無障礙組件庫

---

<div align="center">

## 🌟 喜歡這個專案嗎？

如果這個教學對您有幫助，請給我們一個 ⭐ Star！

<br>

**Made with ❤️ by 阿亮老師**

<br>

[⬆️ 回到頂部](#-zeabur--n8n--line-bot-完整教學)

---

© 2026 阿亮老師 版權所有

</div>
