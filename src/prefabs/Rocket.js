// Rocket prefab
class Rocket extends Phaser.GameObjects.Sprite {
    constructor(scene, x, y, texture, frame) {
        super(scene, x, y, texture, frame);
        this.sfxRocket = scene.sound.add('sfx_rocket');

        // add object to existing scene
        scene.add.existing(this);
        this.isFiring = false;
        this.moveSpeed = 2;
    }

    update() {
        if(!this.isFiring) {
            if(keyLEFT.isDown && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if (keyRIGHT.isDown && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }

        if(Phaser.Input.Keyboard.JustDown(keyF) && !this.isFiring) {
            this.isFiring = true;
            this.sfxRocket.play();
        }
        if(this.isFiring && this.y >= borderUISize * 3 + borderPadding - 10) {
            this.y -= this.moveSpeed;
        }
        if(this.y <= borderUISize * 3 + borderPadding - 10) {
            this.reset()
        }

        if(!this.isFiring){
            if(this.x > game.input.mousePointer.x && this.x >= borderUISize + this.width) {
                this.x -= this.moveSpeed;
            } else if( this.x < game.input.mousePointer.x && this.x <= game.config.width - borderUISize - this.width){
                this.x += this.moveSpeed;
            }
        }

        if(game.input.activePointer.isDown && !this.isFiring){
            this.isFiring = true;
            this.sfxRocket.play();
        }
    }

    reset() {
        this.isFiring = false;
        this.y = game.config.height - borderUISize  - borderPadding;
    }
}