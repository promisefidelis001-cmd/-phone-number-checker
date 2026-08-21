const phoneInput = document.getElementById("phone");
const checkButton = document.getElementById("checkButton");
const results = document.getElementById("results");
const message = document.getElementById("message");

checkButton.addEventListener("click", checkNumber);

phoneInput.addEventListener("keydown", function(event) {
  if (event.key === "Enter") {
    checkNumber();
  }
});

function checkNumber() {

  const phone = phoneInput.value.trim();

  message.textContent = "";
  results.classList.add("hidden");

  if (!phone) {
    message.textContent = "Please enter a phone number.";
    return;
  }

  const digits = phone.replace(/\D/g, "");

  if (digits.length < 7) {
    message.textContent = "Please enter a valid phone number.";
    return;
  }

  checkButton.disabled = true;
  checkButton.textContent = "Checking...";

  setTimeout(() => {

    document.getElementById("number").textContent = phone;

    document.getElementById("country").textContent =
      phone.startsWith("+234") ? "Nigeria 🇳🇬" : "Checking...";

    document.getElementById("location").textContent =
      phone.startsWith("+234") ? "Nigeria" : "Available after lookup";

    document.getElementById("carrier").textContent =
      "Available after API lookup";

    document.getElementById("lineType").textContent =
      "Mobile";

    results.classList.remove("hidden");

    checkButton.disabled = false;
    checkButton.textContent = "Check";

  }, 900);
}
