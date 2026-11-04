/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Grid = G3.box(3,3,2.2);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：三個數字代表一支箭',null,'0 0 440 250',[
 {say:'揀三個互相垂直、長度係一嘅向量，叫做單位正交基底。',dur:6,d:k=>{const F=G3.frame(Grid,{H:250});return F.vec('D',[1,0,0],BLU,'e₁',k,[-22,6])+F.vec('D',[0,1,0],GRN,'e₂',k,[0,30])+F.vec('D',[0,0,1],AMB,'e₃',k,[-26,0])}},
 {say:'任何向量都可以寫成行幾步 e 一，幾步 e 二，幾步 e 三。',dur:6,d:k=>{const F=G3.frame(Grid,{H:250});return F.vec('D',[2,0,0],BLU,'',k)+F.vec([2,0,0],[2,3,0],GRN,'',k)+F.vec([2,3,0],[2,3,1.5],AMB,'',k)}},
 {say:'將呢三個數字寫埋一齊，就係向量嘅坐標：二、三、一點五。',read:'將呢三個數字寫埋一齊，就係向量嘅坐標：二、三、一點五。',dur:6,d:k=>{const F=G3.frame(Grid,{H:250});return F.vec('D',[2,3,1.5],RED,'',k)+F.text(330,40,'(2, 3, 1.5)',{c:RED})}},
 {say:'有咗坐標，計數量積又會變成點？下一頁試吓！',dur:5,d:k=>{const F=G3.frame(Grid,{H:250});return F.text(330,84,'點樣計？',{c:VIO})}}
]),
S.slider('3-2','動手探索','拖 x、z，看坐標怎樣決定向量',['y 固定是 2。','先猜：長度會怎樣變？'],(h)=>G3.explore(h,{
 sl:[{id:'cx',label:'x',min:0,max:3,step:1,value:2},{id:'cz',label:'z',min:0,max:2,step:1,value:1}],
 draw:v=>{const F=G3.frame(Grid,{W:440,H:210,m:24,el:22});const A=[v.cx,0,0],B=[v.cx,2,0],Pp=[v.cx,2,v.cz];return F.show(F.base({labels:false,c:'#cbd5e1',hc:'#e2e8f0',w:2}),F.vec('D',A,BLU),F.vec(A,B,GRN),F.vec(B,Pp,AMB),F.vec('D',Pp,RED))},
 fx:v=>{const s=v.cx*v.cx+4+v.cz*v.cz,r=Math.sqrt(s);return `\\(\\boldsymbol{p}=(${v.cx},2,${v.cz})\\)，\\(|\\boldsymbol{p}|=\\sqrt{${s}}\\approx${r.toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['坐標就是基底的係數。'],'\\(\\boldsymbol{p}=2\\boldsymbol{e}_1-\\boldsymbol{e}_2+3\\boldsymbol{e}_3\\) 的坐標是？',[
 ['\\((2,-1,3)\\)','係數按次序寫下，負號要保留',1],
 ['\\((2,1,3)\\)','粗心失誤：漏了負號'],
 ['\\((2,3,-1)\\)','程序錯誤：次序要依 \\(\\boldsymbol{e}_1,\\boldsymbol{e}_2,\\boldsymbol{e}_3\\)']
]),
S.check('3-4','數量積公式','數量積公式怎樣用？',['對應相乘，再相加。'],'\\((1,2,3)\\cdot(2,0,-1)\\)＝？',[
 ['－1','\\(2+0-3\\)',1],
 ['\\((2,0,-3)\\)','概念錯誤：數量積是數，不是向量'],
 ['5','粗心失誤：把 \\(3\\times(-1)\\) 算成正數']
]),
S.stepper('3-5','跟著做：求夾角','跟著做：求兩向量的夾角',['三步：數量積、長度、餘弦。'],(h)=>{const F=G3.frame(G3.box(1,1,1),{W:440,H:200,m:34,fs:38});const a=[1,1,0],b=[0,1,1];G3.steps(h,440,200,[
 {t:'\\(\\boldsymbol{a}=(1,1,0)\\)，\\(\\boldsymbol{b}=(0,1,1)\\)，它們是兩條面對角線',d:k=>F.base({labels:false})+F.vec('D',a,BLU,'a',k,[0,32])+F.vec('D',b,GRN,'b',k,[12,-14])},
 {t:'\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=0+1+0=1\\)',d:k=>F.text(350,50,'＝1',{c:RED})},
 {t:'\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=\\sqrt2\\)',d:k=>F.text(350,100,'√2',{c:VIO})},
 {t:'\\(\\cos\\theta=\\dfrac{1}{\\sqrt2\\times\\sqrt2}=\\dfrac12\\)，夾角 60°',d:k=>F.arc('D',a,b,RED,'60°',.4,k)}
])},{formula:{label:'夾角',tex:'\\cos\\langle\\boldsymbol{a},\\boldsymbol{b}\\rangle=\\frac{x_1x_2+y_1y_2+z_1z_2}{|\\boldsymbol{a}||\\boldsymbol{b}|}'}}),
S.stepper('3-6','跟著做：同時垂直','跟著做：同時垂直兩個向量',['設 \\(\\boldsymbol{n}=(x,y,z)\\)，列方程。'],(h)=>{G3.steps(h,440,210,[
 {t:'\\(\\boldsymbol{c}=(1,1,1)\\)，\\(\\boldsymbol{d}=(1,-1,0)\\)，求 \\(\\boldsymbol{n}\\perp\\boldsymbol{c}\\)，\\(\\boldsymbol{n}\\perp\\boldsymbol{d}\\)',d:k=>G3.txt(220,50,'n·c＝0，n·d＝0',{c:BLU,fs:38})},
 {t:'列式：\\(x+y+z=0\\)，\\(x-y=0\\)',d:k=>G3.txt(220,110,'y＝x，z＝－2x',{c:GRN,fs:38})},
 {t:'三個未知數兩條方程：取 \\(x=1\\)，得 \\((1,1,-2)\\)；答案不唯一',d:k=>G3.txt(220,170,'n＝(1,1,−2)',{c:RED,fs:38})}
])}),
S.check('3-7','快問快答','快問快答：平行嗎？',null,'\\((1,-2,3)\\) 與 \\((-2,4,-6)\\) 的關係是？',[
 ['平行（方向相反）','第二個是第一個的 －2 倍',1],
 ['垂直','程序錯誤：數量積是 －28，不是 0'],
 ['不平行也不垂直','程序錯誤：沒有檢查倍數']
])
  ]));
})();
