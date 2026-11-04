//@meta
{
  id: 11, type: 'new', unit: '1.2.1 異面直線與公垂線段', pdf: '34–38',
  topic: '異面直線的判定與公垂線段',
  goal: '能用向量判斷兩直線異面，並用兩個垂直條件求公垂線段及其長度',
  prior: 'L10 方向向量、L03 共面判斷、L06 垂直條件',
  focus: '異面 ⇔ v₁、v₂、AB 不共面；公垂線段同時垂直兩條直線',
  difficulty: '用參數 t、s 設公垂線段的端點，再列兩條方程',
  boundary: '用法向量公式求異面距離（不要求）；一般點線距離（L20）',
  reveal: '最短的喉管是公垂線段：同時垂直兩條喉管。解兩條方程就能知道位置和長度。',
  priorMap: [
    ['方向向量與線線角', '兩條直線的方向', '1-3 快問', '回到 L10 3-5'],
    ['共面判斷', '異面的充要條件', '1-2 熱身題', '回到 L03 3-3'],
    ['解二元一次方程組', '求 t、s', '3-5', '先單獨解一組方程'],
  ],
  deep: ['知道異面直線有夾角。', '異面直線還有「距離」：唯一一條同時垂直兩線的線段最短；參數方法把幾何條件變成方程。', 'L20、L21 系統學習空間距離；L24 用於綜合題。'],
  spaced: [
    ['用參數設點', '下一節（L12）起步題', '在線段上設點求垂直'],
    ['異面的判定', '約一週後（L14）', '延遲檢測，換立體圖'],
    ['公垂線段', '約一個月後（L22）', '與點面距離比較'],
  ],
}
//@assert
{const A=[1,0,0],v1=[-1,0,1],B=[1,1,0],v2=[-1,-1,0],t=1/3,s=2/3;const M=add(A,mul(v1,t)),N=add(B,mul(v2,s)),MN=sub(N,M);eq(dot(MN,v1),0,'3-2');eq(dot(MN,v2),0,'3-2');eq(len(MN),sqrt(3)/3,'3-2 長');}
{const A=[1,0,0],v1=[0,1,1],B=[1,1,0],v2=[-1,0,1];eq(dot(v1,cross(v2,sub(B,A))),-1,'3-6 不共面');const t=2/3,s=1/3,M=add(A,mul(v1,t)),N=add(B,mul(v2,s)),MN=sub(N,M);eq(MN,[-1/3,1/3,-1/3],'3-5');eq(dot(MN,v1),0);eq(dot(MN,v2),0);eq(len(MN),sqrt(3)/3,'3-5');}
{const U=G.cube(2).V,O=mid(U.B,U.D);eq(dis(U.C,O),sqrt(2),'4-1B');eq(dot(sub(O,U.C),sub(U.D,U.B)),0);eq(dot(sub(O,U.C),sub(U.C1,U.C)),0);}
{const v1=[1,0,0],v2=[0,1,0],AB=[0,1,1];eq(dot(v1,cross(v2,AB)),1,'5-3B');eq(len([0,0,1]),1,'5-3C');}
{const A=[1,0,0],v1=[0,1,1],B=[0,0,2],v2=[1,0,0];eq(dot(v1,cross(v2,sub(B,A))),-2,'出口異面');const M=add(A,mul(v1,1)),N=add(B,mul(v2,1)),MN=sub(N,M);eq(dot(MN,v1),0);eq(dot(MN,v2),0);eq(len(MN),sqrt(2),'出口');}
//@shared
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
//@ch 1
S.goals('1-1','今天的任務','兩條喉管，最短的接駁在哪裏？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['用向量判斷兩直線是否異面','說出公垂線段的定義','用 t、s 設點，求公垂線段','求兩條異面直線的距離']}),
S.tasks('1-2','熱身題','線段上設一個點',['用參數寫出點的坐標。','選一層開始。'],[
 ['A(1,0,0)、B(1,2,0)，P 滿足 \\(\\overrightarrow{AP}=t\\overrightarrow{AB}\\)，寫 P',['先求 \\(\\overrightarrow{AB}\\)。','A 加 t 倍。'],'\\(P(1,2t,0)\\)'],
 ['上題中 \\(\\overrightarrow{OP}\\perp\\overrightarrow{AB}\\)（O 為原點），求 \\(t\\)',['數量積為 0。'],'\\(t=0\\)'],
 ['\\(t\\) 從 0 變到 1，P 走過甚麼？\\(t=\\tfrac12\\) 在哪裏？',null,'走過線段 AB；\\(t=\\tfrac12\\) 是中點']
]),
S.check('1-3','舊知識快問','舊知識快問：三向量共面',null,'怎樣判斷 \\(\\boldsymbol{p},\\boldsymbol{q},\\boldsymbol{r}\\) 共面？（\\(\\boldsymbol{p},\\boldsymbol{q}\\) 不共線）',[
 ['看 \\(\\boldsymbol{r}\\) 能否寫成 \\(x\\boldsymbol{p}+y\\boldsymbol{q}\\)','共面向量定理',1],
 ['看長度是否相等','概念錯誤：共面與長度無關'],
 ['看是否同一起點','概念錯誤：向量可以平移']
]),
//@ch 2
S.hook('2-1','猜一猜','最短的接駁喉在哪裏？',null,{
 pic:G3.wrap(440,170,SV.seg(30,50,410,50,BLU,12)+SV.seg(90,150,350,130,GRN,12)+SV.seg(220,50,220,140,RED,4,'8 6')+G3.txt(390,90,'？',{c:RED,fs:40})),
 story:'天花板有兩條不平行、不相交的水喉，要接一條最短的駁喉。',
 guess:['在兩喉最靠近的位置，垂直兩喉','垂直其中一條就夠','任何位置都一樣','還不確定'],
 ask:'最短的駁喉要滿足甚麼條件？',
 later:'學完今天的內容，你就能算出來！'
}),
//@ch 3
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
],{fig:miniCu}),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['先想：兩條線的方向是甚麼？','卡住先按「提示」。'],7,['只寫一條垂直方程（程序）','由不平行直接判定異面（概念）','端點不在直線上（粗心）'],[
 ['長方體中，哪些棱與 AA₁ 異面且垂直？',['不與 AA₁ 相交、也不平行的棱。','在四條底邊和頂邊中找。'],'BC、CD、B₁C₁、C₁D₁'],
 ['棱長 2 的正方體，BD 與 CC₁ 的距離是多少？',['找同時垂直兩線的線段。','C 到 BD 的垂足是底面中心。'],'\\(\\sqrt2\\)'],
 ['空間四邊形 ABCD 中，AD⊥BC、AB⊥CD，說明 AC⊥BD。',['以 A 為起點設向量。'],'\\(\\overrightarrow{AC}\\cdot\\overrightarrow{BD}=\\overrightarrow{AC}\\cdot\\overrightarrow{AD}-\\overrightarrow{AC}\\cdot\\overrightarrow{AB}\\)；兩個條件都變成 \\(\\overrightarrow{AC}\\cdot\\overrightarrow{AD}=\\overrightarrow{AB}\\cdot\\overrightarrow{AD}=\\overrightarrow{AC}\\cdot\\overrightarrow{AB}\\)，所以結果是 0']
]),
S.check('4-2','合理嗎？','合理嗎？公垂線段有幾條？',['兩條異面直線。'],'兩條異面直線的公垂線段有多少條？',[
 ['一條','存在而且唯一',1],
 ['無數條','概念錯誤：把它與平行線混淆'],
 ['可能沒有','概念錯誤：異面直線一定有公垂線段']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：不平行就是異面？',null,{q:'\\(\\boldsymbol{v}_1=(1,0,0)\\)，\\(\\boldsymbol{v}_2=(0,1,0)\\)，\\(l_1,l_2\\) 都過原點。',steps:['兩方向不平行','所以 \\(l_1,l_2\\) 異面'],wrong:1,why:'概念錯誤：兩線都過原點，是相交。不平行只是異面的必要條件。',fix:'檢查 \\(\\boldsymbol{v}_1,\\boldsymbol{v}_2,\\overrightarrow{AB}\\) 是否不共面；這裏相交'}),
S.mistake('5-2','再抓一次','再抓一次：一條方程夠嗎？',null,{q:'求棱長 1 的正方體中 AB₁ 與 BC₁ 的公垂線段。',steps:['設 \\(M(1,t,t)\\)，\\(N(1-s,1,s)\\)','由 \\(\\overrightarrow{MN}\\cdot\\overrightarrow{AB_1}=0\\) 直接得結果'],wrong:1,why:'程序錯誤：兩個未知數要兩條方程，也要垂直 BC₁。',fix:'再加 \\(\\overrightarrow{MN}\\cdot\\overrightarrow{BC_1}=0\\)，解得 \\(t=\\tfrac23\\)，\\(s=\\tfrac13\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：由方向與點判斷',['\\(l_1\\)：過 (0,0,0)，方向 (1,0,0)。','\\(l_2\\)：過 (0,1,1)，方向 (0,1,0)。'],[
 ['兩方向平行嗎？',['是否倍數？'],'不平行'],
 ['\\(l_1,l_2\\) 異面嗎？',['取 \\(\\overrightarrow{AB}=(0,1,1)\\)。','能寫成兩個方向的組合嗎？'],'異面'],
 ['求兩直線的距離，並說明公垂線段的位置。',null,'距離 1：公垂線段連接 (0,0,0) 與 (0,0,1)']
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(l_1\\) 過 (1,0,0)、方向 (0,1,1)；\\(l_2\\) 過 (0,0,2)、方向 (1,0,0)。求兩線的距離。',
 ans:'\\(\\sqrt2\\)（\\(M(1,1,1)\\)，\\(N(1,0,2)\\)）',
 rubric:{mastered:'列兩條方程解出 t、s 並求長度 → 下一節進入法向量',partial:'方程列對、解錯或未開方 → 下一節起步題重做一題',notyet:'未能設參數 → 小組回到 3-2 滑桿再看一次'},
 delayed:{when:'約一週後',q:'棱長 2 的正方體，求 AD₁ 與 BD 的距離。',ans:'\\(\\dfrac{2\\sqrt3}{3}\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：最短的接駁喉',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['最短的連線同時垂直兩條喉管','它就是公垂線段，存在而且唯一','用參數設點，再解兩條垂直方程，位置和長度都能算出']}),
S.summary('6-3',null,['異面 \\(\\Leftrightarrow\\boldsymbol{v}_1,\\boldsymbol{v}_2,\\overrightarrow{AB}\\) 不共面','不平行只是異面的必要條件','公垂線段同時垂直兩線，存在且唯一','求法：設 \\(t,s\\)，列兩條垂直方程'])
