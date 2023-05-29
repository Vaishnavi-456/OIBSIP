document.getElementById("convert-btn").addEventListener("click", convertTemperature);

function convertTemperature() {
  var temperatureInput = document.getElementById("temperature").value;
  var unitInput = document.getElementById("unit").value;
  var resultDisplay = document.getElementById("result");

  // Check if temperatureInput is a valid number
  if (!isNumeric(temperatureInput)) {
    resultDisplay.innerText = "Invalid input. Please enter a valid number.";
    return;
  }

  var temperature = parseFloat(temperatureInput);
  var convertedTemperature;
  var resultUnit;

  // Perform temperature conversion based on the selected unit
  switch (unitInput) {
    case "celsius":
      convertedTemperature = (temperature - 32) * 5 / 9;
      resultUnit = "°C";
      break;
    case "fahrenheit":
      convertedTemperature = (temperature * 9 / 5) + 32;
      resultUnit = "°F";
      break;
    case "kelvin":
      convertedTemperature = temperature + 273.15;
      resultUnit = "K";
      break;
    default:
      resultDisplay.innerText = "Invalid unit. Please select a valid unit.";
      return;
  }

  resultDisplay.innerText = "Converted temperature: " + convertedTemperature.toFixed(2) + resultUnit;
}

function isNumeric(value) {
  return /^-?\d+(?:\.\d+)?$/.test(value);
}
