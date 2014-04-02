/*
	* Mid Terms for PWA-1
*/

(function (){

	// An empty array for the students and their info
	var studentArray = [];

	//Calling the Student instructor and adding the information to the constructor
	var firstStudent = new Student('Kaneisha Whipple', '3300 University Blvd', 'Winter Park', 'FL', [3.5, 3.8, 4.0], new Date());
	var secondStudent = new Student('Nicole Aitchison', '3300 Semoran Blvd', 'Conroe', 'TX', [4.55, 3.2, 4.1], new Date());
	var thirdStudent = new Student('Adam Gedney', '3300 East Colonial', 'Brooklyn', 'NY', [3.9, 4.1, 4.2], new Date());

	//Adding an array with the new student info into it
	var students = [firstStudent, secondStudent, thirdStudent];

	// Loop goes through the students array and console logs all the information
	for(i=0, max=students.length; i < max; i++){
		console.log("Name: " + students[i].name);
		console.log("Address: " + students[i].address);
		console.log("GPA: " + students[i].GPA);
		console.log(students[i].date);
	};

	//Adds the information for the new student
	var extraStudent = new Student('Mike Miller', '3300 Alafaya Trail', 'Tampa', 'FL', [3.1, 4.1, 3.9], new Date());
	students.push(extraStudent);

	// Loop goes through the studentInfo array and console logs all the information including the extra student
	for(i=0, max=students.length; i < max; i++){
		console.log("Name: " + students[i].name);
		console.log("Address: " + students[i].address);
		console.log("GPA: " + students[i].GPA);
		console.log(students[i].date);
	};

	//Calls the gpaAverage function to run
	 gpaAverage();


	// making the button a variable so it can be called
	var button = document.querySelector('.buttonred');
	//Adding an event listener to the button so when it is clicked it will run the displayInfo function
	button.addEventListener("click", displayInfo, false);

	// a variabe to be equal to be the length of the studentInfo array
	 var studentArray = students.length;
	 //A number to start a counter on. This will be called later
	 var studentDisplay = 0;


	function displayInfo(event){

		//Give each div from the HTML a variable name so it can be changed and called later
		var name = document.querySelector('#name');
		var address = document.querySelector('#address');
		var gpa = document.querySelector('#gpa');
		var date = document.querySelector('#date');
		var gpaAVG = document.querySelector('#gpaavg');

		// If the studentDisplay counter is not apart of the studentArray then display the correct data and add to the counter if not
		// that means they're at the end of the array. Therefore I remove the event listener and add done to the button
		if(studentDisplay != studentArray){
			name.innerHTML = "Name: " + students[studentDisplay].name;
			address.innerHTML = "Address: " + students[studentDisplay].address;
			gpa.innerHTML = "GPA: " + students[studentDisplay].GPA;
			date.innerHTML = "Date: " + students[studentDisplay].date;
			gpaavg.innerHTML = "Average GPA: " + students[studentDisplay].avgGPA;

			studentDisplay++;

		}else{
			studentDisplay = 0;
			button.removeEventListener("click", displayInfo, false);
			button.innerHTML = 'DONE!!!'
		}
	};

	//Function that for each student run the averageGPA function so the information in it can display
	function gpaAverage(){
 		students.forEach(function(element){
 			element.averageGPA();
 		});
 	};



})();
