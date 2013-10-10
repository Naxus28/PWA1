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


(function(){
//variables
//player one
    var playerOne = ["Zardan", 100, 50];

    //var playerOneName= "Zardan";
   // var playerOneHealth = 100;
    //var playerOneDamage = 50;


//variables
//player two

    var playerTwo = ["Prego", 100, 50];

    //var playerTwoName = "Prego";
    //var playerTwoHealth = 100;
    //var playerTwoDamage = 50;

    var round = 1;

    alert(playerOne[0] + ":" + playerOne[1]+ " "+ "**START**" + " "+ playerTwo[0] + ":" + playerTwo[1]);


    function fight(){

        for(var i=0;i<10;i++) {


            var minDamageOne = playerOne[2]/2;
            var minDamageTwo = playerTwo[2]/2;

            var finalDamageOne = Math.floor((Math.random()*(playerOne[2]-minDamageOne)+minDamageOne));
            var finalDamageTwo = Math.floor((Math.random()*(playerTwo[2]-minDamageOne)+minDamageTwo));



            playerOne[1]-=finalDamageOne;
            playerTwo[1]-=finalDamageTwo;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            var results = winnerCheck();

            if(results==="NO WINNER"){
                alert(playerOne[0] + ":" + playerOne[1]+ " " + "**ROUND " + round + " OVER**" + " "+ playerTwo[0] + ":" + playerTwo[1]);
                round++
            }   else  {

                alert(results);
                break
            }

        }
    }



    function winnerCheck(){

        //console.log("in winnerCheck");

        var result = "NO WINNER";

        if(playerOne[1]<1 && playerTwo[1]<1){
            result=playerOne[0] + " and " + playerTwo[0] + " both die!";
        }
        else if(playerOne[1]<1){
            result=playerTwo[0] +" wins!";
        }
        else if(playerTwo[1]<1){
            result=playerOne[0] +" wins!";
        }

        return result

    }
    fight();
})();
