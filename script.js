document.getElementById("feedbackForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const message = document.getElementById("message").value.trim();

    let errorMessage = "";
    if (!name) {
        errorMessage += "Please fill out the Name field.\n";
    }
    if (!email) {
        errorMessage += "Please fill out the Email field.\n";
    }
    if (!message) {
        errorMessage += "Please fill out the Feedback field.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
    } else {
        alert("Thank you for your feedback!");

    }
});


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

const emailInput = document.getElementById("email");
emailInput.addEventListener("blur", function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value)) {
        alert("Please enter a valid email address.");
    }
});

const dateElement = document.createElement("div");
dateElement.id = "currentDate";
dateElement.style.textAlign = "center";
dateElement.style.marginTop = "10px";
document.querySelector("footer").appendChild(dateElement);

setInterval(() => {
    const now = new Date();
    dateElement.innerText = "Current Date and Time: " + now.toLocaleString();
}, 1000);

const toggleThemeButton = document.getElementById("toggleTheme");

toggleThemeButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
});

