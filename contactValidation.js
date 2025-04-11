function validateForm() {
    const name = document.forms["contactForm"]["name"].value.trim();
    const email = document.forms["contactForm"]["email"].value.trim();
    const subject = document.forms["contactForm"]["subject"].value.trim();
    const message = document.forms["contactForm"]["message"].value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (name === "" || email === "" || subject === "" || message === "") {
        alert("Please fill in all fields.");
        return false;
    }

    if (!emailPattern.test(email)) {
        alert("Please enter a valid email address.");
        return false;
    }

    alert("Message sent successfully!");
    return true;
}
