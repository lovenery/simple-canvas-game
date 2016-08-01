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
	if (input3.value !== '') {
		player3.name = input3.value;
	}
	input1.style.visibility = 'hidden';
	input2.style.visibility = 'hidden';
	input3.style.visibility = 'hidden';

	// model
	whowin = null;
	player1.x = 4*grid;
	player1.y = 4*grid;
	player2.x = 13*grid;
	player2.y = 8*grid;
	player3.x = 5*grid;
	player3.y = 11*grid;

	// timer
	minute=1;
	second=0;

	// who is ghost
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
