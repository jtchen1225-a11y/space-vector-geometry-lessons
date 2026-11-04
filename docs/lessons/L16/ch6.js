/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'直三棱柱 ABC-A₁B₁C₁ 中，∠ACB＝90°，CA＝CB＝CC₁＝2。用向量法求 AB₁ 與平面 BCC₁B₁ 所成角的正弦。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)（\\(\\boldsymbol{v}=(-2,2,2)\\)，\\(\\boldsymbol{n}=(1,0,0)\\)）',
 rubric:{mastered:'用正弦、法向量正確 → 下一節進入二面角',partial:'公式對，向量或計算有誤 → 下一節起步題補',notyet:'把餘弦當線面角或不會取法向量 → 小組回到 3-2'},
 delayed:{when:'約一週後',q:'PA⊥正方形 ABCD，PA＝2，AB＝1。求 PC 與底面所成角的正弦。',ans:'\\(\\dfrac{\\sqrt6}{3}\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：√3／3 是甚麼？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['\\(\\dfrac{|(0,0,1)\\cdot(1,1,1)|}{\\sqrt3}=\\dfrac{\\sqrt3}{3}\\) 是 \\(\\sin\\theta\\)','所以竹竿與斜坡成約 35.3°','餘弦才是竹竿與法線的夾角']}),
S.summary('6-3',null,['\\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)','步驟：方向向量 → 法向量 → 代公式','\\(\\boldsymbol{v}\\) 與 \\(\\boldsymbol{n}\\) 的夾角不是線面角','法向量取哪一個都不影響結果'])
  ]));
})();
