/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/9/13
 * Time: 9:43 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("started");



var dog = {
          breed:"husky",
          name: "Max",
          color:"black_white",
          bark : function(){
             console.log("bark");
          }


};

    dog.bark();


var myDogs = [  {breed:"bulldog", name:"Kim", color: " brown", eat: function(){console.log("i am eating");}},
                {breed:"yorkshire", name:"Doug", color: " white", eat: function(){console.log("i am eating too");}}
];


console.log(myDogs[0].breed);

myDogs[1].eat();     //call the function. Because the function is already executing a console log, we don't need to console log the function - if we console log it we will get undefined







