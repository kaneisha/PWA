// self-executing function
(function() {

	/*******************************************

	 STUDENTS ASSIGNMENT

	 1.  create a function named 'avgNumbers'
	 - accept 1 parameter into the function that will be an array of unlimited numbers
	 - find the average of all the numbers
	 - return the average from the function
	 - console.log the answer outside of the function

	 2.  create a function named 'fullName'
	 - accept 2 parameters into the function that are strings (firstname and lastname)
	 - return the name after it has been concatenated
	 - console.log the answer outside of the function

	 3.  create a function named 'wordCount'
	 - accept 1 parameter into the function that is a long string of text words
	 - create a function that counts all the words and return the answer
	 - console.log the answer outside of the function

	 4.  create a function named 'charCount'
	 - accept 1 parameter into the function that is a long string of text
	 - return length of the array of string characters
	 - console.log the answer outside of the function

	 5.  create a function named 'vowelsInWord'
	 - accept 1 parameter into the function that is a a one word string
	 - return the number of vowels in the word
	 - console.log the answer outside of the function

	 6.  create a function named 'findNum'
	 - accepts 2 parameters into the function - 1. array of numbers, 2. boolean
	 - if the second parameter being passed is "false" or null then
	 - create an array with all of the odd numbers from
	 the array
	 - else - create an array with all of the even numbers
	 from the array
	 - return the array
	 - console.log the answer outside of the function
	 ********************************************/

	console.log('------ Goal2: Assignment: JavaScript Practice ----------');

	console.log("1. avg of an array of numbers");
	var avgNumbers = function(arr) {
		var sum = 0;
		for (var i = 0, max = arr.length; i < max; i++) {
			sum += arr[i]
		}
		var average = sum / arr.length;
		return average;
	};

	//console.log(average);

	console.log('avg number = ', avgNumbers([1, 2, 3, 4, 5]));

	//--------------------------------------------------------
	console.log("2. concat first and last name");

	var firstName = "James "
	var lastName = "Bond"

	console.log(firstName.concat(lastName));

	//console.log(fullName('James', 'Bond'));

	//--------------------------------------------------------
	console.log("3. word count");
	var ipsum = "this is test text that is being used as input to a function"

	var words = ipsum.split(" ");
	console.log(words.length)

	//console.log(wordCount(ipsum));

	//--------------------------------------------------------
	console.log("4. sentence char count");

	console.log(ipsum.length);

	//console.log(charCount(ipsum));

	//--------------------------------------------------------
	console.log("5. how many vowels in a word");

	var js = "JavaScript";
	var vowelCount = 0;
	for (var i = 0; i < js.length; ++i) {
		switch(js.charAt(i)) {
			case 'a':
			case 'e':
			case 'i':
			case 'o':
			case 'u':
				vowelCount++;
				break;
			default:
			// do nothing
		}
	}
	console.log(vowelCount);

	//--------------------------------------------------------
	console.log("6. find number and create an array of even or odd numbers");

	var findNum = function(newArr, boolean) {

		var matches = [];

		for (var i = 0; i < newArr.length; i++) {
			if (boolean) {
				if (newArr[i] % 2 == 0) {
					matches.push(newArr[i])
				}
			} else {
				if (newArr[i] % 2 == 1) {
					matches.push(newArr[i]);
				}
			}
		}
		return matches;
	}

	console.log(findNum([31, 22, 4, 67, 83, 6, 5, 4], true));
	console.log(findNum([31, 22, 4, 67, 83, 6, 5, 4], false));

})(); 