document.addEventListener("DOMContentLoaded", () => {
    const ticketForm = document.getElementById("ticket-form");
    const ticketStatus = document.getElementById("ticket-status");
  
    ticketForm.addEventListener("submit", function (event) {
      event.preventDefault();
  
      // Gather form data
      const name = document.getElementById("patient-name").value;
      const email = document.getElementById("email").value;
      const issueType = document.getElementById("issue-type").value;
      const description = document.getElementById("description").value;
  
      // Simple validation (in practice, more robust validation should be used)
      if (name && email && issueType && description) {
        ticketStatus.textContent =
          "Your ticket has been submitted successfully. We will get back to you soon.";
        ticketStatus.classList.add("success");
  
        // Clear form fields
        ticketForm.reset();
      } else {
        ticketStatus.textContent = "Please fill out all fields.";
        ticketStatus.classList.add("error");
      }
    });
  });
  