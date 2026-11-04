/* ============ 第 3 階段　11–25 分鐘　兩輪闖關：基本功到變化題（教案：分層練習兩輪＋巡視；螺旋：獨立應用 → 變式比較） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Tr = G3.solid({O:[0,0,0],A:[1,0,0],B:[0,2,0],C:[0,0,3]},[['O','A','B'],['O','B','C'],['O','C','A'],['A','B','C']]), miniTr = G3.mini(Tr);
  window.DECK.push(S.phase(3, "11–25 分鐘", "兩輪闖關：基本功到變化題", C, [
S.drill('3-1','第一關：基本功','第一關：棱長 2 的正方體',['D 為原點，E 是 AB 中點。','一題接一題。'],6,['寫錯 D₁、E 坐標（程序）','餘弦忘了分母（程序）','含參數題沒設未知數（程序）'],[
 ['求 \\(\\overrightarrow{D_1E}\\) 和它的長度',['\\(D_1(0,0,2)\\)，\\(E(2,1,0)\\)。','終點減起點。'],'\\((2,1,-2)\\)，3'],
 ['求 \\(\\cos\\langle\\overrightarrow{D_1E},\\overrightarrow{AC}\\rangle\\)',['\\(\\overrightarrow{AC}=(-2,2,0)\\)。'],'\\(-\\dfrac{\\sqrt2}{6}\\)'],
 ['BB₁ 上有 P 使 \\(\\overrightarrow{D_1E}\\perp\\overrightarrow{AP}\\) 嗎？指出位置。',['設 \\(P(2,2,t)\\)。'],'有：\\(t=1\\)，P 是 BB₁ 中點']
]),
S.check('3-2','比一比：符號','比一比：夾角為甚麼是鈍角？',['只看數量積符號。'],'第 3-1 題 B 層餘弦是負數，表示？',[
 ['兩向量夾角是鈍角','數量積為負，夾角大於 90°',1],
 ['計算一定錯了','概念錯誤：向量夾角可以是鈍角'],
 ['兩直線夾角是鈍角','概念錯誤：直線夾角不大於 90°（L10 會學）']
]),
S.drill('3-3','第二關：比一比','第二關：換一個立體',['三棱錐：OA、OB、OC 兩兩垂直。','OA＝1，OB＝2，OC＝3。'],7,['把 O 當成 A（粗心）','面積公式用錯（概念）'],[
 ['求 \\(\\overrightarrow{AB}\\cdot\\overrightarrow{AC}\\)',['以 O 為原點，先寫 A、B、C。'],'1'],
 ['求 \\(\\cos\\angle BAC\\)',['\\(|\\overrightarrow{AB}|=\\sqrt5\\)，\\(|\\overrightarrow{AC}|=\\sqrt{10}\\)'],'\\(\\dfrac{\\sqrt2}{10}\\)'],
 ['求 △ABC 面積，比較與直接用海倫公式哪個方便。',null,'\\(\\tfrac72\\)；用 \\(\\tfrac12|AB||AC|\\sin A\\) 較方便']
],{fig:miniTr}),
S.check('3-4','比一比：做法','比一比：原點選哪裏？',['選讓坐標最多 0 的點。'],'三棱錐 O-ABC，OA、OB、OC 兩兩垂直，原點最好選？',[
 ['O','三條棱都落在軸上，坐標最簡單',1],
 ['A','程序上可以，但坐標較複雜'],
 ['△ABC 中心','程序上可以，但會有很多分數']
])
  ]));
})();
