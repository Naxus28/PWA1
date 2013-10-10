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
 Replace the alerts with code that access the DOM(HTML) such as getElemetById and/or querySelector
 Use JavaScript's innerHTML property to change the text in the HTML. The following information will be displayed dynamically in the HTML (view the demonstration again to see how this should look):
 Fighter's name and health at the top
 Current round number above the button
 Create a click event on the button
 When the button is clicked, the following should commence:
 advance round
 the modified fight() function is called
 Disable the button when the game is over and make sure the appropriate "game over message" is shown at the top. The message should be one of the following:
 Fighter 1 wins
 Fighter 2 wins
 Both Fighters Die
 Make sure the actual name of the fighter is shown not fighter1 or fighter2. You can always change the message to something else if you want to be more creative.


 */



(function(){
//variables
//player one

    //var playerOne = {name:"Zardan", health: 100, damage:50};
    //var playerOne = ["Zardan", 100, 50];

    //var playerOneName= "Zardan";
   // var playerOneHealth = 100;
    //var playerOneDamage = 50;


//variables
//player two

    //var playerTwo = {name:"Prego", health: 100, damage:50};
    //var playerTwo = ["Prego", 100, 50];

    //var playerTwoName = "Prego";
    //var playerTwoHealth = 100;
    //var playerTwoDamage = 50;

    var playerOne = {name:"Zardan", health: 100, damage:50};
    var playerTwo = {name:"Prego", health: 100, damage:50};

    var arrayFighters = [playerOne,playerTwo];

       //console.log (arrayFighters[0].name);

    //var round = 1;

    //alert(playerOne[0] + ":" + playerOne[1]+ " "+ "**START**" + " "+ playerTwo[0] + ":" + playerTwo[1]);


    function fight(){

        //for(var i=0;i<10;i++)
        // {


//            var minDamageOne = playerOne[2]/2;
//            var minDamageTwo = playerTwo[2]/2;
//
//            var finalDamageOne = Math.floor((Math.random()*(playerOne[2]-minDamageOne)+minDamageOne));
//            var finalDamageTwo = Math.floor((Math.random()*(playerTwo[2]-minDamageOne)+minDamageTwo));

        var minDamageOne = arrayFighters[0].damage/2;
        var minDamageTwo = arrayFighters[1].damage/2;

        var finalDamageOne = Math.floor((Math.random()*(arrayFighters[0].health-minDamageOne)+minDamageOne));
        var finalDamageTwo = Math.floor((Math.random()*(arrayFighters[1].health-minDamageOne)+minDamageTwo));

                      console.log(minDamageOne);
                      console.log(minDamageTwo);
                      console.log(finalDamageOne);
                      console.log(finalDamageTwo);


        arrayFighters[0].health-=finalDamageOne;
        arrayFighters[1].health-=finalDamageTwo;

            //console.log(playerOneHealth);
            //console.log(playerTwoHealth);

            var results = winnerCheck();

            if(results==="NO WINNER"){
                alert(playerOne[0] + ":" + playerOne[1]+ " " + "**ROUND " + round + " OVER**" + " "+ playerTwo[0] + ":" + playerTwo[1]);
                round++
//            }   else  {
//
//                alert(results);
//                break
//            }

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
