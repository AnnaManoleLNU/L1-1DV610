const button = document.getElementById('btn')

console.log(button)

button.addEventListener('click', () => {
  console.log('Button clicked!')
  const input = document.getElementById('name')
  // add the hidden class to the input and button
  input.classList.add('hidden')
  button.classList.add('hidden')

  const greeting = document.getElementById('greet')
  greeting.classList.remove('hidden')
  greeting.innerHTML = `Hello ${input.value}!`

})