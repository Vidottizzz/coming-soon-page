const inputEmail = document.querySelector('.inputEmail');
const buttonEmail = document.querySelector('.buttonEmail');
const errMsg = document.querySelector('.err-msg');

let validRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;



buttonEmail.addEventListener('click', validação);


  
function validação() {
    if(inputEmail.value.trim() === '' || !inputEmail.value.match(validRegex)) {
        inputEmail.classList.add('border-red');
        errMsg.classList.remove('hide');
     }
     else {
        inputEmail.classList.remove('border-red');
        errMsg.classList.add('hide');
     }
}
