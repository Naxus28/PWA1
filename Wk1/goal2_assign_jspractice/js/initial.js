
//
//create a function named 'avgNumbers'
//    - accept 1 parameter into the function that will be an array of unlimited numbers
//- find the average of all the numbers
//- return the average from the function
//    - console.log the answer outside of the function



function avgNumbers(array){

    var sumArray=0;

     for(var i=0; i<array.length; i++) {



       sumArray+=array[i];


}

        return sumArray / array.length;

}

console.log('avg number = ', avgNumbers([1,2,3,4,5,6,7]));

