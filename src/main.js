import $ from "jquery";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import DateCalculator from '../src/calculator.js';

$(document).ready(function() {
  $("form#formOne").submit(function(event) {
    event.preventDefault();
    const inputtedYear = parseInt($("input#year").val());
    const inputtedMonth = parseInt($("input#month").val());
    const inputtedDay = parseInt($("input#day").val());
    const allInput = new DateCalculator(inputtedYear, inputtedMonth, inputtedDay);
    const output = allInput.checkDate(); 
    console.log(output);
    
    $("#result").text(output);
  });
});

