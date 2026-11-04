/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Bx = G3.box(2,3,4,{}), Ex = G3.mid(Bx.V.A,Bx.V.A1);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
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
],{fig:miniCu})
  ]));
})();
