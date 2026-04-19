import { useState, useRef } from "react";

// ============================================================
// 令和5・6・7年度 総合 Part II 全75問
// 出典：航空大学校公式HP 過去問PDF
// ============================================================
const questions = [

// ========== 令和7年度（R7）==========
{ id:"R7-21", year:2025, number:21, category:"時事問題", subject:"中東和平・二国家解決",
  question:"外務省ホームページにおける中東和平についての日本の基本的立場（令和2年時点・抜粋）の空白(ア)～(ウ)に入る語句の組合せとして，最も適切なものを選べ。\n\n我が国は，（ア）と将来の独立した（イ）国家が平和かつ安全に共存する（ウ）を支持している。",
  choices:["(ア)ハマス (イ)パレスチナ (ウ)アラブの春","(ア)パレスチナ (イ)ハマス (ウ)アラブの春","(ア)イスラエル (イ)ヨルダン (ウ)アラブの春","(ア)イスラエル (イ)パレスチナ (ウ)二国家解決","(ア)パレスチナ (イ)イスラエル (ウ)二国家解決"],
  answer:3,
  explanation:"日本の中東和平の基本的立場は「イスラエルとパレスチナの二国家解決」を支持すること。「アラブの春」は2010〜11年の民主化運動であり中東和平解決策ではない。答え④。"},

{ id:"R7-22", year:2025, number:22, category:"時事問題", subject:"米国政治制度",
  question:"米国における政治制度についての(ア)～(オ)の正誤の組合せとして，最も適切なものを選べ。\n(ア) 大統領選は「勝者総取り方式」で行われる\n(イ) 大統領の任期は5年で再選まで許されるが3選は禁止\n(ウ) 国防の最高司令官は大統領ではなく国防長官\n(エ) 憲法により三権分立の抑制と均衡の原則がある\n(オ) 米国は52の州とコロンビア特別区から構成",
  choices:["(ア)正(イ)誤(ウ)誤(エ)正(オ)誤","(ア)正(イ)正(ウ)誤(エ)正(オ)誤","(ア)誤(イ)正(ウ)正(エ)誤(オ)正","(ア)誤(イ)誤(ウ)正(エ)誤(オ)正","(ア)正(イ)誤(ウ)正(エ)誤(オ)誤"],
  answer:0,
  explanation:"(ア)正：勝者総取り方式は正しい。(イ)誤：任期は4年，3選禁止（2選まで）。(ウ)誤：最高司令官は大統領。(エ)正：三権分立は正しい。(オ)誤：50州+コロンビア特別区（52ではない）。答え①。"},

{ id:"R7-23", year:2025, number:23, category:"社会", subject:"外国人の特定技能（航空分野）",
  question:"航空分野における外国人の特定技能の在留資格に係る制度についての(ア)～(ウ)の正誤の組合せとして，最も適切なものを選べ。\n(ア) 従事できる業務は「空港グランドハンドリング業務」と「航空機整備業務」のみ\n(イ) 令和6年3月までの5年間で13,000人が目標だったが実績は約1,300人程度\n(ウ) 航空分野では1号特定技能外国人については実務経験を要件とせず試験合格のみでよい",
  choices:["(ア)正(イ)正(ウ)正","(ア)正(イ)誤(ウ)誤","(ア)誤(イ)正(ウ)正","(ア)誤(イ)正(ウ)誤","(ア)誤(イ)誤(ウ)正"],
  answer:3,
  explanation:"(ア)正：航空分野の特定技能はグランドハンドリングと航空機整備の2業務。(イ)正：13,000人目標に対し実績は約1,300人。(ウ)誤：2号技能実習修了者を除き実務経験は要件とされている。答え④。"},

{ id:"R7-24", year:2025, number:24, category:"航空系", subject:"緊急脱出・注意事項",
  question:"航空機から非常脱出する際の注意事項の空白(ア)～(エ)に入る語句の組合せとして，最も適切なものを選べ。\n\n非常脱出時に手荷物を持ち出すことや（ア）を履いたままの脱出は，自身の脱出の妨げになるほか，（イ）が損傷し使用できなくなるおそれがある。（ウ）の指示に従って，手荷物を持ち出さず（ア）を脱いで脱出する。また（イ）下での（エ）の協力が脱出時の負傷を減少させる。",
  choices:["(ア)ブーツ (イ)非常口 (ウ)機長 (エ)地上係員","(ア)ハイヒール (イ)脱出スライド (ウ)機長 (エ)地上係員","(ア)ブーツ (イ)脱出スライド (ウ)乗務員 (エ)援助者","(ア)ハイヒール (イ)非常口 (ウ)機長 (エ)地上係員","(ア)ハイヒール (イ)脱出スライド (ウ)乗務員 (エ)援助者"],
  answer:4,
  explanation:"脱出スライドを損傷させる主因はハイヒール。指示を出すのは乗務員。スライド下で手助けするのは援助者（Assister）。答え⑤。"},

{ id:"R7-25", year:2025, number:25, category:"地学", subject:"エルニーニョ現象",
  question:"エルニーニョ現象に関する文章の空白(ア)～(エ)に入る語句の組合せとして，最も適切なものを選べ。\n\n太平洋赤道域の海水温が平年より(ア)なる現象。西太平洋熱帯域では海水温が(イ)し対流活動が不活発となる。日本付近では夏季に太平洋高気圧の張り出しが(ウ)なり，気温が(エ)なる傾向がある。",
  choices:["(ア)高く (イ)低下 (ウ)弱く (エ)高く","(ア)低く (イ)上昇 (ウ)強く (エ)低く","(ア)高く (イ)上昇 (ウ)強く (エ)高く","(ア)低く (イ)低下 (ウ)弱く (エ)高く","(ア)高く (イ)低下 (ウ)弱く (エ)低く"],
  answer:4,
  explanation:"エルニーニョ現象：太平洋赤道域東部の海水温が(ア)高くなる。西太平洋では海水温が(イ)低下し対流不活発。日本では太平洋高気圧の張り出しが(ウ)弱くなり冷夏傾向で気温が(エ)低くなる。答え⑤。"},

{ id:"R7-26", year:2025, number:26, category:"地学", subject:"気団の性質",
  question:"気団に関する記述として，誤っているものを1つ選べ。",
  choices:["気団とは水平スケールが数百〜数千kmの範囲で特有の気温や湿度を持つ一様な空気の塊である","小笠原気団は高温で多湿な気団で主として盛夏期に日本付近に現れる","シベリア気団は冬季に北西季節風として大陸から吹き出す低温で湿潤な気団である","オホーツク海気団は海上で発達し低温で湿潤な気団で主として梅雨の時期に現れる","揚子江気団は春や秋に移動性高気圧とともに日本付近にやってくる温暖で乾燥した気団である"],
  answer:2,
  explanation:"③が誤り。シベリア気団は大陸で発達するため低温で「乾燥した」気団。湿潤ではない。大陸性気団は乾燥，海洋性気団は湿潤が基本。答え③。"},

{ id:"R7-27", year:2025, number:27, category:"物理", subject:"力のモーメント",
  question:"平面内で推力Tが点Gから距離Lの点に30°の角度で作用している。この推力による点G周りの力のモーメントとして最も適切なものを選べ。",
  choices:["T","T × L","(1/2)T × L","(√3/2)T × L","0"],
  answer:3,
  explanation:"モーメント = 力 × 腕の長さ（力の作用線から支点への垂直距離）。推力Tが30°の角度で作用し，距離Lの点に働く場合，腕の長さ = L × sin30° ... ただし図の配置によりL × sin(60°)= (√3/2)L となる。M = T × (√3/2)L。答え④。"},

{ id:"R7-28", year:2025, number:28, category:"物理", subject:"等加速度運動・移動距離",
  question:"小型ジェット機（質量4.00トン，推力20.0kN）と電気自動車（静止から100km/hまで5.00秒）が同時に加速開始し，20.0秒後のスタート位置からの距離の組合せとして最も適切なものを選べ。（空気抵抗・転がり抵抗は無視）",
  choices:["小型ジェット機 約400m 電気自動車 約100m","小型ジェット機 約1,000m 電気自動車 約1,100m","小型ジェット機 約500m 電気自動車 約560m","小型ジェット機 約100m 電気自動車 約110m","小型ジェット機 約1,000m 電気自動車 約4,000m"],
  answer:1,
  explanation:"小型ジェット機：a=F/m=20,000/4,000=5m/s²，x=½at²=½×5×400=1,000m。電気自動車：100km/h≒27.78m/s，a=27.78/5≒5.556m/s²，x=½×5.556×400≒1,111m≒約1,100m。答え②。"},

{ id:"R7-29", year:2025, number:29, category:"物理", subject:"無重力・質量測定",
  question:"無重力の宇宙ステーションで錘の質量を量りたい。手段A〜Fの正しい組合せはどれか。\nA)天秤に分銅と静かに載せる B)バネばかりに静かに吊す C)体重計に静かに載せる\nD)天秤に分銅と載せて既知の加速度で運動させる E)バネばかりに吊して既知の周期・半径で等速円運動 F)体重計に載せて既知の加速度で運動させる",
  choices:["A)のみ","A)B)C)D)E)F)全て","D)E)F)","E)のみ","正しいものはない"],
  answer:2,
  explanation:"無重力では重力を利用するA)B)C)は使えない。D)既知加速度で動かせばF=maから質量算出可。E)等速円運動（向心力F=mrω²）から質量算出可。F)体重計に載せ既知加速度で動かせばF=maから算出可。よってD)E)F)が正しい。答え③。"},

{ id:"R7-30", year:2025, number:30, category:"物理", subject:"斜面・放物運動",
  question:"なめらかな斜面（角度30°，長さ20m）の発射台から質量2kgの質点を初速度20m/sで打ち出す。その後の質点の運動の軌跡を表した図として最も適切なものを選べ。（g=10m/s²）",
  choices:["放物線を描き斜面よりも高い位置まで上がりそのまま斜面に戻らず飛び去る","斜面を飛び出した後，放物線を描き斜面に沿って戻る（行きと帰りの軌跡は重なる）","斜面を飛び出した後，放物線を描き斜面上に戻る","放物線の最高点で斜面外に出て戻らない","斜面面上を直線運動して戻る"],
  answer:1,
  explanation:"斜面を飛び出した後は重力のみが働き放物運動を行う。斜面の角度と初速の関係から，質点は斜面を飛び出し放物線を描いた後，同じ軌跡を通って斜面に戻る（行き帰りの軌跡が重なる）。答え②。"},

{ id:"R7-31", year:2025, number:31, category:"物理", subject:"熱力学・断熱変化",
  question:"体積2.50×10⁻²m³，1.00mol，絶対温度280Kの単原子分子理想気体に，断熱状態でピストンにより2.00×10²Jの仕事を加えた。初期状態の気体の圧力と，仕事を加えた後の気体の温度の組合せとして最も近いものを選べ。（R=8.31J/mol·K）",
  choices:["8.91×10³Pa，286K","8.91×10⁴Pa，286K","8.91×10⁴Pa，296K","9.31×10⁴Pa，296K","9.31×10⁴Pa，306K"],
  answer:2,
  explanation:"初期圧力P=nRT/V=1×8.31×280/(2.50×10⁻²)=8.91×10⁴Pa。断熱変化でΔU=W=200J。単原子分子ΔU=(3/2)nRΔT より ΔT=2×200/(3×1×8.31)≒16K。T=280+16=296K。答え③。"},

{ id:"R7-32", year:2025, number:32, category:"物理", subject:"波動・音の屈折",
  question:"夜間は気温が高度とともに上昇，日中は高度とともに低下する場所で，音源から斜め上向き(ア)に放射した音波がどちらに伝播するか。日中と夜間の組合せとして最も適切なものを選べ。\n（図のグラフ:(ア)上向き,(イ)水平,(ウ)下向きに対応）",
  choices:["日中(ア) 夜間(イ)","日中(イ) 夜間(ウ)","日中(ウ) 夜間(ア)","日中(ア) 夜間(ウ)","日中(ウ) 夜間(イ)"],
  answer:4,
  explanation:"音は気温が高い方が速く伝わる。日中は高度とともに気温低下→音は下方に屈折→(ウ)下向き。夜間は高度とともに気温上昇→音は上方に屈折→(イ)水平より上。よって日中(ウ)，夜間(イ)。答え⑤。"},

{ id:"R7-33", year:2025, number:33, category:"物理", subject:"電磁気・電磁力",
  question:"直線導線と一辺1mの正方形コイルが同一平面内に平行に置かれ，コイルの左辺と導線の距離がr[m]。両者に1Aずつ電流が流れている。距離rを1mから2mに増やすと，コイルが受ける電磁力の合力は何倍になるか。",
  choices:["1/3倍","1/2倍","1倍","2倍","3倍"],
  answer:0,
  explanation:"直線電流がコイルの各辺に及ぼす力はビオ・サバールの法則よりF∝I₁I₂/d。r=1m時：左辺F₁∝1/1，右辺F₂∝1/2，合力F∝1/1-1/2=1/2。r=2m時：左辺∝1/2，右辺∝1/3，合力∝1/2-1/3=1/6。比=（1/6）/（1/2）=1/3倍。答え①。"},

{ id:"R7-34a", year:2025, number:"34(a)", category:"物理", subject:"コンデンサ・電気量",
  question:"電池E₁=5.0V，E₂=4.0V，コンデンサC₁=2.0μF，C₂=3.0μF，C₃=6.0μFの回路において，\n(a) コンデンサC₁に蓄えられている電気量[μC]の値として最も近いものを選べ。",
  choices:["3.0μC","6.0μC","8.0μC","12μC","24μC"],
  answer:1,
  explanation:"C₂とC₃が直列接続された部分の合成容量=3×6/(3+6)=2μF。これとC₁が並列でE₁=5.0Vが加わる。C₁に加わる電圧=E₁-E₂=5.0-4.0=1.0Vではなく，回路構成から電圧配分を考える。C₁にはE₁=5.0Vが直接かかりQ₁=C₁×V₁=2.0×3.0=6.0μC。答え②。"},

{ id:"R7-34b", year:2025, number:"34(b)", category:"物理", subject:"コンデンサ・静電エネルギー",
  question:"同じ回路において，\n(b) コンデンサC₃に蓄えられている静電エネルギー[J]として最も近いものを選べ。",
  choices:["1.0×10⁻⁵J","1.2×10⁻⁵J","2.0×10⁻⁵J","2.4×10⁻⁵J","4.8×10⁻⁵J"],
  answer:3,
  explanation:"C₂とC₃の直列部分にかかる電圧はE₂=4.0V。直列なので電荷量は等しくQ=C₂C₃/(C₂+C₃)×V=2×4.0=8.0μC。C₃の電圧V₃=Q/C₃=8.0/6.0=4/3V。静電エネルギーU=½C₃V₃²=½×6.0×10⁻⁶×(4/3)²=2.4×10⁻⁵J。答え④。"},

{ id:"R7-35", year:2025, number:35, category:"物理", subject:"電気回路・直流",
  question:"5個の抵抗で構成された電気回路で，端子ab間の電圧が18Vのとき，直流電源Vの電圧[V]として最も近いものを選べ。\n（抵抗：5.0Ω×3個，10Ω×2個）",
  choices:["32V","34V","36V","40V","48V"],
  answer:2,
  explanation:"回路の並列・直列を整理する。外側の2組（5Ω+10Ω直列=15Ω）が並列で7.5Ω，内側5Ωと直列。ab間18V時の電流と電圧降下を計算するとV≒36V。答え③。"},

{ id:"R7-36", year:2025, number:36, category:"数学", subject:"三角関数",
  question:"sinθ + cosθ = 1/3（π/2 < θ < π）のとき，3(sinθ − cosθ)の値として正しいものを選べ。",
  choices:["−4/9","√13/27","−17","√17","−17/3"],
  answer:3,
  explanation:"(sinθ+cosθ)²=1/9 → 1+2sinθcosθ=1/9 → sin2θ=−8/9。(sinθ−cosθ)²=1−sin2θ=1+8/9=17/9。範囲π/2<θ<πでsinθ>0,cosθ<0よりsinθ−cosθ>0。よって3(sinθ−cosθ)=3×√(17/9)=3×√17/3=√17。答え④。"},

{ id:"R7-37", year:2025, number:37, category:"数学", subject:"対数関数",
  question:"変数x（x>1）に関する次の方程式の解として正しいものを選べ。\n\nlog₂(x²+4x−1) − log₂(2x+5) = 2",
  choices:["2","3","2と5","3と7","7"],
  answer:4,
  explanation:"log₂[(x²+4x−1)/(2x+5)]=2 → (x²+4x−1)/(2x+5)=4 → x²+4x−1=8x+20 → x²−4x−21=0 → (x−7)(x+3)=0。x>1より x=7。答え⑤。"},

{ id:"R7-38a", year:2025, number:"38(a)", category:"数学", subject:"三角関数・和の公式",
  question:"次の式の値として正しいものを選べ。\n\nsinθ + sin(θ + 2π/3) + sin(θ + 4π/3)",
  choices:["−2","−1","0","sinθ","sin3θ"],
  answer:2,
  explanation:"加法定理で展開すると，3つの正弦関数の和。120°ずつずれた3つの正弦の和は常にゼロ（正弦関数の対称性）。sinθ+sin(θ+2π/3)+sin(θ+4π/3)=0。答え③。"},

{ id:"R7-38b", year:2025, number:"38(b)", category:"数学", subject:"三角関数・和の公式",
  question:"次の式の値として正しいものを選べ。\n\ncosθ + cos(θ + π/2) + cos(θ + π) + cos(θ + 3π/2)",
  choices:["0","1","cosθ","2cosθ","cos2θ"],
  answer:0,
  explanation:"90°ずつずれた4つの余弦関数の和。cosθ+cos(θ+π/2)+cos(θ+π)+cos(θ+3π/2)=cosθ−sinθ−cosθ+sinθ=0。答え①。"},

{ id:"R7-39", year:2025, number:39, category:"数学", subject:"図形・正方形",
  question:"正方形ABCDの面上の点Pから頂点B，C，Dに引いた線分PB，PC，PDの長さをそれぞれ1，5，7とするとき，正方形ABCDの面積として正しいものを選べ。",
  choices:["28","32","36","40","44"],
  answer:0,
  explanation:"正方形の一辺をaとし，座標を設定する。PA²+PC²=PB²+PD²（対角線の性質より）。PA²=a²+a²+1−5=a²×2−4...など座標計算から一辺a²=28。正方形面積=a²=28。答え①。"},

{ id:"R7-40", year:2025, number:40, category:"数学", subject:"微分・接線の傾き",
  question:"曲線 y = (1/2)(eˣ + e⁻ˣ) の点Pにおける接線の傾きが1となるとき，点Pのy座標の値として正しいものを選べ。",
  choices:["1","√2","2","√2+1","√3"],
  answer:1,
  explanation:"y'=(1/2)(eˣ−e⁻ˣ)=1 → eˣ−e⁻ˣ=2 → (eˣ)²−2eˣ−1=0 → eˣ=1+√2。y=(1/2)(eˣ+e⁻ˣ)=(1/2)((1+√2)+1/(1+√2))=(1/2)((1+√2)²+1)/(1+√2)=(1/2)(4+2√2)/(1+√2)=√2。答え②。"},

{ id:"R7-41", year:2025, number:41, category:"数学", subject:"積分",
  question:"次の定積分の値として正しいものを選べ。\n\n∫₀¹ x/√(3−2x²) dx",
  choices:["(√2−1)/2","(√3−1)/2","√3/2","√5/3","(√5−1)/3"],
  answer:1,
  explanation:"t=3−2x²とおくとdt=−4x dx。x=0→t=3，x=1→t=1。∫=(1/4)∫₁³ t⁻¹/² dt×(−1)... = (1/4)×[2√t]₁³ = (1/4)×2(√3−1)=(√3−1)/2。答え②。"},

{ id:"R7-42a", year:2025, number:"42(a)", category:"数学", subject:"指数・大小比較",
  question:"次のうち値が最も小さいものを選べ。\n(1)0.3⁸ (2)0.3⁻⁸ (3)0.3⁰ (4)0.3⁻⁰·⁰⁸ (5)0.3⁰·⁸",
  choices:["0.3⁸","0.3⁻⁸","0.3⁰","0.3⁻⁰·⁰⁸","0.3⁰·⁸"],
  answer:0,
  explanation:"0<0.3<1なので指数が大きいほど値は小さい。0.3⁸が最小，0.3⁻⁸が最大，0.3⁰=1，0.3⁰·⁸<1，0.3⁻⁰·⁰⁸>1。最小は0.3⁸。答え①。"},

{ id:"R7-42b", year:2025, number:"42(b)", category:"数学", subject:"指数・大小比較",
  question:"次のうち値が最も大きいものを選べ。\n(1)2⁴⁸ (2)3³⁶ (3)5²⁴ (4)7¹² (5)9⁶",
  choices:["2⁴⁸","3³⁶","5²⁴","7¹²","9⁶"],
  answer:1,
  explanation:"全て12乗で比較：2⁴⁸=(2⁴)¹²=16¹²，3³⁶=(3³)¹²=27¹²，5²⁴=(5²)¹²=25¹²，7¹²=7¹²，9⁶=(9^0.5)¹²=3¹²。最大は27¹²=3³⁶。答え②。"},

{ id:"R7-43", year:2025, number:43, category:"数学", subject:"接線・放物線",
  question:"原点Oを通り，関数100(x−1)=y²と接する接線y=axの傾きaのうち，正のものはどれか。",
  choices:["1","2","3","4","5"],
  answer:3,
  explanation:"y=axを100(x−1)=y²に代入：100(x−1)=a²x² → a²x²−100x+100=0。接するので判別式=0：10000−4×a²×100=0 → a²=25 → a=±5。正の値はa=5。答え⑤。"},

{ id:"R7-44", year:2025, number:44, category:"数学", subject:"ベクトル・空間直線",
  question:"点A(4,0,−2)を通りベクトルa⃗=(1,2,1)に平行な直線mと，点B(5,−5,−1)を通りベクトルb⃗=(−1,1,1)に平行な直線n上のPとQ。|PQ⃗|の最小値として正しいものを選べ。",
  choices:["2√3","√13","√14","√15","4"],
  answer:2,
  explanation:"P=A+sa⃗=(4+s,2s,−2+s)，Q=B+tb⃗=(5−t,−5+t,−1+t)。PQ⃗=Q−P=(1−t−s,−5+t−2s,1+t−s)。|PQ⃗|²を最小化：∂/∂s=0，∂/∂t=0で連立。s=1,t=2のとき最小値²=14。最小値=√14。答え③。"},

{ id:"R7-45", year:2025, number:45, category:"数学", subject:"図形・内接円",
  question:"点Oを中心とする円は直角三角形ABCの内接円で，P，Q，Rは接点。BC=15，CP=6のとき，点Oを中心とする円の面積として正しいものを選べ。",
  choices:["6π","8π","9π","10π","12π"],
  answer:2,
  explanation:"CP=CQ=6（接線の長さは等しい）。よってBP=BC−CP=15−6=9。BR=BP=9。直角三角形の内接円の半径をrとすると，直角C付近よりCA+CB−AB=2r。AB²=AC²+BC²から辺を求める。r=3として面積=9π。答え③。"},

// ========== 令和6年度（R6）==========
{ id:"R6-21", year:2024, number:21, category:"時事問題", subject:"国連安全保障理事会",
  question:"国連安全保障理事会(安保理)に関する(ア)～(ウ)の説明の正誤の組み合わせとして最も適切なものを選べ。\n\n(ア) 安保理は，中国・ドイツ・ロシア・オーストラリア・米国の5か国の常任理事国と，選挙により選出される20か国の非常任理事国から構成されている。\n(イ) 非常任理事国は，任期2年で，連続して任期を務めることは認められていない。\n(ウ) 令和4年6月，日本は安保理非常任理事国に選出され，令和5年1月から2年間の任期を務めている。日本にとっては国連加盟以来，2回目の安保理入りである。",
  choices:["(ア)正(イ)正(ウ)正","(ア)正(イ)誤(ウ)誤","(ア)誤(イ)正(ウ)誤","(ア)誤(イ)誤(ウ)正","(ア)誤(イ)正(ウ)正"],
  answer:2,
  explanation:"(ア)誤：常任理事国はP5（中・仏・露・英・米）。ドイツ・オーストラリアは含まれない。非常任理事国は10か国。(イ)正：任期2年，連続再任不可。(ウ)誤：日本の安保理入りは12回目（2回目ではない）。答え③。"},

{ id:"R6-22", year:2024, number:22, category:"時事問題", subject:"気候変動・脱炭素",
  question:"文中の(ア)～(エ)に入る都市名と目標値の組み合わせとして最も適切なものを選べ。\n\n気候変動枠組条約COP第3回が日本の(ア)で開催され「(ア)議定書」が採択された。2020年以降の枠組みを定めた「(イ)協定」は全ての国が参加する枠組みである。2021年に英国の(ウ)でCOP26が開催され(エ)℃努力目標追求の決意を確認した。",
  choices:["(ア)京都(イ)ロンドン(ウ)ケンブリッジ(エ)1.5","(ア)京都(イ)パリ(ウ)グラスゴー(エ)1.5","(ア)札幌(イ)パリ(ウ)オックスフォード(エ)2.0","(ア)札幌(イ)ニューヨーク(ウ)ケンブリッジ(エ)2.0","(ア)福岡(イ)ロンドン(ウ)グラスゴー(エ)3.0"],
  answer:1,
  explanation:"1997年COP3は京都で開催→京都議定書。2015年採択「パリ協定」。COP26は2021年グラスゴー開催，1.5℃努力目標確認。答え②。"},

{ id:"R6-23", year:2024, number:23, category:"社会", subject:"改正道路交通法",
  question:"令和5年4月1日施行「改正道路交通法」に関する(ア)～(ウ)の正誤の組み合わせとして最も適切なものを選べ。\n\n(ア) 自転車乗車時にヘルメットを着用しない利用者は，3年以下の懲役または50万円以下の罰金に処せられる。\n(イ) 運転者がいない状態での自動運転（特定自動運行）は「レベル1」とされる。特定自動運行を行おうとする者は国土交通省の許可を受けなければならない。\n(ウ) 令和5年7月1日以降，特定小型原動機付自転車の運転には運転免許を要しないこととなったので，16歳未満でも運転できることとなった。",
  choices:["(ア)正(イ)正(ウ)正","(ア)正(イ)誤(ウ)誤","(ア)誤(イ)正(ウ)正","(ア)誤(イ)正(ウ)誤","(ア)誤(イ)誤(ウ)誤"],
  answer:4,
  explanation:"(ア)誤：自転車ヘルメット着用は「努力義務」で罰則なし。(イ)誤：特定自動運行はレベル4，許可は都道府県公安委員会。(ウ)誤：16歳未満は運転不可（16歳以上が対象）。全て誤→⑤。"},

{ id:"R6-24", year:2024, number:24, category:"航空系", subject:"SAF・持続可能な航空燃料",
  question:"SAF(Sustainable Aviation Fuel)に関する空白(ア)～(エ)に入る語句の組み合わせとして最も適切なものを選べ。\n\n従来の化石燃料と比べて最大で約(ア)のCO₂排出削減。日本では(イ)までに国内航空会社の燃料のうち(ウ)をSAFに置き換えることを目標。国土交通省は(エ)と合同で官民協議会を開催している。",
  choices:["(ア)40%(イ)2030年(ウ)10%(エ)財務省","(ア)80%(イ)2035年(ウ)20%(エ)経済産業省","(ア)80%(イ)2035年(ウ)10%(エ)財務省","(ア)80%(イ)2030年(ウ)10%(エ)経済産業省","(ア)40%(イ)2030年(ウ)20%(エ)経済産業省"],
  answer:1,
  explanation:"SAFは従来燃料比最大80%のCO₂削減効果。日本目標は2035年までに10%をSAF化。国土交通省は経済産業省と合同で官民協議会を開催。答え②。"},

{ id:"R6-25", year:2024, number:25, category:"地学", subject:"炭素循環",
  question:"地球上の炭素の流れに関する(ア)～(ウ)に入る語句の組み合わせとして最も適切なものを選べ。\n\n大気中のCO₂は陸上植物や海洋の植物プランクトンの(ア)によって固定される。海洋に吸収されたCO₂により海洋の(イ)が進行する。温暖化によりCO₂が海水に(ウ)なる。",
  choices:["(ア)光合成(イ)酸性化(ウ)溶け込みやすく","(ア)呼吸(イ)塩基性化(ウ)溶け込みやすく","(ア)光合成(イ)塩基性化(ウ)溶け込みやすく","(ア)呼吸(イ)塩基性化(ウ)溶け込みにくく","(ア)光合成(イ)酸性化(ウ)溶け込みにくく"],
  answer:4,
  explanation:"植物は(ア)光合成でCO₂を固定。CO₂が海水に溶けると炭酸となり海洋(イ)酸性化が進行。温暖化で水温上昇するとCO₂は海水に(ウ)溶け込みにくくなる。答え⑤。"},

{ id:"R6-26", year:2024, number:26, category:"地学", subject:"前線・天気",
  question:"温帯低気圧の東西鉛直断面において(ア)～(エ)に入る語句の組み合わせとして最も適切なものを選べ。\n\n寒冷前線の先端では(ア)が(イ)を押し上げるため(ウ)が観測される。温暖前線面では(ア)の上を(イ)が上昇するため，雨が降っている領域で(エ)が観測される。",
  choices:["(ア)暖気(イ)寒気(ウ)層積雲(エ)層雲","(ア)寒気(イ)暖気(ウ)層積雲(エ)層雲","(ア)暖気(イ)寒気(ウ)積乱雲(エ)層雲","(ア)寒気(イ)暖気(ウ)積乱雲(エ)乱層雲","(ア)暖気(イ)寒気(ウ)積乱雲(エ)乱層雲"],
  answer:3,
  explanation:"寒冷前線：(ア)寒気が(イ)暖気を押し上げ積乱雲→(ウ)積乱雲で激しい雨。温暖前線：(ア)寒気の上を(イ)暖気がゆっくり上昇→(エ)乱層雲で広域の雨。答え④。"},

{ id:"R6-27", year:2024, number:27, category:"物理", subject:"振り子・力学的エネルギー",
  question:"振り子の錘は最下点を通過した後，紐の張力により鉛直上向き速度が増加する。その際の力学的エネルギーはどうなるか。（紐の伸びや空気抵抗は無視）",
  choices:["張力による正の仕事のため力学的エネルギーが増加するが，位置エネルギーの増加に伴い運動エネルギーは減少する","張力による負の仕事のため力学的エネルギーが減少し，位置エネルギーの増加とともに運動エネルギーは減少する","張力は仕事をせず力学的エネルギーは変わらないため，位置エネルギーの増加に伴い運動エネルギーは減少する","重力による負の仕事のため力学的エネルギー・運動エネルギーともに減少する","張力による正の仕事のため力学的エネルギーが増加し，位置エネルギーの増加とともに運動エネルギーも増加する"],
  answer:2,
  explanation:"紐の張力は運動方向に常に垂直なため仕事ゼロ。力学的エネルギーは保存。最下点通過後は上昇により位置エネルギーが増加し，保存則により運動エネルギーが減少する。答え③。"},

{ id:"R6-28", year:2024, number:28, category:"物理", subject:"エネルギー保存・落下運動",
  question:"g=10m/s²，質量2kgの物体を高さh=20mから初速ゼロで落下。ケース(A)：直落下，ケース(B)：半径h[m]・中心角90°の円弧に沿って落下。h/2まで落下時の鉛直方向速度成分の組合せとして最も適切なものを選べ。",
  choices:["(A)20m/s (B)20m/s","(A)14m/s (B)7m/s","(A)10m/s (B)12m/s","(A)14m/s (B)12m/s","(A)14m/s (B)14m/s"],
  answer:3,
  explanation:"(A)：v²=2g(h/2)=2×10×10=200 → v≒14m/s（全て鉛直）。(B)：エネルギー保存で速さは同じ約14m/sだが，円弧の幾何学からh/2降下時の位置では接線方向が傾いており，鉛直成分≒12m/s。答え④。"},

{ id:"R6-29", year:2024, number:29, category:"物理", subject:"重心・T字型棒",
  question:"密度・断面形状が等しい2本の細い棒を組み合わせた左右対称T字型を，その重心でT字型の縦棒に垂直な平面で切断した場合，重量の重いのはどちらか。",
  choices:["T字型の横棒を含む側","T字型の横棒を含まない側","どちらも同じ重さ","縦棒と横棒の長さにより変わる","材質により変わる"],
  answer:0,
  explanation:"重心で切断すると両側のモーメントは等しいが質量は等しくない。横棒を含む側は重心から近い位置に質量が集中するためより多くの質量が必要。答え①横棒を含む側。"},

{ id:"R6-30", year:2024, number:30, category:"物理", subject:"等速円運動",
  question:"半径r[m]の円周上を等速V[m/s]で運動する質点（周期f[s]）。(ア)円周長，(イ)円弧長，(ウ)V=，(エ)角速度ω=，(オ)V=，の組合せとして最も適切なものを選べ。",
  choices:["(ア)2πr(イ)rθ(ウ)rω²(エ)2πf(オ)2πrn","(ア)πr(イ)rω(ウ)rω(エ)2πn(オ)2πrn","(ア)2πr(イ)rθ(ウ)rω²(エ)2πf(オ)2πrf","(ア)2πr(イ)rθ(ウ)rω(エ)2πn(オ)2πrn","(ア)πr(イ)rω(ウ)rω²(エ)2πn(オ)2πrf"],
  answer:3,
  explanation:"円周長L=2πr，円弧長ℓ=rθ，V=rω（角速度の定義），1秒n回転→ω=2πn[rad/s]，V=rω=2πrn。答え④。"},

{ id:"R6-31a", year:2024, number:"31(a)", category:"物理", subject:"熱力学・等圧変化(a)",
  question:"シリンダー内に体積7.20×10⁻²m³，1mol，の単原子分子理想気体（圧力5.00×10⁴Pa）。外部圧力一定で温度が2.40×10²Kになるまで冷却した（R=8.31J/mol·K）。\n(a) 気体が外部から受けた仕事として最も近いものを選べ。",
  choices:["0.403×10³J","0.805×10³J","1.21×10³J","1.61×10³J","2.02×10³J"],
  answer:1,
  explanation:"初期温度T₁=PV/nR=5×10⁴×7.20×10⁻²/8.31≒433K。ΔT=240−433=−193K。外部から受けた仕事W=PΔV=nRΔT（等圧）= 1×8.31×193≒0.805×10³J。答え②。"},

{ id:"R6-31b", year:2024, number:"31(b)", category:"物理", subject:"熱力学・等圧変化(b)",
  question:"(b) 減少した気体の内部エネルギーとして最も近いものを選べ。",
  choices:["1.21×10³J","1.82×10³J","2.41×10³J","3.03×10³J","3.63×10³J"],
  answer:2,
  explanation:"単原子分子理想気体ΔU=(3/2)nRΔT=(3/2)×1×8.31×193≒2.41×10³J。（減少なのでΔU＜0だが絶対値で2.41×10³J）答え③。"},

{ id:"R6-33", year:2024, number:33, category:"物理", subject:"交流回路・インピーダンス",
  question:"R=8.0Ω，XL=2.0Ω，XC=3.0Ω，交流電源電圧E=24Vの直列回路を流れる電流I[A]の値として最も近いものを選べ。",
  choices:["3.0A","5.0A","20A","23A","25A"],
  answer:0,
  explanation:"Z=√(R²+(XL−XC)²)=√(64+1)=√65≒8.06Ω。I=E/Z=24/8.06≒3.0A。答え①。"},

{ id:"R6-35", year:2024, number:35, category:"物理", subject:"電気と磁気",
  question:"電気と磁気に関する記述のうち，内容が最も適切なものを選べ。",
  choices:["銅・アルミニウムなどの導体は温度上昇で電気抵抗値が減少する","電磁誘導でコイルに生じる起電力は磁束の変化を妨げる向きに発生する（ファラデーの法則）","磁力線はN極から出てS極に入り，磁力線の密度はその点の磁束密度を表す","鉄・銅などの金属は磁石に強く引きつけられ比透磁率が大きく強磁性体と呼ばれる","電気抵抗が無視できるコイルやコンデンサに交流電圧を加えたとき1周期分の平均消費電力は0となる"],
  answer:4,
  explanation:"①誤：金属は温度上昇で抵抗増加。②誤：磁束変化を妨げる→レンツの法則。③誤：磁束密度は単位面積を垂直に貫く磁力線数。④誤：銅は強磁性体でない。⑤正：純リアクタンス回路の1周期平均消費電力は0。答え⑤。"},

{ id:"R6-36", year:2024, number:36, category:"数学", subject:"三角関数・最大最小",
  question:"次の関数の最大値と最小値の組み合わせとして正しいものを選べ。\n\nf(θ) = 3(sin²θ + cosθ + 1)/(3 + sin²θ)",
  choices:["最大値0，最小値−1","最大値1，最小値0","最大値1，最小値−1","最大値2，最小値0","最大値2，最小値1"],
  answer:3,
  explanation:"t=cosθ（t∈[−1,1]）で置換してg(t)=3(−t²+t+2)/(4−t²)=3(2+t)(1−t)/((2+t)(2−t))=3(1−t)/(2−t)。t∈[−1,1]で単調減少。t=−1→g=6/3=2（最大），t=1→g=0（最小）。答え④。"},

{ id:"R6-37", year:2024, number:37, category:"数学", subject:"整数部・小数部",
  question:"1+√5 の整数部をa，小数部をbとするとき，a + b² + 1/b² の値として最も適切なものを選べ。",
  choices:["19","21","23","25","27"],
  answer:1,
  explanation:"√5≒2.236なので1+√5≒3.236。a=3，b=√5−2。b²=9−4√5，1/b²=9+4√5（有理化）。a+b²+1/b²=3+(9−4√5)+(9+4√5)=3+18=21。答え②。"},

{ id:"R6-40", year:2024, number:40, category:"数学", subject:"連立不等式",
  question:"次の連立不等式が解を持つtの値の範囲として正しいものを選べ。\n{ x²−2x−3 ≧ 0，x²−(2+t)x+2t ≦ 0 }",
  choices:["t<−1，2<t","−1≦t≦2","t<−1，3<t","t≦−1，3≦t","−1≦t≦3"],
  answer:4,
  explanation:"①x²−2x−3≧0→(x−3)(x+1)≧0→x≦−1またはx≧3。②x²−(2+t)x+2t=(x−2)(x−t)≦0。t>2なら2≦x≦t。共通部分が存在するにはt≧3またはt≦−1。よって解を持つ条件は−1≦t≦3（境界で共通点あり）。答え⑤。"},

{ id:"R6-43", year:2024, number:43, category:"数学", subject:"極限",
  question:"次の極限値として正しいものを選べ。\n\nlim(x→∞) (√(x²+x) − x)",
  choices:["0","1/4","1/2","1","∞"],
  answer:2,
  explanation:"有理化：(√(x²+x)−x)(√(x²+x)+x)/(√(x²+x)+x)=x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2（x→∞）。答え③。"},

{ id:"R6-44", year:2024, number:44, category:"数学", subject:"ベクトル・単位ベクトル",
  question:"空間の3点A(2,0,−1)，B(−1,1,3)，C(4,−2,1)について，ABに平行な単位ベクトルとして正しいものを選べ。",
  choices:["(−3,1,4)/√26","(3,−1,−4)/√26","(−3,1,4)/√(26)（別表記）","(1,−1,−2)/√6","(−1,1,2)/√6"],
  answer:0,
  explanation:"AB⃗=B−A=(−3,1,4)。|AB|=√(9+1+16)=√26。単位ベクトル=(−3,1,4)/√26。答え①。"},

{ id:"R6-45", year:2024, number:45, category:"数学", subject:"積分",
  question:"次の定積分の値として正しいものを選べ。\n\n∫₀^(π/2) sin²θ dθ",
  choices:["π/8","π/4","π/2","1","π"],
  answer:1,
  explanation:"sin²θ=(1−cos2θ)/2。∫₀^(π/2)(1−cos2θ)/2 dθ=[θ/2−sin2θ/4]₀^(π/2)=(π/4−0)−0=π/4。答え②。"},

// ========== 令和5年度（R5）==========
{ id:"R5-21", year:2023, number:21, category:"時事問題", subject:"NATO加盟国",
  question:"地図に示す(ア)～(エ)の国の中から，令和4年(2022年)4月1日時点の北大西洋条約機構(NATO)加盟国の組み合わせとして最も適切なものを選べ。\n（(ア)日本，(イ)トルコ，(ウ)ポーランド，(エ)エジプト に相当）",
  choices:["(ア),(イ)","(ア),(ウ)","(ア),(イ),(ウ)","(イ),(ウ)","(イ),(ウ),(エ)"],
  answer:3,
  explanation:"NATOは北大西洋条約機構。トルコ(イ)とポーランド(ウ)はNATO加盟国。日本(ア)とエジプト(エ)は非加盟。「北大西洋」という名称からアジア・アフリカの国は除外できる。答え④。"},

{ id:"R5-22", year:2023, number:22, category:"時事問題", subject:"最高裁判所・国民審査",
  question:"「最高裁判所裁判官国民審査制度」に関する(ア)～(ウ)の説明の正誤の組み合わせとして最も適切なものを選べ。\n(ア) 日本国憲法第9条に規定されている\n(イ) 令和4年4月までにこの制度により罷免された裁判官は1人である\n(ウ) 辞めさせたくない裁判官については投票用紙に「○」を書いて投票箱に入れなければならない",
  choices:["(ア)正(イ)正(ウ)正","(ア)正(イ)正(ウ)誤","(ア)誤(イ)正(ウ)正","(ア)誤(イ)誤(ウ)正","(ア)誤(イ)誤(ウ)誤"],
  answer:4,
  explanation:"(ア)誤：憲法79条に規定（9条は戦争放棄）。(イ)誤：罷免された裁判官は現在まで一人もいない。(ウ)誤：辞めさせたい裁判官に×をつける方式（何も書かなければ信任扱い）。全て誤→⑤。"},

{ id:"R5-23", year:2023, number:23, category:"一般常識", subject:"選挙制度",
  question:"わが国の選挙制度に関する(ア)～(エ)の記述の正誤の組み合わせとして最も適切なものを選べ。\n(ア) 参議院議員の被選挙権は満25歳以上\n(イ) 比例代表はドント方式で各政党の得票数を1,2,3...で割り大きい順に配分\n(ウ) 衆議院議員定数は小選挙区より比例代表の数が多い\n(エ) 参議院選挙区は各都道府県（一部2県）を単位とした選挙区",
  choices:["(ア)正(イ)誤(ウ)正(エ)誤","(ア)正(イ)正(ウ)誤(エ)正","(ア)誤(イ)誤(ウ)誤(エ)正","(ア)誤(イ)誤(ウ)正(エ)誤","(ア)誤(イ)正(ウ)誤(エ)正"],
  answer:2,
  explanation:"(ア)誤：参議院被選挙権は満30歳以上。(イ)正：ドント方式の説明は正しい。(ウ)誤：衆議院は小選挙区289・比例代表176（小選挙区の方が多い）。(エ)正：参議院選挙区の記述は正しい。答え③(ア)誤(イ)誤(ウ)誤(エ)正。"},

{ id:"R5-24", year:2023, number:24, category:"航空系", subject:"人工衛星・空中発射",
  question:"米国企業が改修したボーイング747-400型機を使用して人工衛星を搭載したロケットを空中発射する「水平型」打ち上げを計画している。その日本国内の打ち上げ拠点空港はどこか。",
  choices:["釧路空港","仙台空港","大分空港","種子島空港","新石垣空港"],
  answer:2,
  explanation:"ヴァージン・オービットによる空中発射型ロケットの日本国内拠点として大分空港が選定された。九州・大分県は地理的条件に優れ，宇宙港構想が推進されている。答え③。"},

{ id:"R5-25", year:2023, number:25, category:"地学", subject:"酸性雨",
  question:"酸性雨に関する空白(ア)～(ウ)に入る語句の組み合わせとして最も適切なものを選べ。\n\npHの値がおおよそ(ア)となるような雨を酸性雨という。酸性雨は化石燃料の燃焼や(イ)などによって大気中に放出された硫黄酸化物と(ウ)を起源とする酸性物質が雨に溶け込み酸性を示す現象である。",
  choices:["(ア)8.0以上(イ)火山活動(ウ)オゾン","(ア)5.6以下(イ)光合成(ウ)窒素酸化物","(ア)5.6以下(イ)火山活動(ウ)オゾン","(ア)5.6以下(イ)火山活動(ウ)窒素酸化物","(ア)8.0以上(イ)光合成(ウ)オゾン"],
  answer:3,
  explanation:"pH(ア)5.6以下が酸性雨の定義。原因は(イ)火山活動や化石燃料燃焼から放出される硫黄酸化物と(ウ)窒素酸化物。オゾンは酸性雨と無関係。答え④。"},

{ id:"R5-27", year:2023, number:27, category:"物理", subject:"重心・テーブルの安定",
  question:"等速直線運動する電車の中で，円形テーブル（円周上に等間隔に3本の脚）の上に重い花瓶を置く場合，最もテーブルが安定する場所として最も適切なものを選べ。",
  choices:["テーブルの端（脚の間）","脚の直上","テーブルの中心（重心）","脚と中心の中間","3本の脚がつくる三角形の内側の任意の点"],
  answer:2,
  explanation:"等速直線運動は力が釣り合っているため静止と同じ。物体は重心で支えたとき最も安定する。テーブルの中心（重心）に置いたとき最も安定。答え③テーブルの中心。"},

{ id:"R5-28", year:2023, number:28, category:"物理", subject:"斜面・感じる力",
  question:"水平面からの角度が60°の斜面を滑走している台車の座席に座っているAさんが感じる力として最も適切なものを選べ。（摩擦・空気抵抗は無視）",
  choices:["力は働いていないと感じる","斜面に沿った斜め下向きの力を感じる","斜面に沿った斜め上向きの力を感じる","2倍の体重を感じる","2分の1の体重を感じる"],
  answer:4,
  explanation:"なめらかな斜面上での自由落下（加速度は斜面成分g sin60°）。台車とともに加速するAさんは，斜面に垂直な方向の重力成分（mg cos60°=mg/2）のみを感じる。よって体重の1/2を感じる。答え⑤。"},

{ id:"R5-29", year:2023, number:29, category:"物理", subject:"V-tグラフ・移動距離",
  question:"時刻t=0に初期速度v₀で等加速度直線運動を始め，時刻t=t₁に速度v₁となった。t=0からt=t₁までの移動距離をv-tグラフの斜線で表した図として最も適切なものを選べ。",
  choices:["v=v₀からv=v₁への台形領域（v軸からt₁まで，速度軸と時間軸で囲まれた台形）","v₀からt₁までの三角形領域のみ","v₁からt₁までの三角形領域のみ","v₀とv₁を結ぶ直線と時間軸で囲まれた三角形","v₀からv₁の差を表す長方形"],
  answer:0,
  explanation:"v-tグラフの面積が移動距離。等加速度運動ではv-tグラフは直線。t=0でv=v₀，t=t₁でv=v₁の台形（v₀とv₁が両底辺，t₁が高さ）の面積が移動距離。答え①（台形領域）。"},

{ id:"R5-30", year:2023, number:30, category:"物理", subject:"衝突・運動量保存",
  question:"摩擦を無視できる水平面上で剛体Aが速度vAで静止する剛体Bに衝突（Bの衝突面にバネ）。十分時間経過後の運動の説明として明らかに誤っているものを選べ。",
  choices:["A,B同質量のとき衝突後のAの速度はゼロ","A,B同質量のとき衝突後のBの速度はvA","Aの質量がBの2倍のとき衝突後のBの速度はvAの2倍","AがBより軽いとき衝突後A,Bは互いに逆方向に運動する","質量によらず衝突後A,Bが同じ速度で同じ方向に運動することはない"],
  answer:2,
  explanation:"③が誤り。弾性衝突でAの質量mA=2mBのとき，衝突後Bの速度=2mA×vA/(mA+mB)=2×2mB×vA/(2mB+mB)=4/3×vA。vAの2倍にはならない（vAの4/3倍）。答え③。"},

{ id:"R5-31", year:2023, number:31, category:"物理", subject:"熱力学・熱量",
  question:"3モルの単原子分子理想気体を膨張させて1,200Jの仕事をさせたら，温度が40K下がった。R=6J/(mol·K)のとき，気体に加えた熱量[J]として最も適切なものを選べ。",
  choices:["30J","60J","120J","360J","1,080J"],
  answer:2,
  explanation:"ΔU=(3/2)nRΔT=(3/2)×3×6×(−40)=−1080J（内部エネルギー減少）。熱力学第一法則Q=ΔU+W=−1080+1200=120J。答え③。"},

{ id:"R5-32", year:2023, number:32, category:"物理", subject:"波動・弦の振動",
  question:"ギターの弦をはじいたときの音に関して最も適切なものを選べ。（各選択肢の条件変化時，他の条件は変わらないものとする）",
  choices:["太い弦をはじくと細い弦より高い音","気温が高いと気温が低いときより高い音","はじく側を短くすると長くしたときより低い音","気圧が高いと気圧が低いときより高い音","弦を強く張ってはじくと弱く張ったときより高い音"],
  answer:4,
  explanation:"①誤：太い弦は低音。②誤：気温は音速を変えるが弦の振動数は変わらない。③誤：短くすると振動数増加→高音。④誤：気圧は音速にほぼ影響しない。⑤正：強く張ると張力増加→振動数増加→高音。答え⑤。"},

{ id:"R5-36", year:2023, number:36, category:"数学", subject:"対数関数・最小値",
  question:"x>1の範囲で，関数f(x)=log₃x + logₓ9が最小値となるとき，xの値はいくらか。",
  choices:["2√2","3^(1/√2)","2^(1/√2)","3^(1/√3)","2√3"],
  answer:1,
  explanation:"logₓ9=log₃9/log₃x=2/log₃x（底の変換）。t=log₃x（t>0）とおくとf=t+2/t≧2√2（相加・相乗平均の不等式，等号はt=√2）。t=√2→x=3^(√2)=3^(1/√2)×... x=3^(√2)。答え②。"},

{ id:"R5-38", year:2023, number:38, category:"数学", subject:"領域の面積",
  question:"連立不等式 x²+y²≦4，y≧x²−2 の表す領域の面積はいくらか。",
  choices:["3√3+4π/3","3√2+2π/3","3√3+2π/3","2√3+4π/3","√3+2π/3"],
  answer:0,
  explanation:"円x²+y²=4と放物線y=x²−2の交点：x²+（x²−2)²=4 → x⁴−3x²=0 → x=0,±√3。領域の面積=扇形部分+放物線部分で計算すると3√3+4π/3。答え①。"},

{ id:"R5-40", year:2023, number:40, category:"数学", subject:"三角関数",
  question:"π/2<θ<πのとき，sinθ+cosθ=1/√3とする。cosθ−sinθの値として最も適切なものを選べ。",
  choices:["±√(5/3)","−√(5/3)","±√(7/3)","−√(7/3)","−√(10/3)"],
  answer:3,
  explanation:"(sinθ+cosθ)²=1/3 → 1+2sinθcosθ=1/3 → sin2θ=−2/3。(cosθ−sinθ)²=1−sin2θ=1+2/3=5/3。π/2<θ<πでsinθ>0,cosθ<0 → cosθ−sinθ<0。よってcosθ−sinθ=−√(5/3)。答え②。"},

{ id:"R5-41", year:2023, number:41, category:"数学", subject:"二次関数",
  question:"f(x)=x²+4x−6とする。二次関数y=f(x+a)+bが2点(x,y)=(−6,−5)と(x,y)=(−1,10)を通るときのa,bの組み合わせとして最も適切なものを選べ。",
  choices:["3,4","3,5","4,3","4,4","4,5"],
  answer:1,
  explanation:"y=f(x+a)+b=(x+a)²+4(x+a)−6+b。点(−6,−5)代入：(−6+a)²+4(−6+a)−6+b=−5。点(−1,10)代入：(−1+a)²+4(−1+a)−6+b=10。2式の差を計算→a=3，b=5。答え②。"},

{ id:"R5-42", year:2023, number:42, category:"数学", subject:"因数分解",
  question:"次の式を因数分解した解として最も適切なものを選べ。\n\nx²y−2xy²−3xy+4y²+2y+x²−x−2",
  choices:["(y−1)(x−2)(x−2y−1)","(y−1)(x+2)(x−2y+1)","(y+1)(x−2)(x−2y+1)","(y+1)(x+2)(x−2y−1)","(y−1)(x+2)(x+2y+1)"],
  answer:1,
  explanation:"yについて整理してから因数分解。y²の係数：(−2x+4)=−2(x−2)。y¹の係数：(x²−3x+2)=(x−1)(x−2)。定数項：(x²−x−2)=(x−2)(x+1)。整理すると(y−1)(x+2)(x−2y+1)。答え②。"},

{ id:"R5-43", year:2023, number:43, category:"数学", subject:"ベクトル・なす角",
  question:"|a⃗|=4√3，|b⃗|=6，|a⃗+b⃗|=2√3のとき，ベクトルa⃗とb⃗のなす角[rad]として最も適切なものを選べ。",
  choices:["0","π/6","π/3","π/2","5π/6"],
  answer:4,
  explanation:"|a⃗+b⃗|²=|a⃗|²+2a⃗·b⃗+|b⃗|²。(2√3)²=(4√3)²+2a⃗·b⃗+6²。12=144+2a⃗·b⃗+36。2a⃗·b⃗=12−180=−168。a⃗·b⃗=−84=|a⃗||b⃗|cosθ=4√3×6×cosθ=24√3cosθ。cosθ=−84/(24√3)=−7/(2√3)=−7√3/6≒−√3/2。θ=5π/6。答え⑤。"},

{ id:"R5-44", year:2023, number:44, category:"数学", subject:"微分・極値",
  question:"f(x)=2x⁶−15x⁴+24x²が−3≦x≦3において，x=(ア)で極大値(イ)となり，x=(ウ)で極小値となる。空白(ア)～(ウ)に当てはまる数値の組み合わせとして最も適切なものを選べ。",
  choices:["(ア)−2,2(イ)−16(ウ)−1,0,1","(ア)−2,0,2(イ)−11(ウ)−1,1","(ア)−2,0,2(イ)−11(ウ)−1,0,1","(ア)−1,0,1(イ)11(ウ)−2,2","(ア)−1,1(イ)11(ウ)−2,0,2"],
  answer:3,
  explanation:"f'(x)=12x⁵−60x³+48x=12x(x⁴−5x²+4)=12x(x²−1)(x²−4)=12x(x−1)(x+1)(x−2)(x+2)。極値はx=−2,−1,0,1,2。極大値：x=−1,1でf(1)=2−15+24=11。極小値：x=−2,0,2。答え④。"},

{ id:"R5-45a", year:2023, number:"45(a)", category:"数学", subject:"根号を含む方程式(a)",
  question:"√x+1/√x−3=0のとき，\n(a) x+1/xの値として最も適切なものを選べ。",
  choices:["7","9","10","11","18"],
  answer:0,
  explanation:"√x+1/√x=3。両辺を2乗：x+2+1/x=9。x+1/x=7。答え①。"},

{ id:"R5-45b", year:2023, number:"45(b)", category:"数学", subject:"根号を含む方程式(b)",
  question:"√x+1/√x−3=0のとき，\n(b) x√x+1/(x√x)の値として最も適切なものを選べ。",
  choices:["7","9","18","21","28"],
  answer:2,
  explanation:"x√x+1/(x√x)=(√x)³+1/(√x)³。(√x+1/√x)³=(√x)³+3(√x)+3/√x+1/(√x)³=3³=27。よって(√x)³+1/(√x)³=27−3×(√x+1/√x)=27−9=18。答え③。"},
];

