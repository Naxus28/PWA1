

var car = {
     brand:"VW",
     color:"blue",
     model:"SUV",
     accessories: {safety:"airbag",break: "abs"},
     prices: [1000, 2000, 3000]
};

for(var key in car){
//        console.log(typeof car[key]);

    console.log(car[key].length);

    if(typeof car[key]=="object"){

         var carObj = car[key];

        console.log("This is the carObj = "+ carObj);

        for(var keyTwo in carObj){

            console.log("This are the values of the object carObj = " + keyTwo);
        }


    }    else if(typeof car[key]=="array"){   // arrays are also considered objects so this approach does not work to
                                              //get the elements of the array
              var array = car[key];

        console.log("this is an array");

        for(var i = 0; i<array.length; i++){

            var arrayNumber = array[i];

            console.log(arrayNumber  +" is the element in an array position " + i );
        }


    }    else {

        console.log("this are the other properties of the object " + key);
    }




}



// constructor


function Car(n,c,m) {

    this.name = n;
    this.color = c;
    this.model = m;

}

var myCar = new Car ("saturn","black","suv");

console.log("this is my car "+myCar);


var yourCar = new Car ("Beetle","blue","suv");

console.log("this is my car "+yourCar);


var cars = [];

cars.push(myCar,yourCar);

cars.forEach(function(e) {         //loops through each car (e), meaning it loops through each element of the array. it is the actual element
    //, not the position in the array

    console.log(e.name);
    console.log(e.color);
    console.log(e.model);
});



console.log("this are the cars "+cars);