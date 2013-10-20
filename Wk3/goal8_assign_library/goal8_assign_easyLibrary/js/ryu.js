/*
	PWA1: Goal8:  Simple Library


 II. Setup Your RYU Library File:
 √ a. Your ryu.js file includes a template of a library. There are two sections, the Constructor and the Prototype.
 √ b. Setup the Constructor and include a parameter that will be used throughout the library.
 The main.js file will be passing an argument to this library.





 */




//this is stp c
var MyLibrary = function(e){
     var arrayOfLinks =[];   //stores the links from the node
    for(var i = 0; i < e.length; i++){
        arrayOfLinks.push(e[i]);
        e[i].onclick = function(){
            console.log(this.href);

//            return false;          //this will return break out of the loop
        }
    }

    return new MyLibrary.prototype.init(e);     //this returns the values created below by the function init
                                                // which is part of the MyLibrary prototype
};

// √ c. Setup the Prototype section. Make the necessary changes to the template to ensure the
//Constructor can use the Prototype.

MyLibrary.prototype = {

//d. Create within the Prototype section a function named "init", and another called "each"

// e. The "init" function will accept a parameter from the Constructor.

    init: function(e){

        elements.[]

        //I have no idea what the init function does

    },        //the prototype adds the function .init to the constructor


// Set the Prototypes ".elements" property to equal the parameter being passed into the "init" function.

                                // function init creates an array of elements
    elements: e[],        //this will be the array of links



// f. Setup the "each" function with a "FOR" loop that when runs,
// console.log's the Prototype's "this.elements" property.
// The property item within the array needs to console.log based on the index number of the "FOR" loop.

    each: function(e){
        for(var i = 0; i<e.length; i++ ){
            console.log(this.elements[i])
        }
    }


};

//MyLibrary.prototype.elements =

//console.log("this is the array elements of the prototype "+ MyLibrary.prototype.elements);

 // end prototype



MyLibrary.prototype.init.prototype = MyLibrary.prototype;    // MyLibrary.prototype is an object
                                                             // and init is also an object, which also has a prototype
                                                             // this line makes the init prototype, equal the MyLibrary
                                                              // prototype. This means that whatever MyLibrary prototype is
                                                              //init.prototype will be the same