/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2);
const Wg=(d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','兩塊屋面，成多少度？',null,{
 pic:G3.wrap(440,170,`<polygon points="60,150 200,50 240,50 380,150" fill="rgba(37,99,235,.12)" stroke="${BLU}" stroke-width="3"/>`+SV.seg(200,50,240,50,RED,6)+G3.arw(130,100,80,40,GRN)+G3.arw(310,100,360,40,AMB)),
 story:'兩塊屋面的法向量是 (1,0,1) 和 (0,1,1)，爬不上去量度。',
 guess:['算得到，是 60°','算得到，是 120°','算不到，一定要量','還不確定'],
 ask:'法向量的夾角，就是屋面的角嗎？',
 later:'學完今天的內容，你就能判斷！'
})
  ]));
})();
