
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


function wordCount(sentence){


    return  sentence.split(" ").length

}

console.log("I am writing a sentence that has " + wordCount("I am writing a sentence that has") + " words");

