/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2);
const Wg=(d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'棱長 1 的正方體 ABCD-A₁B₁C₁D₁，求平面 AB₁C 與底面 ABCD 所成角的餘弦。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)（\\(\\boldsymbol{n}=(1,1,-1)\\) 與 \\((0,0,1)\\)）',
 rubric:{mastered:'法向量、絕對值都對 → 下一節綜合練習做 C 層',partial:'法向量對、計算有誤 → 下一節由 B 層開始',notyet:'未能求法向量或混淆公式 → 小組回到 3-5'},
 delayed:{when:'約一週後',q:'PA⊥正方形 ABCD，PA＝AB。求平面 PBC 與平面 PDC 所成的角。',ans:'60°'}
}),
S.goals('6-2','懸念解開','懸念解開：屋面成多少度？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['數量積是 1，長度都是 \\(\\sqrt2\\)，所以餘弦是 \\(\\tfrac12\\)','兩塊屋面所成的角是 60°','屋脊的二面角是 60° 或 120°，要看圖判斷']}),
S.summary('6-3',null,['\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle|\\)，\\(\\sin\\theta=\\sin\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle\\)','法向量夾角與二面角相等或互補','所成的角 0° 到 90°，二面角要看圖判斷銳鈍','線線、面面用餘弦；線面用正弦'])
  ]));
})();
