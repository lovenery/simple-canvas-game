// Handle keyboard controls
var keysDown = {};

addEventListener("keydown", function (e) {
	keysDown[e.keyCode] = true;
}, false);

addEventListener("keyup", function (e) {
	delete keysDown[e.keyCode];
}, false);

// Update game objects
var control = function (modifier) {
	// player 1
	if (38 in keysDown) { // Player1 holding up
		if (player1.y >= 0) {
			player1.y -= player1.speed * modifier;
		}
	}
	if (40 in keysDown) { // Player1 holding down
		if (player1.y <= game.height - grid) {
			player1.y += player1.speed * modifier;
		}
	}
	if (37 in keysDown) { // Player1 holding left
		if (player1.x >= 0) {
			player1.x -= player1.speed * modifier;
		}
	}
	if (39 in keysDown) { // Player1 holding right
		if (player1.x <= game.width - grid) {
			player1.x += player1.speed * modifier;
		}
	}

	// player2
	if (87 in keysDown) { // Player2 holding up
		if (player2.y >= 0) {
			player2.y -= player2.speed * modifier;
		}
	}
	if (83 in keysDown) { // Player2 holding down
		if (player2.y <= game.height - grid) {
			player2.y += player2.speed * modifier;
		}
	}
	if (65 in keysDown) { // Player2 holding left
		if (player2.x >= 0) {
			player2.x -= player2.speed * modifier;
		}
	}
	if (68 in keysDown) { // Player2 holding right
		if (player2.x <= game.width - grid) {
			player2.x += player2.speed * modifier;
		}
	}

	// player3
	if (85 in keysDown) { // Player3 holding up
		if (player3.y >= 0) {
			player3.y -= player3.speed * modifier;
		}
	}
	if (74 in keysDown) { // Player3 holding down
		if (player3.y <= game.height - grid) {
			player3.y += player3.speed * modifier;
		}
	}
	if (72 in keysDown) { // Player3 holding left
		if (player3.x >= 0) {
			player3.x -= player3.speed * modifier;
		}
	}
	if (75 in keysDown) { // Player3 holding right
		if (player3.x <= game.width - grid) {
			player3.x += player3.speed * modifier;
		}
	}
};
