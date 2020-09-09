
const videoElement = document.getElementById('video')
console.log(videoElement)
const button = document.getElementById('button')

// Prompt the user to select media steam, pass to video element, then play

async function selectMediaStream () {
    try { 
       const mediaStream = await navigator.mediaDevices.getDisplayMedia()  /* Media steram API */
       videoElement.srcObject = mediaStream
       videoElement.onloadedmetadata = () => {
           videoElement.play()
       }
    } catch (e) {
        console.log(e)
    }
}

button.addEventListener('click', async () => {
    // Disable Button
    button.disabled = true
    // Start picture-in-picture
    await videoElement.requestPictureInPicture()
    // Reset Button
    button.disabled = false
})

// On load
selectMediaStream()