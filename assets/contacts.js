document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("status");

  form.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = {
      name: document.getElementById("name").value,
      email: document.getElementById("email").value,
      message: document.getElementById("message").value,
    };

    try {
      const res = await fetch("assets/contact.js", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        status.textContent = "Message sent successfully!";
        status.style.color = "green";
        form.reset();
      } else {
        const data = await res.json();
        status.textContent = data.error || "An error occurred.";
        status.style.color = "red";
      }
    } catch (err) {
      status.textContent = "Network error.";
      status.style.color = "red";
    }
  });
});
