/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/23/13
 * Time: 10:30 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("started");



/*
 Extra Credit:
 Create a function that will validate the “basic” GPA format ‘#.##’. This function will need to run before the first console.log
 displays the information. If a GPA does not meet the format, just stop the program and display a console.log error message.
 You may NOT use regular expression for this extra credit.

 */

//VARIABLES AT THE TOP
 var i = 0;   //used to increment my function "display" - see at the bottom

 var button = document.querySelector(".buttonred");  //stores the class "button" into the "button" var

//variables that calculate the date
 var month;
 var nDate;
 var year;
 var months;

 //Instantiation of the prototype - they are held in global variables
 var newStudent = new Student("Gabriel","Goldenrod","Orlando","Florida",[3,3,3],dates());
 var oldStudent = new Student("Bob","Caliber Bend","Winter Park","Florida",[3.2,2.4,3],dates());
 var youngStudent = new Student("Carl","Main","Gainesville","Florida",[3.5,2.6,3.3],dates());

 //This is the array of students
 var arrayStudents =[];

 arrayStudents.push(newStudent,oldStudent,youngStudent); //pushes students constructed via prototype into the array


//CONSOLE LOGS OF STUDENT'S INFORMATION
console.log( );
console.log("============================");
console.log("THIS IS THE FIRST STUDENT");
students(arrayStudents[0]);
console.log("============================");
console.log( );

console.log("============================");
console.log("THIS IS THE SECOND STUDENT");
students(arrayStudents[1]);
console.log("============================");

console.log( );
console.log("============================");
console.log("THIS IS THE THIRD STUDENT");
students(arrayStudents[2]);
console.log("============================");


//PROTOTYPE  - calculates GPA avg
Student.prototype.avgGpa = function(arrayNumber){

    var result = 0;
    for(var i=0; i<arrayNumber.student.GPA.length; i++){

        //console.log("object length: " + arrayNumber.student.GPA.length);

        result += arrayNumber.student.GPA[i];

    }
    var gpaAverage = result/arrayNumber.student.GPA.length;
    return  gpaAverage.toFixed(2)

};

//THIS ARE THE AVG GPAs OF ALL STUDENTS
console.log( );
console.log("===============================");
console.log("THESE ARE THE AVG GPAs OF ALL STUDENTS");
console.log("This is "+arrayStudents[0].student.name+"'s"+ " GPA av: "+ newStudent.avgGpa(arrayStudents[0]));
console.log("This is "+arrayStudents[1].student.name+"'s"+ " GPA avg: "+ newStudent.avgGpa(arrayStudents[1]));
console.log("This is "+arrayStudents[2].student.name+"'s"+ " GPA avg: "+ newStudent.avgGpa(arrayStudents[2]));
console.log("===============================");


//BELOW IS THE DISPLAY SECTION
document.querySelector("#name").innerHTML ="Name: "+ arrayStudents[0].student.name;
document.querySelector("#address").innerHTML =  "Address: "+ arrayStudents[0].student.address.street +", "+ arrayStudents[0].student.address.city + ", " + arrayStudents[0].student.address.state;
document.querySelector("#gpa").innerHTML = "GPA: "+ arrayStudents[0].student.GPA[0]+", "+arrayStudents[0].student.GPA[0]+ ", "+ arrayStudents[0].student.GPA[0] ;
document.querySelector("#gpaavg").innerHTML ="Average GPA: "+ newStudent.avgGpa(arrayStudents[0]);
document.querySelector("#date").innerHTML= "Date: " +arrayStudents[0].student.date;


button.addEventListener("click", onClick);

//ALL FUNCTIONS AT THE BOTTOM

function displayData(){

    if(i<arrayStudents.length-1){
        document.querySelector("#name").innerHTML ="Name: "+ arrayStudents[i+1].student.name;
        document.querySelector("#address").innerHTML =  "Address: "+ arrayStudents[i+1].student.address.street +", "+ arrayStudents[i+1].student.address.city + ", " + arrayStudents[i+1].student.address.state;
        document.querySelector("#gpa").innerHTML = "GPA: "+ arrayStudents[i+1].student.GPA[i+1]+", "+arrayStudents[i+1].student.GPA[i+1]+ ", "+ arrayStudents[i+1].student.GPA[i+1] ;
        document.querySelector("#gpaavg").innerHTML ="Average GPA: "+ newStudent.avgGpa(arrayStudents[i+1]);
        document.querySelector("#date").innerHTML= "Date: " +arrayStudents[i+1].student.date;
        i++

    } else {
        button.innerHTML = "DONE!!!";
        button.removeEventListener("click", onClick);
        }
}


function onClick() {
    displayData();
}

function Student(n,as,ac,ast,grades,date){

    this.student = {};
    this.student.name = n;
    this.student.address={};
    this.student.address.street = as;
    this.student.address.city = ac;
    this.student.address.state = ast;
    this.student.GPA = grades;
    this.student.date = date;
}

console.log("This is the GPA of student 0: "+newStudent.student.GPA[0]);
console.log("This is the GPA of student 0: "+newStudent.student.GPA[1]);
console.log("This is the GPA of student 0: "+newStudent.student.GPA[2]);


function dates(){
    var date = new Date();
    month = date.getMonth() + 1; // it is 0 based index so we have to add one
    nDate = date.getDate();//  day of the month // not 0 based//actual day of the month
    year = date.getFullYear();
    months = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11", "12"];
    return months[month] + "/" + nDate + "/" + year;
}

function students(studentInstance){
    console.log("This is the student's name: " +studentInstance.student.name);
    console.log("This is "+studentInstance.student.name+ "'s address: "+ studentInstance.student.address.street+", "+studentInstance.student.address.city+", "+studentInstance.student.address.state);
    console.log("This is "+studentInstance.student.name+ "'s GPA: "+ studentInstance.student.GPA);
    console.log("This is the date: "+ studentInstance.student.date);
}


