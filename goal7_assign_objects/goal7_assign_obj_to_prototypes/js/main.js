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
 Once all the Person instances are in the people array then loop through each person and run the prototype update() function. This loop should be done in the runUpdate() function that is called from the setInterval (in the example directly above). For example:
 function runUpdate(){
 people.forEach(function(element){
 element.update();
 });
 */


var names = ["Bob","Paul","Carl","John","George"];

var people = [];

var columnOne = document.querySelector("#r3c1");

for(var i=0; i<3 ; i++) {

    var newPerson = new Person();
    people.push(newPerson(names[Math.floor(Math.random()*names.length).name]),);
}


    console.log(names);

var personOne = people[0]







 /*

 2) The Person.js file will contain the following items:
 Add the Person object to the global window object - because main.js needs it. Example: "window.Person=Person;"
 Two variables, "jobs" and "actions" which should be directly on the Person object (static variables).
 The jobs variable is an array of 4 or more jobs. The actions variable is also an array of some actions a person could do.
 ex: Person.jobs = ["teacher","farmer","student","pilot"];
 ex: Person.actions = ["sleeping","eating","working"];
 The Person constructor should also have four properties:
 name: The name of the person. This property is set in this constructor for the Person.
 action: This property is set in this constructor for the Person.
    This property states what the person is actively doing and it is one of the values in the actions array.
    You will randomly select one item from the Person.action array for this property (use the Math.random() method).
 job: This property is set in this constructor for the Person and is one of the values in the jobs array.
    You will randomly select one item from the Person.jobs array for this property(use the Math.random() method).
 row: Like the name property, this is set in this constructor.


 Main.js writes out the information for the person's name and job.
 You will now need to display the initial action of the person in 3rd column.
 The Person object must have an update() function added to its prototype.
 The purpose of this update() function, which is called from the main.js file,
  is to change the actions of the person every so often,
   this is based on the interval instructions given above
   (approx. once every 5 seconds or so) and display that change in the HTML in column 3.

 */

window.Person=Person;

Person.jobs =["teacher","farmer","student","pilot"];
Person.actions = ["sleeping","eating","working"];

function Person() {
    this.name = "";
    this.action = Person.action[Math.floor(Math.random()*Person.actions.length)];
    this.job = Person.job[Math.floor(Math.random()*Person.job.length)];
    this.row = 0;
}



var person = new Person();