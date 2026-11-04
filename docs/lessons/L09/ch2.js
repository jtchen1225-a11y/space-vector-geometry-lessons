/* ============ 第 2 階段　5–12 分鐘　陷阱大搜查：錯在哪裏？（教案：錯誤診斷；螺旋：錯誤診斷） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "5–12 分鐘", "陷阱大搜查：錯在哪裏？", C, [
S.mistake('2-1','抓錯偵探','抓錯偵探：基底可以這樣展開嗎？',null,{q:'基底長度都是 1、兩兩夾角 60°，求 \\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|\\)。',steps:['\\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|^2=1+1+1\\)','所以長度是 \\(\\sqrt3\\)'],wrong:0,why:'概念錯誤：把基底當成正交基底，漏了中間項。',fix:'\\(3+2(\\tfrac12+\\tfrac12+\\tfrac12)=6\\)，長度 \\(\\sqrt6\\)'}),
S.mistake('2-2','再抓一次','再抓一次：點與向量',null,{q:'以 D 為原點，棱長 1 的正方體，寫 \\(\\overrightarrow{A_1C}\\)。',steps:['\\(A_1(1,0,1)\\)，\\(C(0,1,0)\\)','\\(\\overrightarrow{A_1C}=(1,-1,1)\\)'],wrong:1,why:'程序錯誤：用了起點減終點，方向反了。',fix:'\\(\\overrightarrow{A_1C}=(-1,1,-1)\\)'}),
S.check('2-3','誰是對的？','誰是對的？兩種方法',['用棱長 1 的正方體。'],'求 \\(\\cos\\langle\\overrightarrow{AB},\\overrightarrow{B_1D}\\rangle\\)，甲用基底，乙用坐標，都得 \\(-\\tfrac{1}{\\sqrt3}\\)。',[
 ['兩人都對','坐標是基底的特例，結果一定相同',1],
 ['只有乙對','概念錯誤：基底法也可以'],
 ['餘弦應該是正數','概念錯誤：向量夾角可以是鈍角']
]),
S.check('2-4','哪個方法？','這題用哪個方法較好？',['想想條件給了甚麼。'],'已知三條棱長度和兩兩夾角 60°，求體對角線：',[
 ['基底法','棱不垂直，坐標不易寫；長度和夾角已知',1],
 ['坐標法','程序上要另找垂直線，較麻煩'],
 ['只能量度','概念錯誤：可以計算']
])
  ]));
})();
