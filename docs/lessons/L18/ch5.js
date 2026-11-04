/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2);
const Wg=(d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：二面角一定等於法向量夾角？',null,{q:'\\(\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=60^\\circ\\)，求二面角。',steps:['法向量夾角等於二面角','所以二面角一定是 60°'],wrong:0,why:'概念錯誤：兩者相等或互補，要看圖形或法向量方向。',fix:'二面角是 60° 或 120°；由圖判斷是銳角還是鈍角'}),
S.mistake('5-2','再抓一次','再抓一次：所成的角',null,{q:'\\(\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=-\\tfrac{\\sqrt3}{2}\\)，求兩平面所成的角。',steps:['\\(\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=150^\\circ\\)','所成的角是 150°'],wrong:1,why:'概念錯誤：所成的角不大於 90°。',fix:'所成的角是 30°'}),
S.tasks('5-3','升級挑戰','升級挑戰：三種角總表',null,[
 ['寫出線線角的公式。',['絕對值＋餘弦。'],'\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle|\\)'],
 ['寫出線面角的公式。',['方向向量與法向量。'],'\\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)'],
 ['為甚麼只有線面角用正弦？',null,'只有它要比較的是直線與法線的餘角']
])
  ]));
})();