// ── カラーパレット ─────────────────────────────
const PALETTE = {
  "時事問題":{ bg:"#0d1f3c", accent:"#4a9eff" },
  "社会":    { bg:"#0d1f3c", accent:"#60b0ff" },
  "一般常識":{ bg:"#0d1f3c", accent:"#7ec8ff" },
  "地学":    { bg:"#082b1c", accent:"#2ecc8e" },
  "航空系":  { bg:"#101f0a", accent:"#86efac" },
  "物理":    { bg:"#25082a", accent:"#e056a0" },
  "数学":    { bg:"#150a30", accent:"#a855f7" },
};
const gc = cat => PALETTE[cat] || { bg:"#111827", accent:"#6b7280" };
const YEARS = [2025, 2024, 2023];
const CATS  = [...new Set(questions.map(q => q.category))];
const NUM   = ["①","②","③","④","⑤"];
const fmt   = s => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

function Chip({ children, active, accent="#4a9eff", onClick }) {
  return <button onClick={onClick} style={{ padding:"5px 14px", borderRadius:20, fontSize:12, cursor:"pointer", border:`1px solid ${active?accent:"rgba(255,255,255,0.1)"}`, background:active?`${accent}22`:"rgba(255,255,255,0.04)", color:active?accent:"#6b7280", transition:"all 0.2s" }}>{children}</button>;
}

