/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Tr = G3.solid({O:[0,0,0],A:[1,0,0],B:[0,2,0],C:[0,0,3]},[['O','A','B'],['O','B','C'],['O','C','A'],['A','B','C']]), miniTr = G3.mini(Tr);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'棱長 1 的正方體 ABCD-A₁B₁C₁D₁，F 是 A₁B₁ 中點，E 是 CC₁ 中點。建系求 \\(\\cos\\langle\\overrightarrow{AF},\\overrightarrow{BE}\\rangle\\)。',
 ans:'\\(\\tfrac25\\)',
 rubric:{mastered:'四步完整正確 → 下一節複習課進入 C 層',partial:'建系對，個別坐標或計算有誤 → 下一節由 B 層開始',notyet:'未能建系或寫點 → 小組回到 2-1 秘笈'},
 delayed:{when:'約一週後',q:'棱長 2 的正方體，M 是 BB₁ 中點，求 \\(\\cos\\langle\\overrightarrow{DM},\\overrightarrow{A_1M}\\rangle\\)。',ans:'\\(\\dfrac{\\sqrt5}{5}\\)'}
}),
S.tally('5-2','我的程度','幫自己打分','我能自己建系，並用坐標求夾角與長度'),
S.summary('5-3',null,['建系四步：找垂直→定原點→寫向量→代公式','原點選在三條垂直棱的交點，坐標最簡單','換原點不改變向量與答案','含參數：設未知數，用數量積為 0 列方程'])
  ]));
})();
