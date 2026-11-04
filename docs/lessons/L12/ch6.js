/* ============ 第 6 階段　35–40 分鐘　最後一關：出口挑戰（教案：出口題＋當堂回饋；螺旋：學習證據） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#0891b2";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(2), Bx = G3.box(2,3,1.5), miniBx = G3.mini(Bx);
const Tp = G3.solid({O:[0,0,0],A:[2,0,0],B:[0,3,0],Z:[0,0,3]},[['O','A','B'],['O','B','Z'],['O','Z','A'],['A','B','Z']]);
  window.DECK.push(S.phase(6, "35–40 分鐘", "最後一關：出口挑戰", C, [
S.exit('6-1','出口挑戰','最後一關：出口挑戰',null,{
 q:'A(1,0,1)、B(0,1,1)、C(1,1,0)。求平面 ABC 的一個法向量；過原點、方向 (1,−1,0) 的直線與平面是甚麼關係？',
 ans:'\\((1,1,1)\\)；直線與平面平行（原點不在平面上）',
 rubric:{mastered:'兩問都對且驗證點不在平面內 → 下一節進入三垂線定理',partial:'法向量對，但未區分平行與在平面內 → 下一節起步題補',notyet:'未能列方程 → 小組回到 3-5'},
 delayed:{when:'約一週後',q:'A(2,0,0)、B(0,2,0)、C(0,0,1)，求平面 ABC 的一個法向量。',ans:'\\((1,1,2)\\)（非零倍數皆可）'}
}),
S.goals('6-2','懸念解開','懸念解開：怎樣描述板的朝向？',['回頭看你剛才猜的是哪一項。'],{head:'答案揭曉',items:['只要一個方向：垂直板面的法向量','法向量確定朝向，再加板上一點就確定位置','所以電話裏說一個向量和一點就夠了']}),
S.summary('6-3',null,['法向量：非零且垂直平面，非零倍數也是','求法：平面內兩個不平行向量，解兩條方程','\\(\\boldsymbol{v}\\parallel\\boldsymbol{n}\\Rightarrow l\\perp\\alpha\\)；\\(\\boldsymbol{v}\\perp\\boldsymbol{n}\\Rightarrow l\\parallel\\alpha\\) 或在內','\\(\\boldsymbol{n}_1\\perp\\boldsymbol{n}_2\\Rightarrow\\) 面面垂直；\\(\\boldsymbol{n}_1\\parallel\\boldsymbol{n}_2\\Rightarrow\\) 平行或重合'])
  ]));
})();
