const d = document;

export const NoText = () => {
  const $NoText = d.createElement('article');
  $NoText.classList.add('encrypter__no-text');
  $NoText.innerHTML = `
    <img src="./assets/images/boy.svg" alt="boy" />
    <h2>Ningún texto fue encontrado</h2>
    <p>Ingrese el texto que desea encriptar o desencriptar</p>
    `;
  return $NoText;
};

export const EncrypterOutput = (result) => {
  const $encrypterOutput = d.createElement('textarea');
  $encrypterOutput.id = 'encrypter-output';
  $encrypterOutput.classList.add('encrypter__textarea');
  $encrypterOutput.style.height = '100%';
  $encrypterOutput.readOnly = true;
  $encrypterOutput.value = result;
  return $encrypterOutput;
};
