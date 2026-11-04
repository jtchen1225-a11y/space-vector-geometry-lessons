/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pa = G3.para({ab:[0,2,0],ad:[-1,0,0],aa:[.5,1,.7]});
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：距離就是最短',null,'0 0 440 250',[
 {say:'兩點之間，連線最短，呢個長度就叫做距離。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.base({labels:false,c:'#cbd5e1',hc:'#e2e8f0',w:2})+F.seg('A','C1',RED,4,'',k)+F.dot('A',RED)+F.dot('C1',RED)}},
 {say:'一點同一條直線，連去直線上面唔同位置，長度都唔同。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.seg('B','D1',BLU,4)+F.seg('C1',G3.lerp(Cu.V.B,Cu.V.D1,k*.3),GRY,3,'6 5')+F.seg('C1',G3.lerp(Cu.V.D1,Cu.V.B,k*.1),GRY,3,'6 5')}},
 {say:'一路移動，總有一個位置，連線最短。',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.seg('C1',G3.lerp(Cu.V.B,Cu.V.D1,2/3),RED,4,'',k)}},
 {say:'最短嗰條連線同直線有咩關係？下一頁拖吓滑桿！',dur:5,d:k=>{const F=G3.frame(Cu,{H:250});return F.text(220,34,'有咩關係？',{c:VIO})}}
]),
S.slider('3-2','動手探索','拖 λ，找到最短的連線',['C₁ 到 BD₁（棱長 1）。','留意數量積何時為 0。'],(h)=>G3.explore(h,{
 sl:[{id:'lm',label:'λ',min:0,max:1,step:1/6,value:1/6,fmt:v=>(+v).toFixed(2)}],
 draw:v=>{const F=G3.frame(Cu,{W:440,H:210,m:28,fs:34});const E=G3.lerp(Cu.V.B,Cu.V.D1,v.lm);return F.show(F.base(),F.seg('B','D1',BLU,4),F.seg('C1',E,RED,4),F.dot(E,RED))},
 fx:v=>{const E=G3.lerp([1,1,0],[0,0,1],v.lm),d=[E[0]-0,E[1]-1,E[2]-1],L=Math.hypot(...d),p=-d[0]-d[1]+d[2];return `\\(C_1E\\approx${L.toFixed(3)}\\)，\\(\\overrightarrow{C_1E}\\cdot\\overrightarrow{BD_1}\\approx${(Math.abs(p)<1e-9?0:p).toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['數量積何時為 0？'],'點到直線的連線最短時？',[
 ['連線垂直直線','垂足是最短位置，這段叫垂線段',1],
 ['連線經過線段中點','概念錯誤：最短位置不是中點'],
 ['連線平行某條棱','概念錯誤：與棱無關']
]),
S.check('3-4','共同點','所有距離有甚麼共同點？',['回想學過的距離。'],'兩圖形間的距離，都是？',[
 ['兩圖形上的點之間最短連線的長度','定義的共同點',1],
 ['最長連線的長度','概念錯誤：與定義相反'],
 ['端點的距離','概念錯誤：不一定在端點']
]),
S.stepper('3-5','跟著做：基底求距離','跟著做：棱不垂直，也能求',['AD＝1，AB＝2，AA′＝1；∠BAD＝90°，∠BAA′＝∠DAA′＝60°。'],(h)=>{const F=G3.frame(Pa,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:`路線：${vv('AC1')}＝${vv('AB')}＋${vv('AD')}＋${vv('AA1')}`,d:k=>F.base({labels:false})+F.vec('A','C1',RED,'',k)},
 {t:'平方項：\\(1+4+1=6\\)',d:k=>F.text(350,40,'平方 6',{c:BLU})},
 {t:'中間項：\\(2(0+\\tfrac12+1)=3\\)',d:k=>F.text(350,86,'中間 3',{c:GRN})},
 {t:'\\(|AC_1|^2=9\\)，所以長度是 3',d:k=>F.text(350,132,'＝3',{c:RED})}
])}),
S.stepper('3-6','跟著做：點到直線','跟著做：P(1,2,0) 到直線',['直線過 A(1,0,0)，方向 \\(\\boldsymbol{v}=(0,1,1)\\)。'],(h)=>{G3.steps(h,440,210,[
 {t:'設垂足 \\(E(1,t,t)\\)，\\(\\overrightarrow{PE}=(0,t-2,t)\\)',d:k=>G3.txt(220,50,'E(1,t,t)',{c:BLU,fs:38})},
 {t:'垂直：\\((t-2)+t=0\\)，得 \\(t=1\\)',d:k=>G3.txt(220,110,'t＝1',{c:GRN,fs:38})},
 {t:'\\(\\overrightarrow{PE}=(0,-1,1)\\)，距離 \\(\\sqrt2\\)；投影法：\\(d^2=|\\overrightarrow{AP}|^2-\\dfrac{(\\overrightarrow{AP}\\cdot\\boldsymbol{v})^2}{|\\boldsymbol{v}|^2}\\)',d:k=>G3.txt(220,170,'d＝√2',{c:RED,fs:38})}
])},{formula:{label:'投影法',tex:'d^2=|\\overrightarrow{AP}|^2-\\frac{(\\overrightarrow{AP}\\cdot\\boldsymbol{v})^2}{|\\boldsymbol{v}|^2}'}}),
S.check('3-7','快問快答','快問快答：最短的是？',null,'棱長 1 的正方體，B 到 D₁ 的距離是？',[
 ['\\(\\sqrt3\\)','體對角線',1],
 ['\\(\\sqrt2\\)','概念錯誤：這是面對角線'],
 ['3','程序錯誤：忘了開方']
])
  ]));
})();
