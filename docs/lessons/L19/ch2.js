/* ============ 第 2 階段　6–11 分鐘　解題秘笈大公開（教案：方法回顧與關鍵步驟；螺旋：基礎辨識（方法與檢查）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#7c3aed";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Py = G3.solid({A:[0,0,0],B:[2,0,0],C:[2,2,0],D:[0,2,0],P:[0,0,2]},[['A','B','C','D'],['P','A','B'],['P','B','C'],['P','C','D'],['P','D','A']]);
const miniPy = G3.mini(Py,null,{az:-55,el:20}), Cu = G3.cube(1), miniCu = G3.mini(Cu);
  window.DECK.push(S.phase(2, "6–11 分鐘", "解題秘笈大公開", C, [
S.stepper('2-1','解題秘笈','解題秘笈：三種角，一張表',['只差正弦和餘弦。'],(h)=>{G3.steps(h,440,210,[
 {t:'線線角：兩個方向向量，用 \\(\\cos\\)',d:k=>G3.txt(220,50,'線線 cos',{c:BLU,fs:38})},
 {t:'線面角：方向向量＋法向量，用 \\(\\sin\\)',d:k=>G3.txt(220,110,'線面 sin',{c:RED,fs:38})},
 {t:'面面角：兩個法向量，用 \\(\\cos\\)',d:k=>G3.txt(220,170,'面面 cos',{c:GRN,fs:38})}
])},{formula:{label:'共同',tex:'|\\cos\\langle\\cdot,\\cdot\\rangle|=\\frac{|\\boldsymbol{p}\\cdot\\boldsymbol{q}|}{|\\boldsymbol{p}||\\boldsymbol{q}|}'}}),
S.check('2-2','自我檢查','自我檢查：先問自己甚麼？',['下筆前的第一句。'],'求角前，應先判斷？',[
 ['是哪一種角','決定用哪兩個向量和甚麼三角比',1],
 ['向量有多長','概念錯誤：公式會處理長度'],
 ['用哪隻計算機','概念錯誤：與方法無關']
]),
S.stepper('2-3','秘笈二：二面角','解題秘笈二：題目問二面角時',['多一個步驟。'],(h)=>{G3.steps(h,440,210,[
 {t:'先算 \\(\\cos\\langle\\boldsymbol{n}_1,\\boldsymbol{n}_2\\rangle\\)',d:k=>G3.txt(220,50,'先算餘弦',{c:BLU,fs:38})},
 {t:'看圖：二面角明顯是銳角還是鈍角？',d:k=>G3.txt(220,110,'再看圖',{c:GRN,fs:38})},
 {t:'相等或互補，選符合圖形的一個',d:k=>G3.txt(220,170,'選答案',{c:RED,fs:38})}
])}),
S.goals('2-4','代入檢驗','檢查三問：答案合理嗎？',['做完每題都問一次。'],{head:'檢查清單',items:['線線、線面、所成的角是否不超過 90°？','線面角有沒有用正弦？','二面角有沒有看圖判斷？']})
  ]));
})();
