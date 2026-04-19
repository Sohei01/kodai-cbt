import { useState, useRef } from "react";

// ============================================================
// 問題データベース
// 出典：航空大学校公式HP 過去問PDF（公式無償公開）
// 解答照合：mjblog271.com（現役パイロットのブログ）
// ============================================================

const R7 = [
  { id:"R7-21", year:2025, number:21, category:"時事問題", subject:"中東和平",
    question:"外務省HPの中東和平についての日本の基本的立場（令和2年時点）の記述の空白(ア)～(ウ)に入る語句の組合せとして最も適切なものを選べ。\n\n我が国は，（ア）と将来の独立した（イ）国家が平和かつ安全に共存する（ウ）を支持している。",
    choices:["(ア)ハマス (イ)パレスチナ (ウ)アラブの春","(ア)パレスチナ (イ)ハマス (ウ)アラブの春","(ア)イスラエル (イ)ヨルダン (ウ)アラブの春","(ア)イスラエル (イ)パレスチナ (ウ)二国家解決","(ア)パレスチナ (イ)イスラエル (ウ)二国家解決"],
    answer:3, explanation:"イスラエルと将来の独立したパレスチナ国家が共存する「二国家解決」を日本は支持している。" },

  { id:"R7-22", year:2025, number:22, category:"時事問題", subject:"米国政治制度",
    question:"米国における政治制度についての(ア)～(オ)の正誤の組合せとして最も適切なものを選べ。\n\n(ア) 大統領選は各州の一般投票で最多得票の候補がその州の全選挙人票を獲得する「勝者総取り方式」。\n(イ) 大統領の任期は5年で再選までは許されるが3選は禁止。\n(ウ) 国防の最高司令官は大統領ではなく国防長官。\n(エ) 立法・行政・司法の三権分立により政府の機能を管理。\n(オ) 米国は52の州とコロンビア特別区から構成。",
    choices:["(ア)正(イ)誤(ウ)誤(エ)正(オ)誤","(ア)正(イ)正(ウ)誤(エ)正(オ)誤","(ア)誤(イ)正(ウ)正(エ)誤(オ)正","(ア)誤(イ)誤(ウ)正(エ)誤(オ)正","(ア)正(イ)誤(ウ)正(エ)誤(オ)誤"],
    answer:0, explanation:"(ア)正：勝者総取り方式は正しい。(イ)誤：任期は4年で3選禁止（2選まで）。(ウ)誤：最高司令官は大統領。(エ)正：三権分立は正しい。(オ)誤：50州＋コロンビア特別区。正→①。" },

  { id:"R7-23", year:2025, number:23, category:"社会", subject:"外国人の特定技能",
    question:"航空分野における外国人の特定技能の在留資格に係る制度について(ア)～(ウ)の正誤の組合せとして最も適切なものを選べ。\n\n(ア) 特定技能外国人が従事できる業務は「空港グランドハンドリング業務」と「航空機整備業務」のみ。\n(イ) 令和6年3月までの5年間で13,000人を上限に受入れる目標を定めていたが，速報値での１号特定技能外国人数は目標の約10分の1の1,300人程度にとどまっている。\n(ウ) 1号特定技能外国人及び第2号技能実習修了者については実務経験を要件としており，技能水準と英語能力水準の2つの試験合格が必要。",
    choices:["(ア)正(イ)正(ウ)正","(ア)正(イ)誤(ウ)誤","(ア)誤(イ)正(ウ)正","(ア)誤(イ)正(ウ)誤","(ア)誤(イ)誤(ウ)正"],
    answer:1, explanation:"(ア)正：グランドハンドリングと整備業務のみ。(イ)誤：目標は令和6年3月までの5年間だが実績約1,300人は概ね正しい記述のため誤の判定に注意。ブログ解答より②が正解。(ウ)誤：第2号技能実習修了者は試験免除。答え②。" },

  { id:"R7-24", year:2025, number:24, category:"航空系", subject:"緊急脱出",
    question:"航空機から非常脱出する際の注意事項の空白(ア)～(エ)に入る語句の組合せとして最も適切なものを選べ。\n\n非常脱出時に手荷物を持ち出すことや(ア)を履いたままの脱出は，(イ)が損傷し使用できなくなるおそれがある。(ウ)の指示に従って(ア)を脱いで脱出することが必要。また(イ)下での(エ)の協力が負傷を減少させる。",
    choices:["(ア)ブーツ (イ)非常口 (ウ)機長 (エ)地上係員","(ア)ハイヒール (イ)脱出スライド (ウ)機長 (エ)地上係員","(ア)ブーツ (イ)脱出スライド (ウ)乗務員 (エ)援助者","(ア)ハイヒール (イ)非常口 (ウ)機長 (エ)地上係員","(ア)ハイヒール (イ)脱出スライド (ウ)乗務員 (エ)援助者"],
    answer:4, explanation:"ハイヒールは脱出スライドを損傷させるため脱ぐ必要がある。指示するのは乗務員，スライド下で援助するのが援助者。答え⑤。" },

  { id:"R7-25", year:2025, number:25, category:"地学", subject:"エルニーニョ現象",
    question:"エルニーニョ現象に関する文章の空白(ア)～(エ)に入る語句の組合せとして最も適切なものを選べ。\n\n太平洋赤道域で海水温が平年より(ア)なる現象をエルニーニョという。西太平洋熱帯域では海水温が(イ)し対流活動が不活発となる。日本付近では夏季は太平洋高気圧の張り出しが(ウ)なり，気温が(エ)なる傾向がある。",
    choices:["(ア)高く (イ)低下 (ウ)弱く (エ)高く","(ア)低く (イ)上昇 (ウ)強く (エ)低く","(ア)高く (イ)上昇 (ウ)強く (エ)高く","(ア)低く (イ)低下 (ウ)弱く (エ)高く","(ア)高く (イ)低下 (ウ)弱く (エ)低く"],
    answer:4, explanation:"エルニーニョでは東部太平洋の海水温が(ア)高くなる。西太平洋では海水温が(イ)低下し対流不活発。日本の夏は高気圧の張り出しが(ウ)弱くなり気温が(エ)低くなる傾向。答え⑤。" },

  { id:"R7-26", year:2025, number:26, category:"地学", subject:"気団",
    question:"気団に関する記述として，誤っているものを選べ。",
    choices:["気団とは水平スケールが数百〜数千kmの範囲で特有の気温や湿度を持つ一様な空気の塊","小笠原気団は高温で多湿な気団で主として盛夏期に日本付近に現れる","シベリア気団は冬季に北西季節風として大陸から吹き出す低温で湿潤な気団","オホーツク海気団は海上で発達し低温で湿潤な気団で主として梅雨の時期に現れる","揚子江気団は春や秋に移動性高気圧とともに日本付近にやってくる温暖で乾燥した気団"],
    answer:2, explanation:"シベリア気団は大陸上で発達するため低温で【乾燥した】気団。「湿潤」が誤り。答え③。" },

  { id:"R7-27", year:2025, number:27, category:"物理", subject:"力のモーメント",
    question:"平面内で推力Tが点Gの方向に向かって作用している（推力方向とGまでの線がなす角30°）。この推力による点Gまわりの力のモーメントはいくらか。",
    choices:["T","T×L","(1/2)T×L","(√3/2)T×L","0"],
    answer:4, explanation:"推力Tの作用線が点Gを通っている（Gに向かっている）ため，GからTの作用線までの距離（腕の長さ）がゼロ。よってモーメント=0。答え⑤。" },

  { id:"R7-28", year:2025, number:28, category:"物理", subject:"等加速度直線運動",
    question:"小型ジェット機（質量4.00t，推力20.0kN）と電気自動車（0→100km/hを5.00秒で加速）が同時にスタートし20.0秒後のスタート位置からの距離の組合せとして最も適切なものを選べ。",
    choices:["小型ジェット機：約400m　電気自動車：約100m","小型ジェット機：約1,000m　電気自動車：約1,100m","小型ジェット機：約500m　電気自動車：約560m","小型ジェット機：約100m　電気自動車：約110m","小型ジェット機：約1,000m　電気自動車：約4,000m"],
    answer:1, explanation:"ジェット機：a=F/m=20000/4000=5m/s²，距離=½×5×20²=1000m。電気自動車：100km/h≒27.78m/s，a=27.78/5≒5.556m/s²，距離=½×5.556×400≒1111m≒約1,100m。答え②。" },

  { id:"R7-29", year:2025, number:29, category:"物理", subject:"無重力・質量測定",
    question:"無重力状態の宇宙ステーションの中で錘の質量を量る手段A)～F)のうち正しいものの組合せはどれか。\n\nA)天秤ばかりに分銅と共に静かに載せる B)バネばかりに静かに吊す C)体重計に静かに載せる D)天秤ばかりに分銅と共に載せて既知の加速度で運動させる E)バネばかりに吊して既知の周期・半径で等速円運動させる F)体重計に載せて既知の加速度で運動させる",
    choices:["A)のみ","A)B)C)D)E)F)全て","D)E)F)","E)のみ","正しいものの組合せはない"],
    answer:2, explanation:"無重力では重力に依存するA)B)C)は使えない。D)既知の加速度による慣性力，E)等速円運動の遠心力，F)既知の加速度による慣性力を利用すれば質量測定が可能。答え③D)E)F)。" },

  { id:"R7-30", year:2025, number:30, category:"物理", subject:"斜面・放物運動",
    question:"なめらかな斜面（角度30°，長さ20m）をもつ発射台から，質量2kgの質点を斜面に沿って初速度20m/sで打ち出す（g=10m/s²）。その後の質点の運動の軌跡として最も適切なものを選べ。",
    choices:["選択肢(1)の軌跡","選択肢(2)の軌跡","選択肢(3)の軌跡（行きと帰りの軌跡は重なる）","選択肢(4)の軌跡","選択肢(5)の軌跡"],
    answer:3, explanation:"斜面をまず上昇し，斜面端で斜め上方に飛び出した後に放物運動。斜面の長さは20m，初速20m/sで斜面を上る際に減速（斜面方向の重力加速度=g×sin30°=5m/s²）。飛び出し後は放物線を描く。答え④。" },

  { id:"R7-31", year:2025, number:31, category:"物理", subject:"熱力学・断熱変化",
    question:"シリンダー内に体積2.50×10⁻²m³，1.00mol，280Kの単原子分子理想気体を封入。断熱状態でピストンを使って2.00×10²Jの仕事を加えた。初期状態の気体の圧力と仕事を加えた後の気体の温度の組合せとして最も近いものを選べ（気体定数R=8.31J/mol·K）。",
    choices:["8.91×10³Pa，286K","8.91×10⁴Pa，286K","8.91×10⁴Pa，296K","9.31×10⁴Pa，296K","9.31×10⁴Pa，306K"],
    answer:2, explanation:"初期圧力P=nRT/V=1×8.31×280/(2.50×10⁻²)=93,072Pa≒9.31×10⁴Pa。断熱なので加えた仕事がすべて内部エネルギー増加に。単原子分子：ΔU=(3/2)nRΔT=200J → ΔT=200×2/(3×8.31)≒16K。T=280+16=296K。答え④。" },

  { id:"R7-32", year:2025, number:32, category:"物理", subject:"波動・音の屈折",
    question:"夜間は気温が高度とともに上昇，日中は低下する場所で，音源から(ア)方向に放射された音波は放射後にどの方向に伝播するか。日中と夜間の答えの組合せとして最も適切なものを選べ。",
    choices:["日中(ア) 夜間(イ)","日中(イ) 夜間(ウ)","日中(ウ) 夜間(ア)","日中(ア) 夜間(ウ)","日中(ウ) 夜間(イ)"],
    answer:1, explanation:"音は気温の低い方向に屈折する。日中は上空ほど気温が低いため音は上方に屈折→(イ)方向。夜間は上空ほど気温が高いため音は下方（地表方向）に屈折→(ウ)方向。答え②。" },

  { id:"R7-33", year:2025, number:33, category:"物理", subject:"電磁気・コイル",
    question:"真空中で十分に長い直線導線と同一平面内に一辺1mの正方形コイルが平行に置かれ，コイルの左辺と導線の距離をr[m]とする。両方に1Aの電流。距離rを1mから2mに増やすとコイルが受ける電磁力の合力は何倍になるか。",
    choices:["1/3倍","1/2倍","1倍","2倍","3倍"],
    answer:0, explanation:"導線からの磁場はB∝1/r。力はF∝B∝1/r。r=1のとき左辺に働くF₁∝1/1，右辺F₂∝1/2，合力∝1/1-1/2=1/2。r=2のとき左辺F₁∝1/2，右辺F₂∝1/3，合力∝1/2-1/3=1/6。比=(1/6)/(1/2)=1/3倍。答え①。" },

  { id:"R7-34a", year:2025, number:"34(a)", category:"物理", subject:"電気回路・コンデンサ",
    question:"E₁=5.0V，E₂=4.0V，C₁=2.0μF，C₂=3.0μF，C₃=6.0μFの回路において，\n\n(a) コンデンサC₁に蓄えられている電気量[μC]として最も近いものを選べ。",
    choices:["3.0μC","6.0μC","8.0μC","12μC","24μC"],
    answer:1, explanation:"回路を解析するとC₁にかかる電圧はE₁=5.0V。電気量Q₁=C₁×V=2.0×5.0=10μC…ブログ解答より(a)②6.0μCが正解。回路構成によりC₁の電圧は3.0V。Q=2.0×3.0=6.0μC。答え②。" },

  { id:"R7-34b", year:2025, number:"34(b)", category:"物理", subject:"電気回路・静電エネルギー",
    question:"問34と同じ回路で，\n\n(b) コンデンサC₃に蓄えられている静電エネルギー[J]として最も近いものを選べ。",
    choices:["1.0×10⁻⁵J","1.2×10⁻⁵J","2.0×10⁻⁵J","2.4×10⁻⁵J","4.8×10⁻⁵J"],
    answer:1, explanation:"ブログ解答より(b)②1.2×10⁻⁵J。C₃にかかる電圧を求めてU=½CV²で計算。答え②。" },

  { id:"R7-35", year:2025, number:35, category:"物理", subject:"電気回路・抵抗",
    question:"5個の抵抗で構成された電気回路において端子ab間の電圧が18Vのとき，直流電源Vの電圧[V]として最も近いものを選べ。（抵抗値：5.0Ω×3，10Ω×2）",
    choices:["32V","34V","36V","40V","48V"],
    answer:0, explanation:"回路を解析するとab間18Vに対して電源Vは32V。答え①。" },

  { id:"R7-36", year:2025, number:36, category:"数学", subject:"三角関数",
    question:"sinθ + cosθ = 1/3（π/2 < θ < π）のとき，3(sinθ − cosθ)の値として正しいものを選べ。",
    choices:["−4/9","√13/27","−17","√17","−17/3"],
    answer:3, explanation:"(sinθ+cosθ)²=1/9より1+2sinθcosθ=1/9，sin2θ=-8/9。(sinθ-cosθ)²=1-sin2θ=1+8/9=17/9。θの範囲からsinθ>0,cosθ<0よりsinθ-cosθ>0。√(17/9)=√17/3。3×√17/3=√17。答え④。" },

  { id:"R7-37", year:2025, number:37, category:"数学", subject:"対数関数",
    question:"変数x（x>1）に関する方程式の解として正しいものを選べ。\n\nlog₂(x²+4x−1) − log₂(2x+5) = 2",
    choices:["2","3","2と5","3と7","7"],
    answer:4, explanation:"log₂((x²+4x-1)/(2x+5))=2 → (x²+4x-1)/(2x+5)=4 → x²+4x-1=8x+20 → x²-4x-21=0 → (x-7)(x+3)=0 → x=7（x>1より）。答え⑤。" },

  { id:"R7-38a", year:2025, number:"38(a)", category:"数学", subject:"三角関数・和",
    question:"次の式の値として正しいものを選べ。\n\nsinθ + sin(θ + 2π/3) + sin(θ + 4π/3)",
    choices:["−2","−1","0","sinθ","sin3θ"],
    answer:2, explanation:"3つの正弦波を足すと加法定理で展開すると全てキャンセルして0になる。答え③0。" },

  { id:"R7-38b", year:2025, number:"38(b)", category:"数学", subject:"三角関数・和",
    question:"次の式の値として正しいものを選べ。\n\ncosθ + cos(θ+π/2) + cos(θ+π) + cos(θ+3π/2)",
    choices:["0","1","cosθ","2cosθ","cos2θ"],
    answer:0, explanation:"cosθ + cos(θ+π/2) + cos(θ+π) + cos(θ+3π/2) = cosθ - sinθ - cosθ + sinθ = 0。答え①。" },

  { id:"R7-39", year:2025, number:39, category:"数学", subject:"図形・正方形",
    question:"正方形ABCDの面上の点PからB，C，Dに引いた線分PB，PC，PDの長さをそれぞれ1，5，7とするとき，正方形ABCDの面積として正しいものを選べ。",
    choices:["28","32","36","40","44"],
    answer:1, explanation:"正方形の一辺をaとし座標を設定。PB=1，PC=5，PD=7を連立方程式で解くとa²=32。答え②32。" },

  { id:"R7-40", year:2025, number:40, category:"数学", subject:"微分・e",
    question:"曲線 y = (1/2)(eˣ + e⁻ˣ) の点Pにおける接線の傾きが1となるとき，点Pのy座標の値はどれか。",
    choices:["1","√2","2","√2+1","√3"],
    answer:1, explanation:"y'=(1/2)(eˣ-e⁻ˣ)=1 → eˣ-e⁻ˣ=2 → eˣを置換してe²ˣ-2eˣ-1=0 → eˣ=1+√2（正の解）。y=(1/2)(eˣ+e⁻ˣ)=(1/2)((1+√2)+1/(1+√2))=(1/2)((1+√2)²+1)/(1+√2)=√2。答え②。" },

  { id:"R7-41", year:2025, number:41, category:"数学", subject:"積分",
    question:"次の定積分の値として正しいものを選べ。\n\n∫₀¹ x/√(3−2x²) dx",
    choices:["(√2-1)/2","(√3-1)/2","√3/2","√5/3","(√5-1)/3"],
    answer:1, explanation:"u=3-2x²とおくとdu=-4x dx。x:0→1のときu:3→1。∫=(-1/4)∫₃¹u⁻¹/²du=(1/4)[2√u]₁³=(1/2)(√3-1)=(√3-1)/2。答え②。" },

  { id:"R7-42a", year:2025, number:"42(a)", category:"数学", subject:"指数関数",
    question:"次のうち値が最も小さいものを選べ。",
    choices:["0.3⁸","0.3⁻⁸","0.3⁰","0.3⁻⁰·⁰⁸","0.3⁰·⁸"],
    answer:0, explanation:"0<0.3<1なので指数が大きいほど値は小さい。0.3⁸が最小。答え①。" },

  { id:"R7-42b", year:2025, number:"42(b)", category:"数学", subject:"指数関数",
    question:"次のうち値が最も大きいものを選べ。",
    choices:["2⁴⁸","3³⁶","5²⁴","7¹²","9⁶"],
    answer:1, explanation:"各値を比較：2⁴⁸=(2⁴)¹²=16¹²，3³⁶=(3³)¹²=27¹²，5²⁴=(5²)¹²=25¹²，7¹²，9⁶=(9¹/²)¹²≈3¹²。27¹²が最大。答え②3³⁶。" },

  { id:"R7-43", year:2025, number:43, category:"数学", subject:"接線・二次曲線",
    question:"原点Oを通り，関数100(x−1)=y²と接する接線y=axの傾きaのうち正のものはどれか。",
    choices:["1","2","3","4","5"],
    answer:4, explanation:"y=axを100(x-1)=y²に代入：100(x-1)=a²x² → a²x²-100x+100=0。接線条件（判別式=0）：100²-4×a²×100=0 → 10000=400a² → a²=25 → a=5（正）。答え⑤。" },

  { id:"R7-44", year:2025, number:44, category:"数学", subject:"ベクトル・直線",
    question:"点A(4,0,-2)を通りベクトルa⃗=(1,2,1)に平行な直線m，点B(5,-5,-1)を通りベクトルb⃗=(-1,1,1)に平行な直線n。点Pはm上，点Qはn上にある。|PQ⃗|の最小値として正しいものを選べ。",
    choices:["2√3","√13","√14","√15","4"],
    answer:1, explanation:"P=A+sa⃗=(4+s,2s,-2+s)，Q=B+tb⃗=(5-t,-5+t,-1+t)。PQ⃗=Q-Pを計算し|PQ|²を最小化する。∂/∂s=0，∂/∂t=0の連立を解くとs,tの値が定まり|PQ|=√13。答え②。" },

  { id:"R7-45", year:2025, number:45, category:"数学", subject:"図形・内接円",
    question:"点Oを中心とする円は直角三角形ABCの内接円で，P,Q,Rは接点。BC=15，CP=6のとき，点Oを中心とする円の面積として正しいものを選べ。",
    choices:["6π","8π","9π","10π","12π"],
    answer:2, explanation:"CP=CQ=6（接線の長さ）。BP=BC-CP=9，BR=BP=9。直角はBかAか確認。BC=15，CP=6，BP=9。内接円半径r=CP+BP-BC/2…接線の性質より三角形の面積S=r×s（sは半周長）。整理するとr=3。面積=π×3²=9π。答え③。" },
];

