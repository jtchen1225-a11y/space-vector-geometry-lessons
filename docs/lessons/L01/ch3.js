/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para();
const Cu = G3.cube(1);
const miniPa = G3.mini(Pa), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：向量走進立體',null,'0 0 440 250',[
 {say:'喺平面度，向量有大小、有方向，可以用箭咀表示。',read:'喺平面度，向量有大小、有方向，可以用箭咀表示。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.seg('A','B',GRY,3)+F.seg('A','D',GRY,3)+F.seg('B','C',GRY,3)+F.seg('C','D',GRY,3)+F.vec('A','B',BLU,'a',k)}},
 {say:'將底面搬離開平面，向上拉高，就變成立體。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return ['A','B','C','D'].map(n=>F.seg(n,n+'1',INK,2.5,'',k)).join('')+(k>.9?F.base():'')}},
 {say:'兩個向量，例如 a 同 b，移埋一齊，一定可以放喺同一個平面。',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.fill(['A','B','C','D'],`rgba(37,99,235,${.2*k})`)+F.vec('A','D',GRN,'b',k)}},
 {say:'但係第三個向量 c 向上，就走出咗呢個平面。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.vec('A','A1',AMB,'c',k)}},
 {say:'咁三個向量加埋，終點會去到邊度？下一頁你自己試吓！',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.dot('C1',RED,6+6*k)+F.text(220,30,'a＋b＋c 去邊度？',{c:RED})}}
]),
S.slider('3-2','動手探索','三個向量首尾相接，終點在哪？',['先猜終點，再拖「段數」驗證。','拖「視角」從不同方向看。'],(h)=>G3.explore(h,{
 sl:[{id:'pn',label:'段數',min:0,max:3,step:1,value:1},{id:'paz',label:'視角',min:5,max:65,step:5,value:30,fmt:v=>v+'°'}],
 draw:v=>{const F=G3.frame(Pa,{W:440,H:240,az:v.paz});let s=F.base();
  if(v.pn>=1)s+=F.vec('A','B',BLU,'a',1,[-6,34]);if(v.pn>=2)s+=F.vec('B','C',GRN,'b',1,[18,26]);if(v.pn>=3)s+=F.vec('C','C1',AMB,'c')+F.vec('A','C1',RED);return F.show(s)},
 fx:v=>['\\(\\overrightarrow{AA}=\\boldsymbol{0}\\)','\\(\\boldsymbol{a}=\\overrightarrow{AB}\\)','\\(\\boldsymbol{a}+\\boldsymbol{b}=\\overrightarrow{AC}\\)','\\(\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}=\\overrightarrow{AC_1}\\)'][v.pn]
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['剛才的終點是哪一點？','用「體對角線」說一次。'],`平行六面體中，${vv('AB')}＋${vv('AD')}＋${vv('AA1')}＝？`,[
 [`${vv('AC1')}`,'三個向量共起點 A，和是由 A 出發的體對角線',1],
 [`${vv('AC')}`,'概念錯誤：只加了底面兩個向量'],
 [`${vv('BD1')}`,'概念錯誤：體對角線要由共同起點出發']
],{fig:miniPa}),
S.check('3-4','共面還是不共面','空間裏，幾個向量才可能不共面？',['向量可以平移。','共面看「平移後」能否同在一平面。'],'以下哪句一定正確？',[
 ['任意兩個向量都共面','平移到同一起點，兩條線段就確定一個平面（或在同一直線上）',1],
 ['任意三個向量都共面','概念錯誤：正方體一個頂點出發的三條棱就不共面'],
 ['所在直線異面的兩向量不共面','概念錯誤：向量可平移，直線不可以']
]),
S.stepper('3-5','跟著做：體對角線','跟著做：化簡 BA＋BC＋BB₁',['每一步說出理由。'],(h)=>{const F=G3.frame(Pa,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'畫出平行六面體，三個向量共起點 B',d:k=>F.base()+F.vec('B','A',BLU,'',k)+F.vec('B','C',GRN,'',k)+F.vec('B','B1',AMB,'',k)},
 {t:`底面是平行四邊形：${vv('BA')}＋${vv('BC')}＝${vv('BD')}`,d:k=>F.vec('B','D',VIO,'',k)},
 {t:`${vv('BB1')}＝${vv('DD1')}：相等向量可平移，接到 D`,d:k=>F.vec('D','D1',AMB,'',k)},
 {t:`首尾相接：${vv('BD')}＋${vv('DD1')}＝${vv('BD1')}`,d:k=>F.vec('B','D1',RED,'',k)}
])},{example:{q:`同一圖中化簡 ${vv('CB')}＋${vv('CD')}＋${vv('CC1')}。`,steps:[`${vv('CB')}＋${vv('CD')}＝${vv('CA')}`,`${vv('CC1')}＝${vv('AA1')}`],ans:`${vv('CA1')}`}}),
S.stepper('3-6','跟著做：中點','跟著做：中線向量怎樣寫？',['先把中點寫成向量式。'],(h)=>{const T=G3.solid({P:[.6,1,1.8],A:[1.6,0,0],B:[1.7,2.2,0],C:[-.2,1.6,0]},[['P','A','B'],['P','B','C'],['P','C','A'],['A','B','C']]);const F=G3.frame(T,{W:440,H:200,m:34,fs:38,extra:[[.75,1.9,0]]});const M=G3.mid(T.V.B,T.V.C);G3.steps(h,440,200,[
 {t:'三棱錐 P-ABC，M 是 BC 中點',d:k=>F.base()+F.dot(M,RED)+F.lab(M,'M',RED,[0,22])},
 {t:`M 是中點：${vv('AM')}＝½(${vv('AB')}＋${vv('AC')})`,d:k=>F.vec('A',M,VIO,'',k)},
 {t:`首尾相接：${vv('PA')}＋${vv('AM')}＝${vv('PM')}`,d:k=>F.vec('P','A',BLU,'',k)+F.vec('P',M,RED,'',k)}
])},{formula:{label:'中點公式',tex:'\\overrightarrow{OM}=\\tfrac12(\\overrightarrow{OA}+\\overrightarrow{OB})'}}),
S.check('3-7','快問快答','快問快答：數乘的方向',null,`\\(-3\\boldsymbol{a}\\) 與 ${bb('a')}（非零）的關係是？`,[
 ['方向相反，長度是 3 倍','\\(\\lambda<0\\) 時方向相反，長度乘 \\(|\\lambda|\\)',1],
 ['方向相同，長度是 3 倍','概念錯誤：忽略負號改變方向'],
 ['方向相反，長度不變','概念錯誤：把負號當成只改方向、忽略 3']
])
  ]));
})();
