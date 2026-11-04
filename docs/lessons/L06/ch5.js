/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Grid = G3.box(3,3,2.2);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：長度怎麼可能這樣？',null,{q:'\\(\\boldsymbol{a}=(1,-2,2)\\)，求 \\(|\\boldsymbol{a}|\\)。',steps:['\\(|\\boldsymbol{a}|^2=1-4+4=1\\)','\\(|\\boldsymbol{a}|=1\\)'],wrong:0,why:'程序錯誤：\\((-2)^2=4\\)，不是 \\(-4\\)。',fix:'\\(1+4+4=9\\)，\\(|\\boldsymbol{a}|=3\\)'}),
S.mistake('5-2','再抓一次','再抓一次：坐標有 0 怎麼辦？',null,{q:'\\(\\boldsymbol{a}=(0,1,2)\\)，\\(\\boldsymbol{b}=(0,2,4)\\) 平行嗎？',steps:['比值 \\(\\tfrac00\\) 沒有意義','所以兩向量不平行'],wrong:1,why:'概念錯誤：比值式只適用於分量都不為 0；應改用 \\(\\boldsymbol{b}=\\lambda\\boldsymbol{a}\\)。',fix:'\\(\\boldsymbol{b}=2\\boldsymbol{a}\\)，所以平行'}),
S.tasks('5-3','升級挑戰','升級挑戰：平行與垂直',null,[
 ['\\(\\boldsymbol{a}=(1,0,3),\\boldsymbol{b}=(2,-1,1)\\)，求 \\(2\\boldsymbol{a}-\\boldsymbol{b}\\)',['先算 \\(2\\boldsymbol{a}\\)。','對應相減。'],'\\((0,1,5)\\)'],
 ['\\((2,-2,4)\\parallel(1,y,z)\\)，求 \\(y,z\\)',['倍數是多少？'],'\\(y=-1\\)，\\(z=2\\)'],
 ['\\(\\boldsymbol{a}=(1,2,2),\\boldsymbol{b}=(1,0,1)\\)，\\(\\boldsymbol{a}\\perp(\\boldsymbol{a}-\\lambda\\boldsymbol{b})\\)，求 \\(\\lambda\\) 並說明幾何意義。',null,'\\(\\lambda=3\\)；\\(\\lambda\\boldsymbol{b}\\) 在 \\(\\boldsymbol{a}\\) 方向的投影恰好是 \\(\\boldsymbol{a}\\)']
])
  ]));
})();
