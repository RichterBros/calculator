// Business (or back-end) logic:

var add = function(number1, number2) {
    return number1 + number2;
    };
    
    //var number1 = parseInt(prompt("Enter a number:"));
    //var number2 = parseInt(prompt("Enter another number:"));
    
    
    //alert (add(number1,number2));


    
    
var subtract = function(number1, number2) {
    return number1 - number2;
    };
    
    //var number1 = parseInt(prompt("Enter a number:"));
    //var number2 = parseInt(prompt("Enter another number:"));
    
    
    //alert (subtract(number1,number2));


var multiply = function(number1, number2) {
    return number1 * number2;
    };
    
    //var number1 = parseInt(prompt("Enter a number:"));
    //var number2 = parseInt(prompt("Enter another number:"));
    
    
    //alert (multiply(number1,number2));


var divide = function(number1, number2) {
    return number1 / number2;
    };
    
    //var number1 = parseInt(prompt("Enter a number:"));
    //var number2 = parseInt(prompt("Enter another number:"));
    
    
    //alert (divide(number1,number2));

    // Everything below this line is user interface (or front-end) logic:

    $(document).ready(function() {
      //var number1 = parseInt(prompt("Enter a number:"));
      //var number2 = parseInt(prompt("Enter another number:"));
    
      //alert(add(number1, number2));
      
      $("form#add").submit(function(event) {
        event.preventDefault();
      
      
      var number1 = parseInt($("#add1").val());
      var number2 = parseInt($("#add2").val());
      //alert(add(number1, number2));
      var result = add(number1, number2);
      $("#output").text(result);

    
    
      });
    });