// Make sure the script is loaded
console.log("script loaded");

// Select the form
const form = document.querySelector(".form");

// 🔴 IMPORTANT: Paste your ACTUAL Web App URL here
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfV6c0marH4S2Lk6RJjybLTBI8HQ9_9sseuvo55VGPLNhsQ9kUVghgo5IOiXSO0no/exec";

// Safety check
if (!form) {
    console.error("Form not found. Check class name.");
}

// Handle form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // Collect form data
    const formData = new FormData(form);

    // Send data to Google Apps Script
    fetch(SCRIPT_URL, {
        method: "POST",
        body: formData,
        mode: "no-cors" // 🔑 REQUIRED to avoid CORS
    });

    // User feedback (since response is opaque)
    alert("Form submitted successfully!");

    // Reset form
    form.reset();
});
