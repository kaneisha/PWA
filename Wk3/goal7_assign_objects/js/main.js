/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

 (function(){

 	//Set an array of names
 	var names = ["Kaneisha","Nicole","Adam","Jeanna","Mike"];
 	var interval;
 	var people = [];

 	//Loop through the names array 3 times 
 	for(var i = 0; i < 3; i++){
 		//Generates a number the length of the names array
 		var numPeople = Math.floor(Math.random() * names.length);
 		var person = new Person(names[numPeople], i + 1);

 		populateHTML(person.name, "r" + (i + 1) + "c1");
 		populateHTML(person.jobs, "r" + (i + 1) + "c2");

 		people.push(person);
 		names.splice(numPeople,1);

 		console.log(person);
 	};

 	//Makes sure interval runs only once
 	clearInterval(interval);
 	interval = setInterval(runUpdate, 1000/ 30);


 	function runUpdate(){
 		people.forEach(function(element){
 			element.update();
 		});
 	};

 	function populateHTML(data,field){
 		var id=document.getElementById(field);
 		id.innerHTML = data;
 	}

 })();

