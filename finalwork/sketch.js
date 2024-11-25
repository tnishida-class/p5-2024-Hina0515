// 最終課題を制作しよう

// let items;// テキストのリスト
// let animationStep = 0; // アニメーションの進行状態

// // アニメーションに関する設定をまとめた
// let アニメーション設定;

// function setup() {
//   createCanvas(windowWidth, windowHeight);

//   // アニメーションの初期設定
//   アニメーション設定 = {
//     arrow: "⇐", // 矢印の初期値
//     原爆: {// 原爆の位置と速度
//       xStart: width * 0.7,// 原爆の初期位置
//       xTarget: width * 0.2, // 左寄せの最終位置
//       moveSpeed: 5, // 左寄せの最終位置
//       done: false // アニメーション完了フラグ
//     }, // 原爆の位置と速度
//     水爆: {
//       size: 0,// 水爆のサイズ（最初は0）
//       growthSpeed: 2,// サイズの成長速度
//       y: -100, // 水爆のY位置（画面外から開始）
//       done: false // アニメーション完了フラグ
//     }
//   };

//     // テキスト設定
//   items = [
//     { x: 0.2, y: 0.4, text: "ヒロシマ", size: 40 },
//     { x: 0.2, y: 0.5, text: "ナガサキ", size: 40 },
//     { x: 0.8, y: 0.45, text: "アメリカ", size: 50 },
//     { x: 0.5, y: 0.45, text: "⇐", size: 30 }, // 矢印
//     { x: 0.7, y: 0.65, text: "原爆", size: 50 } // 原爆
//   ];
// }

// // // 文字の位置と内容を設定（固定の座標）
// // const テキスト設定 = [
// //   { x: 0.2, y: 0.4, text: "ヒロシマ", size: 40 },
// //   { x: 0.2, y: 0.5, text: "ナガサキ", size: 40 },
// //   { x: 0.8, y: 0.45, text: "アメリカ", size: 50 },
// // ];

// // let テキスト設定 = [
// //   { x: 0.5, y: 0.45, text: "⇐", size: 30 }, // 「⇐」を変化させる対象
// //   { x: 0.5, y: 0.65, text: "原爆", size: 50 }, // 「原爆」を動かす対象
// //   { x: 0.8, y: 0.65, text: "水爆", size: 50, alpha: 0 } // 「水爆」を出現させる対象
// // ];


// function draw() {
//   background(255, 100, 100);// 背景を赤く設定

//   if (animationStep === 0) {
//     drawInitialAnimations(); // 最初のアニメーション
//   } else if (animationStep === 1) {
//     drawX(); // ✕の表示
//   } else if (animationStep === 2) {
//     drawSimultaneousAnimations(); // 次のアニメーション（＝、水爆、原爆の移動）
//   }
// }

// //   // テキストを描画（最初の設定）
// //   for (let i = 0; i < items.length; i++) {
// //     let item = items[i];
// //     textSize(item.size);
// //     textAlign(CENTER, CENTER);
// //     text(item.text, item.x * width, item.y * height);
// //   }
// // }

// // 最初のアニメーション
// function drawInitialAnimations() {
//   // 「ヒロシマ」「ナガサキ」「アメリカ」などを描画
//   for (let i = 0; i < items.length; i++) {
//     let item = items[i];
//     textSize(item.size);
//     textAlign(CENTER, CENTER);
//     text(item.text, item.x * width, item.y * height);
//   }

// // 「✕」を画面中央に表示する
// function drawX() {
//   textSize(100);
//   textAlign(CENTER, CENTER);
//   text("✕", width / 2, height / 2); // 直接中央に表示

//   // 1秒後に次のアニメーションへ進む
//   if (frameCount % 60 === 0) {
//     animationStep = 1; // 1秒後に次のアニメーションへ進む
//   }
// }

// // 「⇐」を「＝」に変えるアニメーション
// function drawArrowChange() {
//   textSize(50);
//   textAlign(CENTER, CENTER);
//   text(アニメーション設定.arrow, width / 2, height / 2);

//   // 30フレームごとに矢印を変更
//   if (frameCount % 30 === 0 && アニメーション設定.arrow === "⇐") {
//     アニメーション設定.arrow = "＝"; // 「⇐」を「＝」に変更
//   }

//   // 1秒後に次のアニメーションへ進む
//   if (frameCount % 90 === 0) {
//     animationStep = 2; // 90フレーム後に次のアニメーション
//   }
// }

// // 「原爆」を左に寄せるアニメーション
// function drawHiroshimaAnimation() {
//   textSize(50);
//   textAlign(CENTER, CENTER);
//   text("原爆", アニメーション設定.原爆.xStart, height / 2);

//   // 原爆が左に移動
//   if (アニメーション設定.原爆.xStart > アニメーション設定.原爆.xTarget) {
//     アニメーション設定.原爆.xStart -= アニメーション設定.原爆.moveSpeed; // 左に移動
//   }

