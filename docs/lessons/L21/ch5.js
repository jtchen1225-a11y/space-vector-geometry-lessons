/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Roof = (()=>{const r=G3.solid({A:[2,0,0],B:[0,2,0],Cc:[0,0,1]},[['A','B','Cc']],true);return r})();
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：分母去了哪裏？',null,{q:'\\(\\boldsymbol{n}=(1,1,0)\\)，\\(\\overrightarrow{BA}=(1,0,0)\\)，求距離。',steps:['\\(\\overrightarrow{BA}\\cdot\\boldsymbol{n}=1\\)','距離是 1'],wrong:1,why:'程序錯誤：\\(\\boldsymbol{n}\\) 不是單位向量，要除以 \\(|\\boldsymbol{n}|=\\sqrt2\\)。',fix:'\\(d=\\dfrac{1}{\\sqrt2}=\\dfrac{\\sqrt2}{2}\\)'}),
S.mistake('5-2','再抓一次','再抓一次：這是點面距離嗎？',null,{q:'A(3,4,5)，B 在平面內，\\(|\\overrightarrow{BA}|=5\\)，求 A 到平面的距離。',steps:['距離就是 AB','答案是 5'],wrong:0,why:'概念錯誤：AB 不一定垂直平面，距離可能更短。',fix:'要用 \\(\\dfrac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}\\)；條件不足時不能斷定是 5'}),
S.tasks('5-3','升級挑戰','升級挑戰：平行距離',null,[
 ['到平面 α 距離 3 cm 的點，組成甚麼圖形？',['α 兩邊都要算。'],'兩個與 α 平行的平面'],
 ['α 過 B(1,0,0)、法向量 (1,1,1)，β∥α 且過 A(1,1,1)，求距離',['\\(\\overrightarrow{BA}=(0,1,1)\\)。'],'\\(\\dfrac{2\\sqrt3}{3}\\)'],
 ['為甚麼平行線面、平行面面的距離都可以用同一條公式？',null,'線或面上任何一點到另一面的距離都一樣，所以都歸結為點面距離']
])
  ]));
})();
