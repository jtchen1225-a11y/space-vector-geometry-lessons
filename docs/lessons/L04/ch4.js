/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Prm = G3.solid({A:[2,.2,0],B:[.4,.2,0],C:[.9,1.9,0],A1:[2,.2,1.5],B1:[.4,.2,1.5],C1:[.9,1.9,1.5]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['圖是平行六面體，基底同 3-5。','卡住先按「提示」。'],7,['反方向走卻寫正號（程序）','基底展開時把夾角當 90°（概念）','中點係數錯（粗心）'],[
 [`用 ${bb('a')}、${bb('b')}、${bb('c')} 表示 ${vv('A1C')}`,['A₁ 先往下到 A，所以有 \\(-\\boldsymbol{c}\\)。','路線：A₁→A→B→C。'],'\\(\\boldsymbol{a}+\\boldsymbol{b}-\\boldsymbol{c}\\)'],
 [`四面體 O-ABC，D 是 AB 中點，E 是 CD 中點，用 ${vv('OA')}、${vv('OB')}、${vv('OC')} 表示 ${vv('OE')}`,['先寫 OD。','E 是 C、D 的中點。'],`¼${vv('OA')}＋¼${vv('OB')}＋½${vv('OC')}`],
 ['為甚麼 \\(\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(\\boldsymbol{b}\\) 不能作基底？說明。',null,'\\(\\boldsymbol{b}=\\tfrac12[(\\boldsymbol{a}+\\boldsymbol{b})-(\\boldsymbol{a}-\\boldsymbol{b})]\\)，三者共面']
],{fig:miniPa}),
S.check('4-2','合理嗎？','合理嗎？可以隨便展開嗎？',['想想夾角。'],'基底夾角是 60°，\\((\\boldsymbol{a}+\\boldsymbol{b})^2\\) 應等於？',[
 ['\\(\\boldsymbol{a}^2+2\\boldsymbol{a}\\cdot\\boldsymbol{b}+\\boldsymbol{b}^2\\)','基底不一定垂直，中間項要留',1],
 ['\\(\\boldsymbol{a}^2+\\boldsymbol{b}^2\\)','概念錯誤：只有垂直時才沒有中間項'],
 ['\\(\\boldsymbol{a}^2-\\boldsymbol{b}^2\\)','程序錯誤：與平方差混淆']
])
  ]));
})();
