# 🚀 GitHub Pages 設定教學

## 📌 為什麼需要這個步驟？

GitHub Pages 是一個免費的靜態網站託管服務，但基於安全考量，**必須由儲存庫擁有者手動啟用**。

目前的錯誤訊息：
```
404 There isn't a GitHub Pages site here.
```

這是因為雖然我們已經創建了自動部署的 workflow，但 **GitHub Pages 功能本身還沒有在儲存庫設定中啟用**。

---

## ✅ 完整設定步驟（3 分鐘完成）

### 步驟 1：打開 GitHub 儲存庫

1. 開啟瀏覽器
2. 前往：https://github.com/ChatGPT3a01/zeabur-n8n-linebot-guide
3. 確認你已經登入 GitHub

---

### 步驟 2：進入設定頁面

1. 在儲存庫頁面頂部，點擊 **「Settings」** 標籤

   ```
   <> Code    Issues    Pull requests    Actions    Projects    Wiki    Settings  ← 點這裡
   ```

2. 如果看不到「Settings」，請確認：
   - 你已經登入正確的帳號
   - 你是這個儲存庫的擁有者

---

### 步驟 3：找到 Pages 設定

1. 在左側選單中，找到 **「Code and automation」** 區塊
2. 點擊 **「Pages」** 選項

   ```
   左側選單：
   General
   Access
   Code and automation
   ├─ Branches
   ├─ Tags
   ├─ Actions
   ├─ Webhooks
   └─ Pages  ← 點這裡！
   ```

---

### 步驟 4：設定 Build and deployment（最重要！）

在 **「Build and deployment」** 區塊中：

1. 找到 **「Source」** 下拉選單
2. 選擇 **「GitHub Actions」** ← **這是關鍵！**

   ```
   Build and deployment

   Source
   ┌─────────────────────────────┐
   │ GitHub Actions              │ ← 選這個！
   │ Deploy from a branch        │
   └─────────────────────────────┘
   ```

3. **不要選擇** "Deploy from a branch"（這是舊的部署方式）

4. 選擇後，頁面會自動儲存，你會看到一條綠色的確認訊息

---

### 步驟 5：檢查部署狀態

1. 點擊頂部的 **「Actions」** 標籤

   ```
   <> Code    Issues    Pull requests    Actions  ← 點這裡    Projects
   ```

2. 你會看到一個名為 **「Deploy to GitHub Pages」** 的 workflow 正在運行或已完成

3. 點擊最新的 workflow run，查看執行狀態：
   - 🟡 **黃色圓點** = 正在執行中（等待 2-3 分鐘）
   - ✅ **綠色勾勾** = 部署成功！
   - ❌ **紅色叉叉** = 部署失敗（請查看錯誤訊息）

---

### 步驟 6：訪問你的網站！

部署成功後（綠色勾勾），你的簡報網站就可以訪問了：

🎉 **https://chatgpt3a01.github.io/zeabur-n8n-linebot-guide/**

---

## 🔍 常見問題

### Q1: 我找不到「Settings」標籤？

**A:** 請確認：
- 你已經登入 GitHub
- 你是儲存庫的擁有者（而不是協作者）
- 網址正確：https://github.com/ChatGPT3a01/zeabur-n8n-linebot-guide

---

### Q2: 選擇「GitHub Actions」後，還是 404？

**A:** 請按照以下步驟：
1. 回到「Actions」標籤
2. 找到「Deploy to GitHub Pages」workflow
3. 點擊右側的「Run workflow」按鈕
4. 選擇 `master` 分支
5. 點擊綠色的「Run workflow」
6. 等待 2-3 分鐘
7. 重新訪問網站

---

### Q3: Actions 顯示「failure」（失敗）？

**A:** 請點擊失敗的 workflow，查看錯誤訊息。常見原因：
- Pages 沒有啟用（回到步驟 4 檢查）
- 權限問題（檢查 workflow 權限設定）
- 建置錯誤（檢查程式碼是否有錯誤）

---

### Q4: 部署成功了，但網站顯示錯誤？

**A:** 清除瀏覽器快取：
- Chrome/Edge: `Ctrl + Shift + R`
- Firefox: `Ctrl + F5`
- Safari: `Cmd + Shift + R`

---

## 📞 需要協助？

如果按照上述步驟操作後仍然有問題，請：

1. **截圖以下畫面**：
   - Settings → Pages 頁面
   - Actions 執行結果頁面
   - 錯誤訊息（如果有）

2. **聯絡管道**：
   - Email: 3a01chatgpt@gmail.com
   - Facebook: 3A科技研究社

---

## ✅ 確認清單

完成設定後，請確認：

- [ ] Settings → Pages → Source = "GitHub Actions"
- [ ] Actions 顯示最新的 workflow 為成功（綠色勾勾）
- [ ] 可以訪問 https://chatgpt3a01.github.io/zeabur-n8n-linebot-guide/
- [ ] 簡報可以正常瀏覽，左右鍵可以切換頁面

---

## 🎉 設定完成！

恭喜！你的教學簡報現在已經成功部署到 GitHub Pages 了！

學生們可以直接透過連結觀看，不需要下載任何檔案。

---

**© 2026 阿亮老師 | Made with ❤️**
