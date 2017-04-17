function getRangeValue(num) {
  document.getElementById('number').value = num;
}

function addDigit(num) {
  $val = document.getElementById('digit').value;
  document.getElementById('digit').value =  $val + num;
}