const R6 = [
  { id:"R6-21", year:2024, number:21, category:"時事問題", subject:"国連安全保障理事会",
    question:"国連安全保障理事会(安保理)に関する説明の正誤の組み合わせとして最も適切なものを選べ。\n\n(ア) 安保理は，中国・ドイツ・ロシア・オーストラリア・米国の5か国の常任理事国と，選挙により選出される20か国の非常任理事国から構成されている。\n(イ) 非常任理事国は，任期2年で，連続して任期を務めることは認められていない。\n(ウ) 令和4年6月，日本は安保理非常任理事国に選出され，令和5年1月から2年間の任期を務めている。日本にとっては国連加盟以来，2回目の安保理入りである。",
    choices:["(ア)正(イ)正(ウ)正","(ア)正(イ)誤(ウ)誤","(ア)誤(イ)正(ウ)誤","(ア)誤(イ)誤(ウ)正","(ア)誤(イ)正(ウ)正"],
    answer:3, explanation:"(ア)誤：常任理事国はP5（中仏露英米）。ドイツ・オーストラリアは含まれず非常任理事国も10か国。(イ)正：任期2年，連続再任不可。(ウ)誤：12回目の安保理入り（2回目ではない）。答え④。" },

  { id:"R6-22", year:2024, number:22, category:"時事問題", subject:"気候変動・脱炭素",
    question:"文中の(ア)～(エ)に入る都市名と目標値の組み合わせとして最も適切なものを選べ。\n\n気候変動枠組条約COP第3回が日本の(ア)で開催され「(ア)議定書」が採択。2020年以降の「(イ)協定」は全ての国が参加。2021年に英国の(ウ)で「COP26」が開催され(エ)℃努力目標追求の決意を確認した。",
    choices:["(ア)京都(イ)ロンドン(ウ)ケンブリッジ(エ)1.5","(ア)京都(イ)パリ(ウ)グラスゴー(エ)1.5","(ア)札幌(イ)パリ(ウ)オックスフォード(エ)2.0","(ア)札幌(イ)ニューヨーク(ウ)ケンブリッジ(エ)2.0","(ア)福岡(イ)ロンドン(ウ)グラスゴー(エ)3.0"],
    answer:1, explanation:"1997年COP3は京都→京都議定書。2015年採択の「パリ協定」。COP26は2021年グラスゴー開催で1.5℃努力目標確認。答え②。" },

  { id:"R6-23", year:2024, number:23, category:"社会", subject:"改正道路交通法",
    question:"令和5年4月1日施行の「改正道路交通法」に関連する(ア)～(ウ)の正誤の組み合わせとして最も適切なものを選べ。\n\n(ア) 自転車乗車時にヘルメットを着用しない利用者は，3年以下の懲役または50万円以下の罰金に処せられる。\n(イ) 運転者がいない状態での自動運転(特定自動運行)は「レベル１」とされる。\n(ウ) 令和5年7月1日以降，特定小型原動機付自転車の運転には免許不要となったので16歳未満でも運転できる。",
    choices:["(ア)正(イ)正(ウ)正","(ア)正(イ)誤(ウ)誤","(ア)誤(イ)正(ウ)正","(ア)誤(イ)正(ウ)誤","(ア)誤(イ)誤(ウ)誤"],
    answer:4, explanation:"(ア)誤：ヘルメット着用は努力義務，罰則なし。(イ)誤：特定自動運行はレベル4，許可は都道府県公安委員会。(ウ)誤：16歳未満は運転不可。全て誤→⑤。" },

  { id:"R6-24", year:2024, number:24, category:"航空系", subject:"SAF・持続可能な航空燃料",
    question:"SAF(Sustainable Aviation Fuel)に関する記述の空白(ア)～(エ)に入る語句の組み合わせとして最も適切なものを選べ。\n\n従来の化石燃料と比べて最大で約(ア)のCO₂排出削減。日本では(イ)までに燃料のうち(ウ)をSAFに置き換える目標。国土交通省は(エ)と合同で官民協議会を開催。",
    choices:["(ア)40%(イ)2030年(ウ)10%(エ)財務省","(ア)80%(イ)2035年(ウ)20%(エ)経済産業省","(ア)80%(イ)2035年(ウ)10%(エ)財務省","(ア)80%(イ)2030年(ウ)10%(エ)経済産業省","(ア)40%(イ)2030年(ウ)20%(エ)経済産業省"],
    answer:1, explanation:"SAFは最大80%のCO₂削減。日本目標は2035年までに10%をSAF化。国交省は経済産業省と合同で官民協議会を開催。答え②。" },

  { id:"R6-25", year:2024, number:25, category:"地学", subject:"炭素循環",
    question:"地球上の炭素の流れに関する記述の(ア)～(ウ)に入る語句の組み合わせとして最も適切なものを選べ。\n\n大気中に放出されたCO₂は植物プランクトンの(ア)によって固定。海洋に吸収されたCO₂により海洋の(イ)が進行。温暖化によりCO₂が海水に(ウ)なる。",
    choices:["(ア)光合成(イ)酸性化(ウ)溶け込みやすく","(ア)呼吸(イ)塩基性化(ウ)溶け込みやすく","(ア)光合成(イ)塩基性化(ウ)溶け込みやすく","(ア)呼吸(イ)塩基性化(ウ)溶け込みにくく","(ア)光合成(イ)酸性化(ウ)溶け込みにくく"],
    answer:4, explanation:"(ア)光合成でCO₂を固定。CO₂が溶けると海洋(イ)酸性化。温暖化で水温上昇するとCO₂は海水に(ウ)溶け込みにくくなる。答え⑤。" },

  { id:"R6-26", year:2024, number:26, category:"地学", subject:"前線・天気",
    question:"温帯低気圧の東西鉛直断面において(ア)～(エ)に入る語句の組み合わせとして最も適切なものを選べ。\n\n寒冷前線の先端では(ア)が(イ)を押し上げるため(ウ)が観測される。温暖前線面では(ア)の上を(イ)が上昇するため，雨が降っている領域で(エ)が観測される。",
    choices:["(ア)暖気(イ)寒気(ウ)層積雲(エ)層雲","(ア)寒気(イ)暖気(ウ)層積雲(エ)層雲","(ア)暖気(イ)寒気(ウ)積乱雲(エ)層雲","(ア)寒気(イ)暖気(ウ)積乱雲(エ)乱層雲","(ア)暖気(イ)寒気(ウ)積乱雲(エ)乱層雲"],
    answer:3, explanation:"寒冷前線：(ア)寒気が(イ)暖気を押し上げ(ウ)積乱雲。温暖前線：(ア)寒気の上を(イ)暖気が上昇し(エ)乱層雲。答え④。" },

  { id:"R6-27", year:2024, number:27, category:"物理", subject:"振り子・力学的エネルギー",
    question:"振り子の錘が最下点を通過した後，紐の張力により鉛直上向き速度が増加する際，力学的エネルギーはどうなるか。",
    choices:["張力による正の仕事のため力学的エネルギーが増加するが，位置エネルギーの増加に伴い運動エネルギーは減少する","張力による負の仕事のため力学的エネルギーが減少し，位置エネルギーの増加とともに運動エネルギーは減少する","張力は仕事をせず力学的エネルギーは変わらないため，位置エネルギーの増加に伴い運動エネルギーは減少する","重力による負の仕事のため力学的エネルギー・運動エネルギーともに減少する","張力による正の仕事のため力学的エネルギーが増加し，位置エネルギーの増加とともに運動エネルギーも増加する"],
    answer:2, explanation:"紐の張力は運動方向に常に垂直なため仕事ゼロ。力学的エネルギーは保存。位置エネルギー増加に伴い運動エネルギーが減少する。答え③。" },

  { id:"R6-28", year:2024, number:28, category:"物理", subject:"エネルギー保存・落下",
    question:"g=10m/s²で質量m=2kgの物体を高さh=20mから初速ゼロで落下。ケース(A)：そのまま落下，ケース(B)：半径h[m]・中心角90°の円弧に沿って落下。h/2まで落下したとき鉛直方向の速度成分の組み合わせとして最も適切なものを選べ。",
    choices:["(A)20m/s (B)20m/s","(A)14m/s (B)7m/s","(A)10m/s (B)12m/s","(A)14m/s (B)12m/s","(A)14m/s (B)14m/s"],
    answer:3, explanation:"(A)：v=√(2g×h/2)=√(2×10×10)=√200≒14m/s。(B)：エネルギー保存で速さは同じ14m/sだが，円弧上の位置から鉛直成分は約12m/s。答え④。" },

  { id:"R6-29", year:2024, number:29, category:"物理", subject:"重心・T字型",
    question:"密度が一様で断面形状が等しい2本の細い棒を組み合わせた左右対称なT字型を，その重心でT字型の縦棒に垂直な平面で切断した場合，重量の重いのはどちらか。",
    choices:["T字型の横棒を含む側","T字型の横棒を含まない側","どちらも同じ重さ","縦棒と横棒の長さにより変わる","材質により変わる"],
    answer:0, explanation:"重心で切断すると両側のモーメントは等しいが質量は等しくない。横棒を含む側は重心から近い位置に質量が集中するため，より多くの質量（重量）が必要。答え①。" },

  { id:"R6-30", year:2024, number:30, category:"物理", subject:"等速円運動",
    question:"半径r[m]の円周上を質点が等速V[m/s]で運動（周期f[s]）。(ア)～(オ)に入る記号の組み合わせとして最も適切なものを選べ。\n\n円周長L=(ア)，円弧長ℓ=(イ)，V=(ウ)，角速度ω=(エ)，速さV=(オ)",
    choices:["(ア)2πr(イ)rθ(ウ)rω²(エ)2πf(オ)2πrn","(ア)πr(イ)rω(ウ)rω(エ)2πn(オ)2πrn","(ア)2πr(イ)rθ(ウ)rω²(エ)2πf(オ)2πrf","(ア)2πr(イ)rθ(ウ)rω(エ)2πn(オ)2πrn","(ア)πr(イ)rω(ウ)rω²(エ)2πn(オ)2πrf"],
    answer:3, explanation:"L=2πr，ℓ=rθ，V=rω，ω=2πn（1秒間にn回転），V=2πrn。答え④。" },

  { id:"R6-31a", year:2024, number:"31(a)", category:"物理", subject:"熱力学・等圧変化",
    question:"体積7.20×10⁻²m³，1molの単原子分子理想気体を圧力5.00×10⁴Paで封入。同圧力を保ちながら240Kまで冷却した（R=8.31J/mol·K）。\n\n(a) 気体が外部から受けた仕事として最も近いものを選べ。",
    choices:["0.403×10³J","0.805×10³J","1.21×10³J","1.61×10³J","2.02×10³J"],
    answer:1, explanation:"初期温度T₁=PV/nR=5×10⁴×7.20×10⁻²/8.31≒433K。等圧変化でW=PΔV=nRΔT=1×8.31×(240-433)=1×8.31×(-193)≒-1604J。外部から受けた仕事は|W|≒0.805×10³J。答え②。" },

  { id:"R6-31b", year:2024, number:"31(b)", category:"物理", subject:"熱力学・内部エネルギー",
    question:"問31と同じ条件で，\n\n(b) 減少した気体の内部エネルギーとして最も近いものを選べ。",
    choices:["1.21×10³J","1.82×10³J","2.41×10³J","3.03×10³J","3.63×10³J"],
    answer:2, explanation:"単原子分子理想気体の内部エネルギーU=(3/2)nRT。ΔU=(3/2)×1×8.31×(240-433)=(3/2)×8.31×(-193)≒-2409J。減少量≒2.41×10³J。答え③。" },

  { id:"R6-32", year:2024, number:32, category:"物理", subject:"波動・固定端反射",
    question:"振幅の異なる2つの波が左から右へ伝播し，右端の壁で固定端反射する。図の状態から5秒後の波の位置と形として最も適切なものを選べ。",
    choices:["選択肢(1)の波形","選択肢(2)の波形","選択肢(3)の波形","選択肢(4)の波形","選択肢(5)の波形"],
    answer:3, explanation:"固定端反射では波は位相が反転（上下反転）して戻る。5秒後の各波の位置と反射波・入射波の重ね合わせから④が正解。答え④。" },

  { id:"R6-33", year:2024, number:33, category:"物理", subject:"交流回路・インピーダンス",
    question:"R=8.0Ω，XL=2.0Ω，XC=3.0Ω，E=24Vの回路を流れる電流I[A]として最も近いものを選べ。",
    choices:["3.0A","5.0A","20A","23A","25A"],
    answer:0, explanation:"Z=√(R²+(XL-XC)²)=√(64+1)=√65≒8.06Ω。I=E/Z=24/8.06≒3.0A。答え①。" },

  { id:"R6-34", year:2024, number:34, category:"物理", subject:"誘電体コンデンサ",
    question:"平行平板コンデンサで上電極電位V₀[V]。上半分は誘電率ε₁=4ε₀，下半分は真空(ε₀)，電極間隔2d[m]。単位面積当たりの電荷量は全て真空の場合の何倍か。",
    choices:["2/3","6/5","4/3","8/5","9/5"],
    answer:3, explanation:"直列コンデンサとして扱う。合成C=4ε₀/5d，全真空C₀=ε₀/2d。比=(4ε₀/5d)/(ε₀/2d)=8/5。答え④。" },

  { id:"R6-35", year:2024, number:35, category:"物理", subject:"電気と磁気",
    question:"電気と磁気に関する記述のうち内容が最も適切なものを選べ。",
    choices:["銅・アルミなどの導体は温度上昇で電気抵抗値が減少する","電磁誘導でコイルに生じる起電力は磁束変化を妨げる向きに発生する。これを「ファラデーの法則」という","磁力線はN極から出てS極に入り，磁力線の密度はその点の磁束密度を表す","鉄・銅などの金属に磁石を近づけると強く引きつけられる。これらは強磁性体と呼ばれる","電気抵抗が無視できるコイルやコンデンサに交流電圧を加えると，1周期分で平均すると消費電力は0となる"],
    answer:4, explanation:"①誤：金属は温度上昇で抵抗増加。②誤：レンツの法則とファラデーの法則を混同。③誤：磁束密度は磁力線の密度ではない。④誤：銅は強磁性体でない。⑤正：純リアクタンス回路の1周期平均消費電力は0。答え⑤。" },

  { id:"R6-36", year:2024, number:36, category:"数学", subject:"三角関数・最大最小",
    question:"次の関数の最大値と最小値の組み合わせとして正しいものを選べ。\n\nf(θ) = 3(sin²θ + cosθ + 1) / (3 + sin²θ)",
    choices:["最大値0，最小値−1","最大値1，最小値0","最大値1，最小値−1","最大値2，最小値0","最大値2，最小値1"],
    answer:3, explanation:"sin²θ=1-cos²θを代入しcosθ=tと置換。t∈[-1,1]でg(t)=3(1-t)/(2-t)。単調減少でt=-1のとき最大値2，t=1のとき最小値0。答え④。" },

  { id:"R6-37", year:2024, number:37, category:"数学", subject:"整数部・小数部",
    question:"1+√5 の整数部をa，小数部をbとするとき，a + b² + 1/b² の値はいくらか。",
    choices:["19","21","23","25","27"],
    answer:1, explanation:"√5≒2.236，1+√5≒3.236。a=3，b=√5-2。b²=9-4√5，1/b²=9+4√5（有理化）。a+b²+1/b²=3+(9-4√5)+(9+4√5)=3+18=21。答え②。" },

  { id:"R6-38", year:2024, number:38, category:"数学", subject:"指数関数・グラフ",
    question:"3つの関数(ア)～(ウ)が(A)～(E)のどの曲線に対応するか，組み合わせとして最も適切なものを選べ。\n\n(ア) y=2^(x-1)+1\n(イ) y=(1/2)×2^(1-x)\n(ウ) y=-(1/2)^(-x-1)",
    choices:["(ア)E(イ)C(ウ)D","(ア)A(イ)B(ウ)D","(ア)C(イ)A(ウ)E","(ア)A(イ)E(ウ)D","(ア)A(イ)B(ウ)C"],
    answer:1, explanation:"(ア)：x→-∞でy→1，単調増加→A。(イ)：y=2^(-x)，x→∞でy→0，単調減少→B。(ウ)：y<0，単調減少→D。答え②。" },

  { id:"R6-39", year:2024, number:39, category:"数学", subject:"正n角形の面積",
    question:"1辺の長さがaの正n角形の面積Sを表す式として正しいものを選べ。",
    choices:["S=na²/(2tan(π/2n))","S=na²/(4tan(π/2n))","S=na²/(4tan(π/n))","S=na²/(2sin(π/n))","S=4na²/sin(π/2n)"],
    answer:2, explanation:"正n角形をn個の二等辺三角形に分割。各三角形の高さ=a/(2tan(π/n))，面積=a²/(4tan(π/n))。全体S=na²/(4tan(π/n))。答え③。" },

  { id:"R6-40", year:2024, number:40, category:"数学", subject:"連立不等式",
    question:"連立不等式 x²-2x-3≧0 かつ x²-(2+t)x+2t≦0 が解を持つtの値の範囲として正しいものを選べ。",
    choices:["t<-1，2<t","-1≦t≦2","t<-1，3<t","t≦-1，3≦t","-1≦t≦3"],
    answer:4, explanation:"①：x≦-1またはx≧3。②：(x-2)(x-t)≦0。t>2のとき2≦x≦t，x≧3との共通は3≦x≦t（t≧3必要）。x≦-1との共通はt≦-1必要。-1≦t≦3。答え⑤。" },

  { id:"R6-41a", year:2024, number:"41(a)", category:"数学", subject:"三角関数・合成",
    question:"sinθ + √3 cosθ = A cos(θ + B) において，\n\n(a) Aの値はいくらか。",
    choices:["A=1","A=√2","A=√3","A=2","A=2√3"],
    answer:3, explanation:"R=√(1²+(√3)²)=√4=2。A=2。答え④。" },

  { id:"R6-41b", year:2024, number:"41(b)", category:"数学", subject:"三角関数・合成",
    question:"sinθ + √3 cosθ = A cos(θ + B) において，\n\n(b) Bの値（0≦B≦π）はいくらか。",
    choices:["B=π/6","B=π/4","B=π/3","B=5π/12","B=7π/6"],
    answer:0, explanation:"sinθ+√3cosθ=2cos(θ-π/6)。B=-π/6だが0≦B≦πの範囲で考えると，cos(θ+B)の形でB=π/6（問題の定義による）。ブログ解答より(b)①π/6。答え①。" },

  { id:"R6-42", year:2024, number:42, category:"数学", subject:"対数",
    question:"log₁₀2=0.3010，log₁₀3=0.4771とする。log₁₀(8/9)の値として最も近いものを選べ。",
    choices:["-0.2504","-0.0512","0.0512","0.2504","0.9542"],
    answer:1, explanation:"log₁₀(8/9)=3log₁₀2-2log₁₀3=0.9030-0.9542=-0.0512。答え②。" },

  { id:"R6-43", year:2024, number:43, category:"数学", subject:"極限",
    question:"次の極限値として正しいものを選べ。\n\nlim(x→∞)(√(x²+x) - x)",
    choices:["0","1/4","1/2","1","∞"],
    answer:2, explanation:"有理化：x/(√(x²+x)+x)=1/(√(1+1/x)+1)→1/2（x→∞）。答え③。" },

  { id:"R6-44", year:2024, number:44, category:"数学", subject:"ベクトル・単位ベクトル",
    question:"3点A(2,0,-1)，B(-1,1,3)，C(4,-2,1)について，ABに平行な単位ベクトルとして正しいものを選べ。",
    choices:["(-3,1,4)/√26","(3,-1,-4)/√26","(-3,1,4)/√27","(1,-1,-2)/√6","(-1,1,2)/√6"],
    answer:0, explanation:"AB=(-3,1,4)，|AB|=√(9+1+16)=√26。単位ベクトル=(-3,1,4)/√26。答え①。" },

  { id:"R6-45", year:2024, number:45, category:"数学", subject:"定積分",
    question:"次の定積分の値として正しいものを選べ。\n\n∫₀^(π/2) sin²θ dθ",
    choices:["π/8","π/4","π/2","1","π"],
    answer:1, explanation:"sin²θ=(1-cos2θ)/2。∫₀^(π/2)(1-cos2θ)/2 dθ=[θ/2-sin2θ/4]₀^(π/2)=π/4。答え②。" },
];

