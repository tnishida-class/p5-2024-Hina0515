// ダーツ
let cx, cy;//cxとcyの変数をdrawCircle関数およびdrawArcs関数内で参照できるように

function setup() {
  const green = color(0, 255, 0);// 緑色、　const=定数を宣言＝再代入できない、★constで宣言された変数はブロックスコープ（{ }で囲まれた範囲内）でのみ有効
  const red = color(255, 0, 0);// 赤色
  const black = color(0);// 黒色
  const cream = color(242, 212, 147);// クリーム色
  createCanvas(400, 400);// キャンバス作成
  background(255);// 背景色を白に設定
  stroke(255);// 枠線を白に設定
  strokeWeight(3); // 枠線の太さを3に設定

  cx = width / 2; // 中心は (cx, cy)
  cy = height / 2;
  const maxR = min(width, height); // 大きさは幅と高さのうち小さい方、最大直径が幅や高さの大きさを超えないようにする

  drawCircle(black, maxR);// 黒い一番大きな円を書く
  drawArcs(green, red, maxR * 0.8);// 一番大きな円の0.8倍の円を書く
  // BLANK[1] (hint: drawArcs x 3, drawCircle x 1)
  drawArcs(cream, black, maxR * 0.75); //このあたりの倍数は、予想
drawArcs(green, red, maxR * 0.5);
drawArcs(cream, black, maxR * 0.45);
drawCircle(green, maxR * 0.1);
drawCircle(red, maxR * 0.05);
}

function drawCircle(c, r){// cという色で、直径はr
  fill(c);// cで塗りつぶす
  ellipse(cx, cy, r, r);// 円（中心のx座標、中心のy座標、幅、高さ）
}

function drawArcs(c1, c2, r) {
  for (let i = 0; i < 20; i++) {// iは0~19で繰り返し
    let start = TWO_PI / 20 * i;// 円弧の開始角度、TWO_PIは2π＝360°のこと,20で割ることで円を20等分
    let stop = TWO_PI / 20 * (i + 1);//円弧の終了角度
    fill(i % 2 == 0 ? c1 : c2);// ?はif-elseの省略系。iが偶数うならc1、奇数ならc2で塗りつぶす。
    arc(cx, cy, r, r, start, stop, PIE);
    //arc() は円弧を描画する関数 / cx と cy は円の中心の座標（x, y）です / r は円の直径で、ここでは幅と高さが同じなので円になります。/ start と stop は、円弧の開始角度と終了角度を指定します（ラジアン単位）。/ PIE は、円弧を扇形の形状で描画するモードです（中心から円周まで線を引いて描画）。
  }
}
