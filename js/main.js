// Create the canvas
var canvas = document.createElement("canvas");
var ctx = canvas.getContext("2d");
canvas.width = game.width;
canvas.height = game.height;
document.getElementById('gamecanvas').appendChild(canvas);
// get input
var input1 = document.getElementById('input1');
var input2 = document.getElementById('input2');
var input3 = document.getElementById('input3');

var init = function () {
	if (input1.value !== '') {
		player1.name = input1.value;
	}
	if (input2.value !== '') {
		player2.name = input2.value;
	}
	if (input1.value !== '') {
		player3.name = input3.value;
	}
	input1.style.visibility = 'hidden';
	input2.style.visibility = 'hidden';
	input3.style.visibility = 'hidden';

	whowin = null;
	player1.x = 4*grid;
	player1.y = 4*grid;
	player2.x = 13*grid;
	player2.y = 8*grid;
	player3.x = 5*grid;
	player3.y = 11*grid;
	minute=1;
	second=0;

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

	if (whowin===null) {
		var now = Date.now();
		var delta = now - then;

		control(delta / 1000);
		touch();
		render();

		then = now;
	} else {
		gameover();
	}
	console.log(ready_start);

	// Request to do this again ASAP
	requestAnimationFrame(main);
};

// Cross-browser support for requestAnimationFrame
var w = window;
requestAnimationFrame = w.requestAnimationFrame || w.webkitRequestAnimationFrame || w.msRequestAnimationFrame || w.mozRequestAnimationFrame;

////////////////////////////////////////////////
//using only on the starting~~~~~~~~~~~~~~~~~~~~
var then = Date.now();
var ready_start = true;
var timing;
window.onkeydown = function(e) {
	// enter
	if(e.keyCode == 13 && ready_start === true){
		ready_start=false;

		init();
		main();
		timing = setInterval(fiveminute,1000);
	}
};


// draw starting
ctx.fillStyle = '#000000';
ctx.fillRect(0, 0, canvas.width, canvas.height);

ctx.fillStyle = '#ff0000';
ctx.font = "50px Bangers, Impact, Arial";
ctx.textAlign = "center";
ctx.textBaseline = "top";
ctx.fillText("鬼抓人", game.width / 2, grid*3);

ctx.fillStyle = '#ffffff';
ctx.font = '20px Arial';
ctx.textAlign = "center";
ctx.textBaseline = "top";
ctx.fillText("填完資料後按Enter開始", game.width / 2, game.height / 2 + grid*2);

var gameover = function () {
	clearInterval(timing);

	ready_start = true;
	ctx.fillStyle = '#ff0000';
	ctx.font = "50px Bangers, Impact, Arial";
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.fillText(whowin+" Win!", game.width / 2, game.height / 2 - grid);

	ctx.fillStyle = '#ffffff';
	ctx.font = '20px Arial';
	ctx.textAlign = "center";
	ctx.textBaseline = "top";
	ctx.fillText("press RETURN to try again", game.width / 2, game.height / 2 + grid);
};
