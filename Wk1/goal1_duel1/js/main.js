/*
Name: Kaneisha Whipple
Date: 8/06/2013
Assignment: Goal1: Assignment: Duel1
*/

// self-executing function
(function(){
	console.log("FIGHT!!!");

	//assign player name
	var player1Name = "Scott";
	var player2Name = "Vid";

	//assign the amount of damage each player gets per hit
	var player1Damage = 50;
	var player2Damage = 50;

	//assign player starting health
	var player1Health = 100;
	var player2Health = 100;

	//initiate the round
	var round = 0;

	function fight(){
		//When the game starts this will pop up letting the player know the health and the round
		alert(player1Name+":"+player1Health+" *START* "+player2Name+":"+player2Health);
		//code goes here
		console.log("in the fight function");

		for (var i = 0; i < 10; i++) {
			//Choose a random number between "" & ""
			var minDamage1 = player1Damage * .5;
			var minDamage2 = player2Damage * .5;
			var f1 = Math.floor(Math.random()*(player1Damage - minDamage1) + minDamage1);
			var f2 = Math.floor(Math.random()*(player2Damage - minDamage2) + minDamage2);

			/**console.log(f1);
			console.log(f2);**/

			//inflict damage
			player1Health -= f1;
			player2Health -= f2;

			//console.log(player1Name+":"+player1Health+ "" +player2Name+":"+player2Health);

			var results = winnerCheck();
			console.log(results);

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
		console.log("in winnerCheck FN")
		var result = "no winner";

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

	fight();
})();