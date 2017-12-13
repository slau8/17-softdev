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

//hardcode target as center
//randomize later
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
    var val = Math.round(dist * 255 / (boxHeight * Math.sqrt(2)));
    console.log("distance: " + dist)
    if (val > 255)
	val = 255;
    val = 255 - val;
    //console.log(val)
    var color = "rgb(" + val + "," + val + "," + val + ")";
    //console.log(color);
    box.setAttribute("style","background-color: " + color);
};


var findIt = function(e) {
    distance(targetX, targetY, e.clientX, e.clientY);
    changeColor(dist)
};

var clickCallback = function(e){
    if (dist < 50){
	box.innerHTML = "Hey, you found the cow!"
	var cow = document.createElement("img")
	cow.setAttribute("src", "https://vignette.wikia.nocookie.net/harvestmoondscute/images/a/a4/Cow.jpg/revision/latest?cb=20120526004550");
	box.appendChild(cow);
    }
    else{
	box.innerHTML = "Slau and Cpan present: Find the Cow"
    }
}

box.addEventListener("mousemove", findIt);
box.addEventListener("click", clickCallback);
