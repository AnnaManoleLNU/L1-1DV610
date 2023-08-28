const message = document.getElementById('message')
const button = document.getElementById('btn')
const input = document.getElementById('name')
const greeting = document.getElementById('greet')

// Function to generate a random image from the Unsplash API
async function generateImage() {
  // Get the image from the API
  // only get images that are horizontal
  const response = await fetch('https://source.unsplash.com/featured/1920x1080/?nature,minimalism')
  return response.url
}

// Function to handle the event
async function handleEvent() {
  // add the hidden class to the message, input, and button
  message.classList.add('hidden')
  input.classList.add('hidden')
  button.classList.add('hidden')

  // remove the hidden class from the greeting
  greeting.classList.remove('hidden')

  // append the name to the greeting
  const name = input.value
  greeting.textContent += ` ${name}! Here is your picture of the day!`

  // append the image to the div
  const image = document.createElement('img')
  image.src = await generateImage()
  const div = document.getElementById('imagegoeshere')
  div.appendChild(image)
}


// Event listener for Enter key press
input.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    handleEvent() // Call the event handling function
  }
})

// Event listener for button click
button.addEventListener('click', function () {
  handleEvent() // Call the event handling function
})