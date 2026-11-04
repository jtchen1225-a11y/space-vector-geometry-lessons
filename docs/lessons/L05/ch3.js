/* ============ 第 3 階段　11–25 分鐘　兩輪闖關：基本功到變化題（教案：分層練習兩輪＋巡視；螺旋：獨立應用 → 變式比較） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Te = G3.solid({A:[1.4,0,0],B:[.9,2,0],C:[-.4,.8,0],D:[.75,.9,1.7]},[['A','B','C'],['A','B','D'],['B','C','D'],['C','A','D']]), miniTe = G3.mini(Te);
  window.DECK.push(S.phase(3, "11–25 分鐘", "兩輪闖關：基本功到變化題", C, [
S.drill('3-1','第一關：基本功','第一關：正四面體基本功',['棱長 2 的正四面體 ABCD。','先寫基底，再代入。'],6,['把 60° 當 90°（概念）','AB 與 CD 垂直判斷不出（程序）','漏開方（粗心）'],[
 [`求 ${vv('AB')}·${vv('AC')}`,['正四面體每個面都是等邊三角形。','\\(2\\times2\\times\\cos60^\\circ\\)'],'2'],
 [`求 ${vv('AB')}·${vv('CD')}`,[`${vv('CD')}＝${vv('AD')}－${vv('AC')}`],'0'],
 ['E、F 是 AB、CD 中點，求 EF 的長。',['\\(\\overrightarrow{EF}=\\tfrac12(\\overrightarrow{AC}+\\overrightarrow{AD}-\\overrightarrow{AB})\\)'],'\\(\\sqrt2\\)']
],{fig:miniTe}),
S.check('3-2','比一比：正負','比一比：同一條棱，兩種方向',['只差一個方向。'],`若 ${vv('AB')}·${vv('AC')}＝2，則 ${vv('BA')}·${vv('AC')}＝？`,[
 ['－2','一個向量反向，數量積變號',1],
 ['2','概念錯誤：以為數量積不受方向影響'],
 ['0','概念錯誤：以為反向就垂直']
]),
S.drill('3-3','第二關：比一比','第二關：平行六面體比一比',['基底 \\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=2\\)，\\(|\\boldsymbol{c}|=3\\)。','兩兩夾角 60°。'],7,['中間項符號錯（程序）','夾角當垂直（概念）'],[
 ['求 \\(|\\boldsymbol{a}+\\boldsymbol{b}|^2\\)',['\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=2\\)。'],'12'],
 ['求體對角線 AC₁ 的長',['\\(\\overrightarrow{AC_1}=\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}\\)','\\(\\boldsymbol{a}\\cdot\\boldsymbol{c}=\\boldsymbol{b}\\cdot\\boldsymbol{c}=3\\)'],'\\(\\sqrt{33}\\)'],
 ['比較 AC₁ 與 BD₁ 誰長，為甚麼會不同？',null,'\\(|BD_1|=\\sqrt{13}\\)，較短：\\(\\boldsymbol{a}\\) 變號後，與它有關的兩個中間項變號']
],{fig:miniPa}),
S.check('3-4','比一比：做法','比一比：用哪組基底最省力？',['基底要長度、夾角已知。'],'求棱長已知的直三棱柱的數量積，基底應選？',[
 ['由直角或已知夾角頂點出發的三條棱','長度和夾角都已知',1],
 ['隨便三條棱','程序錯誤：可能不共面也可能夾角未知'],
 ['體對角線','概念錯誤：對角線長度和夾角未知']
])
  ]));
})();
