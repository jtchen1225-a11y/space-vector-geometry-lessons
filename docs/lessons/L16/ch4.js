/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['三步：v、n、代公式。','記得用正弦。'],7,['把正弦寫成餘弦（概念）','法向量算錯（程序）','未取絕對值（粗心）'],[
 ['棱長 2 的正方體，A₁C 與底面所成角的正弦',['底面法向量 \\((0,0,1)\\)。','\\(\\overrightarrow{A_1C}=(-2,2,-2)\\)'],'\\(\\dfrac{\\sqrt3}{3}\\)'],
 ['棱長 1 的正方體，A₁B 與平面 AB₁C 所成角的正弦',['\\(\\boldsymbol{n}=(1,1,-1)\\)。'],'\\(\\dfrac{\\sqrt6}{3}\\)'],
 ['PD⊥正方形 ABCD，PD＝DC＝1，求 PD 與平面 PBC 所成的角。',['先求平面 PBC 的法向量。'],'45°（\\(\\boldsymbol{n}=(0,1,1)\\)）']
]),
S.check('4-2','合理嗎？','合理嗎？夾角是 120° 時',['用公式試試。'],'\\(\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle=120^\\circ\\)，線面角是？',[
 ['30°','\\(\\sin\\theta=|\\cos120^\\circ|=\\tfrac12\\)',1],
 ['60°','概念錯誤：用了餘弦的關係'],
 ['120°','概念錯誤：線面角不大於 90°']
])
  ]));
})();
