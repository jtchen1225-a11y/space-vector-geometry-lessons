/* ============ 第 3 階段　12–22 分鐘　把概念串起來（教案：知識連結；螺旋：知識連結） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "12–22 分鐘", "把概念串起來", C, [
S.goals('3-1','概念連連看','這些工具之間有甚麼關係？',['說說看：哪一步可以省略？'],{head:'一條主線',items:['線性運算：首尾相接、中點公式','基底：不共面的三向量表示一切','數量積：夾角、長度、垂直','坐標：基底單位且正交時的特例']}),
S.slider('3-2','動手看圖像','基底夾角變成 90°，會發生甚麼？',['拖夾角，看中間項何時消失。','單位基底，兩兩夾角相同。'],(h)=>G3.explore(h,{
 sl:[{id:'bt',label:'夾角',min:30,max:105,step:15,value:60,fmt:v=>v+'°'}],
 draw:v=>{const t=v.bt*Math.PI/180,c=Math.cos(t),s=Math.sin(t),U=[1,0,0],W=[c,s,0],Q=[c,(c-c*c)/s,Math.sqrt(Math.max(1-c*c-((c-c*c)/s)**2,0))],S3=G3.add(G3.add(U,W),Q);
  const box=G3.solid({a:[1.8,-.6,0],b:[1.8,1.8,0],c:[-.6,1.8,0],d:[-.6,-.6,0],e:[0,0,2.5]},[['a','b','c','d']],true);box.flat=true;box.nm='';const F=G3.frame(box,{W:440,H:215,m:18,el:20});
  return F.show(F.vec([0,0,0],U,BLU,'a',1,[6,30]),F.vec([0,0,0],W,GRN,'b',1,[20,10]),F.vec([0,0,0],Q,AMB,'c',1,[-20,-4]),F.vec([0,0,0],S3,RED))},
 fx:v=>{const c=Math.cos(v.bt*Math.PI/180),m=c*2*3,val=3+m;return `長度平方 \\(=3+${(Math.abs(m)<1e-9?0:m).toFixed(2)}=${val.toFixed(2)}\\)`}
})),
S.check('3-3','基底變坐標','基底正交時，公式變成甚麼？',['拖到 90° 就明白。'],'棱長 1 的正方體，\\(|\\overrightarrow{BD_1}|\\)＝？',[
 ['\\(\\sqrt3\\)','正交，中間項為 0，\\(\\sqrt{1+1+1}\\)',1],
 ['3','程序錯誤：忘了開方'],
 ['\\(\\sqrt2\\)','概念錯誤：這是面對角線']
]),
S.check('3-4','由點到向量','由點到向量',['終點減起點。'],'A(1,2,3)、B(2,4,5)，\\(\\overrightarrow{AB}\\) 的單位向量是？',[
 ['\\(\\tfrac13(1,2,2)\\)','\\(\\overrightarrow{AB}=(1,2,2)\\)，長度 3',1],
 ['\\((1,2,2)\\)','概念錯誤：長度不是 1'],
 ['\\(\\tfrac13(3,6,8)\\)','概念錯誤：把坐標相加']
]),
S.tasks('3-5','升級挑戰','升級挑戰：各層都用兩種工具',null,[
 ['求與 \\((2,-1,2)\\) 同向的單位向量',['先求長度。','除以長度。'],'\\((\\tfrac23,-\\tfrac13,\\tfrac23)\\)'],
 ['單位向量 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 夾角 60°，求 \\(|\\boldsymbol{a}+3\\boldsymbol{b}|\\)',['先平方。'],'\\(\\sqrt{13}\\)'],
 ['A(1,2,0)、B(3,0,1)、C(2,1,2)，有 \\(x\\) 使 \\(\\overrightarrow{AB}\\perp(\\overrightarrow{AB}+x\\overrightarrow{AC})\\) 嗎？',null,'有：\\(9+6x=0\\)，\\(x=-\\tfrac32\\)']
])
  ]));
})();
