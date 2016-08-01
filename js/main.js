// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = game.width;
canvas.height = game.height;
document.getElementById('gamecanvas').appendChild(canvas);

var init = function () {
	var random = Math.floor((Math.random() * 3) + 1); // 1~3
	switch (random) {
    case 1:
        player1.isGhost = true;
				ghost = player1;
        break;
    case 2:
				player2.isGhost = true;
				ghost = player2;
        break;
    case 3:
				player3.isGhost = true;
				ghost = player3;
        break;
	}
};

// The main game loop
var main = function () {
	var now = Date.now();
	var delta = now - then;

	control(delta / 1000);
	touch();
	render();

	then = now;

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

// Let's play this game!
var then = Date.now();
init();
main();
