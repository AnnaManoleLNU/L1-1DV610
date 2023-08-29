// Selectors for the elements, also in order of appearance.
const welcomeMessage = document.getElementById('welcome-message')
const nameInput = document.getElementById('name')
const submitButton = document.getElementById('submit-button')
const greeting = document.getElementById('greeting')
const anotherImageButton = document.getElementById('another-image')
const anotherUserButton = document.getElementById('another-user')

// Function to generate a random image from the Unsplash API
async function generateImage() {
  // Get the image from the API, tagged with nature and 1920x1080 resolution.
  const response = await fetch('https://source.unsplash.com/featured/1920x1080/?nature')
  return response.url
}

// Function to handle the event
async function handleEvent() {
  // add the hidden class to the message, name input, and button
  welcomeMessage.classList.add('hidden')
  nameInput.classList.add('hidden')
  submitButton.classList.add('hidden')

  // remove the hidden class from the greeting
  greeting.classList.remove('hidden')

  // append the name to the greeting
  const name = nameInput.value
  greeting.textContent += ` ${name}! Here is your image of the day!`

  // append the image to the div
  const image = document.createElement('img')
  image.src = await generateImage()
  const div = document.getElementById('unsplash-image')
  div.appendChild(image)

  // show the 2 buttons to either generate a new image or reset the page
  anotherImageButton.classList.remove('hidden')
  anotherUserButton.classList.remove('hidden')
}


// Event listener for Enter key press
nameInput.addEventListener('keypress', function (event) {
  if (event.key === 'Enter') {
    event.preventDefault()
    handleEvent() // Call the event handling function
  }
})

// Event listener for button click
submitButton.addEventListener('click', function () {
  handleEvent() // Call the event handling function
})

// Event listener for another image button click
anotherImageButton.addEventListener('click', async function () {
  const imageDiv = document.getElementById('unsplash-image')

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
anotherUserButton.addEventListener('click', function () {
  location.reload()
})