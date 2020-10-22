// Start of business logic
function add(num1, num2) {
  return num1 + num2;
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 - num2;
};

function divide(num1, num2) {
  return num1 / num2;
};
// End of business logic

// Start of user interface logic
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
  const num1 = parseInt($("#add1").val());
  const num2 = parseInt($("#add2").val());
  const result = add(num1, num2);
  $("#output").text(result);
  });
});








// end of code end of page END!!! END!!!!!!!