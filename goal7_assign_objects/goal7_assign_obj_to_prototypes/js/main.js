/**
 * Created by the JavaScript Development Team
 * Class: PWA
 * Goal: Goal7
 */

/*
 To obtain full credit on the assignment, the following criteria must be adhered to as well as satisfying all items on this assignment's rubric.
 This assignment will require the creation of two js files, main.js and person.js

 1) The main.js file will contain the following:
 Create an array called names that contains at least 5 people names that will be eventually chosen for each person.
 Create three instances of the Person object using a for loop and place each reference of the object in an array
 called people.
 When instantiating the Person object, make sure a randomly chosen name (using the Math.random() method) from the names
 array is sent to the constructor of the person along with what row number in the HTML the information will be displayed in.
 Ex: var person = new Person(names[someName],someRow);

 Create a function called "populateHTML" which outputs the person's name and person's job, in the DOM.


 The code must be built to NOT allow duplicate names to appear.

 Set up an Interval that calls a runUpdate() function 30 times a second. Example: "setInterval(runUpdate, 1000 / 30);"
 Once all the Person instances are in the people array then loop through each person and run the prototype update() function.
 This loop should be done in the runUpdate() function that is called from the setInterval (in the example directly above). For example:
 function runUpdate(){
 people.forEach(function(element){
 element.update();
 });
 */

(function(){

    console.log("in the function");

    var interval =  setInterval(runUpdate, 1000 / 30);

    //console.log("This is the variation interval"+ interval);

    var names = ["Bob","Paul","Carl","John","George"];

    var people = [];
    console.log(people);

    var columnOne = document.querySelector("#r3c1");
    var columnTwo = document.querySelector("#r3c2");
    var columnThree = document.querySelector("#r3c3");

    for(var i=0; i<3 ; i++) {

        var randomNameIndex = Math.floor(Math.random()*names.length);
        var randomName = names[randomNameIndex];
        var row = i+1;

        var newPerson = new Person(randomName, row);
        console.log(newPerson);
        console.log("this is the index position in the array 'names' " + randomNameIndex);
        people.push(newPerson);

        names.splice(randomNameIndex,1);
    }
        // console.log("this is the name in the randomName var " + randomName);

        // if the random name generated equals the string name in the array people, slice it out of the
        //array name



//        console.log(                                             );
//
//        console.log("=========This is iteration " + i + " of the for loop =============")
//
//        var j =0;
//
//        names.forEach(function(e){
//
//            var namePositionInTheArray = names.indexOf(randomName);
//
//            console.log(                                             );
//
//            console.log("=========This is iteration " + j + " of the for each loop =============");
//
//            console.log("This is the random name generated with Math.random: "+ randomName);
//
//            console.log("this is the index position of the random name generated with Math.random in the array 'names': "+ namePositionInTheArray);
//
//            console.log("This is the element being matched with the random name in the array 'names': "+ e);
//
//            console.log("If "+ randomName + " = " + e + " the name should be spliced out below");
//
//            if(e==randomName) {
//
//                var nameSpliced = names.splice(namePositionInTheArray,1);
//
//                console.log("This is the name spliced: "+ nameSpliced);
//            }
//
//            else{
//                console.log("The names don't match");
//            }
//
//            j++;
//
//
//        });
//
//
////        var newPerson = new Person(randomName, row);
////        people.push(newPerson);
//    }




//Create a function called "populateHTML" which outputs the person's name and person's job, in the DOM.
//The code must be built to NOT allow duplicate names to appear.


    function  populateHTML(){
//    var namePositionInTheArray =0;
//    var splicedNames = "";
        for(var i = 0; i < people.length; i++){
            document.querySelector("#r" + parseInt(i + 1) + "c1").innerHTML = people[i].name;
            //console.log("this is the name in the array people "+ people[i].name);
            document.querySelector("#r" + parseInt(i + 1) + "c2").innerHTML = people[i].job;
            document.querySelector("#r" + parseInt(i + 1) + "c3").innerHTML = people[i].action;

        }


    }

    populateHTML();

    function runUpdate(){
        people.forEach(function(element){
            element.update();
        });
        populateHTML();
    }
    interval();

})();

