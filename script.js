const form = document.querySelector(".form");

const SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbzfV6c0marH4S2Lk6RJjybLTBI8HQ9_9sseuvo55VGPLNhsQ9kUVghgo5IOiXSO0no/exec";

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);

  fetch(SCRIPT_URL, {
    method: "POST",
    body: formData,
    mode: "no-cors"
  });

  alert("Form submitted successfully!");
  form.reset();
});
