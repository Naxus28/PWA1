/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/4/13
 * Time: 9:44 PM
 * To change this template use File | Settings | File Templates.
 */
    console.log("loaded");

var dice = Math.floor(Math.random()*11+2);    //~~ is the same as Math.floor


//conditional using the word switch

switch(dice) {
    case 2:
        console.log("You rolled a two");
        break;
    case 3:
        console.log("You rolled a three");
        break;
    default:
           console.log("You rolled something else");

}


// function review

//SCOPE
//scope defines the visibility of a variable or function
//if a variable is inside a function it is a local variable;
//if a variable is outside a function it is a global function;
//we don't want to have global variables bc anyone can console log the global variable ane manipulate it

//SCOPE OF FUNCTIONS

//inner functions  have access to variables in the outer functions but outer functions don't see the variables inside an inner function
//// (function () {
//var soda = "coke";
//
//function pizza(){
//    var cheese="mozzarela";
//console.log(soda);
//}
//}

//the function pizza can see the variable in the self-executing function but the self- executing function
// cannot see what is inside the function pizza
//

//http://www.jslint.com/  this site checks errors in javescriot codes. copy and paste to check



