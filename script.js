// 1. Get the form element
const form = document.querySelector(".form");

// 2. Your Google Apps Script Web App URL
const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfV6c0marH4S2Lk6RJjybLTBI8HQ9_9sseuvo55VGPLNhsQ9kUVghgo5IOiXSO0no/exec";

// 3. Listen for form submission
form.addEventListener("submit", function (event) {
    event.preventDefault(); // stop page reload

    // 4. Collect form data
    const formData = new FormData(form);

    // 5. Convert FormData to a plain object
    const data = {
        prefix: formData.get("prefix"),
        fullName: formData.get("full-name"),
        lastName: formData.get("last-name"),
        address: formData.get("address"),
        email: formData.get("email"),
        phone: formData.get("phone"),
        languageLevel: formData.get("language-level")
    };

    // 6. Send data to Google Apps Script
    fetch(SCRIPT_URL, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
    .then(response => response.json())
    .then(result => {
        if (result.status === "success") {
            alert("Form submitted successfully!");
            form.reset(); // clear the form
        } else {
            alert("Submission failed. Please try again.");
            console.error(result);
        }
    })
    .catch(error => {
        alert("Something went wrong.");
        console.error(error);
    });
});
