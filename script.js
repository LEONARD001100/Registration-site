const form = document.querySelector(".form");

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycbzfV6c0marH4S2Lk6RJjybLTBI8HQ9_9sseuvo55VGPLNhsQ9kUVghgo5IOiXSO0no/exec";

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const submitBtn = form.querySelector("button");
  submitBtn.disabled = true;
  submitBtn.innerText = "Submitting...";

  try {
    const formData = new FormData(form);

    const response = await fetch(SCRIPT_URL, {
      method: "POST",
      body: formData
    });

    const result = await response.text();
    console.log("Server response:", result);

    if (result.includes("Success")) {
      alert("✅ Form submitted successfully!");
      form.reset();
    } else {
      alert("⚠️ Submission failed. Try again.");
    }

  } catch (error) {
    console.error("Error:", error);
    alert("❌ Network error. Check connection.");
  }

  submitBtn.disabled = false;
  submitBtn.innerText = "Submit";
});
