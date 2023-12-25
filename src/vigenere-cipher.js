const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {

  constructor(direction = true) {
    this.alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    this.direction = direction;
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    if (this.direction) {
      key = key.toUpperCase();
      message = message.toUpperCase();
    } else {
      key = key.toUpperCase();
      message = message.split('').reverse().join('');
    }
    let result = '';
    let tmp = 0;
    for (let i = 0; i < message.length; i++) {
      let current = message[i];
      if (i >= message.length) current = message[i % message.length];
      if (this.alphabet.includes(current)) {
        const indexA = this.alphabet.indexOf(current);
        let indexK = this.alphabet.indexOf(key[tmp >= key.length ? tmp % key.length : tmp]);
        const char = this.alphabet[(this.alphabet.length + (indexA + indexK)) % this.alphabet.length];
        result += char;
        tmp++;
      } else {
        result += current;
      }
    }
    return result;
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    if (this.direction) {
      message = message.toUpperCase();
      key = key.toUpperCase();
    } else {
      message = message.split('').reverse().join('').toUpperCase();
      key = key.toUpperCase();
    }
    let result = '';
    let tmp = 0;
    for (let i = 0; i < Math.max(message.length); i++) {
      let current = message[i];
      if (i >= message.length) current = message[i % message.length];
      if (this.alphabet.includes(current)) {
        const indexA = this.alphabet.indexOf(current);
        let indexK = this.alphabet.indexOf(key[tmp >= key.length ? tmp % key.length : tmp]);
        const char = this.alphabet[(this.alphabet.length + indexA - indexK) % this.alphabet.length];
        result += char;
        tmp++;
      } else {
        result += current;
      }
    }
    return result;
  }
}

module.exports = {
  VigenereCipheringMachine
};
