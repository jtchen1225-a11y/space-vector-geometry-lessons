/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniAx = G3.mini(Cu, F=>F.axes(2.7), {m:34, extra:[[2.7,0,0],[0,2.7,0],[0,0,2.7]]});
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['終點減起點。','卡住先按「提示」。'],7,['起點減終點（程序）','中點公式漏除以 2（粗心）','建系用了不垂直的棱（概念）'],[
 ['A(1,2,3)、B(3,0,−1)，求 \\(\\overrightarrow{AB}\\)、AB 長、中點',['B 減 A。','平方時負號變正。'],'\\((2,-2,-4)\\)，\\(2\\sqrt6\\)，\\((2,1,1)\\)'],
 ['A(−1,2,0)、B(1,3,2)、C(5,5,6) 共線嗎？',['比較 \\(\\overrightarrow{AB}\\) 與 \\(\\overrightarrow{AC}\\)。'],'共線：\\(\\overrightarrow{AC}=3\\overrightarrow{AB}\\)，且有公共點 A'],
 ['平行四邊形 ABCD：A(1,0,2)、B(3,1,0)、C(0,2,1)，求 D 並說明方法。',['\\(\\overrightarrow{AD}=\\overrightarrow{BC}\\)'],'\\(D(-2,1,3)\\)：\\(\\overrightarrow{AD}=\\overrightarrow{BC}\\)']
]),
S.check('4-2','合理嗎？','合理嗎？這點在哪個卦限？',['z 為負在 xOy 下方。'],'點 (−1, 2, −3) 在第幾卦限？',[
 ['第Ⅵ卦限','下方四個卦限依次是 Ⅴ、Ⅵ、Ⅶ、Ⅷ；x 負 y 正是 Ⅵ',1],
 ['第Ⅱ卦限','概念錯誤：第Ⅱ卦限在 xOy 上方'],
 ['第Ⅶ卦限','粗心失誤：第Ⅶ卦限 x、y 都是負']
])
  ]));
})();
