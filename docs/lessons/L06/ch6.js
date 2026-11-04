/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Grid = G3.box(3,3,2.2);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(\\boldsymbol{a}=(1,-1,2)\\)，\\(\\boldsymbol{b}=(2,1,-1)\\)。求 \\(\\cos\\langle\\boldsymbol{a},\\boldsymbol{b}\\rangle\\)，並判斷夾角是銳角、直角還是鈍角。',
 ans:'\\(-\\tfrac16\\)，鈍角',
 rubric:{mastered:'三步正確並由符號判斷 → 下一節進入空間直角坐標系',partial:'公式對但計算有誤 → 下一節起步題再做一題',notyet:'未能用坐標公式 → 小組用 3-5 步驟滑桿重做'},
 delayed:{when:'約一週後',q:'\\(\\boldsymbol{a}=(1,k,2)\\)，\\(\\boldsymbol{b}=(3,1,-1)\\) 互相垂直。求 \\(k\\) 和 \\(|\\boldsymbol{a}|\\)。',ans:'\\(k=-1\\)，\\(|\\boldsymbol{a}|=\\sqrt6\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：兩架無人機垂直嗎？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['\\((3,4,0)\\cdot(4,-3,2)\\)＝\\(12-12+0=0\\)','數量積為 0，所以兩方向互相垂直','坐標把幾何問題變成幾個數的運算']}),
S.summary('6-3',null,['坐標：單位正交基底下的係數 \\((x,y,z)\\)','\\(\\boldsymbol{a}\\cdot\\boldsymbol{b}=x_1x_2+y_1y_2+z_1z_2\\)','\\(|\\boldsymbol{a}|=\\sqrt{x^2+y^2+z^2}\\)','平行：\\(\\boldsymbol{b}=\\lambda\\boldsymbol{a}\\)；垂直：數量積為 0'])
  ]));
})();
