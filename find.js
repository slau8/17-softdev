var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

//hardcode target as center
//randomize later
var targetX = boxWidth / 2;
var targetY = boxHeight / 2;


console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    return Math.sqrt(Math.pow(x0 - x1) + Math.power(y0 - y1));
};

var changeColor = function(e) {
    
    box.seAttribute("style","background-color: " + color);
};


var findIt = function(e) {
    var dist = distance(targetX, targetY, e.X, e.Y);
};

box.addEventListener("mousemove", findIt);

