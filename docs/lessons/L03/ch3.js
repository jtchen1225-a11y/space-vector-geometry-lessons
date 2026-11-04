/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), Pr = G3.solid({A:[1.6,0,0],B:[1.2,2.2,0],C:[-.4,1,0],A1:[1.9,.5,1.7],B1:[1.5,2.7,1.7],C1:[-.1,1.5,1.7]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：平面裏的向量',null,'0 0 440 250',[
 {say:'兩個唔共線嘅向量 a 同 b，由同一點出發，就定咗一個平面。',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.fill(['A','B','C','D'],'rgba(37,99,235,.14)')+F.vec('A','B',BLU,'a',k,[0,34])+F.vec('A','D',GRN,'b',k,[20,30])}},
 {say:'將 a 拉長 x 倍，將 b 拉長 y 倍，再加埋，會去到邊度？',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.vec('A',G3.lerp(Pa.V.A,Pa.V.C,.8),RED,'',k)}},
 {say:'無論 x 同 y 係幾多，個終點都喺呢個平面入面。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.text(220,40,'都在平面內！',{c:RED})}},
 {say:'咁反過嚟，平面入面任何向量，係咪都可以咁樣寫出嚟？下一頁試吓！',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.text(220,84,'反過來呢？',{c:VIO})}}
]),
S.slider('3-2','動手探索','拖 x、y，終點會離開平面嗎？',['先猜：能走出藍色平面嗎？','拖滑桿驗證。'],(h)=>G3.explore(h,{
 sl:[{id:'sx',label:'x',min:-1,max:2,step:.5,value:1},{id:'sy',label:'y',min:-1,max:2,step:.5,value:.5}],
 draw:v=>{const Pl=G3.solid({P1:[1.3,-1.3,0],P2:[1.3,2.6,0],P3:[-2.5,2.6,0],P4:[-2.5,-1.3,0]},[['P1','P2','P3','P4']],true);Pl.flat=true;Pl.nm='';const F=G3.frame(Pl,{W:440,H:210,m:12,el:32,az:18,extra:[[0,0,.9]]});const a=[0,1.1,0],b=[-1.1,.25,0],O=[0,0,0],xa=G3.mul(a,v.sx),yb=G3.mul(b,v.sy),Pt=G3.add(xa,yb);
  return F.show(F.base(),F.vec(O,xa,BLU,''),F.vec(xa,Pt,GRN,''),F.vec(O,Pt,RED,'c',1,[6,-12]),F.vec(O,[0,0,.9],GRY,'',1))},
 fx:v=>`\\(\\boldsymbol{c}=${v.sx}\\boldsymbol{a}+(${v.sy})\\boldsymbol{b}\\)，仍在平面內`
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['用 x、y 說一次。'],'\\(\\boldsymbol{a},\\boldsymbol{b}\\) 不共線，\\(\\boldsymbol{c}=2\\boldsymbol{a}-3\\boldsymbol{b}\\)，三向量？',[
 ['一定共面','能寫成 \\(x\\boldsymbol{a}+y\\boldsymbol{b}\\)，就與 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 共面',1],
 ['一定不共面','概念錯誤：係數是負數也一樣在平面內'],
 ['要知道長度才能判斷','概念錯誤：判斷共面只看線性關係']
]),
S.check('3-4','定理的前提','定理為甚麼要說「不共線」？',['試想 a、b 同一方向。'],'\\(\\boldsymbol{a}\\parallel\\boldsymbol{b}\\) 時，與它們共面的 \\(\\boldsymbol{c}\\) 一定能寫成 \\(x\\boldsymbol{a}+y\\boldsymbol{b}\\) 嗎？',[
 ['不一定','共線時 \\(x\\boldsymbol{a}+y\\boldsymbol{b}\\) 只能走在一條直線上',1],
 ['一定可以','概念錯誤：忽略定理前提'],
 ['只有 \\(\\boldsymbol{c}=\\boldsymbol{0}\\) 才可以','概念錯誤：與 \\(\\boldsymbol{a}\\) 平行的 \\(\\boldsymbol{c}\\) 也可以']
]),
S.stepper('3-5','跟著做：三向量共面','跟著做：證明 MN、a、c 共面',['斜三棱柱：AM＝⅓AC₁，BN＝⅓BC。'],(h)=>{const F=G3.frame(Pr,{W:440,H:200,m:34,fs:38});const V=Pr.V,M=G3.lerp(V.A,V.C1,1/3),N=G3.lerp(V.B,V.C,1/3);G3.steps(h,440,200,[
 {t:`設 ${vv('AB')}＝a，${vv('AC')}＝b，${vv('AA1')}＝c`,d:k=>F.base()+F.vec('A','B',BLU,'',k)+F.vec('A','C',GRN,'',k)+F.vec('A','A1',AMB,'',k)},
 {t:`${vv('AM')}＝⅓(b＋c)`,d:k=>F.seg('A','C1',GRY,2.5,'6 5')+F.dot(M,RED)+F.lab(M,'M',RED,[-4,-22])},
 {t:`${vv('AN')}＝a＋⅓(b－a)＝⅔a＋⅓b`,d:k=>F.dot(N,RED)+F.lab(N,'N',RED,[6,16])},
 {t:`${vv('MN')}＝${vv('AN')}－${vv('AM')}＝⅔a－⅓c，所以共面`,d:k=>F.vec(M,N,RED,'',k)}
])}),
S.stepper('3-6','跟著做：四點共面','跟著做：點在平面上嗎？',['先把向量都寫成同一起點。'],(h)=>{const F=G3.frame(Pa,{W:440,H:200,m:34,fs:38});const V=Pa.V,Pp=G3.add(V.A,G3.add(G3.sbt(V.B,V.A),G3.mul(G3.sbt(V.D,V.A),.5)));G3.steps(h,440,200,[
 {t:'A、B、D 不共線，它們確定底面',d:k=>F.base()+F.fill(['A','B','D'],'rgba(37,99,235,.2)')},
 {t:`給定 ${vv('AP')}＝${vv('AB')}＋½${vv('AD')}`,d:k=>F.vec('A',Pp,RED,'',k)+F.dot(Pp,RED)+F.lab(Pp,'P',RED,[12,-10])},
 {t:'能寫成 x、y 的線性組合，所以 P 在平面 ABD 內',d:k=>F.text(330,44,'P 共面',{c:RED})}
])},{formula:{label:'四點共面',tex:'\\overrightarrow{AP}=x\\overrightarrow{AB}+y\\overrightarrow{AC}'}}),
S.check('3-7','快問快答','快問快答：能寫成線性組合嗎？',null,'\\(\\boldsymbol{p}=\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{q}=\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(\\boldsymbol{a}\\) 與它們共面嗎？',[
 ['共面','\\(\\boldsymbol{a}=\\tfrac12\\boldsymbol{p}+\\tfrac12\\boldsymbol{q}\\)',1],
 ['不共面','概念錯誤：只看字母不同就判定不共面'],
 ['不能判斷','程序錯誤：沒嘗試把 \\(\\boldsymbol{a}\\) 用 \\(\\boldsymbol{p},\\boldsymbol{q}\\) 表示']
])
  ]));
})();
