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
  constructor(isDirect = true) {
    this.isDirect = isDirect;
  }

  encrypt(text = '', key = '') {
    text = text.trim().toUpperCase();
    key = key.trim().toUpperCase();
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    for (let i = 0, j = 0; i < text.length; i++) {
      let letter = text[i];
      if (/^[A-Z]$/.test(letter)) {
        let shift = key[j % key.length].charCodeAt(0) - 65;
        let encryptedLetter = String.fromCharCode((letter.charCodeAt(0) + shift - 65) % 26 + 65);
        result += encryptedLetter;
        j++;
      } else {
        result += letter;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }

  decrypt(text = '', key = '') {
    text = text.trim().toUpperCase();
    key = key.trim().toUpperCase();
    if (!text || !key) {
      throw new Error('Incorrect arguments!');
    }

    let result = '';
    for (let i = 0, j = 0; i < text.length; i++) {
      let letter = text[i];
      if (/^[A-Z]$/.test(letter)) {
        let shift = key[j % key.length].charCodeAt(0) - 65;
        let decryptedLetter = String.fromCharCode((letter.charCodeAt(0) - shift - 65 + 26) % 26 + 65);
        result += decryptedLetter;
        j++;
      } else {
        result += letter;
      }
    }

    return this.isDirect ? result : result.split('').reverse().join('');
  }
}



module.exports = {
  VigenereCipheringMachine
};
