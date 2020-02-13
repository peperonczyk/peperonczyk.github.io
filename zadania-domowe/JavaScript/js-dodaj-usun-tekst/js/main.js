const btnAdd = document.getElementById('dodaj')
const btnRemove = document.getElementById('usun')
const text = document.getElementById('tekst')
const addText = () => {
  text.textContent = "Akademia 108"
}
const removeText = () => {
  text.textContent = ""
}
btnRemove.addEventListener('click', removeText)
btnAdd.addEventListener('click', addText)