//   // 1秒後に次のアニメーションへ進む
//   if (frameCount % 90 === 0) {
//     animationStep = 3; // 90フレーム後に次のアニメーション
//   }
// }

// // 「水爆」の出現アニメーション
// function drawHydrogenBombAnimation() {
//   textSize(アニメーション設定.水爆.size);
//   textAlign(CENTER, CENTER);
//   text("水爆", width / 2, aアニメーション設定.水爆.y);

//   // 水爆のサイズを成長させる
//   if (アニメーション設定.水爆.size < 50) {
//     aアニメーション設定.水爆.size += アニメーション設定.水爆.growthSpeed;
//   }

//   // 水爆が画面下に出現するように移動
//   if (aアニメーション設定.水爆.y < height / 2) {
//     アニメーション設定.水爆.y += 2;
//   }
// }


// function windowResized() {
//   resizeCanvas(windowWidth, windowHeight);
// }

//よう分からんくなった！

//ここから本番です！


let 矢印 = "⇐"; // 矢印の初期値 
let 矢印色;
let 原爆X, 核実験Y;
let 核実験透明度 = 0; // 核実験の透明度を初期化
let timer = 0; // アニメーション進行を管理するタイマー

// 常に表示されるテキスト
let 常時テキスト = [
  { content: "ヒロシマ", xRatio: 0.3, yRatio: 0.4, size: 50 },
  { content: "ナガサキ", xRatio: 0.3, yRatio: 0.5, size: 50 },
  { content: "アメリカ", xRatio: 0.7, yRatio: 0.45, size: 55 },
  { content: "≪核の被害者≫", xRatio: 0.5, yRatio: 0.2, size: 50 },
  { content: "by 映画『SILENT FALLOUT』", xRatio: 0.5, yRatio: 0.8, size: 50 },
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  // 初期設定
  原爆X = width * 0.5;
  // 核実験Size = 50;
  核実験Y = height * 1.2;
  矢印色 = color(0, 0, 255); // 初期の矢印色を青に設定
}

function draw() {　
  background(100, 200, 255); // 背景をリセット
  timer++; // フレームごとにタイマーを進める

  draw放射能背景(); // 放射能背景を描画
  draw常時テキスト();// 常時テキストを描画

// 矢印のサイズを変更
let 矢印サイズ = 70; // デフォルトサイズ
if (矢印 === "＝") {
  矢印サイズ = 150; // ＝の場合は大きくする
}

  fill(矢印色); // 矢印の色を設定
  drawText(矢印, 0.5, 0.45, 矢印サイズ);//⇐を表示

  // 「✕」を表示
  if (timer >= 180 && timer < 300) {
    fill(175, 300, 50); // 黄色で表示
    drawText("✕", 0.5, 0.48, 600);
  }

  // 「原爆」を常に表示（初期位置からアニメーション）
  fill(255, 0, 0); // 赤色で表示
  drawText("原爆", 原爆X / width, 0.6, 50);

  // アニメーションの進行
  if (timer >= 300) {
    if (原爆X > width * 0.3) 原爆X -= 10; // 原爆移動範囲を調整

    // 核実験表示
    // 核実験の透明度を徐々に増加
    if (核実験透明度 < 255) 核実験透明度 += 5; // 最大値255
    // 核実験を徐々に表示
    fill(175, 300, 50, 核実験透明度); // // 黄色で透明度を指定
    drawText("核実験", 0.7, 0.6, 50);
  }
}

//// 放射能背景
function draw放射能背景() {
  textSize(100); // 放射能マークのサイズを設定
  fill(255, 255, 0, 50); // 半透明の黄色
  textAlign(CENTER, CENTER);

  // キャンバス全体に放射能マークを描画
  for (let y = 0; y < height; y += 150) {
    for (let x = 0; x < width; x +=150) {
      text("☢", x, y);
    }
  }
}

// 常時テキスト描画関数
function draw常時テキスト() {
  for (let item of 常時テキスト) {
    fill(0); // 黒色で表示
    drawText(item.content, item.xRatio, item.yRatio, item.size);
  }
}

// テキスト描画関数
function drawText(content, xRatio, yRatio, size) {
  textSize(size);
  textAlign(CENTER, CENTER);
  text(content, xRatio * width, yRatio * height);
}

// // スペースキーが押されたら矢印を変更
function keyPressed() {
  if (key === ' ') { // スペースキ ーを判定
    矢印 = "＝";
    矢印色 = color(255, 0, 0); // 赤色に変更
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);

  // ウィンドウリサイズ時に座標を再計算
  原爆X = width * 0.5;
  核実験Y = height * 1.2;
}

// if (核実験Size < 50) 核実験Size += 2; // 核実験サイズ増加
// if (核実験Y > height * 0.65) 核実験Y -= 7; // 核実験移動







