// Start of business logic
const add = function(num1, num2) {
  return num1 + num2;
};

const subtract = function(num1, num2) {
  return num1 - num2;
};

const multiply = function(num1, num2) {
  return num1 - num2;
};

const divide = function(num1, num2) {
  return num1 / num2;
};
// End of business lgic

// Start of user interface logic
$(document).ready(function() {
  $("#form.add").submit(function(event) {
  const num1 = parseInt($("#add1").val());
  const num2 = parseInt($("#add2").val());
  alert(add(num1, num2));
  });
});








// end of code end of page END!!! END!!!!!!!