/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pa = G3.para({ab:[0,2,0],ad:[-1,0,0],aa:[.5,1,.7]});
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','燈到路軌的最短距離',null,{
 pic:G3.wrap(440,170,SV.seg(40,140,400,70,BLU,8)+SV.dot(170,30,AMB,12)+SV.seg(170,30,60,136,GRY,3,'6 5')+SV.seg(170,30,195,112,RED,4)+G3.txt(260,40,'哪條最短？',{c:RED})),
 story:'天花板上的燈要拉一條最短的電線到路軌，路軌不在燈的正下方。',
 guess:['連到路軌的端點','連到路軌的中點','垂直路軌的那條','還不確定'],
 ask:'最短的位置在哪裏？怎樣算出來？',
 later:'學完今天的內容，你就能算出來！'
})
  ]));
})();
