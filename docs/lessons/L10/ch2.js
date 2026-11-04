/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu), Tr = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,4,0],Cc:[0,0,4]},[['O','A','B'],['O','B','Cc'],['O','Cc','A'],['A','B','Cc']]);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','兩條高架路，夾角怎樣定？',null,{
 pic:G3.wrap(440,170,SV.seg(30,140,410,110,BLU,10)+SV.seg(140,30,300,160,GRN,10)+G3.txt(60,110,'下層',{c:BLU,fs:30})+G3.txt(130,70,'上層',{c:GRN,fs:30})),
 story:'上下兩層高架路方向是 (1,1,0) 和 (0,1,1)，永遠不會相交。',
 guess:['不相交就沒有夾角','有夾角，是 45°','有夾角，算得出來','還不確定'],
 ask:'不相交的兩條直線，夾角怎樣定義、怎樣算？',
 later:'學完今天的內容，你就能算出來！'
})
  ]));
})();
