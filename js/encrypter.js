import keys from './keys.js';

export class Encrypter {
  #text = '';

  constructor() {}

  set setText(text) {
    if (typeof text !== 'string') {
      throw new Error('El texto debe ser un string');
    }
    this.#text = text.toLocaleLowerCase();
  }

  encrypt() {
    const characterArray = this.#text.split('');
    const encryptedArray = characterArray.map((character) => {
      switch (character) {
        case 'e':
          return 'enter';
        case 'i':
          return 'imes';
        case 'a':
          return 'ai';
        case 'o':
          return 'ober';
        case 'u':
          return 'ufat';
        default:
          return character;
      }
    });
    return encryptedArray.join('');
  }

  decrypt() {
    let dencryptedText = this.#text;
    for (const vowel in keys) {
      dencryptedText = dencryptedText.replace(keys[vowel], vowel);
    }
    return dencryptedText;
  }
}
