/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu), Tr = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,4,0],Cc:[0,0,4]},[['O','A','B'],['O','B','Cc'],['O','Cc','A'],['A','B','Cc']]);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：直線夾角可以是鈍角嗎？',null,{q:'兩直線方向向量的夾角餘弦是 \\(-\\tfrac12\\)，求所成的角。',steps:['\\(\\cos\\theta=-\\tfrac12\\)','\\(\\theta=120^\\circ\\)'],wrong:0,why:'概念錯誤：\\(\\theta\\) 是直線夾角，餘弦要取絕對值。',fix:'\\(\\cos\\theta=\\tfrac12\\)，\\(\\theta=60^\\circ\\)'}),
S.mistake('5-2','再抓一次','再抓一次：平行就一定不重合？',null,{q:'\\(\\boldsymbol{v}_1=(1,2,0)\\)，\\(\\boldsymbol{v}_2=(2,4,0)\\)，判斷 \\(l_1,l_2\\)。',steps:['\\(\\boldsymbol{v}_2=2\\boldsymbol{v}_1\\)','所以 \\(l_1\\parallel l_2\\)'],wrong:1,why:'概念錯誤：還要看有沒有公共點，可能重合。',fix:'平行或重合；再取 \\(l_1\\) 上一點檢查是否在 \\(l_2\\) 上'}),
S.tasks('5-3','升級挑戰','升級挑戰：不同立體',null,[
 ['\\((1,2,2)\\)、\\((2,-1,2)\\) 為方向向量，求所成角的餘弦',['用公式。'],'\\(\\tfrac49\\)'],
 ['OA＝OB＝1、OC＝2 兩兩垂直，M 是 OC 中點，求 AM 與 BC 所成角的餘弦',['建系：M(0,0,1)。'],'\\(\\dfrac{\\sqrt{10}}{5}\\)'],
 ['求線線角有幾何法、基底法、坐標法，各舉一個優點。',null,'幾何法：圖形直觀、少計算；基底法：不需垂直；坐標法：步驟固定']
])
  ]));
})();
