/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Prm = G3.solid({A:[2,.2,0],B:[.4,.2,0],C:[.9,1.9,0],A1:[2,.2,1.5],B1:[.4,.2,1.5],C1:[.9,1.9,1.5]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','遙控無人機，要幾個方向掣？',null,{
 pic:G3.wrap(440,180,`<ellipse cx="220" cy="90" rx="42" ry="16" fill="rgba(37,99,235,.2)" stroke="${BLU}" stroke-width="3"/>`+G3.arw(220,90,350,90,BLU)+G3.arw(220,90,130,150,GRN)+G3.arw(220,90,220,12,AMB)),
 story:'無人機只有「前後」和「左右」兩個掣，能飛到房間裏任何一點嗎？',
 guess:['兩個掣已經足夠','一定要三個方向','要四個或更多','還不確定'],
 ask:'最少要幾個方向，才足以到達空間任何一點？',
 later:'學完基本定理，你就知道答案！'
})
  ]));
})();
