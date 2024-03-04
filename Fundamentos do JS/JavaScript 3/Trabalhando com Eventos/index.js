function register(ev) {
    const sectionElement = ev.currentTarget.parentNode
    const username = sectionElement.children.username.value
    const password = sectionElement.children.password.value
    const passwordConfirmation = sectionElement.children.passwordConfirmation.value

    if(password === passwordConfirmation) {
        alert("Usuario: " + username + " Cadastrado com sucesso!")
    }else {
        alert("Senhas não conferem!")
    }
}

function removeEventListener() {
    button.removeEventListener('click',register)
    alert("Evento removido com sucesso!")
}


const button = document.getElementById('register-button')
const buttonRemove = document.getElementById('remove-button')

buttonRemove.addEventListener('click', removeEventListener)
button.addEventListener('click', register)