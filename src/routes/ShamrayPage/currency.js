var rubInput = document.getElementById('rubInput');
var dollarOutput = document.getElementById('dollarOutput');
var diff = 65;

function changeCurrency() {
   dollarOutput.value = rubInput.value / diff;
}
