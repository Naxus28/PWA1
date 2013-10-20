/*
	PWA1: Goal8: Simple Library App
*/

//Gabriel Ferraz id# 4265628

/*
INSTRUCTIONS:

 In this assignment you will be using JavaScripts Constructor and Prototype to create a simple library.
 You will implement a factory pattern which is the beginnings of a library.
  Once the library is setup, you will change the background color to gray,
  and add a click event that console.logs the link name that was clicked on.


 To obtain full credit on the assignment, the following criteria must be adhered to as well as satisfying
        all items on this assignment's rubric.
 This assignment will require the modification of two js files, main.js and ryu.js (your library file)

 There will be three steps to this assignment:
 1. Create the code needed in both files to setup your initial library.
 2. Add to your program, code that changes the background color to gray.
 3. Add to your program, code that when a link is clicked (using the onclick method), the program console.logs the link.






 Step 2: Add to your program, code that changes the background color to gray:
 Changes to Your ryu.js File:
 Add to the ryu .each function a style that changes the background color of the links to gray. (i.e "this.style.backgroundColor = 'gray';"


 Step 3: Add to your program, code that when a link is clicked (using the “onclick” method), the program console.logs the link:
 Changes to Your ryu.js File:
 Add an "onclick" event to the ryu .each function. When the "onclick" occurs, console.log the "THIS" item.





 */


(function(){
    /*
          Step 1: Setup the Initial easyLibrary:
     I. Setup Your main.js File:
     √ a. Start your file with a self executing function.
     √ b. Create a variable that stores ALL the anchor links in an array. (hint: use querySelectorAll)
     √ c. Create a variable that will store the returned value (or results) from a call to your library.
        Make a call to the ryu library and pass into it an argument. The argument should be the variable
        above that stores ALL the anchor links.
     √ d. Console.log the results that are sent back from the library using the variable from "c." (directly above)
     e. Make a call to your ryu library and pass into it the variable that stores all the anchor links (the variable from "b.", above),
     and runs the .each prototype function that is in your library.
     */


    //this is step b
    var allLinks = document.querySelectorAll("a");
    console.log("this is the array of links "+ allLinks.length);

    MyLibrary(allLinks);




     //this is step d
    for(var i = 0; i<allLinks.length; i++) {
        console.log("this is the element on position " + i + " on the array of links from the DOM " + allLinks[i].href);
    }



    //myLibrary(allLinks);




      // this will console log out the links in the array of links
//    var returnedValue =            //  that is part of the DOM. the .href command will display the links themselves
                                     // without the .href the returned value is the number of elements in the array
                                     //in this case it will return 4





})();  // end wrapper