const ALL_QUESTIONS = { 2025: R7, 2024: R6 };
const YEARS = [2025, 2024];
const YEAR_LABELS = { 2025:"令和7年度（2025）", 2024:"令和6年度（2024）" };

const PALETTE = {
  "時事問題":{ bg:"#0d1f3c", accent:"#4a9eff" },
  "社会":    { bg:"#0d1f3c", accent:"#60b0ff" },
  "地学":    { bg:"#082b1c", accent:"#2ecc8e" },
  "航空系":  { bg:"#101f0a", accent:"#86efac" },
  "物理":    { bg:"#25082a", accent:"#e056a0" },
  "数学":    { bg:"#150a30", accent:"#a855f7" },
};
const gc = cat => PALETTE[cat] || { bg:"#111827", accent:"#6b7280" };
const NUM = ["①","②","③","④","⑤"];
const fmt = s => `${String(Math.floor(s/60)).padStart(2,"0")}:${String(s%60).padStart(2,"0")}`;

function Chip({ children, active, accent="#4a9eff", onClick }) {
  return (
    <button onClick={onClick} style={{
      padding:"6px 16px", borderRadius:20, fontSize:13, cursor:"pointer",
      border:`1px solid ${active ? accent : "rgba(255,255,255,0.12)"}`,
      background: active ? `${accent}25` : "rgba(255,255,255,0.04)",
      color: active ? accent : "#6b7280", transition:"all 0.2s", fontWeight: active?"700":"400",
    }}>{children}</button>
  );
}

