var screenWidth = document.body.clientWidth;

var box = document.querySelector(".scaling-box");
var follower = document.querySelector(".scaling-follower");
var display = document.querySelector(".scaling-display");

var width = 16;
var height =  9;
var multiplier = 1;

var offx = 0;
var offy = 0;

var selected = false;

function selectScalingBox(){
	if(box.offsetWidth > follower.offsetWidth ||
	   box.offsetHeight > follower.offsetHeight)
	{
		follower.style.boxShadow = "none";
		if(selected){
			selected = false;
			moveFollower();
		}
		else{
			selected = true;
		}
	}
	else{		
		follower.style.boxShadow = "0 0 10px 5px rgba(140, 0, 0, 0.5)";
	}
}

function onMouseScroll(e){
	if(!selected){
		var factor = screenWidth / 20000;
		
		if(e.deltaY > 0){
			if(width * (multiplier + factor) <= box.offsetWidth || 
			   height * (multiplier + factor) <= box.offsetHeight)
			{
				multiplier = multiplier + factor;
			}
		}
		else{
			if(multiplier > 0.2){
				multiplier = multiplier + (factor * -1);
			}
		}
		follower.style.width = (width * (multiplier))+ "px";
		follower.style.height = (height * (multiplier)) + "px";
		
		moveFollower();
		
		e.preventDefault();
		return false;	
	}	
}

function onMouseMove(e) {
	offx = e.offsetX;
	offy = e.offsetY;
	
	if(!selected){
		moveFollower();
	}	
}

function moveFollower(){
	var addX = 15;
	var addY = 0;
	
	// set Horizontal
	if(offx <= (width * (multiplier) / 2) + addX){
		// left border
		follower.style.left = addX + "px";
	}
	else if(offx + (width * (multiplier) / 2) >= box.offsetWidth + addX){
		// right border
		follower.style.left = (box.offsetWidth - width * (multiplier) + addX) + "px";
	}
	else{
		follower.style.left = (offx - width * (multiplier) / 2) + "px";
	}
		
	// set Vertical 
	if(offy <= (height * (multiplier) / 2) + addY){
		// top border
		follower.style.top = addY + "px";
	}
	else if(offy + (height * (multiplier) / 2) >= box.offsetHeight){
		// bottom border
		follower.style.top = (box.offsetHeight - height * (multiplier) + addY)  + "px";
	}		
	else{
		follower.style.top = (offy - height * (multiplier) / 2) + "px";
	}
}

function init(){
	width = (screenWidth / 3);
	height = (screenWidth / 3) / 16 * 9;
	
	follower.style.width = width + "px";
	follower.style.height = height + "px";
	
	box.addEventListener("mousemove", onMouseMove);
	box.addEventListener("wheel", onMouseScroll);
}
$(window).resize(function() {
	screenWidth = document.body.clientWidth;
	selected = false;
	if(width * (multiplier) >= box.offsetWidth || height * (multiplier) >= box.offsetHeight){
		var widthDiv = box.offsetWidth / width / multiplier;
		var heightDiv = box.offsetHeight / height / multiplier;
		
		if(widthDiv <= heightDiv){
			multiplier = multiplier * widthDiv;
		}
		else{
			multiplier = multiplier * heightDiv;
		}
		multiplier = multiplier - 0.01;
		
		follower.style.width = (width * (multiplier))+ "px";
		follower.style.height = (height * (multiplier)) + "px";
		moveFollower();
	}
	
});

// wait until DOM is ready
document.addEventListener("DOMContentLoaded", function(event) {	
    window.onload = function() {
		init();		
		moveFollower();
    };
});