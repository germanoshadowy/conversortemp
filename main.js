const celsiusInput = document.getElementById("celsius");
const fahrenheitInput = document.getElementById("fahrenheit");
const kelvinInput = document.getElementById("kelvin");
const rankineInput = document.getElementById("rankine");

const inputs = document.getElementsByClassName("inputs");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celsius":
        fahrenheitInput.value = (value * 1.8) + 32;
        kelvinInput.value = value + 273.15;
        rankineInput.value = (value + 491.67) * 9 / 5;
        break;
      case "fahrenheit":
        celsiusInput.value = (value - 32) / 1.8;
        kelvinInput.value = ((value - 32) / 1.8) + 273.15;
        rankineInput.value = value + 459, 69;
        break;
      case "kelvin":
        celsiusInput.value = value - 273.15;
        fahrenheitInput.value = ((value - 273.15)*1.8)+32;
        rankineInput.value = value*1.8;
        break;
      case "rankine":
        celsiusInput.value = (value-491.67)*5/9;
        fahrenheitInput.value = value-459.7;
        kelvinInput.value = value*5/9;
        break;
    }
  })
}