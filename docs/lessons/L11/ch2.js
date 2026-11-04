/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','最短的接駁喉在哪裏？',null,{
 pic:G3.wrap(440,170,SV.seg(30,50,410,50,BLU,12)+SV.seg(90,150,350,130,GRN,12)+SV.seg(220,50,220,140,RED,4,'8 6')+G3.txt(390,90,'？',{c:RED,fs:40})),
 story:'天花板有兩條不平行、不相交的水喉，要接一條最短的駁喉。',
 guess:['在兩喉最靠近的位置，垂直兩喉','垂直其中一條就夠','任何位置都一樣','還不確定'],
 ask:'最短的駁喉要滿足甚麼條件？',
 later:'學完今天的內容，你就能算出來！'
})
  ]));
})();
