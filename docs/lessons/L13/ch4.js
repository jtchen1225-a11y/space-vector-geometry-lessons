/* ============ 第 4 階段　18–26 分鐘　輪到你出手：闖關練習（教案：學生獨立嘗試＋教師巡視；螺旋：初步應用） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#d97706";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pl = G3.plane('α',{w:1.8,d:1.5});
  window.DECK.push(S.phase(4, "18–26 分鐘", "輪到你出手：闖關練習", C, [
S.drill('4-1','專注闖關','專注時間：選一層挑戰',['先指出：平面、垂線、射影。','再用定理。'],7,['射影找錯（概念）','沒說明直線在平面內（程序）','定理與逆定理混用（概念）'],[
 ['四棱錐 P-ABCD，PA⊥矩形 ABCD，證 BC⊥PB',['PB 在底面的射影是甚麼？','矩形中 BC⊥AB。'],'BC⊥AB（射影），由三垂線定理得 BC⊥PB'],
 ['同上但底面只是平行四邊形，已知 BC⊥PB，證 ABCD 是矩形',['用逆定理。'],'由逆定理 BC⊥AB，有一個直角的平行四邊形是矩形'],
 ['△ABC 中 AB＝AC，D 是 BC 中點，O 在 AD 上，PO⊥平面 ABC，證 BC⊥PA',['PA 的射影是甚麼？'],'射影是 OA（在 AD 上），等腰得 BC⊥AD，由定理 BC⊥PA']
]),
S.check('4-2','合理嗎？','合理嗎？這個射影對嗎？',['射影要在指定平面內。'],'PA⊥平面 ABC，PB 在平面 ABC 內的射影是？',[
 ['AB','P 的射影是 A，B 的射影是自己',1],
 ['PA','概念錯誤：PA 垂直平面'],
 ['PC','概念錯誤：與 PB 無關']
])
  ]));
})();
