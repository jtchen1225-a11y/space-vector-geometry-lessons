/* ============ 第 4 階段　22–35 分鐘　走出課本：換個情境也能用（教案：跨情境遷移＋巡視；螺旋：跨情境遷移） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Py = (h)=>G3.solid({A:[1,-1,0],B:[1,1,0],C:[-1,1,0],D:[-1,-1,0],S:[0,0,h]},[['A','B','C','D'],['S','A','B'],['S','B','C'],['S','C','D'],['S','D','A']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(4, "22–35 分鐘", "走出課本：換個情境也能用", C, [
S.drill('4-1','綜合闖關','綜合闖關：正方體',['棱長 1（B 層棱長 2）。','試用兩種方法。'],7,['方法選擇不當（概念）','兩種答案不符時不檢查（程序）','二面角未看圖（概念）'],[
 ['求 A₁D 與 AC 所成的角。',['可平移成 A₁D 與 A₁C₁。','△A₁C₁D 是甚麼三角形？'],'60°'],
 ['M、N 是 BB₁、CA₁ 中點（棱長 2），說明 MN∥BD 且 MN＝½BD。',['坐標或向量都可以。'],'\\(\\overrightarrow{MN}=\\tfrac12\\overrightarrow{BD}\\)'],
 ['比較 A 層的兩種解法，各有甚麼優點？',null,'幾何法：等邊三角形一眼看出；向量法：不需輔助線，步驟固定']
]),
S.check('4-2','情境的意思','情境的意思：答案不同時',['怎麼辦？'],'同一題兩種方法答案不同，應該？',[
 ['逐步檢查，至少一個有錯','正確的答案只有一個',1],['選較簡單的那個','概念錯誤：簡單不代表對'],['取平均','概念錯誤：沒有數學依據']
]),
S.tasks('4-3','共面判斷','換情境：共面與否',null,[
 ['\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面時，\\(x\\boldsymbol{a}+y\\boldsymbol{b}+z\\boldsymbol{c}=\\boldsymbol{0}\\) 表示？',['基本定理的唯一性。'],'\\(x=y=z=0\\)'],
 ['\\((1,2,-1)\\)、\\((2,-1,3)\\)、\\((4,3,1)\\) 共面嗎？',['設第三個＝\\(x\\)（第一個）＋\\(y\\)（第二個）。'],'共面：第三個＝第一個的 2 倍＋第二個'],
 ['\\(\\boldsymbol{a}+\\boldsymbol{b}-\\boldsymbol{c}\\)、\\(2\\boldsymbol{a}-\\boldsymbol{b}+\\boldsymbol{c}\\)、\\(4\\boldsymbol{a}+\\boldsymbol{b}-\\boldsymbol{c}\\) 共面嗎？',null,'共面：第三個＝第一個的 2 倍＋第二個']
]),
S.tasks('4-4','斜拉索情境','換情境：兩條斜拉索',['AB＝4 與地面成 30°；AC＝6 與地面成 60°；射影互相垂直。'],[
 ['AB、AC 在地面的射影長？',['線段長 × 餘弦。'],'\\(2\\sqrt3\\)，\\(3\\)'],
 ['求 \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC}\\)',['只有鉛垂方向的分量相乘：\\(2\\times3\\sqrt3\\)。'],'\\(6\\sqrt3\\)'],
 ['求 BC 的長，並說明用了甚麼方法。',null,'\\(\\sqrt{52-12\\sqrt3}\\)；基底展開：\\(|\\overrightarrow{AC}-\\overrightarrow{AB}|^2\\)']
])
  ]));
})();
