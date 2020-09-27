const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(arr) {
  let newArr = [];

  if(typeof arr !== 'object') {
    
    return false;

  } else if(!Array.isArray(arr)) { 
    
    return false;

  } else {
    
    for (let elem of arr) {
      if(typeof elem === 'string') {
        newArr.push(elem.trim().slice(0,1).toUpperCase());
      }
    }

    return newArr.sort().join('');

  }

};
