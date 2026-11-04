/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), miniCu = G3.mini(Cu);
const Roof = (()=>{const r=G3.solid({A:[2,0,0],B:[0,2,0],Cc:[0,0,1]},[['A','B','Cc']],true);return r})();
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'棱長 1 的正方體 ABCD-A₁B₁C₁D₁，求 A 到平面 A₁BD 的距離。',
 ans:'\\(\\dfrac{\\sqrt3}{3}\\)（\\(\\boldsymbol{n}=(1,-1,-1)\\)，\\(\\overrightarrow{DA}=(1,0,0)\\)）',
 rubric:{mastered:'法向量、公式都對 → 下一節綜合練習做 C 層',partial:'方法對、分母或絕對值有誤 → 下一節由 B 層開始',notyet:'不會用公式 → 小組回到 3-2'},
 delayed:{when:'約一週後',q:'A(3,0,0)、B(0,3,0)、C(0,0,3)，求原點到平面 ABC 的距離。',ans:'\\(\\sqrt3\\)'}
}),
S.goals('6-2','懸念解開','懸念解開：無人機離屋頂多高？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['不用找垂足：\\(\\boldsymbol{n}=(1,1,2)\\)，\\(\\overrightarrow{BA}=(-1,1,2)\\)','\\(d=\\dfrac{|{-1}+1+4|}{\\sqrt6}=\\dfrac{2\\sqrt6}{3}\\)','屋頂上換任何一點 B，答案都一樣']}),
S.summary('6-3',null,['\\(d=\\dfrac{|\\overrightarrow{BA}\\cdot\\boldsymbol{n}|}{|\\boldsymbol{n}|}\\)，B 是平面內任意一點','步驟：法向量 → 平面內一點 → 代公式','平行線面、平行面面：都歸結為點面距離','不用找垂足'])
  ]));
})();
