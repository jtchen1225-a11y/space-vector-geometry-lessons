/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Py = G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);
const miniPy = G3.mini(Py,null,{az:-55,el:20}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'棱長 1 的正方體，分別寫出 \\(\\boldsymbol{v}=\\overrightarrow{AC_1}\\) 與底面所成角的正弦，以及平面 A₁BD 與底面所成角的餘弦。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)；\\(\\dfrac{\\sqrt3}{3}\\)',
 rubric:{mastered:'兩個公式都用對 → 下一節進入距離',partial:'一個對、一個把正弦餘弦混淆 → 下一節起步題補',notyet:'兩個都不會 → 小組回到 2-1 總表'},
 delayed:{when:'約一週後',q:'PA⊥正方形 ABCD，PA＝AB＝1，求 PB 與平面 PAC 所成的角。',ans:'30°'}
}),
S.tally('5-2','我的程度','幫自己打分','我能分辨三種角，並用向量求出'),
S.summary('5-3',null,['線線：\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle|\\)','線面：\\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)','面面：\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle|\\)','二面角：再看圖判斷銳鈍'])
  ]));
})();
