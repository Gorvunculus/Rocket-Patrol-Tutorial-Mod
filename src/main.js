//TODO
/*
MOD POINTS:
Display timer that counts down from time remaining: 10
Added a persistant highscore feature: 5
Added a bonus to time equal to 1/10th the score earned when a ship is destroyed: 20
Ships now speed up after 30 seconds have passed, regardless of bonus time: 5
Added a smaller bonus ship that is faster and much harder to hit, and extended rocket range as a result: 20
Implemented mouse movement and firing: 20
Added particle explosion on collision: 20
TOTAL: 100
*/
let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}
// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT;
let highScore = 0;
let speedUp = false;

let game = new Phaser.Game(config);
//set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;