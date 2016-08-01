// Game objects
var grid = 32;
var game = {
	width : grid*16,
	height : grid*15
};

var ghost;
var whowin;

var player1 = {
	speed: 256, // movement in pixels per second
	x : 4*grid,
	y : 4*grid,
	width : grid,
	height : grid,
	isGhost : false,
	name : 'player1'
};
var player2 = {
	speed: 256, // movement in pixels per second
	x : 13*grid,
	y : 8*grid,
	width : grid,
	height : grid,
	isGhost : false,
	name : 'player2'
};
var player3 = {
	speed: 256, // movement in pixels per second
	x : 5*grid,
	y : 11*grid,
	width : grid,
	height : grid,
	isGhost : false,
	name : 'player3'
};

var area_ru1 = { x:13*grid, y:0*grid, width:grid, height:3*grid};
var area_ru2 = { x:13*grid, y:2*grid, width:3*grid, height:grid};
var area_lu1 = { x:2*grid, y:0*grid, width:grid, height:3*grid};
var area_lu2 = { x:0*grid, y:2*grid, width:3*grid, height:grid};
var area_ld1 = { x:2*grid, y:12*grid, width:grid, height:3*grid};
var area_ld2 = { x:0*grid, y:12*grid, width:3*grid, height:grid};
var area_rd1 = { x:13*grid, y:12*grid, width:grid, height:3*grid};
var area_rd2 = { x:13*grid, y:12*grid, width:3*grid, height:grid};
var save_area = [area_ru1,area_ru2,area_lu1,area_lu2,area_ld1,area_ld2,area_rd1,area_rd2];
