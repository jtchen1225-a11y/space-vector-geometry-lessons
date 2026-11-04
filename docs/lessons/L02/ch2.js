/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Bx = G3.box(2,3,4,{}), Ex = G3.mid(Bx.V.A,Bx.V.A1);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','斜拉行李，力氣全部有用嗎？',null,{
 pic:G3.wrap(440,190,SV.seg(30,150,410,150,GRY,3)+`<rect x="150" y="96" width="90" height="54" rx="8" fill="rgba(37,99,235,.15)" stroke="${BLU}" stroke-width="3"/>`+G3.arw(240,110,340,40,RED)+G3.txt(350,36,'50 N',{c:RED,anchor:'start'})+G3.arw(240,178,390,178,GRN)+G3.txt(315,172,'10 m',{c:GRN})),
 story:'用 50 N 斜拉行李，拉力與地面成 60°，行李沿地面前進 10 m。',
 guess:['做功 500 J','做功少於 500 J','沒有做功','還不確定'],
 ask:'力和位移方向不同，應該怎樣相乘？',
 later:'學完數量積，你就能算出答案！'
})
  ]));
})();
