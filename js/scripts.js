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
    //If
    if (counter % 15 === 0) {
      results.push(str3);
    }
    else if (counter % 5 === 0) {
      results.push(str2);
    }
    else if (counter % 3 === 0) {
      results.push(str1);
    } else {
      results.push(counter);
    }
  }
  return results;

}

//UI Logic

$(document).ready(function() {
  $("form#ping-pong").submit(function(event) {
    event.preventDefault();


    let userNum = parseInt($("#userInput").val());

    let display = pingPong(userNum);

    display.forEach(function(number) {
      $("#outPut").append("<li>" + number + "</li>");
    });
  });
});
