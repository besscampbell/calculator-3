// Start of business logic
function add(num1, num2) {
  return num1 + num2;
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
  return num1 / num2;
};
// End of business logic

// Start of user interface logic
$(document).ready(function() {
  $("form#calculator").submit(function(event) {
    event.preventDefault();
  const num1 = parseInt($("#input1").val());
  const num2 = parseInt($("#input2").val());
  const operator = $("input:radio[name=operator]:checked").val();
  let result;
  if (operator==="add"){
    result = add(num1, num2);
  } else if (operator === "subtract"){
    result = subtract(num1, num2);
  } else if (operator === "multiply"){
    result = multiply(num1, num2);
  } else if (operator === "divide") {
    result = divide(num1, num2);
  }
  $("#output").text(result);
  });
});








// end of code end of page END!!! END!!!!!!!