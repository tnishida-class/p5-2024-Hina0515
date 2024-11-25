// 練習問題「心臓の鼓動のように大きくなったり小さくなったりする円」

let count= 0;
let cycle= 100;
let size = 50;
let increment = 1;

function setup(){
createCanvas(200, 200);
}

function draw(){
background(160, 192, 255);
count = (count + increment) % cycle; // 「count + 1 を cycleで割ったあまり」をcountに代入。
if (count < cycle / 2){size = count + 50;} else {size = (cycle - count) + 50;} // countが0~49のときはsizeが50~99, countが50~100のときはsizeが100~50になること
if (keyIsPressed) { increment = 2; } else { increment = 1; } //要改善

ellipse(width / 2, height / 2, size); // sizeは円の直径と定義
}
