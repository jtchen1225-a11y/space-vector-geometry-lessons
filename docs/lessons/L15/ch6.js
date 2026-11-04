/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
const tB=[-.9,-.4,0], tAp=[.9,-.4,0], tA=[.9,-.4,1.3];
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'三棱錐 P-ABC 中，PA⊥平面 ABC，PA＝2，AB＝\\(2\\sqrt3\\)。求 PB 與平面 ABC 所成的角。',
 ans:'30°（射影 AB，\\(\\tan\\theta=\\tfrac{1}{\\sqrt3}\\)）',
 rubric:{mastered:'指出射影並求對 → 下一節直接進入向量法',partial:'找對射影，三角比用錯 → 下一節起步題補',notyet:'未能找出射影 → 小組用紙和筆找影子'},
 delayed:{when:'約一週後',q:'正方體中，A₁C 與底面 ABCD 所成角的正弦是多少？',ans:'\\(\\dfrac{\\sqrt3}{3}\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：筆和紙的角度',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['選筆和影子的夾角','影子唯一，所以定義清楚','由 \\(\\cos\\theta=\\cos\\theta_1\\cos\\theta_2\\) 知它最小']}),
S.summary('6-3',null,['線面角：斜線與射影所成的角，範圍 0° 到 90°','它是斜線與平面內所有直線所成角中最小的','\\(\\cos\\theta=\\cos\\theta_1\\cos\\theta_2\\)','射影長＝線段長 × \\(\\cos\\theta\\)'])
  ]));
})();
