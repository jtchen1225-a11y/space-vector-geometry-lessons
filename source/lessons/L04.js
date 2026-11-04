//@meta
{
  id: 4, type: 'new', unit: '1.1.2 空間向量基本定理', pdf: '14–16',
  topic: '空間向量基本定理與基底',
  goal: '能選定基底，把空間向量寫成 xa＋yb＋zc，並用基底計算數量積',
  prior: 'L03 共面向量定理、L02 數量積、L01 首尾相接',
  focus: '三個不共面的向量可以生成所有空間向量，而且表示法唯一',
  difficulty: '找出由起點到終點的路線並寫對正負號；用基底展開時要用已知夾角',
  boundary: '單位正交基底與坐標（L06）',
  reveal: '兩個方向只能在同一平面移動；要到達空間任何一點，至少要三個不共面的方向。',
  priorMap: [
    ['共面向量定理', '判斷三個向量能否作基底', '1-3 快問', '回到 L03 的 3-2 互動'],
    ['首尾相接', '由路線寫出分解式', '1-2 熱身題、3-5', '先走路線再換字母'],
    ['數量積', '用基底展開求數量積', '3-6', '先做 L02 3-6 的展開'],
  ],
  deep: ['兩個不共線向量可以表示平面內所有向量。', '多一個不共面向量，就能表示整個空間，而且只有一種表示法；複雜圖形的計算可以全部歸結為基底之間的長度和夾角。', 'L06 取互相垂直的單位基底就得到坐標；L10 起用基底或坐標求角與距離。'],
  spaced: [
    ['基底表示', '下一節（L05）', '在四面體和三棱柱中以不同基底表示'],
    ['用基底算數量積', '約一週後（L05、延遲檢測）', '換夾角條件'],
    ['基底與坐標的關係', '約一個月後（L09）', '比較基底法與坐標法'],
  ],
}
//@assert
const P=G.para().V,a=sub(P.B,P.A),b=sub(P.D,P.A),c=sub(P.A1,P.A);
eq(sub(P.D1,P.B),add(add(mul(a,-1),b),c),'5-1 BD1');
eq(sub(P.C,P.A1),sub(add(a,b),c),'4-1A');
const E=mid(P.A1,P.C1); eq(sub(E,P.A),add(c,add(mul(a,.5),mul(b,.5))),'3-5 AE');
// 3-6：BA=3,BC=2,BB1=2,∠ABC=60°，BB1⊥底面
const BA=[3,0,0],BC=[2*Math.cos(Math.PI/3),2*Math.sin(Math.PI/3),0],BB=[0,0,2];
eq(dot(add(mul(BA,-1),BB),add(BC,BB)),1,'3-6');
// 4-1B OE
const OA=[1,0,0],OB=[0,1,0],OC=[0,0,1],Dd=mid(OA,OB),Ee=mid(OC,Dd); eq(Ee,[.25,.25,.5],'4-1B');
// 出口 BM=−a+c+½b
const M=mid(P.A1,P.D1); eq(sub(M,P.B),add(add(mul(a,-1),c),mul(b,.5)),'出口');
// 延遲 EF=½AC+½AD−½AB
const A0=[0,0,0],B0=[2,0,0],C0=[0,3,0],D0=[0,0,4]; eq(sub(mid(C0,D0),mid(A0,B0)),add(add(mul(C0,.5),mul(D0,.5)),mul(B0,-.5)),'延遲');
//@shared
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Prm = G3.solid({A:[2,.2,0],B:[.4,.2,0],C:[.9,1.9,0],A1:[2,.2,1.5],B1:[.4,.2,1.5],C1:[.9,1.9,1.5]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
//@ch 1
S.goals('1-1','今天的任務','幾個方向，才能走遍空間？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說出空間向量基本定理','判斷三個向量能否作基底','把向量寫成 \\(x\\boldsymbol{a}+y\\boldsymbol{b}+z\\boldsymbol{c}\\)','用基底計算數量積']}),
S.tasks('1-2','熱身題','先走一條路線',['圖是平行六面體。','選一層開始。'],[
 [`把 ${vv('AC1')} 寫成三段首尾相接的向量`,['由 A 出發，先到底面的 C。','再由 C 向上到 C₁。'],`${vv('AB')}＋${vv('BC')}＋${vv('CC1')}`],
 [`${vv('BC')}、${vv('CC1')} 分別等於從 A 出發的哪條棱？`,['找平行、同向、等長的棱。'],`${vv('AD')}、${vv('AA1')}`],
 [`路線不同，結果會不同嗎？試用另一條路線到 C₁。`,null,`不會，例如 ${vv('AD')}＋${vv('DD1')}＋${vv('D1C1')}，結果相同`]
],{fig:miniPa}),
S.check('1-3','舊知識快問','舊知識快問：三向量不共面',null,`正方體中，哪三個向量不共面？`,[
 [`${vv('AB')}、${vv('AD')}、${vv('AA1')}`,'A₁ 不在底面內',1],
 [`${vv('AB')}、${vv('BC')}、${vv('AC')}`,'都在底面內，共面'],
 [`${vv('AB')}、${vv('DC')}、${vv('AA1')}`,'AB 與 DC 相等，只有兩個方向，共面']
]),
//@ch 2
S.hook('2-1','猜一猜','遙控無人機，要幾個方向掣？',null,{
 pic:G3.wrap(440,180,`<ellipse cx="220" cy="90" rx="42" ry="16" fill="rgba(37,99,235,.2)" stroke="${BLU}" stroke-width="3"/>`+G3.arw(220,90,350,90,BLU)+G3.arw(220,90,130,150,GRN)+G3.arw(220,90,220,12,AMB)),
 story:'無人機只有「前後」和「左右」兩個掣，能飛到房間裏任何一點嗎？',
 guess:['兩個掣已經足夠','一定要三個方向','要四個或更多','還不確定'],
 ask:'最少要幾個方向，才足以到達空間任何一點？',
 later:'學完基本定理，你就知道答案！'
}),
//@ch 3
S.anim('3-1','粵語動畫','看動畫：三把尺度量空間',null,'0 0 440 250',[
 {say:'有兩個方向，只可以喺一個平面入面行。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.fill(['A','B','C','D'],'rgba(37,99,235,.14)')+F.vec('A','B',BLU,'a',k,[0,34])+F.vec('A','D',GRN,'b',k,[20,30])}},
 {say:'加第三個唔喺呢個平面嘅方向，就可以離開平面。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.vec('A','A1',AMB,'c',k,[-22,0])}},
 {say:'行 x 格 a，再行 y 格 b，再行 z 格 c，就到咗一個新位置。',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.vec('A','C1',RED,'p',k,[0,-14])}},
 {say:'究竟咁樣可以去晒空間每一點，同埋方法係咪得一個？下一頁試吓！',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.text(220,36,'只有一種走法？',{c:VIO})}}
]),
S.slider('3-2','動手探索','拖 x、y、z，走到空間任何一點',['先猜：z＝0 時終點在哪裏？','拖滑桿驗證。'],(h)=>G3.explore(h,{
 sl:[{id:'qx',label:'x',min:0,max:2,step:.5,value:1},{id:'qz',label:'z',min:-1,max:1.5,step:.5,value:1}],
 draw:v=>{const Pl=G3.solid({P1:[2.6,-.4,0],P2:[2.6,3,0],P3:[-.4,3,0],P4:[-.4,-.4,0]},[['P1','P2','P3','P4']],true);Pl.flat=true;Pl.nm='';const F=G3.frame(Pl,{W:440,H:220,m:18,el:24,extra:[[0,0,1.6],[0,0,-1.1],[2,1,1.5]]});const a=[1,0,0],b=[.2,1,0],c=[.1,.1,1],y=1,A=G3.mul(a,v.qx),B=G3.add(A,G3.mul(b,y)),Pp=G3.add(B,G3.mul(c,v.qz));
  return F.show(F.base(),F.vec([0,0,0],A,BLU),F.vec(A,B,GRN),F.vec(B,Pp,AMB),F.vec([0,0,0],Pp,RED),F.dot(Pp,RED))},
 fx:v=>`\\(\\boldsymbol{p}=${v.qx}\\boldsymbol{a}+\\boldsymbol{b}+(${v.qz})\\boldsymbol{c}\\)`
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['用「不共面」說一次。'],'要表示所有空間向量，基底應是？',[
 ['三個不共面的向量','定理：對任意 \\(\\boldsymbol{p}\\) 有唯一的 \\((x,y,z)\\)',1],
 ['任意三個非零向量','概念錯誤：三個共面的向量走不出平面'],
 ['兩個不共線的向量','概念錯誤：只能表示同一平面內的向量']
]),
S.check('3-4','表示法唯一','同一向量可以有兩種寫法嗎？',['想想係數的意思。'],'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(3\\boldsymbol{a}-2\\boldsymbol{b}+\\boldsymbol{c}=x\\boldsymbol{a}+y\\boldsymbol{b}+z\\boldsymbol{c}\\)，則？',[
 ['\\(x=3\\)，\\(y=-2\\)，\\(z=1\\)','表示法唯一，係數對應相等',1],
 ['\\(x=3\\)，\\(y=2\\)，\\(z=1\\)','粗心失誤：漏了負號'],
 ['不能確定','概念錯誤：不共面時表示法唯一']
]),
S.stepper('3-5','跟著做：寫分解式','跟著做：表示上底中心',['先走路線，再換字母。'],(h)=>{const F=G3.frame(Pa,{W:440,H:200,m:34,fs:38});const V=Pa.V,E=G3.mid(V.A1,V.C1);G3.steps(h,440,200,[
 {t:`基底：${vv('AB')}＝a，${vv('AD')}＝b，${vv('AA1')}＝c`,d:k=>F.base()+F.vec('A','B',BLU,'',k)+F.vec('A','D',GRN,'',k)+F.vec('A','A1',AMB,'',k)},
 {t:'E 是上底中心，即 A₁C₁ 的中點',d:k=>F.seg('A1','C1',GRY,2.5,'6 5')+F.dot(E,RED)+F.lab(E,'E',RED,[6,-22])},
 {t:`路線：${vv('AE')}＝${vv('AA1')}＋${vv('A1E')}`,d:k=>F.vec('A1',E,VIO,'',k)},
 {t:`${vv('A1E')}＝½(a＋b)，所以 ${vv('AE')}＝½a＋½b＋c`,d:k=>F.vec('A',E,RED,'',k)}
])},{example:{q:`同一圖中，用基底表示 ${vv('DB1')}。`,steps:[`${vv('DA')}＋${vv('AB')}＋${vv('BB1')}`],ans:'\\(\\boldsymbol{a}-\\boldsymbol{b}+\\boldsymbol{c}\\)'}}),
S.stepper('3-6','跟著做：用基底算','跟著做：用基底算數量積',['直三棱柱：∠ABC＝60°，BA＝3，BC＝BB₁＝2。'],(h)=>{const F=G3.frame(Prm,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:`取基底 ${vv('BA')}、${vv('BC')}、${vv('BB1')}：長度和夾角都已知`,d:k=>F.base()+F.vec('B','A',BLU,'',k)+F.vec('B','C',GRN,'',k)+F.vec('B','B1',AMB,'',k)},
 {t:`${vv('AB1')}＝－${vv('BA')}＋${vv('BB1')}，${vv('BC1')}＝${vv('BC')}＋${vv('BB1')}`,d:k=>F.vec('A','B1',RED,'',k)+F.vec('B','C1',VIO,'',k)},
 {t:'展開四項：BA·BC＝3，BB₁² ＝4，其餘垂直為 0',d:k=>F.text(340,40,'－3＋4',{c:RED})},
 {t:`所以 ${vv('AB1')}·${vv('BC1')}＝－3＋4＝1`,d:k=>F.text(340,84,'＝1',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：哪組可作基底？',null,'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，哪一組可作基底？',[
 ['\\(\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(\\boldsymbol{c}\\)','\\(\\boldsymbol{c}\\) 不在 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 的平面內',1],
 ['\\(\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(2\\boldsymbol{a}\\)','概念錯誤：\\(2\\boldsymbol{a}\\) 是前兩者之和，共面'],
 ['\\(\\boldsymbol{a}\\)，\\(\\boldsymbol{b}\\)，\\(\\boldsymbol{a}+\\boldsymbol{b}\\)','概念錯誤：第三個是前兩者的和，共面']
]),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['圖是平行六面體，基底同 3-5。','卡住先按「提示」。'],7,['反方向走卻寫正號（程序）','基底展開時把夾角當 90°（概念）','中點係數錯（粗心）'],[
 [`用 ${bb('a')}、${bb('b')}、${bb('c')} 表示 ${vv('A1C')}`,['A₁ 先往下到 A，所以有 \\(-\\boldsymbol{c}\\)。','路線：A₁→A→B→C。'],'\\(\\boldsymbol{a}+\\boldsymbol{b}-\\boldsymbol{c}\\)'],
 [`四面體 O-ABC，D 是 AB 中點，E 是 CD 中點，用 ${vv('OA')}、${vv('OB')}、${vv('OC')} 表示 ${vv('OE')}`,['先寫 OD。','E 是 C、D 的中點。'],`¼${vv('OA')}＋¼${vv('OB')}＋½${vv('OC')}`],
 ['為甚麼 \\(\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(\\boldsymbol{b}\\) 不能作基底？說明。',null,'\\(\\boldsymbol{b}=\\tfrac12[(\\boldsymbol{a}+\\boldsymbol{b})-(\\boldsymbol{a}-\\boldsymbol{b})]\\)，三者共面']
],{fig:miniPa}),
S.check('4-2','合理嗎？','合理嗎？可以隨便展開嗎？',['想想夾角。'],'基底夾角是 60°，\\((\\boldsymbol{a}+\\boldsymbol{b})^2\\) 應等於？',[
 ['\\(\\boldsymbol{a}^2+2\\boldsymbol{a}\\cdot\\boldsymbol{b}+\\boldsymbol{b}^2\\)','基底不一定垂直，中間項要留',1],
 ['\\(\\boldsymbol{a}^2+\\boldsymbol{b}^2\\)','概念錯誤：只有垂直時才沒有中間項'],
 ['\\(\\boldsymbol{a}^2-\\boldsymbol{b}^2\\)','程序錯誤：與平方差混淆']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：這個分解式對嗎？',null,{q:`基底 ${vv('AB')}＝a、${vv('AD')}＝b、${vv('AA1')}＝c，表示 ${vv('BD1')}。`,steps:['B→A→D→D₁','\\(\\overrightarrow{BD_1}=\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}\\)'],wrong:1,why:'程序錯誤：B→A 與 \\(\\boldsymbol{a}\\) 方向相反，應為 \\(-\\boldsymbol{a}\\)。',fix:'\\(\\overrightarrow{BD_1}=-\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}\\)'},{fig:miniPa}),
S.mistake('5-2','再抓一次','再抓一次：基底一定垂直？',null,{q:'基底 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 長度都是 1、夾角 60°，求 \\((\\boldsymbol{a}+\\boldsymbol{b})\\cdot\\boldsymbol{b}\\)。',steps:['基底互相垂直，\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\)','結果＝\\(\\boldsymbol{b}^2=1\\)'],wrong:0,why:'概念錯誤：基底只要不共面，不一定垂直。',fix:'\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=\\tfrac12\\)，結果＝\\(\\tfrac12+1=\\tfrac32\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：係數與基底',null,[
 [`${vv('AC1')}＝x(${vv('AB')}＋${vv('BC')}＋${vv('CC1')})，求 x`,['括號內首尾相接等於甚麼？'],'1'],
 [`E 是上底中心，${vv('AE')}＝${vv('AA1')}＋x${vv('AB')}＋y${vv('AD')}，求 x、y`,['參考 3-5。'],'\\(x=y=\\tfrac12\\)'],
 [`哪一個基向量能與 ${vv('OA')}＋${vv('OB')}、${vv('OA')}－${vv('OB')} 組成新基底？`,null,`${vv('OC')}：前兩者都在平面 OAB 內，只有 ${vv('OC')} 不在`]
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:`平行六面體 ABCD-A₁B₁C₁D₁ 中，M 是 A₁D₁ 中點，基底 ${vv('AB')}＝a、${vv('AD')}＝b、${vv('AA1')}＝c。寫出 ${vv('BM')} 的分解式。`,
 ans:'\\(\\overrightarrow{BM}=-\\boldsymbol{a}+\\tfrac12\\boldsymbol{b}+\\boldsymbol{c}\\)',
 rubric:{mastered:'路線與正負號都對 → 下一節綜合練習做 C 層',partial:'路線對、符號或中點係數有一處錯 → 下一節練習由 B 層開始',notyet:'未能走出路線 → 小組用紙盒走一次路線再換字母'},
 delayed:{when:'約一週後',q:`四面體 ABCD 中，E、F 分別是 AB、CD 中點，用 ${vv('AB')}、${vv('AC')}、${vv('AD')} 表示 ${vv('EF')}。`,ans:`½${vv('AC')}＋½${vv('AD')}－½${vv('AB')}`}
}),
S.goals('6-2','懸念解開','懸念解開：要幾個方向掣？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['兩個方向只能在一個平面內飛','加上第三個不共面的方向（上下），就能到達空間任何一點','再多的方向只是多餘，三個不共面的方向已經足夠']}),
S.summary('6-3',null,['三個不共面向量是基底，表示所有空間向量','\\(\\boldsymbol{p}=x\\boldsymbol{a}+y\\boldsymbol{b}+z\\boldsymbol{c}\\)，\\((x,y,z)\\) 唯一','先走路線、再換字母，反方向要寫負號','基底不一定垂直，展開時用已知夾角'])
