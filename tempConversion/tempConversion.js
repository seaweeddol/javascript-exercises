const ftoc = function(temperature) {
  temperature = +((temperature - 32) * 5/9).toFixed(1);
  return temperature;
}

const ctof = function(temperature) {
  temperature = +(temperature * (9/5) + 32).toFixed(1);
  return temperature;
}

module.exports = {
  ftoc,
  ctof
}
