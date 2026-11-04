/* ============ 第 5 階段　35–40 分鐘　最後一關＋幫自己打分（教案：出口題＋自我評估；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Py = G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);
const miniPy = G3.mini(Py,null,{az:-55,el:20}), Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "35–40 分鐘", "最後一關＋幫自己打分", C, [
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'A(1,0,0)、B(0,2,0)、C(0,0,2)，求原點 O 到平面 ABC 的距離。',
 ans:'\\(\\dfrac{\\sqrt6}{3}\\)（\\(\\boldsymbol{n}=(2,1,1)\\)）',
 rubric:{mastered:'法向量、公式、化簡都對 → 下一節複習課做 C 層',partial:'方法對、計算有誤 → 下一節由 B 層開始',notyet:'不會求法向量或用公式 → 小組回到 2-1'},
 delayed:{when:'約一週後',q:'A(2,0,0)、B(0,2,0)、C(0,0,2)，求原點到平面 ABC 的距離。',ans:'\\(\\dfrac{2\\sqrt3}{3}\\)'}
}),
S.tally('5-2','我的程度','幫自己打分','我能判斷距離的類型，並求出答案'),
S.summary('5-3',null,['先判斷類型：兩點、點線、點面、平行','點線：設參數或投影法','點面：\\(\\dfrac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}\\)','平行距離：先證平行，再化為點面距離'])
  ]));
})();
