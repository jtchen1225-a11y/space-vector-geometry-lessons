//@meta
{
  id: 13, type: 'new', unit: '1.2.2 射影與三垂線定理', pdf: '41–43',
  topic: '射影與三垂線定理',
  goal: '能找出斜線在平面內的射影，並用三垂線定理及其逆定理證明線線垂直',
  prior: 'L12 法向量、L02 數量積、必修的線面垂直',
  focus: '平面內的直線垂直射影，就垂直斜線；反之亦然',
  difficulty: '正確找出射影；定理中的直線要在平面內（或平行平面）',
  boundary: '線面角（L15）；二面角的平面角（L17）會用到本定理',
  reveal: '成立！地上的線垂直影子，就一定垂直斜桿，這就是三垂線定理。',
  priorMap: [
    ['線面垂直的性質', '垂線垂直平面內所有直線', '1-3 快問', '用桌面和筆示範'],
    ['數量積與垂直', '用向量證明定理', '3-5', '回到 L02 3-3'],
    ['法向量', 'A′A 是平面的法向量', '1-2 熱身題', '回到 L12 3-3'],
  ],
  deep: ['知道直線垂直平面，就垂直平面內所有直線。', '斜線雖然不垂直平面，但判斷它與平面內直線是否垂直，只需要看影子；立體問題可以降到平面判斷。', 'L15 線面角用射影定義；L17 二面角用本定理作平面角。'],
  spaced: [
    ['找射影', '下一節（L14）', '在不同幾何體找射影'],
    ['三垂線定理', '約一週後（L15）', '用來判斷直角三角形；延遲檢測'],
    ['逆定理', '約一個月後（L17、L23）', '作二面角的平面角'],
  ],
}
//@assert
// 3-2 斜線與射影的數量積相等
{const B=[0,0,0],Ap=[2,0,0],A=[2,0,1.5];for(const d of [0,30,60,90,120]){const t=d*Math.PI/180,l=[Math.cos(t),Math.sin(t),0];eq(dot(l,sub(A,B)),dot(l,sub(Ap,B)),'3-2');}}
{const U=G.cube(1).V;eq(dot(sub(U.C,U.A),sub(U.D1,U.B)),0,'3-6');eq(dot(sub(U.C,U.A),sub(U.D,U.B)),0,'3-6 射影');}
// 4-1 PA⊥底，矩形
{const A=[0,0,0],B=[2,0,0],Cc=[2,3,0],Pp=[0,0,4];eq(dot(sub(Cc,B),sub(Pp,B)),0,'4-1A');}
// 4-1C 等腰
{const A=[0,3,0],B=[-2,0,0],Cc=[2,0,0],D=mid(B,Cc),O=[0,1,0],Pp=[0,1,5];eq(dot(sub(Cc,B),sub(A,Pp)),0,'4-1C');eq(D,[0,0,0]);}
// 5-3 C：l∥α 也成立
{const Ap=[2,0,0],A=[2,0,3],B=[0,0,0],l=[0,1,0];eq(dot(l,sub(Ap,B)),0);eq(dot(l,sub(A,B)),0,'5-3C');}
// 出口：底為正方形的長方體 A1C⊥BD
{const V=G.box(2,2,5).V;eq(dot(sub(V.C,V.A1),sub(V.D,V.B)),0,'出口');}
// 延遲
{const A=[0,0,0],B=[3,0,0],Cc=[3,2,0],Pp=[0,0,4];eq(dot(sub(Cc,B),sub(Pp,B)),0,'延遲');}
//@shared
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pl = G3.plane('α',{w:1.8,d:1.5});
//@ch 1
S.goals('1-1','今天的任務','看影子，就知道垂直不垂直？',['先看目標，再動筆做熱身題。'],{head:'本節學完，你能夠',items:['說出點和線段在平面內的射影','找出斜線的射影','用向量說明三垂線定理','用定理及逆定理證明線線垂直']}),
S.tasks('1-2','熱身題','法向量與平面內的向量',['選一層開始。'],[
 ['AA₁⊥α，\\(\\boldsymbol{v}\\) 在 α 內，\\(\\overrightarrow{AA_1}\\cdot\\boldsymbol{v}\\)＝？',['垂線垂直平面內所有直線。'],'0'],
 ['\\(\\boldsymbol{v}\\perp\\boldsymbol{a}\\)，\\(\\boldsymbol{v}\\perp\\boldsymbol{b}\\)，\\(\\boldsymbol{v}\\cdot(\\boldsymbol{a}+\\boldsymbol{b})\\)＝？',['分配律。'],'0'],
 ['上題告訴我們：垂直兩個向量，也會垂直它們的甚麼？',null,'它們的和，以及任何線性組合']
]),
S.check('1-3','舊知識快問','舊知識快問：垂線的性質',null,'直線垂直平面 α，它與 α 內的直線？',[
 ['都垂直','定義：與平面內任意直線都垂直',1],
 ['只與過垂足的直線垂直','概念錯誤：不過垂足的也垂直（異面垂直）'],
 ['只與兩條直線垂直','概念錯誤：那是判定條件，不是結論']
]),
//@ch 2
S.hook('2-1','猜一猜','地上的線，垂直斜桿嗎？',null,{
 pic:(()=>{const F=G3.frame(Pl,{W:440,H:180,m:20,extra:[[.6,0,1.5]]});return F.show(F.base(),F.seg([-.6,0,0],[.6,0,1.5],BLU,5),F.seg([-.6,0,0],[.6,0,0],GRY,5),F.seg([.6,0,1.5],[.6,0,0],GRY,3,'6 5'),F.seg([-.6,-1,0],[-.6,1,0],RED,5))})(),
 story:'斜桿在地上有一條影子（灰色），地上畫一條紅線垂直影子。',
 guess:['紅線一定垂直斜桿','一定不垂直','要看斜桿有多斜','還不確定'],
 ask:'紅線與斜桿本身，究竟垂直嗎？',
 later:'學完今天的定理，你就能證明！'
}),
//@ch 3
S.anim('3-1','粵語動畫','看動畫：斜線和它的影子',null,'0 0 440 250',[
 {say:'由 A 點向平面落垂線，垂足 A 撇，就係 A 嘅射影。',read:'由 A 點向平面落垂線，垂足 A 撇，就係 A 嘅射影。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.base()+F.seg([.6,0,1.5],[.6,0,1.5-1.5*k],GRY,3,'6 5')+F.dot([.6,0,1.5],BLU)+(k>.8?F.dot([.6,0,0],BLU):'')}},
 {say:'連接斜足 B 同 A 撇，就係斜線 AB 喺平面入面嘅射影。',read:'連接斜足 B 同 A 撇，就係斜線 AB 喺平面入面嘅射影。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.seg([-.6,0,1e-6],[.6,0,1.5],BLU,4)+F.seg([-.6,0,0],[.6,0,0],GRN,5,'',k)}},
 {say:'喺平面畫一條線，轉吓佢嘅方向，留意佢同影子嘅關係。',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});const t=k*1.57;return F.seg([-.6-Math.sin(t),Math.cos(t)*1,0],[-.6+Math.sin(t),-Math.cos(t)*1,0],RED,5)}},
 {say:'當條線垂直影子嗰陣，佢同斜線又係點？下一頁試吓！',dur:5,d:k=>{const F=G3.frame(Pl,{H:250,extra:[[.6,0,1.5]]});return F.text(220,34,'垂直斜線？',{c:RED})}}
]),
S.slider('3-2','動手探索','轉動地上的線，比較兩個數量積',['先猜：何時兩者同時為 0？','拖滑桿驗證。'],(h)=>G3.explore(h,{
 sl:[{id:'lf',label:'方向',min:0,max:120,step:15,value:45,fmt:v=>v+'°'}],
 draw:v=>{const F=G3.frame(Pl,{W:440,H:210,m:18,el:24,fs:34,extra:[[.9,0,1.5]]});const t=v.lf*Math.PI/180,B=[-.9,0,0],L=[Math.cos(t),Math.sin(t),0],pm=(k)=>G3.add(B,G3.mul(L,k));return F.show(F.base(),F.seg(B,[.9,0,1.5],BLU,5),F.seg(B,[.9,0,0],GRN,5),F.seg([.9,0,1.5],[.9,0,0],GRY,3,'6 5'),F.seg(pm(-.9),pm(.9),RED,5))},
 fx:v=>{const t=v.lf*Math.PI/180,c=1.8*Math.cos(t);const z=Math.abs(c)<1e-9?0:c;return `\\(\\boldsymbol{l}\\cdot\\text{影子}=${z.toFixed(2)}\\)，\\(\\boldsymbol{l}\\cdot\\text{斜線}=${z.toFixed(2)}\\)`}
})),
S.check('3-3','說出規律','你發現的規律是甚麼？',['兩個數量積一直相等！'],'平面內的 \\(l\\) 垂直斜線的射影時，\\(l\\) 與斜線？',[
 ['也垂直','兩個數量積相等，同時為 0',1],
 ['不一定垂直','概念錯誤：剛才兩個值一直相等'],
 ['一定平行','概念錯誤：與結果相反']
]),
S.check('3-4','找射影','斜線的射影是哪一條？',['先找垂直平面的直線。'],'正方體中，BD₁ 在平面 ADD₁A₁ 內的射影是？',[
 ['AD₁','AB⊥平面 ADD₁A₁，B 的射影是 A',1],
 ['DD₁','概念錯誤：B 的射影不是 D'],
 ['BD','概念錯誤：BD 不在這個平面內']
],{fig:miniCu}),
S.stepper('3-5','跟著做：向量證明','跟著做：用向量證明定理',['\\(\\boldsymbol{v}\\) 是平面內直線 \\(l\\) 的方向向量。'],(h)=>{const F=G3.frame(Pl,{W:440,H:200,m:18,fs:38,extra:[[.9,0,1.5]]});const B=[-.9,0,0],A=[.9,0,1.5],Ap=[.9,0,0];G3.steps(h,440,200,[
 {t:'A′A 垂直平面，所以 \\(\\overrightarrow{A\'A}\\cdot\\boldsymbol{v}=0\\)',d:k=>F.base()+F.seg(A,Ap,GRY,3,'6 5')+F.lab(A,'A',BLU,[10,-22])+F.lab(Ap,"A'",GRN,[20,12])+F.lab(B,'B',BLU,[-12,16])},
 {t:'\\(\\overrightarrow{BA}=\\overrightarrow{BA\'}+\\overrightarrow{A\'A}\\)',d:k=>F.seg(B,A,BLU,5,'',k)+F.seg(B,Ap,GRN,5,'',k)},
 {t:'\\(\\boldsymbol{v}\\cdot\\overrightarrow{BA}=\\boldsymbol{v}\\cdot\\overrightarrow{BA\'}+0\\)',d:k=>F.seg([-.9,-1,0],[-.9,1,0],RED,5)},
 {t:'所以 \\(\\boldsymbol{v}\\perp\\overrightarrow{BA\'}\\Leftrightarrow\\boldsymbol{v}\\perp\\overrightarrow{BA}\\)：定理與逆定理同時成立',d:k=>F.text(345,44,'⇔',{c:RED})}
])},{formula:{label:'三垂線定理',tex:'l\\subset\\alpha:\\ l\\perp A\'B\\Leftrightarrow l\\perp AB'}}),
S.stepper('3-6','跟著做：證線線垂直','跟著做：證 AC⊥BD₁',['正方體 ABCD-A₁B₁C₁D₁。'],(h)=>{const F=G3.frame(Cu,{W:440,H:200,m:34,fs:38});G3.steps(h,440,200,[
 {t:'DD₁ 垂直底面，所以 BD₁ 在底面的射影是 BD',d:k=>F.base()+F.seg('B','D1',BLU,4,'',k)+F.seg('B','D',GRN,4,'',k)},
 {t:'底面是正方形，對角線互相垂直：AC⊥BD',d:k=>F.seg('A','C',RED,4,'',k)},
 {t:'AC 在底面內且垂直射影，所以 AC⊥BD₁',d:k=>F.text(345,40,'AC⊥BD₁',{c:RED})}
])}),
S.check('3-7','快問快答','快問快答：定理怎樣用？',null,'要用三垂線定理證 \\(l\\perp AB\\)，應先證？',[
 ['\\(l\\) 在平面內，且 \\(l\\) 垂直 AB 的射影','定理的兩個條件',1],
 ['\\(l\\) 垂直平面','概念錯誤：那樣不需要定理'],
 ['AB 垂直平面','概念錯誤：AB 是斜線，不垂直平面']
]),
//@ch 4
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['先指出：平面、垂線、射影。','再用定理。'],7,['射影找錯（概念）','沒說明直線在平面內（程序）','定理與逆定理混用（概念）'],[
 ['四棱錐 P-ABCD，PA⊥矩形 ABCD，證 BC⊥PB',['PB 在底面的射影是甚麼？','矩形中 BC⊥AB。'],'BC⊥AB（射影），由三垂線定理得 BC⊥PB'],
 ['同上但底面只是平行四邊形，已知 BC⊥PB，證 ABCD 是矩形',['用逆定理。'],'由逆定理 BC⊥AB，有一個直角的平行四邊形是矩形'],
 ['△ABC 中 AB＝AC，D 是 BC 中點，O 在 AD 上，PO⊥平面 ABC，證 BC⊥PA',['PA 的射影是甚麼？'],'射影是 OA（在 AD 上），等腰得 BC⊥AD，由定理 BC⊥PA']
]),
S.check('4-2','合理嗎？','合理嗎？這個射影對嗎？',['射影要在指定平面內。'],'PA⊥平面 ABC，PB 在平面 ABC 內的射影是？',[
 ['AB','P 的射影是 A，B 的射影是自己',1],
 ['PA','概念錯誤：PA 垂直平面'],
 ['PC','概念錯誤：與 PB 無關']
]),
//@ch 5
S.mistake('5-1','抓錯偵探','抓錯偵探：定理的方向',null,{q:'PA⊥平面 ABC，要證 BC⊥PB。',steps:['BC⊥PA（線面垂直性質）','所以 BC⊥PB'],wrong:1,why:'概念錯誤：BC⊥PA 不足以推出 BC⊥PB，還要 BC⊥AB（射影）。',fix:'先由條件得 BC⊥AB，再由三垂線定理得 BC⊥PB'}),
S.mistake('5-2','再抓一次','再抓一次：射影找對了嗎？',null,{q:'正方體中，BD₁ 在平面 ADD₁A₁ 內的射影是？',steps:['D₁ 在平面內，射影是自己','B 的射影是 D，所以射影是 DD₁'],wrong:1,why:'概念錯誤：BA 才垂直平面 ADD₁A₁，B 的射影是 A。',fix:'射影是 AD₁'},{fig:miniCu}),
S.tasks('5-3','升級挑戰','升級挑戰：哪些線互相垂直？',['三棱錐 P-ABC：PC⊥平面 ABC，AC⊥BC，CD⊥AB。'],[
 ['寫出與 PC 垂直的線段。',['PC 垂直底面內所有直線。'],'AC、BC、AB、CD 等底面內的線段'],
 ['為甚麼 AB⊥PD？',['PD 的射影是 CD。'],'CD⊥AB，由三垂線定理得 AB⊥PD'],
 ['若 \\(l\\) 不在 α 內，只與 α 平行，定理還成立嗎？用向量解釋。',null,'成立：\\(\\boldsymbol{v}\\) 仍與 \\(\\overrightarrow{A\'A}\\) 垂直，同一條展開式成立']
]),
//@ch 6
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'長方體 ABCD-A₁B₁C₁D₁ 的底面是正方形。用三垂線定理證明 A₁C⊥BD。',
 ans:'AA₁⊥底面，A₁C 的射影是 AC；正方形得 BD⊥AC；由定理得 BD⊥A₁C',
 rubric:{mastered:'指出射影並引用定理 → 下一節進入綜合練習 C 層',partial:'結論對但未說明射影 → 下一節起步題補寫理由',notyet:'未能找到射影 → 小組用紙盒和筆找影子'},
 delayed:{when:'約一週後',q:'三棱錐 P-ABC 中，PA⊥平面 ABC，∠ABC＝90°。證明 BC⊥PB。',ans:'PB 的射影是 AB，BC⊥AB，由三垂線定理得 BC⊥PB'}
}),
S.goals('6-2','懸念解開','懸念解開：紅線垂直斜桿嗎？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['一定垂直，與斜桿多斜無關','因為 \\(\\boldsymbol{v}\\cdot\\overrightarrow{BA}=\\boldsymbol{v}\\cdot\\overrightarrow{BA\'}\\)，兩者同時為 0','這就是三垂線定理，逆過來也成立']}),
S.summary('6-3',null,['斜線的射影：連接斜足和垂足','定理：平面內的線垂直射影 \\(\\Rightarrow\\) 垂直斜線','逆定理：平面內的線垂直斜線 \\(\\Rightarrow\\) 垂直射影','用定理前，先指出平面、垂線和射影'])
