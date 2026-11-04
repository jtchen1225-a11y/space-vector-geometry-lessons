/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pl = G3.plane('α',{w:1.9,d:1.5}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
const tB=[-.9,-.4,0], tAp=[.9,-.4,0], tA=[.9,-.4,1.3];
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：哪個角最特別？',null,'0 0 440 250',[
 {say:'一條斜線穿過平面，喺斜足嗰度，平面入面有好多條線。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[tA]});return F.base()+F.seg(tB,tA,BLU,5,'',k)}},
 {say:'每條線同斜線嘅夾角都唔同，唔可以隨便揀一個。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[tA]});return F.seg(tB,[1.3,.6,0],AMB,3,'',k)+F.seg(tB,[-.6,1.5,0],AMB,3,'',k)}},
 {say:'由斜線上面一點落垂線，就得到斜線喺平面入面嘅影子。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[tA]});return F.seg(tA,G3.lerp(tA,tAp,k),GRY,3,'6 5')+F.seg(tB,G3.lerp(tB,tAp,k),GRN,5)}},
 {say:'呢條影子同斜線嘅夾角，有咩特別？下一頁試吓！',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[tA]});return F.arc(tB,tAp,tA,RED,'θ₁',.8,k)}}
]),
S.slider('3-2','動手探索','轉動平面內的線，夾角何時最小？',['先猜：線轉到哪裏時夾角最小？','拖滑桿驗證。'],(h)=>G3.explore(h,{
 sl:[{id:'ph',label:'與影子的角',min:0,max:90,step:15,value:45,fmt:v=>v+'°'}],
 draw:v=>{const F=G3.frame(Pl,{W:440,H:205,m:18,el:24,fs:34,extra:[tA]});const t=v.ph*Math.PI/180,E=G3.add(tB,[1.8*Math.cos(t),1.8*Math.sin(t),0]);return F.show(F.base(),F.seg(tB,tA,BLU,5),F.seg(tB,tAp,GRN,4),F.seg(tA,tAp,GRY,3,'6 5'),F.seg(tB,E,RED,5),F.arc(tB,tAp,tA,GRN,'',.7))},
 fx:v=>{const c=Math.cos(Math.PI/4)*Math.cos(v.ph*Math.PI/180),a=Math.acos(c)*180/Math.PI;return `\\(\\theta_1=45^\\circ\\)，\\(\\theta_2=${v.ph}^\\circ\\)，夾角 \\(\\theta\\approx${a.toFixed(1)}^\\circ\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['滑桿在哪裏時夾角最小？'],'斜線與平面內直線的夾角，何時最小？',[
 ['直線是斜線的射影時','所以用射影來定義線面角',1],
 ['直線垂直射影時','概念錯誤：那時夾角是 90°，最大'],
 ['每條線都一樣','概念錯誤：剛才的數字會變']
]),
S.check('3-4','定義與範圍','線面角的範圍是？',['想想特殊情況。'],'直線與平面所成的角，範圍是？',[
 ['0° 到 90°','平行或在內是 0°，垂直是 90°',1],
 ['0° 到 180°','概念錯誤：那是二面角的範圍'],
 ['只有銳角','概念錯誤：漏了 0° 和 90° 的情況']
]),
S.stepper('3-5','跟著做：求線面角','跟著做：BD₁ 與底面所成的角',['長方體 DA＝3，DC＝4，DD₁＝5。'],(h)=>{const B=G3.box(3,4,5),F=G3.frame(B,{W:440,H:200,m:30,fs:38});G3.steps(h,440,200,[
 {t:'D₁D⊥底面，所以 BD₁ 的射影是 BD',d:k=>F.base()+F.seg('B','D1',BLU,5,'',k)+F.seg('B','D',GRN,5,'',k)},
 {t:'線面角是 ∠D₁BD',d:k=>F.arc('B','D','D1',RED,'θ',.9,k)},
 {t:'BD＝5，DD₁＝5，直角三角形兩直角邊相等，所以 θ＝45°',d:k=>F.ra('D','B','D1',INK,.6)+F.text(355,44,'45°',{c:RED})}
])},{formula:{label:'定義',tex:'\\theta=\\angle(\\text{斜線},\\text{射影})'}}),
S.stepper('3-6','跟著做：三個角','跟著做：三個角的關係',['A′M⊥OM，OM 在平面內。'],(h)=>{const O=[-.9,-.7,0],Ap=[.9,.1,0],A=[.9,.1,1.3],M=[.9*.9-.1,-.7,0];const Mf=[.9,-.7,0];const F=G3.frame(Pl,{W:440,H:200,m:18,fs:38,extra:[A]});G3.steps(h,440,200,[
 {t:'θ₁：斜線與射影；θ₂：射影與 OM；θ：斜線與 OM',d:k=>F.base()+F.seg(O,A,BLU,5)+F.seg(O,Ap,GRN,4)+F.seg(O,Mf,RED,4)+F.seg(A,Ap,GRY,3,'6 5')+F.seg(Ap,Mf,GRY,3,'6 5')},
 {t:'由三垂線定理 AM⊥OM，三個都是直角三角形',d:k=>F.seg(A,Mf,VIO,3,'',k)},
 {t:'設 OA＝1：OM＝cosθ＝cosθ₁cosθ₂',d:k=>F.text(345,40,'cosθ₁cosθ₂',{c:RED,fs:34})},
 {t:'θ₁＝θ₂＝45° 時：cosθ＝½，θ＝60°',d:k=>F.text(345,84,'60°',{c:RED})}
])},{formula:{label:'三餘弦',tex:'\\cos\\theta=\\cos\\theta_1\\cos\\theta_2'}}),
S.check('3-7','快問快答','快問快答：射影有多長？',null,'線段 AB＝10，與平面成 60°，它在平面內的射影長是？',[
 ['5','\\(10\\cos60^\\circ\\)',1],
 ['\\(5\\sqrt3\\)','程序錯誤：用了正弦'],
 ['10','概念錯誤：射影比斜線短']
])
  ]));
})();
