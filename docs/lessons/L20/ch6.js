/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pa = G3.para({ab:[0,2,0],ad:[-1,0,0],aa:[.5,1,.7]});
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'直線過 A(0,1,0)、方向 \\(\\boldsymbol{v}=(1,0,1)\\)。求 P(2,1,1) 到直線的距離。',
 ans:'\\(\\dfrac{\\sqrt2}{2}\\)',
 rubric:{mastered:'用設參數或投影法求對 → 下一節進入點面距離',partial:'方法對、計算有誤 → 下一節起步題補',notyet:'把 AP 當距離 → 小組回到 3-2'},
 delayed:{when:'約一週後',q:'棱長 2 的正方體，求 C₁ 到 BD₁ 的距離。',ans:'\\(\\dfrac{2\\sqrt6}{3}\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：電線拉到哪裏？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['垂直路軌的那條最短','它是直角三角形的直角邊，其他都是斜邊','垂足由一條數量積等於 0 的方程求出']}),
S.summary('6-3',null,['距離：兩圖形上的點最短連線的長度','兩點：坐標公式，或基底展開','點到直線：設參數，垂直條件求垂足','投影法：\\(d^2=|\\overrightarrow{AP}|^2-\\) 投影數量的平方'])
  ]));
})();
