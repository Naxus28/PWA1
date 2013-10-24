/**
 * Created with JetBrains WebStorm.
 * User: gabrielferraz
 * Date: 10/23/13
 * Time: 10:30 PM
 * To change this template use File | Settings | File Templates.
 */

console.log("started");

/*

 You will refactor your Mid Term files using the following updates documented below. The items you are adding / changing
 to this refactoring process are as follows:

 1. add and use a constructor,

 2. add and use a prototype:

 (Same as the Mid-Term) If you don't already have one, create an empty students array.

 DONE - (NEW for the final) Replace the student objects you created in the Mid Term, with a call to the constructor. The
 constructor will create each student object, you will then need to programmatically insert the student object into the
 student's array. An example of your call to the constuctor can be as follows:
 new Student('James Bond', '123 Test Dr', 'Orlando', 'Florida', [2.5, 4.0, 2.2], new Date());
 */

 var arrayStudents =[];

 function Student(n,as,ac,ast,grades,date){

 this.student = {};
 this.student.name = n;
 this.student.address={};
 this.student.address.street = as;
 this.student.address.city = ac;
 this.student.address.state = ast;
 this.student.GPA = [grades];
 this.student.date = date;

// this.GPA[i] = gradeOne;
// this.GPA[j] = gradeTwo;
// this.GPA[k] = gradeThree;
 //arrayStudents.GPA.push(gradeOne,gradeTwo,gradeThree);

 }


 var newStudent = new Student("Gabriel","Goldenrod","Orlando","Florida",[3,3,3],new Date());
 var oldStudent = new Student("Bob","Caliber Bend","Winter Park","Florida",[3.3,2.7,3],new Date());

arrayStudents.push(newStudent,oldStudent);



 function students(studentInstance){
     console.log("This is the student's name: " +studentInstance.student.name);
     console.log("This is "+studentInstance.student.name+ "'s street address: "+ studentInstance.student.address.street);
     console.log("This is "+studentInstance.student.name+ "'s city: "+ studentInstance.student.address.city);
     console.log("This is "+studentInstance.student.name+ "'s state: "+ studentInstance.student.address.state);
     console.log("This is "+studentInstance.student.name+ "'s GPA: "+ studentInstance.student.GPA);
     console.log("This is the date: "+ studentInstance.student.date);
 }
 //students(newStudent);


 students(arrayStudents[0]);
 console.log("============================");
 console.log( );
 students(arrayStudents[1]);

//var date = new Date ();

var month = date.getMonth() + 1; // it is 0 based index so we have to add one
var nDate = date.getDate();//  day of the month // not 0 based//actual day of the month
var year = date.getFullYear();
var months = ["1", "2", "3", "4", "5", "6", "7","8", "9", "10", "11", "12"];




/*


 DONE - (NEW for the final) Just like the Mid Term, you will first populate the array of students with at least 2 objects of
 information. Each student object will need to be created using the constructor.


 (Same as the Mid-Term) Console.log ALL the information in ALL objects on 4 lines.
 1. name
 2. address
 3. GPA
 4. date
 Example:
 Name: James Bond
 Address: 123 Test Dr, Orlando, Florida
 GPA: [2.5, 3.5, 4.0]
 Date: 05/02/13



 (NEW for the final) Add a new object (using a constructor) to the array of student objects above. Use the same technique
 used above to add the new object.
 (Same as the Mid-Term) Console.log ALL the information in ALL objects on 4 lines. This should display with the new
 object that was just added directly above. Use the same output display as the previous console.log
 (NEW for the final) Before displaying the “Average GPA” using the innerHTML from the Mid Term, a prototype method
 will be used to calculate each student’s Average GPA and return the results.
 There should not be any duplicate code in the main.js or the studentObjects.js file. If there is, you will need to refractor
 the code by creating a function for the duplicate code and then call the function when it is needed.
 All global variables should be located at the very top of the program.
 All function calls should be at the bottom of the program.
 Make sure to put comments throughout your code.
 Extra Credit:
 Create a function that will validate the “basic” GPA format ‘#.##’. This function will need to run before the first console.log
 displays the information. If a GPA does not meet the format, just stop the program and display a console.log error message.
 You may NOT use regular expression for this extra credit.

 */

//console.log("This is GPA 1 in the obj constructor " + newStudent.GPA[1] + " must be 3");
//console.log("This is a new student "+ newStudent);


//console.log("This is the new student's name: " +arrayStudents[0].student.address);
//console.log("This is the old student's name: " +arrayStudents[1].student.address);
//console.log("This is the array of students "+ arrayStudents);
//console.log("This is the array of students position 0: "+ arrayStudents[0]);
//console.log("This is the array of students: "+arrayStudents);
//console.log("testing array 0 ",arrayStudents[0]);
//console.log("testing array 1 ",arrayStudents[1]);
//console.log(arrayStudents[1].student.address.street);