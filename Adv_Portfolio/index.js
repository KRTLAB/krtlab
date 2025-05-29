document.addEventListener("DOMContentLoaded", function(){
  
        const form = document.querySelector('form');
        const formFeedback = document.getElementById('form-feedback');
      
        form.addEventListener('submit', function(event) {
          event.preventDefault();
      
          const name = document.getElementById('name').value.trim();
          const email = document.getElementById('email').value.trim();
          const phone = document.getElementById('phone').value.trim();
          const message = document.getElementById('message').value.trim();
      
          if (!name || !email || !message || !phone) {
            formFeedback.textContent = "Please fill out all fields.";
            formFeedback.style.color = "red";
          } else {
            formFeedback.textContent = "Thank you for your message. We will get back to you shortly.";
            formFeedback.style.color = "green";
      
            form.reset(); 
            fetch('/submit-form', {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                name: name,
                email: email,
                phone: phone,
                message: message,
              }),
            })
            .then(response => response.json())
            .then(data => {
              console.log("Form submitted successfully:", data);
              formFeedback.textContent = "Thank you! Your message has been submitted.";
              formFeedback.style.color = "green";
            })
            .catch(error => {
              console.error("Error submitting form:", error);
              formFeedback.textContent = "Oops! Something went wrong.";
              formFeedback.style.color = "red";
            });
          }
        });
    
});