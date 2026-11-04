/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), Bx = G3.box(2,3,1.5), miniBx = G3.mini(Bx);
const Tp = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,3,0],Z:[0,0,3]},[['O','A','B'],['O','B','Z'],['O','Z','A'],['A','B','Z']]);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：一條方程夠嗎？',null,{q:'A(1,0,0)、B(0,1,0)、C(0,0,1)，求法向量。',steps:['\\(\\overrightarrow{AB}=(-1,1,0)\\)，取 \\(\\boldsymbol{n}=(1,1,0)\\)','\\(\\boldsymbol{n}\\perp\\overrightarrow{AB}\\)，所以是法向量'],wrong:1,why:'程序錯誤：只垂直一個方向，還要垂直 \\(\\overrightarrow{AC}\\)。',fix:'\\((1,1,0)\\cdot(-1,0,1)\\neq0\\)；正確答案是 \\((1,1,1)\\)'}),
S.mistake('5-2','再抓一次','再抓一次：一定平行嗎？',null,{q:'\\(\\boldsymbol{v}\\cdot\\boldsymbol{n}=0\\)，判斷 \\(l\\) 與 α 的關係。',steps:['\\(\\boldsymbol{v}\\perp\\boldsymbol{n}\\)','所以 \\(l\\parallel\\alpha\\)'],wrong:1,why:'概念錯誤：\\(l\\) 也可能在 α 內。',fix:'\\(l\\parallel\\alpha\\) 或 \\(l\\) 在 α 內；要再驗證一點不在平面內'}),
S.tasks('5-3','升級挑戰','升級挑戰：正方體中的法向量',['棱長 1，D 為原點。'],[
 ['寫出平面 ABCD 的一個法向量',['哪條棱垂直底面？'],'\\((0,0,1)\\)'],
 ['求平面 AB₁C 的一個法向量',['\\(\\overrightarrow{AB_1}=(0,1,1)\\)，\\(\\overrightarrow{AC}=(-1,1,0)\\)'],'\\((1,1,-1)\\)'],
 ['用法向量說明面面平行判定定理為甚麼成立。',null,'一平面的法向量垂直另一平面的兩條相交直線，所以也是另一平面的法向量，兩平面平行']
])
  ]));
})();
