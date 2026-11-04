/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para();
const Cu = G3.cube(1);
const miniPa = G3.mini(Pa), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：這個差對嗎？',null,{q:`四棱錐 O-ABCD 中，化簡 ${vv('OB')}－${vv('OD')}。`,steps:[`${vv('OB')}－${vv('OD')}＝${vv('BD')}`],wrong:0,why:'程序錯誤：差向量要由「減數」指向「被減數」，方向寫反。',fix:`${vv('OB')}－${vv('OD')}＝${vv('DB')}`}),
S.mistake('5-2','再抓一次','再抓一次：向量與直線',null,{q:`正方體中，${vv('AA1')} 與 ${vv('B1C1')} 共面嗎？`,steps:['直線 AA₁ 與 B₁C₁ 是異面直線','所以兩條直線不在同一平面','所以這兩個向量不共面'],wrong:2,why:'概念錯誤：把直線的位置當成向量的位置。向量可以平移，任意兩向量都共面。',fix:`把 ${vv('B1C1')} 平移成 ${vv('AD')}，與 ${vv('AA1')} 同在平面 ADD₁A₁ 內，所以共面。`},{fig:miniCu}),
S.tasks('5-3','升級挑戰','升級挑戰：共面與化簡',['圖是正方體。','先判斷，再說理由。'],[
 [`正方體中，${vv('AB')}、${vv('BC')}、${vv('A1D1')} 共面嗎？`,[`把 ${vv('A1D1')} 平移到底面。`,`${vv('A1D1')}＝${vv('AD')}，三個都在底面。`],'共面'],
 [`化簡 \\(2(\\boldsymbol{a}-\\boldsymbol{b})+3(\\boldsymbol{a}+2\\boldsymbol{b})\\)`,['像代數式一樣拆括號。','\\(\\boldsymbol{a}\\) 的係數：2＋3。'],`\\(5\\boldsymbol{a}+4\\boldsymbol{b}\\)`],
 [`空間四邊形 ABCD，M、N 為 AB、CD 中點，說明 ${vv('MN')}＝½(${vv('AD')}＋${vv('BC')})`,null,`${vv('MN')}＝${vv('MA')}＋${vv('AD')}＋${vv('DN')}，又＝${vv('MB')}＋${vv('BC')}＋${vv('CN')}，兩式相加，中點的向量互相抵消，得 2${vv('MN')}＝${vv('AD')}＋${vv('BC')}`]
],{fig:miniCu})
  ]));
})();
