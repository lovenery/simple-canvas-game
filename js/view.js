// Draw everything

var render = function () {

	// draw background
	if (bgReady) {
		ctx.drawImage(bgImage, 0, 0);
	}

	// draw players
	if (player1Ready && ghost != player1) {
		ctx.drawImage(player1Image, player1.x, player1.y);
	} else {
		ctx.drawImage(ghostImage, player1.x, player1.y);
	}

	if (player2Ready && ghost != player2) {
		ctx.drawImage(player1Image, player2.x, player2.y);
	} else {
		ctx.drawImage(ghostImage, player2.x, player2.y);
	}

	if (player3Ready && ghost != player3) {
		ctx.drawImage(player1Image, player3.x, player3.y);
	} else {
		ctx.drawImage(ghostImage, player3.x, player3.y);
	}

	// draw name
	ctx.fillStyle = "rgba(0, 0, 0,0.8)";
	ctx.font = "bold 1em Helvetica";
	ctx.textAlign = "right";
	ctx.textBaseline = "top";
	ctx.fillText(player1.name, player1.x+grid*4/3, player1.y + grid);
	ctx.fillText(player2.name, player2.x+grid*4/3, player2.y + grid);
	ctx.fillText(player3.name, player3.x+grid*4/3, player3.y + grid);

	// draw save area
	if (save_areaReady) {
		for (i=0;i<save_area.length;i++ )
		{
			for( j = 0 ; j < save_area[i].width / grid ; j++ ) {
				for( k = 0 ; k < save_area[i].height / grid ; k++){
					ctx.drawImage(save_areaImage, save_area[i].x+grid*j, save_area[i].y+grid*k);
				}
			}
		}
	}

	// draw time
	if (second>9) {
	  ctx.fillStyle = "rgba(0, 0, 0,0.8)";
	  ctx.font = "bold 30px Helvetica";
	  ctx.textAlign = "right";
	  ctx.textBaseline = "top";
	  ctx.fillText("0"+minute+":"+second, game.width/2+grid, grid);
	} else{
	  ctx.fillStyle = "rgba(0, 0, 0,0.8)";
	  ctx.font = "bold 30px Helvetica";
	  ctx.textAlign = "right";
	  ctx.textBaseline = "top";
	  ctx.fillText("0"+minute+":0"+second, game.width/2+grid, grid);
	}
};
