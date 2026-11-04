/* ============================================================
   runtime.js — 全章共用：3D 繪圖（G3）與投影片簡寫（S）。
   建置時內嵌在每節 ch1.js 最前面，所以驗證工具與紙本都能直接使用。
   ============================================================ */
window.G3 = window.G3 || (function () {
  const RED = '#e11d48', GRN = '#059669', BLU = '#2563eb', VIO = '#7c3aed', AMB = '#d97706', INK = '#172033', GRY = '#94a3b8';
  const deg = Math.PI / 180;
  const sub = n => String(n).replace(/1$/, '₁').replace(/2$/, '₂').replace(/'/g, '′');
  const wrap = (W, H, inner) => `<div style="width:100%;text-align:center"><svg viewBox="0 0 ${W} ${H}" style="max-width:100%">${inner}</svg></div>`;
  const f1 = v => +v.toFixed(1);

  /* ---------- 向量運算 ---------- */
  const add = (a, b) => a.map((v, i) => v + b[i]);
  const sbt = (a, b) => a.map((v, i) => v - b[i]);
  const mul = (a, k) => a.map(v => v * k);
  const dot = (a, b) => a.reduce((s, v, i) => s + v * b[i], 0);
  const len = a => Math.sqrt(dot(a, a));
  const crs = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
  const mid = (a, b) => mul(add(a, b), 0.5);
  const lerp = (a, b, t) => a.map((v, i) => v + (b[i] - v) * t);

  /* ---------- 立體 ---------- */
  // 長方體：D 為原點，DA 為 x、DC 為 y、DD1 為 z（與課本建系習慣一致）
  function box(a, b, c, o = {}) {
    const t = o.prime ? (n => n + "'") : (n => n + '1');
    const V = { D: [0, 0, 0], A: [a, 0, 0], B: [a, b, 0], C: [0, b, 0] };
    V[t('D')] = [0, 0, c]; V[t('A')] = [a, 0, c]; V[t('B')] = [a, b, c]; V[t('C')] = [0, b, c];
    const F = [['A', 'B', 'C', 'D'], [t('A'), t('B'), t('C'), t('D')], ['A', 'B', t('B'), t('A')], ['B', 'C', t('C'), t('B')], ['C', 'D', t('D'), t('C')], ['D', 'A', t('A'), t('D')]];
    return { V, F };
  }
  const cube = (s = 1, o = {}) => box(s, s, s, o);
  // 平行六面體：AB 沿 y、AD 沿 -x（略斜）、AA′ 傾斜
  function para(o = {}) {
    const t = o.prime ? (n => n + "'") : (n => n + '1');
    const A = [1.6, 0, 0], ab = o.ab || [0, 2, 0], ad = o.ad || [-1.6, 0.5, 0], aa = o.aa || [0.25, 0.45, 1.5];
    const V = { A, B: add(A, ab), D: add(A, ad), C: add(add(A, ab), ad) };
    V[t('A')] = add(V.A, aa); V[t('B')] = add(V.B, aa); V[t('C')] = add(V.C, aa); V[t('D')] = add(V.D, aa);
    const F = [['A', 'B', 'C', 'D'], [t('A'), t('B'), t('C'), t('D')], ['A', 'B', t('B'), t('A')], ['B', 'C', t('C'), t('B')], ['C', 'D', t('D'), t('C')], ['D', 'A', t('A'), t('D')]];
    return { V, F };
  }
  // 一般多面體；open:true 時為單一平面或開放圖形，不判斷隱藏線
  const solid = (V, F, open) => ({ V, F, open: !!open });
  // 平面 α：以 z=h 的平行四邊形代表
  const plane = (n = 'α', o = {}) => {
    const w = o.w || 2, d = o.d || 1.4, z = o.z || 0;
    return { V: { P1: [d, -w, z], P2: [d, w, z], P3: [-d, w, z], P4: [-d, -w, z] }, F: [['P1', 'P2', 'P3', 'P4']], open: true, flat: true, nm: n };
  };

  /* ---------- 投影框架 ---------- */
  function frame(sc, o = {}) {
    const W = o.W || 440, H = o.H || 280, m = o.m === undefined ? 34 : o.m, FS = o.fs || 30;
    const az = (o.az === undefined ? 28 : o.az) * deg, el = (o.el === undefined ? 18 : o.el) * deg;
    const sa = Math.sin(az), ca = Math.cos(az), se = Math.sin(el), ce = Math.cos(el);
    const raw = q => [-q[0] * sa + q[1] * ca, -(-q[0] * ca * se - q[1] * sa * se + q[2] * ce)];
    const view = [ca * ce, sa * ce, se];
    const all = Object.values(sc.V).concat(o.extra || []);
    const rs = all.map(raw);
    const xs = rs.map(r => r[0]), ys = rs.map(r => r[1]);
    const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
    const LW = o.figW || W;
    const s = o.scale || Math.min((LW - 2 * m) / Math.max(x1 - x0, 1e-6), (H - 2 * m) / Math.max(y1 - y0, 1e-6));
    const ox = (o.figX || 0) + (LW - s * (x1 - x0)) / 2 - s * x0, oy = (H - s * (y1 - y0)) / 2 - s * y0;
    const pr3 = q => { const r = raw(q); return [f1(ox + s * r[0]), f1(oy + s * r[1])]; };
    const coord = q => (typeof q === 'string' ? sc.V[q] : q);
    const P = q => pr3(coord(q));
    const cen = (() => { const k = Object.values(sc.V); return mul(k.reduce(add, [0, 0, 0]), 1 / k.length); })();
    const cs = pr3(cen);

    const seg = (a, b, c = INK, w = 3, dash = '', k = 1) => {
      const A = coord(a), B = lerp(A, coord(b), k), p = pr3(A), q = pr3(B);
      return `<line x1="${p[0]}" y1="${p[1]}" x2="${q[0]}" y2="${q[1]}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"${dash ? ` stroke-dasharray="${dash}"` : ''}/>`;
    };
    const head = (p, q, c, L = 15, D = 6.5) => {
      const dx = q[0] - p[0], dy = q[1] - p[1], n = Math.hypot(dx, dy) || 1, ux = dx / n, uy = dy / n;
      const b = [q[0] - ux * L, q[1] - uy * L];
      return `<polygon points="${f1(q[0])},${f1(q[1])} ${f1(b[0] - uy * D)},${f1(b[1] + ux * D)} ${f1(b[0] + uy * D)},${f1(b[1] - ux * D)}" fill="${c}"/>`;
    };
    const text = (x, y, t, a = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${a.anchor || 'middle'}" font-size="${a.fs || FS}" font-weight="${a.fw || 800}" fill="${a.c || INK}">${t}</text>`;
    const vec = (a, b, c = RED, lab = '', k = 1, off = [10, -8], w = 4.5) => {
      const A = coord(a), B = lerp(A, coord(b), Math.max(k, 0.02)), p = pr3(A), q = pr3(B);
      const n = Math.hypot(q[0] - p[0], q[1] - p[1]);
      const e = n > 14 ? [q[0] - (q[0] - p[0]) / n * 8, q[1] - (q[1] - p[1]) / n * 8] : q;
      let s2 = `<line x1="${p[0]}" y1="${p[1]}" x2="${f1(e[0])}" y2="${f1(e[1])}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/>` + head(p, q, c);
      if (lab && k > 0.6) s2 += text((p[0] + q[0]) / 2 + off[0], (p[1] + q[1]) / 2 + off[1], lab, { c });
      return s2;
    };
    const fill = (ns, c = 'rgba(37,99,235,.14)', st = 'none') => `<polygon points="${ns.map(n => P(n).join(',')).join(' ')}" fill="${c}" stroke="${st}"/>`;
    const dotp = (q, c = RED, r = 6) => { const p = P(q); return `<circle cx="${p[0]}" cy="${p[1]}" r="${r}" fill="${c}"/>`; };
    const lab = (q, t, c = INK, off = null) => {
      const p = P(q); let dx, dy;
      if (off) { dx = off[0]; dy = off[1]; } else { const vx = p[0] - cs[0], vy = p[1] - cs[1], n = Math.hypot(vx, vy) || 1; dx = vx / n * 21; dy = vy / n * 21; }
      // 夾在畫布內，避免貼邊的頂點標籤被切掉
      const lx = Math.max(FS * 0.75, Math.min(W - FS * 0.75, p[0] + dx)), ly = Math.max(FS * 0.85, Math.min(H - 5, p[1] + dy + 10));
      return text(lx, ly, sub(t), { c });
    };
    // 3D 角弧（O 為頂點，往 A、B 方向），弧上點用球面內插
    const arc = (O, A, B, c = RED, t = '', r = null, k = 1) => {
      const o3 = coord(O), a = sbt(coord(A), o3), b = sbt(coord(B), o3), ua = mul(a, 1 / len(a)), ub = mul(b, 1 / len(b));
      const om = Math.acos(Math.max(-1, Math.min(1, dot(ua, ub)))), R = r || Math.min(len(a), len(b)) * 0.3;
      const pts = [];
      for (let i = 0; i <= 24; i++) {
        const u = i / 24 * k;
        const d = om < 1e-6 ? ua : add(mul(ua, Math.sin((1 - u) * om) / Math.sin(om)), mul(ub, Math.sin(u * om) / Math.sin(om)));
        pts.push(pr3(add(o3, mul(d, R))));
      }
      let s2 = `<polyline points="${pts.map(q => q.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="3.5"/>`;
      if (t && k > 0.6) { const q = pts[12], n0 = pr3(o3), vx = q[0] - n0[0], vy = q[1] - n0[1], n = Math.hypot(vx, vy) || 1; s2 += text(q[0] + vx / n * 22, q[1] + vy / n * 22 + 10, t, { c }); }
      return s2;
    };
    // 3D 直角記號
    const ra = (O, A, B, c = INK, z = 0.14) => {
      const o3 = coord(O), a = sbt(coord(A), o3), b = sbt(coord(B), o3), ua = mul(a, z / len(a)), ub = mul(b, z / len(b));
      const pts = [add(o3, ua), add(add(o3, ua), ub), add(o3, ub)].map(pr3);
      return `<polyline points="${pts.map(q => q.join(',')).join(' ')}" fill="none" stroke="${c}" stroke-width="2.5"/>`;
    };
    // 底圖：判斷隱藏線，前面實線、後面虛線
    const base = (a = {}) => {
      const fv = sc.F.map(f => {
        const q = f.map(n => sc.V[n]); let nv = [0, 0, 0];
        for (let i = 0; i < q.length; i++) { const u = q[i], w = q[(i + 1) % q.length]; nv = add(nv, crs(u, w)); }
        const fc = mul(q.reduce(add, [0, 0, 0]), 1 / q.length);
        if (dot(nv, sbt(fc, cen)) < 0) nv = mul(nv, -1);
        return sc.open ? true : dot(nv, view) > 1e-9;
      });
      const edges = {};
      sc.F.forEach((f, i) => f.forEach((n, j) => {
        const m2 = f[(j + 1) % f.length], key = [n, m2].sort().join('|');
        (edges[key] = edges[key] || { a: n, b: m2, vis: false }).vis = edges[key].vis || fv[i];
      }));
      let s2 = '';
      if (sc.flat) s2 += fill(sc.F[0], a.pfill || 'rgba(148,163,184,.18)');
      Object.values(edges).forEach(e => { s2 += e.vis ? seg(e.a, e.b, a.c || INK, a.w || 3) : seg(e.a, e.b, a.hc || GRY, 2.5, '7 6'); });
      if (sc.flat) { const p = P('P1'); s2 += text(p[0] - 4, p[1] - 12, sc.nm, { c: '#64748b' }); }
      if (a.labels !== false && !sc.flat) Object.keys(sc.V).forEach(n => { if (!a.only || a.only.includes(n)) s2 += lab(n, n); });
      return s2;
    };
    // 坐標軸（由原點 O 伸出）
    const axes = (L = 1.3, o2 = [0, 0, 0]) => {
      const ax = [[[L, 0, 0], 'x'], [[0, L, 0], 'y'], [[0, 0, L], 'z']];
      return ax.map(([d, n]) => vec(o2, add(o2, d), '#475569', '', 1, [0, 0], 2.5) + (() => { const q = pr3(add(o2, d)); return text(q[0] + (n === 'x' ? -14 : n === 'y' ? 16 : 16), q[1] + (n === 'x' ? 18 : n === 'y' ? 8 : 4), n, { c: '#475569', fw: 700 }); })()).join('');
    };
    const show = (...parts) => wrap(W, H, parts.join(''));
    return { P, seg, vec, fill, dot: dotp, lab, arc, ra, base, text, axes, show, W, H, s };
  }

  /* ---------- 互動：滑桿探索、旋轉 ---------- */
  function explore(h, { sl, draw, fx }) {
    h.innerHTML = `<div style="width:100%"><div class="fig"></div>${fx ? '<div class="fx" style="font-size:var(--mrd-body);text-align:center;line-height:1.3"></div>' : ''}<div class="ictrl">${sl.map(s => `<label>${s.label} <span class="ival v-${s.id}">${s.fmt ? s.fmt(s.value) : s.value}</span></label><input type="range" id="${s.id}" min="${s.min}" max="${s.max}" step="${s.step}" value="${s.value}">`).join('')}</div></div>`;
    const go = () => {
      const v = {};
      sl.forEach(s => { v[s.id] = +h.querySelector('#' + s.id).value; h.querySelector('.v-' + s.id).textContent = s.fmt ? s.fmt(v[s.id]) : v[s.id]; });
      h.querySelector('.fig').innerHTML = draw(v);
      if (fx) { const e = h.querySelector('.fx'); e.innerHTML = fx(v); if (typeof MJ === 'function') MJ(e); }
    };
    sl.forEach(s => { h.querySelector('#' + s.id).oninput = go; });
    go();
  }
  const steps = (h, W, H, list, opt) => {
    SV.stepper(h, `0 0 ${W} ${H}`, list, opt);
    // 步驟文字可含公式：每次重繪後排版
    const sl = h.querySelector('.steps-r'), txt = h.querySelector('.step-txt'), o = sl && sl.oninput;
    if (sl && txt && typeof MJ === 'function') { sl.oninput = () => { if (o) o(); MJ(txt); }; MJ(txt); }
  };
  const card = (h, rows) => { h.innerHTML = SV.fbox(rows.map(r => Object.assign({ color: BLU, fill: '#eef4ff', border: BLU, size: 21 }, r))); };

  // 2D 文字與箭頭（平面示意圖用）
  const txt = (x, y, t, a = {}) => `<text x="${f1(x)}" y="${f1(y)}" text-anchor="${a.anchor || 'middle'}" font-size="${a.fs || 30}" font-weight="${a.fw || 800}" fill="${a.c || INK}">${t}</text>`;
  const arw = (x1, y1, x2, y2, c = RED, w = 4.5) => { const n = Math.hypot(x2 - x1, y2 - y1) || 1, ux = (x2 - x1) / n, uy = (y2 - y1) / n, bx = x2 - ux * 15, by = y2 - uy * 15; return `<line x1="${f1(x1)}" y1="${f1(y1)}" x2="${f1(x2 - ux * 8)}" y2="${f1(y2 - uy * 8)}" stroke="${c}" stroke-width="${w}" stroke-linecap="round"/><polygon points="${f1(x2)},${f1(y2)} ${f1(bx - uy * 6.5)},${f1(by + ux * 6.5)} ${f1(bx + uy * 6.5)},${f1(by - ux * 6.5)}" fill="${c}"/>`; };
  // 左欄小圖：mini(立體, F=>額外圖層, 選項)
  const mini = (sc, ex, o = {}) => { const F = frame(sc, Object.assign({ W: 420, H: 190, m: 38 }, o)); return F.show(F.base(o.b || {}), ex ? ex(F) : ''); };
  // 行內數學簡寫：vv('AC1') → 向量 AC₁；bb('a') → 粗體向量 a
  const vv = n => `\\(\\overrightarrow{${String(n).replace(/(\d)/g, '_$1')}}\\)`;
  const bb = n => `\\(\\boldsymbol{${n}}\\)`;
  return { vv, bb, mini, txt, arw, RED, GRN, BLU, VIO, AMB, INK, GRY, box, cube, para, solid, plane, frame, explore, steps, card, wrap, add, sbt, mul, dot, len, crs, mid, lerp, sub };
})();

window.S = window.S || (function () {
  const PTS = {
    check: ['想好再比手勢，全班一起出。', '說說看：其他選項錯在哪裏？'],
    tasks: ['三層都看一遍，選一層開始。', '卡住先按「提示」，做完往上挑戰。'],
    drill: ['按「開始」計時，選一層開始。', '卡住先按「提示」，做完往上挑戰。'],
    mistake: ['這個解法哪一步開始出問題？', '怎樣檢查答案是否合理？'],
    exit: ['獨立完成，約 2～3 分鐘。', '寫出關鍵步驟。'],
    tally: ['舉手表示自己的程度。', '誠實回答，下一節更適合你。'],
    summary: ['一起讀一次，抄進筆記。'],
    hook: ['先看情境，猜一猜。', '猜錯沒關係，學完就知道。'],
    anim: ['按 ▶ 播放，邊看邊想。', '看完說說你發現了甚麼。'],
  };
  const mk = (kind, sec, secName, title, points, visual, data, more) =>
    (() => {
      const m = Object.assign({}, more || {}); const pts = (points || (m.fig ? (PTS[kind] || []).slice(0, 1) : PTS[kind]) || []).slice();
      // m.fig：左欄小圖（題目需要看圖時用），放在重點文字之後
      if (m.fig) { pts[pts.length - 1] += `<div style="margin:6px 0 0 -34px">${m.fig}</div>`; delete m.fig; }
      return Object.assign({ sec, secName, title, points: pts, visual, _k: kind, _d: data }, m);
    })();
  return {
    goals: (s, n, t, p, d, m) => mk('goals', s, n, t, p, (h) => LS.goals(h, d), d, m),
    summary: (s, n, items) => mk('summary', s, n || '核心知識小結', '本節核心知識小結', null, (h) => LS.summary(h, { items }), { items }),
    tasks: (s, n, t, p, q, m) => { const T = q.map((x, i) => ({ tier: 'ABC'[i], q: x[0], hints: x[1], ans: x[2] })); return mk('tasks', s, n, t, p, (h) => LS.tasks(h, T), { tiers: T }, m); },
    drill: (s, n, t, p, min, watch, q, m) => { const T = q.map((x, i) => ({ tier: 'ABC'[i], q: x[0], hints: x[1], ans: x[2] })); return mk('drill', s, n, t, p, (h) => LS.tasks(h, T, { timer: min, watch }), { tiers: T, timer: min, watch }, m); },
    check: (s, n, t, p, q, o, m) => { const options = o.map(x => ({ t: x[0], why: x[1], ok: !!x[2] })); return mk('check', s, n, t, p, (h) => LS.check(h, { q, options }), { q, options }, m); },
    mistake: (s, n, t, p, d, m) => mk('mistake', s, n, t, p, (h) => LS.mistake(h, d), d, m),
    hook: (s, n, t, p, d, m) => mk('hook', s, n, t, p, (h) => LS.hook(h, d), d, m),
    anim: (s, n, t, p, vb, scenes, m) => { const sc = scenes.map((x, i) => Object.assign({ audio: `audio/s${i + 1}.mp3`, dur: 5 }, x)); return mk('anim', s, n, t, p, (h) => LS.anim(h, { vb, scenes: sc }), { scenes: sc.map(x => ({ say: x.say, read: x.read })) }, m); },
    exit: (s, n, t, p, d, m) => mk('exit', s, n, t, p, (h) => LS.exit(h, d), d, m),
    tally: (s, n, t, q, m) => mk('tally', s, n, t, null, (h) => LS.tally(h, { q, levels: ['已掌握', '部分掌握', '尚未掌握'] }), { q }, m),
    slider: (s, n, t, p, visual, m) => mk('slider', s, n, t, p, visual, {}, m),
    stepper: (s, n, t, p, visual, m) => mk('stepper', s, n, t, p, visual, {}, m),
    stat: (s, n, t, p, visual, m) => mk('static', s, n, t, p, visual, {}, m),
    phase: (ch, time, title, color, slides) => ({ ch, time, title, color, sections: slides.map(x => `${x.sec} ${x.secName}`), slides }),
  };
})();

/* ============ 第 1 階段　0–5 分鐘　熱身挑戰：先動手算一算（教案：課堂安頓＋分層起步題；螺旋：舊概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#2563eb";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Wg = (d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
const drawWg=(d,o,more)=>{const W=Wg(d);const F=G3.frame(W,{W:440,H:o.H||200,m:o.m||18,fs:o.fs||34,az:o.az===undefined?40:o.az,el:20,extra:[[1.5,0,1.5],[-1.5,0,1.5]]});const y=o.y||0,t=d*Math.PI/180,P=[0,y,0],A=[1.2,y,0],B=[1.2*Math.cos(t),y,1.2*Math.sin(t)];return {F,W,P,A,B,s:F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')+F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.12)')+F.base({labels:false})+F.seg('E1','E2',RED,5)}};
  window.DECK.push(S.phase(1, "0–5 分鐘", "熱身挑戰：先動手算一算", C, [
S.goals('1-1','今天的任務','手提電腦開合的角度，怎樣量？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說出二面角與平面角的定義','在圖中作出二面角的平面角','用三垂線定理作平面角','分辨二面角與兩平面所成的角']}),
S.tasks('1-2','熱身題','用餘弦定理求角',['選一層開始。'],[
 ['三邊 3、4、\\(\\sqrt{13}\\)，\\(\\sqrt{13}\\) 所對的角是？',['\\(\\cos C=\\dfrac{a^2+b^2-c^2}{2ab}\\)。','分子是 12。'],'60°'],
 ['等腰三角形兩腰都是 2，底邊 2，頂角是？',['這是甚麼三角形？'],'60°'],
 ['餘弦定理算出負數，表示甚麼？',null,'該角是鈍角']
]),
S.check('1-3','舊知識快問','舊知識快問：用定理',null,'三垂線定理：\\(l\\) 在平面內，\\(l\\perp\\) 射影，則？',[
 ['\\(l\\perp\\) 斜線','定理的結論',1],
 ['\\(l\\parallel\\) 斜線','概念錯誤：與結論相反'],
 ['斜線 \\(\\perp\\) 平面','概念錯誤：斜線不垂直平面']
])
  ]));
})();
