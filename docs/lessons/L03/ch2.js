/* ============ 第 2 階段　5–8 分鐘　懸念時刻：你猜得到嗎？（教案：情境引入＋設置懸念（短片、趣味情境或謎題）；螺旋：認知衝突） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), Pr = G3.solid({A:[1.6,0,0],B:[1.2,2.2,0],C:[-.4,1,0],A1:[1.9,.5,1.7],B1:[1.5,2.7,1.7],C1:[-.1,1.5,1.7]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "5–8 分鐘", "懸念時刻：你猜得到嗎？", C, [
S.hook('2-1','猜一猜','四腳椅會搖，三腳凳不會？',null,{
 pic:G3.wrap(440,190,`<polygon points="70,150 230,170 300,130 140,112" fill="rgba(37,99,235,.12)" stroke="${BLU}" stroke-width="3"/>`+[[70,150],[230,170],[300,130]].map(p=>SV.dot(p[0],p[1],BLU,8)).join('')+SV.dot(140,88,RED,9)+SV.seg(140,88,140,112,RED,3,'5 4')+G3.txt(370,70,'第四點',{c:RED,fs:30})),
 story:'四腳椅的腳尖不在同一平面，就會搖；三腳凳卻永遠不搖。',
 guess:['三腳凳用料比較好','三點一定共面，四點不一定','四腳椅只是地不平','還不確定'],
 ask:'怎樣用向量判斷第四點在不在平面上？',
 later:'學完共面向量定理，你就能判斷！'
})
  ]));
})();
