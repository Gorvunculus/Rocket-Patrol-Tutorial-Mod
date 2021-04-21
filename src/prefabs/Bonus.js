class Bonus extends Phaser.GameObjects.Sprite{
    constructor(scene, x, y, texture, frame, pointValue) {
        super(scene, x, y, texture, frame);
        scene.add.existing(this);
        this.points = pointValue;
        this.moveSpeed = game.settings.spaceshipSpeed * 1.5;
    }

    update() {
        if(speedUp != true){
            this.x -= this.moveSpeed;
        } else {
            this.x -= this.moveSpeed * 1.5;
        }
        if(this.x <= 0 - this.width) {
            this.reset();
        }
    }
    
    reset() {
        this.x = game.config.width;
    }
}