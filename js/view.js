// Draw everything
var render = function () {
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	if (player1Ready && player1.isGhost === false) {
		ctx.drawImage(player1Image, player1.x, player1.y);
	} else {
		ctx.drawImage(ghostImage, player1.x, player1.y);
	}

	if (player2Ready && player2.isGhost === false) {
		ctx.drawImage(player1Image, player2.x, player2.y);
	} else {
		ctx.drawImage(ghostImage, player2.x, player2.y);
	}

	if (player3Ready && player3.isGhost === false) {
		ctx.drawImage(player1Image, player3.x, player3.y);
	} else {
		ctx.drawImage(ghostImage, player3.x, player3.y);
	}

	// Score
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.font = "24px Helvetica";
	ctx.textAlign = "left";
	ctx.textBaseline = "top";
	// ctx.fillText("Goblins caught: " + monstersCaught, 32, 32);
};
