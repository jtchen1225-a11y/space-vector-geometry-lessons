/* ============ 第 3 階段　12–22 分鐘　把概念串起來（教案：知識連結；螺旋：知識連結） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Py = (h)=>G3.solid({A:[1,-1,0],B:[1,1,0],C:[-1,1,0],D:[-1,-1,0],S:[0,0,h]},[['A','B','C','D'],['S','A','B'],['S','B','C'],['S','C','D'],['S','D','A']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "12–22 分鐘", "把概念串起來", C, [
S.goals('3-1','概念連連看','全章知識結構',['說說看：每一層如何用到上一層？'],{head:'四層結構',items:['向量運算：線性運算、數量積','基本定理：基底與坐標','位置：方向向量、法向量','度量：角與距離']}),
S.slider('3-2','動手看圖像','正四棱錐變高，兩種角怎樣變？',['底邊 2，拖高度。','先猜：哪個角較大？'],(h)=>G3.explore(h,{
 sl:[{id:'hh',label:'高',min:1,max:3,step:.5,value:2}],
 draw:v=>{const T=Py(v.hh),F=G3.frame(T,{W:440,H:205,m:28,fs:34,az:25,el:15,scale:Math.min(70,520/(v.hh+2.2))});const E=[0,1,0];return F.show(F.base(),F.seg('S',E,GRN,3),F.seg('S',[0,0,0],GRY,3,'6 5'))},
 fx:v=>{const a=Math.atan(v.hh)*180/Math.PI,b=Math.atan(v.hh/Math.SQRT2)*180/Math.PI;return `側面與底面：\\(${a.toFixed(1)}^\\circ\\)；側棱與底面：\\(${b.toFixed(1)}^\\circ\\)`}
})),
S.check('3-3','兩種角比較','綜合快問：兩種角的比較',['看剛才的數字。'],'正四棱錐中，一定有？',[
 ['側面與底面的角 ＞ 側棱與底面的角','側棱在側面內；面內直線與底面的角，不超過二面角',1],['兩者相等','概念錯誤：剛才數字不同'],['側棱與底面的角較大','概念錯誤：與結果相反']
]),
S.check('3-4','方法核對','綜合快問：兩種方法核對',['高 2，底邊 2。'],'幾何法得 tan＝2，向量法應得？',[
 ['\\(\\cos\\theta=\\tfrac{1}{\\sqrt5}\\)','兩者一致：\\(\\tan\\theta=2\\Leftrightarrow\\cos\\theta=\\tfrac{1}{\\sqrt5}\\)',1],['\\(\\cos\\theta=\\tfrac12\\)','程序錯誤：把 tan 當成 cos'],['\\(\\cos\\theta=2\\)','概念錯誤：餘弦不大於 1']
]),
S.tasks('3-5','升級挑戰','升級挑戰：綜合應用',null,[
 ['\\(\\boldsymbol{a}=(1,1,1),\\boldsymbol{b}=(1,0,-1)\\)，\\(k\\boldsymbol{a}+\\boldsymbol{b}\\perp2\\boldsymbol{a}-\\boldsymbol{b}\\)，求 \\(k\\)',['先寫兩個向量，再列方程。'],'\\(\\tfrac13\\)'],
 ['四面體 O-ABC，M、N 是 OA、BC 中點，MG＝3GN，表示 \\(\\overrightarrow{OG}\\)',['\\(\\overrightarrow{OM}+\\tfrac34\\overrightarrow{MN}\\)'],'\\(\\tfrac18\\boldsymbol{a}+\\tfrac38\\boldsymbol{b}+\\tfrac38\\boldsymbol{c}\\)'],
 ['等邊 △ABC 邊長 4，P 在平面內，求 \\(\\overrightarrow{PA}\\cdot(\\overrightarrow{PB}+\\overrightarrow{PC})\\) 的最小值',null,'－6：設 BC 中點 M，化為 \\(2\\overrightarrow{PA}\\cdot\\overrightarrow{PM}\\)，P 取 AM 中點時最小']
])
  ]));
})();
