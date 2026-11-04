/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Roof = (()=>{const r=G3.solid({A:[2,0,0],B:[0,2,0],Cc:[0,0,1]},[['A','B','Cc']],true);return r})();
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：投影到法向量',null,'0 0 440 250',[
 {say:'由平面外嘅點 A，落一條垂線去平面，長度就係距離。',dur:5,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.base()+F.dot([.6,0,1.5],RED)+F.seg([.6,0,1.5],[.6,0,1.5-1.5*k],GRY,3,'6 5')}},
 {say:'但係垂足好多時都好難搵。',dur:4,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.text(330,36,'好難搵！',{c:RED})}},
 {say:'喺平面上面隨便揀一點 B，連接 BA。',dur:4,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.vec([-.8,-1,0],[.6,0,1.5],BLU,'',k)}},
 {say:'將 BA 投影落法向量，會得到幾多？下一頁試吓！',dur:5,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.vec([-.8,-1,0],[-.8,-1,1.5],GRN,'n',k,[-22,0])}}
]),
S.slider('3-2','動手探索','換一個 B，投影會變嗎？',['B 在屋頂上移動。','先猜：距離會變嗎？'],(h)=>G3.explore(h,{
 sl:[{id:'bu',label:'沿 AB',min:0,max:1,step:.25,value:0},{id:'bw',label:'沿 AC',min:0,max:1,step:.25,value:0}],
 draw:v=>{const F=G3.frame(Roof,{W:440,H:190,m:22,fs:34,extra:[[1,1,2]]});const A=[2,0,0],q=(()=>{let u=v.bu,w=v.bw;if(u+w>1){const s=u+w;u/=s;w/=s;}return G3.add(G3.add(A,G3.mul([-2,2,0],u)),G3.mul([-2,0,1],w))})();return F.show(F.fill(['A','B','Cc'],'rgba(37,99,235,.15)'),F.base({labels:false}),F.vec(q,[1,1,2],BLU),F.dot(q,GRN),F.dot([1,1,2],RED,8))},
 fx:v=>{let u=v.bu,w=v.bw;if(u+w>1){const s=u+w;u/=s;w/=s;}const B=[2-2*u-2*w,2*u,w],BA=[1-B[0],1-B[1],2-B[2]],d=BA[0]+BA[1]+2*BA[2];return `\\(\\overrightarrow{BA}\\cdot\\boldsymbol{n}=${d.toFixed(2)}\\)，\\(d=\\dfrac{${d.toFixed(0)}}{\\sqrt6}\\approx${(d/Math.sqrt(6)).toFixed(3)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['B 移動時，哪個數不變？'],'A 到平面的距離，等於？',[
 ['\\(\\dfrac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}\\)','\\(\\overrightarrow{BA}\\) 在法向量上投影數量的絕對值',1],
 ['\\(|\\overrightarrow{BA}|\\)','概念錯誤：BA 一般不垂直平面'],
 ['\\(|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|\\)','程序錯誤：\\(\\boldsymbol{n}\\) 不是單位向量時要除以長度']
]),
S.check('3-4','選哪一點','B 應該怎樣選？',['想想計算量。'],'公式中的 B 可以是？',[
 ['平面內任意一點','投影數量都一樣，選坐標最簡單的',1],
 ['一定要是垂足','概念錯誤：公式的好處是不用垂足'],
 ['一定要是原點','概念錯誤：原點不一定在平面內']
]),
S.stepper('3-5','跟著做：點到平面','跟著做：D 到平面 PBC',['PA⊥正方形 ABCD，PA＝AB＝2，A 為原點。'],(h)=>{const T=G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);const F=G3.frame(T,{W:440,H:200,m:34,fs:38,az:-55,el:20});G3.steps(h,440,200,[
 {t:'\\(\\overrightarrow{BC}=(0,2,0)\\)，\\(\\overrightarrow{BP}=(-2,0,2)\\)',d:k=>F.base()+F.fill(['P','B','C'],'rgba(37,99,235,.18)')},
 {t:'法向量：\\(y=0\\)，\\(-x+z=0\\)，\\(\\boldsymbol{n}=(1,0,1)\\)',d:k=>F.text(350,40,'n',{c:VIO})},
 {t:'取平面內的 P：\\(\\overrightarrow{PD}=(0,2,-2)\\)',d:k=>F.vec('P','D',RED,'',k)},
 {t:'\\(d=\\dfrac{|-2|}{\\sqrt2}=\\sqrt2\\)',d:k=>F.text(350,88,'√2',{c:RED})}
])},{formula:{label:'點面距離',tex:'d=\\frac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}'}}),
S.stepper('3-6','跟著做：平行平面','跟著做：平面 A₁BD 與平面 CB₁D₁',['棱長 2 的正方體，D 為原點。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'兩平面的法向量都是 \\(\\boldsymbol{n}=(1,-1,-1)\\)，所以平行',d:k=>F.base()+F.fill(['A1','B','D'],'rgba(37,99,235,.18)')+F.fill(['C','B1','D1'],'rgba(5,150,105,.18)')},
 {t:'距離歸結為點面距離：各取一點 D、C',d:k=>F.vec('D','C',RED,'',k)},
 {t:'\\(\\overrightarrow{DC}=(0,2,0)\\)，\\(d=\\dfrac{|-2|}{\\sqrt3}=\\dfrac{2\\sqrt3}{3}\\)',d:k=>F.text(350,40,'2√3/3',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：最簡單的情況',null,'P(1,2,3) 到平面 xOy 的距離是？',[
 ['3','\\(|z|\\)',1],
 ['\\(\\sqrt{14}\\)','概念錯誤：這是到原點的距離'],
 ['1','概念錯誤：這是到 yOz 的距離']
])
  ]));
})();
