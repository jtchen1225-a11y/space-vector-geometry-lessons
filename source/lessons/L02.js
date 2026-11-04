//@meta
{
  id: 2, type: 'new', unit: '1.1.1 空間向量的夾角與數量積', pdf: '7–11',
  topic: '空間向量的夾角與數量積',
  goal: '能求兩個空間向量的夾角，並用定義或投影計算數量積',
  prior: '平面向量的夾角與數量積、餘弦值、L01 的首尾相接',
  focus: '夾角要先平移到同一起點；數量積等於投影數量乘長度',
  difficulty: '方向相反時夾角要補成鈍角；數量積的結果是數，不是向量',
  boundary: '坐標計算（L06）；基底運算（L04）',
  reveal: '只有前進方向的分力做功：W＝50×10×cos60°＝250 J，不是 500 J。',
  priorMap: [
    ['平面向量夾角', '空間中先平移到共同起點，再看角', '1-3 快問', '回到平面圖，把兩箭頭的尾巴接在一起'],
    ['特殊角的餘弦值', '代入 \\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=|\\boldsymbol{a}||\\boldsymbol{b}|\\cos\\theta\\)', '1-2 熱身題', '派發 30°、45°、60°、90°、120° 餘弦小表'],
    ['L01 相等向量與平移', '把棱平移，找到夾角所在平面', '3-4 快問', '在紙盒上用兩支筆平移比一比'],
  ],
  deep: ['平面內兩向量有夾角與數量積。', '夾角與數量積不依賴起點位置，所以異面直線上的向量也能算；投影可以投到直線，也可以用垂直平面得到；數量積把「方向關係」變成一個數。', 'L04 用基底展開數量積；L06 坐標公式；L10、L15、L18 用數量積求線線角、線面角與面面角。'],
  spaced: [
    ['數量積的定義', '下一節（L03）起步題', '換長方體的棱長再求一次'],
    ['\\(|\\boldsymbol{a}+\\boldsymbol{b}|^2\\) 展開', '約一週後（L05）', '已知夾角求長度；延遲檢測'],
    ['\\(\\boldsymbol{a}\\perp\\boldsymbol{b}\\Leftrightarrow\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\)', '約一個月後（L12）', '用來求平面的法向量'],
  ],
}
//@assert
eq(50*10*Math.cos(Math.PI/3),250,'懸念');
// 長方體 a=2(AD),b=3(AB),c=4(AA1)
const B=G.box(2,3,4).V, E=mid(B.A,B.A1);
eq(dot(sub(B.C1,B.B),sub(E,B.A)),8,'3-5 BC1·AE');
eq(dot(sub(B.D,B.B1),sub(E,B.A)),-8,'3-5 B1D·AE');
eq(4+2*2*3*.5+9,19,'3-6 |a+b|²');
const U=G.cube(1).V; eq(dot(sub(U.B,U.A),sub(U.C1,U.A1)),1,'3-7');
eq(angd(sub(U.B,U.A),sub(U.A1,U.C1)),135,'3-4');
eq(angd(sub(U.B,U.A),sub(U.A1,U.B1)),180,'5-1');
eq(4*3*Math.cos(2*Math.PI/3),-6,'4-1A');
const W=G.cube(2).V; eq(dot(sub(W.B,W.A),sub(W.C1,W.A)),4,'4-1B');
eq(1+1+2*Math.cos(Math.PI/3),3,'4-1C');
eq(4*Math.cos(Math.PI/3),2,'5-3B');
eq(3*4*Math.cos(Math.PI/3),6,'出口');eq(9-2*6+16,13,'出口長度');
const X=G.cube(3).V; eq(dot(sub(X.B,X.A),sub(X.D,X.B1)),-9,'延遲');
//@shared
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Bx = G3.box(2,3,4,{}), Ex = G3.mid(Bx.V.A,Bx.V.A1);
//@ch 1
S.goals('1-1','今天的任務','力要算方向，向量也要算方向',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['求兩個空間向量的夾角','用定義計算數量積','用投影判斷數量積的正負','用數量積求向量的長度']}),
S.tasks('1-2','熱身題','先算幾個餘弦',['在平面上熱身。','選一層開始，做完往上挑戰。'],[
 ['\\(\\cos 60^\\circ\\)、\\(\\cos 120^\\circ\\) 各是多少？',['先想直角三角形。','鈍角的餘弦是負數。'],'\\(\\tfrac12\\)，\\(-\\tfrac12\\)'],
 ['平面上 \\(|\\boldsymbol{a}|=2\\)，\\(|\\boldsymbol{b}|=5\\)，夾角 60°，求 \\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)',['公式：長度相乘，再乘夾角的餘弦。'],'5'],
 ['數量積何時是負數？用夾角說明。',null,'夾角大於 90° 且不大於 180° 時，餘弦為負']
]),
S.check('1-3','舊知識快問','舊知識快問：夾角要怎樣量？',null,'平面上量兩向量的夾角，要先怎樣？',[
 ['把兩向量平移到同一起點','夾角由共同起點量起，範圍 0° 到 180°',1],
 ['把兩向量首尾相接','程序錯誤：首尾相接量到的是補角'],
 ['把兩向量畫成一樣長','概念錯誤：夾角與長度無關']
]),
//@ch 2
S.hook('2-1','猜一猜','斜拉行李，力氣全部有用嗎？',null,{
 pic:G3.wrap(440,190,SV.seg(30,150,410,150,GRY,3)+`<rect x="150" y="96" width="90" height="54" rx="8" fill="rgba(37,99,235,.15)" stroke="${BLU}" stroke-width="3"/>`+G3.arw(240,110,340,40,RED)+G3.txt(350,36,'50 N',{c:RED,anchor:'start'})+G3.arw(240,178,390,178,GRN)+G3.txt(315,172,'10 m',{c:GRN})),
 story:'用 50 N 斜拉行李，拉力與地面成 60°，行李沿地面前進 10 m。',
 guess:['做功 500 J','做功少於 500 J','沒有做功','還不確定'],
 ask:'力和位移方向不同，應該怎樣相乘？',
 later:'學完數量積，你就能算出答案！'
}),
//@ch 3
S.anim('3-1','粵語動畫','看動畫：影子和數量積',null,'0 0 440 250',[
 {say:'兩支箭由同一點出發，佢哋之間嘅角，就叫做夾角。',dur:5,d:k=>G3.arw(90,190,90+230*Math.max(k,.1),190,BLU)+G3.arw(90,190,90+150*Math.max(k,.1),190-130*Math.max(k,.1),RED)},
 {say:'就算兩支箭喺異面直線上面，平移到同一點，一樣量到夾角。',dur:6,d:k=>G3.txt(320,60,'先平移！',{c:VIO})},
 {say:'由紅色箭嘅終點向藍色箭落一條垂線，就得到一個影子。',dur:6,d:k=>SV.seg(240,60,240,60+130*k,GRY,3,'6 5')+SV.seg(90,190,90+150*k,190,GRN,8)},
 {say:'影子長度乘藍色箭長度，好似會得到一個好特別嘅數。',dur:5,d:k=>G3.txt(170,232,'影子 × 長度',{c:GRN})},
 {say:'將夾角拉到九十度或者更大，呢個數會點變？下一頁試吓！',dur:5,d:k=>G3.txt(330,120,'？',{c:RED,fs:60})}
]),
S.slider('3-2','動手探索','夾角變大，數量積怎樣變？',['先猜：何時等於 0？何時變負？','拖滑桿驗證。'],(h)=>G3.explore(h,{
 sl:[{id:'th',label:'夾角',min:0,max:180,step:15,value:60,fmt:v=>v+'°'}],
 draw:v=>{const O=[220,170],L=75,bl=150,c=Math.cos(v.th*Math.PI/180),s=Math.sin(v.th*Math.PI/180),px=O[0]+1.5*L*c;
  return G3.wrap(440,220,SV.seg(30,170,410,170,'#cbd5e1',2)+G3.arw(O[0],O[1],O[0]+bl,O[1],BLU)+G3.arw(O[0],O[1],px,O[1]-1.5*L*s,RED)+SV.seg(px,O[1]-1.5*L*s,px,O[1],GRY,3,'6 5')+SV.seg(O[0],O[1],px,O[1],GRN,8)+G3.txt(O[0]+bl+14,O[1]+30,'b',{c:BLU})+G3.txt(Math.min(px+24,420),Math.max(O[1]-1.5*L*s,32),'a',{c:RED}))},
 fx:v=>{const d=6*Math.cos(v.th*Math.PI/180);return `\\(|\\boldsymbol{a}|=3,\\ |\\boldsymbol{b}|=2\\)：\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=${(Math.abs(d)<1e-9?0:d).toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['綠色影子走到哪邊就是負數？','用夾角說一次。'],'夾角是 90° 時，數量積等於？',[
 ['0','\\(\\cos 90^\\circ=0\\)，影子長度是 0：\\(\\boldsymbol{a}\\perp\\boldsymbol{b}\\Leftrightarrow\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\)',1],
 ['\\(|\\boldsymbol{a}||\\boldsymbol{b}|\\)','概念錯誤：這是夾角 0° 的情況'],
 ['\\(\\boldsymbol{0}\\)（零向量）','概念錯誤：數量積的結果是數，不是向量']
]),
S.check('3-4','空間中的夾角','正方體中，夾角是多少？',['平移後要看方向。'],`正方體中，〈${vv('AB')}，${vv('C1A1')}〉＝？`,[
 ['135°',`${vv('C1A1')}＝${vv('CA')}，共起點後是 ∠BA 與 CA 方向的鈍角`,1],
 ['45°','概念錯誤：只看所在直線，忽略方向相反'],
 ['90°','概念錯誤：以為異面就垂直']
],{fig:miniCu}),
S.stepper('3-5','跟著做：投影','跟著做：用投影算數量積',['長方體 AD＝2，AB＝3，AA₁＝4，E 是 AA₁ 中點。'],(h)=>{const F=G3.frame(Bx,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:`求 ${vv('BC1')}·${vv('AE')}：先畫出兩向量`,d:k=>F.base()+F.vec('A',Ex,RED,'',k)+F.vec('B','C1',BLU,'',k)},
 {t:`${vv('BC1')} 在 AE 方向的投影是 ${vv('AA1')}，長 4`,d:k=>F.vec('A','A1',GRN,'',k)},
 {t:'同方向，所以數量積＝投影長 × |AE|＝4×2＝8',d:k=>F.text(345,44,'＝8',{c:RED})},
 {t:`再看 ${vv('B1D')}：投影是 ${vv('A1A')}，方向相反，得 －8`,d:k=>F.vec('B1','D',VIO,'',k)+F.text(345,88,'－8',{c:VIO})}
])},{formula:{label:'定義',tex:'\\boldsymbol{a}\\cdot\\boldsymbol{b}=|\\boldsymbol{a}||\\boldsymbol{b}|\\cos\\langle\\boldsymbol{a},\\boldsymbol{b}\\rangle'}}),
S.stepper('3-6','跟著做：求長度','跟著做：用數量積求長度',['長度的平方＝向量自己的數量積。'],(h)=>{G3.steps(h,440,240,[
 {t:'\\(|\\boldsymbol{a}|=2\\)，\\(|\\boldsymbol{b}|=3\\)，夾角 60°，求 \\(|\\boldsymbol{a}+\\boldsymbol{b}|\\)',d:k=>G3.arw(50,190,210,190,BLU)+G3.arw(210,190,310,70,GRN)+G3.txt(130,226,'a',{c:BLU})+G3.txt(280,150,'b',{c:GRN})},
 {t:'首尾相接得和向量（第三邊）',d:k=>G3.arw(50,190,50+260*k,190-120*k,RED)+(k>.7?G3.txt(160,110,'a+b',{c:RED}):'')},
 {t:'\\(|\\boldsymbol{a}+\\boldsymbol{b}|^2=\\boldsymbol{a}^2+2\\boldsymbol{a}\\cdot\\boldsymbol{b}+\\boldsymbol{b}^2\\)，中間項不能漏',d:k=>G3.txt(350,50,'有 2a·b',{c:VIO,fs:30})},
 {t:'\\(=4+2\\times3+9=19\\)，所以長度是 \\(\\sqrt{19}\\)',d:k=>G3.txt(350,100,'＝√19',{c:RED})}
])},{example:{q:'\\(|\\boldsymbol{a}|=1\\)，\\(|\\boldsymbol{b}|=2\\)，夾角 120°，求 \\(|\\boldsymbol{a}+\\boldsymbol{b}|\\)。',steps:['\\(1+2(-1)+4=3\\)'],ans:'\\(\\sqrt3\\)'}}),
S.check('3-7','快問快答','快問快答：棱長 1 的正方體',null,`${vv('AB')}·${vv('A1C1')}＝？`,[
 ['1','\\(1\\times\\sqrt2\\times\\cos45^\\circ=1\\)',1],
 ['\\(\\sqrt2\\)','程序錯誤：忘了乘 \\(\\cos45^\\circ\\)'],
 ['0','概念錯誤：把異面當垂直']
],{fig:miniCu}),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['先寫夾角，再代公式。','卡住先按「提示」。'],7,['方向相反卻用銳角（概念）','漏了 2a·b（程序）','把數量積寫成向量（概念）'],[
 ['\\(|\\boldsymbol{a}|=4\\)，\\(|\\boldsymbol{b}|=3\\)，夾角 120°，求 \\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)',['\\(\\cos120^\\circ\\) 是負數。','\\(4\\times3\\times(-\\tfrac12)\\)'],'－6'],
 [`棱長 2 的正方體，求 ${vv('AB')}·${vv('AC1')}`,[`${vv('AC1')} 在 AB 方向的投影是甚麼？`,`投影是 ${vv('AB')}，長 2。`],'4'],
 ['\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=1\\)，\\(|\\boldsymbol{a}+\\boldsymbol{b}|=\\sqrt3\\)，求夾角，並解釋。',['兩邊平方。'],'60°：\\(3=1+2\\cos\\theta+1\\)，\\(\\cos\\theta=\\tfrac12\\)']
]),
S.check('4-2','合理嗎？','合理嗎？數量積是甚麼東西？',['留意結果的類型。'],'下列哪一句正確？',[
 ['\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\) 的結果是一個實數','長度與餘弦都是數',1],
 ['\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\) 一定有一個是零向量','概念錯誤：兩個非零向量垂直時也是 0'],
 ['\\(|\\boldsymbol{a}\\cdot\\boldsymbol{b}|>|\\boldsymbol{a}||\\boldsymbol{b}|\\) 可能成立','概念錯誤：\\(|\\cos\\theta|\\le1\\)']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：這個夾角對嗎？',null,{q:`正方體中，求〈${vv('AB')}，${vv('B1A1')}〉。`,steps:['AB 與 B₁A₁ 平行','所以夾角是 0°'],wrong:1,why:'概念錯誤：平行有同向和反向兩種，這裏方向相反。',fix:`${vv('B1A1')}＝${vv('BA')}，與 ${vv('AB')} 反向，夾角是 180°`},{fig:miniCu}),
S.mistake('5-2','再抓一次','再抓一次：長度怎樣算？',null,{q:'\\(|\\boldsymbol{a}|=3\\)，\\(|\\boldsymbol{b}|=4\\)，夾角 60°，求 \\(|\\boldsymbol{a}+\\boldsymbol{b}|\\)。',steps:['\\(|\\boldsymbol{a}+\\boldsymbol{b}|^2=9+16\\)','\\(|\\boldsymbol{a}+\\boldsymbol{b}|=5\\)'],wrong:0,why:'程序錯誤：漏了中間項 \\(2\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)，只有垂直時才可省略。',fix:'\\(9+2\\times6+16=37\\)，長度是 \\(\\sqrt{37}\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：夾角與投影',null,[
 ['〈\\(\\boldsymbol{a},\\boldsymbol{b}\\)〉＝30°，求〈\\(-\\boldsymbol{a},\\boldsymbol{b}\\)〉',['\\(-\\boldsymbol{a}\\) 的方向與 \\(\\boldsymbol{a}\\) 相反。','反向後夾角變成它的補角。'],'150°'],
 ['\\(|\\boldsymbol{a}|=4\\)，單位向量 \\(\\boldsymbol{e}\\)，夾角 60°，求 \\(\\boldsymbol{a}\\) 在 \\(\\boldsymbol{e}\\) 上投影的數量',['與單位向量的數量積就是投影數量。'],'2'],
 ['說明 \\(|\\boldsymbol{a}+\\boldsymbol{b}|^2+|\\boldsymbol{a}-\\boldsymbol{b}|^2=2|\\boldsymbol{a}|^2+2|\\boldsymbol{b}|^2\\)，它的幾何意義是甚麼？',null,'兩式展開相加，中間項抵消；平行四邊形兩對角線平方和等於四邊平方和']
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(|\\boldsymbol{a}|=3\\)，\\(|\\boldsymbol{b}|=4\\)，〈\\(\\boldsymbol{a},\\boldsymbol{b}\\)〉＝60°。求 \\(\\boldsymbol{a}\\cdot\\boldsymbol{b}\\) 及 \\(|\\boldsymbol{a}-\\boldsymbol{b}|\\)。',
 ans:'\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=6\\)；\\(|\\boldsymbol{a}-\\boldsymbol{b}|=\\sqrt{13}\\)',
 rubric:{mastered:'兩問全對且展開有中間項 → 下一節直接進入共面向量定理',partial:'數量積對，長度漏中間項或符號錯 → 下一節起步題再做一次展開',notyet:'不會代定義或把結果寫成向量 → 小組用投影圖重新建立定義'},
 delayed:{when:'約一週後',q:`棱長 3 的正方體 ABCD-A₁B₁C₁D₁，求 ${vv('AB')}·${vv('B1D')}。`,ans:'－9'}
}),
S.goals('6-2','懸念解開','懸念解開：拉行李做了多少功？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['功是力與位移的數量積，只有前進方向的分力有用','\\(W=50\\times10\\times\\cos60^\\circ\\)＝250 J','所以不是 500 J，夾角決定「有用的部分」']}),
S.summary('6-3',null,['夾角：平移到同一起點量，範圍 0° 到 180°','\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=|\\boldsymbol{a}||\\boldsymbol{b}|\\cos\\langle\\boldsymbol{a},\\boldsymbol{b}\\rangle\\)，結果是數','\\(\\boldsymbol{a}\\perp\\boldsymbol{b}\\Leftrightarrow\\boldsymbol{a}\\cdot\\boldsymbol{b}=0\\)','求長度：\\(|\\boldsymbol{a}|^2=\\boldsymbol{a}\\cdot\\boldsymbol{a}\\)，展開別漏中間項'])
