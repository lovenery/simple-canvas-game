//timing
var minute=1;
var second=0;
var fiveminute = function () {
	if (second===0 && minute!==0) {
		minute-=1;
		second=60;
	}
	if (minute===0 && second===0) {
		whowin='Players';
	}
	else{
		second-=1;
	}
};
