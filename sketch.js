// stgv2

// title
  let stgTitle = "* S T G v2 * c3.2";

// canvas
  let [canvasW, canvasH] = [720, 720];
//let [canvasW, canvasH] = [windowWidth - 20, windowWidth - 20];

// game board
  let [frameOriginX, frameOriginY, frameW, frameH] = [20, 20, 440, 680];
  let bg_w = frameW;
  let bg_h = 20;
  let bg_spdy = 2;
  let bg_x1 = frameOriginX;
  let bg_y1 = frameOriginY;
  let bg_x2 = frameOriginX;
  let bg_y2 = frameOriginY - frameH;
  let bg_num = 0;

  // text area
  let [textX, textY] = [480, 100];

  let [textDifficultyX, textDifficultyY] = [540, 60];

  let [textScoreX, textScoreY] = [textX, textY];
  let [textZankiX, textZankiY] = [textX, textY + 40 * 1];
  let [textBombX, textBombY] = [textX, textY + 40 * 2];
  let [textPowerX, textPowerY] = [textX, textY + 40 * 3];
  let [textGrazeX, textGrazeY] = [textX, textY + 40 * 4];

  let [textTitleX, textTitleY] = [textX, textY + 40 * 6];

  let [textFpsX, textFpsY] = [660, 700];

  let [textSize12, textSize24, textSize36] = [12, 24, 36];

// FPS
  let fr = 0;

// difficulty
  let stgDifficulty = "HARD"

//game instance
  let game;

function setup() {
  window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
  createCanvas(canvasW, canvasH);
  fr = frameRate();
  game = new Game();
  bg_num = frameH / bg_h;
}

function draw() {
  game.sceneCtl();
}

class Game {
  constructor() {
    //game common
    this.isDebug = false;
    this.age = 0;
    this.textInterval = 0;
    this.textIntervalTimer = false;

    //scene common
    this.sceneStack = [];
    this.gameSceneNow = "title";

    //stage property
    this.stage1Age = 0;
    this.isStage1Clear = false;
    this.isStage1BossNow = false;

    this.isStage1prologueEnd = false;
    this.stage1Prologueage = 0;
    this.stage1PrologueCursor = 1;

    this.stage2Age = 0;
    this.isStage2Clear = false;
    this.isStage2BossNow = false;

    this.isNeedSetup = true;

    this.totalScore = 0;
    this.stage1Score = 0;
    this.stage2Score = 0;

    this.titleAlpha = 0;
    this.intro1Alpha = 0;
    this.intro2Alpha = 0;
    this.endingAlpha = 0;

    this.carryZanki = 0;
    this.carrySpell = 0;
  }

  update() {
    this.age++;
    if (this.age % 60 === 0) {
      fr = Math.floor(frameRate());
    }
  }

  debugMode() {
  }

  endDebug() {
  }

  sceneCtl() {
    if (this.gameSceneNow === "title") {
      this.sceneTitle();
    }
    this.update();
    if (this.gameSceneNow === "introStage1") {
      this.introSceneStage1();
      this.update();
    }
    if (this.gameSceneNow === "stage1") {
      this.sceneStage1();
      this.update();
    }
  }

  sceneTitle() {
    background(0);
    if (this.titleAlpha < 255) {
      this.titleAlpha++;
    }
    this.titleLogo();
    if ((this.titleAlpha === 255) && (keyIsDown(90) || mouseIsPressed)) {
      this.gameSceneNow = "introStage1";
      this.titleAlpha = 0;
    }
    if (keyIsDown(68) || touches.length === 3) {
      this.isDebug = true;
    }
  }

  titleLogo() {
    textSize(64);
    textFont("Comic Sans MS");
    fill(255, this.titleAlpha);
    textAlign(CENTER);
    text(stgTitle, canvasW / 2, canvasH / 3);

    if (this.titleAlpha === 255) {
      textSize(16);
      textFont("Comic Sans MS");
      fill(255);
      textAlign(LEFT);
      if ((this.age % 60) <= 30) {
        if (this.isDebug) {
          fill(255, 255, 0);
        }
        text("press Z to start !!", canvasW * 2 / 3, canvasH * 2 / 3);
      }
    }
  }

  gameover() {
  }

  ending1() {
  }

  gameclear() {
  }

  ending2() {
  }

  gamepause() {
  }

  pausetext() {
  }

  stage1prologue() {
  }

  stage1prologuetext() {
  }

  introSceneStage1() {
    background(30);
    if (this.intro1Alpha < 255) {
      this.intro1Alpha++;
    }
    this.introSceneStage1Logo();
    if (this.intro1Alpha === 255) {
      this.gameSceneNow = "stage1";
      this.intro1Alpha = 0;
    }
  }

  introSceneStage1Logo() {
    textSize(64);
    textFont("Comic Sans MS");
    fill(255, this.intro1Alpha);
    textAlign(CENTER);
    text("stage 1 start !!", canvasW / 2, canvasH / 3);
  }

  sceneStage1() {
    // stage common
    if (this.isNeedSetup === true) {
      this.stage1Setup();
      this.isNeedSetup = false;
    }
    this.stage1Age++;
    background(35, 25, 70);
    stgBoard();
    textInfo();
    if (this.isDebug) {
      debugTextInfo();
    }
    if (keyIsDown(ESCAPE)) {
      this.sceneStack.push(this.gameSceneNow);
      this.gameSceneNow = "pause";
    }

    // jiki proccess

    // jiki bullets proccess

    // enemy spawn timer proccess

    // enemy proccess

    // enemy bullets proccess

    //stage roop end proccess
    stgFrame();
  }

