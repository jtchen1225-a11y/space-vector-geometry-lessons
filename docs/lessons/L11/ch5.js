/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：不平行就是異面？',null,{q:'\\(\\boldsymbol{v}_1=(1,0,0)\\)，\\(\\boldsymbol{v}_2=(0,1,0)\\)，\\(l_1,l_2\\) 都過原點。',steps:['兩方向不平行','所以 \\(l_1,l_2\\) 異面'],wrong:1,why:'概念錯誤：兩線都過原點，是相交。不平行只是異面的必要條件。',fix:'檢查 \\(\\boldsymbol{v}_1,\\boldsymbol{v}_2,\\overrightarrow{AB}\\) 是否不共面；這裏相交'}),
S.mistake('5-2','再抓一次','再抓一次：一條方程夠嗎？',null,{q:'求棱長 1 的正方體中 AB₁ 與 BC₁ 的公垂線段。',steps:['設 \\(M(1,t,t)\\)，\\(N(1-s,1,s)\\)','由 \\(\\overrightarrow{MN}\\cdot\\overrightarrow{AB_1}=0\\) 直接得結果'],wrong:1,why:'程序錯誤：兩個未知數要兩條方程，也要垂直 BC₁。',fix:'再加 \\(\\overrightarrow{MN}\\cdot\\overrightarrow{BC_1}=0\\)，解得 \\(t=\\tfrac23\\)，\\(s=\\tfrac13\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：由方向與點判斷',['\\(l_1\\)：過 (0,0,0)，方向 (1,0,0)。','\\(l_2\\)：過 (0,1,1)，方向 (0,1,0)。'],[
 ['兩方向平行嗎？',['是否倍數？'],'不平行'],
 ['\\(l_1,l_2\\) 異面嗎？',['取 \\(\\overrightarrow{AB}=(0,1,1)\\)。','能寫成兩個方向的組合嗎？'],'異面'],
 ['求兩直線的距離，並說明公垂線段的位置。',null,'距離 1：公垂線段連接 (0,0,0) 與 (0,0,1)']
])
  ]));
})();
