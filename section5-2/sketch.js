// テキスト「関数を作る(1) 引数のある関数」
// 練習問題：星を描く関数を改造して正N角形を描画する関数を作ってみよう
function setup() {
  createCanvas(400, 100);
  background(200);
  fill(0);//塗りつぶしは黒
  crossmark(10, 10, 90, 90);//左上の座標 (10, 10) と右下の座標 (90, 90) を結んだ × 印を描画
  ngmark(150, 50, 80);//中心 (150, 50) を中心とし、直径 80 の円に囲まれた × 印を描画
  star(250, 50, 40);//中心 (250, 50) を中心に半径 40 の星形を描画
  ngon(7, 350, 50, 40)//中心 (350, 50) を中心に半径 40 の正七角形を描画
}

function crossmark(x1, y1, x2, y2) {
  line(x1, y1, x2, y2);//(x1, y1) と (x2, y2) を結ぶ直線
  line(x2, y1, x1, y2);
}

function ngmark(cx, cy, r) {
  push();//現在の描画スタイル（色、線の太さなど）を保存
  noFill();//図形の塗りつぶしを無効化
  strokeWeight(r * 0.1);//線の太さを指定します。この場合、円の直径 r の 10% を線の太さとする
  let d = sqrt(r * r / 8);//r * r / 8 は、r^2 を 8 で割った値であり、それを平方根で囲むことで最終的な距離 d が求まる
  ellipse(cx, cy, r);
  line(cx - d, cy - d, cx + d, cy + d);
  pop();//ngmark関数内でスタイルを変更しても、外部の描画設定に影響を与えない
}

function star(cx, cy, r) {//r:星の頂点までの半径
  beginShape();
  for (var i = 0; i < 5; i++) {
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;//五角形、星形を作るため角度は倍に広げる、-HALF_PI：星形の最初の頂点を真上（0度）に合わせるために回転
    let x = cx + cos(theta) * r;//rcosΘ 半径rの単位円
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);
}

function ngon (n, cx, cy, r){
  beginShape();
  for (var i = 0; i < n; i++) {
    let theta = TWO_PI * i / n - HALF_PI;
    let x = cx + cos(theta) * r;//中心 (cx, cy) から、半径 r の位置にある x 座標
    let y = cy + sin(theta) * r;
    vertex(x, y);
  }
  endShape(CLOSE);//最後の頂点と最初の頂点を結び、多角形を閉じる
}