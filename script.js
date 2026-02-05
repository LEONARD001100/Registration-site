const form = document.querySelector(".form");

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfV6c0marH4S2Lk6RJjybLTBI8HQ9_9sseuvo55VGPLNhsQ9kUVghgo5IOiXSO0no/exec";

form.addEventListener("submit", function (event) {
    event.preventDefault();

    const formData = new FormData(form);

    fetch(SCRIPT_URL, {
        method: "POST",
        body: formData
    })
    .then(res => res.text())
    .then(data => {
        console.log(data);   // helpful for debugging
        alert("Submitted successfully");
        form.reset();        // reset ONLY here
    })
    .catch(err => {
        alert("Error submitting form");
        console.error(err);
    });
});
