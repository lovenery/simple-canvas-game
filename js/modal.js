// Game objects
var grid = 32;
var game = {
	width : grid*16,
	height : grid*15
};

var ghost;

var player1 = {
	speed: 256, // movement in pixels per second
	x : 1*grid,
	y : 1*grid,
	width : grid,
	height : grid,
	isGhost : false
};
var player2 = {
	speed: 256, // movement in pixels per second
	x : 3*grid,
	y : 3*grid,
	width : grid,
	height : grid,
	isGhost : false
};
var player3 = {
	speed: 256, // movement in pixels per second
	x : 6*grid,
	y : 6*grid,
	width : grid,
	height : grid,
	isGhost : false
};
