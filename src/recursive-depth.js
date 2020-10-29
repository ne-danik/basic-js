const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let count = 1;
    
    if(Array.isArray(arr)) {
      arr.forEach((elem) => {
        count = Math.max(count, this.calculateDepth(elem) + 1);
      });
      return count;
    } else {
      return 0;
    }
  }
};