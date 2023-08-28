const message = document.getElementById('message')
const button = document.getElementById('btn')
const input = document.getElementById('name')
const greeting = document.getElementById('greet')
const anotherImage = document.getElementById('anotherImg')
const anotherUser = document.getElementById('anotherUser')

// Function to generate a random image from the Unsplash API
async function generateImage() {
  // Get the image from the API
  // only get images that are horizontal
  const response = await fetch('https://source.unsplash.com/featured/1920x1080/?nature')
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
  greeting.textContent += ` ${name}! Here is your image of the day!`

  // append the image to the div
  const image = document.createElement('img')
  image.src = await generateImage()
  const div = document.getElementById('imagegoeshere')
  div.appendChild(image)

  // show the 2 buttons to either generate a new image or reset the page
  anotherImage.classList.remove('hidden')
  anotherUser.classList.remove('hidden')
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

// Event listener for another image button click
anotherImage.addEventListener('click', async function () {
  const imageDiv = document.getElementById('imagegoeshere')
  
  // Remove the current image
  while (imageDiv.firstChild) {
    imageDiv.removeChild(imageDiv.firstChild)
  }
  
  // Generate and append a new image
  const newImage = document.createElement('img')
  newImage.src = await generateImage()
  imageDiv.appendChild(newImage)
})

// Event listener for another user button click
anotherUser.addEventListener('click', function () {
  location.reload()
})