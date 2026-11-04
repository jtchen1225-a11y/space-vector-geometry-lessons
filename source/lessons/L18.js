//@meta
{
  id: 18, type: 'new', unit: '1.2.4 用法向量求面面角', pdf: '51–53',
  topic: '用法向量求平面所成的角',
  goal: '能用法向量求兩平面所成的角，並判斷二面角是銳角還是鈍角',
  prior: 'L17 二面角、L12 法向量',
  focus: '兩平面所成的角 θ：cosθ＝|cos〈n₁,n₂〉|；sinθ＝sin〈n₁,n₂〉',
  difficulty: '法向量夾角可能等於二面角，也可能與它互補，要看圖判斷',
  boundary: '點面距離（L21）',
  reveal: 'cosθ＝½，兩塊屋面所成的角是 60°；屋脊內的二面角是 60° 還是 120°，要看圖形。',
  priorMap: [
    ['求法向量', '公式的一部分', '1-2 熱身題', '回到 L12 3-5'],
    ['二面角與所成的角', '選答案', '1-3 快問', '回到 L17 3-4'],
    ['線面角公式', '比較三種角', '3-4', '回到 L16 3-3'],
  ],
  deep: ['能作平面角，但作法有時很難。', '不用作平面角：兩個法向量已經記錄了兩個面的方向，它們的夾角與二面角相等或互補。', 'L19 綜合比較三種角；L23 複習。'],
  spaced: [
    ['面面角公式', '下一節（L19）', '與線線角、線面角比較'],
    ['判斷銳鈍', '約一週後（L20 起步題）', '延遲檢測'],
    ['三種角總表', '約一個月後（L23）', '概念地圖'],
  ],
}
//@assert
eq(cosv([1,0,1],[0,1,1]),.5,'懸念');
{const n=[0,1,1],Dd=[0,1,0],Cc=[1,1,0],Pp=[0,0,1];eq(dot(n,sub(Cc,Dd)),0);eq(dot(n,sub(Pp,Dd)),0);eq(Math.abs(cosv([0,1,0],n)),sqrt(2)/2,'3-5');}
{const V=G.cube(2).V,n1=[1,-1,-1],n2=[1,-1,1];eq(dot(n1,sub(V.B,V.D)),0);eq(dot(n1,sub(V.A1,V.D)),0);eq(dot(n2,sub(V.B,V.D)),0);eq(dot(n2,sub(V.C1,V.D)),0);eq(cosv(n1,n2),1/3,'3-6');const O=mid(V.B,V.D);eq(cosv(sub(V.A1,O),sub(V.C1,O)),1/3,'3-6 平面角');}
eq(angd([1,0,0],[1,1,0]),45,'3-7');
{const A=[2,0,0],B=[0,2,0],Cc=[0,0,1],n=[1,1,2];eq(dot(n,sub(B,A)),0);eq(dot(n,sub(Cc,A)),0);eq(cosv(n,[0,0,1]),sqrt(6)/3,'4-1B');}
{const V=G.cube(1).V,n=[1,1,-1];eq(Math.abs(cosv(n,[0,0,1])),sqrt(3)/3,'出口');}
{const n1=[1,0,1],n2=[0,1,1];eq(dot(n1,[0,1,0]),0);eq(dot(n1,[-1,0,1]),0);eq(dot(n2,[1,0,0]),0);eq(dot(n2,[0,-1,1]),0);eq(cosv(n1,n2),.5,'延遲');}
eq(Math.sqrt(1-1/14*9),sqrt(70)/14,'4-1C');eq(dot([3,-2,1],[2,3,0]),0);eq(dot([3,-2,1],[-1,0,3]),0);eq(cosv([1,0,0],[3,-2,1]),3/sqrt(14));
//@shared
const Cu = G3.cube(2);
const Wg=(d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
//@ch 1
S.goals('1-1','今天的任務','不用作平面角，也能求面面角？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說明法向量夾角與二面角的關係','用 \\(\\cos\\theta=|\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle|\\) 求所成的角','判斷二面角是銳角還是鈍角']}),
S.tasks('1-2','熱身題','求兩個法向量',['選一層開始。'],[
 ['平面 xOy 的一個法向量是？',['哪一軸垂直它？'],'\\((0,0,1)\\)'],
 ['A(1,0,0)、B(0,1,0)、C(0,0,1)，求平面 ABC 的法向量',['參考 L12。'],'\\((1,1,1)\\)'],
 ['上兩個法向量的夾角餘弦是？它和兩平面的關係呢？',null,'\\(\\tfrac{\\sqrt3}{3}\\)；這也是兩平面所成角的餘弦']
]),
S.check('1-3','舊知識快問','舊知識快問：範圍',null,'兩平面所成的角範圍是？',[
 ['0° 到 90°','定義',1],
 ['0° 到 180°','概念錯誤：那是二面角'],
 ['90° 到 180°','概念錯誤：沒有這樣的規定']
]),
//@ch 2
S.hook('2-1','猜一猜','兩塊屋面，成多少度？',null,{
 pic:G3.wrap(440,170,`<polygon points="60,150 200,50 240,50 380,150" fill="rgba(37,99,235,.12)" stroke="${BLU}" stroke-width="3"/>`+SV.seg(200,50,240,50,RED,6)+G3.arw(130,100,80,40,GRN)+G3.arw(310,100,360,40,AMB)),
 story:'兩塊屋面的法向量是 (1,0,1) 和 (0,1,1)，爬不上去量度。',
 guess:['算得到，是 60°','算得到，是 120°','算不到，一定要量','還不確定'],
 ask:'法向量的夾角，就是屋面的角嗎？',
 later:'學完今天的內容，你就能判斷！'
}),
//@ch 3
S.anim('3-1','粵語動畫','看動畫：兩支法向量',null,'0 0 440 250',[
 {say:'兩個半平面組成二面角，每個面都有一支法向量。',dur:5,d:k=>{const W=Wg(110),F=G3.frame(W,{H:250,m:18,az:40,el:20,extra:[[1.5,0,1.8],[-.6,0,1.9]]});return F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')+F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.12)')+F.base({labels:false})+F.vec([.8,0,0],[.8,0,1.2],BLU,'',k)}},
 {say:'將第二支法向量由另一個面豎起嚟。',dur:4,d:k=>{const t=110*Math.PI/180,W=Wg(110),F=G3.frame(W,{H:250,m:18,az:40,el:20,extra:[[1.5,0,1.8],[-.6,0,1.9]]}),p=[.8*Math.cos(t),0,.8*Math.sin(t)],q=[p[0]+1.2*Math.sin(t),0,p[2]-1.2*Math.cos(t)];return F.vec(p,q,GRN,'',k)}},
 {say:'將兩支箭移到同一點，就量到佢哋嘅夾角。',dur:5,d:k=>{const W=Wg(110),F=G3.frame(W,{H:250,m:18,az:40,el:20,extra:[[1.5,0,1.8],[-.6,0,1.9]]});return F.text(320,36,'夾角？',{c:RED})}},
 {say:'呢個夾角同二面角係咪一樣？下一頁，拖吓滑桿睇吓！',dur:5,d:k=>{const W=Wg(110),F=G3.frame(W,{H:250,m:18,az:40,el:20,extra:[[1.5,0,1.8],[-.6,0,1.9]]});return F.text(320,80,'一樣嗎？',{c:VIO})}}
]),
S.slider('3-2','動手探索','法向量的夾角和二面角一樣嗎？',['拖二面角，再把 n₂ 反向。','比較兩個角。'],(h)=>G3.explore(h,{
 sl:[{id:'ph',label:'二面角',min:30,max:150,step:30,value:60,fmt:v=>v+'°'},{id:'fl',label:'n₂',min:0,max:1,step:1,value:0,fmt:v=>v?'反向':'原向'}],
 draw:v=>{const O=[215,130],R=95,t=v.ph*Math.PI/180,bx=O[0]+R*Math.cos(t),by=O[1]-R*Math.sin(t),nA=[O[0]+R*.5,O[1]],nB=[O[0]+R*.5*Math.cos(t),O[1]-R*.5*Math.sin(t)],s=v.fl?-1:1;
  return G3.wrap(440,190,SV.seg(O[0],O[1],O[0]+R+50,O[1],BLU,6)+SV.seg(O[0],O[1],O[0]+(R+50)*Math.cos(t),O[1]-(R+50)*Math.sin(t),GRN,6)+SV.dot(O[0],O[1],RED,8)+G3.arw(nA[0],nA[1],nA[0],nA[1]-60,BLU)+G3.arw(nB[0],nB[1],nB[0]+s*60*Math.sin(t),nB[1]+s*60*Math.cos(t),GRN))},
 fx:v=>{const a=v.fl?v.ph:180-v.ph;return `二面角 \\(${v.ph}^\\circ\\)，\\(\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=${a}^\\circ\\)，所成的角 \\(${Math.min(v.ph,180-v.ph)}^\\circ\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['法向量方向可以取反。'],'法向量夾角與二面角的關係是？',[
 ['相等或互補','法向量方向不同時會變成補角',1],
 ['一定相等','概念錯誤：把法向量反向就變互補'],
 ['一定互餘','概念錯誤：那是線面角的情況']
]),
S.check('3-4','三種角','三種角，哪個用正弦？',['比較三個公式。'],'用向量求角時，哪一種用 \\(\\sin\\theta=|\\cos\\cdots|\\)？',[
 ['線面角','方向向量與法向量互餘',1],
 ['線線角','概念錯誤：線線角是 \\(\\cos\\theta=|\\cos\\cdots|\\)'],
 ['面面角','概念錯誤：面面角也是 \\(\\cos\\theta=|\\cos\\cdots|\\)']
]),
S.stepper('3-5','跟著做：求面面角','跟著做：平面 PAB 與平面 PCD',['PA⊥正方形 ABCD，PA＝AB＝1。'],(h)=>{const T=G3.solid({A:[0,0,0],B:[1,0,0],C:[1,1,0],D:[0,1,0],P:[0,0,1]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);const F=G3.frame(T,{W:440,H:200,m:34,fs:38,az:-55,el:20});G3.steps(h,440,200,[
 {t:'AD⊥平面 PAB：\\(\\boldsymbol{n}_1=\\overrightarrow{AD}=(0,1,0)\\)',d:k=>F.base()+F.vec('A','D',BLU,'',k)},
 {t:'平面 PCD：\\(\\overrightarrow{DC}=(1,0,0)\\)，\\(\\overrightarrow{DP}=(0,-1,1)\\)',d:k=>F.vec('D','C',GRN,'',k)+F.vec('D','P',GRN,'',k)},
 {t:'解得 \\(\\boldsymbol{n}_2=(0,1,1)\\)',d:k=>F.text(350,40,'n₂',{c:GRN})},
 {t:'\\(\\cos\\theta=\\dfrac{1}{1\\times\\sqrt2}=\\dfrac{\\sqrt2}{2}\\)，\\(\\theta=45^\\circ\\)',d:k=>F.text(350,88,'45°',{c:RED})}
])},{formula:{label:'面面角',tex:'\\cos\\theta=\\frac{|\\boldsymbol{n}_1\\cdot\\boldsymbol{n}_2|}{|\\boldsymbol{n}_1||\\boldsymbol{n}_2|}'}}),
S.stepper('3-6','跟著做：判斷銳鈍','跟著做：平面 A₁BD 與平面 C₁BD',['棱長 2 的正方體，D 為原點。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});const O=[1,1,0];G3.steps(h,440,200,[
 {t:'\\(\\boldsymbol{n}_1=(1,-1,-1)\\)，\\(\\boldsymbol{n}_2=(1,-1,1)\\)',d:k=>F.base()+F.fill(['A1','B','D'],'rgba(37,99,235,.18)')+F.fill(['C1','B','D'],'rgba(5,150,105,.18)')},
 {t:'\\(\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=\\dfrac{1}{3}\\)，所成的角的餘弦是 \\(\\tfrac13\\)',d:k=>F.text(350,40,'⅓',{c:RED})},
 {t:'要知道二面角：看圖，取 BD 中點 O',d:k=>F.seg(O,'A1',BLU,4,'',k)+F.seg(O,'C1',GRN,4,'',k)},
 {t:'\\(\\overrightarrow{OA_1}\\cdot\\overrightarrow{OC_1}=2>0\\)，二面角是銳角',d:k=>F.text(350,88,'銳角',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：套公式',null,'\\(\\boldsymbol{n}_1=(1,0,0)\\)，\\(\\boldsymbol{n}_2=(1,1,0)\\)，兩平面所成的角是？',[
 ['45°','\\(\\tfrac{1}{\\sqrt2}\\)',1],
 ['135°','概念錯誤：所成的角不大於 90°'],
 ['90°','程序錯誤：數量積不是 0']
]),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['兩個法向量，再代公式。','記得取絕對值。'],7,['餘弦為負時答鈍角（概念）','用了正弦公式（概念）','法向量計算錯（程序）'],[
 ['\\(\\boldsymbol{n}_1=(1,0,1)\\)，\\(\\boldsymbol{n}_2=(0,1,1)\\)，兩平面所成的角是？',['餘弦公式。'],'60°'],
 ['A(2,0,0)、B(0,2,0)、C(0,0,1)，平面 ABC 與 xOy 所成角的餘弦是？',['\\(\\boldsymbol{n}=(1,1,2)\\)。'],'\\(\\dfrac{\\sqrt6}{3}\\)'],
 ['\\(\\boldsymbol{n}_1=(1,0,0)\\)，\\(\\boldsymbol{n}_2=(3,-2,1)\\)，求兩平面所成角的正弦。',['先求餘弦。'],'\\(\\dfrac{\\sqrt{70}}{14}\\)']
]),
S.check('4-2','合理嗎？','合理嗎？餘弦是負數',['看題目問甚麼。'],'\\(\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=-\\tfrac12\\)，兩平面所成的角是？',[
 ['60°','所成的角取絕對值',1],
 ['120°','概念錯誤：120° 只可能是二面角'],
 ['30°','程序錯誤：用了正弦關係']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：二面角一定等於法向量夾角？',null,{q:'\\(\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=60^\\circ\\)，求二面角。',steps:['法向量夾角等於二面角','所以二面角一定是 60°'],wrong:0,why:'概念錯誤：兩者相等或互補，要看圖形或法向量方向。',fix:'二面角是 60° 或 120°；由圖判斷是銳角還是鈍角'}),
S.mistake('5-2','再抓一次','再抓一次：所成的角',null,{q:'\\(\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=-\\tfrac{\\sqrt3}{2}\\)，求兩平面所成的角。',steps:['\\(\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle=150^\\circ\\)','所成的角是 150°'],wrong:1,why:'概念錯誤：所成的角不大於 90°。',fix:'所成的角是 30°'}),
S.tasks('5-3','升級挑戰','升級挑戰：三種角總表',null,[
 ['寫出線線角的公式。',['絕對值＋餘弦。'],'\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle|\\)'],
 ['寫出線面角的公式。',['方向向量與法向量。'],'\\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)'],
 ['為甚麼只有線面角用正弦？',null,'只有它要比較的是直線與法線的餘角']
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'棱長 1 的正方體 ABCD-A₁B₁C₁D₁，求平面 AB₁C 與底面 ABCD 所成角的餘弦。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)（\\(\\boldsymbol{n}=(1,1,-1)\\) 與 \\((0,0,1)\\)）',
 rubric:{mastered:'法向量、絕對值都對 → 下一節綜合練習做 C 層',partial:'法向量對、計算有誤 → 下一節由 B 層開始',notyet:'未能求法向量或混淆公式 → 小組回到 3-5'},
 delayed:{when:'約一週後',q:'PA⊥正方形 ABCD，PA＝AB。求平面 PBC 與平面 PDC 所成的角。',ans:'60°'}
}),
S.goals('6-2','懸念解開','懸念解開：屋面成多少度？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['數量積是 1，長度都是 \\(\\sqrt2\\)，所以餘弦是 \\(\\tfrac12\\)','兩塊屋面所成的角是 60°','屋脊的二面角是 60° 或 120°，要看圖判斷']}),
S.summary('6-3',null,['\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle|\\)，\\(\\sin\\theta=\\sin\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle\\)','法向量夾角與二面角相等或互補','所成的角 0° 到 90°，二面角要看圖判斷銳鈍','線線、面面用餘弦；線面用正弦'])
