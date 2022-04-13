// commeent header

'use strict'
/**
 * This function calculates area and volume of sphere.
 */
function enterclicked () {
  // input
  const fahrenheit = parseInt(document.getElementById('fahrenheit').value)
  // process
  
  const celsius =  (fahrenheit * 32) * 5/9
  
  // output
  document.getElementById('celsius').innerHTML = '<p>celsius is: ' + celsius.toFixed(2) + ' °C</p>'
}
