/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Wg = (d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
const drawWg=(d,o,more)=>{const W=Wg(d);const F=G3.frame(W,{W:440,H:o.H||200,m:o.m||18,fs:o.fs||34,az:o.az===undefined?40:o.az,el:20,extra:[[1.5,0,1.5],[-1.5,0,1.5]]});const y=o.y||0,t=d*Math.PI/180,P=[0,y,0],A=[1.2,y,0],B=[1.2*Math.cos(t),y,1.2*Math.sin(t)];return {F,W,P,A,B,s:F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')+F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.12)')+F.base({labels:false})+F.seg('E1','E2',RED,5)}};
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','兩個屏幕的角度，怎樣量？',null,{
 pic:(()=>{const d=drawWg(110,{H:175});return d.F.show(d.s)})(),
 story:'手提電腦開到一半，屏幕和鍵盤有無數對線可以比較。',
 guess:['隨便各選一條線','選兩邊都垂直轉軸的線','選對角線','還不確定'],
 ask:'怎樣選兩條線，才能唯一確定「開合的角度」？',
 later:'學完今天的內容，你就知道！'
})
  ]));
})();
