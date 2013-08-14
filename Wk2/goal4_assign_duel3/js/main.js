/*
Name: Kaneisha Whipple
Date: 8/13/2013
Assignment: Goal4: Assignment: Duel3
*/

// self-executing function
(function(){
	console.log("FIGHT!!!");


	//Assign player name, health and damage
	fighters = [
		fighter1 = {
			name: 'Spiderman', 
			damage: 30, 
			health: 100
		},
	
		fighter2 = {
			name: 'Batman', 
			damage: 30, 
			health: 100
		},
	];

	//initiate the round
	var round = 0;

	var button = document.querySelector('.buttonblue')
	var gameOver = false;

		
		button.onclick = function(event){
			if(gameOver === false){


			//When the game starts this will pop up letting the player know the health and the round
			//alert(fighters[0].name+":"+fighters[0].health+" *START* "+fighters[1].name+":"+fighters[1].health);
		
			console.log("in the fight function");

				//assign minimum amount of damage each player gets by multiplying the playerdamage by .5
				var minDamage1 = (fighters[0].damage * .5);
				var minDamage2 = (fighters[1].damage * .5);

				//Choose a random number between "playerDamage & minimumDamage using the math.random formula
				var punch1 = Math.floor(Math.random()*(fighters[0].damage - minDamage1) + minDamage1);
				var punch2 = Math.floor(Math.random()*(fighters[1].damage - minDamage2) + minDamage2);

				//inflict damage by setting the player health to equal the new damage and decrease it with each round
				fighters[0].health -= punch2;
				fighters[1].health -= punch1;


				// set the results to equal the winnerCheck function
				var results = winnerCheck();
				//console.log(results);

				// if the resutls equal no winner then do another round and add the alert with the stats of the game
				// if there is a winner show the results of the game 
				document.querySelector('#kabal p').innerHTML = fighters[0].health;
			 	document.querySelector('#kratos p').innerHTML = fighters[1].health;
				if(results === "no winner"){
					round++;

				}else{
					document.querySelector('#scores').innerHTML = results;
					//e.preventDefault();

					document.querySelector('.buttonblue').disabled = true;
					gameOver = true;


				}

				document.querySelector('#round').innerHTML = results;

			};
		}

	

	function winnerCheck(){
		//console.log("in winnerCheck FN")
		var result = "no winner";

		// Winner stats
		// If both players health is less than 1 they both lose if not whoever's health is under 1 first loses
		if(fighters[0].health < 1 && fighters[1].health < 1){

			result = "You Both Die"
		}else if(fighters[0].health < 1){

			result = fighters[1].name + " WINS!!!"
		}else if(fighters[1].health < 1){
			result = fighters[0].name + " WINS!!!"
		};

		return result;
	};

	console.log('program starts')

})();
