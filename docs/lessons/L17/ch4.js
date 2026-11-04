/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Wg = (d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
const drawWg=(d,o,more)=>{const W=Wg(d);const F=G3.frame(W,{W:440,H:o.H||200,m:o.m||18,fs:o.fs||34,az:o.az===undefined?40:o.az,el:20,extra:[[1.5,0,1.5],[-1.5,0,1.5]]});const y=o.y||0,t=d*Math.PI/180,P=[0,y,0],A=[1.2,y,0],B=[1.2*Math.cos(t),y,1.2*Math.sin(t)];return {F,W,P,A,B,s:F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')+F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.12)')+F.base({labels:false})+F.seg('E1','E2',RED,5)}};
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['先作平面角，再計算。','兩條射線都要垂直棱。'],7,['射線沒有垂直棱（概念）','把二面角與所成的角混淆（概念）','餘弦定理代錯（程序）'],[
 ['正方體中，二面角 D₁-AB-D 的大小是？',['AD⊥AB，AD₁⊥AB。'],'45°'],
 ['正方體中，二面角 A₁-BD-A 的正切是？',['O 是 BD 中點，∠A₁OA 是平面角。'],'\\(\\sqrt2\\)'],
 ['直二面角棱上 A、B，AC⊥棱，BD⊥棱，AB＝2，AC＝3，BD＝6，求 CD。',['直二面角：\\(\\cos90^\\circ=0\\)。'],'7']
],{fig:miniCu}),
S.check('4-2','合理嗎？','合理嗎？兩平面相交成幾個二面角？',['想想兩張相交的紙。'],'兩平面相交，形成多少個二面角？',[
 ['四個','兩兩相等或互補',1],
 ['一個','概念錯誤：一條棱兩邊都有'],
 ['兩個','概念錯誤：要算四個方向']
])
  ]));
})();
