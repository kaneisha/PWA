/*
Name: Kaneisha Whipple
Date: 8/08/2013
Assignment: Goal2: Assignment: Duel2
*/

// self-executing function
(function(){
	console.log("FIGHT!!!");


	//Assign player name, health and damage
	var fighter1 = ["Spiderman", 20, 100]
	var fighter2 = ["Batman", 20, 100]

	//initiate the round
	var round = 0;

	function fight(){
		//When the game starts this will pop up letting the player know the health and the round
		alert(fighter1[0]+":"+fighter1[2]+" *START* "+fighter2[0]+":"+fighter2[2]);
	
		console.log("in the fight function");

		// Loops through rounds 10 times or until there is a winner
		for (var i = 0; i < 10; i++) {
			//assign minimum amount of damage each player gets by multiplying the playerdamage by .5
			var minDamage1 = (fighter1[1] * .5);
			var minDamage2 = (fighter2[1] * .5);

			//Choose a random number between "playerDamage & minimumDamage using the math.random formula
			var f1 = Math.floor(Math.random()*(fighter1[1] - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()*(fighter2[1] - minDamage2) + minDamage2);


			//inflict damage by setting the player health to equal the new damage and decrease it with each round
			fighter1[2] -= f1;
			fighter2[2] -= f2;

			//console.log(player1Name+":"+player1Health+ "" +player2Name+":"+player2Health);

			// set the results to equal the winnerCheck function
			var results = winnerCheck();
			console.log(results);

			// if the resutls equal no winner then do another round and add the alert with the stats of the game
			// if there is a winner show the results of the game 
			if(results === "no winner"){
				round++;
				alert(fighter1[0]+":"+fighter1[2]+" *ROUND "+round+" OVER* "+fighter2[0]+":"+fighter2[2]);
			}else{
				alert(results);
				break;
			}

		};
	};

	function winnerCheck(){
		//console.log("in winnerCheck FN")
		var result = "no winner";

		// Winner stats
		// If both players health is less than 1 they both lose if not whoever's health is under 1 first loses
		if(fighter1[2] < 1 && fighter2[2] < 1){
			result = "You Both Die"
		}else if(fighter1[2] < 1){
			result = fighter2[0] + " WINS!!!"
		}else if(fighter2[2] < 1){
			result = fighter1[0] + " WINS!!!"
		};

		return result;
	};

	console.log('program starts')

	 //Call the fight fuction and the program starts
	fight();
})();