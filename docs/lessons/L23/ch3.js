/* ============ 第 3 階段　12–22 分鐘　把概念串起來（教案：知識連結；螺旋：知識連結） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "12–22 分鐘", "把概念串起來", C, [
S.goals('3-1','概念連連看','一張表，所有公式',['說說看：哪一欄只差一個字？'],{head:'總表',items:['線線角：\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle|\\)','線面角：\\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)','面面角：\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle|\\)','點面距離：\\(|\\boldsymbol{p}\\cdot\\boldsymbol{n}|/|\\boldsymbol{n}|\\)']}),
S.slider('3-2','動手看圖像','M 沿棱移動，角和距離怎樣變？',['M 在 BB₁ 上，棱長 2。','比較兩個量的變化。'],(h)=>G3.explore(h,{
 sl:[{id:'mt',label:'BM',min:0,max:2,step:.5,value:1}],
 draw:v=>{const F=G3.frame(Cu,{W:440,H:205,m:28,fs:34});const M=[2,2,v.mt];return F.show(F.base(),F.fill(['A1','B','D'],'rgba(37,99,235,.15)'),F.seg('A',M,RED,4),F.dot(M,RED))},
 fx:v=>{const d=v.mt/Math.sqrt(3),a=Math.atan2(v.mt,2)*180/Math.PI;return `M 到平面 \\(A_1BD\\)：\\(${d.toFixed(3)}\\)；AM 與底面：\\(${a.toFixed(1)}^\\circ\\)`}
})),
S.check('3-3','線線快問','綜合快問：線線角',['正方體棱長 1。'],'兩條體對角線所成角的餘弦是？',[
 ['\\(\\tfrac13\\)','\\(\\dfrac{1}{\\sqrt3\\sqrt3}\\)',1],['\\(-\\tfrac13\\)','概念錯誤：要取絕對值'],['\\(\\tfrac{1}{\\sqrt3}\\)','程序錯誤：分母少乘']
]),
S.check('3-4','線面快問','綜合快問：線面角',['\\(\\boldsymbol{n}=(1,1,-1)\\)。'],'棱長 1，AC₁ 與平面 AB₁C 所成角的正弦是？',[
 ['\\(\\tfrac13\\)','\\(\\overrightarrow{AC_1}=(-1,1,1)\\)，\\(|{-1}|/3\\)',1],['\\(\\tfrac23\\)','程序錯誤：數量積算錯'],['1','概念錯誤：不是垂直']
]),
S.tasks('3-5','升級挑戰','升級挑戰：同一點 M',['棱長 2，M 是 BB₁ 中點。'],[
 ['M 到平面 A₁BD 的距離？',['\\(\\boldsymbol{n}=(1,-1,-1)\\)，\\(\\overrightarrow{BM}=(0,0,1)\\)'],'\\(\\dfrac{\\sqrt3}{3}\\)'],
 ['AM 與底面所成角的正弦？',['\\(\\overrightarrow{AM}=(0,2,1)\\)'],'\\(\\dfrac{\\sqrt5}{5}\\)'],
 ['平面 A₁BD 與底面所成角的餘弦？',['法向量夾角取絕對值。'],'\\(\\dfrac{\\sqrt3}{3}\\)']
])
  ]));
})();
