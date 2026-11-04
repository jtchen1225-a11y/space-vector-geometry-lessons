/* ============ 第 3 階段　8–18 分鐘　看動畫，發現新規律（教案：核心概念講解與示範；螺旋：新概念） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#059669";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Prm = G3.solid({A:[2,.2,0],B:[.4,.2,0],C:[.9,1.9,0],A1:[2,.2,1.5],B1:[.4,.2,1.5],C1:[.9,1.9,1.5]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
  window.DECK.push(S.phase(3, "8–18 分鐘", "看動畫，發現新規律", C, [
S.anim('3-1','粵語動畫','看動畫：三把尺度量空間',null,'0 0 440 250',[
 {say:'有兩個方向，只可以喺一個平面入面行。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.fill(['A','B','C','D'],'rgba(37,99,235,.14)')+F.vec('A','B',BLU,'a',k,[0,34])+F.vec('A','D',GRN,'b',k,[20,30])}},
 {say:'加第三個唔喺呢個平面嘅方向，就可以離開平面。',dur:5,d:k=>{const F=G3.frame(Pa,{H:250});return F.vec('A','A1',AMB,'c',k,[-22,0])}},
 {say:'行 x 格 a，再行 y 格 b，再行 z 格 c，就到咗一個新位置。',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.vec('A','C1',RED,'p',k,[0,-14])}},
 {say:'究竟咁樣可以去晒空間每一點，同埋方法係咪得一個？下一頁試吓！',dur:6,d:k=>{const F=G3.frame(Pa,{H:250});return F.text(220,36,'只有一種走法？',{c:VIO})}}
]),
S.slider('3-2','動手探索','拖 x、y、z，走到空間任何一點',['先猜：z＝0 時終點在哪裏？','拖滑桿驗證。'],(h)=>G3.explore(h,{
 sl:[{id:'qx',label:'x',min:0,max:2,step:.5,value:1},{id:'qz',label:'z',min:-1,max:1.5,step:.5,value:1}],
 draw:v=>{const Pl=G3.solid({P1:[2.6,-.4,0],P2:[2.6,3,0],P3:[-.4,3,0],P4:[-.4,-.4,0]},[['P1','P2','P3','P4']],true);Pl.flat=true;Pl.nm='';const F=G3.frame(Pl,{W:440,H:220,m:18,el:24,extra:[[0,0,1.6],[0,0,-1.1],[2,1,1.5]]});const a=[1,0,0],b=[.2,1,0],c=[.1,.1,1],y=1,A=G3.mul(a,v.qx),B=G3.add(A,G3.mul(b,y)),Pp=G3.add(B,G3.mul(c,v.qz));
  return F.show(F.base(),F.vec([0,0,0],A,BLU),F.vec(A,B,GRN),F.vec(B,Pp,AMB),F.vec([0,0,0],Pp,RED),F.dot(Pp,RED))},
 fx:v=>`\\(\\boldsymbol{p}=${v.qx}\\boldsymbol{a}+\\boldsymbol{b}+(${v.qz})\\boldsymbol{c}\\)`
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['用「不共面」說一次。'],'要表示所有空間向量，基底應是？',[
 ['三個不共面的向量','定理：對任意 \\(\\boldsymbol{p}\\) 有唯一的 \\((x,y,z)\\)',1],
 ['任意三個非零向量','概念錯誤：三個共面的向量走不出平面'],
 ['兩個不共線的向量','概念錯誤：只能表示同一平面內的向量']
]),
S.check('3-4','表示法唯一','同一向量可以有兩種寫法嗎？',['想想係數的意思。'],'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(3\\boldsymbol{a}-2\\boldsymbol{b}+\\boldsymbol{c}=x\\boldsymbol{a}+y\\boldsymbol{b}+z\\boldsymbol{c}\\)，則？',[
 ['\\(x=3\\)，\\(y=-2\\)，\\(z=1\\)','表示法唯一，係數對應相等',1],
 ['\\(x=3\\)，\\(y=2\\)，\\(z=1\\)','粗心失誤：漏了負號'],
 ['不能確定','概念錯誤：不共面時表示法唯一']
]),
S.stepper('3-5','跟著做：寫分解式','跟著做：表示上底中心',['先走路線，再換字母。'],(h)=>{const F=G3.frame(Pa,{W:440,H:200,m:34,fs:38});const V=Pa.V,E=G3.mid(V.A1,V.C1);G3.steps(h,440,200,[
 {t:`基底：${vv('AB')}＝a，${vv('AD')}＝b，${vv('AA1')}＝c`,d:k=>F.base()+F.vec('A','B',BLU,'',k)+F.vec('A','D',GRN,'',k)+F.vec('A','A1',AMB,'',k)},
 {t:'E 是上底中心，即 A₁C₁ 的中點',d:k=>F.seg('A1','C1',GRY,2.5,'6 5')+F.dot(E,RED)+F.lab(E,'E',RED,[6,-22])},
 {t:`路線：${vv('AE')}＝${vv('AA1')}＋${vv('A1E')}`,d:k=>F.vec('A1',E,VIO,'',k)},
 {t:`${vv('A1E')}＝½(a＋b)，所以 ${vv('AE')}＝½a＋½b＋c`,d:k=>F.vec('A',E,RED,'',k)}
])},{example:{q:`同一圖中，用基底表示 ${vv('DB1')}。`,steps:[`${vv('DA')}＋${vv('AB')}＋${vv('BB1')}`],ans:'\\(\\boldsymbol{a}-\\boldsymbol{b}+\\boldsymbol{c}\\)'}}),
S.stepper('3-6','跟著做：用基底算','跟著做：用基底算數量積',['直三棱柱：∠ABC＝60°，BA＝3，BC＝BB₁＝2。'],(h)=>{const F=G3.frame(Prm,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:`取基底 ${vv('BA')}、${vv('BC')}、${vv('BB1')}：長度和夾角都已知`,d:k=>F.base()+F.vec('B','A',BLU,'',k)+F.vec('B','C',GRN,'',k)+F.vec('B','B1',AMB,'',k)},
 {t:`${vv('AB1')}＝－${vv('BA')}＋${vv('BB1')}，${vv('BC1')}＝${vv('BC')}＋${vv('BB1')}`,d:k=>F.vec('A','B1',RED,'',k)+F.vec('B','C1',VIO,'',k)},
 {t:'展開四項：BA·BC＝3，BB₁² ＝4，其餘垂直為 0',d:k=>F.text(340,40,'－3＋4',{c:RED})},
 {t:`所以 ${vv('AB1')}·${vv('BC1')}＝－3＋4＝1`,d:k=>F.text(340,84,'＝1',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：哪組可作基底？',null,'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，哪一組可作基底？',[
 ['\\(\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(\\boldsymbol{c}\\)','\\(\\boldsymbol{c}\\) 不在 \\(\\boldsymbol{a},\\boldsymbol{b}\\) 的平面內',1],
 ['\\(\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(2\\boldsymbol{a}\\)','概念錯誤：\\(2\\boldsymbol{a}\\) 是前兩者之和，共面'],
 ['\\(\\boldsymbol{a}\\)，\\(\\boldsymbol{b}\\)，\\(\\boldsymbol{a}+\\boldsymbol{b}\\)','概念錯誤：第三個是前兩者的和，共面']
])
  ]));
})();
