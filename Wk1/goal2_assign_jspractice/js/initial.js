
//
//1. create a function named 'avgNumbers'
//    - accept 1 parameter into the function that will be an array of unlimited numbers
//- find the average of all the numbers
//- return the average from the function
//    - console.log the answer outside of the function



function avgNumbers(array){

    var sumArray=0;

     for(var i=0; i<array.length; i++) {


       sumArray+=array[i];

         sumArray = sumArray +array[i];

}

        return sumArray / array.length;

}

console.log('avg number = ', avgNumbers([1,2,3,4,5,6,7]));


//1.a. THE CODE BELOW IS A LITTLE TEST TO SEE IF I KNOW HOW TO CALL THE FUNCTION ABOVE - IT TAKES TWO PARAMETERS AND
// CALCULATES THE SUM OF THE AVERAGE OF THESE PARAMETERS AND THE RESULT THE FUNCTION ABOVE (THE VALUE OF THE PARAMETERS WILL CHANGE)

function sumAvgNumbers(a,b){

    return (a+b) *.5 +  avgNumbers([5,5,5,5,5]);
}

console.log("The sum of the two averages is "+ sumAvgNumbers(5,5));


//1.b.THIS IS A THIRD FUNCTION CALLING THE FUNCTION ABOVE - IT IS GOING TO MULTIPLY THE RESULT OF THE ABOVE FUNCTIONS BY
//WHATEVER NUMBER IS INPUT

function resultOfFunctions(a,functionOne,functionTwo){

    return   a*functionOne*functionTwo;
}

console.log("The value resulting from the multiplication of the three functions is "+ resultOfFunctions(5,avgNumbers([5,5,5,5,5]),sumAvgNumbers(5,5)));

//

//2. create a function named 'fullName'
//    - accept 2 parameters into the function that are strings (firstname and lastname)
//- return the name after it has been concatenated
//- console.log the answer outside of the function

function fullName(firstname,lastname){

    return   firstname +" "+ lastname
}

console.log(fullName("Gabriel","Ferraz"));


//3. create a function named 'wordCount'
//    - accept 1 parameter into the function that is a long string of text words
//- create a function that counts all the words and return the answer
//- console.log the answer outside of the function


//EXPLANATION OF WHAT I DID BELOW:
// THE STRING METHOD .SPLIT WILL  RETURN AN ARRAY OF THE ELEMENTS OF THE STRING. IT CAN TAKE TWO OPTIONAL PARAMETERS
// THE FIRST PARAMETER (WHICH I PASSED BELOW AS " ") WILL SPECIFY WHICH CHARACTER WILL SEPARATE THE ELEMENTS OF THE
//  RETURNED ARRAY. I.E. IF YOU WANT TO SEPARATE THE STRING INTO NEW ELEMENTS EVERY TIME THE WORD "A" APPEARS, YOU
//NEED TO PASS "A" AS THE PARAMETER. I WANTED THAT EVERY TIME A SPACE APPEARED, A NEW ELEMENT WAS CREATED IN THE ARRAY.
// BECAUSE THE STRING IN THIS EXERCISE IS A PHRASE, EVERY SPACE WILL DIVIDE 2 WORDS.
//THEN I USE THE PROPERTY .LENGTH TO RETURN THE LENGTH OF THE ARRAY CREATED BY THE STRING FUNCTION . SPLIT. THIS
//SHOULD RETURN THE NUMBER OF ELEMENTS OF THAT ARRAY. IN THIS CASE, IT IS THE NUMBER OF WORDS.


function wordCount(sentence){


    return  sentence.split(" ").length

}

console.log("I am writing a sentence that has " + wordCount("I am writing a sentence that has") + " words");



////4. create a function named 'charCount'
//- accept 1 parameter into the function that is a long string of text
//- return length of the array of string characters
//- console.log the answer outside of the function

