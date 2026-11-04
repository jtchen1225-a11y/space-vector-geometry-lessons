/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Pa = G3.para(), Pr = G3.solid({A:[1.6,0,0],B:[1.2,2.2,0],C:[-.4,1,0],A1:[1.9,.5,1.7],B1:[1.5,2.7,1.7],C1:[-.1,1.5,1.7]},[['A','B','C'],['A1','B1','C1'],['A','B','B1','A1'],['B','C','C1','B1'],['C','A','A1','C1']]);
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['找 x、y，就是證共面。','卡住先按「提示」。'],7,['忽略不共線前提（概念）','把倍數寫錯（粗心）','未能湊出線性組合（程序）'],[
 ['\\(\\boldsymbol{a}=3\\boldsymbol{b}-\\boldsymbol{c}\\)，三向量共面嗎？',['看 \\(\\boldsymbol{a}\\) 能否寫成 \\(\\boldsymbol{b},\\boldsymbol{c}\\) 的組合。','\\(x=3\\)，\\(y=-1\\)。'],'共面'],
 [`${vv('AP')}＝${vv('AB')}－2${vv('AC')}，P 在平面 ABC 上嗎？`,['與四點共面的公式比較。'],'在：\\(x=1\\)，\\(y=-2\\)'],
 ['\\(\\boldsymbol{a},\\boldsymbol{b},\\boldsymbol{c}\\) 不共面，\\(\\boldsymbol{p}=\\boldsymbol{a}+\\boldsymbol{b}\\)，\\(\\boldsymbol{q}=\\boldsymbol{b}+\\boldsymbol{c}\\)，\\(\\boldsymbol{r}=\\boldsymbol{a}-\\boldsymbol{c}\\) 共面嗎？說明。',['試算 \\(\\boldsymbol{p}-\\boldsymbol{q}\\)。'],'共面：\\(\\boldsymbol{r}=\\boldsymbol{p}-\\boldsymbol{q}\\)']
]),
S.check('4-2','合理嗎？','合理嗎？四點一定共線？',['想一想平行四邊形。'],`若 ${vv('AB')}＝2${vv('CD')}，A、B、C、D？`,[
 ['不一定共線','AB∥CD 也可以是兩條不同的平行線',1],
 ['一定共線','概念錯誤：沒有公共點就不能推出共線'],
 ['一定不共面','概念錯誤：兩條平行線一定共面']
])
  ]));
})();
