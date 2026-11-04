/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Prm = G3.solid({A:[2,.2,0],B:[.4,.2,0],C:[.9,1.9,0],A1:[2,.2,1.5],B1:[.4,.2,1.5],C1:[.9,1.9,1.5]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：這個分解式對嗎？',null,{q:`基底 ${vv('AB')}＝a、${vv('AD')}＝b、${vv('AA1')}＝c，表示 ${vv('BD1')}。`,steps:['B→A→D→D₁','\\(\\overrightarrow{BD_1}=\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}\\)'],wrong:1,why:'程序錯誤：B→A 與 \\(\\boldsymbol{a}\\) 方向相反，應為 \\(-\\boldsymbol{a}\\)。',fix:'\\(\\overrightarrow{BD_1}=-\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}\\)'},{fig:miniPa}),
S.mistake('5-2','再抓一次','再抓一次：基底一定垂直？',null,{q:'基底 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 長度都是 1、夾角 60°，求 \\((\\boldsymbol{a}+\\boldsymbol{b})\\cdot\\boldsymbol{b}\\)。',steps:['基底互相垂直，\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\)','結果＝\\(\\boldsymbol{b}^2=1\\)'],wrong:0,why:'概念錯誤：基底只要不共面，不一定垂直。',fix:'\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=\\tfrac12\\)，結果＝\\(\\tfrac12+1=\\tfrac32\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：係數與基底',null,[
 [`${vv('AC1')}＝x(${vv('AB')}＋${vv('BC')}＋${vv('CC1')})，求 x`,['括號內首尾相接等於甚麼？'],'1'],
 [`E 是上底中心，${vv('AE')}＝${vv('AA1')}＋x${vv('AB')}＋y${vv('AD')}，求 x、y`,['參考 3-5。'],'\\(x=y=\\tfrac12\\)'],
 [`哪一個基向量能與 ${vv('OA')}＋${vv('OB')}、${vv('OA')}－${vv('OB')} 組成新基底？`,null,`${vv('OC')}：前兩者都在平面 OAB 內，只有 ${vv('OC')} 不在`]
])
  ]));
})();
