//Backend Logic

let pingPong = function(num) {

  let results = [];

  let str1 = "ping";
  let str2 = "pong";
  let str3 = "pingpong";

  for (let counter = 1; counter <= num; counter++) {
    if (counter % 3 === 0) {
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
