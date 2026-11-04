/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Roof = (()=>{const r=G3.solid({A:[2,0,0],B:[0,2,0],Cc:[0,0,1]},[['A','B','Cc']],true);return r})();
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','無人機離屋頂多高？',null,{
 pic:(()=>{const F=G3.frame(Roof,{W:440,H:175,m:22,extra:[[1,1,2]]});return F.show(F.fill(['A','B','Cc'],'rgba(37,99,235,.15)'),F.base({labels:false}),F.dot([1,1,2],RED,9),F.seg([1,1,2],[1/3,1/3,2/3],GRY,3,'6 5'))})(),
 story:'斜屋頂過 (2,0,0)、(0,2,0)、(0,0,1)。無人機在 (1,1,2)，找不到垂足的位置。',
 guess:['要先找垂足','算不到','不用找垂足也算得到','還不確定'],
 ask:'怎樣不找垂足，就算出無人機與屋頂的距離？',
 later:'學完今天的公式，你就能算出來！'
})
  ]));
})();
