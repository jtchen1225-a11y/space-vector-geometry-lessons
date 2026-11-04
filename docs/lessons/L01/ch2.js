/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para();
const Cu = G3.cube(1);
const miniPa = G3.mini(Pa), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','無人機直飛，要飛多遠？',null,{
 pic: (()=>{const B=G3.box(1.2,1.6,1.9),F=G3.frame(B,{W:440,H:190,m:30,el:16});return F.show(F.base({labels:false}),F.vec('D','A',BLU),F.vec('A','B',GRN),F.vec('B','B1',AMB))})(),
 story:'無人機由起點向東飛 4 m、向北飛 3 m，再垂直上升 12 m。',
 guess:['直飛也是 19 m','比 19 m 短，但算不到','比 19 m 短，而且算得到','還不確定'],
 ask:'三段不在同一平面，它們的「和」是甚麼？有多長？',
 later:'學完今天的向量加法，你就能指出這條路線！'
})
  ]));
})();
