// Background image
var bgReady = false;
var bgImage = new Image();
bgImage.onload = function () {
	bgReady = true;
};
bgImage.src = "img/background.png";

// player image
var player1Ready = false;
var player1Image = new Image();
player1Image.onload = function () {
	player1Ready = true;
};
player1Image.src = "img/hero.png";

var player2Ready = false;
var player2Image = new Image();
player2Image.onload = function () {
	player2Ready = true;
};
player2Image.src = "img/hero.png";

var player3Ready = false;
var player3Image = new Image();
player3Image.onload = function () {
	player3Ready = true;
};
player3Image.src = "img/hero.png";

// ghost image
var ghostReady = false;
var ghostImage = new Image();
ghostImage.onload = function () {
	ghostReady = true;
};
ghostImage.src = "img/monster.png";

// save area image
var save_areaReady = false;
var save_areaImage = new Image();
save_areaImage.onload = function () {
	save_areaReady = true;
};
save_areaImage.src = "img/block.png";
