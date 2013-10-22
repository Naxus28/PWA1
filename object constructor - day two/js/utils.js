/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/17/13
 * Time: 12:16 AM
 * To change this template use File | Settings | File Templates.
 */

window.utils = {};    // it is easier to be an object bc we can refer by name when calling it in the java script
                      //it could be an array too, but it would be hard to remember what is what inside the array (calling by numbers)

utils.getAverage = function (a){     //a has to be an array of numbers
      var total = 0;
    a.forEach(function(e){
        total+=e;

    });
    return total/ a.length

};
  utils.areaTriangle = function(b,h){
      return (b*h)*.5
  };

utils.convertTemp = function(t,u){
    var temp = 0;

    if(u=="f"){
        temp = "formula to convert to celcius";
    }        else {
        temp = "formula to convert to firenheight"
    }
};

utils.areaRectangle = function(b,h){

    return b*h
};


utils.areaCircle = function(r){

          return 3.14*r*r
};

