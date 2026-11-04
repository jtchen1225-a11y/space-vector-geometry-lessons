/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Py = (h)=>G3.solid({A:[1,-1,0],B:[1,1,0],C:[-1,1,0],D:[-1,-1,0],S:[0,0,h]},[['A','B','C','D'],['S','A','B'],['S','B','C'],['S','C','D'],['S','D','A']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'正四棱錐 S-ABCD 底邊長 2、高 2。求 A 到平面 SBC 的距離，並說明你選用的方法。',
 ans:'\\(\\dfrac{4\\sqrt5}{5}\\)；向量法：\\(\\boldsymbol{n}=(0,2,1)\\)，或用等體積法核對',
 rubric:{mastered:'方法合理、答案正確 → 可進入下一章',partial:'方法對、計算有誤 → 課後再做一題同類型',notyet:'無從入手 → 小組回到 L21、L23 總表'},
 delayed:{when:'約一週後',q:'正四棱錐底邊長 2、高 1，求 A 到平面 SBC 的距離。',ans:'\\(\\sqrt2\\)'}
}),
S.tally('5-2','我的程度','幫自己打分','我能選用向量法或幾何法解全章的題目'),
S.summary('5-3',null,['結構：向量運算→基底與坐標→位置→度量','幾何法：看結構、少計算，但要作輔助線','向量法：步驟固定，但計算較多','兩種方法可以互相核對'])
  ]));
})();
