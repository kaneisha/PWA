/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/

//parseInt forces a string to an integer

(function(){

    myform.onsubmit = function(e){

        //Create variables to equal the ids of the user input fields
        var username = document.querySelector('#f_username') ;
        var email = document.querySelector('#f_email');
        var pwd = document.querySelector('#f_password');
        var phone = document.querySelector('#f_phone');
        var ssn = document.querySelector('#f_ssn');

        //Make an array that has all the variables of the ids of the user input fields
        var ids = [username, email, pwd, phone, ssn];

        //Create a for loop to go through all the length of the id array
        for(var i=0, max = ids.length; i < max; i++ ){
            //Call the validate function with the parameter being the ids from the array that we put in the for loop
            validateField(ids[i]);
        }


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){
        //Each conditional is for the input value to equal the id of the input field and the pattern inside is what will
        //be checked in a future variable
        if (inputName.name === 'f_username'){
            var pattern = /^[A-Z]+(([\'\,\.\- ][A-Z ])?[a-zA-Z]*)*$/;


        }else if(inputName.name === 'f_email'){
             var pattern = /^[a-zA-Z]+[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;


        }else if(inputName.name === 'f_password'){
             var pattern = /^[a-zA-Z]\w{3,14}$/;


        }else if(inputName.name === 'f_phone'){
             var pattern = /^[\\(]{0,1}([0-9]){3}[\\)]{0,1}([^0-1]){1}([0-9]){2}[-]([0-9]){4}/;


        }else if(inputName.name === 'f_ssn'){
             var pattern = /^\d{3}-\d{2}-\d{4}$/;


        };

        //Variable created to check to make sure what is entered by the user matches the pattern
        var pass = pattern.test(inputName.value);
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

        //Conditionals are for after the input fields are checked the right color appears in the background
        if (!pass || inputName.value.length < 2){
            errorMsg.style.display='block';
            inputName.style.backgroundColor = 'red';
        } else if (pass && inputName.value.length > 5){
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'green';
        } else {
            errorMsg.style.display='none';
            inputName.style.backgroundColor = 'white';
        };
    };

})();  // end wrapper



