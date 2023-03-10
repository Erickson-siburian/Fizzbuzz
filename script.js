const getResult = function () {
  let number = document.getElementById("multiple").value;
  let display = document.getElementById("display");
  display.innerHTML = "<div>" + pengecekan(number) + "</div>";
  console.log(number);
};

function pengecekan(i) {
  let hasil = 0;
  if (i % 3 == 0 && i % 5 == 0) {
    hasil = "FizzBuzz";
  } else if (i % 3 == 0) {
    hasil = "Fizz";
  } else if (i % 5 == 0) {
    hasil = "Buzz";
  } else {
    hasil = i;
  }
  return hasil;
}
