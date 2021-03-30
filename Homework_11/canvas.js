var canvas;
var ctx;
var x = 50;
var y = 50;
var circle, square;
var direction;
var questions;
var squareArray = [];
var lives = 3;
$(document).ready(function(){

    setup();

    $(this).keypress(function(event){
        getKey(event);

    });
});



function setup()
{
    canvas = document.getElementById("myCanvas");
    ctx = canvas.getContext("2d");

    circle = new Circle(100,100,50,"#0000FF");
    square = new Square(400,400,100,100,"#00FF00");
    $.getJSON("data/information.json", function(data) {
        for(var i = 0; i < data.squares.length; i++)
        {
            squareArray.push(new Square(data.squares[i].x,data.squares[i].y, data.squares[i].h, data.squares[i].w, data.squares[i].color));
        }
        drawSquare();
    });




}

function getKey(event)
{
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if(actualLetter == "w")
    {
        moveUp();
        direction = "up";
    }
    if(actualLetter == "s")
    {
        moveDown();
        direction = "down";
    }
    if(actualLetter == "a")
    {
        moveLeft();
        direction = "left";
    }
    if(actualLetter == "d")
    {
        moveRight();
        direction = "right";
    }
    var test = hasCollided(circle,square);
    var test2 = false;
    for(var i = 0; i < squareArray.length; i++)
    {

        test2 = hasCollided(circle,squareArray[i]);
        if(test2 == true)
        {
            break;
        }

    }
    if(test || test2)
    {
        lives--;
        if(direction == "left")
        {
            moveRight();
        }
        else if(direction == "right")
        {
            moveLeft();
        }
        else if(direction == "up")
        {
            moveDown();
        }
        else if(direction == "down")
        {
            moveUp();
        }

    }
    drawCircle();

}

function moveUp()
{
    circle.y-=10;
}
function moveDown()
{
    circle.y+=10;
}
function moveRight()
{
    circle.x+=10;
}
function moveLeft()
{
    circle.x-=10;
}

function drawSquare()
{
    ctx.clearRect(0,0,800,600);
    ctx.fillStyle = circle.mainColor;
    ctx.fillRect(circle.x, circle.y, circle.diameter);
    ctx.fillStyle = square2.mainColor;
    ctx.fillRect(square.x, square.y, square.width, square.height);
    for(var i = 0; i < squareArray.length; i++)
    {
        ctx.fillStyle = squareArray[i].mainColor;
        ctx.fillRect(squareArray[i].x, squareArray[i].y, squareArray[i].width, squareArray[i].height);
    }

    ctx.font = "30px Arial";
    ctx.fillText("Lives: " + lives, 10, 50);

}

function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
