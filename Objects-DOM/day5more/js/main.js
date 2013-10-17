/**
 * Created with JetBrains WebStorm.
 * User: someoneelse
 * Date: 10/10/13
 * Time: 12:32 PM
 * To change this template use File | Settings | File Templates.
 */
console.log("started");

(function(){
    var data = [];
    var cities = [];
    var weather1 = {temp:80,windSpeed:5,humidity:90, condition:"Sunny", location:"Orlando"};
    var weather2 = {temp:66,windSpeed:4,humidity:23, condition:"snow", location:"Boise"};

    addCity(90,7,80,"stormy","miami");



    cities.push(weather1,weather2);

    function addCity(t,w,h,c,l){
        var obj = {};
        obj.temp = t;
        obj.windSpeed = w;
        obj.humidity = h;
        obj.condition = c;
        obj.location = l;
        cities.push(obj);
    }

    var totalKeys=0;
    for (var key in weather1){
        totalKeys++;
        data.push(weather1[key]);
    }
    //console.log(totalKeys);
    console.log(data);

})();
