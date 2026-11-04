/* ============ 第 4 階段　25–35 分鐘　抓錯偵探＋綜合解難（教案：錯誤門診＋綜合解難；螺旋：綜合解難） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Te = G3.solid({A:[1.4,0,0],B:[.9,2,0],C:[-.4,.8,0],D:[.75,.9,1.7]},[['A','B','C'],['A','B','D'],['B','C','D'],['C','A','D']]), miniTe = G3.mini(Te);
  window.DECK.push(S.phase(4, "25–35 分鐘", "抓錯偵探＋綜合解難", C, [
S.mistake('4-1','抓錯偵探','抓錯偵探：中點哪裏去了？',null,{q:`四面體 O-ABC，M 是 BC 中點，寫 ${vv('AM')}。`,steps:[`${vv('AM')}＝${vv('OM')}－${vv('OA')}`,`＝${vv('OB')}＋${vv('OC')}－${vv('OA')}`],wrong:1,why:'粗心失誤：中點公式漏了 ½。',fix:`${vv('AM')}＝½(${vv('OB')}＋${vv('OC')})－${vv('OA')}`}),
S.mistake('4-2','再抓一次','再抓一次：長度算完了嗎？',null,{q:'\\(|\\boldsymbol{a}|=|\\boldsymbol{b}|=1\\)，夾角 60°，求 \\(|\\boldsymbol{a}-\\boldsymbol{b}|\\)。',steps:['\\(|\\boldsymbol{a}-\\boldsymbol{b}|=\\boldsymbol{a}^2+\\boldsymbol{b}^2-2\\boldsymbol{a}\\cdot\\boldsymbol{b}\\)','\\(=1+1-1=1\\)'],wrong:0,why:'程序錯誤：左邊要先平方；這題開方後碰巧相同，但寫法不對。',fix:'\\(|\\boldsymbol{a}-\\boldsymbol{b}|^2=1\\)，所以 \\(|\\boldsymbol{a}-\\boldsymbol{b}|=1\\)'}),
S.tasks('4-3','綜合解難','綜合解難：點在線段上',null,[
 ['四面體 O-ABC，M、N 是 OA、BC 中點，用基底表示 \\(\\overrightarrow{MN}\\)',['終點減起點。','\\(\\overrightarrow{ON}=\\tfrac12(\\boldsymbol{b}+\\boldsymbol{c})\\)'],'\\(\\tfrac12(\\boldsymbol{b}+\\boldsymbol{c}-\\boldsymbol{a})\\)'],
 ['同上，G 在 MN 上且 MG＝2GN，表示 \\(\\overrightarrow{OG}\\)',['\\(\\overrightarrow{OG}=\\overrightarrow{OM}+\\tfrac23\\overrightarrow{MN}\\)'],'\\(\\tfrac16\\boldsymbol{a}+\\tfrac13\\boldsymbol{b}+\\tfrac13\\boldsymbol{c}\\)'],
 ['若 MG：GN 改成 t：1，寫出 \\(\\overrightarrow{OG}\\)，t 增大時 G 怎樣走？',null,'\\(\\overrightarrow{OG}=\\tfrac{1}{2(t+1)}\\boldsymbol{a}+\\tfrac{t}{2(t+1)}(\\boldsymbol{b}+\\boldsymbol{c})\\)，t 增大時 G 趨近 N']
]),
S.tasks('4-4','生活解難','生活解難：吊燈的三條鋼索',['三條鋼索由天花板吊住同一點。'],[
 ['兩條鋼索拉力都是 2 N、夾角 60°，它們的合力大小是？',['合力就是和向量。','\\(|\\boldsymbol{a}+\\boldsymbol{b}|^2=4+4+4\\)'],'\\(2\\sqrt3\\) N'],
 ['再加第三條 3 N，與前兩條都成 60°，總合力大小是？',['同 3-3 B 層的基底。'],'\\(\\sqrt{33}\\) N'],
 ['三條鋼索完全水平能吊住燈嗎？用向量解釋。',null,'不能：水平向量的和仍水平，抵消不了向下的重力']
]),
S.tasks('4-5','輪到你出題','輪到你出題：改一個條件',['自己改題，與同學交換。'],[
 ['把 3-3 的 \\(|\\boldsymbol{c}|\\) 改成 1，再求 AC₁ 長。',['\\(\\boldsymbol{a}\\cdot\\boldsymbol{c}=\\boldsymbol{b}\\cdot\\boldsymbol{c}=1\\)'],'\\(\\sqrt{19}\\)'],
 ['把 3-3 的夾角全改成 90°，AC₁ 長變成？',['中間項都消失。'],'\\(\\sqrt{17}\\)'],
 ['自編一題要用基底求長度的題目，並寫答案。',null,'答案因題而異；檢查基底的長度和夾角是否都已給出']
])
  ]));
})();
