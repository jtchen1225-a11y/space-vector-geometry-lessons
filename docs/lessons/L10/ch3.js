/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu), Tr = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,4,0],Cc:[0,0,4]},[['O','A','B'],['O','B','Cc'],['O','Cc','A'],['A','B','Cc']]);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：一支箭代表一條直線',null,'0 0 440 250',[
 {say:'一條直線，只要有一支同佢平行嘅箭，就知道佢嘅方向。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.base({labels:false,c:'#cbd5e1',hc:'#e2e8f0',w:2})+F.seg('A','C1',BLU,3)+F.vec('A',G3.lerp(Cu.V.A,Cu.V.C1,.6),RED,'v',k,[12,-12])}},
 {say:'呢支箭叫做方向向量，將佢乘一個非零數，一樣係方向向量。',dur:6,d:k=>{const F=G3.frame(Cu,{H:250});return F.vec('C1',G3.lerp(Cu.V.C1,Cu.V.A,.3),AMB,'',k)}},
 {say:'兩條直線，就算唔相交，都可以用佢哋嘅方向向量比較。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.seg('B','D1',GRN,3,'',k)}},
 {say:'但係向量夾角可以係鈍角，直線夾角就唔可以。咁點算好？下一頁試吓！',dur:6,d:k=>{const F=G3.frame(Cu,{H:250});return F.text(220,36,'鈍角點算？',{c:RED})}}
]),
S.slider('3-2','動手探索','向量夾角和直線夾角一樣嗎？',['拖滑桿，比較兩個角。','先猜：120° 時直線夾角是多少？'],(h)=>G3.explore(h,{
 sl:[{id:'ag',label:'向量夾角',min:0,max:180,step:15,value:120,fmt:v=>v+'°'}],
 draw:v=>{const O=[220,110],t=v.ag*Math.PI/180,R=110,ex=[O[0]+R*Math.cos(t),O[1]-R*Math.sin(t)];const L=170;
  return G3.wrap(440,210,SV.seg(O[0]-L,O[1],O[0]+L,O[1],'#cbd5e1',3)+SV.seg(O[0]-1.4*R*Math.cos(t),O[1]+1.4*R*Math.sin(t),O[0]+1.4*R*Math.cos(t),O[1]-1.4*R*Math.sin(t),'#cbd5e1',3)+G3.arw(O[0],O[1],O[0]+R,O[1],BLU)+G3.arw(O[0],O[1],ex[0],ex[1],RED))},
 fx:v=>{const th=v.ag<=90?v.ag:180-v.ag,c=Math.cos(v.ag*Math.PI/180);return `\\(\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle=${v.ag}^\\circ\\)，直線夾角 \\(\\theta=${th}^\\circ\\)<br>\\(\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle=${(Math.abs(c)<1e-9?0:c).toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['用絕對值說一次。'],'直線夾角 \\(\\theta\\) 與向量夾角的關係是？',[
 ['\\(\\cos\\theta=|\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle|\\)','銳角或直角的餘弦不是負數',1],
 ['\\(\\theta=\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle\\) 一定成立','概念錯誤：向量夾角為鈍角時不成立'],
 ['\\(\\sin\\theta=\\cos\\langle\\boldsymbol{v}_1,\\boldsymbol{v}_2\\rangle\\)','概念錯誤：這是線面角的形式（L16）']
]),
S.check('3-4','方向向量不唯一','方向向量只有一個嗎？',['想想乘一個數。'],'\\(\\boldsymbol{v}\\) 是直線 \\(l\\) 的方向向量，哪個也是？',[
 ['\\(-3\\boldsymbol{v}\\)','任何非零倍數都平行於 \\(l\\)',1],
 ['\\(\\boldsymbol{0}\\)','概念錯誤：方向向量要非零'],
 ['與 \\(\\boldsymbol{v}\\) 垂直的向量','概念錯誤：它與 \\(l\\) 垂直，不是平行']
]),
S.stepper('3-5','跟著做：不平行','跟著做：說明兩直線不平行',['棱長 2 的正方體，M 是 CC₁ 中點。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});const M=[0,2,1];G3.steps(h,440,200,[
 {t:'以 D 為原點：A(2,0,0)、C₁(0,2,2)、B(2,2,0)、M(0,2,1)',d:k=>F.base()+F.dot(M,RED)+F.lab(M,'M',RED,[24,2])},
 {t:`${vv('AC1')}＝(−2,2,2)`,d:k=>F.vec('A','C1',BLU,'',k)},
 {t:`${vv('BM')}＝(−2,0,1)`,d:k=>F.vec('B',M,GRN,'',k)},
 {t:'y 分量一個是 2、一個是 0，不是倍數，所以兩直線不平行',d:k=>F.text(345,40,'不平行',{c:RED})}
])}),
S.stepper('3-6','跟著做：求線線角','跟著做：用坐標求線線角',['OA、OB、OC 兩兩垂直，OA＝2，OB＝OC＝4，E 是 OC 中點。'],(h)=>{const F=G3.frame(Tr,{W:440,H:200,m:34,fs:38});const lb=F.lab('Cc','C')+F.lab('O','O')+F.lab('A','A')+F.lab('B','B');G3.steps(h,440,200,[
 {t:'建系：A(2,0,0)、B(0,4,0)、C(0,0,4)、E(0,0,2)',d:k=>F.base({labels:false})+lb+F.dot([0,0,2],RED)},
 {t:'\\(\\overrightarrow{AE}=(-2,0,2)\\)，\\(\\overrightarrow{BC}=(0,-4,4)\\)',d:k=>F.vec('A',[0,0,2],BLU,'',k)+F.vec('B','Cc',GRN,'',k)},
 {t:'\\(\\cos=\\dfrac{8}{2\\sqrt2\\times4\\sqrt2}=\\dfrac12\\)',d:k=>F.text(345,40,'cos＝½',{c:RED})},
 {t:'所成的角是 60°；可用基底或幾何法核對',d:k=>F.text(345,90,'60°',{c:RED})}
])},{formula:{label:'線線角',tex:'\\cos\\theta=\\frac{|\\boldsymbol{v}_1\\cdot\\boldsymbol{v}_2|}{|\\boldsymbol{v}_1||\\boldsymbol{v}_2|}'}}),
S.check('3-7','快問快答','快問快答：求線線角',null,'方向向量 \\((1,-1,0)\\)、\\((1,0,1)\\)，兩直線所成的角是？',[
 ['60°','\\(\\dfrac{1}{\\sqrt2\\sqrt2}=\\tfrac12\\)',1],
 ['45°','程序錯誤：分母只算了一個 \\(\\sqrt2\\)'],
 ['120°','概念錯誤：直線夾角不大於 90°']
])
  ]));
})();
