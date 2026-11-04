#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""assemble.py — 合成 docs\\（GitHub Pages）：全章入口、全章教案、各節簡報／紙本／教案，共用一份 MathJax。"""
import html
import json
import os
import re
import shutil

TYPE = {'new': ('新課', '#2563eb'), 'practice': ('練習課', '#d97706'), 'review': ('複習課', '#059669')}
UNITS = [('1.1 空間向量及其運算', 1, 9), ('1.2 空間向量在立體幾何中的應用', 10, 22), ('全章複習', 23, 24)]
WHY = {
 1: '概念多但都由平面推廣而來，一節足夠；重點是「共面」這個新觀念。', 2: '數量積是後面所有角與距離的基礎，必須獨立一節。', 3: '共面定理是判斷工具，也是基本定理的前奏。',
 4: '基底是全章的思想核心，含「用基底算數量積」，要一整節。', 5: '三節新內容後的第一次綜合，不練就進坐標會脫節。', 6: '坐標公式多，但都來自基底展開。',
 7: '建系、讀點是學生最易卡住的技能，不能與公式擠在同一節。', 8: '建系四步要反覆操作才熟練。', 9: '結束 1.1 前比較基底法與坐標法。',
 10: '方向向量與線線角是向量法應用的起點。', 11: '異面的判定與公垂線段涉及參數方程，難度明顯較高。', 12: '法向量是後面線面角、面面角、距離的共同工具。',
 13: '三垂線定理是幾何法的關鍵，也用於作二面角的平面角。', 14: '進入「求角」前，先確保位置關係判斷穩固。', 15: '先建立線面角的定義和最小角性質，再學向量法。',
 16: '正弦與餘弦容易混淆，要單獨一節。', 17: '作平面角是全章難點之一。', 18: '法向量夾角與二面角相等或互補，需要充分討論。',
 19: '三種角放在同一立體比較，分辨公式。', 20: '距離概念與點線距離。', 21: '點面距離公式是全章最常用的距離工具。', 22: '四類距離混合練習。',
 23: '角與距離統整成一張表。', 24: '對應本章小結：比較向量法與幾何法，並處理綜合題。'}


def md_to_html(md):
    """最小 Markdown 轉換：標題、清單、表格、引言、粗體、核取方塊。公式留給 MathJax。"""
    out, lines, i = [], md.split('\n'), 0
    inline = lambda s: re.sub(r'\*\*(.+?)\*\*', r'<b>\1</b>', s)
    in_ul = False

    def close_ul():
        nonlocal in_ul
        if in_ul:
            out.append('</ul>')
            in_ul = False
    while i < len(lines):
        ln = lines[i]
        m = re.match(r'^(#{1,4}) (.*)$', ln)
        if m:
            close_ul()
            level = len(m.group(1))
            text = inline(m.group(2))
            anchor = ''
            am = re.match(r'^L(\d\d)　', m.group(2))
            if level == 1 and am:
                anchor = f' id="L{am.group(1)}"'
            out.append(f'<h{level}{anchor}>{text}</h{level}>')
        elif ln.startswith('|') and i + 1 < len(lines) and re.match(r'^\|[-| ]+\|$', lines[i + 1]):
            close_ul()
            head = [c.strip() for c in ln.strip('|').split('|')]
            out.append('<div class="tw"><table><thead><tr>' + ''.join(f'<th>{inline(c)}</th>' for c in head) + '</tr></thead><tbody>')
            i += 2
            while i < len(lines) and lines[i].startswith('|'):
                out.append('<tr>' + ''.join(f'<td>{inline(c.strip())}</td>' for c in lines[i].strip('|').split('|')) + '</tr>')
                i += 1
            out.append('</tbody></table></div>')
            continue
        elif ln.startswith('- '):
            if not in_ul:
                out.append('<ul>')
                in_ul = True
            item = ln[2:].replace('[x] ', '☑ ').replace('[ ] ', '☐ ')
            out.append(f'<li>{inline(item)}</li>')
        elif ln.startswith('> '):
            close_ul()
            out.append(f'<blockquote>{inline(ln[2:])}</blockquote>')
        elif ln.strip() == '':
            close_ul()
        elif ln.startswith('<'):
            close_ul()
            out.append(ln)
        else:
            close_ul()
            out.append(f'<p>{inline(ln)}</p>')
        i += 1
    close_ul()
    return '\n'.join(out)


