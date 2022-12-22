import { Encrypter } from './encrypter.js';
import { NoText, EncrypterOutput } from './components.js';

const d = document;

d.addEventListener('DOMContentLoaded', () => {
  const encrypter = new Encrypter();

  const $btnEncrypt = d.getElementById('btn-encrypt'),
    $btnDecrypt = d.getElementById('btn-decrypt'),
    $encrypterInput = d.getElementById('encrypter-input'),
    $outputContainer = d.getElementById('encrypter-output-container'),
    $btnCopy = d.getElementById('btn-copy'),
    $successMessage = d.getElementById('successMessage');

  $encrypterInput.addEventListener('input', (e) => {
    if (e.target.value === '' && !$btnCopy.classList.contains('hidden')) {
      $btnCopy.classList.add('hidden');
      $outputContainer.replaceChild(
        NoText(),
        $outputContainer.firstElementChild
      );
    }
  });

  $btnEncrypt.addEventListener('click', () => {
    if ($encrypterInput.value === '') {
      alert('Ingrese un texto');
      return;
    }
    encrypter.setText = $encrypterInput.value;
    $outputContainer.replaceChild(
      EncrypterOutput(encrypter.encrypt()),
      $outputContainer.firstElementChild
    );
    $btnCopy.classList.remove('hidden');
  });

  $btnDecrypt.addEventListener('click', (e) => {
    if ($encrypterInput.value === '') {
      alert('Ingrese un texto');
      return;
    }
    encrypter.setText = $encrypterInput.value;
    $outputContainer.replaceChild(
      EncrypterOutput(encrypter.decrypt()),
      $outputContainer.firstElementChild
    );
    $btnCopy.classList.remove('hidden');
  });

  $btnCopy.addEventListener('click', (e) => {
    const $output = d.getElementById('encrypter-output');
    $output.select();
    navigator.clipboard.writeText($output.value).then(() => {
      $successMessage.classList.remove('hidden');
      setTimeout(() => {
        $successMessage.classList.add('hidden');
      }, 2000);
    });
  });
});
