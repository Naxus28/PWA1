/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/25/13
 * Time: 10:40 AM
 * To change this template use File | Settings | File Templates.
 */


    console.log("started");
//array of numbers


//variables
var barChartX = [80,200,310,430,550,670,790,910,1030];
var barChartY = [-50,-80,-100,-200,-400,-300,-500,-150,-90];
var rectWidth = 60;
var canvasHeight = 600;


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
ctx.font = "bold 50px Coronet";     //size of the font and font type
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