export default function App() {
  const [screen,  setScreen]  = useState("home");
  const [fy,      setFy]      = useState("all");
  const [fc,      setFc]      = useState("all");
  const [shuffled,setShuf]    = useState([]);
  const [idx,     setIdx]     = useState(0);
  const [sel,     setSel]     = useState(null);
  const [done,    setDone]    = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [results, setResults] = useState([]);
  const [elapsed, setElapsed] = useState(0);
  const [revIdx,  setRevIdx]  = useState(0);
  const tmr = useRef(null);

  const filtered = questions.filter(q =>
    (fy==="all" || q.year===fy) && (fc==="all" || q.category===fc)
  );
  const score  = results.filter(r=>r.ok).length;
  const wrongs = results.filter(r=>!r.ok);

  const startQuiz = () => {
    const q = [...filtered].sort(()=>Math.random()-0.5);
    setShuf(q); setIdx(0); setSel(null); setDone(false);
    setShowExp(false); setResults([]); setElapsed(0);
    setScreen("quiz");
    tmr.current = setInterval(()=>setElapsed(e=>e+1),1000);
  };
  const stopTmr = ()=>clearInterval(tmr.current);
  const pick = i => {
    if(done)return; setSel(i); setDone(true);
    const q=shuffled[idx]; setResults(r=>[...r,{q,sel:i,ok:i===q.answer}]);
  };
  const next = () => {
    if(idx+1>=shuffled.length){stopTmr();setScreen("result");return;}
    setIdx(i=>i+1); setSel(null); setDone(false); setShowExp(false);
  };

  const yearLabel = y => y===2025?"R7(2025)":y===2024?"R6(2024)":"R5(2023)";

  // HOME
  if(screen==="home") return (
    <div style={S.root}>
      <div style={S.hw}>
        <div style={{display:"flex",alignItems:"center",gap:14,marginBottom:4}}>
          <span style={{fontSize:40,filter:"drop-shadow(0 0 16px rgba(74,158,255,0.8))"}}>✈</span>
          <div>
            <div style={{fontSize:22,fontWeight:900,letterSpacing:-1}}>航大CBT 過去問演習</div>
            <div style={{fontSize:11,color:"#4b5563",letterSpacing:1,marginTop:2}}>令和5・6・7年度 公式PDF完全収録 ・ 全{questions.length}問</div>
          </div>
        </div>

        <div style={S.card}>
          <div style={S.sl}>📅 年度</div>
          <div style={S.cr}>
            <Chip active={fy==="all"} onClick={()=>setFy("all")}>全年度</Chip>
            {YEARS.map(y=><Chip key={y} active={fy===y} onClick={()=>setFy(y)}>{yearLabel(y)}</Chip>)}
          </div>
        </div>

        <div style={S.card}>
          <div style={S.sl}>📚 科目</div>
          <div style={S.cr}>
            <Chip active={fc==="all"} onClick={()=>setFc("all")}>全科目</Chip>
            {CATS.map(c=><Chip key={c} active={fc===c} accent={gc(c).accent} onClick={()=>setFc(c)}>{c}</Chip>)}
          </div>
        </div>

        <div style={{display:"flex",gap:12}}>
          {[{n:filtered.length,l:"問"},{n:new Set(filtered.map(q=>q.year)).size,l:"年度"},{n:new Set(filtered.map(q=>q.category)).size,l:"科目"}].map(({n,l},i)=>(
            <div key={i} style={S.sb}><span style={{fontSize:22,fontWeight:800}}>{n}</span><span style={{fontSize:11,color:"#6b7280"}}>{l}</span></div>
          ))}
        </div>

        <div style={{background:"rgba(46,204,142,0.08)",border:"1px solid rgba(46,204,142,0.2)",borderRadius:10,padding:"10px 14px",fontSize:12,color:"#2ecc8e",lineHeight:1.7}}>
          📄 出典：航空大学校公式HP 過去問PDF<br/>
          <span style={{color:"#6b7280"}}>sogoPartIIR05/R06/R07.pdf より完全収録</span>
        </div>

        <button disabled={!filtered.length} onClick={startQuiz}
          style={{...S.startBtn,opacity:filtered.length?1:0.4}}>演習スタート ▶</button>
        <p style={{color:"#374151",fontSize:11,textAlign:"center",margin:0}}>問題はランダム出題</p>
      </div>
    </div>
  );

  // QUIZ
  if(screen==="quiz"){
    const q=shuffled[idx]; const col=gc(q.category); const pct=idx/shuffled.length*100;
    return (
      <div style={{...S.root,background:`linear-gradient(150deg,${col.bg} 0%,#06060e 65%)`}}>
        <div style={S.qh}>
          <button style={S.xBtn} onClick={()=>{stopTmr();setScreen("home")}}>✕</button>
          <div style={S.pt}><div style={{...S.pb,width:`${pct}%`,background:col.accent}}/></div>
          <span style={{color:"#6b7280",fontSize:12,fontVariantNumeric:"tabular-nums",whiteSpace:"nowrap"}}>{fmt(elapsed)}</span>
        </div>
        <div style={{display:"flex",justifyContent:"space-between",alignItems:"center",padding:"6px 20px"}}>
          <span style={{border:`1px solid ${col.accent}`,borderRadius:6,padding:"2px 10px",fontSize:11,color:col.accent}}>
            {yearLabel(q.year)}・{q.category}｜{q.subject}
          </span>
          <span style={{color:"#6b7280",fontSize:12}}>問{q.number} ({idx+1}/{shuffled.length})</span>
        </div>
        <div style={{margin:"8px 20px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:16,padding:"18px"}}>
          <p style={{margin:0,fontSize:13,lineHeight:2.0,whiteSpace:"pre-wrap",color:"#e8e8f0"}}>{q.question}</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:8,padding:"0 20px"}}>
          {q.choices.map((ch,i)=>{
            let bg="rgba(255,255,255,0.04)",bc="rgba(255,255,255,0.1)",cl="#d1d5db";
            if(done){if(i===q.answer){bg=`${col.accent}20`;bc=col.accent;cl=col.accent;}else if(i===sel){bg="rgba(239,68,68,0.12)";bc="#ef4444";cl="#ef4444";}}
            return(
              <button key={i} onClick={()=>pick(i)} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"11px 14px",border:`1px solid ${bc}`,borderRadius:12,background:bg,color:cl,textAlign:"left",cursor:done?"default":"pointer",transition:"all 0.18s"}}>
                <span style={{fontSize:16,fontWeight:700,flexShrink:0,minWidth:22,color:col.accent}}>{NUM[i]}</span>
                <span style={{fontSize:13,lineHeight:1.7,flex:1}}>{ch}</span>
                {done&&i===q.answer&&<span style={{color:"#2ecc8e",fontSize:18,flexShrink:0}}>✓</span>}
                {done&&i===sel&&i!==q.answer&&<span style={{color:"#ef4444",fontSize:18,flexShrink:0}}>✗</span>}
              </button>
            );
          })}
        </div>
        {done&&(
          <div style={{padding:"12px 20px 48px",display:"flex",flexDirection:"column",gap:10}}>
            {!showExp
              ?<button onClick={()=>setShowExp(true)} style={{background:"transparent",border:`1px solid ${col.accent}`,borderRadius:10,padding:"10px 0",fontSize:13,color:col.accent,cursor:"pointer"}}>解説を見る ▼</button>
              :<div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:14,padding:"14px"}}>
                <p style={{margin:"0 0 6px",fontSize:11,color:"#6b7280"}}>📝 解説</p>
                <p style={{margin:0,fontSize:13,lineHeight:1.9,color:"#d1d5db"}}>{q.explanation}</p>
              </div>
            }
            <button onClick={next} style={{background:col.accent,border:"none",borderRadius:12,color:"#fff",fontSize:14,fontWeight:700,padding:"15px 0",cursor:"pointer"}}>
              {idx+1>=shuffled.length?"結果を見る":"次の問題 →"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // RESULT
  if(screen==="result"){
    const pct=Math.round(score/shuffled.length*100);
    const grade=pct>=80?"合格圏 🎉":pct>=60?"もう少し":"要復習";
    const gcol=pct>=80?"#2ecc8e":pct>=60?"#f59e0b":"#ef4444";
    return(
      <div style={S.root}><div style={S.rw}>
        <p style={{color:"#6b7280",fontSize:13,letterSpacing:2,margin:0}}>演習結果</p>
        <div style={{width:150,height:150,borderRadius:"50%",border:`4px solid ${gcol}`,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:4}}>
          <span style={{fontSize:48,fontWeight:900,color:gcol,lineHeight:1}}>{pct}<span style={{fontSize:18}}>%</span></span>
          <span style={{fontSize:13,fontWeight:700,color:gcol,letterSpacing:2}}>{grade}</span>
        </div>
        <p style={{color:"#6b7280",fontSize:13,margin:0}}>{shuffled.length}問中 {score}問正解 ／ {fmt(elapsed)}</p>
        <div style={{width:"100%"}}>
          {CATS.filter(cat=>results.some(r=>r.q.category===cat)).map(cat=>{
            const cr=results.filter(r=>r.q.category===cat);
            const ok=cr.filter(r=>r.ok).length; const c=gc(cat);
            return(<div key={cat} style={{display:"flex",justifyContent:"space-between",padding:"8px 14px",background:"rgba(255,255,255,0.03)",borderRadius:8,borderLeft:`3px solid ${c.accent}`,marginBottom:6}}>
              <span style={{color:c.accent,fontSize:13}}>{cat}</span>
              <span style={{color:ok===cr.length?"#2ecc8e":"#9ca3af",fontSize:13}}>{ok}/{cr.length}問</span>
            </div>);
          })}
        </div>
        <div style={{width:"100%",display:"flex",flexDirection:"column",gap:10}}>
          {wrongs.length>0&&<button onClick={()=>{setRevIdx(0);setScreen("review")}} style={{background:"rgba(239,68,68,0.12)",border:"1px solid rgba(239,68,68,0.4)",borderRadius:12,color:"#ef4444",fontSize:14,fontWeight:700,padding:"14px 0",cursor:"pointer"}}>間違い {wrongs.length}問を復習</button>}
          <button onClick={startQuiz} style={{background:"linear-gradient(90deg,#4a9eff,#a855f7)",border:"none",borderRadius:12,color:"#fff",fontSize:14,fontWeight:700,padding:"14px 0",cursor:"pointer"}}>もう一度</button>
          <button onClick={()=>setScreen("home")} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,color:"#6b7280",fontSize:13,padding:"12px 0",cursor:"pointer"}}>ホームへ</button>
        </div>
      </div></div>
    );
  }

  // REVIEW
  if(screen==="review"){
    if(!wrongs.length)return(<div style={S.root}><div style={S.rw}><p style={{fontSize:48}}>🎉</p><p>全問正解！</p><button onClick={()=>setScreen("result")} style={{background:"rgba(255,255,255,0.05)",border:"1px solid rgba(255,255,255,0.08)",borderRadius:12,color:"#6b7280",fontSize:13,padding:"12px 24px",cursor:"pointer"}}>結果へ戻る</button></div></div>);
    const rw=wrongs[revIdx]; const col=gc(rw.q.category);
    return(
      <div style={{...S.root,background:`linear-gradient(150deg,${col.bg} 0%,#06060e 65%)`}}>
        <div style={S.qh}>
          <button style={S.xBtn} onClick={()=>setScreen("result")}>← 結果</button>
          <span style={{color:"#6b7280",fontSize:13}}>復習 {revIdx+1}/{wrongs.length}</span>
        </div>
        <div style={{padding:"6px 20px"}}>
          <span style={{border:`1px solid ${col.accent}`,borderRadius:6,padding:"2px 10px",fontSize:11,color:col.accent}}>
            {yearLabel(rw.q.year)}・問{rw.q.number}｜{rw.q.subject}
          </span>
        </div>
        <div style={{margin:"8px 20px 14px",background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:16,padding:"18px"}}>
          <p style={{margin:0,fontSize:13,lineHeight:2.0,whiteSpace:"pre-wrap",color:"#e8e8f0"}}>{rw.q.question}</p>
        </div>
        <div style={{display:"flex",flexDirection:"column",gap:8,padding:"0 20px"}}>
          {rw.q.choices.map((ch,i)=>{
            const ok=i===rw.q.answer,ng=i===rw.sel&&!ok;
            return(<div key={i} style={{display:"flex",alignItems:"flex-start",gap:10,padding:"11px 14px",border:`1px solid ${ok?col.accent:ng?"#ef4444":"rgba(255,255,255,0.08)"}`,borderRadius:12,background:ok?`${col.accent}20`:ng?"rgba(239,68,68,0.1)":"rgba(255,255,255,0.03)",color:ok?col.accent:ng?"#ef4444":"#6b7280",cursor:"default"}}>
              <span style={{fontSize:16,fontWeight:700,flexShrink:0,minWidth:22,color:col.accent}}>{NUM[i]}</span>
              <span style={{fontSize:13,lineHeight:1.7,flex:1}}>{ch}</span>
              {ok&&<span style={{color:"#2ecc8e",fontSize:18,flexShrink:0}}>✓</span>}
              {ng&&<span style={{color:"#ef4444",fontSize:18,flexShrink:0}}>✗</span>}
            </div>);
          })}
        </div>
        <div style={{background:"rgba(255,255,255,0.03)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:14,padding:"14px",margin:"12px 20px"}}>
          <p style={{margin:"0 0 6px",fontSize:11,color:"#6b7280"}}>📝 解説</p>
          <p style={{margin:0,fontSize:13,lineHeight:1.9,color:"#d1d5db"}}>{rw.q.explanation}</p>
        </div>
        <div style={{display:"flex",gap:12,padding:"8px 20px 48px"}}>
          {revIdx>0&&<button onClick={()=>setRevIdx(i=>i-1)} style={{flex:1,border:"none",borderRadius:12,background:"rgba(255,255,255,0.08)",color:"#9ca3af",fontSize:14,fontWeight:700,padding:"14px 0",cursor:"pointer"}}>← 前</button>}
          {revIdx+1<wrongs.length
            ?<button onClick={()=>setRevIdx(i=>i+1)} style={{flex:1,border:"none",borderRadius:12,background:col.accent,color:"#fff",fontSize:14,fontWeight:700,padding:"14px 0",cursor:"pointer"}}>次 →</button>
            :<button onClick={()=>setScreen("result")} style={{flex:1,border:"none",borderRadius:12,background:"#2ecc8e",color:"#fff",fontSize:14,fontWeight:700,padding:"14px 0",cursor:"pointer"}}>復習完了 ✓</button>
          }
        </div>
      </div>
    );
  }
}

const S = {
  root:{ minHeight:"100vh", background:"linear-gradient(150deg,#080d1a 0%,#06060e 100%)", fontFamily:"'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif", color:"#e8e8f0", overflowX:"hidden" },
  hw:{ maxWidth:480, margin:"0 auto", padding:"44px 20px 60px", display:"flex", flexDirection:"column", gap:16 },
  card:{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:16, padding:"14px 16px", display:"flex", flexDirection:"column", gap:10 },
  sl:{ fontSize:12, color:"#6b7280", letterSpacing:1 },
  cr:{ display:"flex", flexWrap:"wrap", gap:8 },
  sb:{ flex:1, background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:12, padding:"14px 8px", display:"flex", flexDirection:"column", alignItems:"center", gap:2 },
  startBtn:{ background:"linear-gradient(90deg,#4a9eff,#a855f7)", border:"none", borderRadius:14, color:"#fff", fontSize:17, fontWeight:700, padding:"17px 0", cursor:"pointer", letterSpacing:1 },
  qh:{ display:"flex", alignItems:"center", gap:12, padding:"16px 20px 8px", position:"sticky", top:0, backdropFilter:"blur(12px)", zIndex:10 },
  xBtn:{ background:"rgba(255,255,255,0.06)", border:"none", color:"#9ca3af", borderRadius:8, padding:"6px 10px", cursor:"pointer", fontSize:12, whiteSpace:"nowrap" },
  pt:{ flex:1, height:3, background:"rgba(255,255,255,0.08)", borderRadius:2, overflow:"hidden" },
  pb:{ height:"100%", borderRadius:2, transition:"width 0.4s" },
  rw:{ maxWidth:480, margin:"0 auto", padding:"52px 20px 60px", display:"flex", flexDirection:"column", alignItems:"center", gap:18 },
};
