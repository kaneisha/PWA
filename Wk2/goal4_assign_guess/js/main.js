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

	// Make a variable that will choose a random number
	var guess = Math.floor((Math.random()*10)+1); 
	console.log(guess);
	// The amoount of guesses the player has
	guesses = 3;

	//Adds the key event so when enter is pressed it acts as the button
	window.addEventListener('keyup', function (e){
		if(e.keyCode === 13 && guesses > 0){
			//calls the validate function
			validate();
			
		}
	}, false);

	// make a variable to equal the button and use that variable to make a click function
	var button = document.querySelector('button');
	button.disabled = false;
	button.onclick = function(event){
			console.log('clicked');
			//call the validate function
			validate();
	};

	var validate = function(){
		//If the input field is empty, less than 1 or greater than 10 change the output text field to say You have to guess a number between 1 and 10
		if(document.querySelector('#input').value === "" || document.querySelector('#input').value < 1 || document.querySelector('#input').value > 10){
			document.querySelector('#output').innerHTML = 'You have to guess a number between 1 and 10';
			
		}else{
			//if it doesn't call the userGuess function
			userGuess();
		}
	};

	var userGuess = function(){
		//create a variable to equal the input field
		var userInput = document.querySelector('#input').value;
		//make a counter for the guesses to go down with each click 
		guesses--;
		//If the users guess is to high or low show the appropriate message along with the number of guesses left
		if(userInput > guess){
			document.querySelector('#output').innerHTML = 'Your guess is too high you have ' + guesses + ' tries left';
		}if(userInput < guess){
			document.querySelector('#output').innerHTML = 'Your guess is too low you have ' + guesses + ' tries left';
		}if(userInput == guess){
			//If the users guess is correct show the winning message 
			document.querySelector('#output').innerHTML = 'Your guess was right you won!';
			//disables the button
			button.disabled = true;
		}
		//if the user runs out of guesses and the last thing entered wasn't the correct number show the you ran out of guesses message
		if(guesses === 0 && userInput!=guess){
			document.querySelector('#output').innerHTML = 'You ran out of guesses';
			//disables the button
			button.disabled = true;
		}
		
	};


})();