/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Grid = G3.box(3,3,2.2);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','兩架無人機的方向垂直嗎？',null,{
 pic:G3.wrap(440,170,G3.arw(220,130,360,60,BLU)+G3.arw(220,130,110,40,RED)+G3.txt(382,50,'(3,4,0)',{c:BLU,fs:30,anchor:'end'})+G3.txt(70,36,'(4,−3,2)',{c:RED,fs:30,anchor:'start'})),
 story:'兩架無人機的飛行方向是 (3, 4, 0) 和 (4, −3, 2)，看圖很難判斷。',
 guess:['要做立體模型量度','算幾個數就知道','坐標不可能判斷垂直','還不確定'],
 ask:'只看六個數字，怎樣判斷兩方向是否垂直？',
 later:'學完坐標運算，十秒就有答案！'
})
  ]));
})();
