const btn = document.querySelector('button')
const inputName = document.querySelector("input[name=name]")
const inputSurname = document.querySelector("input[name=surname]")
const inputPhone = document.querySelector('input[name=tel]')

const textName = document.getElementById('name')
const textSurname = document.getElementById('surname')
const textPhone = document.getElementById('phone')

const myFunction = () => {
  textName.textContent = inputName.value
  textSurname.textContent = inputSurname.value
  textPhone.textContent = inputPhone.value
}


btn.addEventListener('click', myFunction)