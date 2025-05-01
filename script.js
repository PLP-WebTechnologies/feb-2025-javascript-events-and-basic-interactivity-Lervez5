// This is a simple JavaScript file that adds interactivity to the webpage.
// It includes event listeners for button clicks, hover effects, and form validation.
document.getElementById("clickBtn").addEventListener("click", () => {
    alert("Button clicked!");
  });
  // For the color change on button click
  document.getElementById("colorBtn").addEventListener("click", () => {
    document.getElementById("colorBtn").style.backgroundColor =
      "#" + Math.floor(Math.random() * 16777215).toString(16);
  });
  // For the hover effect on the boxes in the page
  const hoverBox = document.getElementById("hoverBox");
  hoverBox.addEventListener("mouseenter", () => {
    hoverBox.classList.add("hovered");
  });
  hoverBox.addEventListener("mouseleave", () => {
    hoverBox.classList.remove("hovered");
  });
  
  document.addEventListener("keydown", (e) => {
    console.log(`Key pressed: ${e.key}`);
  });
  
  document.getElementById("clickBtn").addEventListener("dblclick", () => {
    alert("Double click detected!");
  });
  // For the tab functionality in case one of the tabs is clicked
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      document.querySelectorAll(".tab-content").forEach((c) => (c.className = "tab-content"));
      document.getElementById(tab.dataset.target).classList.add("active");
    });
  });
  // For the signup form fields validation
  document.getElementById("signupForm").addEventListener("input", (e) => {
    const password = document.getElementById("password").value;
    const feedback = document.getElementById("formFeedback");
    if (password.length < 8) {
      feedback.textContent = "Password must be at least 8 characters.";
      feedback.style.color = "red";
    } else {
      feedback.textContent = "Looks good!";
      feedback.style.color = "lime";
    }
  });

  // for the signup form validation
  document.getElementById("signupForm").addEventListener("submit", (e) => {
    e.preventDefault();
    const password = document.getElementById("password").value;
    if (password.length < 8) {
      alert("Password too short. Must be at least 8 characters.");
      return;
    }
    alert("Form submitted successfully!");
  });
  