/* ============ 第 2 階段　6–11 分鐘　解題秘笈大公開（教案：方法回顧與關鍵步驟；螺旋：基礎辨識（方法與檢查）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Te = G3.solid({A:[1.4,0,0],B:[.9,2,0],C:[-.4,.8,0],D:[.75,.9,1.7]},[['A','B','C'],['A','B','D'],['B','C','D'],['C','A','D']]), miniTe = G3.mini(Te);
  window.DECK.push(S.phase(2, "6–11 分鐘", "解題秘笈大公開", C, [
S.stepper('2-1','解題秘笈','解題秘笈一：寫分解式三步',['每一步都有檢查點。'],(h)=>{const F=G3.frame(Te,{W:440,H:200,m:34,fs:38});const V=Te.V,E=G3.mid(V.C,V.D);G3.steps(h,440,200,[
 {t:`第 1 步：定基底，例如 ${vv('AB')}、${vv('AC')}、${vv('AD')}（由同一點出發）`,d:k=>F.base()+F.vec('A','B',BLU,'',k)+F.vec('A','C',GRN,'',k)+F.vec('A','D',AMB,'',k)},
 {t:`第 2 步：標目標點，例如 E 是 CD 中點，要寫 ${vv('BE')}`,d:k=>F.dot(E,RED)+F.lab(E,'E',RED,[-22,0])},
 {t:`第 3 步：用「終點減起點」：${vv('BE')}＝${vv('AE')}－${vv('AB')}＝½${vv('AC')}＋½${vv('AD')}－${vv('AB')}`,d:k=>F.vec('B',E,RED,'',k)}
])}),
S.check('2-2','自我檢查','自我檢查：終點減起點',['這條公式可以避免方向錯。'],`若 ${vv('AP')}＝p，${vv('AQ')}＝q，${vv('PQ')}＝？`,[
 ['\\(\\boldsymbol{q}-\\boldsymbol{p}\\)','終點減起點',1],
 ['\\(\\boldsymbol{p}-\\boldsymbol{q}\\)','程序錯誤：方向反了'],
 ['\\(\\boldsymbol{p}+\\boldsymbol{q}\\)','概念錯誤：把差當成和']
]),
S.stepper('2-3','秘笈二：求長度','解題秘笈二：長度先平方',['基底長度 1、兩兩夾角 60°。'],(h)=>{G3.steps(h,440,230,[
 {t:'目標：求 \\(|\\boldsymbol{a}+\\boldsymbol{b}+\\boldsymbol{c}|\\)',d:k=>G3.txt(220,50,'|a＋b＋c|²',{c:RED,fs:34})},
 {t:'展開：三個平方項＋三個 2 倍數量積',d:k=>G3.txt(220,110,'＝1＋1＋1＋2(½＋½＋½)',{c:INK,fs:30})},
 {t:'計算得 6，開方得 \\(\\sqrt6\\)；別忘了開方',d:k=>G3.txt(220,170,'＝6，長度 √6',{c:GRN,fs:34})}
])}),
S.goals('2-4','代入檢驗','檢查三問：答案合理嗎？',['做完每題都問一次。'],{head:'檢查清單',items:['方向：每段路線與基底同向還是反向？','係數：中點有沒有 \\(\\tfrac12\\)？','夾角：基底是否垂直？長度有沒有開方？']})
  ]));
})();
