/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Wg = (d)=>{const t=d*Math.PI/180;return G3.solid({E1:[0,-1.5,0],E2:[0,1.5,0],A1:[1.5,-1.5,0],A2:[1.5,1.5,0],B1:[1.5*Math.cos(t),-1.5,1.5*Math.sin(t)],B2:[1.5*Math.cos(t),1.5,1.5*Math.sin(t)]},[['E1','E2','A2','A1'],['E1','E2','B2','B1']],true)};
const drawWg=(d,o,more)=>{const W=Wg(d);const F=G3.frame(W,{W:440,H:o.H||200,m:o.m||18,fs:o.fs||34,az:o.az===undefined?40:o.az,el:20,extra:[[1.5,0,1.5],[-1.5,0,1.5]]});const y=o.y||0,t=d*Math.PI/180,P=[0,y,0],A=[1.2,y,0],B=[1.2*Math.cos(t),y,1.2*Math.sin(t)];return {F,W,P,A,B,s:F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')+F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.12)')+F.base({labels:false})+F.seg('E1','E2',RED,5)}};
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：由一條棱展開',null,'0 0 440 250',[
 {say:'一條直線，將平面分開兩邊，每邊叫做半平面。',dur:5,d:k=>{const d=drawWg(0.01,{H:250});return d.F.seg('E1','E2',RED,5,'',k)+d.F.fill(['E1','E2','A2','A1'],'rgba(37,99,235,.12)')}},
 {say:'由同一條棱開始嘅兩個半平面，就組成二面角。',dur:5,d:k=>{const d=drawWg(20+90*k,{H:250});return d.F.fill(['E1','E2','B2','B1'],'rgba(5,150,105,.14)')+d.F.base({labels:false})}},
 {say:'喺棱上面揀一點，兩邊都畫一條垂直棱嘅射線。',dur:5,d:k=>{const d=drawWg(110,{H:250});return d.F.seg(d.P,d.A,BLU,5,'',k)+d.F.seg(d.P,d.B,GRN,5,'',k)}},
 {say:'將呢一點沿住棱移動，呢個角會唔會變？下一頁試吓！',dur:5,d:k=>{const d=drawWg(110,{H:250});return d.F.arc(d.P,d.A,d.B,RED,'？',.7,k)}}
]),
S.slider('3-2','動手探索','沿棱移動 O，平面角會變嗎？',['先猜：O 移動時角會變嗎？','再拖「開合」。'],(h)=>G3.explore(h,{
 sl:[{id:'dg',label:'開合',min:30,max:150,step:15,value:90,fmt:v=>v+'°'},{id:'oy',label:'O 位置',min:-1,max:1,step:.5,value:0}],
 draw:v=>{const d=drawWg(v.dg,{H:190,y:v.oy});return d.F.show(d.s,d.F.seg(d.P,d.A,BLU,5),d.F.seg(d.P,d.B,GRN,5),d.F.arc(d.P,d.A,d.B,VIO,'',.55),d.F.dot(d.P,RED))},
 fx:v=>`平面角＝\\(${v.dg}^\\circ\\)，與 O 的位置無關`
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['用「垂直棱」說一次。'],'二面角的平面角要滿足？',[
 ['兩條射線都垂直棱','這樣角的大小才唯一',1],
 ['兩條射線都垂直對面的半平面','概念錯誤：不一定存在這樣的射線'],
 ['兩條射線長度相等','概念錯誤：與長度無關']
]),
S.check('3-4','範圍','二面角與「兩平面所成的角」',['一樣嗎？'],'二面角 120° 的兩個平面，所成的角是？',[
 ['60°','兩平面所成的角不大於 90°',1],
 ['120°','概念錯誤：把二面角當成所成的角'],
 ['30°','程序錯誤：用 90° 去減，應用 180° 去減']
]),
S.stepper('3-5','跟著做：求二面角','跟著做：棱上兩點求二面角',['AC⊥AB，BD⊥AB；AB＝24，AC＝3，BD＝8，CD＝25。'],(h)=>{const d=drawWg(60,{H:200,fs:38,m:16,az:50});const t=60*Math.PI/180,A=[0,-1.2,0],B=[0,1.2,0],Cp=[.9*Math.cos(t),-1.2,.9*Math.sin(t)],Dp=[1.35,1.2,0],Ep=[1.35,-1.2,0];G3.steps(h,440,200,[
 {t:'過 A 作 AE∥BD 且 AE＝BD，連接 CE、ED',d:k=>d.s+d.F.seg(A,Cp,GRN,4)+d.F.seg(B,Dp,BLU,4)+d.F.seg(A,Ep,VIO,4,'',k)},
 {t:'AEDB 是矩形，∠CAE 是平面角，ED⊥平面 AEC',d:k=>d.F.arc(A,Ep,Cp,RED,'θ',.5,k)},
 {t:'\\(CE^2=CD^2-ED^2\\)＝\\(625-576=49\\)',d:k=>d.F.seg(Cp,Ep,RED,4,'',k)+d.F.text(350,40,'CE＝7',{c:RED})},
 {t:'\\(\\cos\\theta=\\dfrac{9+64-49}{2\\times3\\times8}=\\dfrac12\\)，\\(\\theta=60^\\circ\\)',d:k=>d.F.text(350,88,'60°',{c:RED})}
])}),
S.stepper('3-6','跟著做：三垂線作角','跟著做：用三垂線定理作平面角',['平面 SAC⊥平面 ABC，SA＝SC＝√6，AB＝BC＝2√2，AB⊥BC。'],(h)=>{const T=G3.solid({A:[2,0,0],B:[0,2,0],C:[-2,0,0],S:[0,0,1.414]},[['A','B','C'],['S','A','B'],['S','B','C'],['S','C','A']]);const F=G3.frame(T,{W:440,H:200,m:34,fs:38,az:-20,el:25});const O=[0,0,0],E=[1,1,0];G3.steps(h,440,200,[
 {t:'O 是 AC 中點：SO⊥AC，又面面垂直，所以 SO⊥平面 ABC',d:k=>F.base()+F.seg('S',O,VIO,4,'',k)+F.lab(O,'O',VIO,[0,24])},
 {t:'E 是 AB 中點：OE∥BC，所以 OE⊥AB',d:k=>F.seg(O,E,GRN,4,'',k)+F.lab(E,'E',GRN,[16,16])},
 {t:'SE 的射影是 OE，由定理 SE⊥AB，∠SEO 是平面角',d:k=>F.seg('S',E,BLU,4,'',k)+F.arc(E,O,'S',RED,'',.4,k)},
 {t:'\\(SO=\\sqrt2\\)，\\(OE=\\sqrt2\\)，所以 ∠SEO＝45°',d:k=>F.text(355,44,'45°',{c:RED})}
])},{formula:{label:'面積關係',tex:'S_{\\text{射影}}=S\\cos\\theta'}}),
S.check('3-7','快問快答','快問快答：面積的射影',null,'△ABP 面積 4，二面角 60°，P 在另一面的射影 P′，△ABP′ 面積是？',[
 ['2','\\(4\\cos60^\\circ\\)',1],
 ['\\(2\\sqrt3\\)','程序錯誤：用了正弦'],
 ['8','程序錯誤：射影面積應變小']
])
  ]));
})();
