// テキスト「関数を作る(2) 結果を戻す関数」～「総仕上げ：カレンダーを描画しよう」
function setup(){
  createCanvas(200, 200);
  calendar(2019, 10);

  // isLeapYear の動作確認のため console に出力しています
  for(let i = 2000; i <= 2100; i++){
    if(isLeapYear(i)){
      console.log(i + "年はうるう年です");
    }
    else{
      console.log(i + "年はうるう年ではありません");
    }
  }
}

function calendar(y, m){
  let dow = dayOfWeek(y, m, 1);//指定した日付 (y, m, d) が週の何曜日に当たるか
  for(let d = 1; d <= daysInMonth(y, m); d++){//指定した年 y と月 m の日数を返す
    // BLANK[3] (hint: まずは daysInYear, dayOfWeek を作ろう)
  }
}

function isLeapYear(y){
  return (y % 4 == 0) && (y % 100 != 0) || (y % 400 == 0);
}

//西暦年が4で割り切れる年は(原則として)閏年。
//ただし、西暦年が100で割り切れる年は(原則として)平年。
//ただし、西暦年が400で割り切れる年は必ず閏年。

function daysInYear(y){//その年の日数を返す
  // BLANK[2]
  if (isLeapYear(y)){
    return 366;}
   else {
    return 365;
  }
}

function daysInMonth(y, m){
  if(m == 2){
    return isLeapYear(y) ? 29 : 28;
  }
  else if(m == 4 || m == 6 || m == 9 || m == 11){
    return 30;
  }
  else{
    return 31;
  }
}

let year= 2028
console. log(year + "年は" + daysInYear (year)+ "日です");

function dayOfYear(y, m, d){
  let count = 0;
  for(let i = 1; i < m; i++){
    count += daysInMonth(y, i);//1月から前の月までの日数を count に加算
  }
  return count + d;//指定された日を加える
}

function dayOfWeek(y, m, d){
  // BLANK[2]
  let totalDays = 0;

  for (let i=1970; i<y; i++){//1970から前の年までの日数
    totalDays += daysInYear(i);//うるう年なら366日をたす　totalDays= totadDays + daysInYear
  }
  //基準から数えて何日目か
   totalDays += dayOfYear(y, m, d);//指定された日 (y, m, d) がその年の何日目か、1日目を0日目としてカウントするための
   return(totalDays+3) % 7//基準日からの累積日数 totalDays、元の曜日が木曜日だから４足せば日曜日
}

function dayOfWeekAsString(dow){
  const a = ["日", "月", "火", "水", "木", "金", "土", "日"];
  return a[dow];
}

let y = 2004, m =5, d = 15;
console.log(y + "年" + m + "月" + d + "日は" + dayOfWeekAsString(dayOfWeek(y, m, d)) + "曜日です");