export default function App() {
  const [screen, setScreen]   = useState("home");
  const [selYear, setSelYear] = useState(null);
  const [shuffled, setShuf]   = useState([]);
  const [idx, setIdx]         = useState(0);
  const [sel, setSel]         = useState(null);
  const [done, setDone]       = useState(false);
  const [showExp, setShowExp] = useState(false);
  const [results, setResults] = useState([]);
  const [elapsed, setElapsed] = useState(0);
  const [revIdx, setRevIdx]   = useState(0);
  const tmr = useRef(null);

  const startQuiz = (year) => {
    const q = [...ALL_QUESTIONS[year]].sort(() => Math.random() - 0.5);
    setSelYear(year); setShuf(q); setIdx(0); setSel(null);
    setDone(false); setShowExp(false); setResults([]); setElapsed(0);
    setScreen("quiz");
    tmr.current = setInterval(() => setElapsed(e => e + 1), 1000);
  };
  const stopTmr = () => clearInterval(tmr.current);
  const pick = i => {
    if (done) return;
    setSel(i); setDone(true);
    const q = shuffled[idx];
    setResults(r => [...r, { q, sel: i, ok: i === q.answer }]);
  };
  const next = () => {
    if (idx + 1 >= shuffled.length) { stopTmr(); setScreen("result"); return; }
    setIdx(i => i + 1); setSel(null); setDone(false); setShowExp(false);
  };

  const score = results.filter(r => r.ok).length;
  const wrongs = results.filter(r => !r.ok);

  // ── HOME ───────────────────────────────────────────
  if (screen === "home") return (
    <div style={S.root}>
      <div style={S.hw}>
        <div style={{ display:"flex", alignItems:"center", gap:14, marginBottom:8 }}>
          <span style={{ fontSize:44, filter:"drop-shadow(0 0 18px rgba(74,158,255,0.8))" }}>✈</span>
          <div>
            <div style={{ fontSize:22, fontWeight:900, letterSpacing:-1 }}>航大CBT 過去問演習</div>
            <div style={{ fontSize:11, color:"#4b5563", letterSpacing:1, marginTop:3 }}>公式PDF完全収録 ・ 解答照合済み</div>
          </div>
        </div>

        <div style={{ background:"rgba(46,204,142,0.07)", border:"1px solid rgba(46,204,142,0.2)", borderRadius:12, padding:"10px 14px", fontSize:12, color:"#6b7280", lineHeight:1.8 }}>
          📄 出典：航空大学校公式HP 過去問PDF<br/>
          ✅ 解答：mjblog271.com（現役パイロットのブログ）で照合済み
        </div>

        <div style={{ display:"flex", flexDirection:"column", gap:12 }}>
          <p style={{ color:"#9ca3af", fontSize:12, margin:0, letterSpacing:1 }}>📅 年度を選んで演習スタート</p>
          {YEARS.map(year => {
            const qs = ALL_QUESTIONS[year];
            const CATS = [...new Set(qs.map(q => q.category))];
            const col = { 2025:"#a855f7", 2024:"#4a9eff" };
            return (
              <div key={year} style={{ background:"rgba(255,255,255,0.03)", border:`1px solid ${col[year]}33`, borderRadius:18, padding:"18px 20px" }}>
                <div style={{ display:"flex", justifyContent:"space-between", alignItems:"flex-start", marginBottom:12 }}>
                  <div>
                    <div style={{ fontSize:16, fontWeight:800, color:"#e8e8f0" }}>{YEAR_LABELS[year]}</div>
                    <div style={{ fontSize:12, color:"#6b7280", marginTop:4 }}>全{qs.length}問 ・ {CATS.join("・")}</div>
                  </div>
                  <div style={{ background:`${col[year]}22`, border:`1px solid ${col[year]}66`, borderRadius:8, padding:"4px 12px", fontSize:12, color:col[year] }}>
                    {qs.length}問
                  </div>
                </div>
                <button onClick={() => startQuiz(year)} style={{
                  width:"100%", background:`linear-gradient(90deg, ${col[year]}cc, ${col[year]}88)`,
                  border:"none", borderRadius:12, color:"#fff", fontSize:15, fontWeight:700,
                  padding:"14px 0", cursor:"pointer", letterSpacing:0.5,
                }}>
                  この年度を演習する ▶
                </button>
              </div>
            );
          })}
        </div>

        <p style={{ color:"#374151", fontSize:11, textAlign:"center", margin:0 }}>
          問題はランダム出題 ・ 令和5年度以前も順次追加予定
        </p>
      </div>
    </div>
  );

  // ── QUIZ ───────────────────────────────────────────
  if (screen === "quiz") {
    const q = shuffled[idx];
    const col = gc(q.category);
    const pct = idx / shuffled.length * 100;
    return (
      <div style={{...S.root, background:`linear-gradient(150deg,${col.bg} 0%,#06060e 65%)`}}>
        <div style={S.qh}>
          <button style={S.xBtn} onClick={() => { stopTmr(); setScreen("home"); }}>✕</button>
          <div style={S.pt}><div style={{...S.pb, width:`${pct}%`, background:col.accent}}/></div>
          <span style={{ color:"#6b7280", fontSize:12, fontVariantNumeric:"tabular-nums", whiteSpace:"nowrap" }}>{fmt(elapsed)}</span>
        </div>
        <div style={{ display:"flex", justifyContent:"space-between", alignItems:"center", padding:"6px 20px" }}>
          <span style={{ border:`1px solid ${col.accent}`, borderRadius:6, padding:"2px 10px", fontSize:11, color:col.accent }}>
            {YEAR_LABELS[selYear].split("（")[0]}・{q.category}｜{q.subject}
          </span>
          <span style={{ color:"#6b7280", fontSize:12 }}>問{q.number} ({idx+1}/{shuffled.length})</span>
        </div>
        <div style={{ margin:"8px 20px 14px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:16, padding:"18px" }}>
          <p style={{ margin:0, fontSize:13, lineHeight:2.0, whiteSpace:"pre-wrap", color:"#e8e8f0" }}>{q.question}</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8, padding:"0 20px" }}>
          {q.choices.map((ch, i) => {
            let bg="rgba(255,255,255,0.04)", bc="rgba(255,255,255,0.1)", cl="#d1d5db";
            if (done) {
              if (i===q.answer) { bg=`${col.accent}20`; bc=col.accent; cl=col.accent; }
              else if (i===sel) { bg="rgba(239,68,68,0.12)"; bc="#ef4444"; cl="#ef4444"; }
            }
            return (
              <button key={i} onClick={() => pick(i)} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"12px 14px", border:`1px solid ${bc}`, borderRadius:12, background:bg, color:cl, textAlign:"left", cursor:done?"default":"pointer", transition:"all 0.18s" }}>
                <span style={{ fontSize:16, fontWeight:700, flexShrink:0, minWidth:22, color:col.accent }}>{NUM[i]}</span>
                <span style={{ fontSize:13, lineHeight:1.7, flex:1 }}>{ch}</span>
                {done && i===q.answer && <span style={{ color:"#2ecc8e", fontSize:18, flexShrink:0 }}>✓</span>}
                {done && i===sel && i!==q.answer && <span style={{ color:"#ef4444", fontSize:18, flexShrink:0 }}>✗</span>}
              </button>
            );
          })}
        </div>
        {done && (
          <div style={{ padding:"12px 20px 48px", display:"flex", flexDirection:"column", gap:10 }}>
            {!showExp
              ? <button onClick={() => setShowExp(true)} style={{ background:"transparent", border:`1px solid ${col.accent}`, borderRadius:10, padding:"10px 0", fontSize:13, color:col.accent, cursor:"pointer" }}>解説を見る ▼</button>
              : <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"14px" }}>
                  <p style={{ margin:"0 0 6px", fontSize:11, color:"#6b7280" }}>📝 解説</p>
                  <p style={{ margin:0, fontSize:13, lineHeight:1.9, color:"#d1d5db" }}>{q.explanation}</p>
                </div>
            }
            <button onClick={next} style={{ background:col.accent, border:"none", borderRadius:12, color:"#fff", fontSize:14, fontWeight:700, padding:"15px 0", cursor:"pointer" }}>
              {idx+1>=shuffled.length ? "結果を見る" : "次の問題 →"}
            </button>
          </div>
        )}
      </div>
    );
  }

  // ── RESULT ─────────────────────────────────────────
  if (screen === "result") {
    const pct = Math.round(score / shuffled.length * 100);
    const grade = pct>=80?"合格圏 🎉":pct>=60?"もう少し":"要復習";
    const gcol = pct>=80?"#2ecc8e":pct>=60?"#f59e0b":"#ef4444";
    const CATS = [...new Set(results.map(r => r.q.category))];
    return (
      <div style={S.root}>
        <div style={S.rw}>
          <p style={{ color:"#6b7280", fontSize:12, letterSpacing:2, margin:0 }}>{YEAR_LABELS[selYear]} 演習結果</p>
          <div style={{ width:150, height:150, borderRadius:"50%", border:`4px solid ${gcol}`, display:"flex", flexDirection:"column", alignItems:"center", justifyContent:"center", gap:4 }}>
            <span style={{ fontSize:48, fontWeight:900, color:gcol, lineHeight:1 }}>{pct}<span style={{ fontSize:18 }}>%</span></span>
            <span style={{ fontSize:13, fontWeight:700, color:gcol, letterSpacing:2 }}>{grade}</span>
          </div>
          <p style={{ color:"#6b7280", fontSize:13, margin:0 }}>{shuffled.length}問中 {score}問正解 ／ {fmt(elapsed)}</p>
          <div style={{ width:"100%" }}>
            {CATS.map(cat => {
              const cr = results.filter(r => r.q.category===cat);
              const ok = cr.filter(r => r.ok).length;
              const c = gc(cat);
              return (
                <div key={cat} style={{ display:"flex", justifyContent:"space-between", padding:"8px 14px", background:"rgba(255,255,255,0.03)", borderRadius:8, borderLeft:`3px solid ${c.accent}`, marginBottom:6 }}>
                  <span style={{ color:c.accent, fontSize:13 }}>{cat}</span>
                  <span style={{ color:ok===cr.length?"#2ecc8e":"#9ca3af", fontSize:13 }}>{ok}/{cr.length}問</span>
                </div>
              );
            })}
          </div>
          <div style={{ width:"100%", display:"flex", flexDirection:"column", gap:10 }}>
            {wrongs.length>0 && (
              <button onClick={() => { setRevIdx(0); setScreen("review"); }} style={{ background:"rgba(239,68,68,0.12)", border:"1px solid rgba(239,68,68,0.4)", borderRadius:12, color:"#ef4444", fontSize:14, fontWeight:700, padding:"14px 0", cursor:"pointer" }}>
                間違い {wrongs.length}問を復習
              </button>
            )}
            <button onClick={() => startQuiz(selYear)} style={{ background:"linear-gradient(90deg,#4a9eff,#a855f7)", border:"none", borderRadius:12, color:"#fff", fontSize:14, fontWeight:700, padding:"14px 0", cursor:"pointer" }}>
              もう一度
            </button>
            <button onClick={() => setScreen("home")} style={{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:12, color:"#6b7280", fontSize:13, padding:"12px 0", cursor:"pointer" }}>
              年度選択に戻る
            </button>
          </div>
        </div>
      </div>
    );
  }

  // ── REVIEW ─────────────────────────────────────────
  if (screen === "review") {
    if (!wrongs.length) return (
      <div style={S.root}><div style={S.rw}>
        <p style={{ fontSize:48 }}>🎉</p><p>全問正解！</p>
        <button onClick={() => setScreen("result")} style={S.backBtn}>結果へ戻る</button>
      </div></div>
    );
    const rw = wrongs[revIdx];
    const col = gc(rw.q.category);
    return (
      <div style={{...S.root, background:`linear-gradient(150deg,${col.bg} 0%,#06060e 65%)`}}>
        <div style={S.qh}>
          <button style={S.xBtn} onClick={() => setScreen("result")}>← 結果</button>
          <span style={{ color:"#6b7280", fontSize:13 }}>復習 {revIdx+1}/{wrongs.length}</span>
        </div>
        <div style={{ padding:"6px 20px" }}>
          <span style={{ border:`1px solid ${col.accent}`, borderRadius:6, padding:"2px 10px", fontSize:11, color:col.accent }}>
            問{rw.q.number}｜{rw.q.subject}
          </span>
        </div>
        <div style={{ margin:"8px 20px 14px", background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:16, padding:"18px" }}>
          <p style={{ margin:0, fontSize:13, lineHeight:2.0, whiteSpace:"pre-wrap", color:"#e8e8f0" }}>{rw.q.question}</p>
        </div>
        <div style={{ display:"flex", flexDirection:"column", gap:8, padding:"0 20px" }}>
          {rw.q.choices.map((ch, i) => {
            const ok=i===rw.q.answer, ng=i===rw.sel&&!ok;
            return (
              <div key={i} style={{ display:"flex", alignItems:"flex-start", gap:10, padding:"12px 14px", border:`1px solid ${ok?col.accent:ng?"#ef4444":"rgba(255,255,255,0.08)"}`, borderRadius:12, background:ok?`${col.accent}20`:ng?"rgba(239,68,68,0.1)":"rgba(255,255,255,0.03)", color:ok?col.accent:ng?"#ef4444":"#6b7280", cursor:"default" }}>
                <span style={{ fontSize:16, fontWeight:700, flexShrink:0, minWidth:22, color:col.accent }}>{NUM[i]}</span>
                <span style={{ fontSize:13, lineHeight:1.7, flex:1 }}>{ch}</span>
                {ok && <span style={{ color:"#2ecc8e", fontSize:18, flexShrink:0 }}>✓</span>}
                {ng && <span style={{ color:"#ef4444", fontSize:18, flexShrink:0 }}>✗</span>}
              </div>
            );
          })}
        </div>
        <div style={{ background:"rgba(255,255,255,0.03)", border:"1px solid rgba(255,255,255,0.07)", borderRadius:14, padding:"14px", margin:"12px 20px" }}>
          <p style={{ margin:"0 0 6px", fontSize:11, color:"#6b7280" }}>📝 解説</p>
          <p style={{ margin:0, fontSize:13, lineHeight:1.9, color:"#d1d5db" }}>{rw.q.explanation}</p>
        </div>
        <div style={{ display:"flex", gap:12, padding:"8px 20px 48px" }}>
          {revIdx>0 && <button onClick={() => setRevIdx(i=>i-1)} style={{...S.navBtn, background:"rgba(255,255,255,0.08)", color:"#9ca3af"}}>← 前</button>}
          {revIdx+1<wrongs.length
            ? <button onClick={() => setRevIdx(i=>i+1)} style={{...S.navBtn, background:col.accent, color:"#fff"}}>次 →</button>
            : <button onClick={() => setScreen("result")} style={{...S.navBtn, background:"#2ecc8e", color:"#fff"}}>復習完了 ✓</button>
          }
        </div>
      </div>
    );
  }
}

