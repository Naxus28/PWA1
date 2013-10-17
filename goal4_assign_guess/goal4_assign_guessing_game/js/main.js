///**
// * GUESSING GAME:
// *
// * Created By:
// * Date:
// *
// * GUESSING GAME
// */
//
////Game variables
//
// //HTML ids
//
// //<p id="output">
////<input id="input">
////<button>guess</button>
//
//
//
//
//
//(function (){
//
//    var randomIntegerOneThroughTen = Math.floor(Math.random()*11);
//
//    //console.log(randomIntegerOneThroughTen);
//
//    var output =  document.querySelector("#output");
//    //console.log(output);
//
//    var input =  document.querySelector("#input");
//    //console.log(input);
//
//    var guess = document.querySelector("#guess")
//    //console.log(guess);
//
//    var button =  document.querySelector("button");
//    //console.log(button);
//
//
//    button.addEventListener("click", onClick);
//
//  function onClick(){
//
//      validate();
//
//
//           console.log("in the button")
//  }
//
//
//       function validate(){
//
//
//           if(input=""){
//
//               guess.innerHTML="You need to enter a number";
//
//           }
//          else if (input<0 || input>10){
//
//               guess.innerHTML="You need to enter a number between 0 and 10";
//
//           }  else{
//               inputNumbers();
//           }
//
//
//       }
//
//    var i = 0;
//    var j= 0;
//
//    var largeNumbers = ["Your number was too large. You have two more tries.", "Your number was too large. You have on more try.", "This was your last try. The game is now over. Please refresh the browser to play again."];
//    var smallNumbers = ["Your number was too small. You have two more tries.", "Your number was too small. You have on more try.", "This was your last try. The game is now over. Please refresh the browser to play again."];
//
//
//
//    function inputNumbers(){
//
//    if (input>randomIntegerOneThroughTen) {
//
//        guess.innerHTML= largeNumbers[i];
//        i++;
//        if(i>largeNumbers.length){
//            guess.innerHTML=
//
//        }
//
//
//    }
//
//    if (input<randomIntegerOneThroughTen) {
//
//        guess.innerHTML= smallNumbers[j];
//        j++;
//        if(j>largeNumbers.length){
//            guess.innerHTML= "This was your last try. The game is now over. Please refresh the browser to play again.";
//
//            button.removeEventListener("click", onClick);
//
//            function onClick(){
//                validate();
//            };
//
//        }
//
//    }
//
//    else if (input=randomIntegerOneThroughTen){
//        guess.innerHTML= "Congratulations! You guessed the right number! To play another game, refresh your browser.";
//
//        button.removeEventListener("click", onClick);
//
//        function onClick(){
//               validate();
//        }
//
//    }
//
//         }
//
//})();