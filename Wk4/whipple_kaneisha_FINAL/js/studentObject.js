
//Makes the Student function and passing in the information 
var Student = function(name,street,city,state,GPA,date){
	this.name = name;
	this.address = street + " " + city + ", " + state;
	this.GPA = GPA;
	//toLocaleDateString() changes the date to include dashes and takes all letters and time out
	this.date = date.toLocaleDateString();
	this.avgGPA = 0;
};

//Defines Student so main.js will recognize it
window.Student = Student;

//Student prototype for GPA average calculation
Student.prototype.averageGPA = function(){
	//adds the GPAs in the array
	var totalGPA = this.GPA[0] + this.GPA[1] + this.GPA[2];
		
		//Formula for GPA average
		var average = totalGPA / 3;

		//Makes the gpa only have 2 numbers after the decimal
		this.avgGPA = average.toFixed(2);
}