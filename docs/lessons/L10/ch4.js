/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu), Tr = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,4,0],Cc:[0,0,4]},[['O','A','B'],['O','B','Cc'],['O','Cc','A'],['A','B','Cc']]);
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['寫方向向量，再代公式。','記得取絕對值。'],7,['餘弦為負時直接寫鈍角（概念）','坐標寫錯（程序）','由 m＝xa＋yb 的理由說不清（概念）'],[
 ['直線過 A(1,0,2)、B(3,1,0)，寫一個方向向量',['B 減 A。'],'\\((2,1,-2)\\)（非零倍數皆可）'],
 ['棱長 1 的正方體，求 A₁B 與 AD₁ 所成的角',['\\(\\overrightarrow{A_1B}=(0,1,-1)\\)，\\(\\overrightarrow{AD_1}=(-1,0,1)\\)。','餘弦是負數，取絕對值。'],'60°'],
 ['\\(\\boldsymbol{a},\\boldsymbol{b}\\) 不共線且在平面 α 內，\\(\\boldsymbol{n}\\cdot\\boldsymbol{a}=\\boldsymbol{n}\\cdot\\boldsymbol{b}=0\\)，為甚麼 \\(\\boldsymbol{n}\\) 垂直 α 內每條直線？',['用共面向量定理。'],'α 內的方向向量 \\(\\boldsymbol{m}=x\\boldsymbol{a}+y\\boldsymbol{b}\\)，所以 \\(\\boldsymbol{n}\\cdot\\boldsymbol{m}=0\\)']
]),
S.check('4-2','合理嗎？','合理嗎？方向向量平行',['想想兩條直線可能怎樣。'],'\\(\\boldsymbol{v}_1\\parallel\\boldsymbol{v}_2\\) 時，\\(l_1,l_2\\)？',[
 ['平行或重合','方向相同，但位置可能重合',1],
 ['一定平行','概念錯誤：漏了重合'],
 ['一定重合','概念錯誤：方向相同不代表同一直線']
])
  ]));
})();
