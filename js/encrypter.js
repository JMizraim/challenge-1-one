import keys from './keys.js';

export class Encrypter {
  #text = '';

  set setText(text) {
    if (typeof text !== 'string') {
      throw new Error('El texto debe ser un string');
    }
    this.#text = text.toLocaleLowerCase();
  }

  encrypt() {
    let encryptedText = this.#text;
    for (const vowel in keys) {
      encryptedText = encryptedText.replace(
        new RegExp(vowel, 'g'),
        keys[vowel]
      );
    }
    return encryptedText;
  }

  decrypt() {
    let dencryptedText = this.#text;
    for (const vowel in keys) {
      dencryptedText = dencryptedText.replace(
        new RegExp(keys[vowel], 'g'),
        vowel
      );
    }
    return dencryptedText;
  }
}
