/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pl = G3.plane('α',{w:1.8,d:1.5});
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','地上的線，垂直斜桿嗎？',null,{
 pic:(()=>{const F=G3.frame(Pl,{W:440,H:180,m:20,extra:[[.6,0,1.5]]});return F.show(F.base(),F.seg([-.6,0,0],[.6,0,1.5],BLU,5),F.seg([-.6,0,0],[.6,0,0],GRY,5),F.seg([.6,0,1.5],[.6,0,0],GRY,3,'6 5'),F.seg([-.6,-1,0],[-.6,1,0],RED,5))})(),
 story:'斜桿在地上有一條影子（灰色），地上畫一條紅線垂直影子。',
 guess:['紅線一定垂直斜桿','一定不垂直','要看斜桿有多斜','還不確定'],
 ask:'紅線與斜桿本身，究竟垂直嗎？',
 later:'學完今天的定理，你就能證明！'
})
  ]));
})();
