/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para();
const Cu = G3.cube(1);
const miniPa = G3.mini(Pa), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:`三棱柱 ABC-A₁B₁C₁，M 是 B₁C₁ 中點。設 ${vv('AB')}＝${bb('a')}、${vv('AC')}＝${bb('b')}、${vv('AA1')}＝${bb('c')}，用它們表示 ${vv('AM')}。`,
 ans:`\\(\\overrightarrow{AM}=\\boldsymbol{c}+\\tfrac12(\\boldsymbol{a}+\\boldsymbol{b})\\)`,
 rubric:{mastered:'首尾相接並正確用中點公式 → 下一節直接進入夾角與數量積',partial:'路線正確但係數或符號有誤 → 下一節起步題再做一次中點公式',notyet:'未能把向量接起來或把和當成長度和 → 小組回到實物紙盒重做首尾相接'},
 delayed:{when:'約一週後',q:`四面體 O-ABC，D 是 AB 中點，用 ${vv('OA')}、${vv('OB')}、${vv('OC')} 表示 ${vv('CD')}。`,ans:`½(${vv('OA')}＋${vv('OB')})－${vv('OC')}`}
}),
S.goals('6-2','懸念解開','懸念解開：無人機的直線路線',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['三段位移首尾相接，和向量就是直飛路線','它是長方體的體對角線，不是三段長度相加','\\(\\sqrt{4^2+3^2+12^2}=13\\)，所以只要 13 m，不是 19 m']}),
S.summary('6-3',null,['任意兩個空間向量都共面，加減數乘法則與平面相同','首尾相接：和向量由第一個起點指向最後的終點','三個不共面向量的和＝平行六面體的體對角線','中點公式：\\(\\overrightarrow{OM}=\\tfrac12(\\overrightarrow{OA}+\\overrightarrow{OB})\\)'])
  ]));
})();
