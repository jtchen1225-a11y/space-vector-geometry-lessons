/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu), Tr = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,4,0],Cc:[0,0,4]},[['O','A','B'],['O','B','Cc'],['O','Cc','A'],['A','B','Cc']]);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'正方體 ABCD-A₁B₁C₁D₁ 的兩條體對角線 AC₁ 與 BD₁ 所成角的餘弦是多少？',
 ans:'\\(\\tfrac13\\)',
 rubric:{mastered:'建系、取絕對值都對 → 下一節進入異面直線',partial:'方向向量對、計算或絕對值出錯 → 下一節起步題補做',notyet:'不會寫方向向量 → 小組回到 3-5'},
 delayed:{when:'約一週後',q:'棱長 1 的正方體，求 A₁B 與 B₁C 所成的角。',ans:'60°'}
}),
S.goals('6-2','懸念解開','懸念解開：兩條高架路的夾角',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['不相交也有夾角：平移方向向量來比較','數量積是 1，長度都是 \\(\\sqrt2\\)，所以 \\(\\cos\\theta=\\tfrac12\\)','所以兩條路成 60°']}),
S.summary('6-3',null,['直線的方向向量：直線上兩點的差，非零倍數皆可','\\(\\boldsymbol{v}_1\\parallel\\boldsymbol{v}_2\\Rightarrow l_1,l_2\\) 平行或重合','\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle|\\)','直線夾角 0° 到 90°，向量夾角 0° 到 180°'])
  ]));
})();
