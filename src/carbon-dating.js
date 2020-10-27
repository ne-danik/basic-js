const CustomError = require("../extensions/custom-error");

const MODERN_ACTIVITY= 15; 
const HALF_LIFE_PERIOD= 5730;

module.exports = function dateSample(sampleActivity) {
  if (typeof sampleActivity === 'string' && !Number(sampleActivity) && sampleActivity > 0 && sampleActivity < MODERN_ACTIVITY ) {
    const k = 0.693 / HALF_LIFE_PERIOD;
    const res = Math.round(Math.log(MODERN_ACTIVITY / +sampleActivity) / k);
    return res;
  } else {
    return false;
  }
};
