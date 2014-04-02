/**
 * User: imtloaner127
 * Date: 6/26/13
 * Time: 5:00 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("start chart");

(function (){
    //create the canvas
	var canvas = document.createElement("canvas");
	canvas.width = 800;
	canvas.height = 800;
	document.body.appendChild(canvas);
	var ctx = canvas.getContext("2d");

	ball = new Ball(25, "#0000ff");
	//make direction for the ball
	var vx = 0;
	var vy = 0;

	ball.x = canvas.width * .5;
	ball.y = canvas.height * .5;


	ball.update(ctx);


	//add event listeners to listen for the keys
	window.addEventListener('keydown', onPress);
	window.addEventListener('keyup', onRelease);

	//function that when the keys are pressed move the ball
	function onPress(e){
		console.log(e);
		if(e.keyCode == 37){

			vx =- 3;
		}
		if(e.keyCode == 38){


			vy =- 3;
		}
		if(e.keyCode == 39){


			vx = 3;
		}
		if(e.keyCode == 40){


			vy = 3;
		}


	};

	//function that when the keys are released stop the ball
	function onRelease(e){
		if(e.keyCode == 37 || e.keyCode == 39){
			
			vx =- 0;
		}
		if(e.keyCode == 40 || e.keyCode == 38){

			vy =- 0;
		}
	}

	(function update(){
		ctx.clearRect(0,0,canvas.width,canvas.height); //clears canvas before drawing (every frame)
		var left = 0,
		right = canvas.width,
		top = 0,
		bottom = canvas.height;

		//Ball movement
		ball.x += vx;
		ball.y += vy;

		ball.update(ctx); //redraw the ball

		requestAnimationFrame(update);

	})();

})();
