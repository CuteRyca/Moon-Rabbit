class Pineapple extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pineapplepoints){
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pineapplepoints;
        this.moveSpeed = game.settings.pineappleSpeed;

    }
    update(){
        this.x -= this.moveSpeed;
        if(this.x <= 0 - this.width){
            this.reset();
        }
    }

    reset(){
        this.x = game.config.width;
        this.y = Phaser.Math.Between(game.config.height * 0.7, 0);
    }
}