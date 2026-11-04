//@meta
{
  id: 21, type: 'new', unit: '1.2.5 點到平面的距離與平行距離', pdf: '57–60',
  topic: '點到平面的距離與平行距離',
  goal: '能用 d＝|BA·n|／|n| 求點到平面、平行線面、平行平面之間的距離',
  prior: 'L12 法向量、L02 投影、L20 距離的定義',
  focus: '平面上任取一點 B，BA 在法向量上的投影數量就是距離',
  difficulty: '公式的絕對值與分母；線面、面面距離歸結為點面距離',
  boundary: '異面直線距離的法向量公式（不要求）',
  reveal: 'd＝|(−1,1,2)·(1,1,2)|／√6＝4／√6＝2√6／3，不用找垂足。',
  priorMap: [
    ['求法向量', '公式的一部分', '1-2 熱身題', '回到 L12 3-5'],
    ['投影數量', '距離的來源', '1-3 快問', '回到 L02 5-3 B 層'],
    ['距離的定義', '最短連線', '3-3', '回到 L20 3-4'],
  ],
  deep: ['會用垂足求點到直線的距離。', '點到平面不用找垂足：投影到法向量上，就直接得到距離；而且 B 取平面上任何一點都一樣。線面、面面距離全部變成同一條公式。', 'L22、L23 綜合；L24 與等體積法比較。'],
  spaced: [
    ['點面距離公式', '下一節（L22）', '不同立體圖'],
    ['平行距離', '約一週後（L23）', '延遲檢測'],
    ['向量法與等體積法', '約一個月後（L24）', '同題兩解'],
  ],
}
//@assert
eq(Math.abs(dot(sub([1,1,2],[2,0,0]),[1,1,2]))/len([1,1,2]),2*sqrt(6)/3,'懸念');
// 3-2 平面 x+y+2z=2 上不同 B，投影相同
for(const B of [[2,0,0],[0,2,0],[0,0,1],[1,1,0]]){eq(Math.abs(dot(sub([1,1,2],B),[1,1,2]))/sqrt(6),2*sqrt(6)/3,'3-2');}
{const Pp=[0,0,2],B=[2,0,0],Cc=[2,2,0],D=[0,2,0],n=[1,0,1];eq(dot(n,sub(Cc,B)),0);eq(dot(n,sub(Pp,B)),0);eq(Math.abs(dot(sub(D,Pp),n))/len(n),sqrt(2),'3-5');}
{const V=G.cube(2).V,n=[1,-1,-1];eq(dot(n,sub(V.B,V.A1)),0);eq(dot(n,sub(V.D,V.A1)),0);eq(dot(n,sub(V.B1,V.C)),0);eq(dot(n,sub(V.D1,V.C)),0);eq(Math.abs(dot(sub(V.C,V.D),n))/len(n),2*sqrt(3)/3,'3-6');}
eq(sqrt(9),3,'3-7');
{const n=[1,1,1];eq(dot(n,sub([0,3,0],[3,0,0])),0);eq(Math.abs(dot(sub([0,0,0],[3,0,0]),n))/len(n),sqrt(3),'4-1B');}
{const V=G.cube(2).V,E=mid(V.A,V.B),Fp=mid(V.B,V.C),n=[2,2,3];eq(dot(n,sub(Fp,E)),0);eq(dot(n,sub(V.D1,E)),0);eq(Math.abs(dot(sub(V.B,E),n))/len(n),2*sqrt(17)/17,'4-1C');}
eq(5*.6,3,'4-2');
{const n=[1,1,0];eq(Math.abs(dot([1,0,0],n))/len(n),sqrt(2)/2,'5-1');}
{const n=[1,1,1];eq(Math.abs(dot(sub([1,1,1],[1,0,0]),n))/len(n),2*sqrt(3)/3,'5-3B');}
{const V=G.cube(1).V,n=[1,-1,-1];eq(Math.abs(dot(sub(V.A,V.D),n))/len(n),sqrt(3)/3,'出口');}
//@shared
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Roof = (()=>{const r=G3.solid({A:[2,0,0],B:[0,2,0],Cc:[0,0,1]},[['A','B','Cc']],true);return r})();
//@ch 1
S.goals('1-1','今天的任務','不用找垂足，也能求點面距離？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說明點面距離與法向量的關係','用公式求點到平面的距離','求平行線面、平行平面的距離']}),
S.tasks('1-2','熱身題','先求法向量和投影',['選一層開始。'],[
 ['平面 z＝0 的一個法向量是？',['哪一軸垂直它？'],'\\((0,0,1)\\)'],
 ['\\(\\boldsymbol{a}=(1,2,3)\\) 在單位向量 \\((0,0,1)\\) 上的投影數量是？',['數量積。'],'3'],
 ['上題答案和點 (1,2,3) 有甚麼幾何關係？',null,'它就是點到平面 z＝0 的距離']
]),
S.check('1-3','舊知識快問','舊知識快問：投影數量',null,'\\(\\boldsymbol{e}\\) 是單位向量，\\(\\boldsymbol{a}\\cdot\\boldsymbol{e}\\) 表示？',[
 ['\\(\\boldsymbol{a}\\) 在 \\(\\boldsymbol{e}\\) 上投影的數量','定義',1],
 ['\\(\\boldsymbol{a}\\) 的長度','概念錯誤：只有同向才等於長度'],
 ['\\(\\boldsymbol{a}\\) 與 \\(\\boldsymbol{e}\\) 的夾角','概念錯誤：要再除以長度']
]),
//@ch 2
S.hook('2-1','猜一猜','無人機離屋頂多高？',null,{
 pic:(()=>{const F=G3.frame(Roof,{W:440,H:175,m:22,extra:[[1,1,2]]});return F.show(F.fill(['A','B','Cc'],'rgba(37,99,235,.15)'),F.base({labels:false}),F.dot([1,1,2],RED,9),F.seg([1,1,2],[1/3,1/3,2/3],GRY,3,'6 5'))})(),
 story:'斜屋頂過 (2,0,0)、(0,2,0)、(0,0,1)。無人機在 (1,1,2)，找不到垂足的位置。',
 guess:['要先找垂足','算不到','不用找垂足也算得到','還不確定'],
 ask:'怎樣不找垂足，就算出無人機與屋頂的距離？',
 later:'學完今天的公式，你就能算出來！'
}),
//@ch 3
S.anim('3-1','粵語動畫','看動畫：投影到法向量',null,'0 0 440 250',[
 {say:'由平面外嘅點 A，落一條垂線去平面，長度就係距離。',dur:5,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.base()+F.dot([.6,0,1.5],RED)+F.seg([.6,0,1.5],[.6,0,1.5-1.5*k],GRY,3,'6 5')}},
 {say:'但係垂足好多時都好難搵。',dur:4,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.text(330,36,'好難搵！',{c:RED})}},
 {say:'喺平面上面隨便揀一點 B，連接 BA。',dur:4,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.vec([-.8,-1,0],[.6,0,1.5],BLU,'',k)}},
 {say:'將 BA 投影落法向量，會得到幾多？下一頁試吓！',dur:5,d:k=>{const Pl=G3.plane('α',{w:1.9,d:1.4}),F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.vec([-.8,-1,0],[-.8,-1,1.5],GRN,'n',k,[-22,0])}}
]),
S.slider('3-2','動手探索','換一個 B，投影會變嗎？',['B 在屋頂上移動。','先猜：距離會變嗎？'],(h)=>G3.explore(h,{
 sl:[{id:'bu',label:'沿 AB',min:0,max:1,step:.25,value:0},{id:'bw',label:'沿 AC',min:0,max:1,step:.25,value:0}],
 draw:v=>{const F=G3.frame(Roof,{W:440,H:190,m:22,fs:34,extra:[[1,1,2]]});const A=[2,0,0],q=(()=>{let u=v.bu,w=v.bw;if(u+w>1){const s=u+w;u/=s;w/=s;}return G3.add(G3.add(A,G3.mul([-2,2,0],u)),G3.mul([-2,0,1],w))})();return F.show(F.fill(['A','B','Cc'],'rgba(37,99,235,.15)'),F.base({labels:false}),F.vec(q,[1,1,2],BLU),F.dot(q,GRN),F.dot([1,1,2],RED,8))},
 fx:v=>{let u=v.bu,w=v.bw;if(u+w>1){const s=u+w;u/=s;w/=s;}const B=[2-2*u-2*w,2*u,w],BA=[1-B[0],1-B[1],2-B[2]],d=BA[0]+BA[1]+2*BA[2];return `\\(\\overrightarrow{BA}\\cdot\\boldsymbol{n}=${d.toFixed(2)}\\)，\\(d=\\dfrac{${d.toFixed(0)}}{\\sqrt6}\\approx${(d/Math.sqrt(6)).toFixed(3)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['B 移動時，哪個數不變？'],'A 到平面的距離，等於？',[
 ['\\(\\dfrac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}\\)','\\(\\overrightarrow{BA}\\) 在法向量上投影數量的絕對值',1],
 ['\\(|\\overrightarrow{BA}|\\)','概念錯誤：BA 一般不垂直平面'],
 ['\\(|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|\\)','程序錯誤：\\(\\boldsymbol{n}\\) 不是單位向量時要除以長度']
]),
S.check('3-4','選哪一點','B 應該怎樣選？',['想想計算量。'],'公式中的 B 可以是？',[
 ['平面內任意一點','投影數量都一樣，選坐標最簡單的',1],
 ['一定要是垂足','概念錯誤：公式的好處是不用垂足'],
 ['一定要是原點','概念錯誤：原點不一定在平面內']
]),
S.stepper('3-5','跟著做：點到平面','跟著做：D 到平面 PBC',['PA⊥正方形 ABCD，PA＝AB＝2，A 為原點。'],(h)=>{const T=G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);const F=G3.frame(T,{W:440,H:200,m:34,fs:38,az:-55,el:20});G3.steps(h,440,200,[
 {t:'\\(\\overrightarrow{BC}=(0,2,0)\\)，\\(\\overrightarrow{BP}=(-2,0,2)\\)',d:k=>F.base()+F.fill(['P','B','C'],'rgba(37,99,235,.18)')},
 {t:'法向量：\\(y=0\\)，\\(-x+z=0\\)，\\(\\boldsymbol{n}=(1,0,1)\\)',d:k=>F.text(350,40,'n',{c:VIO})},
 {t:'取平面內的 P：\\(\\overrightarrow{PD}=(0,2,-2)\\)',d:k=>F.vec('P','D',RED,'',k)},
 {t:'\\(d=\\dfrac{|-2|}{\\sqrt2}=\\sqrt2\\)',d:k=>F.text(350,88,'√2',{c:RED})}
])},{formula:{label:'點面距離',tex:'d=\\frac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}'}}),
S.stepper('3-6','跟著做：平行平面','跟著做：平面 A₁BD 與平面 CB₁D₁',['棱長 2 的正方體，D 為原點。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'兩平面的法向量都是 \\(\\boldsymbol{n}=(1,-1,-1)\\)，所以平行',d:k=>F.base()+F.fill(['A1','B','D'],'rgba(37,99,235,.18)')+F.fill(['C','B1','D1'],'rgba(5,150,105,.18)')},
 {t:'距離歸結為點面距離：各取一點 D、C',d:k=>F.vec('D','C',RED,'',k)},
 {t:'\\(\\overrightarrow{DC}=(0,2,0)\\)，\\(d=\\dfrac{|-2|}{\\sqrt3}=\\dfrac{2\\sqrt3}{3}\\)',d:k=>F.text(350,40,'2√3/3',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：最簡單的情況',null,'P(1,2,3) 到平面 xOy 的距離是？',[
 ['3','\\(|z|\\)',1],
 ['\\(\\sqrt{14}\\)','概念錯誤：這是到原點的距離'],
 ['1','概念錯誤：這是到 yOz 的距離']
]),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['法向量＋平面內一點。','卡住先按「提示」。'],7,['漏絕對值（粗心）','忘記除以 \\(|\\boldsymbol{n}|\\)（程序）','法向量算錯（程序）'],[
 ['P(4,−1,2) 到平面 yOz 的距離？',['平面 yOz 的法向量是？'],'4'],
 ['OA、OB、OC 兩兩垂直，都等於 3，求 O 到平面 ABC 的距離',['\\(\\boldsymbol{n}=(1,1,1)\\)。'],'\\(\\sqrt3\\)'],
 ['棱長 2 的正方體，E、F 是 AB、BC 中點，求 B 到平面 D₁EF 的距離',['\\(\\boldsymbol{n}=(2,2,3)\\)。'],'\\(\\dfrac{2\\sqrt{17}}{17}\\)']
]),
S.check('4-2','合理嗎？','合理嗎？距離有上限？',['想想斜邊。'],'A 到平面的距離是 \\(d\\)，A 到平面內 B 的距離是 5，\\(d\\) 的範圍是？',[
 ['\\(0\\le d\\le5\\)','距離是最短的；A 在平面內時為 0',1],
 ['\\(d>5\\)','概念錯誤：垂線段最短'],
 ['\\(d=5\\)','概念錯誤：只有 AB 垂直平面才相等']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：分母去了哪裏？',null,{q:'\\(\\boldsymbol{n}=(1,1,0)\\)，\\(\\overrightarrow{BA}=(1,0,0)\\)，求距離。',steps:['\\(\\overrightarrow{BA}\\cdot\\boldsymbol{n}=1\\)','距離是 1'],wrong:1,why:'程序錯誤：\\(\\boldsymbol{n}\\) 不是單位向量，要除以 \\(|\\boldsymbol{n}|=\\sqrt2\\)。',fix:'\\(d=\\dfrac{1}{\\sqrt2}=\\dfrac{\\sqrt2}{2}\\)'}),
S.mistake('5-2','再抓一次','再抓一次：這是點面距離嗎？',null,{q:'A(3,4,5)，B 在平面內，\\(|\\overrightarrow{BA}|=5\\)，求 A 到平面的距離。',steps:['距離就是 AB','答案是 5'],wrong:0,why:'概念錯誤：AB 不一定垂直平面，距離可能更短。',fix:'要用 \\(\\dfrac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}\\)；條件不足時不能斷定是 5'}),
S.tasks('5-3','升級挑戰','升級挑戰：平行距離',null,[
 ['到平面 α 距離 3 cm 的點，組成甚麼圖形？',['α 兩邊都要算。'],'兩個與 α 平行的平面'],
 ['α 過 B(1,0,0)、法向量 (1,1,1)，β∥α 且過 A(1,1,1)，求距離',['\\(\\overrightarrow{BA}=(0,1,1)\\)。'],'\\(\\dfrac{2\\sqrt3}{3}\\)'],
 ['為甚麼平行線面、平行面面的距離都可以用同一條公式？',null,'線或面上任何一點到另一面的距離都一樣，所以都歸結為點面距離']
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'棱長 1 的正方體 ABCD-A₁B₁C₁D₁，求 A 到平面 A₁BD 的距離。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)（\\(\\boldsymbol{n}=(1,-1,-1)\\)，\\(\\overrightarrow{DA}=(1,0,0)\\)）',
 rubric:{mastered:'法向量、公式都對 → 下一節綜合練習做 C 層',partial:'方法對、分母或絕對值有誤 → 下一節由 B 層開始',notyet:'不會用公式 → 小組回到 3-2'},
 delayed:{when:'約一週後',q:'A(3,0,0)、B(0,3,0)、C(0,0,3)，求原點到平面 ABC 的距離。',ans:'\\(\\sqrt3\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：無人機離屋頂多高？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['不用找垂足：\\(\\boldsymbol{n}=(1,1,2)\\)，\\(\\overrightarrow{BA}=(-1,1,2)\\)','\\(d=\\dfrac{|{-1}+1+4|}{\\sqrt6}=\\dfrac{2\\sqrt6}{3}\\)','屋頂上換任何一點 B，答案都一樣']}),
S.summary('6-3',null,['\\(d=\\dfrac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}\\)，B 是平面內任意一點','步驟：法向量 → 平面內一點 → 代公式','平行線面、平行面面：都歸結為點面距離','不用找垂足'])
