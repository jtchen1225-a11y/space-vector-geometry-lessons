/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2);
const Wg=(d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
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
])
  ]));
})();
