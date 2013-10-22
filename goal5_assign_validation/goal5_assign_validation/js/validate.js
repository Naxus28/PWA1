/*
     Developed by the JavaScript team at Fullsail
     Date: 1306
*/



/*
 Each field will need to meet the following formats:
 username: Has a capitalized first character for the firstName and lastName. (i.e "John Doe", "Mary Ann Doe)
 email: Matches a basic email address, and checks that they are of the proper form. Check to ensure the top level domain is between 2 and 4 characters long, but does not need to check the specific domain against a list (especially since there are so many of them now). (i.e. “account@domain.topLevelDomain”)
 account: This can be any number of alpha-numeric characters, must start with an alphabet.
 @: this at-sign must exist in an email address
 domain: This can be any number of alpha-numeric characters, must start with an alphabet.
 . (the dot) : This is a required special character.
 topLevelDomain: The top level domain will between 2 and 4 alpha characters long, this is required in the email address name.
 phone number: The phone number must meet this format (###)###-####.
 social security number: The social security number must meet this format ###-##-####.
 password : The password's first character must be a letter, it must contain at least 4 characters and no more than 15 characters and no characters other than letters, numbers and the underscore may be used
 2. A skeleton of the program is being provided to you in the validate.js file.
 3. You will create an onsubmit function that will contain a call to the function validateField. An argument needs to be passed in the validateField function call. The argument will be the ID name of the input field. You must dynamically retrieve the ID name from the DOM/HTML. You will need one call to the validateField function for each input field that needs to be validated.
 4. A skeleton of the validateField function has been provided to you in the validate.js file.
 5. In the validateField function, you will need to create an else-if statement for each input field id. See the IF statement example format in the validate.js file.
 6. In the validate.js file you will see a variable named "pass". The string value will need to be replaced with JavaScript code that will test the pattern against the input value.
 7. All the code to make the background red, green, or white has been provided. All you need to do is generate the code above.

 */


(function(){

    myform.onsubmit = function(e){

        //Below is one example of the validateField call with an argument.
        //You must dynamically retrieve the ID name from the DOM/HTML.

        validateField(id);  //id = is the form input field ID


        e.preventDefault();
        return false;
    };


    var validateField = function(inputName){

        if (inputName.name === 'id name goes here'){
            var pattern = 'a RegEx pattern goes here'

            //You will need to create an else-if statement for each input field id.  The
            //      format will be similar to the above IF statement.


        };

        var pass = 'the RegEx .test statement is needed here';
        var errorMsg = inputName.nextSibling.nextSibling.nextSibling.nextSibling;

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



