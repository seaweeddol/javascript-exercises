const ftoc = function(temperature) {
  temperature = +((temperature - 32) * 5/9).toFixed(1);
  return temperature;
}

const ctof = function(temperature) {

}

module.exports = {
  ftoc,
  ctof
}
