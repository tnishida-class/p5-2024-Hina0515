// テキスト「キーボード操作に反応する」
let x, y;
let jumpSpeed = 15;      // ジャンプの速度
let gravity = 1;         // 重力の加速度
let velocity = 0;        // 垂直方向の速度

function setup(){
  createCanvas(windowWidth, windowHeight);
  x = width / 2;
  y = height / 2;
}

function draw(){
  background(160, 192, 255);
 
   if(keyIsDown(32)){       // スペースキーが押されたときジャンプ
    if(y === height - 25){
        velocity = jumpSpeed;
        y -= velocity*20    ; }}
    else {
      if(y >= height - 25) { 
    y = height - 25;     // 地面に固定
    velocity = 0;        // 地面での垂直方向の速度をリセット
     } else {
    velocity += gravity; // 空中では重力を適用
    y += velocity;   }}// 垂直方向の位置を更新

  ellipse(x, y, 50);{
  if(keyIsDown(LEFT_ARROW)){ x -= 5; }
  if(keyIsDown(RIGHT_ARROW)){ x += 5; }
  if(keyIsDown(UP_ARROW)){ y -= 5; }
  if(keyIsDown(DOWN_ARROW)){ y += 5; }
  if(keyIsDown("A".charCodeAt(0))){ x+= 10; }
  if(keyIsDown("B".charCodeAt(0))){ x-= 10; }
  }
  x = constrain(x, 0, width);
  y = constrain(y, 0, height - 25);
}

// イベントハンドラを使用するパターン
// function keyPressed(){
//   if(keyCode == LEFT_ARROW){ x -= 5; }
//   else if(keyCode == RIGHT_ARROW){ x+= 5; }
//   else if(keyCode == DOWN_ARROW){ y += 5; }
//   else if(keyCode == UP_ARROW){ y -= 5; }
//   else if(key == "A"){ x += 10; }
// }


function windowResized(){
  resizeCanvas(windowWidth, windowHeight); 
}


 