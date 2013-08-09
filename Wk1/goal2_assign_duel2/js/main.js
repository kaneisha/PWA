/*
Name: Kaneisha Whipple
Date: 8/06/2013
Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){
	console.log("FIGHT!!!");

	//assign player name
	var player1Name = "Spiderman";
	var player2Name = "Batman";

	//assign the amount of damage each player gets per hit
	var player1Damage = 20;
	var player2Damage = 20;

	//assign player starting health
	var player1Health = 100;
	var player2Health = 100;

	//initiate the round
	var round = 0;

	function fight(){
		//When the game starts this will pop up letting the player know the health and the round
		alert(player1Name+":"+player1Health+" *START* "+player2Name+":"+player2Health);
	
		console.log("in the fight function");

		// Loops through rounds 10 times or until there is a winner
		for (var i = 0; i < 10; i++) {
			//assign minimum amount of damage each player gets by multiplying the playerdamage by .5
			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;

			//Choose a random number between "playerDamage & minimumDamage using the math.random formula
			var f1 = Math.floor(Math.random()*(player1Damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()*(player2Damage - minDamage2) + minDamage2);


			//inflict damage by setting the player health to equal the new damage and decrease it with each round
			player1Health -= f1;
			player2Health -= f2;

			//console.log(player1Name+":"+player1Health+ "" +player2Name+":"+player2Health);

			// set the results to equal the winnerCheck function
			var results = winnerCheck();
			console.log(results);

			// if the resutls equal no winner then do another round and add the alert with the stats of the game
			// if there is a winner show the results of the game 
			if(results === "no winner"){
				round++;
				alert(player1Name+":"+player1Health+" *ROUND "+round+" OVER* "+player2Name+":"+player2Health);
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
		if(player1Health < 1 && player2Health < 1){
			result = "You Both Die"
		}else if(player1Health < 1){
			result = player2Name + " WINS!!!"
		}else if(player2Health < 1){
			result = player1Name + " WINS!!!"
		};

		return result;
	};

	console.log('program starts')

	 //Call the fight fuction and the program starts
	fight();
})();