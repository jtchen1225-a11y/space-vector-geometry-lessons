/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), Pr = G3.solid({A:[1.6,0,0],B:[1.2,2.2,0],C:[-.4,1,0],A1:[1.9,.5,1.7],B1:[1.5,2.7,1.7],C1:[-.1,1.5,1.7]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(\\boldsymbol{p}=2\\boldsymbol{a}-\\boldsymbol{b}\\)，\\(\\boldsymbol{q}=\\boldsymbol{a}+\\boldsymbol{c}\\)，\\(\\boldsymbol{r}=3\\boldsymbol{a}-\\boldsymbol{b}+\\boldsymbol{c}\\)。三者共面嗎？說明。',
 ans:'共面：\\(\\boldsymbol{r}=\\boldsymbol{p}+\\boldsymbol{q}\\)',
 rubric:{mastered:'找到 r＝p＋q 並用定理下結論 → 下一節進入基本定理',partial:'答案對但未寫出關係式 → 下一節起步題練「設 r＝xp＋yq」',notyet:'無從入手或憑感覺判斷 → 小組回到方格分解'},
 delayed:{when:'約一週後',q:'\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(\\boldsymbol{p}=\\boldsymbol{a}+2\\boldsymbol{b}\\)，\\(\\boldsymbol{q}=\\boldsymbol{b}-\\boldsymbol{c}\\)，\\(\\boldsymbol{r}=\\boldsymbol{a}+\\boldsymbol{b}\\)。三者共面嗎？',ans:'不共面（設 r＝xp＋yq，比較係數得 x＝1、y＝0，但 b 的係數矛盾）'}
}),
S.goals('6-2','懸念解開','懸念解開：為甚麼三腳不搖？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['不共線三點確定一個平面，三腳一定同時着地','第四點要滿足 \\(\\overrightarrow{AP}=x\\overrightarrow{AB}+y\\overrightarrow{AC}\\)，才在同一平面','找不到 \\(x,y\\) 時，第四條腳就懸空，椅子會搖']}),
S.summary('6-3',null,['\\(\\boldsymbol{a},\\boldsymbol{b}\\) 不共線時：共面 \\(\\Leftrightarrow\\boldsymbol{c}=x\\boldsymbol{a}+y\\boldsymbol{b}\\)','四點共面：\\(\\overrightarrow{AP}=x\\overrightarrow{AB}+y\\overrightarrow{AC}\\)','判斷方法：設未知數，比較係數','向量平行不等於點共線，要有公共點'])
  ]));
})();
