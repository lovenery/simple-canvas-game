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

var touch = function () {
  if (isTouching(ghost,player1) && ghost!=player1) {
    console.log('game over');
  }
  if (isTouching(ghost,player2) && ghost!=player2) {
    console.log('game over');
  }
  if (isTouching(ghost,player3) && ghost!=player3) {
    console.log('game over');
  }
};
