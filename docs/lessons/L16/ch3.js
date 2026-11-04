/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
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
])
  ]));
})();
