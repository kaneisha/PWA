/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

(function(){

	var Person = function(names,rows){
		this.name = names;
		//sets action for each person
		this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];
		//sets job for each person
		this.jobs = Person.jobs[Math.floor(Math.random() * Person.jobs.length)];
		//defines rows so it'll know what to update
		this.row = rows;

		console.log(this.row);
		console.log(this.jobs);
		console.log(this.action);

		var id = document.getElementById("r" + this.row + "c3");
		id.innerHTML = this.action;

	};

	// Sets person so main.js will know what Person is
	window.Person = Person;

	Person.jobs = ["teacher","farmer","student","pilot","actor"];
	Person.actions = ["sleeping","eating","working"];

	Person.prototype.update = function(){
		if(Math.floor(Math.random() < .01)){
			var i = Math.floor(Math.random() * Person.actions.length);
			this.action = Person.actions[Math.floor(Math.random() * Person.actions.length)];
			var id = document.getElementById("r" + this.row + "c3");
			id.innerHTML = this.action;
		}
		

	}


})();