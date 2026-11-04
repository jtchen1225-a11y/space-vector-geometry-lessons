//@meta
{
  id: 16, type: 'new', unit: '1.2.3 用向量求線面角', pdf: '46–48',
  topic: '用方向向量和法向量求線面角',
  goal: '能用 sinθ＝|cos〈v,n〉| 求直線與平面所成的角',
  prior: 'L15 線面角定義、L12 求法向量、L10 方向向量',
  focus: 'v 與 n 的夾角和線面角互餘（或差 90°），所以要用正弦',
  difficulty: '正弦與餘弦不要混淆；絕對值的作用',
  boundary: '平面與平面所成的角（L18）',
  reveal: 'sinθ＝|(0,0,1)·(1,1,1)|／√3＝√3／3，竹竿與斜坡成約 35.3°。',
  priorMap: [
    ['求法向量', '公式的一部分', '1-2 熱身題', '回到 L12 3-5'],
    ['線面角的定義', '理解互餘關係', '1-3 快問', '回到 L15 3-5'],
    ['夾角的餘弦公式', '求 cos〈v,n〉', '3-5', '回到 L06 3-5'],
  ],
  deep: ['能在圖中找射影求線面角，但有時很難找垂足。', '不用找垂足：法向量已經記錄了平面的方向；線面角與 v、n 的夾角互餘，用正弦統一兩種情況。', 'L18 面面角；L19 綜合比較三種角。'],
  spaced: [
    ['線面角公式', '下一節（L17）起步題', '換一個立體圖'],
    ['正弦與餘弦的分別', '約一週後（L19）', '延遲檢測'],
    ['向量法與幾何法', '約一個月後（L24）', '同題兩解'],
  ],
}
//@assert
eq(Math.abs(cosv([0,0,1],[1,1,1])),sqrt(3)/3,'懸念');
{const V=G.cube(1).V,n=[1,-1,-1];eq(dot(n,sub(V.B,V.D)),0);eq(dot(n,sub(V.A1,V.D)),0);eq(Math.abs(cosv(sub(V.D1,V.A),n)),sqrt(6)/3,'3-5');}
{const A=[0,0,0],B=[1,0,0],D=[0,1,0],Cc=[1,1,0],Pp=[0,0,1];eq(Math.abs(cosv(sub(Cc,Pp),[0,1,0])),sqrt(3)/3,'3-6');}
eq(Math.asin(Math.abs(cosv([1,0,1],[0,0,1])))*180/Math.PI,45,'4-1A');
{const V=G.cube(2).V;eq(Math.abs(cosv(sub(V.C,V.A1),[0,0,1])),sqrt(3)/3,'4-1B');}
{const Pp=[0,0,1],B=[1,1,0],Cc=[0,1,0],D=[0,0,0],n=[0,1,1];eq(dot(n,sub(Cc,B)),0);eq(dot(n,sub(B,Pp)),0);eq(Math.abs(cosv(sub(D,Pp),n)),sqrt(2)/2,'4-1C');}
{const V=G.cube(1).V,n=[1,1,-1];eq(Math.abs(cosv(sub(V.B,V.A1),n)),sqrt(6)/3,'5-3B');}
{const Cc=[0,0,0],A=[2,0,0],B=[0,2,0],B1=[0,2,2];eq(Math.abs(cosv(sub(B1,A),[1,0,0])),sqrt(3)/3,'出口');}
{const Pp=[0,0,2],Cc=[1,1,0];eq(Math.abs(cosv(sub(Cc,Pp),[0,0,1])),sqrt(6)/3,'延遲');}
eq(Math.sin(30*Math.PI/180),.5,'4-2');
//@shared
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
//@ch 1
S.goals('1-1','今天的任務','找不到垂足，也能求線面角？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說明 θ 與〈v,n〉的關係','用 \\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\) 求角','比較向量法與幾何法']}),
S.tasks('1-2','熱身題','先求一個法向量',['回想 L12。','選一層開始。'],[
 ['\\(\\boldsymbol{n}\\perp(1,0,0)\\)，\\(\\boldsymbol{n}\\perp(0,1,0)\\)，寫一個 \\(\\boldsymbol{n}\\)',['這個平面是甚麼？'],'\\((0,0,1)\\)'],
 ['\\(\\overrightarrow{AB}=(0,1,-1)\\)，\\(\\overrightarrow{AC}=(1,0,-1)\\)，求法向量',['列兩條方程。'],'\\((1,1,1)\\)'],
 ['同一平面取不同法向量，會影響求角的結果嗎？',null,'不會：只差倍數，餘弦的絕對值不變']
]),
S.check('1-3','舊知識快問','舊知識快問：互餘',null,'若線面角是 30°，直線與平面法線所成的角是？',[
 ['60°','法線垂直平面，兩角互餘',1],
 ['30°','概念錯誤：把兩個角當成相同'],
 ['120°','概念錯誤：直線夾角不大於 90°']
]),
//@ch 2
S.hook('2-1','猜一猜','竹竿與斜坡的角是多少？',null,{
 pic:(()=>{const P2=G3.plane('');P2.V={P1:[1.4,-1.5,0],P2:[1.4,1.5,0],P3:[-1,1.5,.9],P4:[-1,-1.5,.9]};const F=G3.frame(P2,{W:440,H:175,m:18,extra:[[.2,0,1.9]]});return F.show(F.base(),F.seg([.2,0,.45],[.2,0,1.9],BLU,6))})(),
 story:'竹竿垂直地面，方向 (0,0,1)。斜坡的法向量是 (1,1,1)。',
 guess:['角的餘弦就是 √3／3','角的正弦才是 √3／3','要實地量度','還不確定'],
 ask:'用兩個向量算出的 √3／3，究竟代表哪個角？',
 later:'學完今天的公式，你就能確定！'
}),
//@ch 3
S.anim('3-1','粵語動畫','看動畫：v 和 n 的夾角',null,'0 0 440 250',[
 {say:'平面有一支法向量 n，直線有一支方向向量 v。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[0,0,1.8]]});return F.base()+F.vec([0,0,0],[0,0,1.6],RED,'n',k,[20,0])+F.vec([0,0,0],[1.2,.3,.9],BLU,'v',k,[14,-8])}},
 {say:'直線同平面嘅角，叫做 θ，喺影子同直線之間。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[0,0,1.8]]});return F.seg([0,0,0],[1.2,.3,0],GRN,4,'',k)+F.arc([0,0,0],[1.2,.3,0],[1.2,.3,.9],GRN,'θ',.75,k)}},
 {say:'v 同 n 之間，亦都有一個夾角。',dur:4,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[0,0,1.8]]});return F.arc([0,0,0],[1.2,.3,.9],[0,0,1.6],VIO,'',.75,k)}},
 {say:'兩個角加埋，會得到幾多度？下一頁試吓！',dur:4,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[0,0,1.8]]});return F.text(330,36,'加埋幾多？',{c:VIO})}}
]),
S.slider('3-2','動手探索','θ 和〈v,n〉有甚麼關係？',['拖 θ，再把 n 反向。','哪個數一直不變？'],(h)=>G3.explore(h,{
 sl:[{id:'lt',label:'θ',min:15,max:90,step:15,value:30,fmt:v=>v+'°'},{id:'nd',label:'n 方向',min:0,max:1,step:1,value:0,fmt:v=>v?'向下':'向上'}],
 draw:v=>{const F=G3.frame(Pl,{W:440,H:190,m:14,el:24,fs:34,extra:[[0,0,1.6],[0,0,-1.3]]});const t=v.lt*Math.PI/180,d=[1.5*Math.cos(t),0,1.5*Math.sin(t)],n=[0,0,v.nd?-1.2:1.4];return F.show(F.base(),F.seg([0,0,0],[1.5*Math.cos(t),0,0],GRN,4),F.vec([0,0,0],d,BLU),F.vec([0,0,0],n,RED))},
 fx:v=>{const a=v.nd?90+v.lt:90-v.lt,c=Math.cos(a*Math.PI/180),s=Math.sin(v.lt*Math.PI/180);return `\\(\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle=${a}^\\circ\\)，\\(\\cos=${(Math.abs(c)<1e-9?0:c).toFixed(2)}\\)，\\(\\sin\\theta=${s.toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['用絕對值說一次。'],'\\(\\theta\\) 與 \\(\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle\\) 的關係是？',[
 ['\\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)','互餘或相差 90°，用絕對值統一',1],
 ['\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)','概念錯誤：那是線線角的公式'],
 ['\\(\\theta=\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle\\)','概念錯誤：兩者不是同一個角']
]),
S.check('3-4','正弦與餘弦','為甚麼是正弦？',['想想 v 和 n 垂直時。'],'\\(\\boldsymbol{v}\\perp\\boldsymbol{n}\\) 時，公式給出的 \\(\\theta\\) 是？',[
 ['0°','\\(\\sin\\theta=0\\)：直線與平面平行或在內',1],
 ['90°','概念錯誤：\\(\\boldsymbol{v}\\perp\\boldsymbol{n}\\) 不是線面垂直'],
 ['不能確定','程序錯誤：代入公式就能求得']
]),
S.stepper('3-5','跟著做：向量法','跟著做：AD₁ 與平面 A₁BD',['棱長 1 的正方體，D 為原點。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'\\(\\overrightarrow{DB}=(1,1,0)\\)，\\(\\overrightarrow{DA_1}=(1,0,1)\\)',d:k=>F.base()+F.fill(['A1','B','D'],'rgba(37,99,235,.18)')},
 {t:'法向量：\\(x+y=0\\)，\\(x+z=0\\)，\\(\\boldsymbol{n}=(1,-1,-1)\\)',d:k=>F.text(350,40,'n 求得',{c:VIO})},
 {t:'\\(\\overrightarrow{AD_1}=(-1,0,1)\\)，\\(\\boldsymbol{v}\\cdot\\boldsymbol{n}=-2\\)',d:k=>F.vec('A','D1',RED,'',k)},
 {t:'\\(\\sin\\theta=\\dfrac{2}{\\sqrt2\\sqrt3}=\\dfrac{\\sqrt6}{3}\\)',d:k=>F.text(350,90,'√6/3',{c:RED})}
])},{formula:{label:'線面角',tex:'\\sin\\theta=\\frac{|\\boldsymbol{v}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{v}||\\boldsymbol{n}|}'}}),
S.stepper('3-6','跟著做：現成法向量','跟著做：有現成的法向量',['PA⊥正方形 ABCD，PA＝AB＝1。'],(h)=>{const T=G3.solid({A:[0,0,0],B:[1,0,0],C:[1,1,0],D:[0,1,0],P:[0,0,1]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);const F=G3.frame(T,{W:440,H:200,m:34,fs:38,az:-55,el:20});G3.steps(h,440,200,[
 {t:'求 PC 與平面 PAB 所成的角',d:k=>F.base()+F.seg('P','C',BLU,5,'',k)},
 {t:'AD⊥平面 PAB，法向量可取 \\(\\overrightarrow{AD}=(0,1,0)\\)',d:k=>F.vec('A','D',RED,'',k)},
 {t:'\\(\\overrightarrow{PC}=(1,1,-1)\\)',d:k=>F.vec('P','C',BLU,'',k)},
 {t:'\\(\\sin\\theta=\\dfrac{1}{1\\times\\sqrt3}=\\dfrac{\\sqrt3}{3}\\)',d:k=>F.text(350,44,'√3/3',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：套公式',null,'\\(\\boldsymbol{v}=(1,0,1)\\)，\\(\\boldsymbol{n}=(0,0,1)\\)，線面角是？',[
 ['45°','\\(\\sin\\theta=\\tfrac{1}{\\sqrt2}\\)',1],
 ['135°','概念錯誤：線面角不大於 90°'],
 ['90°','程序錯誤：把數量積不是 0 當成垂直']
]),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['三步：v、n、代公式。','記得用正弦。'],7,['把正弦寫成餘弦（概念）','法向量算錯（程序）','未取絕對值（粗心）'],[
 ['棱長 2 的正方體，A₁C 與底面所成角的正弦',['底面法向量 \\((0,0,1)\\)。','\\(\\overrightarrow{A_1C}=(-2,2,-2)\\)'],'\\(\\dfrac{\\sqrt3}{3}\\)'],
 ['棱長 1 的正方體，A₁B 與平面 AB₁C 所成角的正弦',['\\(\\boldsymbol{n}=(1,1,-1)\\)。'],'\\(\\dfrac{\\sqrt6}{3}\\)'],
 ['PD⊥正方形 ABCD，PD＝DC＝1，求 PD 與平面 PBC 所成的角。',['先求平面 PBC 的法向量。'],'45°（\\(\\boldsymbol{n}=(0,1,1)\\)）']
]),
S.check('4-2','合理嗎？','合理嗎？夾角是 120° 時',['用公式試試。'],'\\(\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle=120^\\circ\\)，線面角是？',[
 ['30°','\\(\\sin\\theta=|\\cos120^\\circ|=\\tfrac12\\)',1],
 ['60°','概念錯誤：用了餘弦的關係'],
 ['120°','概念錯誤：線面角不大於 90°']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：這是線面角嗎？',null,{q:'\\(\\boldsymbol{v}=(1,\\sqrt3,0)\\)，\\(\\boldsymbol{n}=(0,1,0)\\)，求線面角。',steps:['\\(\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle=\\tfrac{\\sqrt3}{2}\\)，夾角 30°','所以線面角是 30°'],wrong:1,why:'概念錯誤：線面角與 v、n 的夾角不是同一個角，應用正弦。',fix:'\\(\\sin\\theta=\\tfrac{\\sqrt3}{2}\\)，\\(\\theta=60^\\circ\\)'}),
S.mistake('5-2','再抓一次','再抓一次：餘弦還是正弦？',null,{q:'\\(\\boldsymbol{v}=(0,0,1)\\)，\\(\\boldsymbol{n}=(1,0,\\sqrt3)\\)，求線面角。',steps:['\\(\\dfrac{|\\boldsymbol{v}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{v}||\\boldsymbol{n}|}=\\dfrac{\\sqrt3}{2}\\)','\\(\\cos\\theta=\\dfrac{\\sqrt3}{2}\\)，\\(\\theta=30^\\circ\\)'],wrong:1,why:'程序錯誤：這個值是 \\(\\sin\\theta\\)。',fix:'\\(\\sin\\theta=\\dfrac{\\sqrt3}{2}\\)，\\(\\theta=60^\\circ\\)'}),
S.tasks('5-3','升級挑戰','升級挑戰：兩個方法比較',null,[
 ['棱長 1 的正方體，BD₁ 與底面：用向量法求正弦。',['\\(\\overrightarrow{BD_1}=(-1,-1,1)\\)'],'\\(\\dfrac{\\sqrt3}{3}\\)'],
 ['同題用幾何法：射影是甚麼？正弦怎樣算？',['射影 BD，DD₁ 是對邊。'],'\\(\\tfrac{1}{\\sqrt3}\\)，結果相同'],
 ['甚麼情況下向量法比幾何法方便？',null,'垂足難找、但能建系時；幾何法則適合射影明顯的圖形']
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'直三棱柱 ABC-A₁B₁C₁ 中，∠ACB＝90°，CA＝CB＝CC₁＝2。用向量法求 AB₁ 與平面 BCC₁B₁ 所成角的正弦。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)（\\(\\boldsymbol{v}=(-2,2,2)\\)，\\(\\boldsymbol{n}=(1,0,0)\\)）',
 rubric:{mastered:'用正弦、法向量正確 → 下一節進入二面角',partial:'公式對，向量或計算有誤 → 下一節起步題補',notyet:'把餘弦當線面角或不會取法向量 → 小組回到 3-2'},
 delayed:{when:'約一週後',q:'PA⊥正方形 ABCD，PA＝2，AB＝1。求 PC 與底面所成角的正弦。',ans:'\\(\\dfrac{\\sqrt6}{3}\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：√3／3 是甚麼？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['\\(\\dfrac{|(0,0,1)\\cdot(1,1,1)|}{\\sqrt3}=\\dfrac{\\sqrt3}{3}\\) 是 \\(\\sin\\theta\\)','所以竹竿與斜坡成約 35.3°','餘弦才是竹竿與法線的夾角']}),
S.summary('6-3',null,['\\(\\sin\\theta=|\\cos\\langle\\boldsymbol{v},\\boldsymbol{n}\\rangle|\\)','步驟：方向向量 → 法向量 → 代公式','\\(\\boldsymbol{v}\\) 與 \\(\\boldsymbol{n}\\) 的夾角不是線面角','法向量取哪一個都不影響結果'])
