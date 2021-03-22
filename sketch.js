var canvas;
var music;
var platform1, platform2, platform3, platform4;
var ball;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces
    platform1 = createSprite(90, 585, 200, 20);
    platform1.shapeColor = "blue";

    platform2 = createSprite(295, 585, 200, 20);
    platform2.shapeColor = "turquoise";

    platform3 = createSprite(500, 585, 200, 20);
    platform3.shapeColor = "darkblue";

    platform4 = createSprite(705, 585, 200, 20);
    platform4.shapeColor = "skyblue";


    //create box sprite and give velocity
    ball = createSprite(random(20, 750), 450, 20, 20);
    ball.shapeColor = "white";
    ball.velocityX = 7;
    ball.velocityY = 7;
}

function draw() {
    background(rgb(169,169,169));

    //create edgeSprite
    edges = createEdgeSprites();
    ball.bounceOff(edges);

     drawSprites();
    //add condition to check if box touching surface and make it box

    if(platform1.isTouching(ball) && ball.bounceOff(platform1)) {
        ball.shapeColor = "blue";
        music.play();
    }
    if(platform2.isTouching(ball) && ball.bounceOff(platform2)) {
        ball.shapeColor = "turquoise";
    }
    if(platform3.isTouching(ball) && ball.bounceOff(platform3)) {
        ball.shapeColor = "darkblue";
        ball.velocityX = 0;
        ball.velocityY = 0;
        music.stop();
    }
    if(platform4.isTouching(ball) && ball.bounceOff(platform4)) {
        ball.shapeColor = "skyblue";
    }
}