DOC_CSS = """:root{--ink:#172033;--mut:#5b6476;--line:#dfe4ee;--bg:#f6f7fb;--card:#fff;--acc:#2563eb}
*{box-sizing:border-box}body{margin:0;background:var(--bg);color:var(--ink);font:17px/1.7 "Noto Sans TC","Microsoft JhengHei","PingFang TC",sans-serif}
main{max-width:1000px;margin:0 auto;padding:24px 16px 80px}h1{font-size:28px;line-height:1.3;margin:40px 0 12px;padding-top:12px;border-top:3px solid var(--acc)}main>h1:first-child{border:0;margin-top:0}
h2{font-size:22px;margin:30px 0 10px}h3{font-size:18px;margin:22px 0 8px}blockquote{margin:12px 0;padding:10px 14px;background:#eef4ff;border-left:4px solid var(--acc);border-radius:6px}
.tw{overflow-x:auto;margin:10px 0}table{border-collapse:collapse;background:var(--card);min-width:560px;width:100%;font-size:15.5px}th,td{border:1px solid var(--line);padding:7px 9px;vertical-align:top;text-align:left}th{background:#f0f2f8}
a{color:var(--acc)}.bar{position:sticky;top:0;background:#fff;border-bottom:1px solid var(--line);padding:9px 16px;font-size:15px;z-index:3;display:flex;gap:14px;flex-wrap:wrap}
mjx-container{overflow-x:auto;overflow-y:hidden;max-width:100%}@media print{.bar{display:none}body{background:#fff}h1{page-break-before:always}}"""


def doc_page(title, body, back, mj, links=''):
    return f"""<!DOCTYPE html>
<html lang="zh-Hant"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>{html.escape(title)}</title><style>{DOC_CSS}</style>
<script>window.MathJax={{loader:{{paths:{{mathjax:'{mj}/es5'}}}},tex:{{inlineMath:[['\\\\(','\\\\)']],displayMath:[['$$','$$']]}},svg:{{fontCache:'global'}},options:{{enableMenu:false}}}};</script>
<script src="{mj}/es5/tex-svg-full.js" id="MathJax-script" async></script></head>
<body><div class="bar"><a href="{back}">← 全章目錄</a>{links}</div><main>{body}</main></body></html>
"""


def overview_md(metas):
    n = len(metas)
    cnt = {k: sum(1 for m in metas if m['type'] == k) for k in TYPE}
    L = ['# 第一章　空間向量與立體幾何：全章教案', '',
         f"> 全章 **{n} 節**，每節 40 分鐘，共 {n * 40 // 60} 小時 {n * 40 % 60} 分鐘。新課 {cnt['new']} 節、練習課 {cnt['practice']} 節、複習課 {cnt['review']} 節。"
         '教材範圍依使用者提供的 PDF（人教 B 版第一章，共 67 頁）。題目依課本題型重新編寫，文字與數字大多已更換，答案經程式驗算；少數經典幾何結論（例如空間四邊形對棱垂直）保留相同情境。不含課本原文或圖片。', '',
         '## 一、課時規劃與理由', '',
         '規劃原則：(1) 新課每節只建立一個核心概念；(2) 每學完 2～4 節新課，安排一節練習課；(3) 每個單元完結設一節複習課，全章再設一節；(4) 40 分鐘課要容納五到六個階段，內容比 45 分鐘課更精簡，所以把線面角、面面角、距離各拆成兩節。', '',
         '| 節次 | 課型 | 課題 | 教材 | PDF 頁 | 為甚麼需要這一節 |', '|------|------|------|------|------|------|']
    for m in metas:
        L.append(f"| L{m['id']:02d} | {TYPE[m['type']][0]} | {m['topic']} | {m['unit']} | {m['pdf']} | {WHY[m['id']]} |")
    L += ['', '## 二、全章的螺旋路徑', '',
          '| 主線概念 | 第一次出現 | 深化 | 應用 | 統整 |', '|------|------|------|------|------|',
          '| 數量積 | L02 定義與投影 | L04 基底展開；L06 坐標公式 | L10 線線角；L16 線面角；L18 面面角；L21 點面距離 | L23、L24 |',
          '| 基底與坐標 | L04 基底 | L06 單位正交基底；L07 建系 | L10 起全部計算 | L09 基底法與坐標法比較 |',
          '| 垂直 | L02 數量積為 0 | L06 坐標判斷；L12 法向量 | L13 三垂線定理；L17 作平面角 | L14、L23 |',
          '| 最短 | L11 公垂線段 | L20 點線距離 | L21 點面距離 | L22、L23 |',
          '| 向量法與幾何法 | L10 例題的三種方法 | L15、L16 同一個角兩種求法 | L17、L18 | L24 |', '',
          '## 三、全章學習證據追蹤', '',
          '每節出口題當堂分三類（已掌握／部分掌握／尚未掌握）；約一週後派發延遲檢測小紙條（不提前通知、不計分），用來分辨真正掌握、短暫學會、延後學會與尚未掌握。各節題目見下文 E、G 節，也已印在每節的 handout.html。', '',
          '以下學生表現全部是「預期情況」，尚未經真實課堂驗證。上課後請依出口題與延遲檢測的真實數據調整。', '',
          '## 四、需要教師確認的假設', '',
          '- 年級：PDF 未註明。教案暫定「高中選修（相當於中五）」。', '- 用語：依課本名詞（如數量積、法向量、二面角）轉為繁體，輔以香港常用表達；旁白為粵語。若學校慣用「純量積」「單位向量」等其他譯名，請告知後統一替換。', '- 節數：如學生基礎較佳，L14 可與 L19 合併；如基礎較弱，建議在 L07 後多加一節建系練習。', '']
    return '\n'.join(L)


