// stgv2

let stgTitle = "* S T G * v2 c2.0"
let [canvasx, canvasy] = [720, 690];

function setup() {
  window.addEventListener("touchstart", function (event) { event.preventDefault(); }, { passive: false });
  window.addEventListener("touchmove", function (event) { event.preventDefault(); }, { passive: false });
  createCanvas(canvasx, canvasy);
}

function draw() {
}

class Game {
  constructor() {
  }

  update() {
  }

  debugmode() {
  }

  enddebug() {
  }

  scenectl() {
  }

  scenetitle() {
  }

  titlelogo() {
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

  introscenestage1() {
  }

  introscenestage1logo() {
  }

  scenestage1() {
  }

  stage1setup() {
  }

  stage1cleanup() {
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

function stgboard(gameage) {
}

function stgframe(gameage) {
}

function setGradient_Y(x, y, w, h, c1, c2) {
}

function textinfo() {
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
