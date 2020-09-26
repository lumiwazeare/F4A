let scene = new Phaser.Scene('game');

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: scene
};

let game = new Phaser.Game(config);

scene.init = function(){
    this.player = null;
    this.dragon = null;
    this.bg = null;
    this.speed = 5;
    this.dragonBound = {y0:0,y1:0};
    this.dragonSpeed = 3;
}

scene.preload = function(){
    this.load.image('background','images/background.png');
    this.load.image('warrior','images/warrior.png');
    this.load.image('dragon','images/pet_dragon_new.png')
}

scene.create = function(){
    
    this.bg = this.add.sprite(0,0, 'background');
    this.bg.setOrigin(0,0);
    this.player = this.add.sprite(10,10,'warrior');
    this.player.setScale(0.2);
    this.player.x = 60;
    this.player.y = 60;

    this.dragonBound.y1 = this.sys.game.config.height - 100;
    this.dragon = this.add.sprite(this.sys.game.config.width/2, this.dragonBound.y1, 'dragon');
    this.dragon.setScale(0.2);
    //this.dragon.y0 = this.dragon.getBounds();
}

scene.update = function(){
    
    //Phaser.Geom.Intersects.RectangleToRectangle(rect1, rect2);

    if(this.input.activePointer.isDown){
        this.player.x += this.speed;
    }

    if(this.dragon.y >= this.dragonBound.y1){
        this.dragonSpeed = -this.dragonSpeed;
    }

    let dPos = this.dragon.getBounds().y;
    if(dPos <= 0){
        this.dragonSpeed = -this.dragonSpeed;
    }

    this.dragon.y += this.dragonSpeed;
}