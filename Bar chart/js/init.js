/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/25/13
 * Time: 10:40 AM
 * To change this template use File | Settings | File Templates.
 */

(function(){

    console.log("started");
//array of numbers


//variables
    var barChartX = [80,200,310,430,550,670,790,910,1030];
    var barChartY = [-50,-80,-100,-200,-400,-300,-500,-150,-90];
    var rectWidth = 60;
    var canvasHeight = 600;

//button
    var button = document.querySelector("button");
    button.style.position="absolute";
    button.style.left ="80px";
    button.style.bottom ="300px";

//build and append canvas
    var canvas = document.createElement("canvas");
    document.body.appendChild(canvas);
    canvas.width = 1200;
    canvas.height = 1000;
    var ctx = canvas.getContext("2d");
//ctx.rotate(360*Math.PI/180);

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

//number of the bar and height
    function barNumber(){
        for(var j= 0; j<barChartX.length;j++){
        ctx.beginPath();
        ctx.fillStyle = "#000000";
        ctx.font = "25px Coronet";
        ctx.fillText("Bar "+(j+1), barChartX[j]+3, 630);

        }
    }
    barNumber();


    function barHeight(){
        for(var k= 0; k<barChartX.length;k++){
            ctx.beginPath();
            ctx.fillStyle = "#000000";
            ctx.font = "15px Coronet";
            ctx.fillText("Height "+-barChartY[k], barChartX[k]-4, canvasHeight+barChartY[k]-5);
         }
    }

    barHeight();

//function button.onclick

    button.onclick = function(){
        drawCharts();
    }


})();

