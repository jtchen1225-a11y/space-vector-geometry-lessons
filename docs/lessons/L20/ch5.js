/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pa = G3.para({ab:[0,2,0],ad:[-1,0,0],aa:[.5,1,.7]});
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：斜棱也能這樣算？',null,{q:'單位基底兩兩夾角 60°，求 \\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|\\)。',steps:['\\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|^2=1+1+1\\)','長度 \\(\\sqrt3\\)'],wrong:0,why:'程序錯誤：斜棱不垂直，漏了 \\(2(\\tfrac12+\\tfrac12+\\tfrac12)=3\\)。',fix:'\\(|\\cdots|^2=6\\)，長度 \\(\\sqrt6\\)'}),
S.mistake('5-2','再抓一次','再抓一次：這是點線距離嗎？',null,{q:'棱長 1 的正方體，求 C₁ 到直線 BD₁ 的距離。',steps:['連接 C₁B','距離是 \\(C_1B=\\sqrt2\\)'],wrong:0,why:'概念錯誤：C₁B 不垂直 BD₁，不是垂線段。',fix:'找垂足：\\(\\lambda=\\tfrac23\\)，距離 \\(\\dfrac{\\sqrt6}{3}\\)'},{fig:miniCu}),
S.tasks('5-3','升級挑戰','升級挑戰：不同的情境',null,[
 ['\\(|\\boldsymbol{a}|=2\\)，\\(|\\boldsymbol{b}|=3\\)，夾角 60°，\\(|\\boldsymbol{a}-\\boldsymbol{b}|\\)＝？',['展開中間項是負。'],'\\(\\sqrt7\\)'],
 ['直線過 (1,0,0)、方向 (0,1,0)，點 P(1,3,4) 到直線的距離？',['\\(\\overrightarrow{AP}=(0,3,4)\\)。'],'4'],
 ['正四面體棱長 2，M、N 是 AB、CD 中點，求 MN，並解釋 MN 與 AB、CD 的關係。',null,'\\(\\sqrt2\\)；MN 同時垂直 AB、CD，是公垂線段']
])
  ]));
})();
