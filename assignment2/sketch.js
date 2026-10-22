//랜덤 변수들
let skyR = 240;        // 하늘색 R
let skyG = 170;        // 하늘색 G
let skyB = 150;        // 하늘색 B
let sunX = 330;        // 해 x 위치
let sunY = 200;        // 해 y 위치
let sunSize = 40;      // 해 크기
let mountain1 = 90;    // 왼쪽 산 높이
let mountain2 = 60;    // 오른쪽 산 높이
let groundG = 120;     // 땅 초록 정도

//플래시 
let flash = 0;         

function setup() {
  createCanvas(600, 400);
}

function draw() {
  background(230);
  noStroke();

  //셔터 버튼, 마우스 클릭하면 위치 내려감
  let shutterY = 75;
  if (mouseIsPressed) {
    shutterY = 88;
  }
  fill(200, 40, 40);
  rect(410, shutterY, 60, 30);

  //카메라 몸체
  fill(50);
  rect(100, 100, 400, 250);      //몸체
  rect(230, 75, 140, 30);        //뷰파인더

  //오른쪽 버튼들
  fill(90);
  ellipse(455, 180, 40, 40);
  ellipse(455, 240, 25, 25);
  ellipse(455, 285, 25, 25);

  //하늘
  fill(skyR, skyG, skyB);
  rect(130, 130, 280, 190);

  //해
  fill(255, 230, 120);
  ellipse(sunX, sunY, sunSize, sunSize);

  //산
  fill(60, 80, 90);
  triangle(130, 300, 220, 300 - mountain1, 310, 300);
  fill(80, 100, 110);
  triangle(240, 300, 330, 300 - mountain2, 410, 300);

  //땅
  fill(60, groundG, 70);
  rect(130, 300, 280, 20);

  //플래시 효과
  fill(255, 255, 255, flash);
  rect(130, 130, 280, 190);
  flash = flash - 15;
}

function mousePressed() {
  skyR = random(255);
  skyG = random(255);
  skyB = random(255);
  sunX = random(165, 375);
  sunY = random(165, 240);
  sunSize = random(20, 60);
  mountain1 = random(40, 150);
  mountain2 = random(40, 150);
  groundG = random(80, 200);
  flash = 255;
}