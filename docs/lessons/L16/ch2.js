/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','竹竿與斜坡的角是多少？',null,{
 pic:(()=>{const P2=G3.plane('');P2.V={P1:[1.4,-1.5,0],P2:[1.4,1.5,0],P3:[-1,1.5,.9],P4:[-1,-1.5,.9]};const F=G3.frame(P2,{W:440,H:175,m:18,extra:[[.2,0,1.9]]});return F.show(F.base(),F.seg([.2,0,.45],[.2,0,1.9],BLU,6))})(),
 story:'竹竿垂直地面，方向 (0,0,1)。斜坡的法向量是 (1,1,1)。',
 guess:['角的餘弦就是 √3／3','角的正弦才是 √3／3','要實地量度','還不確定'],
 ask:'用兩個向量算出的 √3／3，究竟代表哪個角？',
 later:'學完今天的公式，你就能確定！'
})
  ]));
})();
