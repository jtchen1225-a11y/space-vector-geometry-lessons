/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Bx = G3.box(2,3,4,{}), Ex = G3.mid(Bx.V.A,Bx.V.A1);
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['先寫夾角，再代公式。','卡住先按「提示」。'],7,['方向相反卻用銳角（概念）','漏了 2a·b（程序）','把數量積寫成向量（概念）'],[
 ['\\(|\\boldsymbol{a}|=4\\)，\\(|\\boldsymbol{b}|=3\\)，夾角 120°，求 \\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)',['\\(\\cos120^\\circ\\) 是負數。','\\(4\\times3\\times(-\\tfrac12)\\)'],'－6'],
 [`棱長 2 的正方體，求 ${vv('AB')}·${vv('AC1')}`,[`${vv('AC1')} 在 AB 方向的投影是甚麼？`,`投影是 ${vv('AB')}，長 2。`],'4'],
 ['\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=1\\)，\\(|\\boldsymbol{a}+\\boldsymbol{b}|=\\sqrt3\\)，求夾角，並解釋。',['兩邊平方。'],'60°：\\(3=1+2\\cos\\theta+1\\)，\\(\\cos\\theta=\\tfrac12\\)']
]),
S.check('4-2','合理嗎？','合理嗎？數量積是甚麼東西？',['留意結果的類型。'],'下列哪一句正確？',[
 ['\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\) 的結果是一個實數','長度與餘弦都是數',1],
 ['\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\) 一定有一個是零向量','概念錯誤：兩個非零向量垂直時也是 0'],
 ['\\(|\\boldsymbol{a}\\cdot\\boldsymbol{b}|>|\\boldsymbol{a}||\\boldsymbol{b}|\\) 可能成立','概念錯誤：\\(|\\cos\\theta|\\le1\\)']
])
  ]));
})();
