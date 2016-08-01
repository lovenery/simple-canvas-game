/////////////////////////////////////////////////
// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = game.width;
canvas.height = game.height;
document.getElementById('gamecanvas').appendChild(canvas);

gamestart(); // view.js

////////////////////////////////////////////////
//using only on the starting~~~~~~~~~~~~~~~~~~~~
var then = Date.now();
var ready_start = true;
var start_timer;
window.onkeydown = function(e) {
	if(e.keyCode == 13 && ready_start === true){
		ready_start=false;
		init(); // init.js
		main();
		clearInterval(start_timer);
		start_timer = setInterval(timer,1000); // timer.js
	}
};

// The main game loop
var main = function () {

	if (whowin===null) {
		var now = Date.now();
		var delta = now - then;

		control(delta / 1000); // controller.js
		touch(); // touch.js
		view(); // view.js

		then = now;
	} else {
		gameover(); // view.js
		ready_start = true;
	}

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;
