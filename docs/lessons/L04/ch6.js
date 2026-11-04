/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), miniPa = G3.mini(Pa);
const Prm = G3.solid({A:[2,.2,0],B:[.4,.2,0],C:[.9,1.9,0],A1:[2,.2,1.5],B1:[.4,.2,1.5],C1:[.9,1.9,1.5]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:`平行六面體 ABCD-A₁B₁C₁D₁ 中，M 是 A₁D₁ 中點，基底 ${vv('AB')}＝a、${vv('AD')}＝b、${vv('AA1')}＝c。寫出 ${vv('BM')} 的分解式。`,
 ans:'\\(\\overrightarrow{BM}=-\\boldsymbol{a}+\\tfrac12\\boldsymbol{b}+\\boldsymbol{c}\\)',
 rubric:{mastered:'路線與正負號都對 → 下一節綜合練習做 C 層',partial:'路線對、符號或中點係數有一處錯 → 下一節練習由 B 層開始',notyet:'未能走出路線 → 小組用紙盒走一次路線再換字母'},
 delayed:{when:'約一週後',q:`四面體 ABCD 中，E、F 分別是 AB、CD 中點，用 ${vv('AB')}、${vv('AC')}、${vv('AD')} 表示 ${vv('EF')}。`,ans:`½${vv('AC')}＋½${vv('AD')}－½${vv('AB')}`}
}),
S.goals('6-2','懸念解開','懸念解開：要幾個方向掣？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['兩個方向只能在一個平面內飛','加上第三個不共面的方向（上下），就能到達空間任何一點','再多的方向只是多餘，三個不共面的方向已經足夠']}),
S.summary('6-3',null,['三個不共面向量是基底，表示所有空間向量','\\(\\boldsymbol{p}=x\\boldsymbol{a}+y\\boldsymbol{b}+z\\boldsymbol{c}\\)，\\((x,y,z)\\) 唯一','先走路線、再換字母，反方向要寫負號','基底不一定垂直，展開時用已知夾角'])
  ]));
})();
