/*
	PWA1: Goal7: Simple Library App

	Kaneisha Whipple
	PWA: 1308
	8/24/13
*/

(function(){

	//Made a variable to store all the links in an array
	var links = document.querySelectorAll('#container a');
	console.log(links);

	//Made a variable to store the returned anchors from a call to my library 
	var results = libs(links);
	console.log(results);

	//Made a call to my library and passed in the links variable 
	var call = libs(links).each(function(){
		//Added an onclick so everytime a link is clicked the link console logs instead of going to the site
		  this.onclick = function(e){
                e.preventDefault();
                console.log(this);
            }
	});
	console.log(call);

	

})();  // end wrapper