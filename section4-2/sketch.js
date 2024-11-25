//　テキスト「オブジェクト」
// 練習問題：ボールのサイズをランダムに変更してみよう
// 練習問題：何も操作しなくてもボールが湧いてくる機能を追加しよう

let balls;

function setup() {
  createCanvas(windowWidth, windowHeight);
  balls = [];
}

function draw() {
  background(160, 192, 255);

  if (frameCount % 60 === 0) {///60フレームごと（約１秒）に処理を実行
    const b = {
      x: random(width),
      y: random(height),//画面上のランダムな位置
      size: random(10, 40),
      vx: random(-5, 5),
      vy: random(-5, 5)//水平、垂直方向にランダムな速度
    };
    balls.push(b);//作成したボールオブジェクトを balls 配列に追加
  }

  for (let i = 0; i < balls.length; i++) {//balls.length=ボールの数,すべてのボールを描画し、速度の分だけ移動させる
    let b = balls[i];//i番目のボール
    ellipse(b.x, b.y, b.size);
    b.x += b.vx;//前の位置＋動いた距離
    b.y += b.vy;

  }
}

  function mouseDragged() { // ドラックされたらボールを増やす
    const dx = mouseX - pmouseX;//横方向の動き
    const dy = mouseY - pmouseY;//縦方向の動き
    if (mag(dx, dy) > 5) { // mag(dx, dy)はベクトル(dx, dy)の長さ動きが小さいときは無視して、意図しないボール生成を防止
    const b = { x: mouseX, y: mouseY, size: random(5, 50), vx: dx, vy: dy };//ボールの速度をマウスの動き (dx, dy) に基づいて設定。マウスを動かした方向と速度が、ボールの動きに反映
     balls.push(b); } }
    


// function draw() {
//   if (mouseDragged()) {// ドラッグされたらボールを増やす,マウスボタンが押されながらカーソルが動いたときに自動的に呼び出される
//     const dx = mouseX - pmouseX;//現在のマウスのｘ座標-前フレームのマウスのｘ座標
//     const dy = mouseY - pmouseY;
//     if (mag(dx, dy) > 5) {//mag(x,y) はベクトル(x,y)の長さ
//       const b = { x: mouseX, y: mouseY, size: 20, vx: dx, vy: dy };
      //x と y: ボールの初期位置（現在のマウス座標）。
      //size: ボールのサイズ（直径20）。
      //vx と vy: ボールの初期速度（マウスの移動速度に基づくx方向とy方向の速度）。
      //dx=平行方向の移動量　dy=垂直方向の移動量
     // balls.push(b);
   
      function windowResized() {
        resizeCanvas(windowWidth, windowHeight);
      }