def index_html(metas):
    cards = []
    for name, a, b in UNITS:
        rows = []
        for m in metas:
            if not (a <= m['id'] <= b):
                continue
            t, c = TYPE[m['type']]
            lid = f"L{m['id']:02d}"
            rows.append(f"""<article class="card" data-t="{m['type']}"><div class="no">{lid}</div><div class="main"><span class="tag" style="--c:{c}">{t}</span>
<h3>{html.escape(m['topic'])}</h3><p>{m['goal'].replace('<', '&lt;')}</p>
<div class="act"><a class="go" href="lessons/{lid}/index.html#present">開始上課</a><a href="lessons/{lid}/handout.html">列印紙本</a><a href="lessons/{lid}/lesson-plan.html">教案</a></div></div></article>""")
        cards.append(f'<section><h2>{name}<small>L{a:02d}–L{b:02d}</small></h2><div class="grid">{"".join(rows)}</div></section>')
    cnt = {k: sum(1 for m in metas if m['type'] == k) for k in TYPE}
    bars = ''.join(f'<span class="seg" title="L{m["id"]:02d} {html.escape(m["topic"])}" style="background:{TYPE[m["type"]][1]}"></span>' for m in metas)
    return f"""<!DOCTYPE html>
<html lang="zh-Hant"><head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>空間向量與立體幾何：全章授課</title><meta name="description" content="第一章 空間向量與立體幾何，24 節 40 分鐘課：互動簡報、列印紙本與教案。">
<style>:root{{--ink:#172033;--mut:#5b6476;--line:#dfe4ee;--bg:#f4f6fb;--card:#fff}}*{{box-sizing:border-box}}
body{{margin:0;background:var(--bg);color:var(--ink);font:17px/1.6 "Noto Sans TC","Microsoft JhengHei","PingFang TC",sans-serif}}
header{{background:#141c2f;color:#fff;padding:44px 16px 36px}}.wrap{{max-width:1120px;margin:0 auto}}header p{{margin:0;color:#b9c3d8}}h1{{margin:8px 0 14px;font-size:clamp(30px,5vw,46px);line-height:1.2}}
.stats{{display:flex;flex-wrap:wrap;gap:10px 26px;margin:20px 0 14px}}.stats b{{font-size:30px;display:block;line-height:1.1}}.stats span{{font-size:15px;color:#b9c3d8}}
.bar{{display:flex;gap:3px;margin:8px 0 18px}}.seg{{flex:1;height:12px;border-radius:3px}}.lg{{display:flex;flex-wrap:wrap;gap:6px 18px;font-size:15px;color:#b9c3d8}}.lg i{{display:inline-block;width:12px;height:12px;border-radius:3px;margin-right:6px}}
.top{{margin-top:20px;display:flex;flex-wrap:wrap;gap:10px}}.top a{{background:#fff;color:#141c2f;font-weight:700;padding:10px 16px;border-radius:9px;text-decoration:none}}.top a.alt{{background:transparent;color:#fff;border:1px solid #55617c}}
main{{padding:12px 16px 80px}}h2{{font-size:24px;margin:34px 0 14px;display:flex;align-items:baseline;gap:12px;flex-wrap:wrap}}h2 small{{font-size:15px;color:var(--mut);font-weight:400}}
.grid{{display:grid;grid-template-columns:repeat(auto-fill,minmax(330px,1fr));gap:14px}}.card{{display:flex;gap:14px;background:var(--card);border:1px solid var(--line);border-radius:12px;padding:16px;min-width:0}}
.no{{font-weight:800;color:#8a94a8;font-size:17px}}.main{{min-width:0;flex:1}}.tag{{display:inline-block;background:var(--c);color:#fff;font-size:14px;font-weight:700;padding:2px 9px;border-radius:999px}}
h3{{margin:7px 0 5px;font-size:19px;line-height:1.35}}.card p{{margin:0 0 11px;color:var(--mut);font-size:15.5px}}.act{{display:flex;flex-wrap:wrap;gap:6px 12px;align-items:center}}.act a{{color:#2563eb;font-size:15.5px}}.act a.go{{background:#2563eb;color:#fff;font-weight:700;padding:6px 13px;border-radius:8px;text-decoration:none}}
footer{{color:var(--mut);font-size:14.5px;border-top:1px solid var(--line);padding-top:16px;margin-top:40px}}@media(max-width:400px){{.grid{{grid-template-columns:1fr}}}}</style></head>
<body><header><div class="wrap"><p>高中選修｜第一章</p><h1>空間向量與立體幾何</h1>
<div class="stats"><div><b>{len(metas)}</b><span>節課，每節 40 分鐘</span></div><div><b>{cnt['new']}</b><span>新課</span></div><div><b>{cnt['practice']}</b><span>練習課</span></div><div><b>{cnt['review']}</b><span>複習課</span></div></div>
<div class="bar" aria-label="全章課型排列">{bars}</div><div class="lg"><span><i style="background:#2563eb"></i>新課</span><span><i style="background:#d97706"></i>練習課</span><span><i style="background:#059669"></i>複習課</span></div>
<div class="top"><a href="chapter-plan.html">全章教案</a><a class="alt" href="lessons/L01/index.html#present">由第 1 節開始</a></div></div></header>
<main><div class="wrap">{"".join(cards)}
<footer>每節含互動簡報（投影用，含粵語動畫或互動圖）、列印紙本（學習單、出口小紙條、延遲檢測、教師版）與教案。可整個資料夾下載後離線開啟。投影時按 ← → 翻頁。教師版與教案請勿派發給學生。簡報引擎改自 math-review-deck（MIT）；公式排版 MathJax 3.2.2（Apache-2.0）。題目依課本題型改寫，教材範圍參考人教 B 版第一章；本站不含課本原文或圖片。</footer></div></main></body></html>
"""


