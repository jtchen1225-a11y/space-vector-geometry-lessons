//@meta
{
  id: 3, type: 'new', unit: '1.1.2 共面向量定理', pdf: '12–14',
  topic: '共面向量定理',
  goal: '能用 c＝xa＋yb 判斷三個向量是否共面、四點是否共面',
  prior: '共線向量基本定理、平面向量基本定理、L01 線性運算',
  focus: '在 a、b 不共線的前提下，「共面」等於「能寫成 a、b 的線性組合」',
  difficulty: '定理的前提（a、b 不共線）；由向量式判斷點的位置',
  boundary: '空間向量基本定理與基底（L04）；坐標（L06）',
  reveal: '四條腳的端點要共面才不會搖：若 AP＝xAB＋yAC，P 就在平面 ABC 內。三點一定共面，所以三腳凳永遠不搖。',
  priorMap: [
    ['共線向量基本定理 b＝λa', '判斷三點共線；與共面定理比較', '1-3 快問', '用數線上的倍數重溫'],
    ['平面向量基本定理 c＝xa＋yb', '是共面定理的必要性來源', '1-2 熱身題', '在方格紙上分解一次'],
    ['L01 向量線性運算', '化簡出 xa＋yb 的形式', '3-5 跟著做', '回到首尾相接'],
  ],
  deep: ['同一平面內任意向量都能用兩個不共線向量表示。', '這句話反過來也成立，因而變成判斷工具：只要找到 x、y，就知道三向量共面；還可用於判斷四點共面。', 'L04 第三個不共面向量帶來空間向量基本定理；L11 用三向量不共面判斷異面直線。'],
  spaced: [
    ['共面的判斷', '下一節（L04）', '反過來判斷哪三個向量可以作基底'],
    ['四點共面', '約一週後（L05）', '在長方體中判斷；延遲檢測'],
    ['三向量不共面', '約一個月後（L11）', '判斷異面直線'],
  ],
}
//@assert
// 用任意不共面向量檢查
const a=[1,0,0],b=[0,1,0],c=[0,0,1];
const k=1/3, AM=mul(add(b,c),k), AN=add(mul(a,1-k),mul(b,k));
eq(sub(AN,AM),add(mul(a,2/3),mul(c,-1/3)),'3-5 MN');
const p=add(a,b),q=sub(a,b); eq(a,add(mul(p,.5),mul(q,.5)),'3-7');
// 4-1 C r=p−q
const p2=add(a,b),q2=add(b,c),r2=sub(a,c); eq(r2,sub(p2,q2),'4-1C');
// 5-3 B B1D1=AD1−AB1
const P=G.para().V; eq(sub(P.D1,P.B1),sub(sub(P.D1,P.A),sub(P.B1,P.A)),'5-3B');
// 出口：r=p+q
eq(add(sub(mul(a,2),b),add(a,c)),add(sub(mul(a,3),b),c),'出口');
// 延遲：p=a+2b,q=b−c,r=a+b 不共面（行列式≠0）
const pd=[1,2,0],qd=[0,1,-1],rd=[1,1,0]; eq(dot(pd,cross(qd,rd)),-1,'延遲行列式');
// 5-3 C：x+y+z=1 ⇒ 共面（取數值檢查）
const A=[1,0,2],B=[3,1,0],Cc=[0,4,1],y=.3,z=.5,x=.2; const O=add(add(mul(A,x),mul(B,y)),mul(Cc,z));
eq(sub(O,A),add(mul(sub(B,A),y),mul(sub(Cc,A),z)),'5-3C');
//@shared
const Pa = G3.para(), Pr = G3.solid({A:[1.6,0,0],B:[1.2,2.2,0],C:[-.4,1,0],A1:[1.9,.5,1.7],B1:[1.5,2.7,1.7],C1:[-.1,1.5,1.7]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
//@ch 1
S.goals('1-1','今天的任務','四條腳的椅子，為甚麼會搖？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說出共面向量定理及其前提','用 \\(\\boldsymbol{c}=x\\boldsymbol{a}+y\\boldsymbol{b}\\) 判斷三向量共面','由向量式判斷四點是否共面']}),
S.tasks('1-2','熱身題','先把向量分解一次',['在平面上熱身。','選一層開始。'],[
 ['\\(\\boldsymbol{c}=2\\boldsymbol{a}+\\boldsymbol{b}\\)。在紙上畫出 \\(\\boldsymbol{a},\\boldsymbol{b}\\)，再畫 \\(\\boldsymbol{c}\\)。',['先畫兩倍的 \\(\\boldsymbol{a}\\)。','再接上 \\(\\boldsymbol{b}\\)（首尾相接）。'],'首尾相接後的第三邊就是 \\(\\boldsymbol{c}\\)'],
 ['\\(\\boldsymbol{a},\\boldsymbol{b}\\) 不共線，\\(x\\boldsymbol{a}+2\\boldsymbol{b}=3\\boldsymbol{a}+y\\boldsymbol{b}\\)，求 \\(x,y\\)',['不共線時係數要對應相等。'],'\\(x=3\\)，\\(y=2\\)'],
 ['若 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 共線，第 2 題的做法還成立嗎？為甚麼？',null,'不成立：共線時表示法不唯一，例如 \\(\\boldsymbol{b}=2\\boldsymbol{a}\\) 時係數不必相等']
]),
S.check('1-3','舊知識快問','舊知識快問：三點共線',null,`若 ${vv('AB')}＝2${vv('BC')}，A、B、C 三點？`,[
 ['一定共線','兩向量平行且有公共點 B',1],
 ['不一定共線','概念錯誤：有公共點的平行向量，一定在同一直線'],
 ['一定不共線','概念錯誤：倍數關係正是共線的條件']
]),
//@ch 2
S.hook('2-1','猜一猜','四腳椅會搖，三腳凳不會？',null,{
 pic:G3.wrap(440,190,`<polygon points="70,150 230,170 300,130 140,112" fill="rgba(37,99,235,.12)" stroke="${BLU}" stroke-width="3"/>`+[[70,150],[230,170],[300,130]].map(p=>SV.dot(p[0],p[1],BLU,8)).join('')+SV.dot(140,88,RED,9)+SV.seg(140,88,140,112,RED,3,'5 4')+G3.txt(370,70,'第四點',{c:RED,fs:30})),
 story:'四腳椅的腳尖不在同一平面，就會搖；三腳凳卻永遠不搖。',
 guess:['三腳凳用料比較好','三點一定共面，四點不一定','四腳椅只是地不平','還不確定'],
 ask:'怎樣用向量判斷第四點在不在平面上？',
 later:'學完共面向量定理，你就能判斷！'
}),
//@ch 3
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
]),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['找 x、y，就是證共面。','卡住先按「提示」。'],7,['忽略不共線前提（概念）','把倍數寫錯（粗心）','未能湊出線性組合（程序）'],[
 ['\\(\\boldsymbol{a}=3\\boldsymbol{b}-\\boldsymbol{c}\\)，三向量共面嗎？',['看 \\(\\boldsymbol{a}\\) 能否寫成 \\(\\boldsymbol{b},\\boldsymbol{c}\\) 的組合。','\\(x=3\\)，\\(y=-1\\)。'],'共面'],
 [`${vv('AP')}＝${vv('AB')}－2${vv('AC')}，P 在平面 ABC 上嗎？`,['與四點共面的公式比較。'],'在：\\(x=1\\)，\\(y=-2\\)'],
 ['\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(\\boldsymbol{p}=\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{q}=\\boldsymbol{b}+\\boldsymbol{c}\\)，\\(\\boldsymbol{r}=\\boldsymbol{a}-\\boldsymbol{c}\\) 共面嗎？說明。',['試算 \\(\\boldsymbol{p}-\\boldsymbol{q}\\)。'],'共面：\\(\\boldsymbol{r}=\\boldsymbol{p}-\\boldsymbol{q}\\)']
]),
S.check('4-2','合理嗎？','合理嗎？四點一定共線？',['想一想平行四邊形。'],`若 ${vv('AB')}＝2${vv('CD')}，A、B、C、D？`,[
 ['不一定共線','AB∥CD 也可以是兩條不同的平行線',1],
 ['一定共線','概念錯誤：沒有公共點就不能推出共線'],
 ['一定不共面','概念錯誤：兩條平行線一定共面']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：定理可以這樣用嗎？',null,{q:'\\(\\boldsymbol{a}\\parallel\\boldsymbol{b}\\)，\\(\\boldsymbol{c}\\) 與它們不平行，能否寫成 \\(\\boldsymbol{c}=x\\boldsymbol{a}+y\\boldsymbol{b}\\)？',steps:['三向量共面','由共面向量定理，可以寫成 \\(x\\boldsymbol{a}+y\\boldsymbol{b}\\)'],wrong:1,why:'概念錯誤：定理要求 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 不共線；這裏共線，組合只能走同一方向。',fix:'\\(\\boldsymbol{a}\\parallel\\boldsymbol{b}\\) 時 \\(x\\boldsymbol{a}+y\\boldsymbol{b}\\) 都與 \\(\\boldsymbol{a}\\) 平行，寫不出 \\(\\boldsymbol{c}\\)'}),
S.mistake('5-2','再抓一次','再抓一次：平行一定共線？',null,{q:`${vv('AB')}＝3${vv('CD')}，A、B、C、D 一定共線嗎？`,steps:['兩向量平行','所以 A、B、C、D 共線'],wrong:1,why:'概念錯誤：向量平行不等於點共線，要有公共點才可以。',fix:'只能得到 AB∥CD 或共線；要共線需再有公共點'}),
S.tasks('5-3','升級挑戰','升級挑戰：共面的判斷',null,[
 [`${vv('AP')}＝${vv('AB')}＋2${vv('AC')}，P 與 A、B、C 共面嗎？`,['與公式比較。','\\(x=1\\)，\\(y=2\\)'],'共面'],
 [`平行六面體中，${vv('AB1')}、${vv('AD1')}、${vv('B1D1')} 共面嗎？`,[`${vv('B1D1')} 能否用另外兩個相減？`],`共面：${vv('B1D1')}＝${vv('AD1')}－${vv('AB1')}`],
 [`${vv('OP')}＝x${vv('OA')}＋y${vv('OB')}＋z${vv('OC')}，x＋y＋z＝1，說明 P 在平面 ABC 上。`,null,`把 x＝1－y－z 代入，得 ${vv('AP')}＝y${vv('AB')}＋z${vv('AC')}`]
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(\\boldsymbol{p}=2\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(\\boldsymbol{q}=\\boldsymbol{a}+\\boldsymbol{c}\\)，\\(\\boldsymbol{r}=3\\boldsymbol{a}-\\boldsymbol{b}+\\boldsymbol{c}\\)。三者共面嗎？說明。',
 ans:'共面：\\(\\boldsymbol{r}=\\boldsymbol{p}+\\boldsymbol{q}\\)',
 rubric:{mastered:'找到 r＝p＋q 並用定理下結論 → 下一節進入基本定理',partial:'答案對但未寫出關係式 → 下一節起步題練「設 r＝xp＋yq」',notyet:'無從入手或憑感覺判斷 → 小組回到方格分解'},
 delayed:{when:'約一週後',q:'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(\\boldsymbol{p}=\\boldsymbol{a}+2\\boldsymbol{b}\\)，\\(\\boldsymbol{q}=\\boldsymbol{b}-\\boldsymbol{c}\\)，\\(\\boldsymbol{r}=\\boldsymbol{a}+\\boldsymbol{b}\\)。三者共面嗎？',ans:'不共面（設 r＝xp＋yq，比較係數得 x＝1、y＝0，但 b 的係數矛盾）'}
}),
S.goals('6-2','懸念解開','懸念解開：為甚麼三腳不搖？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['不共線三點確定一個平面，三腳一定同時着地','第四點要滿足 \\(\\overrightarrow{AP}=x\\overrightarrow{AB}+y\\overrightarrow{AC}\\)，才在同一平面','找不到 \\(x,y\\) 時，第四條腳就懸空，椅子會搖']}),
S.summary('6-3',null,['\\(\\boldsymbol{a},\\boldsymbol{b}\\) 不共線時：共面 \\(\\Leftrightarrow\\boldsymbol{c}=x\\boldsymbol{a}+y\\boldsymbol{b}\\)','四點共面：\\(\\overrightarrow{AP}=x\\overrightarrow{AB}+y\\overrightarrow{AC}\\)','判斷方法：設未知數，比較係數','向量平行不等於點共線，要有公共點'])
