const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  const repeatTimes = options.repeatTimes || 1;
  const separator = options.separator || '+';
  let addition = options.addition;
  const additionRepeatTimes = options.additionRepeatTimes || 1;
  const additionSeparator = options.additionSeparator || '|';
  if (options.addition === undefined) addition = '';

  const addStr = (addition + additionSeparator).repeat(additionRepeatTimes);
  const result = (str + addStr.substring(0, addStr.length - additionSeparator.length) + separator).repeat(repeatTimes);
  return result.substring(0, result.length - separator.length);
  //done
}

module.exports = {
  repeater
};
