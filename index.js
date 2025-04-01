// Wait for the DOMContentLoaded event to be fired
document.addEventListener("DOMContentLoaded", function() {
    // Find the paragraph with the id="text"
    const paragraph = document.getElementById("text");
  
    // Modify the text content of the paragraph
    paragraph.textContent = "This is really cool!";
  });
  