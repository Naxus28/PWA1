/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/22/13
 * Time: 10:32 AM
 * To change this template use File | Settings | File Templates.
 */

//step 1 - create canvas


(function(){

    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);

    canvas.width = 1200;
    canvas.height = 1000;

    var ctx = canvas.getContext("2d");
    var buttonOne = document.querySelector("#btn1");
    var buttonTwo = document.querySelector("#btn2");
    var buttonThree = document.querySelector("#btn3");
    var buttonTurbo = document.querySelector("#btn4");
    var nameRed = prompt("PLAYER ONE (RED CAR), PLEASE INPUT YOUR NAME").toUpperCase();
    var nameBlue = prompt("PLAYER TWO (BLUE CAR), PLEASE INPUT YOUR NAME").toUpperCase();

    //this adds the crowd to the canvas
    (function(){
        var crowd = new Image();
        crowd.src = "http://t1.ftcdn.net/jpg/00/15/10/04/400_F_15100429_PPGCwqoXPAocRlzU6Jdif1Nw6Ig1dQ7s.jpg";
        crowd.addEventListener("load", onLoad);

        function onLoad(e){
            ctx.drawImage(crowd,100,90,1000,270);

        }
    })();

   //prints out the trophy to the canvas when the winner function is called for the red car - see winner function down below
    function showTrophyRed(){
        var trophy = new Image();
        trophy.src = "http://cdn3.sbnation.com/imported_assets/1719611/trophy1_medium.gif";
        ctx.drawImage(trophy,290,120,180,230);
    }

    //prints out the trophy to the canvas when the winner function is called for the blue car - see winner function down below
    function showTrophyBlue(){
        var trophy = new Image();
        trophy.src = "http://cdn3.sbnation.com/imported_assets/1719611/trophy1_medium.gif";
        ctx.drawImage(trophy,750,120,180,230);
    }


//this function will print out a red car to the screen if the red car wins. It will be called by the function
//winnerCheck() at the bottom
   function imageRedCarWin(){
        var redCar = new Image();

        ctx.beginPath();                 //white rectangle to cover the crowd
        ctx.fillStyle = "#FFFFFF";
        ctx.rect(100,90,1000,270);
        ctx.fill();

        redCar.src = "http://ecx.images-amazon.com/images/I/412Z4jq9dyL._SL500_AA500_.jpg";
        ctx.drawImage(redCar,500,100,400,250);
        showTrophyRed();
        }

//this function will print out a blue car to the screen if the blue car wins. It will be called by the function
//winnerCheck() at the bottom
    function imageBlueCarWin(){
        var blueCar= new Image();

        ctx.beginPath();                   //white rectangle to cover the crowd
        ctx.fillStyle = "#FFFFFF";
        ctx.rect(100,90,1000,270);
        ctx.fill();

        blueCar.src = "http://www.partypro.com/mm_PARTYPRO_/Images/ADV630.JPG";
        ctx.drawImage(blueCar,250,110,400,250);
        showTrophyBlue();
        }

//this adds the blue car to the track
    var carBlue = new Image();
    (function(){
        carBlue.src = "http://www.clker.com/cliparts/g/C/3/6/V/C/light-blue-car-top-view-md.png";
        carBlue.addEventListener("load", onLoad);

        function onLoad(e){
            ctx.drawImage(carBlue,0,455,70,40);

        }
    })();


 //this adds the red car to the track
    var carRed = new Image();
    (function(){
        carRed.src = "http://openclipart.org/people/qubodup/simple-travel-car-top_view.svg";
        carRed.addEventListener("load", onLoad);

        function onLoad(e){
            ctx.drawImage(carRed,0,405,70,40);

        }
    })();

//this self-executing function adds a flag to the end of the track
    (function(){
        var flag = new Image();
        flag.src = "http://s1.cdn.autoevolution.com/images/news/race-flags-nascar-9089_1.jpg";
        flag.addEventListener("load", onLoad);

        function onLoad(e){
            ctx.drawImage(flag,1135,335,55,50);

        }
    })();


//the 3 functions below add the "lights" to the canvas and texts inside the lights (a red circle, a yellow circle, and a green circle).

  function drawCircle(){
      ctx.beginPath();                          //draws a red circle
      ctx.fillStyle = "#FF0000";
      ctx.strokeStyle = "#CC0000";
      ctx.arc(30,180,22,0,Math.PI*2);
      ctx.fill();
      ctx.stroke();

      ctx.beginPath();                         //puts text in the circle
      ctx.fillStyle = "#000000";
      ctx.font = "bold 11px Coronet";
      ctx.fillText("READY", 11, 184);

      setTimeout(drawCircleYellow, 2000);      //this will call the next "light"(yellow - function bellow) after the set time - 2 secs
  }

    function drawCircleYellow(){
        ctx.beginPath();
        ctx.fillStyle = "#FFFF00";
        ctx.strokeStyle = "#FFCC00";
        ctx.arc(30,240,25,0,Math.PI*2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 17px Coronet";
        ctx.fillText("SET", 14, 245);

        ctx.beginPath();                 //this will erase the previous circle - (fill it with white color)
        ctx.fillStyle = "#FFFFFF";
        ctx.arc(30,180,25,0,Math.PI*2);   // I increased the radius from 23 to 25 to make sure the circle will be completely
        ctx.fill();                       //covered with white color. If I use radius=23 the outline of the circle still shows (why?? no idea)

          //console.log("this is the counter in the if "+ counter);

          setTimeout( drawCircleGreen, 2000);
    }

    function drawCircleGreen(){
        ctx.beginPath();
        ctx.fillStyle = "#33CC00";
        ctx.strokeStyle = "#009900";
        ctx.arc(30,300,27,0,Math.PI*2);
        ctx.fill();
        ctx.stroke();

        ctx.beginPath();                            //puts text in the circle
        ctx.fillStyle = "#000000";
        ctx.font = "bold 23px Coronet";
        ctx.fillText("GO!", 10, 308);

        ctx.beginPath();                  //this will erase the previous circle - (fill it with white color)
        ctx.fillStyle = "#FFFFFF";
        ctx.arc(30,240,28,0,Math.PI*2);
        ctx.fill();

    }

      function eraseGreenCircle(){
          ctx.beginPath();                  //this will erase the previous circle - (fill it with white color)
          ctx.fillStyle = "#FFFFFF";
          ctx.arc(30,300,30,0,Math.PI*2);
          ctx.fill();

          setTimeout(eraseGreenCircle, 4000);
      }

    eraseGreenCircle();


    //prints out the first  on the canvas  (it is out of the function just below bc the function will be called by a button, which needs to be pressed).

    ctx.beginPath();
    ctx.fillStyle = "#" + ~~(Math.random()*90+10) +""+  ~~(Math.random()*90+10)+ ~~(Math.random()*90+10);
    //console.log("this is fill "+ fill);
    ctx.font = "bold 75px Coronet";     //size of the font and font type
    ctx.fillText("SUPER RACE 2013", 270, 65);


    //adds the title of the game and change colors of the title continuously when the function is called (automatic interval overloaded machine)

    function title(titleName, color){

         ctx.beginPath();
         ctx.fillStyle = "#" + color;
         //console.log("this is fill "+ fill);
         ctx.font = "bold 75px Coronet";     //size of the font and font type
         ctx.fillText(titleName, 270, 65);
    }


   //function that draws the vertical lines at the end of the track - takes the line width as argument
    function finalLines(verticalLines){
        ctx.beginPath();   //every beginPath starts a new pattern. If I want to start a new pattern
                           // and don't write this function, JS will assume the same properties of the a previous
                           //pattern (i.e. line width)

        ctx.strokeStyle = "#000000";
        ctx.lineWidth = verticalLines;

        ctx.moveTo(1150,400);   //solid first final line (vertical)
        ctx.lineTo(1150,500);

        ctx.moveTo(1199,400);    //solid second final line (vertical)
        ctx.lineTo(1199,500);

        ctx.stroke();
    }

    finalLines(2);


    function linesAcrossEnd(){       //lines that run across the two final lines to show it is the final line area
        ctx.beginPath();
        ctx.strokeStyle = "#000000";
        ctx.lineWidth = 3;

        ctx.moveTo(1150,420);
        ctx.lineTo(1174,400);

        ctx.moveTo(1150,440);
        ctx.lineTo(1199,400);

        ctx.moveTo(1150,460);
        ctx.lineTo(1199,420);

        ctx.moveTo(1150,480);
        ctx.lineTo(1199,440);

        ctx.moveTo(1150,500);
        ctx.lineTo(1199,460);

        ctx.moveTo(1174,500);
        ctx.lineTo(1199,480);

        ctx.stroke();
   }
    linesAcrossEnd();


    //function that draws the horizontal lines of the track (including the "dash like" line - takes the line width as argument

    function trackLines(thicknessParallelLines){
        ctx.beginPath();

        ctx.lineWidth=thicknessParallelLines;
        ctx.moveTo(0,400);     //solid upper track line
        ctx.lineTo(1200,400);  //solid upper track line

        ctx.moveTo(0,500);     //solid lower track line
        ctx.lineTo(1200,500);

        ctx.moveTo(0,450);
        ctx.lineTo(50,450);

        var increment=50;
        for(var i=0;i<11; i++){            //loops through and paints the "dotted" lines on the middle
            //console.log("in the loop");    //until the end of the canvas - 11 loops because the line increments by 100 px every loop
            ctx.moveTo(2*increment,450);    //the starting point is 50 and the second line starts at 150 - this leaves 50 px blank.
            ctx.lineTo(2*increment+50,450); // The loop reiterates the pattern
            increment=increment+50;
            ctx.stroke();
        }
        //console.log(increment);

    }

    trackLines(4);


   //the function below makes the red car move - notice there are 2 variables bc I am generating a random number for the
   //position of the car, which means that if I have one variable I will not be able to hold the value
    //of the previous position. For instance: the car first moves 10 px. we need to hold this value so next time
    //the car's starting point is 10. Then we "accelerate it" by adding a random number to it. then we need to hold that second value bc this will be the
    //next starting position. Then we add this value to a random number and the car move forward. And so on.
    //var i will hold the value generated and will always be the starting point. Var j will increase the position
    //randomly

    var j;                //this is the speed. It changes every time the function is called and it is not stored
    var i = 0;            //this is going to store the value of the new position of the car every time the car runs

    function speedCarOne(car,rangeOfSpeed,y){
        j = ~~(Math.random()*rangeOfSpeed+5);
        ctx.drawImage(car,j+i,y,75,40);
        i=i+j;
        //console.log("this is i "+i);
    }

    function speedCarOneTurbo(car,rangeOfSpeed,y){
        j = ~~(Math.random()*rangeOfSpeed*5+20);
        ctx.drawImage(car,j+i,y,75,40);
        i=i+j;
        //console.log("this is i in the turbo "+i);
    }

//this does the same as the functions above, but for the blue car.

    var l;
    var k = 0;

    function speedCarTwo(car,rangeOfSpeed,y){
        l = ~~(Math.random()*rangeOfSpeed)+5;
        ctx.drawImage(car,l+k,y,75,40);
        k=k+l;
        //console.log("this is k "+ k);
    }

    function speedCarTwoTurbo(car,rangeOfSpeed,y){
        l = ~~(Math.random()*rangeOfSpeed*5+20);
        ctx.drawImage(car,l+k,y,75,40);
        k=k+l;
        //console.log("this is k in the turbo "+k);
    }


//will print out to the canvas the position of the red car in pixels. changes every time the button is clicked

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.font = "bold 20px Coronet";     //size of the font and font type
    ctx.fillText(nameRed+" traveled 0 px", 15, 380);

    function positionRed(coordinate){

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.rect(14,350,1100,40);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 20px Coronet";     //size of the font and font type
        ctx.fillText(nameRed + " traveled "+ coordinate + " px", 15, 380);

    }

//will print out to the canvas the position of the blue car in pixels. changes every time the button is clicked

    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.font = "bold 20px Coronet";     //size of the font and font type
    ctx.fillText(nameBlue+" traveled 0 px", 15, 540);

    function positionBlue(coordinate){
        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.rect(14,520,1000,50);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.font = "bold 20px Coronet";     //size of the font and font type
        ctx.fillText(nameBlue+" traveled "+ coordinate + " px", 15, 540);
    }


    buttonThree.addEventListener("click",drawCircle);   //will trigger the draw circle function, which draws the lights (red, yellow, green)

    var trackLimit=1076;
    var counterRed=0;                               //these counters are necessary to guarantee that
    var counterBlue=0;                              //when a car wins, the other may pass in front of it
                                                    //after the final line but the car that came second will not
                                                    //become the winner (the title will not change).
                                                    //There are 3 conditions for a car to be winner:
                                                    //cross the final line, be ahead of the other car, and
                                                    //that the counter of the other car is not >1.
                                                    //the counter only becomes greater than 1 when the car
                                                    //crosses the line before the other car.



    function winnerCheck(){                           //this function will change the title depending on the winner
                                                     //it also puts the picture of the winner car on the canvas
        if(i<trackLimit && k<trackLimit){
            title("SUPER RACE 2013", ~~(Math.random()*90+10) +""+  ~~(Math.random()*90+10)+ ~~(Math.random()*90+10));

        }

        else  if(i>=trackLimit && k>=trackLimit && i===k){
            ctx.beginPath();
            ctx.fillStyle = "#FFFFFF";
            ctx.rect(280,10,700,70);
            ctx.fill();

            title("THAT IS A TIE!");

        }

        else if(i>=trackLimit && i>k && counterBlue<1){

            ctx.beginPath();                   //white rectangle to cover the previous title
            ctx.fillStyle = "#FFFFFF";
            ctx.rect(270,10,700,70);
            ctx.fill();

            imageRedCarWin();
            title(nameRed+" WINS !!", "ff"+""+0+""+0+""+0+""+0);


            counterRed++;
        }

        else if(k>=trackLimit && k>i && counterRed<1){
            ctx.beginPath();                               //white rectangle to cover the previous title
            ctx.fillStyle = "#FFFFFF";
            ctx.rect(270,10,700,70);
            ctx.fill();

            imageBlueCarWin();
            title(nameBlue +" WINS !!", 0+""+0+""+0+""+0+"ff");


            counterBlue++;
        }
    }


    buttonOne.onclick = function speed(){
        ctx.beginPath();                     //This creates a white rectangle that will fill in the position
        ctx.fillStyle = "#FFFFFF";           //of the car once it moves to the new position
        ctx.rect(i-2,405,78,40);             //In other words, when the car moves, the previous car will be erased from
        ctx.fill();                          //the canvas

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.rect(k-2,455,78,40);
        ctx.fill();

        finalLines(2);
        linesAcrossEnd();

        speedCarOne(carRed,50,405);
        speedCarTwo(carBlue,50,455);

        winnerCheck();

        positionRed(i);
        positionBlue(k);


    };

   //The button below calls most of the functions. Some functions trigger others. Attention to order of calls here. Very important
    //to make things work out correctly and print out correctly on the canvas

    buttonTurbo.onclick = function turbo(){
        ctx.beginPath();                     //This creates a white rectangle that will fill in the position
        ctx.fillStyle = "#FFFFFF";           //of the car once it moves to the new position
        ctx.rect(i-1,405,85,40);             //In other words, when the car moves, the previous car will be erased from
        ctx.fill();                          //the canvas

        ctx.beginPath();
        ctx.fillStyle = "#FFFFFF";
        ctx.rect(k-1,455,85,40);
        ctx.fill();

        finalLines(2);
        linesAcrossEnd();

        speedCarOneTurbo(carRed,40,405);
        speedCarTwoTurbo(carBlue,40,455);

        winnerCheck();

        positionRed(i);
        positionBlue(k);


    };

     buttonTwo.onclick = function newRace(){
      location.reload();
    };
})();




// constructor function Car
//
//    function Car(n,c,s,car,rangeOfSpeed,y){
//        this.name = n;
//        this.color = c;
//        this.move = s;
//        this.speed = ctx.drawImage(car,Math.random()*rangeOfSpeed+0.5,y,70,40);
//    }
//
//
//    Car.prototype.start = function(){
//      this.speed = Math.random()*2+0.5
//    };
//
//
//
//
//  var pilotOneCar = new Car("racerOne","red",carRed,10,3,405);
//
//
//  var pilotTwoCar = new Car("racerTwo","blue",carBlue,10,2,455);

