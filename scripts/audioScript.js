// Get the image and audio elements
const tapestryImage = document.getElementById('tapestryImage');
const audio = document.getElementById('audio');

// Add a click event listener to the image
tapestryImage.addEventListener('click', () => {
    if (audio.paused) {
        audio.play(); // Play audio when the image is clicked
        tapestryImage.classList.add('hover-effect'); // Add hover effect
    } else {
        audio.pause(); // Pause audio when the image is clicked again
        audio.currentTime = 0; // Reset the audio to the beginning
        tapestryImage.classList.remove('hover-effect'); // Remove hover effect
    }
});

// Display content on hover
function displayContent(element) {
  const content = element.querySelector('.contentContainer');
  content.style.opacity = 1;  // Show the content
}

// Hide content on hover leave
function hideContent(element) {
  const content = element.querySelector('.contentContainer');
  content.style.opacity = 0;  // Hide the content
}
