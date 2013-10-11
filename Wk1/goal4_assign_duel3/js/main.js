/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/8/13
 * Time: 2:22 AM
 * To change this template use File | Settings | File Templates.
 */


/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/1/13
 * Time: 3:23 AM
 * To change this template use File | Settings | File Templates.
 */
//Gabriel Ferraz Id# 4265628

// console.log("started");

//Game instructions
/*
 Damage occurs to both players at a random amount between half damage and maximum damage.
 So, if the player's damage variable is 50 then the amount of damage that can be inflicted will be between 25-50.
 •	Display the correct winner after the 10th round.
 If both players happen to die during the same round then display “No Winner Message”.
 •	Minimum of two functions.
 1.	fight() function - This function contains the code that loops through
 rounds and reduces the player’s health accordingly.
 2.	winnerCheck() function - This function is invoked after each round and returns
 a string of either the winner, the loser, a tie (both die) or no winner yet.
 This function does the conditional logic to determine if there is a winner or not.
 •	A break command is used to escape out of the loop if the fight is over before the 10 rounds is reached
 **/


//variables
//player one



//damage should be something in between maximum and half of maximum. this means it is a random between half random and maximum random



/*

 To obtain full credit on the assignment your submission should match the functionality of the demonstration. The following criteria must be adhered to as well as satisfying all items on this assignment's rubric.
 Open the js/main.js file.
 All uses of alert() must be removed

 An object with three properties(keys) is created for both fighters. The three properties are:
 name
 damage
 health
 Example: fighter1 = {name:Spiderman, damage:20, health:100};
 Both fighter objects should be in an array
 THIS TASK ABOVE IS DONE



 Modify fight() function
 Since this assignment is now using objects, the code in the fight() function must be modified from the previous version of the assignment to accommodate for this. NO loop will be needed!-since clicking on the button is what triggers the next round.
 THIS TASK ABOVE IS DONE



 Replace the alerts with code that access the DOM(HTML) such as getElemetById and/or querySelector
 Use JavaScript's innerHTML property to change the text in the HTML.


 The following information will be displayed dynamically in the HTML
 (view the demonstration again to see how this should look):
 Fighter's name and health at the top
 Current round number above the button
 Create a click event on the button

 When the button is clicked, the following should commence:
 advance round
 the modified fight() function is called
 Disable the button when the game is over and make sure the appropriate "game over message" is shown at the top.
 The message should be one of the following:
 Fighter 1 wins
 Fighter 2 wins
 Both Fighters Die
 Make sure the actual name of the fighter is shown not fighter1 or fighter2.
 You can always change the message to something else if you want to be more creative.


 */



(function(){

    var playerOne = {name:"Zardan", health: 100, damage:20};
    var playerTwo = {name:"Prego", health: 100, damage:20};

    var arrayFighters = [playerOne,playerTwo];

//document.getElementById("kabal").style.textAlign="left";
//document.getElementById("kratos").style.textAlign="right";

var round=1;

document.querySelector(".buttonblue").onclick = function(){
         (fight());
     };

document.getElementById("round").style.textAlign= "center";

document.getElementById("round").innerHTML = "**START**";

document.getElementById("kabal").innerHTML = arrayFighters[0].name +"   " +arrayFighters[0].health;
document.getElementById("kratos").innerHTML = arrayFighters[1].name +"   " + arrayFighters[1].health;



function fight(){

        var minDamageOne = arrayFighters[0].damage/2;
        var minDamageTwo = arrayFighters[1].damage/2;

        var finalDamageOne = Math.floor((Math.random()*(arrayFighters[0].damage-minDamageOne)+minDamageOne));
        var finalDamageTwo = Math.floor((Math.random()*(arrayFighters[1].damage-minDamageOne)+minDamageTwo));

        arrayFighters[0].health-=finalDamageOne;
        arrayFighters[1].health-=finalDamageTwo;


    document.getElementById("round").innerHTML =   "**ROUND " + round + "**";


    document.getElementById("kabal").innerHTML = arrayFighters[0].name +"   " +arrayFighters[0].health;
    document.getElementById("kratos").innerHTML = arrayFighters[1].name +"   " + arrayFighters[1].health;

            var results = winnerCheck();

            if(results==="NO WINNER"){


                round++;


            }   else  {



                document.getElementById("round").innerHTML = results;

                document.getElementById("scores").style.textAlign="center";
                document.getElementById("scores").innerHTML = "Game Over";

                function disableButton(){
                    document.querySelector(".buttonblue").disabled=true;
                }

                document.querySelector(".buttonblue").onclick= disableButton();


            }


    }

    function winnerCheck(){

        var result = "NO WINNER";

        if(arrayFighters[0].health<1 && arrayFighters[1].health<1){
            result=arrayFighters[0].name + " and " + arrayFighters[1].name + " both die!";
        }
        else if(arrayFighters[0].health<1){
            result=arrayFighters[1].name +" wins!";
        }
        else if(arrayFighters[1]<1){
            result=arrayFighters[0].name +" wins!";
        }

        return result
    }




    fight();
})();
