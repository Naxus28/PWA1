/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/16/13
 * Time: 9:47 PM
 * To change this template use File | Settings | File Templates.
 */

(function(){
    console.log("in the function");

    var studentsArray  = ["Gabriel","Diogo", "Kareem","Julian","Antonio","James","Eddie","Scott"];

    var studentsGrades = Math.floor(Math.random()*101);


    var newArray = [];

    function Students(n, g) {
        this.name = n;
        this.grades = g;

    }



console.log("this is a new student "+ newStudent);

    function create(){
    var newStudent = new Students("r",5);

    var i = 0;

   if(i<studentsArray.length){


       newArray.push(newStudent);
       console.log("Name "+ newArray[i]);
       console.log("Grade "+ studentsGrades);
       i++;

   }

    }


    var buttonOne = document.querySelector(".butn1");

        buttonOne.addEventListener("click", onClick);

    function onClick(){
        create()
    }

})();
