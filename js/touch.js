var touch = function () {

	// walls
	for ( i=0 ; i < save_area.length ; i++ ) {
		if (isTouching(ghost,save_area[i])) {
				ghost.x = 7*grid;
				ghost.y = 7*grid;
		}
	}

  if (isTouching(ghost,player1) && ghost!=player1) {
    whowin='Ghost';
  }
  if (isTouching(ghost,player2) && ghost!=player2) {
    whowin='Ghost';
  }
  if (isTouching(ghost,player3) && ghost!=player3) {
    whowin='Ghost';
  }
};


// Handle touching
function isTouching(a,b) {
	if(
		a.x <= (b.x + b.width) &&
		b.x <= (a.x + a.width) &&
	 	a.y <= (b.y + b.height) &&
	 	b.y <= (a.y + a.height)
	)
	{
		return true;
	}
	else {
		return false;
	}
}
