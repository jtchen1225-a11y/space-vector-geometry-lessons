/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Bx = G3.box(2,3,4,{}), Ex = G3.mid(Bx.V.A,Bx.V.A1);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：這個夾角對嗎？',null,{q:`正方體中，求〈${vv('AB')}，${vv('B1A1')}〉。`,steps:['AB 與 B₁A₁ 平行','所以夾角是 0°'],wrong:1,why:'概念錯誤：平行有同向和反向兩種，這裏方向相反。',fix:`${vv('B1A1')}＝${vv('BA')}，與 ${vv('AB')} 反向，夾角是 180°`},{fig:miniCu}),
S.mistake('5-2','再抓一次','再抓一次：長度怎樣算？',null,{q:'\\(|\\boldsymbol{a}|=3\\)，\\(|\\boldsymbol{b}|=4\\)，夾角 60°，求 \\(|\\boldsymbol{a}+\\boldsymbol{b}|\\)。',steps:['\\(|\\boldsymbol{a}+\\boldsymbol{b}|^2=9+16\\)','\\(|\\boldsymbol{a}+\\boldsymbol{b}|=5\\)'],wrong:0,why:'程序錯誤：漏了中間項 \\(2\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)，只有垂直時才可省略。',fix:'\\(9+2\\times6+16=37\\)，長度是 \\(\\sqrt{37}\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：夾角與投影',null,[
 ['〈\\(\\boldsymbol{a},\\boldsymbol{b}\\)〉＝30°，求〈\\(-\\boldsymbol{a},\\boldsymbol{b}\\)〉',['\\(-\\boldsymbol{a}\\) 的方向與 \\(\\boldsymbol{a}\\) 相反。','反向後夾角變成它的補角。'],'150°'],
 ['\\(|\\boldsymbol{a}|=4\\)，單位向量 \\(\\boldsymbol{e}\\)，夾角 60°，求 \\(\\boldsymbol{a}\\) 在 \\(\\boldsymbol{e}\\) 上投影的數量',['與單位向量的數量積就是投影數量。'],'2'],
 ['說明 \\(|\\boldsymbol{a}+\\boldsymbol{b}|^2+|\\boldsymbol{a}-\\boldsymbol{b}|^2=2|\\boldsymbol{a}|^2+2|\\boldsymbol{b}|^2\\)，它的幾何意義是甚麼？',null,'兩式展開相加，中間項抵消；平行四邊形兩對角線平方和等於四邊平方和']
])
  ]));
})();
