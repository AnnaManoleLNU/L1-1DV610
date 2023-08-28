const message = document.getElementById('message')
const button = document.getElementById('btn')
const input = document.getElementById('name')
const greeting = document.getElementById('greet')

button.addEventListener('click', () => {
  // add the hidden class to the message, input and button
  message.classList.add('hidden')
  input.classList.add('hidden')
  button.classList.add('hidden')
  
  // remove the hidden class from the greeting
  greeting.classList.remove('hidden')

  // append the name to the greeting
  const name = input.value
  greeting.textContent += ` ${name}!`
  
})