  stage1Setup() {
//    this.jiki = new Jiki();
  }

  stage1Cleanup() {
    this.isNeedSetup = true;
    this.stage1Age = 0;
    if (this.isStage1Clear) {
      this.gameSceneNow = "introStage2";
      this.isStage1Clear = false;
    } else {
      this.gameSceneNow = "gameOver";
    }
  }

  getsakuraslength() {
  }
  getjikiscore() {
  }
  getjikizanki() {
  }
  getjikispellstock() {
  }

  introscenestage2() {
  }

  introscenestage2logo() {
  }

  scenestage2() {
  }

  stage2setup() {
  }

  stage2cleanup() {
  }
}

function stgBoard() {
  push();
  noStroke();
  for (let i = 0; i < bg_num; i++) {
    fill(i * 2);
    rect(bg_x1, bg_y1 + i * bg_h, bg_w, bg_h);
    fill(bg_num * 2 - i * 2);
    rect(bg_x2, bg_y2 + i * bg_h, bg_w, bg_h);
  }
  bg_y1 += bg_spdy;
  bg_y2 += bg_spdy;
  if ((frameOriginY + frameH) <= bg_y1) { bg_y1 = frameOriginY - frameH }
  if ((frameOriginY + frameH) <= bg_y2) { bg_y2 = frameOriginY - frameH }
  pop();
}

function stgFrame() {
    noStroke();
    fill(35, 25, 70);
    rect(0, 0, frameOriginX, canvasH);  
    rect((frameOriginX + frameW), 0, frameOriginX, canvasH);  
    rect(0, 0, canvasW, frameOriginY);
    rect(0, (frameOriginY + frameH), (frameOriginX + frameW), frameOriginY);  
}

function setGradient_Y(x, y, w, h, c1, c2) {
}

function textInfo() {
  textSize(textSize24);
  textFont("Comic Sans MS");
  fill(255);
  textAlign(LEFT);
  text(stgDifficulty, textDifficultyX, textDifficultyY);

  textSize(textSize24);
  textFont("Comic Sans MS");
  fill(255);
  textAlign(LEFT);
//  text("score : " + nf(game.getjikiscore(), 7), textScoreX, textScoreY);
  text("score : " + nf(1234, 7), textScoreX, textScoreY);
  

  textSize(textSize12);
  textFont("Comic Sans MS");
  fill(255);
  textAlign(LEFT);
  text("FPS : " + fr, textFpsX, textFpsY);
}

function debugtextinfo() {
}

function diceroll() {
}

class Sprite {
  constructor() {
  }

  update() {
  }

  limitchk() {
  }

  draw() {
  }

  frameout() {
  }

  collisionchk(opponent_x, opponent_y, opponent_killingrange, opponent_power) {
  }

  hit() {
  }

  sparkle() {
  }
}

class Shooter extends Sprite {
  constructor() {
    super();
  }

  shoot() {
  }
}

class Bullet extends Sprite {
  constructor(shooter_x, shooter_y) {
    super();
  }
}

class BulletFreindly extends Bullet {
  constructor(shooter_x, shooter_y) {
    super(shooter_x, shooter_y);
  }

  draw() {
    super.draw();
  }
}

class BulletFreindlyLaser extends Bullet {
  constructor(shooter_x, shooter_y) {
    super(shooter_x, shooter_y);
  }

  draw() {
    super.draw();
  }
}

class BulletFreindlySpell extends Bullet {
  constructor(shooter_x, shooter_y) {
    super(shooter_x, shooter_y);
  }
  limitchk() {
  }
  draw() {
    super.draw();
  }
}

class miniBulletofEnemy extends Bullet {
  constructor(shooter_x, shooter_y) {
    super(shooter_x, shooter_y);
  }

  update() {
    super.update();
  }

  draw() {
    super.draw();
  }

  fall() {
  }
}

class bigBulletofEnemy extends Bullet {
  constructor(shooter_x, shooter_y) {
    super(shooter_x, shooter_y);
  }

  draw() {
    super.draw();
  }
}

class Enemy extends Shooter {
  constructor() {
    super();
  }

  draw() {
  }

  hit() {
  }
}

class Sakura extends Enemy {
  constructor() {
    super();
  }

  update() {
    super.update();
  }

  draw() {
  }

  swing() {
  }
}

class Fairy01 extends Enemy {
  constructor() {
    super();
  }

  update() {
    super.update();
  }

  draw() {
  }

  toleft() {
  }
}

class Fairy02 extends Enemy {
  constructor() {
    super();
  }

  update() {
    super.update();
  }

  draw() {
  }

  toright() {
  }
}

class Fairy03 extends Enemy {
  constructor() {
    super();
  }

  update() {
    super.update();
  }

  draw() {
  }

  toleft() {
  }
}

class Fairy04 extends Enemy {
  constructor() {
    super();
  }

  update() {
    super.update();
  }

  draw() {
  }

  toright() {
  }
}

class bigFairy extends Enemy {
  constructor() {
    super();
  }

  update() {
    super.update();
  }

  draw() {
  }

  limitchk() {
  }

  hit() {
  }

  toright() {
  }
  toleft() {
  }
  stop() {
  }
}

class Jiki extends Shooter {
  constructor() {
    super();
  }

  update() {
  }

  limitchk() {
  }

  draw() {
    super.draw();
  }

  hit() {
    super.hit();
  }

  shoot() {
    super.shoot();
  }
  spell() {
    super.shoot();
  }
}
