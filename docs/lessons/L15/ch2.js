/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
const tB=[-.9,-.4,0], tAp=[.9,-.4,0], tA=[.9,-.4,1.3];
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','筆和紙的角度，只有一個嗎？',null,{
 pic:(()=>{const F=G3.frame(Pl,{W:440,H:180,m:18,extra:[tA]});return F.show(F.base(),F.seg(tB,tA,BLU,6),F.seg(tB,[1.3,.6,0],GRN,4),F.seg(tB,[1.2,-1.5,0],AMB,4),F.seg(tB,[-.6,1.5,0],RED,4))})(),
 story:'筆斜放在紙上，紙上不同方向的直線與筆的夾角都不同。',
 guess:['任選一條就可以','要選夾角最大的','要選夾角最小的','還不確定'],
 ask:'哪一個才叫「筆和紙所成的角」？為甚麼？',
 later:'學完今天的內容，你就能回答！'
})
  ]));
})();
