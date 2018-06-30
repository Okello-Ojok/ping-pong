//Backend Logic
// Create a function
let pingPong = function(num) {

//Declare an empty array to store numbers as they iterate through
  let results = [];

//Declare variables to hold the strings ping, pong and pingpong
  let str1 = "ping";     //This string will be returned when number is divisible by 3
  let str2 = "pong";     //This string will be returned when number is divisible by 5
  let str3 = "pingpong"; //This string will be returned when number is divisible by 15

//Make a loop to iterate through from 1 to the number entered by the user.

  for (let counter = 1; counter <= num; counter++) {
    //Condition to test if number is divisible by 15 and print pingpong which is stored in variable str3
    if (counter % 15 === 0) {
      results.push(str3);
    }
    //Condition to test if number is divisible by 5 and print pong which is stored in variable str2
    else if (counter % 5 === 0) {
      results.push(str2);
    }
    //Condition to test if number is divisible by 3 and print ping which is stored in variable str1
    else if (counter % 3 === 0) {
      results.push(str1);
    }
    //If all above conditions are false, print the number itself
    else {
      results.push(counter);
    }
  }
  return results;    //Return the array now populated with values from all the above conditions

}

//UI Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {        //Add submit method to the form
    event.preventDefault();                           //Prevent default behaviour of form

    //Get user input from the form and assign it to a variable
    let userNum = parseInt($("#userInput").val());
    
    //Call the function and pass in the user input above as an argument and assign this to a variable
    let display = pingPong(userNum);
    //Since the variable holding the function output is an array, loop through each item with forEach
    display.forEach(function(number) {                      //and print each number as a list by appending it.
      $("#outPut").append("<li>" + number + "</li>");
    });
  });
});
