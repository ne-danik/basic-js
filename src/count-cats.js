const CustomError = require("../extensions/custom-error");

module.exports = function countCats(arr) {
  let result = 0;
  String(arr).split(',').filter(elem => elem === '^^' ? result++: result += 0);
  return result;
};
