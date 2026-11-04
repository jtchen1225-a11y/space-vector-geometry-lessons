/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(l_1\\) 過 (1,0,0)、方向 (0,1,1)；\\(l_2\\) 過 (0,0,2)、方向 (1,0,0)。求兩線的距離。',
 ans:'\\(\\sqrt2\\)（\\(M(1,1,1)\\)，\\(N(1,0,2)\\)）',
 rubric:{mastered:'列兩條方程解出 t、s 並求長度 → 下一節進入法向量',partial:'方程列對、解錯或未開方 → 下一節起步題重做一題',notyet:'未能設參數 → 小組回到 3-2 滑桿再看一次'},
 delayed:{when:'約一週後',q:'棱長 2 的正方體，求 AD₁ 與 BD 的距離。',ans:'\\(\\dfrac{2\\sqrt3}{3}\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：最短的接駁喉',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['最短的連線同時垂直兩條喉管','它就是公垂線段，存在而且唯一','用參數設點，再解兩條垂直方程，位置和長度都能算出']}),
S.summary('6-3',null,['異面 \\(\\Leftrightarrow\\boldsymbol{v}_1,\\boldsymbol{v}_2,\\overrightarrow{AB}\\) 不共面','不平行只是異面的必要條件','公垂線段同時垂直兩線，存在且唯一','求法：設 \\(t,s\\)，列兩條垂直方程'])
  ]));
})();
