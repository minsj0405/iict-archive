let candles = 0;   // 꽂은 초의 개수 0~5
let out = 0;       // 꺼진 촛불의 개수 0~5
let wind = 0;      // 입김의 세기
let confY = 0;     // 색종이의 높이
let confV = 0;     // 색종이의 속도

function setup() {
  createCanvas(600, 520);
}

function draw() {
  background(252, 246, 238);

  noStroke();

  let over = mouseX > 160 && mouseX < 440 && mouseY > 180 && mouseY < 450;

  if (over && candles < 5) {
    fill(230, 226, 220);
    if (candles == 0) {
      rect(222, 206, 16, 90);
    } else if (candles == 1) {
      rect(257, 206, 16, 90);
    } else if (candles == 2) {
      rect(292, 206, 16, 90);
    } else if (candles == 3) {
      rect(327, 206, 16, 90);
    } else {
      rect(362, 206, 16, 90);
    }
  }

  // 1번 초 (파랑)
  if (candles >= 1) {
    fill(96, 152, 222);
    rect(222, 206, 16, 90);
    fill(255, 255, 255);
    rect(222, 222, 16, 5);
    rect(222, 242, 16, 5);
    rect(222, 262, 16, 5);
    fill(110, 90, 80);
    rect(228, 198, 4, 10);
  }
  // 2번 초 (노랑)
  if (candles >= 2) {
    fill(250, 208, 98);
    rect(257, 206, 16, 90);
    fill(255, 255, 255);
    rect(257, 222, 16, 5);
    rect(257, 242, 16, 5);
    rect(257, 262, 16, 5);
    fill(110, 90, 80);
    rect(263, 198, 4, 10);
  }
  // 3번 초 (빨강)
  if (candles >= 3) {
    fill(236, 110, 110);
    rect(292, 206, 16, 90);
    fill(255, 255, 255);
    rect(292, 222, 16, 5);
    rect(292, 242, 16, 5);
    rect(292, 262, 16, 5);
    fill(110, 90, 80);
    rect(298, 198, 4, 10);
  }
  // 4번 초 (노랑)
  if (candles >= 4) {
    fill(250, 208, 98);
    rect(327, 206, 16, 90);
    fill(255, 255, 255);
    rect(327, 222, 16, 5);
    rect(327, 242, 16, 5);
    rect(327, 262, 16, 5);
    fill(110, 90, 80);
    rect(333, 198, 4, 10);
  }
  // 5번 초 (파랑)
  if (candles >= 5) {
    fill(96, 152, 222);
    rect(362, 206, 16, 90);
    fill(255, 255, 255);
    rect(362, 222, 16, 5);
    rect(362, 242, 16, 5);
    rect(362, 262, 16, 5);
    fill(110, 90, 80);
    rect(368, 198, 4, 10);
  }

  // 마우스를 올리면 불꽃이 좌우로 흔들린다
  let flameX = 0;
  if (over && candles == 5 && out < 5) {
    if (frameCount % 20 < 10) {
      flameX = 4;
    } else {
      flameX = -4;
    }
  }

  // 입김이 쌓일수록 불꽃이 옆으로 눕고 작아진다
  let lean = flameX + wind * 0.2;
  let fw = 14 + wind * 0.07;
  let fh = 24 - wind * 0.13;
  let fy = 190 + wind * 0.07;
  let iw = 7 + wind * 0.02;
  let ih = 13 - wind * 0.07;

  if (candles == 5) {
    if (out < 1) {
      fill(248, 150, 60);
      ellipse(230 + lean, fy, fw, fh);
      fill(255, 226, 120);
      ellipse(230 + lean, fy + 3, iw, ih);
    }
    if (out < 2) {
      fill(248, 150, 60);
      ellipse(265 + lean, fy, fw, fh);
      fill(255, 226, 120);
      ellipse(265 + lean, fy + 3, iw, ih);
    }
    if (out < 3) {
      fill(248, 150, 60);
      ellipse(300 + lean, fy, fw, fh);
      fill(255, 226, 120);
      ellipse(300 + lean, fy + 3, iw, ih);
    }
    if (out < 4) {
      fill(248, 150, 60);
      ellipse(335 + lean, fy, fw, fh);
      fill(255, 226, 120);
      ellipse(335 + lean, fy + 3, iw, ih);
    }
    if (out < 5) {
      fill(248, 150, 60);
      ellipse(370 + lean, fy, fw, fh);
      fill(255, 226, 120);
      ellipse(370 + lean, fy + 3, iw, ih);
    }
  }

  fill(200, 198, 196, 150);
  if (out >= 1) {
    ellipse(230, 180, 9, 9);
    ellipse(234, 164, 7, 7);
  }
  if (out >= 2) {
    ellipse(265, 180, 9, 9);
    ellipse(269, 164, 7, 7);
  }
  if (out >= 3) {
    ellipse(300, 180, 9, 9);
    ellipse(304, 164, 7, 7);
  }
  if (out >= 4) {
    ellipse(335, 180, 9, 9);
    ellipse(339, 164, 7, 7);
  }
  if (out >= 5) {
    ellipse(370, 180, 9, 9);
    ellipse(374, 164, 7, 7);
  }

  // 케이크 몸통
  fill(255, 252, 246);
  rect(170, 300, 260, 130);
  ellipse(300, 430, 260, 40);
  fill(255, 255, 252);
  ellipse(300, 300, 260, 54);

  // 옆면 스프링클
  fill(236, 108, 108);
  ellipse(200, 345, 8, 8);
  ellipse(262, 322, 8, 8);
  ellipse(330, 396, 8, 8);
  ellipse(392, 352, 8, 8);
  ellipse(236, 400, 8, 8);
  ellipse(300, 362, 8, 8);

  fill(96, 152, 222);
  ellipse(222, 380, 8, 8);
  ellipse(288, 340, 8, 8);
  ellipse(356, 330, 8, 8);
  ellipse(404, 390, 8, 8);
  ellipse(188, 398, 8, 8);
  ellipse(318, 406, 8, 8);

  fill(250, 208, 98);
  ellipse(240, 355, 8, 8);
  ellipse(306, 398, 8, 8);
  ellipse(372, 345, 8, 8);
  ellipse(408, 330, 8, 8);
  ellipse(196, 372, 8, 8);
  ellipse(276, 404, 8, 8);

  fill(126, 198, 124);
  ellipse(212, 325, 8, 8);
  ellipse(254, 385, 8, 8);
  ellipse(340, 336, 8, 8);
  ellipse(382, 406, 8, 8);
  ellipse(416, 364, 8, 8);
  ellipse(296, 320, 8, 8);

  // 9. 윗면 가장자리 스프링클 띠
  fill(236, 108, 108);
  ellipse(418, 300, 9, 7);
  ellipse(345, 322, 9, 7);
  ellipse(217, 317, 9, 7);
  ellipse(191, 291, 9, 7);

  fill(96, 152, 222);
  ellipse(409, 309, 9, 7);
  ellipse(300, 324, 9, 7);
  ellipse(191, 309, 9, 7);
  ellipse(217, 283, 9, 7);

  fill(250, 208, 98);
  ellipse(383, 317, 9, 7);
  ellipse(255, 322, 9, 7);
  ellipse(182, 300, 9, 7);
  ellipse(255, 278, 9, 7);

  fill(126, 198, 124);
  ellipse(300, 276, 9, 7);
  ellipse(345, 278, 9, 7);
  ellipse(383, 283, 9, 7);
  ellipse(409, 291, 9, 7);

  // 다 껐을 때 떨어지는 색종이
  if (candles == 5 && out == 5) {
    fill(248, 150, 170);
    ellipse(120, confY - 150, 15, 15);
    ellipse(470, confY - 40, 13, 13);
    fill(250, 208, 98);
    ellipse(180, confY - 90, 12, 12);
    ellipse(508, confY + 40, 14, 14);
    fill(126, 198, 124);
    ellipse(80, confY + 20, 11, 11);
    ellipse(420, confY + 90, 12, 12);
    fill(96, 152, 222);
    ellipse(250, confY - 190, 12, 12);
    ellipse(360, confY + 130, 13, 13);
  }


  textAlign(RIGHT, CENTER);
  fill(170, 156, 146);
  textSize(13);
  text("CANDLES", 560, 44);
  fill(96, 82, 74);
  textSize(30);
  text(candles + " / 5", 560, 72);


  textAlign(CENTER, CENTER);
  if (candles == 5 && out == 5) {
    fill(236, 130, 140);
    textSize(32);
    text("생일 축하해!", 300, 120);
  }


  textSize(15);
  if (candles == 5 && out == 5) {
    fill(160, 148, 140);
    text("아무 키나 누르면 새 케이크", 300, 486);
  } else if (candles == 5) {
    fill(160, 148, 140);
    text("좌우로 움직여 촛불을 불어서 꺼요", 300, 486);
  } else if (over) {
    fill(160, 148, 140);
    text("클릭하면 초를 꽂아요", 300, 486);
  } else {
    fill(190, 178, 170);
    text("케이크에 마우스를 올려보세요", 300, 486);
  }



  let move = mouseX - pmouseX;
  if (move < 0) {
    move = move * -1;
  }
  if (over && candles == 5 && out < 5) {
    wind = wind + move * 0.18;
  }
  wind = wind * 0.95;

  if (wind >= 100 && out < 5) {
    out = out + 1;
    wind = 0;
  }
  wind = constrain(wind, 0, 100);


  if (candles == 5 && out == 5) {
    confY = confY + confV;
    confV = confV + 0.06;
    if (confY > 620) {
      confY = 0;
      confV = 0;
    }
  }
}

function mousePressed() {
  let over = mouseX > 160 && mouseX < 440 && mouseY > 180 && mouseY < 450;
  if (over && candles < 5) {
    candles = candles + 1;
  }
}

// 키보드를 누르면 초기화
function keyPressed() {
  candles = 0;
  out = 0;
  wind = 0;
  confY = 0;
  confV = 0;
}