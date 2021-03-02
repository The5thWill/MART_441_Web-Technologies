
var myViewFinderArray = new Array();
class ViewFinder
{
    constructor(title)
    {
        this.title = title;
    }
    toString()
    {
        return "Title: " + this.title;
    }
    get theTitle()
    {
        return this.title;
    }
}
function initializeArray()
{
    var myViewFinder = new ViewFinder("A really funny Pug");
    var myViewFinder1 = new ViewFinder("A really angry tiger");
    myViewFinderArray.push(myViewFinder);
    myViewFinderArray.push(myViewFinder1);
}
function accessInformation()
{
    var randomNumber = Math.floor(Math.random() * myViewFinderArray.length);
    document.getElementById("title").innerHTML = myViewFinderArray[randomNumber].toString();
}
