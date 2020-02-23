var start = new Date().getMilliseconds();

document.onreadystatechange = function() {
	if (document.readyState == "complete") {
		console.log("start time: " + start);
	}
}

const c = document.getElementById("canvas");
c.width = window.innerWidth;
c.height = window.innerHeight;
const cxt = c.getContext('2d');

function draw() {
	var x1 = 0;
	var y1 = 80;
	var x2 = 80;
	var y2 = 0;
	var w = 240;
	var h = 80;

	for (var i = 0; i < 4; i++) {
		cxt.fillStyle = "orange";
		cxt.fillRect(x1, y1, w, h);
		cxt.fillRect(x2, y2, h, w); 

		x1 -= 80;
		y1 += 160;
		x2 -= 80;
		y2 += 160;

		cxt.fillStyle = "darkred";
		cxt.fillRect(x1, y1, w, h);
		cxt.fillRect(x2, y2, h, w); 

		x1 += 240;
		y1 -= 80;
		x2 += 240;
		y2 -= 80;

		cxt.fillStyle = "black";
		cxt.fillRect(x1, y1, w, h);
		cxt.fillRect(x2, y2, h, w); 

		x1 -= 80;
		y1 += 160;
		x2 -= 80;
		y2 += 160;

		cxt.fillStyle = "blue";
		cxt.fillRect(x1, y1, w, h);
		cxt.fillRect(x2, y2, h, w); 

		x1 += 240;
		y1 -= 80;
		x2 += 240;
		y2 -= 80;

		cxt.fillStyle = "green";
		cxt.fillRect(x1, y1, w, h);
		cxt.fillRect(x2, y2, h, w); 

		x1 -= 80;
		y1 += 160;
		x2 -= 80;
		y2 += 160;

		cxt.fillStyle = "yellow";
		cxt.fillRect(x1, y1, w, h);
		cxt.fillRect(x2, y2, h, w); 

		x1 += 240;
		y1 -= 80;
		x2 += 240;
		y2 -= 80;
	}

}

function fill() {
	draw();
	cxt.save();

	cxt.translate(0, 400);
	draw();
	cxt.restore();
	cxt.save();

	cxt.translate(160, -320);
	draw();
	cxt.restore();
	cxt.save();

	cxt.translate(960, -320);
	draw();
	cxt.restore();
	cxt.save();

	cxt.translate(-1920, -960);
	draw();
	cxt.restore();
	cxt.save();

	cxt.translate(-480, 160);
	draw();
	cxt.save();

	cxt.translate(-480, -1440);
	draw();
	cxt.save();

	cxt.translate(-640, 80);
	draw();
	cxt.save();

	cxt.translate(-640, 480);
	draw();
	cxt.save();
}

// var ax = ay = 0;

// window.addEventListener("devicemotion", handleMotionEvent, true);

// function handleMotionEvent(event) {
// 	var acc = event.accelerationIncludingGravity;
// 	ax = acc.x;
// 	ay = acc.y;

// 	move(ax);

// }
var degree = 0;
var requestAnimationFrame = window.requestAnimationFrame ||
							window.mozRequestAnimationFrame ||
							window.webkitRequestAnimationFrame ||
							window.msRequestAnimationFrame;

function move() {
	cxt.setTransform(1, 0, 0, 1, 0, 0);
	cxt.clearRect(0, 0, c.width, c.height);

	cxt.translate(c.width / 2, c.height / 2);
	cxt.rotate(degree);
	
	fill();
	degree += 0.01;

	requestAnimationFrame(move);

}

move();

var end = new Date().getMilliseconds();
console.log("end time: " + end);
console.log("render time: " + (end - start));