def run(root, build, ids):
    docs = os.path.join(root, 'docs')
    if os.path.isdir(docs):
        shutil.rmtree(docs)
    os.makedirs(os.path.join(docs, 'lessons'))
    metas = [json.load(open(os.path.join(build, i, 'meta.json'), encoding='utf-8')) for i in ids]
    metas.sort(key=lambda m: m['id'])
    shutil.copytree(os.path.join(build, ids[0], 'site', 'mathjax'), os.path.join(docs, 'mathjax'))
    all_md = []
    for k, m in enumerate(metas):
        lid = f"L{m['id']:02d}"
        src, dst = os.path.join(build, lid, 'site'), os.path.join(docs, 'lessons', lid)
        shutil.copytree(src, dst, ignore=shutil.ignore_patterns('mathjax'))
        prev_l = f'../L{m["id"] - 1:02d}/index.html' if k else None
        next_l = f'../L{m["id"] + 1:02d}/index.html' if k < len(metas) - 1 else None
        nav = '<a href="../../index.html">全章目錄</a>　<a href="lesson-plan.html">本節教案</a>' + (f'　<a href="{prev_l}">上一節</a>' if prev_l else '') + (f'　<a href="{next_l}">下一節</a>' if next_l else '')
        for f in ('index.html', 'handout.html'):
            p = os.path.join(dst, f)
            s = open(p, encoding='utf-8').read()
            s = s.replace("mathjax: 'mathjax/es5'", "mathjax: '../../mathjax/es5'").replace('src="mathjax/es5/', 'src="../../mathjax/es5/')
            if f == 'index.html':
                s = s.replace('<a href="handout.html">', nav + '　<a href="handout.html">', 1)
            open(p, 'w', encoding='utf-8', newline='\n').write(s)
        md = open(os.path.join(build, lid, 'lesson-plan.md'), encoding='utf-8').read()
        all_md.append(md)
        open(os.path.join(dst, 'lesson-plan.md'), 'w', encoding='utf-8', newline='\n').write(md)
        links = f'<a href="index.html#present">開始上課</a><a href="handout.html">列印紙本</a>'
        open(os.path.join(dst, 'lesson-plan.html'), 'w', encoding='utf-8', newline='\n').write(doc_page(f'{lid} 教案', md_to_html(md), '../../index.html', '../../mathjax', links))
    ov = overview_md(metas)
    toc = '## 五、各節教案目錄\n\n' + '\n'.join(f"- <a href=\"#L{m['id']:02d}\">L{m['id']:02d} {m['topic']}（{TYPE[m['type']][0]}）</a>" for m in metas) + '\n'
    full = ov + '\n' + toc + '\n' + '\n'.join(all_md)
    open(os.path.join(docs, 'chapter-plan.md'), 'w', encoding='utf-8', newline='\n').write(full)
    open(os.path.join(docs, 'chapter-plan.html'), 'w', encoding='utf-8', newline='\n').write(doc_page('全章教案', md_to_html(full), 'index.html', 'mathjax'))
    open(os.path.join(docs, 'index.html'), 'w', encoding='utf-8', newline='\n').write(index_html(metas))
    open(os.path.join(docs, '.nojekyll'), 'w').close()
    print('docs 合成完成：', len(metas), '節')
