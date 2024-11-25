// バーレーン国旗
function setup(){
  const red = color('#CE1126');
  const white = color('#FFFFFF');
  createCanvas(400, 400);
  noStroke();
  
  // 左側の白い部分を描画
  fill(white);
  rect(0, 0, 400, 240);//rect(長方形の左上の頂点のx座標（横方向の位置）, 長方形の左上の頂点のy座標（縦方向の位置）, 長方形の幅（横の長さ）, 長方形の高さ（縦の長さ）)
  
  // 右側の赤い部分を描画
  fill(red);
  rect(100, 0, 300, 240);
  
  // 白い三角形を描画
  fill(white);
  let triangleHeight = 240 / 5; // 各三角形の高さを設定
  let triangleWidth = 60; // 各三角形の幅を設定
  
  for (let i = 0; i < 5; i++) {
  // 各三角形のx, y座標を繰り返し描画
  let x1 = 100;
  let y1 = i * triangleHeight;
  let x2 = 100 + triangleWidth;
  let y2 = y1 + triangleHeight / 2;
  let y3 = y1 + triangleHeight;
  
  // 三角形を描画
  triangle(x1, y1, x2, y2, x1, y3);//x1, y1: 1つ目の頂点の座標 / x2, y2: 2つ目の頂点の座標 / x3, y3: 3つ目の頂点の座標
  }
  }

  
