/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pl = G3.plane('α',{w:1.8,d:1.5});
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'長方體 ABCD-A₁B₁C₁D₁ 的底面是正方形。用三垂線定理證明 A₁C⊥BD。',
 ans:'AA₁⊥底面，A₁C 的射影是 AC；正方形得 BD⊥AC；由定理得 BD⊥A₁C',
 rubric:{mastered:'指出射影並引用定理 → 下一節進入綜合練習 C 層',partial:'結論對但未說明射影 → 下一節起步題補寫理由',notyet:'未能找到射影 → 小組用紙盒和筆找影子'},
 delayed:{when:'約一週後',q:'三棱錐 P-ABC 中，PA⊥平面 ABC，∠ABC＝90°。證明 BC⊥PB。',ans:'PB 的射影是 AB，BC⊥AB，由三垂線定理得 BC⊥PB'}
}),
S.goals('6-2','懸念解開','懸念解開：紅線垂直斜桿嗎？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['一定垂直，與斜桿多斜無關','因為 \\(\\boldsymbol{v}\\cdot\\overrightarrow{BA}=\\boldsymbol{v}\\cdot\\overrightarrow{BA\'}\\)，兩者同時為 0','這就是三垂線定理，逆過來也成立']}),
S.summary('6-3',null,['斜線的射影：連接斜足和垂足','定理：平面內的線垂直射影 \\(\\Rightarrow\\) 垂直斜線','逆定理：平面內的線垂直斜線 \\(\\Rightarrow\\) 垂直射影','用定理前，先指出平面、垂線和射影'])
  ]));
})();
