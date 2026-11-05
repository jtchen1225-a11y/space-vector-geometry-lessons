//@meta
{
  id: 5, type: 'practice', unit: '1.1.1–1.1.2 綜合練習', pdf: '10–11、15–16',
  topic: '線性運算、數量積與基底綜合練習',
  goal: '能在立體圖中選合適基底，獨立完成向量表示、數量積與求長度',
  prior: 'L01 線性運算、L02 數量積、L03 共面定理、L04 基本定理',
  focus: '先選基底，再寫分解式，最後展開計算',
  difficulty: '正負號、中點係數；基底不垂直時的中間項',
  boundary: '坐標法（L06 才學）',
  priorMap: [
    ['首尾相接與中點公式', '寫分解式的工具', '1-2 診斷快問', '回到 L01 的 3-6'],
    ['數量積定義', '代入基底的長度與夾角', '1-3 診斷', '回到 L02 的 3-5'],
    ['共面定理', '判斷能否作基底', '1-4 診斷', '回到 L03 的 3-3'],
  ],
  deep: ['已學會分別做線性運算、數量積與基底分解。', '把三件事串成一個流程：選基底→分解→展開；並開始比較「哪一組基底較省力」。', 'L06 取正交基底，流程更簡單；L10 把流程用於求角。'],
  spaced: [
    ['基底流程', '下一節（L06）', '對照：同一題用坐標再做一次'],
    ['求長度', '約一週後（L08）', '延遲檢測，改用不同立體'],
    ['數量積判斷垂直', '約一個月後（L13）', '證明線線垂直'],
  ],
}
//@assert
const P=G.para().V,a=sub(P.B,P.A),b=sub(P.D,P.A),c=sub(P.A1,P.A);
eq(sub(P.C1,P.D),add(a,c),'1-2 DC1');
// 夾角 60° 的正四面體型基底，長度 1
const u=[1,0,0],v=[.5,Math.sqrt(3)/2,0],w=[.5,Math.sqrt(3)/6,Math.sqrt(6)/3];
eq(dot(u,v),.5,'基底夾角');eq(dot(u,w),.5);eq(dot(v,w),.5);
eq(len(add(add(u,v),w))**2,6,'2-3 |a+b+c|²');
// 3-1 正四面體棱長2：AB·AC=2，AB·CD=0
eq(dot(mul(u,2),mul(v,2)),2,'3-1A');
eq(dot(mul(u,2),sub(mul(w,2),mul(v,2))),0,'3-1B');
// 3-1C：EF=½(c−a+... ) |EF|²：E=AB中點,F=CD中點 EF=½(AC+AD−AB) 棱長2
const A=[0,0,0],B=mul(u,2),Cc=mul(v,2),D=mul(w,2);
eq(len(sub(mid(Cc,D),mid(A,B)))**2,2,'3-1C');
// 3-3 平行六面體 AB=4,AD=3,AA1=5,∠BAD=90°,∠BAA1=∠DAA1=60° ⇒ |AC1|²=9+25+16+2*(7.5+10)=85 (課本)；本題改 AB=2,AD=2,AA1=3 全部 60°
const e1=mul(u,2),e2=mul(v,2),e3=mul(w,3);
eq(len(add(add(e1,e2),e3))**2,4+4+9+2*(2+3+3),'3-3B');eq(4+4+9+2*(2+3+3),33,'3-3B值');
// 3-3A |a+b|² (a=2,b=2,60°)=12
eq(len(add(e1,e2))**2,12,'3-3A');
// 3-3C BD1 長² 同基底：−a+b+c
eq(len(add(add(mul(e1,-1),e2),e3))**2,4+4+9-2*2-2*3+2*3,'3-3C');eq(4+4+9-4-6+6,13,'3-3C值');
// 4-3
const O=[0,0,0],Aa=[1,2,0],Bb=[3,0,1],Cq=[0,2,4],M=mid(O,Aa),N=mid(Bb,Cq),Gg=add(M,mul(sub(N,M),2/3));
eq(Gg,add(add(mul(Aa,1/6),mul(Bb,1/3)),mul(Cq,1/3)),'4-3B OG');
eq(len(add(e1,mul(e2,-1)))**2,4,'4-4');
// 出口：|AC1| 長方體型 a⊥b, c 與兩者 60°，a=b=1,c=2：1+1+4+2(0+1+1)=10
const x=[1,0,0],y=[0,1,0],z=[1,1,Math.sqrt(2)]; eq(len(z),2);eq(angd(x,z),60);eq(angd(y,z),60);
eq(len(add(add(x,y),z))**2,10,'出口');
eq(dot(add(x,y),z),2,'延遲');
//@shared
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Te = G3.solid({A:[1.4,0,0],B:[.9,2,0],C:[-.4,.8,0],D:[.75,.9,1.7]},[['A','B','C'],['A','B','D'],['B','C','D'],['C','A','D']]), miniTe = G3.mini(Te);
//@ch 1
S.goals('1-1','今天的目標','今天練一條流程：選基底→分解→展開',['看看今天要闖哪幾關。'],{head:'本節練到',items:['在立體圖中寫出向量的分解式','用基底算數量積','用展開求線段長度','判斷哪一組向量可作基底']}),
S.check('1-2','診斷快問','診斷一：分解式',['這三題幫你選今天的起點。'],`平行六面體中，基底 a、b、c 同上節，${vv('DC1')}＝？`,[
 ['\\(\\boldsymbol{a}+\\boldsymbol{c}\\)','D→C→C₁，分別等於 \\(\\boldsymbol{a},\\boldsymbol{c}\\)',1],
 ['\\(\\boldsymbol{b}+\\boldsymbol{c}\\)','概念錯誤：把 DC 當成 AD'],
 ['\\(-\\boldsymbol{b}+\\boldsymbol{c}\\)','概念錯誤：把路線走成 D→A→…']
],{fig:miniPa}),
S.check('1-3','診斷二：數量積','診斷二：基底不垂直',null,'\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=2\\)，夾角 60°，\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)＝？',[
 ['2','\\(2\\times2\\times\\tfrac12\\)',1],
 ['4','程序錯誤：忘了乘餘弦'],
 ['0','概念錯誤：把基底當作垂直']
]),
S.check('1-4','診斷三：基底','診斷三：這組能作基底嗎？',null,'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{a}+2\\boldsymbol{b}\\) 能作基底嗎？',[
 ['不能','第三個是前兩個的線性組合，三者共面',1],
 ['能','概念錯誤：三個向量不同不代表不共面'],
 ['要看長度','概念錯誤：基底只看是否共面']
]),
//@ch 2
S.stepper('2-1','解題秘笈','解題秘笈一：寫分解式三步',['每一步都有檢查點。'],(h)=>{const F=G3.frame(Te,{W:440,H:200,m:34,fs:38});const V=Te.V,E=G3.mid(V.C,V.D);G3.steps(h,440,200,[
 {t:`第 1 步：定基底，例如 ${vv('AB')}、${vv('AC')}、${vv('AD')}（由同一點出發）`,d:k=>F.base()+F.vec('A','B',BLU,'',k)+F.vec('A','C',GRN,'',k)+F.vec('A','D',AMB,'',k)},
 {t:`第 2 步：標目標點，例如 E 是 CD 中點，要寫 ${vv('BE')}`,d:k=>F.dot(E,RED)+F.lab(E,'E',RED,[-22,0])},
 {t:`第 3 步：用「終點減起點」：${vv('BE')}＝${vv('AE')}－${vv('AB')}＝½${vv('AC')}＋½${vv('AD')}－${vv('AB')}`,d:k=>F.vec('B',E,RED,'',k)}
])}),
S.check('2-2','自我檢查','自我檢查：終點減起點',['這條公式可以避免方向錯。'],`若 ${vv('AP')}＝p，${vv('AQ')}＝q，${vv('PQ')}＝？`,[
 ['\\(\\boldsymbol{q}-\\boldsymbol{p}\\)','終點減起點',1],
 ['\\(\\boldsymbol{p}-\\boldsymbol{q}\\)','程序錯誤：方向反了'],
 ['\\(\\boldsymbol{p}+\\boldsymbol{q}\\)','概念錯誤：把差當成和']
]),
S.stepper('2-3','秘笈二：求長度','解題秘笈二：長度先平方',['基底長度 1、兩兩夾角 60°。'],(h)=>{G3.steps(h,440,230,[
 {t:'目標：求 \\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|\\)',d:k=>G3.txt(220,50,'|a＋b＋c|²',{c:RED,fs:34})},
 {t:'展開：三個平方項＋三個 2 倍數量積',d:k=>G3.txt(220,110,'＝1＋1＋1＋2(½＋½＋½)',{c:INK,fs:30})},
 {t:'計算得 6，開方得 \\(\\sqrt6\\)；別忘了開方',d:k=>G3.txt(220,170,'＝6，長度 √6',{c:GRN,fs:34})}
])}),
S.goals('2-4','代入檢驗','檢查三問：答案合理嗎？',['做完每題都問一次。'],{head:'檢查清單',items:['方向：每段路線與基底同向還是反向？','係數：中點有沒有 \\(\\tfrac12\\)？','夾角：基底是否垂直？長度有沒有開方？']}),
//@ch 3
S.drill('3-1','第一關：基本功','第一關：正四面體基本功',['棱長 2 的正四面體 ABCD。','先寫基底，再代入。'],6,['把 60° 當 90°（概念）','AB 與 CD 垂直判斷不出（程序）','漏開方（粗心）'],[
 [`求 ${vv('AB')}·${vv('AC')}`,['正四面體每個面都是等邊三角形。','\\(2\\times2\\times\\cos60^\\circ\\)'],'2'],
 [`求 ${vv('AB')}·${vv('CD')}`,[`${vv('CD')}＝${vv('AD')}－${vv('AC')}`],'0'],
 ['E、F 是 AB、CD 中點，求 EF 的長。',['\\(\\overrightarrow{EF}=\\tfrac12(\\overrightarrow{AC}+\\overrightarrow{AD}-\\overrightarrow{AB})\\)'],'\\(\\sqrt2\\)']
],{fig:miniTe}),
S.check('3-2','比一比：正負','比一比：同一條棱，兩種方向',['只差一個方向。'],`若 ${vv('AB')}·${vv('AC')}＝2，則 ${vv('BA')}·${vv('AC')}＝？`,[
 ['－2','一個向量反向，數量積變號',1],
 ['2','概念錯誤：以為數量積不受方向影響'],
 ['0','概念錯誤：以為反向就垂直']
]),
S.drill('3-3','第二關：比一比','第二關：平行六面體比一比',['\\(\\boldsymbol{a}\\)、\\(\\boldsymbol{b}\\) 長 2，\\(\\boldsymbol{c}\\) 長 3。','兩兩夾角 60°。'],7,['中間項符號錯（程序）','夾角當垂直（概念）'],[
 ['求 \\(|\\boldsymbol{a}+\\boldsymbol{b}|^2\\)',['\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=2\\)。'],'12'],
 ['求體對角線 AC₁ 的長',['\\(\\overrightarrow{AC_1}=\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}\\)','\\(\\boldsymbol{a}\\cdot\\boldsymbol{c}=\\boldsymbol{b}\\cdot\\boldsymbol{c}=3\\)'],'\\(\\sqrt{33}\\)'],
 ['比較 AC₁ 與 BD₁ 誰長，為甚麼會不同？',null,'\\(|BD_1|=\\sqrt{13}\\)，較短：\\(\\boldsymbol{a}\\) 變號後，與它有關的兩個中間項變號']
],{fig:miniPa}),
S.check('3-4','比一比：做法','比一比：用哪組基底最省力？',['基底要長度、夾角已知。'],'求棱長已知的直三棱柱的數量積，基底應選？',[
 ['由直角或已知夾角頂點出發的三條棱','長度和夾角都已知',1],
 ['隨便三條棱','程序錯誤：可能不共面也可能夾角未知'],
 ['體對角線','概念錯誤：對角線長度和夾角未知']
]),
//@ch 4
S.mistake('4-1','抓錯偵探','抓錯偵探：中點哪裏去了？',null,{q:`四面體 O-ABC，M 是 BC 中點，寫 ${vv('AM')}。`,steps:[`${vv('AM')}＝${vv('OM')}－${vv('OA')}`,`＝${vv('OB')}＋${vv('OC')}－${vv('OA')}`],wrong:1,why:'粗心失誤：中點公式漏了 ½。',fix:`${vv('AM')}＝½(${vv('OB')}＋${vv('OC')})－${vv('OA')}`}),
S.mistake('4-2','再抓一次','再抓一次：長度算完了嗎？',null,{q:'\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=1\\)，夾角 60°，求 \\(|\\boldsymbol{a}-\\boldsymbol{b}|\\)。',steps:['\\(|\\boldsymbol{a}-\\boldsymbol{b}|=\\boldsymbol{a}^2+\\boldsymbol{b}^2-2\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)','\\(=1+1-1=1\\)'],wrong:0,why:'程序錯誤：左邊要先平方；這題開方後碰巧相同，但寫法不對。',fix:'\\(|\\boldsymbol{a}-\\boldsymbol{b}|^2=1\\)，所以 \\(|\\boldsymbol{a}-\\boldsymbol{b}|=1\\)'}),
S.tasks('4-3','綜合解難','綜合解難：點在線段上',null,[
 ['四面體 O-ABC，M、N 是 OA、BC 中點，用基底表示 \\(\\overrightarrow{MN}\\)',['終點減起點。','\\(\\overrightarrow{ON}=\\tfrac12(\\boldsymbol{b}+\\boldsymbol{c})\\)'],'\\(\\tfrac12(\\boldsymbol{b}+\\boldsymbol{c}-\\boldsymbol{a})\\)'],
 ['同上，G 在 MN 上且 MG＝2GN，表示 \\(\\overrightarrow{OG}\\)',['\\(\\overrightarrow{OG}=\\overrightarrow{OM}+\\tfrac23\\overrightarrow{MN}\\)'],'\\(\\tfrac16\\boldsymbol{a}+\\tfrac13\\boldsymbol{b}+\\tfrac13\\boldsymbol{c}\\)'],
 ['若 MG：GN 改成 t：1，寫出 \\(\\overrightarrow{OG}\\)，t 增大時 G 怎樣走？',null,'\\(\\overrightarrow{OG}=\\tfrac{1}{2(t+1)}\\boldsymbol{a}+\\tfrac{t}{2(t+1)}(\\boldsymbol{b}+\\boldsymbol{c})\\)，t 增大時 G 趨近 N']
]),
S.tasks('4-4','生活解難','生活解難：吊燈的三條鋼索',['三條鋼索由天花板吊住同一點。'],[
 ['兩條鋼索拉力都是 2 N、夾角 60°，它們的合力大小是？',['合力就是和向量。','\\(|\\boldsymbol{a}+\\boldsymbol{b}|^2=4+4+4\\)'],'\\(2\\sqrt3\\) N'],
 ['再加第三條 3 N，與前兩條都成 60°，總合力大小是？',['同 3-3 B 層的基底。'],'\\(\\sqrt{33}\\) N'],
 ['三條鋼索完全水平能吊住燈嗎？用向量解釋。',null,'不能：水平向量的和仍水平，抵消不了向下的重力']
]),
S.tasks('4-5','輪到你出題','輪到你出題：改一個條件',['自己改題，與同學交換。'],[
 ['把 3-3 的 \\(|\\boldsymbol{c}|\\) 改成 1，再求 AC₁ 長。',['\\(\\boldsymbol{a}\\cdot\\boldsymbol{c}=\\boldsymbol{b}\\cdot\\boldsymbol{c}=1\\)'],'\\(\\sqrt{19}\\)'],
 ['把 3-3 的夾角全改成 90°，AC₁ 長變成？',['中間項都消失。'],'\\(\\sqrt{17}\\)'],
 ['自編一題要用基底求長度的題目，並寫答案。',null,'答案因題而異；檢查基底的長度和夾角是否都已給出']
]),
//@ch 5
S.exit('5-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=1\\)，\\(|\\boldsymbol{c}|=2\\)，\\(\\boldsymbol{a}\\perp\\boldsymbol{b}\\)，\\(\\boldsymbol{c}\\) 與 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 都成 60°。求 \\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|\\)。',
 ans:'\\(\\sqrt{10}\\)',
 rubric:{mastered:'展開完整、中間項正確 → 下一節進入坐標，並比較兩種做法',partial:'只差一處計算或忘開方 → 下一節起步題再展開一次',notyet:'未能展開或把所有基底當垂直 → 小組回到 2-3 秘笈二'},
 delayed:{when:'約一週後',q:'同樣的三個向量條件，改求 \\((\\boldsymbol{a}+\\boldsymbol{b})\\cdot\\boldsymbol{c}\\)。',ans:'2'}
}),
S.tally('5-2','我的程度','幫自己打分','我能選基底、寫分解式、展開求長度'),
S.summary('5-3',null,['流程：選基底→分解→展開→（求長度時）開方','分解式：終點減起點，中點要有 \\(\\tfrac12\\)','基底不一定垂直，中間項要用已知夾角','三個向量共面就不能作基底'])