//EXPLANATION:   stringOfText.split(" ").length-1 WILL RETURN THE NUMBER OF SPACES.
// THE .SPLIT METHOD WILL SPLIT THE STRING INTO AN ARRAY -- SPLITTING THE STRING
// EVERY TIME A SPACE APPEARS. BASICALLY IT CREATES A NEW ELEMENT
// AFTER EVERY SPACE. THE .LENGTH PROPERTY WILL GIVE THE LENGTH OF THE ARRAY. BECAUSE THIS IS A STRING OF
// WORDS AND SPACES, SPLITTING THE STRING USING THE SPACE AS "SEPARATOR" WILL CREATE AN ARRAY OF WORDS
// (SPACES SEPARATE WORDS FROM ONE ANOTHER). NOW THAT WE HAVE THE NUMBER OF WORDS, IT IS EASY TO FIND THE
//NUMBER OF SPACES. BECAUSE THE NUMBER OF SPACES IS ALWAYS ONE LESS THAN THE NUMBER OF WORDS, THE FORMULA IS
// NUMBER OF SPACES= NUMBER OF WORDS - 1; TRANSLATING IT INTO CODE, WE HAVE stringOfText.split(" ").length-1

// NOW WE HAVE THE NUMBER OF SPACES, WHICH ARE NOT CHARACTERS. TO FIND THE NUMBER OF CHARACTERS (LETTERS) OF THE STRING
//WE NEED TO KNOW THE TOTAL NUMBER OF CHARACTERS (WHICH INCLUDES SPACES) AND SUBTRACT THE NUMBER OF SPACES.
// SO THE LOGIC IS: NUMBER OF LETTERS = TOTAL NUMBER OF CHARACTERS - NUMBER OF SPACES.

//THE CODE TO FIND THE TOTAL NUMBER OF CHARACTERS IS stringOfText.split("").length.
// When the parameter of the .splice method is an empty string(as above), each character of string will be one single
// element of the array. This means that each letter and each space will count as one character.
// After using the .split("") we will have all characters distributed in an array.
// Now we need to count how many elements we have, which includes letters and space. We use the .length
//property to count the elements of the array.
// Then we subtract the spaces (which we have previously found) from the total of characters (that we found using . length). The
//result is the number of characters (letters) in the string.

//TRANSLATING THAT INTO CODE LANGUAGE WE HAVE: stringOfText.split("").length - (stringOfText.split(" ").length -1)

function charCount(stringOfText){

    var numberOfSpaces =  stringOfText.split(" ").length -1;

    //console.log(numberOfSpaces);

   return stringOfText.split("").length - numberOfSpaces;

}
console.log(charCount("This is a sentence with a whole bunch of characters"));



//5.create a function named 'vowelsInWord'
//    - accept 1 parameter into the function that is a one word string
//- return the number of vowels in the word
//- console.log the answer outside of the function

// EXPLANATION: THE .MATCH FUNCTION RETURNS WHATEVER PART OF A STRING MATCHES THE VALUES IN THE PARAMETERS. THE
//TYPE OF PARAMETER PASSED HERE IS REGEX. IT HAS A SPECIAL SYNTAX (SEE BELOW).
//IF WE WANT MORE THAN ONE PARAMETER (IN THIS CASE ALL VOWELS), WE NEED TO INCLUDE THEM IN THE BRACKET.
//THE SYNTAX REQUIRES THAT WE USE A BACKSLASH, THEN THE PARAMETERS, THEN ANOTHER BACKSLASH, THEN THE LETTER g.
//IF WE WANT TO RETURN ALL INSTANCES OF THE VALUE WE PASSED (LIKE CAPITAL UPPER AND LOWER CASE), WE NEED
//TO USE gi INSTEAD OF g. This is called a case-insensitive match.

function vowelsInWord (numberOfVowels){


        return  numberOfVowels.match(/[aeiou]/g).length;

}

console.log(vowelsInWord("Gabriel"));