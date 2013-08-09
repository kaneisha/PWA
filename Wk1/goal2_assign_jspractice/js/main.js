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
        // Start the sum total at 0
		var sum = 0;
        // For loop to go through the numbers in the array
		for (var i = 0, max = arr.length; i < max; i++) {
            // Add the numbers in the array
			sum += arr[i]
		}
        // Average formula
		var average = sum / arr.length;
		return average;
	};


	console.log('avg number = ', avgNumbers([1, 2, 3, 4, 5]));

	//--------------------------------------------------------
	console.log("2. concat first and last name");

    var fullName = function(name){
        // Create strings for the first and last name
        var firstName = "James"
        var lastName = "Bond"

        // Concat the first and second string
        var wholeName = firstName.concat(lastName);
        return wholeName;
    };

    

	console.log(fullName('James', 'Bond'));

	//--------------------------------------------------------
	console.log("3. word count");
	var ipsum = "this is test text that is being used as input to a function"

    var wordCount = function(phrase){
        // Take the spaces out of the string so it won't bw counted
        var words = ipsum.split(" ");
        var numberOfWords = words.length
        return numberOfWords;
    }

	console.log(wordCount(ipsum));

	//--------------------------------------------------------
	console.log("4. sentence char count");

    var charCount = function(phrase2){
        // Display length of ipsum characters
        //console.log(ipsum.length);
        var count = ipsum.length;
        return count;
    }
    

	console.log(charCount(ipsum));

	//--------------------------------------------------------
	console.log("5. how many vowels in a word");

    var vowelsInWord = function(word){

        // Start the vowel count at 0
        var vowelCount = 0;
        // For loop to go through the letters in the string
        for (var i = 0; i < word.length; ++i) {
            switch(word.charAt(i)) {
                //Search for the vowels
                case 'a':
                case 'e':
                case 'i':
                case 'o':
                case 'u':
                case 'A':
                case 'E':
                case 'I':
                case 'O':
                case 'U':
                    // Add a number for each vowel
                    vowelCount++;
                    break;
                default:
                // do nothing
            }
        }

        return vowelCount;

    }

    
	console.log(vowelsInWord("JavaScript"));

	//--------------------------------------------------------
	console.log("6. find number and create an array of even or odd numbers");

	var findNum = function(newArr, boolean) {

        // Create new array to push even and odd numbers in 
		var matches = [];

        //  For loop to go through numbers in the array
		for (var i = 0; i < newArr.length; i++) {
            // If boolean is true push even numbers
			if (boolean) {
				if (newArr[i] % 2 == 0) {
					matches.push(newArr[i])
				}
			} 
            // If false push odd numbers 
            else {
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