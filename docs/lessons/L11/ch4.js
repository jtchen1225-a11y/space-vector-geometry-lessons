/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['先想：兩條線的方向是甚麼？','卡住先按「提示」。'],7,['只寫一條垂直方程（程序）','由不平行直接判定異面（概念）','端點不在直線上（粗心）'],[
 ['長方體中，哪些棱與 AA₁ 異面且垂直？',['不與 AA₁ 相交、也不平行的棱。','在四條底邊和頂邊中找。'],'BC、CD、B₁C₁、C₁D₁'],
 ['棱長 2 的正方體，BD 與 CC₁ 的距離是多少？',['找同時垂直兩線的線段。','C 到 BD 的垂足是底面中心。'],'\\(\\sqrt2\\)'],
 ['空間四邊形 ABCD 中，AD⊥BC、AB⊥CD，說明 AC⊥BD。',['以 A 為起點設向量。'],'\\(\\overrightarrow{AC}\\cdot\\overrightarrow{BD}=\\overrightarrow{AC}\\cdot\\overrightarrow{AD}-\\overrightarrow{AC}\\cdot\\overrightarrow{AB}\\)；兩個條件都變成 \\(\\overrightarrow{AC}\\cdot\\overrightarrow{AD}=\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=\\overrightarrow{AC}\\cdot\\overrightarrow{AB}\\)，所以結果是 0']
]),
S.check('4-2','合理嗎？','合理嗎？公垂線段有幾條？',['兩條異面直線。'],'兩條異面直線的公垂線段有多少條？',[
 ['一條','存在而且唯一',1],
 ['無數條','概念錯誤：把它與平行線混淆'],
 ['可能沒有','概念錯誤：異面直線一定有公垂線段']
])
  ]));
})();
