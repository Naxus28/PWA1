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

        //console.log("this is my button "+ button);
        //console.log("this is btn2 "+ buttonTwo);

 //this self-executing function adds a flag to the end of the track
    (function(){
       var flag = new Image();
       flag.src = "http://s1.cdn.autoevolution.com/images/news/race-flags-nascar-9089_1.jpg";
       flag.addEventListener("load", onLoad);

       function onLoad(e){
           ctx.drawImage(flag,1135,335,55,50);

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



//this adds the blue car to the track
    var carBlue = new Image();
    (function(){
        carBlue.src = "http://www.clker.com/cliparts/g/C/3/6/V/C/light-blue-car-top-view-md.png";
        carBlue.addEventListener("load", onLoad);

        function onLoad(e){
            ctx.drawImage(carBlue,0,455,70,40);

        }
    })();


//this adds a green circle to the canvas
   var counter = 0;

    console.log("this is the counter "+ counter);
  function drawCircle(){

      //console.log("in the function circle");
      ctx.beginPath();
      ctx.fillStyle = "#FF0000";
      ctx.arc(30,250,20,0,Math.PI*2);
      ctx.fill();
      //ctx.stroke();
      counter++;
      console.log("this is the counter in the function"+ counter);

      if(counter == 1){
         console.log("in the if");
          ctx.beginPath();
          ctx.fillStyle = "#FFFF33";
          ctx.arc(30,300,20,0,Math.PI*2);
          ctx.fill();
          counter++;
          console.log("this is the counter in the if "+ counter);
      }

     if(counter == 2){
          console.log("this is the counter in the else if "+ counter);
          console.log("in the else if");
          ctx.beginPath();
          ctx.fillStyle = "#33CC00";
          ctx.arc(30,350,20,0,Math.PI*2);
          ctx.fill();


      }

//      setInterval(drawCircle, 16000/6)
  }




//this adds the crowd to the canvas
    (function(){
        var crowd = new Image();
        crowd.src = "http://t1.ftcdn.net/jpg/00/15/10/04/400_F_15100429_PPGCwqoXPAocRlzU6Jdif1Nw6Ig1dQ7s.jpg";
        crowd.addEventListener("load", onLoad);

        function onLoad(e){
            ctx.drawImage(crowd,100,90,1000,270);

        }
    })();



//adds the title of the game  and change colors continuously - figure out how - NOT WORKING YET
     function title(){

         ctx.beginPath();
         var fill=ctx.fillStyle = "#" + ~~(Math.random()*90+10) +""+  ~~(Math.random()*90+10)+ ~~(Math.random()*90+10);
         console.log("this is fill "+ fill);
         ctx.font = "bold 75px Coronet";     //size of the font and font type
         ctx.fillText("SUPER RACE 2013", 280, 65);

         //setInterval(title, 16000/3)

    }

    title();

   //function that draws the vertical lines at the end of the track - takes the line width as argument
    function finalLines(verticalLines){
        ctx.beginPath();   //every beginPath starts a new pattern. If I want to start a new pattern
                           // and don't write this function, JS will assume the same properties of the a previous
                           //pattern (i.e. line width)

        ctx.strokeStyle = "#000000";
        ctx.lineWidth =verticalLines;

        ctx.moveTo(1150,400);   //solid first final line
        ctx.lineTo(1150,500);

        ctx.moveTo(1199,400);    //solid second final line
        ctx.lineTo(1199,500);

        ctx.stroke();
    }

    finalLines(2);


    function linesAcrossEnd(){
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
        ctx.lineTo(1200,400);  //solid lower track line

        ctx.moveTo(0,500);
        ctx.lineTo(1200,500);

        ctx.moveTo(0,450);
        ctx.lineTo(50,450);

        var increment=50;
        for(var i=0;i<11; i++){            //loops through and paints the "dotted" lines of the middle
            console.log("in the loop");    //until the end of the canvas - 11 loops because the line increments by 100 px every loop
            ctx.moveTo(2*increment,450);    //the starting point is 50 and the second line starts at 150 - this leaves 50 px blank.
            ctx.lineTo(2*increment+50,450); // The loop reiterate the pattern
            increment=increment+50;
            ctx.stroke();
        }
        console.log(increment);

    }

    trackLines(4);


   //this function makes the red car move - notice there are 2 variables bc I am generating a random number for the
   //position of the car, which means that if I have one variable I will not be able to hold the value
    //of the previous position. For instance: the car first moves 10 px. we need to hold this value so the next time
    //the car's starting point is 10. Then we "accelerate it" by adding a random number to it. then we need to hold that second value bc this will be the
    //next starting position. Then we add this value to a random number and the car move forward. And so on.
    //var i will hold the value generated and will always be the starting point. Var j will increase the position
    //randomly

//
//
//  var carOneSpeed = function(){
//
//
//
//        interval = setInterval(speedCarOne, 1000 / 10);
//        speedCarOne(carRed,40,405);
//    };
//



    var interval;
    var j;
    var i =0;

    function speedCarOne(car,rangeOfSpeed,y){

        console.log("in function speed car one");

        j = Math.random()*rangeOfSpeed+1;

        ctx.drawImage(car,j+i,y,70,40);

        i=i+j;

        //setInterval(speedCarOne, 3000/3);

        if(j+i>=1130){

            ctx.drawImage(car,155,405,70,40);

//            button.onclick = function fast(){
//                speedCarTwo(carBlue,100,455);
//
//            };
        }
    }


    //this does the same as the function above, but for the blue car. Notice that when I call the two functions below
    //I am passing a higher speed range for the blue car. This increases the chance of Blue car winning, but since the numbers
    //are generated randomly, the red car can still win.


   var l;
    var k =0;

    function speedCarTwo(car,rangeOfSpeed,y){
        console.log("in function speed car two");

        l = Math.random()*rangeOfSpeed+1;

        ctx.drawImage(car,l+k,y,70,40);

        k=k+l;

        if(k+l>=1155){

            ctx.drawImage(car,155,455,70,40);

//            button.onclick = function fast(){
//                speedCarOne(carRed,100,405);
//
//            };

        }
    }



    buttonThree.addEventListener("click",drawCircle);


//    buttonThree.onclick = function light(){
//        drawCircle()
//    };


    buttonOne.onclick = function fast(){

        speedCarOne(carRed,40,405);
        speedCarTwo(carBlue,40,455);
        title();

      //setInterval(speedCarOne, 1000/100);

    };


    buttonTwo.onclick = function newRace(){
      location.reload();
    };


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



})();
