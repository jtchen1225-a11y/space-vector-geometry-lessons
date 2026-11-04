/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pl = G3.plane('α',{w:1.8,d:1.5});
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：斜線和它的影子',null,'0 0 440 250',[
 {say:'由 A 點向平面落垂線，垂足 A 撇，就係 A 嘅射影。',read:'由 A 點向平面落垂線，垂足 A 撇，就係 A 嘅射影。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.base()+F.seg([.6,0,1.5],[.6,0,1.5-1.5*k],GRY,3,'6 5')+F.dot([.6,0,1.5],BLU)+(k>.8?F.dot([.6,0,0],BLU):'')}},
 {say:'連接斜足 B 同 A 撇，就係斜線 AB 喺平面入面嘅射影。',read:'連接斜足 B 同 A 撇，就係斜線 AB 喺平面入面嘅射影。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.seg([-.6,0,1e-6],[.6,0,1.5],BLU,4)+F.seg([-.6,0,0],[.6,0,0],GRN,5,'',k)}},
 {say:'喺平面畫一條線，轉吓佢嘅方向，留意佢同影子嘅關係。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});const t=k*1.57;return F.seg([-.6-Math.sin(t),Math.cos(t)*1,0],[-.6+Math.sin(t),-Math.cos(t)*1,0],RED,5)}},
 {say:'當條線垂直影子嗰陣，佢同斜線又係點？下一頁試吓！',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.text(220,34,'垂直斜線？',{c:RED})}}
]),
S.slider('3-2','動手探索','轉動地上的線，比較兩個數量積',['先猜：何時兩者同時為 0？','拖滑桿驗證。'],(h)=>G3.explore(h,{
 sl:[{id:'lf',label:'方向',min:0,max:120,step:15,value:45,fmt:v=>v+'°'}],
 draw:v=>{const F=G3.frame(Pl,{W:440,H:210,m:18,el:24,fs:34,extra:[[.9,0,1.5]]});const t=v.lf*Math.PI/180,B=[-.9,0,0],L=[Math.cos(t),Math.sin(t),0],pm=(k)=>G3.add(B,G3.mul(L,k));return F.show(F.base(),F.seg(B,[.9,0,1.5],BLU,5),F.seg(B,[.9,0,0],GRN,5),F.seg([.9,0,1.5],[.9,0,0],GRY,3,'6 5'),F.seg(pm(-.9),pm(.9),RED,5))},
 fx:v=>{const t=v.lf*Math.PI/180,c=1.8*Math.cos(t);const z=Math.abs(c)<1e-9?0:c;return `\\(\\boldsymbol{l}\\cdot\\text{影子}=${z.toFixed(2)}\\)，\\(\\boldsymbol{l}\\cdot\\text{斜線}=${z.toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['兩個數量積一直相等！'],'平面內的 \\(l\\) 垂直斜線的射影時，\\(l\\) 與斜線？',[
 ['也垂直','兩個數量積相等，同時為 0',1],
 ['不一定垂直','概念錯誤：剛才兩個值一直相等'],
 ['一定平行','概念錯誤：與結果相反']
]),
S.check('3-4','找射影','斜線的射影是哪一條？',['先找垂直平面的直線。'],'正方體中，BD₁ 在平面 ADD₁A₁ 內的射影是？',[
 ['AD₁','AB⊥平面 ADD₁A₁，B 的射影是 A',1],
 ['DD₁','概念錯誤：B 的射影不是 D'],
 ['BD','概念錯誤：BD 不在這個平面內']
],{fig:miniCu}),
S.stepper('3-5','跟著做：向量證明','跟著做：用向量證明定理',['\\(\\boldsymbol{v}\\) 是平面內直線 \\(l\\) 的方向向量。'],(h)=>{const F=G3.frame(Pl,{W:440,H:200,m:18,fs:38,extra:[[.9,0,1.5]]});const B=[-.9,0,0],A=[.9,0,1.5],Ap=[.9,0,0];G3.steps(h,440,200,[
 {t:'A′A 垂直平面，所以 \\(\\overrightarrow{A\'A}\\cdot\\boldsymbol{v}=0\\)',d:k=>F.base()+F.seg(A,Ap,GRY,3,'6 5')+F.lab(A,'A',BLU,[10,-22])+F.lab(Ap,"A'",GRN,[20,12])+F.lab(B,'B',BLU,[-12,16])},
 {t:'\\(\\overrightarrow{BA}=\\overrightarrow{BA\'}+\\overrightarrow{A\'A}\\)',d:k=>F.seg(B,A,BLU,5,'',k)+F.seg(B,Ap,GRN,5,'',k)},
 {t:'\\(\\boldsymbol{v}\\cdot\\overrightarrow{BA}=\\boldsymbol{v}\\cdot\\overrightarrow{BA\'}+0\\)',d:k=>F.seg([-.9,-1,0],[-.9,1,0],RED,5)},
 {t:'所以 \\(\\boldsymbol{v}\\perp\\overrightarrow{BA\'}\\Leftrightarrow\\boldsymbol{v}\\perp\\overrightarrow{BA}\\)：定理與逆定理同時成立',d:k=>F.text(345,44,'⇔',{c:RED})}
])},{formula:{label:'三垂線定理',tex:'l\\subset\\alpha:\\ l\\perp A\'B\\Leftrightarrow l\\perp AB'}}),
S.stepper('3-6','跟著做：證線線垂直','跟著做：證 AC⊥BD₁',['正方體 ABCD-A₁B₁C₁D₁。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'DD₁ 垂直底面，所以 BD₁ 在底面的射影是 BD',d:k=>F.base()+F.seg('B','D1',BLU,4,'',k)+F.seg('B','D',GRN,4,'',k)},
 {t:'底面是正方形，對角線互相垂直：AC⊥BD',d:k=>F.seg('A','C',RED,4,'',k)},
 {t:'AC 在底面內且垂直射影，所以 AC⊥BD₁',d:k=>F.text(345,40,'AC⊥BD₁',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：定理怎樣用？',null,'要用三垂線定理證 \\(l\\perp AB\\)，應先證？',[
 ['\\(l\\) 在平面內，且 \\(l\\) 垂直 AB 的射影','定理的兩個條件',1],
 ['\\(l\\) 垂直平面','概念錯誤：那樣不需要定理'],
 ['AB 垂直平面','概念錯誤：AB 是斜線，不垂直平面']
])
  ]));
})();
