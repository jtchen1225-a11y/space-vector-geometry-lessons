/* ============ 第 2 階段　5–12 分鐘　陷阱大搜查：錯在哪裏？（教案：錯誤診斷；螺旋：錯誤診斷） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "5–12 分鐘", "陷阱大搜查：錯在哪裏？", C, [
S.mistake('2-1','抓錯偵探','抓錯偵探：公式用錯了',null,{q:'棱長 1 的正方體，求 AC₁ 與平面 AB₁C 所成角。',steps:['\\(|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|=\\tfrac13\\)','\\(\\cos\\theta=\\tfrac13\\)'],wrong:1,why:'概念錯誤：線面角用正弦。',fix:'\\(\\sin\\theta=\\tfrac13\\)'}),
S.mistake('2-2','再抓一次','再抓一次：距離怎會是負的？',null,{q:'\\(\\overrightarrow{BA}\\cdot\\boldsymbol{n}=-4\\)，\\(|\\boldsymbol{n}|=2\\)，求點面距離。',steps:['\\(d=\\dfrac{-4}{2}\\)','\\(d=-2\\)'],wrong:0,why:'粗心失誤：漏了絕對值。',fix:'\\(d=2\\)'}),
S.check('2-3','誰是對的？','誰是對的？二面角',['看圖判斷。'],'甲：法向量夾角就是二面角。乙：相等或互補。',[
 ['乙對','法向量方向不同會變成互補',1],['甲對','概念錯誤：反向後會變'],['兩人都錯','概念錯誤：乙的說法正確']
]),
S.check('2-4','哪個向量？','這題要哪兩個向量？',['先想問題類型。'],'求平面 PBC 與底面所成的角，要？',[
 ['兩個法向量','面面角',1],['方向向量與法向量','概念錯誤：這是線面角'],['兩個方向向量','概念錯誤：這是線線角']
])
  ]));
})();
