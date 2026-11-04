/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
const tB=[-.9,-.4,0], tAp=[.9,-.4,0], tA=[.9,-.4,1.3];
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：這是線面角嗎？',null,{q:'正方體中，求 BD₁ 與底面 ABCD 所成的角。',steps:['取底面內的 BC','∠D₁BC 就是所求的角'],wrong:0,why:'概念錯誤：要用射影 BD，不是任意一條底面內的線。',fix:'射影是 BD，所求是 ∠D₁BD，\\(\\tan\\theta=\\tfrac{\\sqrt2}{2}\\)'},{fig:miniCu}),
S.mistake('5-2','再抓一次','再抓一次：射影長怎樣算？',null,{q:'AB＝6，與平面成 60°，求射影長。',steps:['射影＝\\(6\\sin60^\\circ\\)','\\(=3\\sqrt3\\)'],wrong:0,why:'程序錯誤：射影是鄰邊，應用餘弦。',fix:'射影＝\\(6\\cos60^\\circ=3\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：多幾種問法',null,[
 ['正方體中，AC₁ 與底面所成角的正切是？',['射影 AC＝\\(\\sqrt2\\)。'],'\\(\\dfrac{\\sqrt2}{2}\\)'],
 ['P 到平面距離 3，斜線段 PA＝6，PA 與平面成多少度？',['距離是對邊。'],'30°'],
 ['∠PAB＝∠PAC，說明 AP 的射影平分 ∠BAC。',null,'用三餘弦：\\(\\cos\\angle BAM=\\cos\\angle CAM\\)，所以兩角相等']
])
  ]));
})();
