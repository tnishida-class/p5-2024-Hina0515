// テキスト「配列」～「配列を使った描画」までを収録
function setup(){
  createCanvas(400, 400);
  background(240);

  // 配列をランダムに初期化する
  let scores = [];
  for(let i = 0; i < 10; i++){
    scores[i] = random(20, 100); // 20以上100未満のランダムな数を代入、N番目に値を上書き代入する
  }
  console.log(scores);

  // 合計を計算する
  let sum = 0;
  for(let i = 0; i < scores.length; i++){　
    //scores.length=配列の長さ
    sum += scores[i];//scores配列のi番目がsumに可算
  }
  console.log(sum);

  // ここから平均・最大・最小を求めます
  let average = sum / scores.length;
  // BLANK[1]　平均値（ヒント average = 合計 / 配列の長さ）

  let largest = 0;
  for(let i = 0; i < scores.length; i++){
    if (largest < scores[i]){
      largest = scores[i];
    }
    // BLANK[2]　ヒント：今までの最大値 largest と scores[i] を比較する
  }

  let smallest = 100;
  for(let i = 0; i < scores.length; i++){
    if (scores[i] < smallest) {
      smallest = scores[i];
    }
    // BLANK[3]　ヒント：最小値とだいたい同じ
  }

  // ここから棒グラフを描いていきます。まずは背景に横線をn本引く
  const n = 10;
  for(let i = 0; i < n; i++){ line(0, height * i / n, width, height * i / n); }

  noStroke();
  for(let i = 0; i < scores.length; i++){
    const dx = width / scores.length; //棒の幅（固定）
    const h = height * scores[i] / 100;　//棒の高さ（点数に比例）
   // BLANK[4] ヒント: 条件分岐を使って色を変更します
   if (scores[i] === largest) {
    fill(255, 0, 0);
  } else if (scores[i] === smallest) {
    fill(0, 0, 255);
  } else {
    fill(122);
  }
    rect(i * dx + 2, height - h, dx - 4, h);
    //rect(x, y, w, h); x: 四角形の左上隅の横位置（X座標） y: 四角形の左上隅の縦位置（Y座標） w: 四角形の幅 h: 四角形の高さ
    fill(0);
    text(scores[i].toPrecision(3), i * dx, height - h);//3桁まで　x,y
  }
  // BLANK[5] 平均点の線を引きます
  stroke(0, 255, 0);
  const ah = height * average/100
  line(0, height -  ah, width, height-ah);//始まりの座標と終わりの座標
}