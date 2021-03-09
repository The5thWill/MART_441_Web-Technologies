var Selector = "#Land";
var all = new Array();
class Info{
    constructor(selector, imagePath)
    {
        this.selector = selector;
        this.imagePath = imagePath;
    }
    get theSelector(){
        return this.selector;
    }
    get theImagePath(){
        return this.imagePath;
    }
    toString()
    {
        return this.selector + ":" + this.imagePath;
    }
}
function initializeArray()
{
    var = new Info("#Land", "images/Land.jpg");
    all.push;
}
$(document).ready(function(){
    initializeArray();
    console.log(all.length);
    console.log(all[0].toString());
    console.log(all[0].theSelector);
    console.log(all[0].theImagePath);
    $(all[0].theSelector).attr("src", all[0].theImagePath);
    $("button").click(function(){
        $(".stuff").fadeOut();
        $("#third").toggle();
           setInterval(moveSquare, 1000);
        $(all[0].theSelector).fadeOut().fadeIn();
    });
});
function moveSquare()
{
    $("#square").animate({left:250}).animate({top:400}).animate({left:0}).animate({top:300});
}
