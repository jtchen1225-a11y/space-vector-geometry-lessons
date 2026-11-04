/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：這是線面角嗎？',null,{q:'\\(\\boldsymbol{v}=(1,\\sqrt3,0)\\)，\\(\\boldsymbol{n}=(0,1,0)\\)，求線面角。',steps:['\\(\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle=\\tfrac{\\sqrt3}{2}\\)，夾角 30°','所以線面角是 30°'],wrong:1,why:'概念錯誤：線面角與 v、n 的夾角不是同一個角，應用正弦。',fix:'\\(\\sin\\theta=\\tfrac{\\sqrt3}{2}\\)，\\(\\theta=60^\\circ\\)'}),
S.mistake('5-2','再抓一次','再抓一次：餘弦還是正弦？',null,{q:'\\(\\boldsymbol{v}=(0,0,1)\\)，\\(\\boldsymbol{n}=(1,0,\\sqrt3)\\)，求線面角。',steps:['\\(\\dfrac{|\\boldsymbol{v}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{v}||\\boldsymbol{n}|}=\\dfrac{\\sqrt3}{2}\\)','\\(\\cos\\theta=\\dfrac{\\sqrt3}{2}\\)，\\(\\theta=30^\\circ\\)'],wrong:1,why:'程序錯誤：這個值是 \\(\\sin\\theta\\)。',fix:'\\(\\sin\\theta=\\dfrac{\\sqrt3}{2}\\)，\\(\\theta=60^\\circ\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：兩個方法比較',null,[
 ['棱長 1 的正方體，BD₁ 與底面：用向量法求正弦。',['\\(\\overrightarrow{BD_1}=(-1,-1,1)\\)'],'\\(\\dfrac{\\sqrt3}{3}\\)'],
 ['同題用幾何法：射影是甚麼？正弦怎樣算？',['射影 BD，DD₁ 是對邊。'],'\\(\\tfrac{1}{\\sqrt3}\\)，結果相同'],
 ['甚麼情況下向量法比幾何法方便？',null,'垂足難找、但能建系時；幾何法則適合射影明顯的圖形']
])
  ]));
})();
