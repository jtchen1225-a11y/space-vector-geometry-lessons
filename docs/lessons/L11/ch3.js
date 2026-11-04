/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：異面直線的最短距離',null,'0 0 440 250',[
 {say:'呢兩條直線，唔平行，又唔相交，叫做異面直線。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.base({labels:false,c:'#cbd5e1',hc:'#e2e8f0',w:2})+F.seg('A','D1',BLU,4,'',k)+F.seg('B','D',GRN,4,'',k)}},
 {say:'喺兩條線上面各揀一點，連起嚟，長度可大可細。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.seg([.5,0,.5],[.5,.5,0],GRY,3,'6 5',k)+F.seg([.8,0,.2],[.3,.3,0],GRY,3,'6 5',k)}},
 {say:'有一條連線特別短，佢同時同兩條直線都有關係。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.seg([2/3,0,1/3],[1/3,1/3,0],RED,4,'',k)}},
 {say:'究竟呢條連線有咩特別？下一頁你拖吓滑桿，自己搵出嚟！',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.text(220,36,'有咩特別？',{c:RED})}}
]),
S.slider('3-2','動手探索','拖 t、s，找最短的連線',['M 在 AD₁，N 在 BD（棱長 1）。','長度最小時，留意兩個數量積。'],(h)=>G3.explore(h,{
 sl:[{id:'tt',label:'t',min:0,max:1,step:1/6,value:1/6,fmt:v=>(+v).toFixed(2)},{id:'ss',label:'s',min:0,max:1,step:1/6,value:1/6,fmt:v=>(+v).toFixed(2)}],
 draw:v=>{const F=G3.frame(Cu,{W:440,H:190,m:24,fs:34});const M=[1-v.tt,0,v.tt],N=[1-v.ss,1-v.ss,0];return F.show(F.base({labels:false,c:'#cbd5e1',hc:'#e2e8f0',w:2}),F.seg('A','D1',BLU,4),F.seg('B','D',GRN,4),F.seg(M,N,RED,4),F.dot(M,BLU),F.dot(N,GRN))},
 fx:v=>{const m=[v.ss*-1+v.tt*1-0,1-v.ss,-v.tt],M=[1-v.tt,0,v.tt],N=[1-v.ss,1-v.ss,0],d=[N[0]-M[0],N[1]-M[1],N[2]-M[2]],L=Math.hypot(...d),a=-d[0]+d[2],b=-d[0]-d[1];return `\\(MN\\approx${L.toFixed(3)}\\)；\\(\\overrightarrow{MN}\\cdot\\overrightarrow{AD_1}\\approx${(Math.abs(a)<1e-9?0:a).toFixed(2)}\\)，\\(\\overrightarrow{MN}\\cdot\\overrightarrow{BD}\\approx${(Math.abs(b)<1e-9?0:b).toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['長度最小時，兩個數量積都變成甚麼？'],'最短的連線滿足？',[
 ['同時垂直兩條直線','它叫公垂線段，長度就是異面直線的距離',1],
 ['只垂直其中一條','概念錯誤：只垂直一條仍可以再縮短'],
 ['經過兩線的中點','概念錯誤：剛才的最短位置不是中點']
]),
S.check('3-4','異面的條件','怎樣判斷異面？',['方向不平行還不夠。'],'\\(\\boldsymbol{v}_1,\\boldsymbol{v}_2\\) 不平行，\\(l_1,l_2\\)？',[
 ['可能相交，也可能異面','還要看 \\(\\boldsymbol{v}_1,\\boldsymbol{v}_2,\\overrightarrow{AB}\\) 是否共面',1],
 ['一定異面','概念錯誤：相交直線的方向也不平行'],
 ['一定相交','概念錯誤：忽略了異面的情況']
]),
S.stepper('3-5','跟著做：求公垂線段','跟著做：AB₁ 與 BC₁ 的距離',['棱長 1，D 為原點。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});const M=[1,2/3,2/3],N=[2/3,1,1/3];G3.steps(h,440,200,[
 {t:'\\(\\overrightarrow{AB_1}=(0,1,1)\\)，\\(\\overrightarrow{BC_1}=(-1,0,1)\\)',d:k=>F.base()+F.vec('A','B1',BLU,'',k)+F.vec('B','C1',GRN,'',k)},
 {t:'設 \\(M(1,t,t)\\)，\\(N(1-s,1,s)\\)，\\(\\overrightarrow{MN}=(-s,1-t,s-t)\\)',d:k=>F.dot(M,RED)+F.dot(N,RED)},
 {t:'兩個垂直：\\(1-2t+s=0\\)，\\(2s-t=0\\)，得 \\(t=\\tfrac23\\)，\\(s=\\tfrac13\\)',d:k=>F.seg(M,N,RED,4,'',k)},
 {t:'\\(\\overrightarrow{MN}=(-\\tfrac13,\\tfrac13,-\\tfrac13)\\)，距離 \\(\\dfrac{\\sqrt3}{3}\\)',d:k=>F.text(345,40,'√3/3',{c:RED})}
])}),
S.stepper('3-6','跟著做：判斷異面','跟著做：AB₁ 與 BC₁ 異面嗎？',['方向不平行，再看第三個向量。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'方向 \\((0,1,1)\\)，\\((-1,0,1)\\) 不是倍數，所以不平行',d:k=>F.base()+F.seg('A','B1',BLU,4)+F.seg('B','C1',GRN,4)},
 {t:'連接兩線上的點：\\(\\overrightarrow{AB}=(0,1,0)\\)',d:k=>F.vec('A','B',RED,'',k)},
 {t:'設它等於 \\(x\\boldsymbol{v}_1+y\\boldsymbol{v}_2\\)：得 \\(y=0\\)、\\(x=1\\)，z 分量卻矛盾',d:k=>F.text(345,40,'不共面',{c:RED})},
 {t:'三向量不共面，所以兩直線異面',d:k=>F.text(345,90,'異面',{c:RED})}
])},{formula:{label:'異面',tex:'l_1,l_2\\text{ 異面}\\Leftrightarrow\\boldsymbol{v}_1,\\boldsymbol{v}_2,\\overrightarrow{AB}\\text{ 不共面}'}}),
S.check('3-7','快問快答','快問快答：公垂線段',null,'正方體中，AB 與 A₁D₁ 的公垂線段是？',[
 ['AA₁','AA₁ 同時垂直 AB 與 A₁D₁，端點都在兩線上',1],
 ['AD','概念錯誤：D 不在 A₁D₁ 上'],
 ['BD₁','概念錯誤：不垂直 AB']
],{fig:miniCu})
  ]));
})();
