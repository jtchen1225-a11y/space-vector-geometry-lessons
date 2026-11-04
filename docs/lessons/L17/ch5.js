/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Wg = (d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
const drawWg=(d,o,more)=>{const W=Wg(d);const F=G3.frame(W,{W:440,H:o.H||200,m:o.m||18,fs:o.fs||34,az:o.az===undefined?40:o.az,el:20,extra:[[1.5,0,1.5],[-1.5,0,1.5]]});const y=o.y||0,t=d*Math.PI/180,P=[0,y,0],A=[1.2,y,0],B=[1.2*Math.cos(t),y,1.2*Math.sin(t)];return {F,W,P,A,B,s:F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')+F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.12)')+F.base({labels:false})+F.seg('E1','E2',RED,5)}};
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：這是平面角嗎？',null,{q:'正方體中，求二面角 D₁-AB-D。',steps:['在兩個面各取一條線：AD₁、AC','∠D₁AC 是平面角'],wrong:0,why:'概念錯誤：AC 不垂直棱 AB。',fix:'底面應取 AD⊥AB，平面角是 ∠D₁AD＝45°'},{fig:miniCu}),
S.mistake('5-2','再抓一次','再抓一次：兩者可以混用嗎？',null,{q:'二面角的平面角是 120°，兩平面所成的角是？',steps:['二面角就是兩平面所成的角','答案是 120°'],wrong:0,why:'概念錯誤：兩平面所成的角規定在 0° 到 90°。',fix:'所成的角是 60°'}),
S.tasks('5-3','升級挑戰','升級挑戰：不同的二面角',null,[
 ['△ABP 面積 8，二面角 60°，求射影面積。',['\\(S\\cos\\theta\\)。'],'4'],
 ['棱長 2 的正四面體，相鄰兩面所成角的餘弦是？',['中心到邊的距離 ÷ 斜高。'],'\\(\\tfrac13\\)'],
 ['AB 是圓的直徑，AB＝6，∠ABM＝30°，PA⊥圓面，PA＝3，求二面角 A-BM-P。',['BM⊥AM，\\(AM=3\\)。'],'45°']
])
  ]));
})();
