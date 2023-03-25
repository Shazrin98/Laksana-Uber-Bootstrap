// Get the form element
const form = document.querySelector('#contact-form');

// Add a submit event listener to the form
form.addEventListener('submit', async (event) => {
  event.preventDefault(); // prevent the form from submitting normally

  // Get the form data
  const formData = new FormData(form);

  try {
    // Send an AJAX request to the backend server
    const response = await fetch('/api/contact', {
      method: 'POST',
      body: formData
    });

    // Parse the response as JSON
    const data = await response.json();

    // Display a success message to the user
    alert(data.message);
    
    // Reset the form
    form.reset();
  } catch (error) {
    // Display an error message to the user
    alert('An error occurred while submitting the form. Please try again later.');
  }
});

