const message = document.getElementById('message')
const button = document.getElementById('btn')
const input = document.getElementById('name')
const greeting = document.getElementById('greet')

// Function to handle the event
function handleEvent() {
  // add the hidden class to the message, input, and button
  message.classList.add('hidden')
  input.classList.add('hidden')
  button.classList.add('hidden')

  // remove the hidden class from the greeting
  greeting.classList.remove('hidden')

  // append the name to the greeting
  const name = input.value
  greeting.textContent += ` ${name}!`
}

// Event listener for Enter key press
input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault();
    handleEvent() // Call the event handling function
  }
})

// Event listener for button click
button.addEventListener('click', function () {
  handleEvent() // Call the event handling function
})