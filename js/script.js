const name = document.getElementById('name')
const name2 = document.getElementById('name2')
const password = document.getElementById('password')
const password2 = document.getElementById('password2')
const form = document.getElementById('form')
const errorElement =document.getElementById('error')


form.addEventListener('submit', (e) => {
  let messages = []
  if (name.value === '' || name.value == null) {
    messages.push('First name is required')
  }

  if (name2.value === ''|| name2.value == null) {
    messages.push('Last name is required')
  }
  
  
  
    if (messages.length > 0) {
    e.preventDefault()
    errorElement.innerText = messages.join(', ')

  }
})