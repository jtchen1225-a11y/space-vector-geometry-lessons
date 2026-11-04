# 第一章　空間向量與立體幾何：全章授課內容

24 節 40 分鐘課（新課 16、練習課 5、複習課 3）。每節包含互動簡報、列印紙本與教案。

- 全章入口：`docs/index.html`（GitHub Pages 網址見 Repo 右側 About）
- 全章教案：`docs/chapter-plan.html`（同內容的 Markdown：`docs/chapter-plan.md`）
- 各節：`docs/lessons/Lnn/`（`index.html` 簡報、`handout.html` 紙本、`lesson-plan.html` 教案）

整個 `docs` 資料夾下載後可以離線開啟（雙擊 `index.html`），不連網、不用 CDN。

## 課型與製作方式

每節用對應課型的技能（math-lesson-new／practice／review）產生骨架並通過驗證。內容來源是 `source/lessons/Lnn.js`，教案由同一份資料產生，所以題目與簡報一定一致。

```powershell
python source\build.py --validate      # 建置各節並跑五層驗證（需要同層的 ..\repos\math-lesson-*）
python source\click_test.py            # 實際點開按鈕，檢查展開後的公式
python source\build.py --assemble      # 合成 docs
```

每節的 `@assert` 區塊會驗算題目答案；算錯時建置失敗。

## 未驗證的項目

- 學生表現皆為「預期情況」，尚未經真實課堂驗證。
- 列印效果、投影機實機效果、粵語語音與字幕的同步，尚未人工逐節確認。
- 數學內容已由程式驗算主要答案並經人工複查，但仍建議教師上課前再看一次。

## 授權與來源

簡報引擎改自 math-review-deck（MIT，見 `LICENSE`）；公式排版 MathJax 3.2.2（Apache-2.0，見 `docs/mathjax/LICENSE`）。題目依教材題型改寫，本 Repo 不含課本原文、圖片或 PDF。語音由 edge-tts 預先產生。
