const textBox = document.getElementById("textBox");
const toFahrenheit = document.getElementById("toFahrenheit");
const toCelsius = document.getElementById("toCelsius");
const submitBtn = document.getElementById("submitBtn");
const result = document.getElementById("result");

let temp;

function convert(){

  if(toFahrenheit.checked){
    temp = Number(textBox.value);
    temp = (9/5 * temp) + 32;
    result.textContent = `${temp.toFixed(1)} °F`;
  }
  else if(toCelsius.checked){
    temp = Number(textBox.value);
    temp = (5/9) * (temp - 32);
    result.textContent = `${temp.toFixed(1)} °C`;
  }
  else{
    result.textContent = "select a unit";
  }
}