const inputEmail = document.querySelector('.inputEmail');
const buttonEmail = document.querySelector('.buttonEmail');

buttonEmail.addEventListener('click', validação);

function validação() {
    if(inputEmail.value.trim() === '') {
        inputEmail.classList.add('border-red');
     }
     else {
        inputEmail.classList.remove('border-red');
     }
}
