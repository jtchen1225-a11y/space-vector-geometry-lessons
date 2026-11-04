/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'平行四邊形 ABCD 中，A(1,2,3)、B(3,1,1)、C(2,0,2)。求 D 的坐標和 \\(\\cos\\langle\\overrightarrow{AB},\\overrightarrow{AD}\\rangle\\)。',
 ans:'\\(D(0,1,4)\\)；\\(-\\dfrac{\\sqrt3}{3}\\)',
 rubric:{mastered:'兩問都對 → 下一節進入方向向量與線線角',partial:'D 對、餘弦計算錯，或相反 → 下一節起步題補做',notyet:'不知道 AD＝BC，或不會用公式 → 課後小組重做 L07、L08 對應題'},
 delayed:{when:'約一週後',q:'棱長 1 的正方體，\\(\\boldsymbol{a}=(1,1,1)\\)，\\(\\boldsymbol{b}=(1,1,-1)\\)，求夾角餘弦。',ans:'\\(\\tfrac13\\)'}
}),
S.tally('5-2','我的程度','幫自己打分','我能選基底法或坐標法，解決向量問題'),
S.summary('5-3',null,['基底法：條件給長度與夾角時用','坐標法：有三條互相垂直的直線時用','坐標是單位正交基底的特例，中間項為 0','同一題兩種方法可以互相核對'])
  ]));
})();
