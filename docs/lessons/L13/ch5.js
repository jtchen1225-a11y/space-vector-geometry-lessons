/* ============ 第 5 階段　26–35 分鐘　抓錯偵探＋升級挑戰（教案：典型錯誤分析＋分層練習；螺旋：初步應用（錯誤修正）） ============ */
window.DECK = window.DECK || [];
(function () {
  const C = "#e11d48";
  const {RED, GRN, BLU, VIO, AMB, INK, GRY, vv, bb} = window.G3; const G3 = window.G3, S = window.S;
const Cu = G3.cube(1), miniCu = G3.mini(Cu);
const Pl = G3.plane('α',{w:1.8,d:1.5});
  window.DECK.push(S.phase(5, "26–35 分鐘", "抓錯偵探＋升級挑戰", C, [
S.mistake('5-1','抓錯偵探','抓錯偵探：定理的方向',null,{q:'PA⊥平面 ABC，要證 BC⊥PB。',steps:['BC⊥PA（線面垂直性質）','所以 BC⊥PB'],wrong:1,why:'概念錯誤：BC⊥PA 不足以推出 BC⊥PB，還要 BC⊥AB（射影）。',fix:'先由條件得 BC⊥AB，再由三垂線定理得 BC⊥PB'}),
S.mistake('5-2','再抓一次','再抓一次：射影找對了嗎？',null,{q:'正方體中，BD₁ 在平面 ADD₁A₁ 內的射影是？',steps:['D₁ 在平面內，射影是自己','B 的射影是 D，所以射影是 DD₁'],wrong:1,why:'概念錯誤：BA 才垂直平面 ADD₁A₁，B 的射影是 A。',fix:'射影是 AD₁'},{fig:miniCu}),
S.tasks('5-3','升級挑戰','升級挑戰：哪些線互相垂直？',['三棱錐 P-ABC：PC⊥平面 ABC，AC⊥BC，CD⊥AB。'],[
 ['寫出與 PC 垂直的線段。',['PC 垂直底面內所有直線。'],'AC、BC、AB、CD 等底面內的線段'],
 ['為甚麼 AB⊥PD？',['PD 的射影是 CD。'],'CD⊥AB，由三垂線定理得 AB⊥PD'],
 ['若 \\(l\\) 不在 α 內，只與 α 平行，定理還成立嗎？用向量解釋。',null,'成立：\\(\\boldsymbol{v}\\) 仍與 \\(\\overrightarrow{A\'A}\\) 垂直，同一條展開式成立']
])
  ]));
})();
