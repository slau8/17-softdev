/*
	CaSh 
	Shannon Lau and Carol Pan
	SoftDev1 pd7
	K17 -- MOO?
	2017-12-13
*/


var box = document.getElementById("box");
var boxHeight = box.offsetHeight;
var boxWidth = box.offsetWidth;

var body = document.getElementsByTagName("body")[0];
var heading = document.createElement("h3");
heading.innerHTML = "CaSh Presents: Find the Invisible Cow";
body.insertBefore(heading, box);

//random cow location
var targetX = Math.round(Math.random() * boxWidth);
var targetY = Math.round(Math.random() * boxHeight);

console.log( "box height: " + boxHeight );
console.log( "box width: " + boxWidth );

var dist = 50;

//calculate distance between current mouse pos and target
var distance = function (x0, y0, x1, y1) {
    //console.log(x0 + " " + y0)
    //console.log(x1 + " " + y1)
    dist =  Math.sqrt(Math.pow(x0 - x1, 2) + Math.pow(y0 - y1, 2));
};

var changeColor = function(dist) {
    var val = Math.round(dist * 100 / (boxHeight * Math.sqrt(2)));
    console.log("distance: " + dist);
    if (val > 100)
	val = 100;
    val = 100 - val;
    //console.log(val)
    var color = "hsl(240, 100%, " + val + "%)";
    //var color = "rgb(" + val + "," + val + "," + val + ")";
    //console.log(color);
    box.setAttribute("style","background-color: " + color);
};


var findIt = function(e) {
    distance(targetX, targetY, e.clientX, e.clientY);
    changeColor(dist);
};

var buttonCallback = function(e){
    location.reload();
};

var clickCallback = function(e){
    if (dist < 50) {
	heading.innerHTML = "Hey, you found the cow! "
	var cow = document.createElement("img")
	cow.setAttribute("src", "https://vignette.wikia.nocookie.net/harvestmoondscute/images/a/a4/Cow.jpg/revision/latest?cb=20120526004550");
	cow.setAttribute("width","4%");
	cow.setAttribute("height","4%");
	heading.appendChild(cow);
	var button = document.createElement("button");
	button.innerHTML = "Play again";
	button.addEventListener("click", buttonCallback);
	heading.appendChild(button);
    }
};

box.addEventListener("mousemove", findIt);
box.addEventListener("click", clickCallback);





