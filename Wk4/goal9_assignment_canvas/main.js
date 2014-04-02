console.log("start canvas");

(function(){
    
    //Making the canvas
	var canvas = document.createElement("canvas");
	document.body.appendChild(canvas);
	var ctx = canvas.getContext("2d");
	canvas.width = 1000;
	canvas.height = 1000;

	// Function to start adding things to the canvas
	var drawBars = function (){
		//Array to change the height of the bars
		var rects = [90, 150, 100];
		//Setting the x axis for the bars
		var x = 100;
		
		//Adding the title for the chart
		ctx.fillStyle = "rgb(0,255,255)";
		ctx.font = "20px Georgia";
		ctx.fillText("FCAT Scores For Florida", 160, 80);
		//Adding the x axis text for the chart
		ctx.fillText("2011", 115, 450);
		ctx.fillText("2012", 245, 450);
		ctx.fillText("2013", 375, 450);
		//Adding the y axis for the chart
		ctx.fillText("0", 50, 425);
		ctx.fillText("100", 30, 130);

		//for loop to make the amount of rectangles in the rects array
		for(var i = 0; i < rects.length; i++)
		{
			//drawing the rectangles
			ctx.beginPath();
			ctx.fillStyle = "#aabbcc";
			ctx.fillRect(x,425,70,-(rects[i]));
			ctx.stroke();
			ctx.fill();
			//each rectangle will be 130px apart
			x += 130;

			

		}
	
	};

	//calling the draw function
	drawBars();

	//creating the image
	var qr = new Image();
	qr.src = "http://www.massive-talent.com/wp-content/uploads/2013/06/ClearBlueSky.jpg";
	qr.addEventListener('load', function(){
		ctx.drawImage(qr,70,25,400,400);

		drawBars();

	}, false);

	



})();