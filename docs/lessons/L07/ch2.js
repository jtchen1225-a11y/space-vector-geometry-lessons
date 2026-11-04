/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniAx = G3.mini(Cu, F=>F.axes(2.7), {m:34, extra:[[2.7,0,0],[0,2.7,0],[0,0,2.7]]});
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','兩架無人機相距多遠？',null,{
 pic:G3.wrap(440,170,SV.dot(120,70,BLU,10)+SV.dot(320,120,RED,10)+SV.seg(120,70,320,120,GRY,3,'7 6')+G3.txt(120,44,'甲 (0,0,2)',{c:BLU,fs:30})+G3.txt(320,160,'乙 (2,1,0)',{c:RED,fs:30})),
 story:'控制室只知道甲在 (0, 0, 2)、乙在 (2, 1, 0)，單位是米。',
 guess:['2＋1＋2＝5 m','算不到，要實地量','有公式，答案不是 5','還不確定'],
 ask:'只憑兩組坐標，怎樣知道相距多遠？',
 later:'學完今天的公式，你就能算出來！'
})
  ]));
})();
