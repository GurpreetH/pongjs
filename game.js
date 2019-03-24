var canvas = document.getElementById("canvas");
var ctx = canvas.getContext("2d");


//ball
var ball = new Image();
ball.src = "images/Ball.png";

var ballx = 256;
var bally = 256;

var ballxv = 0;
var ballyv = 2;

function moveball(){
    ballx+=ballxv;
    bally+=ballyv;
}

//player
var topplayer = new Image();
topplayer.src = "images/bar.png"

var topx = 200;



var draw = function(){
    ctx.drawImage(ball,ballx,bally);

    ctx.drawImage(topplayer,topx,0)
    
    if(bally+ball.width==topplayer.height){
        ballyv*=-1
    }

    moveball();
    requestAnimationFrame(draw);
}

draw();
