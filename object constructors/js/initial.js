/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/14/13
 * Time: 11:58 PM
 * To change this template use File | Settings | File Templates.
 */



    //when the function's name first letter is capitalized it means it is a construction function. i.e. function Car

(function(){


    var interval = setInterval(update,1000/30);

    console.log("started");

    function Car(n,m,c){
        this.name = n;
        this.model = m;
        this.color = c;

    }

    Car.prototype.move = function(){

        console.log(this.name + "'s car is moving");
    };

    var cars = [];

    var myCar = new Car("Gabriel","Toyota", "silver");//we are instantiating the function Car with a new name and assigning it to a variable
    var yourCar = new Car("Joe","Ford", "black");
    var jCar = new Car("Scott","VW", "white");

    cars.push(myCar,yourCar,jCar);


   function update(){
       console.log(" I am running .......");
   }

    console.log(cars);

    cars.forEach(function(e) {         //loops through each car (e), meaning it loops through each element of the array. it is the actual element
                                                //, not the position in the array

        console.log(e.color);

    });
         myCar = new Car("Gabriel","Toyota", "silver");//instantiates the car we want
        myCar.move();//calls the function above - prototype - and returns whatever that function is returning

         yourCar = new Car("Joe","Ford", "black");
        yourCar.move();



    });


