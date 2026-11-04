/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), Bx = G3.box(2,3,1.5), miniBx = G3.mini(Bx);
const Tp = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,3,0],Z:[0,0,3]},[['O','A','B'],['O','B','Z'],['O','Z','A'],['A','B','Z']]);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：垂直平面的箭',null,'0 0 440 250',[
 {say:'平面入面有無數個方向，要逐個講就太麻煩。',dur:5,d:k=>{const F=G3.frame(Bx,{H:250});return F.base({labels:false,c:'#cbd5e1',hc:'#e2e8f0',w:2})+F.fill(['A','B','C','D'],'rgba(37,99,235,.15)')+F.vec('D',[2*k+.01,1.5*k,0],BLU,'',1)+F.vec('D',[.4,2.6*k+.01,0],BLU,'',1)}},
 {say:'但係垂直呢個平面嘅方向，就只得一個。',dur:5,d:k=>{const F=G3.frame(Bx,{H:250});return F.vec('B','B1',RED,'n',k,[20,0])}},
 {say:'將呢支箭移去平面任何一點，佢都係垂直平面。',dur:5,d:k=>{const F=G3.frame(Bx,{H:250});return F.vec('D','D1',RED,'',k)}},
 {say:'咁呢支箭同平面入面嘅向量，數量積會係幾多？下一頁試吓！',dur:5,d:k=>{const F=G3.frame(Bx,{H:250});return F.text(220,30,'n·v＝？',{c:VIO})}}
]),
S.slider('3-2','動手探索','平面內的向量，和法向量的數量積是？',['n＝(3,2,1)，平面過 A、B、C。','拖動平面上的點，看數量積。'],(h)=>G3.explore(h,{
 sl:[{id:'u',label:'沿 AB',min:0,max:1,step:.25,value:.5},{id:'w',label:'沿 AC',min:0,max:1,step:.25,value:.25}],
 draw:v=>{const T=G3.solid({A:[2,0,0],B:[0,3,0],Cc:[0,0,6]},[['A','B','Cc']],true);const F=G3.frame(T,{W:440,H:195,m:26,fs:34,extra:[[2.9,1.9,1]]});const A=T.V.A,X=G3.add(G3.add(A,G3.mul(G3.sbt(T.V.B,A),v.u)),G3.mul(G3.sbt(T.V.Cc,A),v.w));return F.show(F.fill(['A','B','Cc'],'rgba(37,99,235,.15)'),F.base({labels:false}),F.vec('A',X,BLU),F.vec(X,G3.add(X,G3.mul([3,2,1],.28)),RED,'n',1,[18,-6]),F.lab('A','A'),F.lab('B','B'),F.lab('Cc','C'))},
 fx:v=>{const x=[-2*v.u-2*v.w,3*v.u,6*v.w];const d=3*x[0]+2*x[1]+x[2];return `\\(\\overrightarrow{AX}=(${x[0]},${x[1]},${x[2]})\\)，\\(\\boldsymbol{n}\\cdot\\overrightarrow{AX}=${Math.abs(d)<1e-9?0:d}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['無論點拖到哪裏。'],'\\(\\boldsymbol{n}\\) 是平面的法向量，平面內任意向量 \\(\\overrightarrow{AX}\\) 都滿足？',[
 ['\\(\\boldsymbol{n}\\cdot\\overrightarrow{AX}=0\\)','法向量垂直平面內所有向量',1],
 ['\\(\\boldsymbol{n}\\parallel\\overrightarrow{AX}\\)','概念錯誤：是垂直不是平行'],
 ['\\(|\\boldsymbol{n}|=|\\overrightarrow{AX}|\\)','概念錯誤：法向量長度無限制']
]),
S.check('3-4','位置關係','法向量怎樣說明位置？',['比較 v 和 n。'],'\\(\\boldsymbol{v}\\) 是 \\(l\\) 的方向向量，\\(\\boldsymbol{n}\\) 是 α 的法向量，\\(\\boldsymbol{v}\\parallel\\boldsymbol{n}\\)，則？',[
 ['\\(l\\perp\\alpha\\)','\\(l\\) 與法向量同方向',1],
 ['\\(l\\parallel\\alpha\\)','概念錯誤：那是 \\(\\boldsymbol{v}\\perp\\boldsymbol{n}\\) 的情況'],
 ['\\(l\\) 在 α 內','概念錯誤：平面內的直線與法向量垂直']
]),
S.stepper('3-5','跟著做：求法向量','跟著做：A(2,0,0)、B(0,3,0)、C(0,0,6)',['每一步說出理由。'],(h)=>{const T=G3.solid({A:[2,0,0],B:[0,3,0],Cc:[0,0,6]},[['A','B','Cc']],true);const F=G3.frame(T,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'先求平面內兩個不平行向量：\\(\\overrightarrow{AB}\\)，\\(\\overrightarrow{AC}\\)',d:k=>F.fill(['A','B','Cc'],'rgba(37,99,235,.15)')+F.base({labels:false})+F.vec('A','B',BLU,'',k)+F.vec('A','Cc',GRN,'',k)},
 {t:'\\(\\overrightarrow{AB}=(-2,3,0)\\)，\\(\\overrightarrow{AC}=(-2,0,6)\\)',d:k=>F.lab('A','A')+F.lab('B','B')+F.lab('Cc','C')},
 {t:'列式：\\(-2x+3y=0\\)，\\(-2x+6z=0\\)',d:k=>F.text(350,50,'兩條方程',{c:VIO})},
 {t:'取 \\(x=3\\)：\\(y=2\\)，\\(z=1\\)，\\(\\boldsymbol{n}=(3,2,1)\\)',d:k=>F.text(350,100,'(3,2,1)',{c:RED})}
])},{example:{q:'A(1,0,0)、B(0,1,0)、C(0,0,1)，求法向量。',steps:['\\(\\overrightarrow{AB}=(-1,1,0)\\)，\\(\\overrightarrow{AC}=(-1,0,1)\\)'],ans:'\\((1,1,1)\\)'}}),
S.stepper('3-6','跟著做：線面平行','跟著做：用法向量證線面平行',['棱長 2 的正方體，M、N 是 AB₁、BC₁ 中點。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});const M=[2,1,1],N=[1,2,1];G3.steps(h,440,200,[
 {t:'D 為原點：\\(M(2,1,1)\\)，\\(N(1,2,1)\\)',d:k=>F.base()+F.dot(M,RED)+F.dot(N,RED)},
 {t:'\\(\\overrightarrow{MN}=(-1,1,0)\\)',d:k=>F.vec(M,N,RED,'',k)},
 {t:'底面的法向量 \\(\\boldsymbol{n}=(0,0,1)\\)，\\(\\overrightarrow{MN}\\cdot\\boldsymbol{n}=0\\)',d:k=>F.vec('A','A1',AMB,'',k)},
 {t:'M、N 不在底面內，所以 MN∥平面 ABCD（要記得這一句）',d:k=>F.text(350,40,'MN∥底面',{c:RED})}
])},{formula:{label:'線面平行',tex:'\\boldsymbol{v}\\cdot\\boldsymbol{n}=0\\text{ 且 }l\\not\\subset\\alpha\\Rightarrow l\\parallel\\alpha'}}),
S.check('3-7','快問快答','快問快答：兩個法向量',null,'\\(\\boldsymbol{n}_1=(1,2,3)\\)，\\(\\boldsymbol{n}_2=(3,6,9)\\)，兩不重合平面的關係？',[
 ['平行','法向量是倍數，兩平面平行或重合；題目說不重合',1],
 ['垂直','程序錯誤：數量積是 42，不是 0'],
 ['相交但不垂直','概念錯誤：法向量平行就不會斜交']
])
  ]));
})();
