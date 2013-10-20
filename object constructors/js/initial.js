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

    };                                       // this is the prototype .move, which is a function.
                                             // After it is created, this prototype can be added to other objects
                                             // by simply using the command .move();
                                             // once the prototype is added, it calls for the function that was created
                                             // in the original prototype. The function will access the information
                                             // of the new object to which the prototype was added and return
                                             // whatever value it was programmed to return. In this case, the
                                             // function is logging the property . name of the object constructor "Car"
    var cars = [];                           // When added to another object that is created from this constructor
                                             // i.e. myCar = new Car(n,m,c), the prototype .move will return the name
                                             //that is passed into the new Car (myCar).
                                             //  myCar = new Car("Gabriel","Toyota", "silver");
                                             //myCar.move(); will equal Gabriel

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


