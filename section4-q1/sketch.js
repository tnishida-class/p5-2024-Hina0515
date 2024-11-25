// テキスト「配列を使った描画」練習問題：折れ線グラフ

function setup() {
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for (let i = 0; i < 10; i++) {
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入
  }

  // 横線を引く
  const n = 10;
  for (let i = 0; i < n; i++) { line(0, height * i / n, width, height * i / n); }

  // ここからが本番
  fill(0);
  const dx = width / scores.length;//棒の幅（固定）
  let px, py; // 線を引くために一つ前の点を覚えておく変数
  for (let i = 0; i < scores.length; i++) {
    // BLANK[1]
    const x = i * dx + dx / 2; // 各棒の中央のx座標
    const y = height - (height * scores[i] / 100); // スコアに基づくy座標（スコアが高いほど上）
    if (i > 0) {
      // i > 0 の場合、一つ前の点(px, py)から現在の点(x, y)に線を引く
      stroke(0);//線の色
      line(px, py, x, y);
    }
    // 現在の点を記録（次のループで使用）
    px = x;
    py = y;

    // 点を描画
    noStroke();//図形の輪郭線をなくす
    ellipse(x, y, 10, 10); // 各スコア位置に小さな点を描く
  }
}
