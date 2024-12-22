const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

document.addEventListener("DOMContentLoaded", () => {
  // Existing Login Logic
  const loginForm = document.getElementById("login-form");
  loginForm.addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("login-username").value;
    const password = document.getElementById("login-password").value;

    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Login successful!");
          window.location.href = "home.html";
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });

  // New Signup Logic
  const signupForm = document.querySelector(".sign-up-form");
  signupForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.querySelector(
      ".sign-up-form input[placeholder='Username']"
    ).value;
    const email = document.querySelector(
      ".sign-up-form input[placeholder='Email']"
    ).value;
    const password = document.querySelector(
      ".sign-up-form input[placeholder='Password']"
    ).value;
    const confirmPassword = document.querySelector(
      ".sign-up-form input[placeholder='Confirm Password']"
    ).value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const city = document.getElementById("city").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match!");
      return;
    }

    fetch("http://localhost:3000/signup", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, email, password, gender, dob, city }),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          alert("Sign-up successful! You can now log in.");
          document.querySelector("#sign-in-btn").click();
        } else {
          alert(data.message);
        }
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  });
});
