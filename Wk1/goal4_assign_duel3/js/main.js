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


/*

ASSIGNMENT - GAME 3

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



document.querySelector(".buttonblue").onclick = function(){
         (fight());
    if(results==="NO WINNER"){


        document.querySelector(".buttonblue").disabled=true;


    }

     };

document.getElementById("round").style.textAlign= "center";

document.getElementById("round").innerHTML = "**START**";

document.getElementById("kabal").innerHTML = arrayFighters[0].name +"   " +arrayFighters[0].health;
document.getElementById("kratos").innerHTML = arrayFighters[1].name +"   " + arrayFighters[1].health;

var round=1;

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

//                function disableButton(){
//                    document.querySelector(".buttonblue").disabled=true;
//                }
//
//                document.querySelector(".buttonblue").onclick= disableButton();

                console.log(arrayFighters[0].health);


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




   // fight();
})();
