function convertToCelsius(fahrenheit) {
  return (fahrenheit - 32) * 5/9;
}
function describeTemperature (fahrenheit) {
  const c = convertToCelsius (fahrenheit);
  
    if (c < 0) {
      return "very cold";
    }
    else if (c < 20) {
      return "cold";
        }
    else if (c < 30) {
      return "warm";
    }
    else if (c < 40) {
      return "hot";
    }
    else {
      return "very hot";
    }
}

let fahrenheit = prompt ("Enter a temperature in Fahrenheit:");

fahrenheit = Number (fahrenheit);
let celsius = convertToCelsius (fahrenheit);
let desciption = describeTemperature (celsius);

alert (`${fahrenheit} fahrenheit is ${celsius} celcius - that feels ${desciption}.`);
  