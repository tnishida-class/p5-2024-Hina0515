// テキスト「関数を使う」
// 練習問題：このプログラムを改造してEUの旗を描いてみよう
function setup(){
  createCanvas(200, 200);
  background(0, 51, 153);
  for(let i = 0; i < 12; i++){
    let theta = TWO_PI * i / 12;
    let x = 100 + cos(theta) * 50;//半径50、 100はキャンパス中央
    let y = 100 + sin(theta) * 50;
    fill(255, 204,0);
    noStroke();//星の外周の線を非表示
    star(x, y, 10);
    
  }
}

function star(cx, cy, r){
  beginShape();//複雑な形状を描画するための命令
  for(var i = 0; i < 5; i++){//ループカウンタ i を初期化
    let theta = TWO_PI * i * 2 / 5 - HALF_PI;　//五角形、星形を作るため角度は倍に広げる、-HALF_PI：星形の最初の頂点を真上（0度）に合わせるために回転
    let x = cx + cos(theta) * r;//rcosΘ 半径rの単位円
    let y = cy + sin(theta) * r;
    vertex(x,y);//星形の頂点
  }
  endShape(CLOSE);//複雑な形状を描画するための命令
}

// ヒント：section5-2 にある star 関数をここにコピーして、 draw 内で ellipse の代わりに使おう
