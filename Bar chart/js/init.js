/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/25/13
 * Time: 10:40 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    console.log("started");

//variables for the height - random - bar chart will change when button is clicked
    var randomHeightOne = ~~(-Math.random()*200-10);
    var randomHeightTwo = ~~(-Math.random()*400-10);
    var randomHeightThree = ~~(-Math.random()*100-10);
    var randomHeightFour = ~~(-Math.random()*520-10);
    var randomHeightFive= ~~(-Math.random()*500-10);
    var randomHeightSix = ~~(-Math.random()*300-10);
    var randomHeightSeven = ~~(-Math.random()*150-10);
    var randomHeightEight = ~~(-Math.random()*250-10);
    var randomHeightNine = ~~(-Math.random()*550-10);

//array of numbers
    var barChartX = [80,200,310,430,550,670,790,910,1030];
    var barChartY = [randomHeightOne,randomHeightTwo,randomHeightThree,randomHeightFour,randomHeightFive,randomHeightSix,randomHeightSeven,randomHeightEight,randomHeightNine];
    var rectWidth = 60;
    var canvasHeight = 650;

//button
    var button = document.querySelector("button");
    button.style.position="absolute";
    button.style.left ="80px";
    button.style.bottom ="550px";

//build and append canvas
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = 1200;
    canvas.height = 1000;
    var ctx = canvas.getContext("2d");

//shadow
    ctx.shadowBlur=40;
    ctx.shadowOffsetX=20;
    ctx.shadowColor="black";

// title
    ctx.beginPath();
    ctx.fillStyle = "#000000";
    ctx.font = "bold 50px Coronet";
    ctx.fillText("BAR CHART ASSIGNMENT", 300, 60);

//function that draws the chart
    function drawCharts(){
        for(var i = 0; i<barChartX.length; i++) {
            ctx.beginPath();
            ctx.fillStyle = "#"+~~(Math.random()*90+10) +""+ ~~(Math.random()*90+10)+ ~~(Math.random()*90+10);
            ctx.fillRect(barChartX[i],canvasHeight,rectWidth,barChartY[i]);
            ctx.fill();
        }
    }
    drawCharts();

// bar number display
    function barNumber(){
        for(var j= 0; j<barChartX.length;j++){
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.font = "25px Coronet";
        ctx.fillText("Bar "+(j+1), barChartX[j]+3, canvasHeight+30);

        }
    }
    barNumber();

// height display
    function barHeight(){
        for(var k= 0; k<barChartX.length;k++){
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.font = "15px Coronet";
            ctx.fillText("Height "+-barChartY[k] +" px ", barChartX[k]-7, canvasHeight+barChartY[k]-5);
         }
    }

    barHeight();

//function button.onclick

    button.onclick = function(){
       location.reload();
    }


})();

