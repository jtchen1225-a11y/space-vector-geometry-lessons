/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), Bx = G3.box(2,3,1.5), miniBx = G3.mini(Bx);
const Tp = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,3,0],Z:[0,0,3]},[['O','A','B'],['O','B','Z'],['O','Z','A'],['A','B','Z']]);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','怎樣記錄太陽能板的朝向？',null,{
 pic:(()=>{const Pl=G3.plane('');Pl.V={P1:[1.5,-1.6,0],P2:[1.5,1.6,0],P3:[-.8,1.6,1.3],P4:[-.8,-1.6,1.3]};const F=G3.frame(Pl,{W:440,H:180,m:20,extra:[[.35,0,1.9]]});return F.show(F.base(),F.vec([.35,0,.65],[1,0,1.8],RED))})(),
 story:'工程師要用電話告訴同事太陽能板的朝向，板上方向有無數個。',
 guess:['要說出板上兩個方向','只說一個方向就夠','要說出四個角的位置','還不確定'],
 ask:'最少要用甚麼，才能描述一塊平板的朝向？',
 later:'學完法向量，你就知道答案！'
})
  ]));
})();
