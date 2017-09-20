console.log('i am the canvas');

let rick;


function setup() {
	createCanvas(400, 600);
	rick = new Rick();
}

function draw() {
	background(0);
	rick.update(); // falling action
	rick.show(); // hello rick!
}