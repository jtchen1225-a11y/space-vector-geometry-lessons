//@meta
{
  id: 1, type: 'new', unit: '1.1.1 空間向量及其線性運算', pdf: '2–8',
  topic: '空間向量的概念與線性運算',
  goal: '能把平面向量的加、減、數乘推廣到空間，並在平行六面體中化簡向量和',
  prior: '平面向量的概念、三角形法則與平行四邊形法則、數乘',
  focus: '任意兩個空間向量都共面，所以平面的運算法則可以直接用；三個向量的和是平行六面體的體對角線',
  difficulty: '分辨「向量共面」與「直線異面」；減法的方向',
  boundary: '夾角、數量積（下一節）；共面向量定理與基底（L03、L04）；坐標（L06）',
  reveal: '三段位移首尾相接，和向量是長方體的體對角線，長 13 m，不是 19 m。',
  priorMap: [
    ['平面向量加法（三角形、平行四邊形法則）', '空間中兩向量先平移到同一平面再相加', '1-2 熱身題', '用 1-2 的 A 層提示，在紙上畫一次首尾相接'],
    ['相反向量與減法', '\\(\\overrightarrow{OA}-\\overrightarrow{OB}=\\overrightarrow{BA}\\)', '1-3 快問、5-1 抓錯', '回到「差向量指向被減數」的作圖'],
    ['長方體、平行六面體的認識', '在立體圖中辨認相等向量與體對角線', '3-2 動手探索', '用紙盒實物指出棱與對角線'],
  ],
  deep: ['平面內向量可加減、可數乘，三角形與平行四邊形法則。', '運算法則完全不變，因為任意兩向量可平移到同一平面；新增「共面」的觀念，以及三個不共面向量的和等於平行六面體體對角線。', 'L02 夾角與數量積；L03、L04 用共面與基底表示所有空間向量；L10 起用向量描述直線與平面。'],
  spaced: [
    ['首尾相接與體對角線', '下一節（L02）', '在長方體中先化簡向量再求數量積'],
    ['中點公式 \\(\\overrightarrow{OM}=\\frac12(\\overrightarrow{OA}+\\overrightarrow{OB})\\)', '約一週後（L05）', '在四面體中以基底表示中線向量；延遲檢測'],
    ['共面與異面的分別', '約一個月後（L11）', '判斷異面直線時用三向量不共面'],
  ],
}
//@assert
eq(len([3,4,12]),13,'懸念：位移長度');
eq(3+4+12,19,'懸念：路程');
// 4-1 C 層：PG=⅓(PA+PB+PC)；任取一組點檢查
const P=[1,2,3],A=[4,0,1],B=[0,5,2],Cc=[3,3,7];
const M=mid(B,Cc), Gp=add(A,mul(sub(M,A),2/3));
eq(sub(Gp,P),mul(add(add(sub(A,P),sub(B,P)),sub(Cc,P)),1/3),'4-1C');
// 6-1 出口題：AM=c+½(a+b)
const a=[2,0,0],b=[0,3,0],c=[1,1,4],A1=c,B1=add(a,c),C1=add(b,c);
eq(mid(B1,C1),add(c,mul(add(a,b),.5)),'出口題');
// 5-3 C 層：MN=½(AD+BC)
const Ad=[1,1,0],Bd=[4,0,2],Cd=[2,5,1],Dd=[0,3,6];
eq(sub(mid(Cd,Dd),mid(Ad,Bd)),mul(add(sub(Dd,Ad),sub(Cd,Bd)),.5),'5-3C');
// 5-3 B 層 2(a−b)+3(a+2b)=5a+4b
eq(add(mul(sub(a,b),2),mul(add(a,mul(b,2)),3)),add(mul(a,5),mul(b,4)),'5-3B');
// 3-3：AB+AD+AA1=AC1；4-1 B：AB−AD+AA1=DB1
const pr=G.para(); const Vp=pr.V;
eq(add(add(sub(Vp.B,Vp.A),sub(Vp.D,Vp.A)),sub(Vp.A1,Vp.A)),sub(Vp.C1,Vp.A),'3-3');
eq(add(sub(sub(Vp.B,Vp.A),sub(Vp.D,Vp.A)),sub(Vp.A1,Vp.A)),sub(Vp.B1,Vp.D),'4-1B');
// 3-5：BA+BC+BB1=BD1
eq(add(add(sub(Vp.A,Vp.B),sub(Vp.C,Vp.B)),sub(Vp.B1,Vp.B)),sub(Vp.D1,Vp.B),'3-5');
//@shared
const Pa = G3.para();
const Cu = G3.cube(1);
const miniPa = G3.mini(Pa), miniCu = G3.mini(Cu);
//@ch 1
S.goals('1-1','今天的任務','平面向量搬到空間，會變嗎？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說出空間向量與平面向量的異同','分辨向量共面與直線異面','用首尾相接化簡空間向量的和','在平行六面體中找出體對角線向量']}),
S.tasks('1-2','熱身題','先在平面上熱身',['平行四邊形 ABCD，動筆算。','選一層開始，做完往上挑戰。'],[
 [`${vv('AB')}＋${vv('BC')}＝？`,['起點接終點：第二個向量的起點是 B。','首尾相接，由第一個起點指向最後的終點。'],`${vv('AC')}`],
 [`${vv('AB')}＋${vv('AD')}＝？`,['\\(\\overrightarrow{AD}\\) 與 \\(\\overrightarrow{BC}\\) 相等。'],`${vv('AC')}（平行四邊形法則）`],
 [`為甚麼 ${vv('AB')}＝${vv('DC')} 就能說明 ABCD 是平行四邊形？`,null,'AB 與 DC 平行且相等，一組對邊平行且相等的四邊形是平行四邊形']
]),
S.check('1-3','舊知識快問','舊知識快問：差向量指向哪裏？',null,`${vv('OA')}－${vv('OB')}＝？`,[
 [`${vv('BA')}`,'共起點相減，差向量由減數的終點指向被減數的終點',1],
 [`${vv('AB')}`,'程序錯誤：方向反了'],
 [`${vv('OC')}，C 是 AB 中點`,'概念錯誤：把差當成平均']
]),
//@ch 2
S.hook('2-1','猜一猜','無人機直飛，要飛多遠？',null,{
 pic: (()=>{const B=G3.box(1.2,1.6,1.9),F=G3.frame(B,{W:440,H:190,m:30,el:16});return F.show(F.base({labels:false}),F.vec('D','A',BLU),F.vec('A','B',GRN),F.vec('B','B1',AMB))})(),
 story:'無人機由起點向東飛 4 m、向北飛 3 m，再垂直上升 12 m。',
 guess:['直飛也是 19 m','比 19 m 短，但算不到','比 19 m 短，而且算得到','還不確定'],
 ask:'三段不在同一平面，它們的「和」是甚麼？有多長？',
 later:'學完今天的向量加法，你就能指出這條路線！'
}),
//@ch 3
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
]),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['圖是長方體／平行六面體。','先寫向量，再寫理由。'],7,['把減法方向寫反（程序）','把三向量的和寫成底面對角線（概念）','沒用相等向量平移就硬加（程序）'],[
 [`長方體中，${vv('AA1')}＋${vv('A1B1')}＋${vv('B1C1')}＝？`,['看看每個向量的起點是否接著上一個終點。','首尾相接：起點 A，終點 C₁。'],`${vv('AC1')}`],
 [`平行六面體中，化簡 ${vv('AB')}－${vv('AD')}＋${vv('AA1')}`,['先算共起點的減法。',`${vv('AB')}－${vv('AD')}＝${vv('DB')}`,`再把 ${vv('AA1')} 換成 ${vv('BB1')}。`],`${vv('DB1')}`],
 [`三棱錐 P-ABC，M 為 BC 中點，AG＝2GM，用 ${vv('PA')}、${vv('PB')}、${vv('PC')} 表示 ${vv('PG')}`,['先寫 AM，再取三分之二。'],`⅓(${vv('PA')}＋${vv('PB')}＋${vv('PC')})`]
]),
S.check('4-2','合理嗎？','合理嗎？相等向量可以這樣換',['想一想圖中哪些棱相等。'],`平行六面體中，${vv('AA1')} 不等於哪一個？`,[
 [`${vv('C1C')}`,'方向相反：它是 \\(-\\overrightarrow{AA_1}\\)',1],
 [`${vv('BB1')}`,'相等：平行、同向、等長'],
 [`${vv('DD1')}`,'相等：平行、同向、等長']
],{fig:miniPa}),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：這個差對嗎？',null,{q:`四棱錐 O-ABCD 中，化簡 ${vv('OB')}－${vv('OD')}。`,steps:[`${vv('OB')}－${vv('OD')}＝${vv('BD')}`],wrong:0,why:'程序錯誤：差向量要由「減數」指向「被減數」，方向寫反。',fix:`${vv('OB')}－${vv('OD')}＝${vv('DB')}`}),
S.mistake('5-2','再抓一次','再抓一次：向量與直線',null,{q:`正方體中，${vv('AA1')} 與 ${vv('B1C1')} 共面嗎？`,steps:['直線 AA₁ 與 B₁C₁ 是異面直線','所以兩條直線不在同一平面','所以這兩個向量不共面'],wrong:2,why:'概念錯誤：把直線的位置當成向量的位置。向量可以平移，任意兩向量都共面。',fix:`把 ${vv('B1C1')} 平移成 ${vv('AD')}，與 ${vv('AA1')} 同在平面 ADD₁A₁ 內，所以共面。`},{fig:miniCu}),
S.tasks('5-3','升級挑戰','升級挑戰：共面與化簡',['圖是正方體。','先判斷，再說理由。'],[
 [`正方體中，${vv('AB')}、${vv('BC')}、${vv('A1D1')} 共面嗎？`,[`把 ${vv('A1D1')} 平移到底面。`,`${vv('A1D1')}＝${vv('AD')}，三個都在底面。`],'共面'],
 [`化簡 \\(2(\\boldsymbol{a}-\\boldsymbol{b})+3(\\boldsymbol{a}+2\\boldsymbol{b})\\)`,['像代數式一樣拆括號。','\\(\\boldsymbol{a}\\) 的係數：2＋3。'],`\\(5\\boldsymbol{a}+4\\boldsymbol{b}\\)`],
 [`空間四邊形 ABCD，M、N 為 AB、CD 中點，說明 ${vv('MN')}＝½(${vv('AD')}＋${vv('BC')})`,null,`${vv('MN')}＝${vv('MA')}＋${vv('AD')}＋${vv('DN')}，又＝${vv('MB')}＋${vv('BC')}＋${vv('CN')}，兩式相加，中點的向量互相抵消，得 2${vv('MN')}＝${vv('AD')}＋${vv('BC')}`]
],{fig:miniCu}),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:`三棱柱 ABC-A₁B₁C₁，M 是 B₁C₁ 中點。設 ${vv('AB')}＝${bb('a')}、${vv('AC')}＝${bb('b')}、${vv('AA1')}＝${bb('c')}，用它們表示 ${vv('AM')}。`,
 ans:`\\(\\overrightarrow{AM}=\\boldsymbol{c}+\\tfrac12(\\boldsymbol{a}+\\boldsymbol{b})\\)`,
 rubric:{mastered:'首尾相接並正確用中點公式 → 下一節直接進入夾角與數量積',partial:'路線正確但係數或符號有誤 → 下一節起步題再做一次中點公式',notyet:'未能把向量接起來或把和當成長度和 → 小組回到實物紙盒重做首尾相接'},
 delayed:{when:'約一週後',q:`四面體 O-ABC，D 是 AB 中點，用 ${vv('OA')}、${vv('OB')}、${vv('OC')} 表示 ${vv('CD')}。`,ans:`½(${vv('OA')}＋${vv('OB')})－${vv('OC')}`}
}),
S.goals('6-2','懸念解開','懸念解開：無人機的直線路線',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['三段位移首尾相接，和向量就是直飛路線','它是長方體的體對角線，不是三段長度相加','\\(\\sqrt{4^2+3^2+12^2}=13\\)，所以只要 13 m，不是 19 m']}),
S.summary('6-3',null,['任意兩個空間向量都共面，加減數乘法則與平面相同','首尾相接：和向量由第一個起點指向最後的終點','三個不共面向量的和＝平行六面體的體對角線','中點公式：\\(\\overrightarrow{OM}=\\tfrac12(\\overrightarrow{OA}+\\overrightarrow{OB})\\)'])
