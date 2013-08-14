/**
 * GUESSING GAME:
 *
 * Created By: Kaneisha Whipple
 * Date: 8/13/13
 * 
 * GUESSING GAME
 */

//Game variables
(function (){

	var guess = Math.floor((Math.random()*10)+1); 
	console.log(guess);

	var button = document.querySelector('button');
	button.onclick = function(event){
			console.log('clicked');
			validate();
	};

	var validate = function(){
		if(document.querySelector('#input').value === ""){
			document.querySelector('#output').innerHTML = 'You have to guess a number between 1 and 10';
			console.log("hi");
			
		}
	};


})();