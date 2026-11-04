/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Te = G3.solid({A:[1.4,0,0],B:[.9,2,0],C:[-.4,.8,0],D:[.75,.9,1.7]},[['A','B','C'],['A','B','D'],['B','C','D'],['C','A','D']]), miniTe = G3.mini(Te);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=1\\)，\\(|\\boldsymbol{c}|=2\\)，\\(\\boldsymbol{a}\\perp\\boldsymbol{b}\\)，\\(\\boldsymbol{c}\\) 與 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 都成 60°。求 \\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|\\)。',
 ans:'\\(\\sqrt{10}\\)',
 rubric:{mastered:'展開完整、中間項正確 → 下一節進入坐標，並比較兩種做法',partial:'只差一處計算或忘開方 → 下一節起步題再展開一次',notyet:'未能展開或把所有基底當垂直 → 小組回到 2-3 秘笈二'},
 delayed:{when:'約一週後',q:'同樣的三個向量條件，改求 \\((\\boldsymbol{a}+\\boldsymbol{b})\\cdot\\boldsymbol{c}\\)。',ans:'2'}
}),
S.tally('5-2','我的程度','幫自己打分','我能選基底、寫分解式、展開求長度'),
S.summary('5-3',null,['流程：選基底→分解→展開→（求長度時）開方','分解式：終點減起點，中點要有 \\(\\tfrac12\\)','基底不一定垂直，中間項要用已知夾角','三個向量共面就不能作基底'])
  ]));
})();
