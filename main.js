const form = document.querySelector('#form')
const username = document.querySelector('#username')
const email = document.querySelector('#email')
const password = document.querySelector('#password')
const passwordConfirmation = document.querySelector('#password_confirmation')
const container = document.querySelector('.container')

form.addEventListener('submit', (event) => {
  event.preventDefault()
  checkForm()
})

//todo =====================================================
// 'blur' TIPO DE UM 'FOCO' PARECIDO COM 'FOCUS' APARTIR DE QUANDO SE CLICAR,
// NO CASO VAI CHECAR TUDO QUE ESTA NA FUNÇÃO checkInputUsername
// E QUANDO SAIR VAI ATUALIZAR TAMBEM ESSA FUNÇÃO NESSE CASO.
username.addEventListener('blur', () => {
  checkInputUsername()
})
email.addEventListener('blur', () => {
  checkInputEmail()
})
password.addEventListener('blur', () => {
  checkInputPassword()
})
passwordConfirmation.addEventListener('blur', () => {
  checkInputPasswordConfirmation()
})
//todo =====================================================

function checkInputUsername() {
  const usernameValue = username.value // valor do input nome
  if (usernameValue === '') {
    erroInput(username, 'Nome de usuário é obrigatório')
  } else {
    const formItem = username.parentElement // acessa a div pai desse input
    formItem.classList = 'form_content'
  }
}

function checkInputEmail() {
  const emailValue = email.value
  if (emailValue === '') {
    erroInput(email, 'Email é obrigatório')
  } else {
    const formItem = email.parentElement // acessa a div pai desse input
    formItem.className = 'form_content' // vê se tem outra maneira de fazer
  }
}

function checkInputPassword() {
  const passwordValue = password.value
  if (passwordValue === '') {
    erroInput(password, 'Senha é obrigatório')
  } else if (passwordValue.length < 8) {
    erroInput(password, 'Senha precisa ter mais 8 de caracteres')
  } else {
    const formItem = password.parentElement // acessa a div pai desse input
    formItem.className = 'form_content'
  }
}

function checkInputPasswordConfirmation() {
  const passwordValue = password.value
  const passwordConfirmationValue = passwordConfirmation.value

  if (passwordConfirmationValue === '') {
    erroInput(passwordConfirmation, 'Confirme a senha')
  } else if (passwordConfirmationValue !== passwordValue) {
    erroInput(passwordConfirmation, 'Senha não confere com a anterior')
  } else {
    const formItem = passwordConfirmation.parentElement // acessa a div pai desse input
    formItem.className = 'form_content'
  }
}

function checkForm() {
  checkInputUsername()
  checkInputEmail()
  checkInputPassword()
  checkInputPasswordConfirmation()
  const formItems = form.querySelectorAll('.form_content')
  const isValid = [...formItems].every((item) => {
    return item.className === 'form_content'
  })

  if (isValid) {
    alert('Cadastrado com sucesso!')
  } else {
    tremerForm()
    alert('Preencha todos os campos corretamente!')
  }
}

function erroInput(input, message) {
  const formItem = input.parentElement
  const textMessage = formItem.querySelector('a')
  textMessage.innerText = message
  formItem.className = 'form_content error'
}

function tremerForm() {
  container.classList.add('animate__shakeX')
}
