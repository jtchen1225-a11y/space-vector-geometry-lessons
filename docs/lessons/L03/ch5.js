/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), Pr = G3.solid({A:[1.6,0,0],B:[1.2,2.2,0],C:[-.4,1,0],A1:[1.9,.5,1.7],B1:[1.5,2.7,1.7],C1:[-.1,1.5,1.7]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：定理可以這樣用嗎？',null,{q:'\\(\\boldsymbol{a}\\parallel\\boldsymbol{b}\\)，\\(\\boldsymbol{c}\\) 與它們不平行，能否寫成 \\(\\boldsymbol{c}=x\\boldsymbol{a}+y\\boldsymbol{b}\\)？',steps:['三向量共面','由共面向量定理，可以寫成 \\(x\\boldsymbol{a}+y\\boldsymbol{b}\\)'],wrong:1,why:'概念錯誤：定理要求 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 不共線；這裏共線，組合只能走同一方向。',fix:'\\(\\boldsymbol{a}\\parallel\\boldsymbol{b}\\) 時 \\(x\\boldsymbol{a}+y\\boldsymbol{b}\\) 都與 \\(\\boldsymbol{a}\\) 平行，寫不出 \\(\\boldsymbol{c}\\)'}),
S.mistake('5-2','再抓一次','再抓一次：平行一定共線？',null,{q:`${vv('AB')}＝3${vv('CD')}，A、B、C、D 一定共線嗎？`,steps:['兩向量平行','所以 A、B、C、D 共線'],wrong:1,why:'概念錯誤：向量平行不等於點共線，要有公共點才可以。',fix:'只能得到 AB∥CD 或共線；要共線需再有公共點'}),
S.tasks('5-3','升級挑戰','升級挑戰：共面的判斷',null,[
 [`${vv('AP')}＝${vv('AB')}＋2${vv('AC')}，P 與 A、B、C 共面嗎？`,['與公式比較。','\\(x=1\\)，\\(y=2\\)'],'共面'],
 [`平行六面體中，${vv('AB1')}、${vv('AD1')}、${vv('B1D1')} 共面嗎？`,[`${vv('B1D1')} 能否用另外兩個相減？`],`共面：${vv('B1D1')}＝${vv('AD1')}－${vv('AB1')}`],
 [`${vv('OP')}＝x${vv('OA')}＋y${vv('OB')}＋z${vv('OC')}，x＋y＋z＝1，說明 P 在平面 ABC 上。`,null,`把 x＝1－y－z 代入，得 ${vv('AP')}＝y${vv('AB')}＋z${vv('AC')}`]
])
  ]));
})();
