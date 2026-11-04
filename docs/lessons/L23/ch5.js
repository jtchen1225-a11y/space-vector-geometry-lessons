/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'三棱錐 S-ABC，SA⊥平面 ABC，∠ABC＝90°，SA＝AB＝BC＝2。求 SC 與平面 SAB 所成角的正弦，及 A 到平面 SBC 的距離。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)；\\(\\sqrt2\\)',
 rubric:{mastered:'兩問都對 → 下一節全章複習做 C 層',partial:'一問對 → 下一節對應另一問補做',notyet:'未能建系或取法向量 → 課後小組重做 L16、L21 對應題'},
 delayed:{when:'約一週後',q:'棱長 1 的正方體，求 A₁ 到平面 AB₁C 的距離。',ans:'\\(\\dfrac{\\sqrt3}{3}\\)'}
}),
S.tally('5-2','我的程度','幫自己打分','我能由問題選出向量和公式'),
S.summary('5-3',null,['先定類型，再選兩個向量','線面用正弦，其餘用餘弦','點面距離：投影到法向量','所成的角不超過 90°，二面角要看圖'])
  ]));
})();
