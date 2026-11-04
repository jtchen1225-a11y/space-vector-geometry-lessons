/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Bx = G3.box(2,3,4,{}), Ex = G3.mid(Bx.V.A,Bx.V.A1);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(|\\boldsymbol{a}|=3\\)，\\(|\\boldsymbol{b}|=4\\)，〈\\(\\boldsymbol{a},\\boldsymbol{b}\\)〉＝60°。求 \\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\) 及 \\(|\\boldsymbol{a}-\\boldsymbol{b}|\\)。',
 ans:'\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=6\\)；\\(|\\boldsymbol{a}-\\boldsymbol{b}|=\\sqrt{13}\\)',
 rubric:{mastered:'兩問全對且展開有中間項 → 下一節直接進入共面向量定理',partial:'數量積對，長度漏中間項或符號錯 → 下一節起步題再做一次展開',notyet:'不會代定義或把結果寫成向量 → 小組用投影圖重新建立定義'},
 delayed:{when:'約一週後',q:`棱長 3 的正方體 ABCD-A₁B₁C₁D₁，求 ${vv('AB')}·${vv('B1D')}。`,ans:'－9'}
}),
S.goals('6-2','懸念解開','懸念解開：拉行李做了多少功？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['功是力與位移的數量積，只有前進方向的分力有用','\\(W=50\\times10\\times\\cos60^\\circ\\)＝250 J','所以不是 500 J，夾角決定「有用的部分」']}),
S.summary('6-3',null,['夾角：平移到同一起點量，範圍 0° 到 180°','\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=|\\boldsymbol{a}||\\boldsymbol{b}|\\cos\\langle\\boldsymbol{a},\\boldsymbol{b}\\rangle\\)，結果是數','\\(\\boldsymbol{a}\\perp\\boldsymbol{b}\\Leftrightarrow\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\)','求長度：\\(|\\boldsymbol{a}|^2=\\boldsymbol{a}\\cdot\\boldsymbol{a}\\)，展開別漏中間項'])
  ]));
})();
