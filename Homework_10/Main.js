var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
var x = 50;
var y = 50;
var x2 = 100;
var y2 = 100;
var square1;
var square2;
createcircles();
drawcircles();
setInterval(moveBluecircle, 4000);
function createSquares() {
    square1 = new circle(x, y, 20, 20, "blue");
    square2 = new circle(x2, y2, 50, 50, "red");
}
function moveGreencircle() {

    circle2.setX(Math.floor(Math.random() * canvas.width));
    circle2.setY(Math.floor(Math.random() * canvas.height));
    drawcircle();
}
function drawcircle() {
    ctx.clearRect(0, 0, 600, 1000);
    ctx.fillStyle = circle1.theColor;
    ctx.fillRect(circle1.theX, circle1.theY, circle1.theWidth, circle1.theHeight);
    ctx.fillStyle = circle2.theColor;
    ctx.fillRect(circle2.theX, circle2.theY, circle2.theWidth, circle2.theHeight);
}
$(document).ready(function () {
    $(this).keypress(function (event) {
        getKey(event);
    });
});
function getKey(event) {
    var didCollide = hasCollided(circle1, circle2);
    if (didCollide) {
        canvas.style.backgroundColor = "rgb(" + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + "," + Math.floor(Math.random() * 255) + ")";

        circle1.setWidth(circle1.theWidth - 1);
        circle1.setHeight(circle1.theHeight - 1);
        circle2.setWidth(circle2.theWidth + 1);
        circle2.setHeight(circle2.theHeight + 1);
    }
    var char = event.which || event.keyCode;
    var actualLetter = String.fromCharCode(char);
    if (actualLetter == "w") {
        moveUp();
    } else if (actualLetter == "s") {
        moveDown();
    } else if (actualLetter == "d") {
        moveRight();
    } else if (actualLetter == "a") {
        moveLeft();
    }
    drawcircle();
}
function moveUp() {
    circle1.setY(circle1.theY - 5);
}
function moveDown() {
    circle1.setY(circle1.theY + 5);
}
function moveLeft() {
    circle.setX(circle1.theX - 5);
}
function moveRight() {
    circle1.setX(circle1.theX + 5);
}
function hasCollided(object1, object2) {
    return !(
        ((object1.y + object1.height) < (object2.y)) ||
        (object1.y > (object2.y + object2.height)) ||
        ((object1.x + object1.width) < object2.x) ||
        (object1.x > (object2.x + object2.width))
    );
}
