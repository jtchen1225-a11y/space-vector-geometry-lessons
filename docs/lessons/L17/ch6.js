/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Wg = (d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
const drawWg=(d,o,more)=>{const W=Wg(d);const F=G3.frame(W,{W:440,H:o.H||200,m:o.m||18,fs:o.fs||34,az:o.az===undefined?40:o.az,el:20,extra:[[1.5,0,1.5],[-1.5,0,1.5]]});const y=o.y||0,t=d*Math.PI/180,P=[0,y,0],A=[1.2,y,0],B=[1.2*Math.cos(t),y,1.2*Math.sin(t)];return {F,W,P,A,B,s:F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')+F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.12)')+F.base({labels:false})+F.seg('E1','E2',RED,5)}};
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'正四棱錐底邊長 2、高 1。求側面與底面所成的二面角，並說明平面角的作法。',
 ans:'45°：O 是底面中心，E 是底邊中點，∠PEO 是平面角，\\(\\tan=\\tfrac11\\)',
 rubric:{mastered:'作法和答案都對 → 下一節進入法向量求面面角',partial:'答案對，作法未說明；或反之 → 下一節起步題補',notyet:'未能作出平面角 → 小組用書本展開示範'},
 delayed:{when:'約一週後',q:'正四棱錐底邊長 2、高 \\(\\sqrt3\\)，求側面與底面所成的二面角。',ans:'60°'}
}),
S.goals('6-2','懸念解開','懸念解開：怎樣量開合角？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['在轉軸上取一點','屏幕、鍵盤上各作一條垂直轉軸的線','這兩條線的夾角就是開合角，與取哪一點無關']}),
S.summary('6-3',null,['平面角：棱上一點，兩條射線都垂直棱','二面角 0° 到 180°；兩平面所成的角 0° 到 90°','常用作法：三垂線定理','射影面積＝原面積 × \\(\\cos\\theta\\)'])
  ]));
})();
