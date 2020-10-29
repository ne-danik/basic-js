const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
  str = String(str);
  
  let result = [],
      additionResult = [],
      repeatTimes = Number(options.repeatTimes) > 0 ? Number(options.repeatTimes) : 1,
      addition = String(options.addition) ? String(options.addition) : '',
      additionRepeatTimes = Number(options.additionRepeatTimes) > 0 ? options.additionRepeatTimes : 1,
      additionSeparator = options.additionSeparator ? options.additionSeparator : '|';
      separator = options.separator ? options.separator : '+';
  
  for (let j = 0; j < additionRepeatTimes; j++) {
    additionResult.push(addition);
  }

  additionResult = additionResult.join(additionSeparator);

  if(additionResult !== 'undefined') {
    for (let i = 0; i < repeatTimes; i++) {
      result.push(str + additionResult);
    } 
  } else {
    for (let i = 0; i < repeatTimes; i++) {
      result.push(str);
    }
  }

  return result.join(separator);
};
  