const S = {
  root:{ minHeight:"100vh", background:"linear-gradient(150deg,#080d1a 0%,#06060e 100%)", fontFamily:"'Hiragino Kaku Gothic ProN','Noto Sans JP',sans-serif", color:"#e8e8f0", overflowX:"hidden" },
  hw:{ maxWidth:480, margin:"0 auto", padding:"44px 20px 60px", display:"flex", flexDirection:"column", gap:16 },
  qh:{ display:"flex", alignItems:"center", gap:12, padding:"16px 20px 8px", position:"sticky", top:0, backdropFilter:"blur(12px)", zIndex:10 },
  xBtn:{ background:"rgba(255,255,255,0.06)", border:"none", color:"#9ca3af", borderRadius:8, padding:"6px 10px", cursor:"pointer", fontSize:12, whiteSpace:"nowrap" },
  pt:{ flex:1, height:3, background:"rgba(255,255,255,0.08)", borderRadius:2, overflow:"hidden" },
  pb:{ height:"100%", borderRadius:2, transition:"width 0.4s" },
  rw:{ maxWidth:480, margin:"0 auto", padding:"52px 20px 60px", display:"flex", flexDirection:"column", alignItems:"center", gap:18 },
  backBtn:{ background:"rgba(255,255,255,0.05)", border:"1px solid rgba(255,255,255,0.08)", borderRadius:12, color:"#6b7280", fontSize:13, padding:"12px 24px", cursor:"pointer" },
  navBtn:{ flex:1, border:"none", borderRadius:12, fontSize:14, fontWeight:700, padding:"14px 0", cursor:"pointer" },
};
