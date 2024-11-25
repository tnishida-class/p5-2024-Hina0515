// 小手調べ
function setup(){
  createCanvas(120,120);
  background(255);
  noFill();
  for(let i = 0; i < 10; i++){
    let d = (i + 1)*10;
    console.log(d);
    
    if(i < 5){
      stroke(0,0,255);

    } else{
      stroke(255,0,0);

    }
  ellipse(60,60,d);
  }
}

